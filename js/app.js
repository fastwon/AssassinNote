(function () {
  "use strict";

  const STORAGE_KEY = "assassinnote.data.v1";
  const THEME_KEY = "assassinnote.theme";
  const DEFAULTS = window.AN_DEFAULT_DATA;
  const GAMES = DEFAULTS.games;

  const ERAS = [
    { id: "isu", name: "선대 문명", range: "기원전 1만 년 이전", max: -10000 },
    { id: "ancient", name: "고대", range: "~ 서기 500년", max: 500 },
    { id: "medieval", name: "중세", range: "500 ~ 1400년", max: 1400 },
    { id: "renaissance", name: "르네상스와 전국 시대", range: "1400 ~ 1600년", max: 1600 },
    { id: "colonial", name: "대항해와 혁명의 시대", range: "1600 ~ 1800년", max: 1800 },
    { id: "industrial", name: "근대", range: "1800 ~ 1945년", max: 1945 },
    { id: "present", name: "현대", range: "1945년 ~", max: Infinity }
  ];

  const app = document.getElementById("app");

  // ---------- 유틸 ----------
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const enc = encodeURIComponent;
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const byKo = (a, b) => a.localeCompare(b, "ko");

  function toast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function formatYear(ev) {
    const y = ev.year;
    let s = y < 0 ? `기원전 ${(-y).toLocaleString("ko-KR")}년` : `${y}년`;
    if (ev.approx) s += " 무렵";
    return s;
  }

  // 영상으로 확인되지 않은 연도(yearVerified가 true가 아님)에는 '추정' 표시를 붙인다
  const DATE_GUESS_TIP = "연도는 영상에서 확인했지만, 월·일은 영상에 나오지 않아 다른 자료로 추정했어요.";
  const YEAR_GUESS_TIP = "영상에서 확인되지 않은 연도예요. 연도가 나오는 영상이 생기면 출처를 붙이고 확인 표시로 바꿔 주세요.";
  function yearHtml(ev) {
    const date = formatMonthDay(ev);
    const base = esc(date ? `${formatYear(ev)} ${date}` : formatYear(ev));
    if (!ev.yearVerified) return `${base} <span class="year-guess" title="${YEAR_GUESS_TIP}">(추정)</span>`;
    // 연도는 확인됐지만 월·일은 영상 밖 자료로 추정한 경우
    return ev.dateGuess ? `${base} <span class="year-guess" title="${DATE_GUESS_TIP}">(날짜 추정)</span>` : base;
  }

  // month, day는 영상에서 확인했을 때만 넣는다 (둘 다 선택)
  function formatMonthDay(ev) {
    if (!ev.month) return "";
    return ev.day ? `${ev.month}월 ${ev.day}일` : `${ev.month}월`;
  }

  const eraOf = (year) => ERAS.find((e) => year < e.max) || ERAS[ERAS.length - 1];
  const gameById = (id) => GAMES.find((g) => g.id === id);

  // ---------- 저장소 ----------
  // 브라우저에는 사용자가 편집한 항목(edited)과 지운 기본 항목(deleted)을 함께 저장한다.
  // 그래서 data.js에 새 기본 데이터가 추가·수정되면, 사용자가 손대지 않은 항목은 자동으로 최신 내용이 반영된다.
  const freshData = () => ({ events: clone(DEFAULTS.events), articles: clone(DEFAULTS.articles), edited: [], deleted: [] });

  function mergeWithDefaults(saved) {
    const edited = new Set(saved.edited || []);
    const deleted = new Set(saved.deleted || []);
    const merge = (defaults, mine) => {
      const mineById = new Map(mine.map((x) => [x.id, x]));
      const defaultIds = new Set(defaults.map((x) => x.id));
      const out = defaults.filter((d) => !deleted.has(d.id))
        .map((d) => (edited.has(d.id) && mineById.has(d.id) ? mineById.get(d.id) : clone(d)));
      // 기본 데이터에 없는 항목은 사용자가 만들거나 고친 것만 남긴다 (data.js에서 지운 기본 항목은 함께 사라진다)
      return out.concat(mine.filter((x) => !defaultIds.has(x.id) && edited.has(x.id)));
    };
    return {
      events: merge(DEFAULTS.events, saved.events),
      articles: merge(DEFAULTS.articles, saved.articles),
      edited: [...edited],
      deleted: [...deleted]
    };
  }

  const store = {
    data: null,
    load() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const d = JSON.parse(raw);
          if (isValidData(d)) {
            // 예전 형식(edited 없음)으로 저장된 데이터는 모두 사용자가 편집한 것으로 간주한다
            if (!Array.isArray(d.edited)) d.edited = d.events.concat(d.articles).map((x) => x.id);
            this.data = mergeWithDefaults(d);
            return;
          }
        }
      } catch (e) { /* 저장소 사용 불가 시 기본 데이터 사용 */ }
      this.data = freshData();
    },
    markEdited(id) {
      if (!this.data.edited.includes(id)) this.data.edited.push(id);
    },
    markDeleted(id) {
      this.data.edited = this.data.edited.filter((x) => x !== id);
      const isDefault = DEFAULTS.events.some((x) => x.id === id) || DEFAULTS.articles.some((x) => x.id === id);
      if (isDefault && !this.data.deleted.includes(id)) this.data.deleted.push(id);
    },
    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        return true;
      } catch (e) {
        toast("브라우저에 저장하지 못했어요. 데이터 페이지에서 내보내기로 백업하세요.");
        return false;
      }
    },
    reset() {
      this.data = freshData();
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* 무시 */ }
    }
  };

  function isValidData(d) {
    return d && Array.isArray(d.events) && Array.isArray(d.articles) &&
      d.events.every((e) => e && typeof e.id === "string" && typeof e.year === "number" && typeof e.title === "string") &&
      d.articles.every((a) => a && typeof a.id === "string" && typeof a.title === "string");
  }

  const articles = () => store.data.articles;
  const events = () => store.data.events;
  const findArticle = (ref) => articles().find((a) => a.id === ref) ||
    articles().find((a) => a.title === ref || (a.aliases || []).includes(ref));
  const sortedEvents = () => events().map((e, i) => [e, i])
    .sort((a, b) => a[0].year - b[0].year || a[1] - b[1]).map((x) => x[0]);

  // ---------- 위키 문법 ----------
  function wikiLink(ref, label) {
    const a = findArticle(ref);
    const text = esc(label || (a ? a.title : ref));
    if (a) return `<a href="#/wiki/${enc(a.id)}">${text}</a>`;
    return `<a class="missing" href="#/new/article?id=${enc(ref)}" title="아직 없는 문서예요. 눌러서 만들 수 있어요.">${text}</a>`;
  }

  function inline(text) {
    const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    const re = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g;
    let out = "", last = 0, m;
    while ((m = re.exec(text))) {
      out += fmt(text.slice(last, m.index)) + wikiLink(m[1].trim(), m[2] && m[2].trim());
      last = re.lastIndex;
    }
    return out + fmt(text.slice(last));
  }

  const plain = (text) => String(text || "").replace(/\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g, (m, r, l) => l || r).replace(/\*\*/g, "");

  function renderBody(src) {
    const lines = String(src || "").replace(/\r/g, "").split("\n");
    const toc = [];
    let html = "", para = [], list = [];
    const flushPara = () => { if (para.length) { html += `<p>${para.map(inline).join("<br>")}</p>`; para = []; } };
    const flushList = () => { if (list.length) { html += `<ul>${list.map((l) => `<li>${inline(l)}</li>`).join("")}</ul>`; list = []; } };
    for (const line of lines) {
      const t = line.trim();
      if (t.startsWith("## ")) {
        flushPara(); flushList();
        const id = `s-${toc.length}`;
        toc.push({ id, title: t.slice(3) });
        html += `<h2 id="${id}">${inline(t.slice(3))}</h2>`;
      } else if (/^[-*] /.test(t)) {
        flushPara(); list.push(t.slice(2));
      } else if (t.startsWith("> ")) {
        flushPara(); flushList();
        html += `<blockquote>${inline(t.slice(2))}</blockquote>`;
      } else if (!t) {
        flushPara(); flushList();
      } else {
        flushList(); para.push(t);
      }
    }
    flushPara(); flushList();
    return { html, toc };
  }

  // ---------- 영상 출처 ----------
  // source: { url: "https://youtu.be/영상ID", t: 초 }
  const VIDEOS = DEFAULTS.videos || [];

  function fmtTime(sec) {
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
  }

  function youtubeId(url) {
    const m = String(url).match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/);
    return m ? m[1] : null;
  }

  function sourceHref(src) {
    const id = youtubeId(src.url);
    const base = id ? `https://youtu.be/${id}` : src.url;
    return src.t ? `${base}${base.includes("?") ? "&" : "?"}t=${src.t}` : base;
  }

  function videoTitle(src) {
    const id = youtubeId(src.url);
    const v = VIDEOS.find((x) => youtubeId(x.url) === id);
    return v ? v.title : "유튜브 영상";
  }

  function sourceLinks(sources) {
    // end가 있으면 장면 범위: 링크는 시작 시각, 마우스를 올리면 "시작 ~ 끝"
    return (sources || []).map((s) => {
      const span = s.t ? fmtTime(s.t) + (s.end ? " ~ " + fmtTime(s.end) : "") : "";
      return `<a class="src-link" href="${esc(sourceHref(s))}" target="_blank" rel="noopener" title="${esc(videoTitle(s))}${span ? " · " + span : ""}">▶ ${s.t ? fmtTime(s.t) : "영상"}</a>`;
    }).join("");
  }

  function groupByVideo(sources) {
    const groups = new Map();
    for (const s of sources) {
      const key = youtubeId(s.url) || s.url;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(s);
    }
    return [...groups.values()];
  }

  const sourcesToText = (sources) => (sources || []).map((s) => {
    const id = youtubeId(s.url);
    return `${id ? `https://youtu.be/${id}` : s.url}${s.t ? " " + fmtTime(s.t) + (s.end ? "~" + fmtTime(s.end) : "") : ""}`;
  }).join("\n");

  // 한 줄에 하나: "링크 12:34" 또는 "https://youtu.be/xxx?t=754"
  function parseSources(text) {
    const out = [], bad = [];
    for (const line of String(text || "").split("\n").map((l) => l.trim()).filter(Boolean)) {
      const urlMatch = line.match(/https?:\/\/\S+/);
      if (!urlMatch) { bad.push(line); continue; }
      const url = urlMatch[0];
      let t = 0, end = 0;
      const rest = line.replace(url, "").trim();
      const toSec = (h, m, sec) => (+(h || 0)) * 3600 + (+m) * 60 + (+sec);
      // "12:34" 또는 장면 범위 "12:34~13:05"
      const clock = rest.match(/^(?:(\d+):)?(\d{1,2}):(\d{2})(?:\s*~\s*(?:(\d+):)?(\d{1,2}):(\d{2}))?$/);
      if (clock) {
        t = toSec(clock[1], clock[2], clock[3]);
        if (clock[5] !== undefined) end = toSec(clock[4], clock[5], clock[6]);
        if (end && end <= t) { bad.push(line); continue; }
      } else {
        const tp = url.match(/[?&]t=(?:(\d+)h)?(?:(\d+)m)?(\d+)s?/);
        if (tp) t = (+(tp[1] || 0)) * 3600 + (+(tp[2] || 0)) * 60 + (+tp[3]);
        else if (rest) { bad.push(line); continue; }
      }
      const id = youtubeId(url);
      const src = t ? { url: id ? `https://youtu.be/${id}` : url.replace(/[?&]t=[^&]*/, ""), t } : { url: id ? `https://youtu.be/${id}` : url };
      if (end) src.end = end;
      out.push(src);
    }
    return { sources: out, bad };
  }

  function refersTo(text, a) {
    const keys = [a.id, a.title].map(escRe).join("|");
    return new RegExp(`\\[\\[\\s*(?:${keys})\\s*(?:\\||\\]\\])`).test(text || "");
  }

  // ---------- 라우터 ----------
  function parseHash() {
    const hash = location.hash.slice(1) || "/";
    const [path, qs] = hash.split("?");
    return {
      parts: path.split("/").filter(Boolean).map(decodeURIComponent),
      params: new URLSearchParams(qs || "")
    };
  }

  function route() {
    const { parts, params } = parseHash();
    const [a, b, c] = parts;
    document.querySelectorAll("[data-nav]").forEach((el) => {
      const key = el.dataset.nav;
      el.classList.toggle("active", a === key || (key === "timeline" && b === "event") || (key === "wiki" && b === "article"));
    });

    if (!a) viewHome();
    else if (a === "timeline") viewTimeline(params);
    else if (a === "wiki" && !b) viewWikiList(params);
    else if (a === "wiki") viewArticle(b);
    else if ((a === "new" || a === "edit") && b === "article") viewArticleForm(a === "edit" ? c : null, params);
    else if ((a === "new" || a === "edit") && b === "event") viewEventForm(a === "edit" ? c : null, params);
    else if (a === "data") viewData();
    else viewNotFound();

    if (!params.get("focus")) window.scrollTo(0, 0);
  }

  function setTitle(t) { document.title = t ? `${t} · AssassinNote` : "AssassinNote"; }

  // ---------- 홈 ----------
  function viewHome() {
    setTitle("");
    const usedGames = new Set(events().map((e) => e.game).filter(Boolean));
    const cats = countBy(articles(), (a) => a.category || "기타");
    const eraCounts = countBy(events(), (e) => eraOf(e.year).id);

    app.innerHTML = `
      <section class="card hero">
        <h1>어쌔신 크리드 노트</h1>
        <blockquote>“Nothing is true, everything is permitted.”</blockquote>
        <p class="muted">직접 고른 영상에서 확인한 내용만으로 연표와 위키를 정리해요. 모든 항목에 출처 영상 시각이 붙어 있어요.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#/timeline">연표 보기</a>
          <a class="btn" href="#/wiki">위키 둘러보기</a>
          <button class="btn" type="button" id="randomBtn">무작위 문서</button>
        </div>
      </section>

      <div class="stats">
        <div class="card stat"><div class="num">${events().length}</div><div class="label">연표 사건</div></div>
        <div class="card stat"><div class="num">${articles().length}</div><div class="label">위키 문서</div></div>
        <div class="card stat"><div class="num">${usedGames.size}</div><div class="label">다루는 작품</div></div>
      </div>

      <h2 class="section-title">시대별로 보기</h2>
      <div class="wiki-grid">
        ${ERAS.map((e) => `
          <a class="card wiki-card" href="#/timeline?era=${e.id}">
            <span class="tag neutral">${esc(e.range)}</span>
            <h3>${esc(e.name)}</h3>
            <p>사건 ${eraCounts[e.id] || 0}개</p>
          </a>`).join("")}
      </div>

      <h2 class="section-title">분류별 문서</h2>
      <div class="wiki-grid">
        ${Object.keys(cats).sort(byKo).map((c) => `
          <a class="card wiki-card" href="#/wiki?cat=${enc(c)}">
            <span class="tag">${esc(c)}</span>
            <h3>${cats[c]}개 문서</h3>
            <p>${esc(articles().filter((a) => (a.category || "기타") === c).slice(0, 4).map((a) => a.title).join(", "))}</p>
          </a>`).join("")}
      </div>
    `;
    document.getElementById("randomBtn").addEventListener("click", () => {
      const list = articles();
      if (!list.length) return toast("문서가 아직 없어요.");
      location.hash = `#/wiki/${enc(list[Math.floor(Math.random() * list.length)].id)}`;
    });
  }

  function countBy(list, fn) {
    return list.reduce((acc, x) => { const k = fn(x); acc[k] = (acc[k] || 0) + 1; return acc; }, {});
  }

  // ---------- 연표 ----------
  function viewTimeline(params) {
    setTitle("연표");
    const state = { q: params.get("q") || "", era: params.get("era") || "all", game: params.get("game") || "" };
    const focus = params.get("focus");
    const usedGames = GAMES.filter((g) => events().some((e) => e.game === g.id));

    app.innerHTML = `
      <div class="page-head">
        <div>
          <h1>연표</h1>
          <p>게임 속 세계의 역사를 시간 순서대로 정리했어요.</p>
        </div>
        <a class="btn primary" href="#/new/event">＋ 사건 추가</a>
      </div>
      <div class="card toolbar">
        <div class="toolbar-row">
          <input type="search" id="tlSearch" placeholder="사건 검색 (예: 알타이어, 템플 기사단)" value="${esc(state.q)}">
          <select id="tlGame" aria-label="작품 필터">
            <option value="">모든 작품</option>
            ${usedGames.map((g) => `<option value="${g.id}" ${g.id === state.game ? "selected" : ""}>${esc(g.title)}</option>`).join("")}
          </select>
        </div>
        <div class="chips" id="tlEras">
          <button type="button" class="chip ${state.era === "all" ? "on" : ""}" data-era="all">전체</button>
          ${ERAS.map((e) => `<button type="button" class="chip ${state.era === e.id ? "on" : ""}" data-era="${e.id}">${esc(e.name)}</button>`).join("")}
        </div>
      </div>
      <div class="tl-layout">
        <div id="tlList"></div>
        <nav class="year-nav" id="yearNav" aria-label="연도로 이동"></nav>
      </div>
    `;

    const listEl = document.getElementById("tlList");
    const navEl = document.getElementById("yearNav");
    const syncUrl = () => {
      const p = new URLSearchParams();
      if (state.q) p.set("q", state.q);
      if (state.era !== "all") p.set("era", state.era);
      if (state.game) p.set("game", state.game);
      const qs = p.toString();
      history.replaceState(null, "", `#/timeline${qs ? "?" + qs : ""}`);
    };

    const renderList = () => {
      const q = state.q.trim().toLowerCase();
      const list = sortedEvents().filter((e) => {
        if (state.era !== "all" && eraOf(e.year).id !== state.era) return false;
        if (state.game && e.game !== state.game) return false;
        if (q) {
          const g = gameById(e.game);
          const linked = (e.links || []).map((id) => { const a = findArticle(id); return a ? a.title : id; }).join(" ");
          const hay = `${e.title} ${plain(e.summary)} ${g ? g.title : ""} ${linked} ${formatYear(e)}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });
      if (!list.length) {
        listEl.innerHTML = `<p class="empty">조건에 맞는 사건이 없어요.</p>`;
        navEl.innerHTML = "";
        return;
      }
      let html = "", curEra = null, curYear = null;
      const groups = []; // [{ era, years: [{ year, count, guess }] }]
      for (const e of list) {
        const era = eraOf(e.year);
        if (era !== curEra) {
          curEra = era;
          groups.push({ era, years: [] });
          html += `<h2 class="era-head" id="era-${era.id}" data-era="${era.id}">${esc(era.name)}<small>${esc(era.range)}</small></h2>`;
        }
        // 그 해의 첫 사건 앞에 연도 표지를 둔다 (오른쪽 연도 바에서 이곳으로 이동)
        const years = groups[groups.length - 1].years;
        if (e.year !== curYear) {
          curYear = e.year;
          years.push({ year: e.year, count: 0, guess: !e.yearVerified });
          html += `<div class="year-anchor" id="year-${e.year}" data-year="${e.year}" data-era="${era.id}"></div>`;
        }
        years[years.length - 1].count++;
        html += eventCard(e);
      }
      listEl.innerHTML = `<div class="timeline">${html}</div>`;
      // 연도 바: 시대별로 묶고, 지금 보고 있는 시대만 펼친다
      navEl.innerHTML = groups.map((g) => `
        <div class="year-nav-group" data-era="${g.era.id}">
          <button type="button" class="year-nav-era" data-era-jump="${g.era.id}" title="${esc(g.era.range)} · 연도 ${g.years.length}개">
            <span class="year-nav-era-name">${esc(g.era.name)}</span>
            <span class="year-nav-era-count">${g.years.length}</span>
          </button>
          <div class="year-nav-years">${g.years.map((y) => `
            <button type="button" class="year-nav-item" data-year="${y.year}" title="${esc(formatYear({ year: y.year }))} · 사건 ${y.count}개${y.guess ? " · 추정 연도" : ""}">
              <span class="year-nav-dot"></span>
              <span class="year-nav-label">${esc(y.year < 0 ? `BC ${(-y.year).toLocaleString("ko-KR")}` : String(y.year))}</span>
            </button>`).join("")}
          </div>
        </div>`).join("");
      updateYearNav();
    };

    navEl.addEventListener("click", (ev) => {
      const eraBtn = ev.target.closest("[data-era-jump]");
      const btn = ev.target.closest("[data-year]");
      const anchor = eraBtn ? document.getElementById(`era-${eraBtn.dataset.eraJump}`)
        : btn ? document.getElementById(`year-${btn.dataset.year}`) : null;
      if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("tlSearch").addEventListener("input", (ev) => { state.q = ev.target.value; renderList(); syncUrl(); });
    document.getElementById("tlGame").addEventListener("change", (ev) => { state.game = ev.target.value; renderList(); syncUrl(); });
    document.getElementById("tlEras").addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-era]");
      if (!btn) return;
      state.era = btn.dataset.era;
      document.querySelectorAll("#tlEras .chip").forEach((c) => c.classList.toggle("on", c === btn));
      renderList(); syncUrl();
    });

    renderList();

    if (focus) {
      const el = document.getElementById(`ev-card-${focus}`);
      if (el) {
        el.scrollIntoView({ block: "center" });
        el.style.borderColor = "var(--accent)";
      }
      syncUrl();
    }
  }

  // 연도 바에서 지금 보고 있는 연도를 강조하고 그 시대를 펼친다 (화면 위쪽을 지난 마지막 연도 표지 기준)
  function updateYearNav() {
    const nav = document.getElementById("yearNav");
    if (!nav) return;
    const anchors = [...document.querySelectorAll(".year-anchor")];
    if (!anchors.length) return;
    let current = anchors[0];
    for (const a of anchors) {
      if (a.getBoundingClientRect().top <= 120) current = a;
      else break;
    }
    nav.querySelectorAll(".year-nav-item").forEach((b) => b.classList.toggle("on", b.dataset.year === current.dataset.year));
    nav.querySelectorAll(".year-nav-group").forEach((g) => g.classList.toggle("open", g.dataset.era === current.dataset.era));
  }
  window.addEventListener("scroll", updateYearNav, { passive: true });

  function eventCard(e) {
    const g = gameById(e.game);
    const links = (e.links || []).map((id) => {
      const a = findArticle(id);
      return a ? `<a href="#/wiki/${enc(a.id)}">${esc(a.title)}</a>` : `<a class="missing" href="#/new/article?id=${enc(id)}">${esc(id)}</a>`;
    }).join("");
    return `
      <article class="card event" id="ev-card-${esc(e.id)}">
        <div class="event-top">
          <span class="event-year">${yearHtml(e)}</span>
          ${g ? `<span class="tag">${esc(g.title)}</span>` : ""}
        </div>
        <h3>${esc(e.title)}</h3>
        <p>${inline(e.summary || "")}</p>
        <div class="event-foot">
          <div class="event-links">${links}${sourceLinks(e.sources)}</div>
          <a class="btn small" href="#/edit/event/${enc(e.id)}">편집</a>
        </div>
      </article>`;
  }

  // ---------- 위키 목록 ----------
  function viewWikiList(params) {
    setTitle("위키");
    const state = { q: params.get("q") || "", cat: params.get("cat") || "" };
    const cats = [...new Set(articles().map((a) => a.category || "기타"))].sort(byKo);
    document.getElementById("topSearchInput").value = state.q;

    app.innerHTML = `
      <div class="page-head">
        <div>
          <h1>위키</h1>
          <p>영상에서 확인한 조직, 인물, 장소, 기술을 정리한 문서예요.</p>
        </div>
        <a class="btn primary" href="#/new/article">＋ 새 문서</a>
      </div>
      <div class="card toolbar">
        <div class="toolbar-row">
          <input type="search" id="wkSearch" placeholder="제목, 별칭, 내용으로 검색" value="${esc(state.q)}">
        </div>
        <div class="chips" id="wkCats">
          <button type="button" class="chip ${!state.cat ? "on" : ""}" data-cat="">전체</button>
          ${cats.map((c) => `<button type="button" class="chip ${state.cat === c ? "on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
        </div>
      </div>
      <div id="wkList"></div>
    `;

    const listEl = document.getElementById("wkList");
    const syncUrl = () => {
      const p = new URLSearchParams();
      if (state.q) p.set("q", state.q);
      if (state.cat) p.set("cat", state.cat);
      const qs = p.toString();
      history.replaceState(null, "", `#/wiki${qs ? "?" + qs : ""}`);
    };
    const renderList = () => {
      const q = state.q.trim().toLowerCase();
      const scored = articles().filter((a) => !state.cat || (a.category || "기타") === state.cat).map((a) => {
        if (!q) return [a, 0];
        const title = `${a.title} ${(a.aliases || []).join(" ")}`.toLowerCase();
        if (title.includes(q)) return [a, 2];
        if (`${plain(a.summary)} ${plain(a.body)}`.toLowerCase().includes(q)) return [a, 1];
        return [a, -1];
      }).filter((x) => x[1] >= 0).sort((x, y) => y[1] - x[1] || byKo(x[0].title, y[0].title));

      if (!scored.length) {
        listEl.innerHTML = `<div class="empty"><p>검색 결과가 없어요.</p>${q ? `<a class="btn" href="#/new/article?title=${enc(state.q.trim())}">“${esc(state.q.trim())}” 문서 만들기</a>` : ""}</div>`;
        return;
      }
      listEl.innerHTML = `<div class="wiki-grid">${scored.map(([a]) => `
        <a class="card wiki-card" href="#/wiki/${enc(a.id)}">
          <span class="tag">${esc(a.category || "기타")}</span>
          <h3>${esc(a.title)}</h3>
          <p>${esc(plain(a.summary))}</p>
        </a>`).join("")}</div>`;
    };

    document.getElementById("wkSearch").addEventListener("input", (ev) => { state.q = ev.target.value; renderList(); syncUrl(); });
    document.getElementById("wkCats").addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-cat]");
      if (!btn) return;
      state.cat = btn.dataset.cat;
      document.querySelectorAll("#wkCats .chip").forEach((c) => c.classList.toggle("on", c === btn));
      renderList(); syncUrl();
    });
    renderList();
  }

  // ---------- 문서 ----------
  function viewArticle(id) {
    const a = findArticle(id);
    if (!a) {
      setTitle("없는 문서");
      app.innerHTML = `
        <div class="card article">
          <h1>“${esc(id)}” 문서가 없어요</h1>
          <p class="muted">아직 아무도 쓰지 않은 문서예요. 직접 만들어 볼까요?</p>
          <a class="btn primary" href="#/new/article?id=${enc(id)}">문서 만들기</a>
        </div>`;
      return;
    }
    setTitle(a.title);
    const { html, toc } = renderBody(a.body);
    const related = sortedEvents().filter((e) => (e.links || []).includes(a.id) || refersTo(e.summary, a));
    const backlinks = articles().filter((o) => o.id !== a.id && (refersTo(o.body, a) || refersTo(o.summary, a)))
      .sort((x, y) => byKo(x.title, y.title));

    app.innerHTML = `
      <div class="article-layout">
        <article class="card article">
          <div class="breadcrumb"><a href="#/wiki">위키</a> › <a href="#/wiki?cat=${enc(a.category || "기타")}">${esc(a.category || "기타")}</a></div>
          <h1>${esc(a.title)}</h1>
          ${(a.aliases || []).length ? `<div class="aliases">다른 이름: ${a.aliases.map(esc).join(", ")}</div>` : ""}
          ${a.summary ? `<p class="lead">${inline(a.summary)}</p>` : ""}
          ${toc.length >= 3 ? `<nav class="toc"><strong>목차</strong><ol>${toc.map((t) => `<li><a href="#" data-scroll="${t.id}">${esc(plain(t.title))}</a></li>`).join("")}</ol></nav>` : ""}
          <div class="article-body">${html || `<p class="muted">본문이 비어 있어요.</p>`}</div>
        </article>
        <aside class="side">
          <div class="side-actions">
            <a class="btn" href="#/edit/article/${enc(a.id)}">편집</a>
            <button class="btn danger" type="button" id="delArticle">삭제</button>
          </div>
          <div class="card side-box">
            <h3>관련 연표 (${related.length})</h3>
            ${related.length ? `<ul>${related.map((e) => `<li><span class="y">${yearHtml(e)}</span><a href="#/timeline?focus=${enc(e.id)}">${esc(e.title)}</a></li>`).join("")}</ul>` : `<p class="muted">연결된 사건이 없어요.</p>`}
          </div>
          ${(a.sources || []).length ? `
          <div class="card side-box">
            <h3>출처 영상 (${a.sources.length})</h3>
            <ul>${groupByVideo(a.sources).map((g) => `<li><span class="y">${esc(videoTitle(g[0]))}</span><span class="src-group">${sourceLinks(g)}</span></li>`).join("")}</ul>
          </div>` : ""}
          <div class="card side-box">
            <h3>이 문서를 가리키는 문서 (${backlinks.length})</h3>
            ${backlinks.length ? `<ul>${backlinks.map((o) => `<li><a href="#/wiki/${enc(o.id)}">${esc(o.title)}</a></li>`).join("")}</ul>` : `<p class="muted">아직 없어요.</p>`}
          </div>
        </aside>
      </div>
    `;

    document.getElementById("delArticle").addEventListener("click", () => {
      if (!confirm(`“${a.title}” 문서를 삭제할까요? 다른 문서의 링크는 빨간 링크로 남아요.`)) return;
      store.data.articles = articles().filter((x) => x !== a);
      store.markDeleted(a.id);
      store.save();
      toast("문서를 삭제했어요.");
      location.hash = "#/wiki";
    });
  }

  // ---------- 문서 편집 ----------
  function viewArticleForm(id, params) {
    const editing = id ? findArticle(id) : null;
    if (id && !editing) return viewNotFound();
    const a = editing || { id: params.get("id") || "", title: params.get("title") || params.get("id") || "", category: "", aliases: [], summary: "", body: "## 개요\n" };
    const cats = [...new Set(articles().map((x) => x.category).filter(Boolean))].sort(byKo);
    setTitle(editing ? `${a.title} 편집` : "새 문서");

    app.innerHTML = `
      <div class="page-head">
        <div>
          <h1>${editing ? "문서 편집" : "새 문서"}</h1>
          <p>${editing ? esc(a.title) : "세계관 설정을 새 문서로 정리해요."}</p>
        </div>
      </div>
      <form class="card form" id="articleForm" novalidate>
        <div class="field-row">
          <div class="field">
            <label for="fTitle">제목</label>
            <input type="text" id="fTitle" value="${esc(a.title)}" required>
          </div>
          <div class="field">
            <label for="fId">문서 주소 (id)</label>
            <input type="text" id="fId" value="${esc(a.id)}" ${editing ? "disabled" : ""} placeholder="예: apple-of-eden">
            <div class="hint">${editing ? "만든 뒤에는 바꿀 수 없어요." : "다른 문서에서 [[id]]로 링크할 때 써요. 비우면 제목을 써요."}</div>
          </div>
        </div>
        <div class="field-row">
          <div class="field">
            <label for="fCat">분류</label>
            <input type="text" id="fCat" list="catList" value="${esc(a.category || "")}" placeholder="예: 인물">
            <datalist id="catList">${cats.map((c) => `<option value="${esc(c)}">`).join("")}</datalist>
          </div>
          <div class="field">
            <label for="fAliases">다른 이름</label>
            <input type="text" id="fAliases" value="${esc((a.aliases || []).join(", "))}" placeholder="쉼표로 구분">
          </div>
        </div>
        <div class="field">
          <label for="fSummary">한 줄 요약</label>
          <input type="text" id="fSummary" value="${esc(a.summary || "")}">
        </div>
        <div class="field">
          <label for="fBody">본문</label>
          <textarea id="fBody" rows="16">${esc(a.body || "")}</textarea>
          <div class="hint">## 소제목 · - 목록 · &gt; 인용 · **굵게** · [[문서id]] 또는 [[문서id|보여줄 글자]]로 링크</div>
        </div>
        <div class="field">
          <label for="fSources">출처 영상</label>
          <textarea id="fSources" rows="3" placeholder="https://youtu.be/영상ID 12:34">${esc(sourcesToText(a.sources))}</textarea>
          <div class="hint">한 줄에 하나씩, 유튜브 링크 뒤에 시각(분:초)을 적어요. 시각이 들어간 공유 링크(?t=754)를 그대로 붙여 넣어도 돼요.</div>
        </div>
        <p class="error" id="fError" hidden></p>
        <div class="form-actions">
          <a class="btn" href="${editing ? `#/wiki/${enc(a.id)}` : "#/wiki"}">취소</a>
          <button class="btn primary" type="submit">저장</button>
        </div>
      </form>
    `;

    document.getElementById("articleForm").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const val = (sel) => document.getElementById(sel).value.trim();
      const title = val("fTitle");
      const newId = editing ? editing.id : (val("fId") || title).replace(/\s+/g, "-");
      const err = (msg) => { const el = document.getElementById("fError"); el.textContent = msg; el.hidden = false; };

      if (!title) return err("제목을 입력하세요.");
      if (!editing) {
        if (/[\/?#|\[\]]/.test(newId)) return err("문서 주소에는 / ? # | [ ] 를 쓸 수 없어요.");
        if (articles().some((x) => x.id === newId)) return err("같은 주소의 문서가 이미 있어요.");
      }
      if (articles().some((x) => x !== editing && x.title === title)) return err("같은 제목의 문서가 이미 있어요.");
      const parsed = parseSources(document.getElementById("fSources").value);
      if (parsed.bad.length) return err(`출처를 읽지 못한 줄이 있어요: ${parsed.bad[0]}`);

      const record = {
        id: newId,
        title,
        category: val("fCat") || "기타",
        aliases: val("fAliases").split(",").map((s) => s.trim()).filter(Boolean),
        summary: val("fSummary"),
        body: document.getElementById("fBody").value.replace(/\s+$/, ""),
        sources: parsed.sources
      };
      const oldTitle = editing ? editing.title : null;
      if (editing) Object.assign(editing, record);
      else articles().push(record);
      store.markEdited(record.id);

      let renamed = 0;
      if (oldTitle && oldTitle !== title && oldTitle.length >= 2) {
        const hits = countTitleUses(oldTitle);
        if (hits.total && confirm(`다른 곳에 옛 이름 “${oldTitle}”이(가) ${hits.total}번 나와요 (사건 ${hits.events}개, 문서 ${hits.articles}개).\n모두 “${title}”(으)로 바꿀까요?`)) {
          renamed = replaceTitleUses(oldTitle, title);
          // 옛 이름으로도 검색되도록 별칭에 남긴다
          if (!editing.aliases.includes(oldTitle)) editing.aliases.push(oldTitle);
        }
      }
      store.save();
      toast(renamed ? `저장했어요. 다른 곳의 옛 이름 ${renamed}군데도 바꿨어요.` : "저장했어요.");
      location.hash = `#/wiki/${enc(record.id)}`;
    });
  }

  // 문서 이름을 바꿀 때 사건 이름·설명과 문서 요약·본문에 남은 옛 이름을 찾아 바꾼다
  const TITLE_FIELDS = { events: ["title", "summary"], articles: ["summary", "body"] };

  function countTitleUses(oldTitle) {
    const res = { events: 0, articles: 0, total: 0 };
    for (const kind of Object.keys(TITLE_FIELDS)) {
      for (const item of store.data[kind]) {
        const n = TITLE_FIELDS[kind].reduce((sum, f) => sum + String(item[f] || "").split(oldTitle).length - 1, 0);
        if (n) { res[kind] += 1; res.total += n; }
      }
    }
    return res;
  }

  function replaceTitleUses(oldTitle, newTitle) {
    let total = 0;
    for (const kind of Object.keys(TITLE_FIELDS)) {
      for (const item of store.data[kind]) {
        let changed = false;
        for (const f of TITLE_FIELDS[kind]) {
          const parts = String(item[f] || "").split(oldTitle);
          if (parts.length > 1) {
            total += parts.length - 1;
            item[f] = parts.join(newTitle);
            changed = true;
          }
        }
        if (changed) store.markEdited(item.id);
      }
    }
    return total;
  }

  // ---------- 사건 편집 ----------
  function viewEventForm(id, params) {
    const editing = id ? events().find((e) => e.id === id) : null;
    if (id && !editing) return viewNotFound();
    const e = editing || { year: "", approx: false, yearVerified: false, title: "", game: "", summary: "", links: [] };
    setTitle(editing ? `${e.title} 편집` : "사건 추가");

    app.innerHTML = `
      <div class="page-head">
        <div>
          <h1>${editing ? "사건 편집" : "사건 추가"}</h1>
          <p>연표에 들어갈 사건을 기록해요.</p>
        </div>
      </div>
      <form class="card form" id="eventForm" novalidate>
        <div class="field-row">
          <div class="field">
            <label for="eYear">연도</label>
            <input type="number" id="eYear" value="${esc(e.year)}" step="1" placeholder="예: 1191, 기원전은 -44">
            <div class="hint">기원전은 음수로 적어요. 예: 기원전 44년 → -44</div>
          </div>
          <div class="field">
            <label for="eGame">작품</label>
            <select id="eGame">
              <option value="">(작품 없음 · 배경 설정)</option>
              ${GAMES.map((g) => `<option value="${g.id}" ${g.id === e.game ? "selected" : ""}>${esc(g.title)} (${g.release})</option>`).join("")}
            </select>
          </div>
        </div>
        <label class="check"><input type="checkbox" id="eApprox" ${e.approx ? "checked" : ""}> 정확한 연도가 아님 (“무렵”으로 표시)</label>
        <label class="check"><input type="checkbox" id="eYearVerified" ${e.yearVerified ? "checked" : ""}> 영상에서 연도를 확인함 (체크하지 않으면 “추정”으로 표시)</label>
        <div class="field-row">
          <div class="field">
            <label for="eMonth">월 (선택)</label>
            <input type="number" id="eMonth" min="1" max="12" step="1" value="${esc(e.month || "")}" placeholder="예: 9">
          </div>
          <div class="field">
            <label for="eDay">일 (선택)</label>
            <input type="number" id="eDay" min="1" max="31" step="1" value="${esc(e.day || "")}" placeholder="예: 6">
            <div class="hint">영상에서 날짜를 확인했을 때만 적어요. 일만 적을 수는 없어요.</div>
          </div>
        </div>
        <div class="field">
          <label for="eTitle">사건 이름</label>
          <input type="text" id="eTitle" value="${esc(e.title)}">
        </div>
        <div class="field">
          <label for="eSummary">설명</label>
          <textarea id="eSummary" rows="5">${esc(e.summary || "")}</textarea>
          <div class="hint">[[문서id|글자]]로 위키 문서에 링크할 수 있어요.</div>
        </div>
        <div class="field">
          <label for="eLinks">관련 문서</label>
          <input type="text" id="eLinks" list="artList" value="${esc((e.links || []).join(", "))}" placeholder="문서 id를 쉼표로 구분">
          <datalist id="artList">${articles().map((a) => `<option value="${esc(a.id)}">${esc(a.title)}</option>`).join("")}</datalist>
          <div class="hint">사용할 수 있는 id: ${articles().slice().sort((x, y) => byKo(x.title, y.title)).map((a) => `${esc(a.title)}(${esc(a.id)})`).join(", ")}</div>
        </div>
        <div class="field">
          <label for="eSources">출처 영상</label>
          <textarea id="eSources" rows="3" placeholder="https://youtu.be/영상ID 12:34">${esc(sourcesToText(e.sources))}</textarea>
          <div class="hint">한 줄에 하나씩, 유튜브 링크 뒤에 시각(분:초)을 적어요. 시각이 들어간 공유 링크(?t=754)를 그대로 붙여 넣어도 돼요.</div>
        </div>
        <p class="error" id="eError" hidden></p>
        <div class="form-actions">
          ${editing ? `<button class="btn danger" type="button" id="delEvent" style="margin-right:auto">삭제</button>` : ""}
          <a class="btn" href="#/timeline">취소</a>
          <button class="btn primary" type="submit">저장</button>
        </div>
      </form>
    `;

    document.getElementById("eventForm").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const err = (msg) => { const el = document.getElementById("eError"); el.textContent = msg; el.hidden = false; };
      const yearRaw = document.getElementById("eYear").value.trim();
      const year = Number(yearRaw);
      const title = document.getElementById("eTitle").value.trim();
      if (!yearRaw || !Number.isInteger(year)) return err("연도를 정수로 입력하세요.");
      if (year === 0) return err("0년은 없어요. 기원전 1년은 -1, 서기 1년은 1이에요.");
      if (!title) return err("사건 이름을 입력하세요.");
      const monthRaw = document.getElementById("eMonth").value.trim();
      const dayRaw = document.getElementById("eDay").value.trim();
      const month = monthRaw ? Number(monthRaw) : undefined;
      const day = dayRaw ? Number(dayRaw) : undefined;
      if (month !== undefined && !(Number.isInteger(month) && month >= 1 && month <= 12)) return err("월은 1~12 사이 정수로 입력하세요.");
      if (day !== undefined && !(Number.isInteger(day) && day >= 1 && day <= 31)) return err("일은 1~31 사이 정수로 입력하세요.");
      if (day !== undefined && month === undefined) return err("일을 적으려면 월도 함께 적어야 해요.");
      const parsed = parseSources(document.getElementById("eSources").value);
      if (parsed.bad.length) return err(`출처를 읽지 못한 줄이 있어요: ${parsed.bad[0]}`);

      const record = {
        id: editing ? editing.id : `ev-${Date.now().toString(36)}`,
        year,
        approx: document.getElementById("eApprox").checked,
        yearVerified: document.getElementById("eYearVerified").checked,
        month, day,
        game: document.getElementById("eGame").value,
        title,
        summary: document.getElementById("eSummary").value.trim(),
        links: document.getElementById("eLinks").value.split(",").map((s) => s.trim()).filter(Boolean),
        sources: parsed.sources
      };
      if (editing) Object.assign(editing, record);
      else events().push(record);
      store.markEdited(record.id);
      store.save();
      toast("저장했어요.");
      location.hash = `#/timeline?focus=${enc(record.id)}`;
    });

    const del = document.getElementById("delEvent");
    if (del) del.addEventListener("click", () => {
      if (!confirm(`“${editing.title}” 사건을 삭제할까요?`)) return;
      store.data.events = events().filter((x) => x !== editing);
      store.markDeleted(editing.id);
      store.save();
      toast("사건을 삭제했어요.");
      location.hash = "#/timeline";
    });
  }

  // ---------- 데이터 ----------
  function viewData() {
    setTitle("데이터");
    app.innerHTML = `
      <div class="page-head">
        <div>
          <h1>데이터 관리</h1>
          <p>편집 내용은 이 브라우저에만 저장돼요. 다른 기기로 옮기거나 백업하려면 내보내기를 쓰세요.</p>
        </div>
      </div>
      <div class="data-grid">
        <div class="card">
          <h3>내보내기</h3>
          <p>사건 ${events().length}개와 문서 ${articles().length}개를 JSON 파일로 저장해요.</p>
          <button class="btn primary" type="button" id="exportBtn">JSON 내보내기</button>
        </div>
        <div class="card">
          <h3>가져오기</h3>
          <p>내보낸 JSON 파일을 불러와요. 지금 데이터는 파일 내용으로 바뀌어요.</p>
          <label class="btn" for="importFile">파일 선택</label>
          <input type="file" id="importFile" accept="application/json,.json" hidden>
        </div>
        <div class="card">
          <h3>초기화</h3>
          <p>모든 편집 내용을 지우고 처음 제공된 기본 데이터로 되돌려요.</p>
          <button class="btn danger" type="button" id="resetBtn">기본 데이터로 초기화</button>
        </div>
      </div>
    `;

    document.getElementById("exportBtn").addEventListener("click", () => {
      const payload = { app: "AssassinNote", version: 1, exportedAt: new Date().toISOString(), events: events(), articles: articles(), edited: store.data.edited, deleted: store.data.deleted };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `assassinnote-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      toast("파일을 내보냈어요.");
    });

    document.getElementById("importFile").addEventListener("change", (ev) => {
      const file = ev.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        let d;
        try { d = JSON.parse(reader.result); } catch (e) { return toast("JSON 파일을 읽지 못했어요."); }
        if (!isValidData(d)) return toast("AssassinNote 데이터 형식이 아니에요.");
        if (!confirm(`사건 ${d.events.length}개, 문서 ${d.articles.length}개로 바꿀까요?`)) return;
        // 파일 내용을 그대로 쓰도록, 표시가 없으면 모든 항목을 편집된 것으로 보고 파일에 없는 기본 항목은 지운 것으로 본다
        const ids = new Set(d.events.concat(d.articles).map((x) => x.id));
        store.data = mergeWithDefaults({
          events: d.events,
          articles: d.articles,
          edited: Array.isArray(d.edited) ? d.edited : [...ids],
          deleted: Array.isArray(d.deleted) ? d.deleted : DEFAULTS.events.concat(DEFAULTS.articles).map((x) => x.id).filter((id) => !ids.has(id))
        });
        store.save();
        toast("가져오기를 마쳤어요.");
        viewData();
      };
      reader.readAsText(file);
      ev.target.value = "";
    });

    document.getElementById("resetBtn").addEventListener("click", () => {
      if (!confirm("모든 편집 내용을 지우고 기본 데이터로 되돌릴까요? 되돌릴 수 없어요.")) return;
      store.reset();
      toast("기본 데이터로 초기화했어요.");
      viewData();
    });
  }

  function viewNotFound() {
    setTitle("찾을 수 없음");
    app.innerHTML = `<div class="empty"><p>페이지를 찾을 수 없어요.</p><a class="btn" href="#/">홈으로</a></div>`;
  }

  // ---------- 테마 ----------
  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* 무시 */ }
    if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved;
    document.getElementById("themeToggle").addEventListener("click", () => {
      const cur = document.documentElement.dataset.theme ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* 무시 */ }
    });
  }

  // ---------- 화면 모드 (PC / 모바일) ----------
  // 실제 판단과 적용은 index.html 머리의 스크립트(window.AN_VIEW)가 한다
  function initViewSwitch() {
    const box = document.getElementById("viewSwitch");
    const view = window.AN_VIEW;
    if (!box || !view) return;
    const mark = () => box.querySelectorAll("[data-view]").forEach((b) => b.classList.toggle("on", b.dataset.view === view.current()));
    box.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-view]");
      if (!btn || btn.dataset.view === view.current()) return;
      view.set(btn.dataset.view);
      mark();
      toast(btn.dataset.view === "mobile" ? "모바일 버전으로 바꿨어요." : "PC 버전으로 바꿨어요.");
    });
    // 직접 고르지 않았다면 창 크기가 바뀔 때 다시 판단한다 (PC에서 창을 좁히는 경우 등)
    window.addEventListener("resize", () => { view.refresh(); mark(); });
    mark();
  }

  // ---------- 시작 ----------
  document.addEventListener("click", (ev) => {
    const a = ev.target.closest("[data-scroll]");
    if (!a) return;
    ev.preventDefault();
    const target = document.getElementById(a.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("topSearch").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const q = document.getElementById("topSearchInput").value.trim();
    location.hash = q ? `#/wiki?q=${enc(q)}` : "#/wiki";
  });

  store.load();
  initTheme();
  initViewSwitch();
  window.addEventListener("hashchange", route);
  route();
})();
