// AssassinNote 기본 데이터
// 원칙: 사용자가 넣은 영상에서 확인한 내용만 적는다. 모든 사건·문서에 출처 영상 시각(sources)을 붙인다.
// year: 서기는 양수, 기원전은 음수. approx: true면 "무렵"으로 표시
// month, day: 영상에서 날짜를 확인했을 때만 넣는다 (선택). 예: month: 9, day: 6 → "9월 6일"
// yearVerified: 영상에서 연도를 확인했으면 true (그 시각을 sources에 넣는다). 없거나 false면 화면에 "(추정)"으로 표시
//   1191년은 영상으로 확인되지 않은 추정 연도다.
//   2012년은 현대 파트 모음 이메일 원문으로 확인했다: 레일라는 2007년 9월에 죽었고(29:25), 9월 5일 루시의 메일에 '5년이 지났는데도'라고 나온다(40:09).
// 문서 본문 문법: "## 제목", "- 목록", "> 인용", **굵게**, [[문서id]] 또는 [[문서id|표시할 글자]]

window.AN_DEFAULT_DATA = (function () {
  // 출처 영상 주소
  const AC1_MB1 = "https://youtu.be/MMAiJ7gIm_k";
  const AC1_MB2A = "https://youtu.be/LWPsnQtvODo";
  const AC1_MB2B = "https://youtu.be/HDRiNFUZmJ8";
  const AC1_MB3A = "https://youtu.be/UgmzOiDbGsk";
  const AC1_MB3B = "https://youtu.be/O7dhoc_C6Uo";
  const AC1_MB4A = "https://youtu.be/Q21eIn--rjk";
  const AC1_MB4B = "https://youtu.be/ScOvhNOZqPw";
  const AC1_MB4C = "https://youtu.be/rLNn2kgLmj0";
  const AC1_MB5A = "https://youtu.be/Ugtw4WFhsDQ";
  const AC1_MB5B = "https://youtu.be/BmmiOCGgJ4s";
  const AC1_MB6A = "https://youtu.be/2NzG2BSozPA";
  const AC1_MB6B = "https://youtu.be/DpO8akJfzWU";
  const AC1_MB7 = "https://youtu.be/4jyPP2qUAaU";
  const AC1_MS = "https://youtu.be/NILrq_VsodQ"; // 현대 파트 모음
  const AC2_P1 = "https://youtu.be/y_t8ClMGubQ";
  const AC2_P2 = "https://youtu.be/9c8MLgSc0Kk";
  const AC2_P3 = "https://youtu.be/115WqMlx8mE";
  const AC2_P4 = "https://youtu.be/7uB4HNGuLvo";
  const AC2_P5 = "https://youtu.be/_Pu-Q9bSmy0";
  const AC2_P6 = "https://youtu.be/vPmLOedRGsQ";
  const AC2_P7 = "https://youtu.be/bQY_bYqqS5k";
  const AC2_P8 = "https://youtu.be/VD5TvX6uMHU";
  const AC2_P9 = "https://youtu.be/6Fg8XDaGQV4";
  const AC2_P10 = "https://youtu.be/Pj12kMQiJOk";
  const AC2_P11 = "https://youtu.be/z76WqvojodE";
  const AC2_P12 = "https://youtu.be/gefaWJx13eg";
  const AC2_P13 = "https://youtu.be/cuG6Oo980xM";
  const AC2_P14 = "https://youtu.be/A1IeZZRcNBI";
  const AC2_P15 = "https://youtu.be/LLr9s8xB1O8";
  const AC2_P16 = "https://youtu.be/SkVLmlmG_50";
  const AC2_P17 = "https://youtu.be/l4fuFuvP61A";
  const AC2_P18 = "https://youtu.be/jc2KMpuMhq0";
  const AC2_P19 = "https://youtu.be/DfVxFLIkZAY";
  const AC2_P20 = "https://youtu.be/2QsN6ao3vXc";
  const AC2_P21 = "https://youtu.be/SOaYrUaUsA0";
  const AC2_P22 = "https://youtu.be/Rc2w5G-U2-0";
  const AC2_P23 = "https://youtu.be/E_opjgKrbNI";
  const AC2_P24 = "https://youtu.be/PApUijBI7wk";
  const AC2_P25 = "https://youtu.be/yGlP-xFt9eo";
  const AC2_P26 = "https://youtu.be/8Rhtwn3CYlE";
  const AC2_P27 = "https://youtu.be/gsc_wZiMFrc";
  const AC2_P28 = "https://youtu.be/xPsfTHkWTic";
  const AC2_P29 = "https://youtu.be/ST8aWo5lsVY";
  const AC2_P30 = "https://youtu.be/IpQcytFCKW8";
  const AC2_P31 = "https://youtu.be/UrqeaXQdR44";
  const AC2_P32 = "https://youtu.be/7lEypaALevQ";
  const AC2_P33 = "https://youtu.be/DK3qRUzI8Kw";
  const AC2_MS = "https://youtu.be/XT0KZ5pWM2w"; // 현대 파트 모음
  // at(영상, 초, [시작, 끝], ...) → [{ url, t }, { url, t, end }, ...]
  // 숫자 하나는 그 시각, [시작, 끝]은 장면 범위. 앞 시각과 10초 이내로 이어지는 대사는 하나의 범위로 묶는다
  const at = (url, ...times) => times.map((t) => (Array.isArray(t) ? { url, t: t[0], end: t[1] } : { url, t }));

  return {
    games: [
      { id: "ac1", title: "어쌔신 크리드", release: 2007 },
      { id: "ac2", title: "어쌔신 크리드 II", release: 2009 },
      { id: "acb", title: "어쌔신 크리드: 브라더후드", release: 2010 },
      { id: "acr", title: "어쌔신 크리드: 레벨레이션", release: 2011 },
      { id: "ac3", title: "어쌔신 크리드 III", release: 2012 },
      { id: "acl", title: "어쌔신 크리드: 리버레이션", release: 2012 },
      { id: "ac4", title: "어쌔신 크리드 IV: 블랙 플래그", release: 2013 },
      { id: "acrg", title: "어쌔신 크리드: 로그", release: 2014 },
      { id: "acu", title: "어쌔신 크리드: 유니티", release: 2014 },
      { id: "acs", title: "어쌔신 크리드: 신디케이트", release: 2015 },
      { id: "aco", title: "어쌔신 크리드: 오리진", release: 2017 },
      { id: "acod", title: "어쌔신 크리드: 오디세이", release: 2018 },
      { id: "acv", title: "어쌔신 크리드: 발할라", release: 2020 },
      { id: "acm", title: "어쌔신 크리드: 미라지", release: 2023 },
      { id: "acsh", title: "어쌔신 크리드: 섀도우즈", release: 2025 }
    ],

    // 출처로 쓰는 영상 목록
    videos: [
      { url: AC1_MB1, title: "[어쌔신크리드1] Memory Block 1 (한글 자막) · Fastwon" },
      { url: AC1_MB2A, title: "[어쌔신크리드1] Memory Block 2(1) (한글 자막) · Fastwon" },
      { url: AC1_MB2B, title: "[어쌔신크리드1] Memory Block 2(2) (한글 자막) · Fastwon" },
      { url: AC1_MB3A, title: "[어쌔신크리드1] Memory Block 3(1) (한글자막) · Fastwon" },
      { url: AC1_MB3B, title: "[어쌔신크리드1] Memory Block 3(2) (한글자막) · Fastwon" },
      { url: AC1_MB4A, title: "[어쌔신크리드1] Memory Block 4(1) (한글자막) · Fastwon" },
      { url: AC1_MB4B, title: "[어쌔신크리드1] Memory Block 4(2) (한글자막) · Fastwon" },
      { url: AC1_MB4C, title: "[어쌔신크리드1] Memory Block 4(3) (한글자막) · Fastwon" },
      { url: AC1_MB5A, title: "[어쌔신크리드1] Memory Block 5(1) (한글자막) · Fastwon" },
      { url: AC1_MB5B, title: "[어쌔신크리드1] Memory Block 5(2) (한글자막) · Fastwon" },
      { url: AC1_MB6A, title: "[어쌔신크리드1] Memory Block 6(1) (한글자막) · Fastwon" },
      { url: AC1_MB6B, title: "[어쌔신크리드1] Memory Block 6(2) (한글자막) · Fastwon" },
      { url: AC1_MB7, title: "[어쌔신크리드1] Memory Block 7 (한글자막) - 엔딩 - · Fastwon" },
      { url: AC1_MS, title: "[어쌔신크리드1] 현대파트 모음 · Fastwon" },
      { url: AC2_P1, title: "[어쌔신크리드2] 플레이1(스타트 & 현대 파트1) · Fastwon" },
      { url: AC2_P2, title: "[어쌔신크리드2] 플레이2(시퀀스1) · Fastwon" },
      { url: AC2_P3, title: "[어쌔신크리드2] 플레이3(시퀀스1) · Fastwon" },
      { url: AC2_P4, title: "[어쌔신크리드2] 플레이4(시퀀스2) · Fastwon" },
      { url: AC2_P5, title: "[어쌔신크리드2] 플레이5(시퀀스2) · Fastwon" },
      { url: AC2_P6, title: "[어쌔신크리드2] 플레이6(시퀀스3) · Fastwon" },
      { url: AC2_P7, title: "[어쌔신크리드2] 플레이7(시퀀스4) · Fastwon" },
      { url: AC2_P8, title: "[어쌔신크리드2] 플레이8(시퀀스4) · Fastwon" },
      { url: AC2_P9, title: "[어쌔신크리드2] 플레이9(시퀀스5) · Fastwon" },
      { url: AC2_P10, title: "[어쌔신크리드2] 플레이10(시퀀스5) · Fastwon" },
      { url: AC2_P11, title: "[어쌔신크리드2] 플레이11(시퀀스5) · Fastwon" },
      { url: AC2_P12, title: "[어쌔신크리드2] 플레이12(시퀀스6) · Fastwon" },
      { url: AC2_P13, title: "[어쌔신크리드2] 플레이13(시퀀스6) · Fastwon" },
      { url: AC2_P14, title: "[어쌔신크리드2] 플레이14(시퀀스7, 현대파트2) · Fastwon" },
      { url: AC2_P15, title: "[어쌔신크리드2] 플레이15(시퀀스7) · Fastwon" },
      { url: AC2_P16, title: "[어쌔신크리드2] 플레이16(시퀀스7) · Fastwon" },
      { url: AC2_P17, title: "[어쌔신크리드2] 플레이17(시퀀스8) · Fastwon" },
      { url: AC2_P18, title: "[어쌔신크리드2] 플레이18(시퀀스8) · Fastwon" },
      { url: AC2_P19, title: "[어쌔신크리드2] 플레이19(시퀀스8) · Fastwon" },
      { url: AC2_P20, title: "[어쌔신크리드2] 플레이20(시퀀스9) · Fastwon" },
      { url: AC2_P21, title: "[어쌔신크리드2] 플레이21(시퀀스10) · Fastwon" },
      { url: AC2_P22, title: "[어쌔신크리드2] 플레이22(시퀀스10) · Fastwon" },
      { url: AC2_P23, title: "[어쌔신크리드2] 플레이23(시퀀스11) · Fastwon" },
      { url: AC2_P24, title: "[어쌔신크리드2] 플레이24(현대파트3) · Fastwon" },
      { url: AC2_P25, title: "[어쌔신크리드2] 플레이25(시퀀스12) · Fastwon" },
      { url: AC2_P26, title: "[어쌔신크리드2] 플레이26(시퀀스12) · Fastwon" },
      { url: AC2_P27, title: "[어쌔신크리드2] 플레이27(시퀀스13) · Fastwon" },
      { url: AC2_P28, title: "[어쌔신크리드2] 플레이28(시퀀스13) · Fastwon" },
      { url: AC2_P29, title: "[어쌔신크리드2] 플레이29(시퀀스13) · Fastwon" },
      { url: AC2_P30, title: "[어쌔신크리드2] 플레이30(역사자료, 문양, 뷰포인트) · Fastwon" },
      { url: AC2_P31, title: "[어쌔신크리드2] 플레이31(역사자료, 문양, 뷰포인트) · Fastwon" },
      { url: AC2_P32, title: "[어쌔신크리드2] 플레이32(시퀀스14) · Fastwon" },
      { url: AC2_P33, title: "[어쌔신크리드2] 플레이33(현대파트4) -엔딩- · Fastwon" },
      { url: AC2_MS, title: "[어쌔신크리드2] 현대파트 모음 · Fastwon" }
    ],

    events: [
      {
        id: "ev-ac1-temple", year: 1191, game: "ac1",
        title: "솔로몬 신전 아래의 작전",
        summary: "[[altair|알타이어]]가 [[malik|말릭]], [[kadar|카다르]] 형제와 함께 [[templars|템플 기사단]]가 신전 아래에서 찾아낸 [[temple-treasure|보물]]을 회수하러 간다. 알타이어는 무고한 노인을 죽이고, 이를 나무라는 말릭과 다툰다.",
        links: ["altair", "malik", "kadar", "templars", "temple-treasure"],
        sources: at(AC1_MB1, 1020, [1055, 1065], 1080)
      },
      {
        id: "ev-ac1-robert", year: 1191, game: "ac1",
        title: "로베르 드 사블레와의 대면",
        summary: "[[altair|알타이어]]가 \"보물을 되찾는 것이 목표\"라는 [[malik|말릭]]의 만류를 무시하고 [[robert-de-sable|로베르 드 사블레]]에게 덤비지만 제압당해 내던져진다. 로베르는 \"성지는 너희 것이 아니다. 기회가 있을 때 달아나라\"고 경고한다.",
        links: ["altair", "robert-de-sable", "malik"],
        sources: at(AC1_MB1, 1200, 1215, 1275)
      },
      {
        id: "ev-ac1-report", year: 1191, game: "ac1",
        title: "실패한 임무와 카다르의 죽음",
        summary: "[[masyaf|마시아프]]로 돌아온 [[altair|알타이어]]가 [[al-mualim|알 무알림]]에게 보물도 잃고 [[robert-de-sable|로베르]]도 놓쳤다고 보고한다. 뒤이어 살아 돌아온 [[malik|말릭]]이 동생 [[kadar|카다르]]의 죽음을 알리며 알타이어를 탓하고, [[temple-treasure|신전의 보물]]을 내놓는다.",
        links: ["al-mualim", "malik", "kadar", "masyaf", "temple-treasure"],
        sources: at(AC1_MB1, 1360, 1580, [1665, 1675], 1695)
      },
      {
        id: "ev-ac1-siege", year: 1191, game: "ac1",
        title: "마시아프 공방전",
        summary: "[[robert-de-sable|로베르]]가 [[masyaf|마시아프]] 마을을 습격하고, 인질을 앞세워 빼앗긴 보물을 돌려 달라고 요구한다. [[al-mualim|알 무알림]]의 명령에 암살자들이 탑에서 뛰어내려 두려움 없음을 보여 주고, [[altair|알타이어]]가 함정을 작동시켜 [[templars|템플 기사단]] 군을 물리친다.",
        links: ["masyaf", "robert-de-sable", "al-mualim", "temple-treasure"],
        sources: at(AC1_MB1, 1710, 2020, 2085, 2120)
      },
      {
        id: "ev-ac1-judgement", year: 1191, game: "ac1",
        title: "알 무알림의 심판",
        summary: "[[al-mualim|알 무알림]]이 [[assassins|암살단]] 신조의 세 가지 교리를 하나씩 짚으며 [[altair|알타이어]]가 모두 어겼다고 꾸짖는다. 오늘 죽은 사람들은 모두 알타이어 탓이라며 그를 배신자로 단죄한다. 다음 메모리 블록에서 이는 실제 처형이 아니었음이 드러난다.",
        links: ["al-mualim", "altair", "assassins"],
        sources: at(AC1_MB1, 2220, 2250, 2325, 2340)
      },
      {
        id: "ev-ac1-demotion", year: 1191, game: "ac1",
        title: "알타이어의 강등",
        summary: "깨어난 [[altair|알타이어]]에게 [[al-mualim|알 무알림]]은 \"네가 본 것은 내가 보여 주려던 것\"이라며 그를 죽이지 않았다고 밝힌다. 신조의 참뜻을 다시 가르친 뒤 알타이어의 직위와 계급, 장비를 빼앗고 신입으로 강등한다. 대신 [[assassins|형제단]]에 돌아올 구원의 기회를 준다.",
        links: ["altair", "al-mualim", "assassins", "malik"],
        sources: at(AC1_MB2A, 105, 120, 150, 165, 178, 195)
      },
      {
        id: "ev-ac1-traitor-hunt", year: 1191, game: "ac1",
        title: "배신자 추적",
        summary: "[[al-mualim|알 무알림]]은 누군가 [[robert-de-sable|로베르]]를 도왔다며, 내부의 배신자를 찾아오라고 명령한다. [[altair|알타이어]]는 [[investigation|엿듣기]]로 [[masun|마순]]이 문을 열어 기사단을 들였고, 요새 안의 누군가와 바구니 직공을 통해 편지를 주고받았다는 사실을 알아낸다. 이어 바구니 직공에게서 편지를 슬쩍한다.",
        links: ["al-mualim", "masun", "investigation", "masyaf"],
        sources: at(AC1_MB2A, 240, 330, 405, 420, 450, 570)
      },
      {
        id: "ev-ac1-masun", year: 1191, game: "ac1",
        title: "배신자 마순의 최후",
        summary: "[[masun|마순]]은 마을에서 \"[[al-mualim|알 무알림]]이야말로 우리를 배신했다\"며 사람들을 선동한다. [[altair|알타이어]]에게 붙잡힌 그는 \"우리는 기사단을 섬긴다\"고 털어놓고, 알 무알림 앞에서도 뉘우치기를 거부하다 처형된다. 알타이어는 다시 칼을 찰 자격을 얻고, 알 무알림은 마순을 도운 [[jamal|자말]]을 언급한다.",
        links: ["masun", "al-mualim", "altair", "templars", "jamal"],
        sources: at(AC1_MB2A, 735, 750, 840, 868, [895, 900], 940)
      },
      {
        id: "ev-ac1-nine-targets", year: 1191, game: "ac1",
        title: "아홉 명의 표적",
        summary: "[[al-mualim|알 무알림]]이 [[altair|알타이어]]에게 죽여야 할 [[nine-targets|아홉 명의 이름]]이 적힌 목록을 건넨다. 첫 표적은 [[damascus|다마스쿠스]]의 암시장 상인 [[tamir|타미르]]다. 임무를 시작하려면 그 도시 [[assassins|암살단]] 지부의 [[rafiq|라피크]]에게 허락을 받아야 한다.",
        links: ["nine-targets", "al-mualim", "tamir", "damascus", "rafiq"],
        sources: at(AC1_MB2A, [952, 960], 975, 990, 1010, 1032)
      },
      {
        id: "ev-ac1-to-damascus", year: 1191, game: "ac1",
        title: "다마스쿠스로 출발",
        summary: "[[altair|알타이어]]가 검과 [[hidden-blade|히든 블레이드]]를 되찾는다. [[rauf|라우프]]의 부탁으로 훈련생들에게 검술을 보여 준 뒤, 말을 타고 [[masyaf|마시아프]]를 떠나 [[damascus|다마스쿠스]]로 향한다.",
        links: ["altair", "hidden-blade", "rauf", "masyaf", "damascus"],
        sources: at(AC1_MB2A, 1050, 1065, 1080, 1380, 1395)
      },
      {
        id: "ev-ac1-damascus-rafiq", year: 1191, game: "ac1",
        title: "다마스쿠스 지부의 라피크",
        summary: "[[damascus|다마스쿠스]]에 도착한 [[altair|알타이어]]가 [[assassins|암살단]] 지부의 [[rafiq|라피크]]를 찾아간다. 라피크는 [[tamir|타미르]]가 어디서 일하고 무엇을 꾸미는지 먼저 조사하라며 찾아볼 장소들을 알려 준다. 조사를 마치고 돌아오면 [[al-mualim|알 무알림]]의 표식을 주겠다고 한다.",
        links: ["damascus", "rafiq", "tamir", "altair"],
        sources: at(AC1_MB2B, 0, 690, 720, 735, 750, 765, 780)
      },
      {
        id: "ev-ac1-tamir-investigation", year: 1191, game: "ac1",
        title: "타미르 조사",
        summary: "[[altair|알타이어]]가 [[damascus|다마스쿠스]] 곳곳에서 [[investigation|엿듣기와 소매치기]]로 정보를 모은다. 다시 찾아간 [[rafiq|라피크]]에게 [[tamir|타미르]]가 [[souk-al-silaah|알 실라흐 수크]]를 다스리는 이 땅 최대의 무기 상인이고, 곧 그곳에서 일생 최대의 거래를 위한 회의가 열린다고 보고한다. 라피크는 알타이어의 계획을 듣고 임무를 허락한다.",
        links: ["tamir", "investigation", "souk-al-silaah", "rafiq"],
        sources: at(AC1_MB2B, 1050, 1280, 1305, 1340, 1365, 1380, 1425)
      },
      {
        id: "ev-ac1-tamir", year: 1191, game: "ac1",
        title: "타미르 암살",
        summary: "[[tamir|타미르]]는 주문량을 맞추지 못한다고 변명하는 상인을 시장 한복판에서 살해한다. [[altair|알타이어]]는 그를 암살하고, 타미르는 숨을 거두며 \"나는 한 조각에 불과하다. 곧 다른 이들을 알게 될 것\"이라는 말을 남긴다. 알타이어는 추격을 따돌리고 지부로 돌아가 [[rafiq|라피크]]에게 승리를 알린다.",
        links: ["tamir", "nine-targets", "souk-al-silaah", "rafiq"],
        sources: at(AC1_MB2B, 1500, 1560, 1575, 1890, 1905, 1920, 1935, 2145)
      },
      {
        id: "ev-ac1-after-tamir", year: 1191, game: "ac1",
        title: "타미르 처단 보고",
        summary: "[[masyaf|마시아프]]로 돌아온 [[altair|알타이어]]는 [[tamir|타미르]]가 스승을 잘 아는 듯 말했고 자신의 임무에 더 큰 의미가 있는 것처럼 굴었다고 전한다. [[al-mualim|알 무알림]]은 \"자네의 큰 실패는 너무 많은 궁금증에서 비롯됐다\"며 더 묻지 말라고 한다. 그리고 계급을 올려 주고 장비 일부를 돌려준 뒤, [[acre|아크레]]나 [[jerusalem|예루살렘]]으로 가라고 명령한다.",
        links: ["al-mualim", "tamir", "acre", "jerusalem", "altair"],
        sources: at(AC1_MB3A, [163, 170], 184, [196, 209], 225)
      },
      {
        id: "ev-ac1-acre-rafiq", year: 1191, game: "ac1",
        title: "아크레 지부의 라피크",
        summary: "[[altair|알타이어]]는 [[acre|아크레]]를 먼저 찾는다. 지부의 [[rafiq|라피크]]는 \"작은 새가 자네의 방문을 알려 줬다\"며 맞이하고, [[garnier|가니에르 드 나플라우스]]가 [[hospitaller|기사단 병원]]의 그랜드 마스터이며 그들 구역 안에서 지낸다고 알려 준다. 조사할 곳으로는 북쪽의 공공 정원 터, 북서쪽의 버려진 시장, 서쪽의 마리아 교회를 꼽는다.",
        links: ["acre", "rafiq", "garnier", "hospitaller"],
        sources: at(AC1_MB3A, 555, [1232, 1263])
      },
      {
        id: "ev-ac1-garnier-investigation", year: 1191, game: "ac1",
        title: "가니에르 조사",
        summary: "[[altair|알타이어]]는 [[garnier|가니에르]]가 북서쪽의 [[hospitaller|기사단 병원]]에서 살며 일한다고 보고한다. 소문으로는 벽 안에서 무고한 시민들, 그것도 대부분 [[jerusalem|예루살렘]]에서 데려온 사람들로 잔혹한 실험을 한다고 한다. 가니에르는 종종 환자를 살피러 회진을 도는데, 알타이어는 그때 치겠다고 한다. [[rafiq|라피크]]는 \"이 얼룩을 [[acre|아크레]]에서 지우라\"며 임무를 허락한다.",
        links: ["garnier", "hospitaller", "acre", "rafiq"],
        sources: at(AC1_MB3A, [1934, 1955], [1967, 1973], 1991)
      },
      {
        id: "ev-ac1-garnier", year: 1191, game: "ac1",
        title: "가니에르 암살",
        summary: "병원 마당에서 도망치다 붙잡힌 환자가 \"저자가 영혼을 가져갔다\"고 울부짖자, [[garnier|가니에르]]는 \"선택지는 없다\"며 그의 두 다리를 부러뜨리라고 명령한다. [[altair|알타이어]]가 그를 암살하자 가니에르는 \"내 아이들은 어떻게 되느냐\"고 묻는다. 알타이어는 그들이 풀려나 집으로 돌아갈 것이라고 답하지만, 가니에르는 \"무슨 집? 하수구? 사창가?\"라며 그들에게는 스스로 결정할 의지조차 없다고 맞선다.",
        links: ["garnier", "nine-targets", "hospitaller"],
        sources: at(AC1_MB3A, 2496, 2534, 2571, 2583, [2749, 2780], 2839)
      },
      {
        id: "ev-ac1-acre-report", year: 1191, game: "ac1",
        title: "알타이어의 의문",
        summary: "[[acre|아크레]] 지부로 돌아온 [[altair|알타이어]]는 \"뭔가 이상하다\"며 [[garnier|가니에르]]가 사람들을 돕고 있다고 믿는 것 같았다고 털어놓는다. [[rafiq|라피크]]는 \"자네가 할 일은 궁금해하는 것이 아니라 행하는 것\"이라고 다그친다. [[masyaf|마시아프]]에서도 알타이어는 포로들이 가니에르에게 고마워하는 것 같았다며, 어떻게 적을 친구로 만들 수 있는지 묻는다.",
        links: ["altair", "rafiq", "garnier", "al-mualim"],
        sources: at(AC1_MB3A, [2958, 2966], [2978, 2990], [3046, 3056])
      },
      {
        id: "ev-ac1-paradise", year: 1191, game: "ac1",
        title: "'낙원의 약속'",
        summary: "[[al-mualim|알 무알림]]은 지도자들이 말이 안 되면 돈으로, 그래도 안 되면 뇌물과 협박과 속임수로 사람들을 복종시킨다고 답한다. 먼 땅에는 사람을 홀려 노예로 만드는 약초가 있다고도 말한다. 적들은 알 무알림이 암살자들에게 약을 먹이고 여자와 환락의 정원으로 유혹한다고 비난한다. 알 무알림은 그들이 진실을 몰라야 한다고 말한다. 우리가 평화만을 원한다는 것을 알면 더는 우리를 두려워하지 않을 것이기 때문이다.",
        links: ["al-mualim", "altair", "assassins"],
        sources: at(AC1_MB3A, [3059, 3074], [3086, 3126])
      },
      {
        id: "ev-ac1-jerusalem-malik", year: 1191, game: "ac1",
        title: "예루살렘 지부의 말릭",
        summary: "[[jerusalem|예루살렘]] 지부를 찾은 [[altair|알타이어]]를 맞은 사람은 [[malik|말릭]]이었다. 말릭은 \"자네 자신을 돌아보라고 시킨 사소한 일\"이라며 냉랭하게 대하지만, 장님처럼 도시를 헤매게 둘 수는 없다며 [[talal|탈랄]]을 조사할 장소 세 곳을 알려 준다.",
        links: ["malik", "jerusalem", "talal", "altair", "rafiq"],
        sources: at(AC1_MB3B, 75, [840, 855], 870, 885)
      },
      {
        id: "ev-ac1-talal-investigation", year: 1191, game: "ac1",
        title: "탈랄 조사",
        summary: "거리에서는 \"[[talal|탈랄]]이 베푼다\"며 일거리를 미끼로 사람을 모으는 외침이 들린다. [[altair|알타이어]]는 경비병이 손 놓은 사이 사람들이 사라지고 있다는 이야기를 엿듣고, 탈랄의 부하를 심문해 납치된 사람들이 창고에 갇혔다가 [[acre|아크레]]로 보내진다는 사실을 알아낸다. [[malik|말릭]]에게는 탈랄이 [[jerusalem|예루살렘]] 시민을 납치해 노예로 파는 자라고 보고한다.",
        links: ["talal", "investigation", "malik", "jerusalem"],
        sources: at(AC1_MB3B, 640, 1020, 1040, 1320, 1340, 1460, 1480, 1495)
      },
      {
        id: "ev-ac1-talal", year: 1191, game: "ac1",
        title: "탈랄 암살",
        summary: "창고에 숨어든 [[altair|알타이어]] 앞에 [[talal|탈랄]]이 나타난다. 그는 노예상이라는 말에 \"나는 그들을 돕고 싶을 뿐\"이라고 맞서고, 알타이어를 일부러 이곳까지 끌어들였다고 말한 뒤 부하들과 공격한다. 죽어 가며 탈랄은 자신이 데려간 사람들은 거지와 중독자, 나병 환자처럼 노예로도 쓸 수 없는 이들이었고 팔려고가 아니라 구하려고 데려갔다고 주장한다. \"우리 조직은 내가 죽어도 멈추지 않는다\"는 말도 남긴다.",
        links: ["talal", "nine-targets", "jerusalem"],
        sources: at(AC1_MB3B, 1825, 1840, 1870, 1900, 1915, 2240, 2270, 2285)
      },
      {
        id: "ev-ac1-malik-subtlety", year: 1191, game: "ac1",
        title: "말릭과의 언쟁",
        summary: "지부로 돌아온 [[altair|알타이어]]에게 [[malik|말릭]]은 \"온 도시가 다 안다\"며 은밀함의 의미를 잊었냐고 꾸짖는다. 알타이어는 임무를 해냈다며 \"우리는 같은 편\"이라고 맞받는다.",
        links: ["malik", "altair"],
        sources: at(AC1_MB3B, 2455, 2470, 2485)
      },
      {
        id: "ev-ac1-three-leaders", year: 1191, game: "ac1",
        title: "세 도시의 지도자",
        summary: "[[al-mualim|알 무알림]]은 아홉 중 셋이 죽었다며 치하하지만 안주하지 말라고 한다. [[king-richard|리차드 왕]]은 [[acre|아크레]]의 승리에 힘입어 [[jerusalem|예루살렘]]으로 남진할 준비를 하고, [[salahuddin|살라딘]]은 무너진 아르수프 성채에 병력을 모으고 있다. [[altair|알타이어]]가 두 사람을 모두 죽여 전쟁을 끝내야 하느냐고 묻자, 알 무알림은 그러면 수천 명의 병사가 흩어져 땅을 짓밟을 것이라며 거절한다. 대신 두 사람이 없는 동안 도시를 다스리는 자들을 처단하라며 세 이름을 준다. [[abul-nuqoud|아불 누쿠드]], [[majd-addin|마아드 아딘]], [[william-of-montferrat|몽페라트의 윌리엄]]이다. 죄목은 탐욕, 교만, 무고한 자 학살이다.",
        links: ["al-mualim", "abul-nuqoud", "majd-addin", "william-of-montferrat", "king-richard", "salahuddin", "nine-targets"],
        sources: at(AC1_MB4A, 182, 196, 213, [227, 248], 265, 286)
      },
      {
        id: "ev-ac1-abul-rafiq", year: 1191, game: "ac1",
        title: "다시 찾은 다마스쿠스 지부",
        summary: "[[damascus|다마스쿠스]] 지부의 [[rafiq|라피크]]는 [[altair|알타이어]]를 반갑게 맞는다. 표적이 '다마스쿠스의 상인왕' [[abul-nuqoud|아불 누쿠드]]라는 말에 \"깨지고 강등당한 것만 빼고 다 부럽다\"고 너스레를 떤다. 아불은 귀족 구역에서 호화롭게 지낸다며, 조사할 곳으로 서쪽의 오마야드 모스크와 사루자 수크, 북서쪽의 [[salahuddin|살라딘]]의 성채를 꼽는다.",
        links: ["rafiq", "abul-nuqoud", "damascus"],
        sources: at(AC1_MB4A, [418, 432], 448, 459, [473, 481])
      },
      {
        id: "ev-ac1-abul-investigation", year: 1191, game: "ac1",
        title: "아불 누쿠드 조사",
        summary: "[[altair|알타이어]]는 [[damascus|다마스쿠스]] 귀족 구역을 돌며 정보를 모은다. 조사 완료 화면에는 '[[abul-nuqoud|상인왕]]이 연회를 준비하고 있다', '상인왕의 숙소로 올라가는 통로가 있다', '상인왕은 연회 중에 사람들에게 연설을 하러 나올 것이다'라는 문구가 뜬다. 지부로 돌아온 알타이어는 아불이 속까지 부패해 시민들에게 경멸받고, 다마스쿠스 사람들의 돈을 빼돌려 사사로이 쓰며, 호화로운 파티를 준비하고 있다고 보고한다.",
        links: ["abul-nuqoud", "investigation", "rafiq", "damascus"],
        sources: at(AC1_MB4A, 780, 825, 980, 1300, 1329, 1720, 1802, [1873, 1899])
      },
      {
        id: "ev-ac1-abul-feast", year: 1191, game: "ac1",
        title: "상인왕의 연회",
        summary: "[[abul-nuqoud|아불 누쿠드]]는 손님들을 환대하며 [[salahuddin|살라딘]]의 전쟁을 지원해 준 그들의 관용에 건배한다. 그러다 태도를 바꿔, 자기 뒤에서 수군거린 것을 다 들었다며 손님들을 몰아세운다. 그들이 성지의 신성함이나 적 잉글랜드를 핑계로 돈을 대지만 실은 모든 고통이 두려움과 증오에서 나온다고 말한다. \"나는 또 다른 대의에 맹세했다. 모두가 평화롭게 살 새로운 세상\"이라고 외친 뒤, 쓰러지는 손님들 앞에서 \"탈출하려는 자는 모두 죽여라\"라고 명령한다.",
        links: ["abul-nuqoud", "salahuddin"],
        sources: at(AC1_MB4A, [2216, 2221], [2250, 2261], 2273, 2300, 2315, 2329, 2347, [2373, 2376], 2388, 2406)
      },
      {
        id: "ev-ac1-abul", year: 1191, game: "ac1",
        title: "아불 누쿠드 암살",
        summary: "[[altair|알타이어]]는 혼란 속에서 [[abul-nuqoud|아불 누쿠드]]를 암살한다. 돈을 어디에 왜 썼느냐는 물음에 아불은 자신의 본질 때문에 다스리던 사람들에게 멸시당했고, 화려한 옷도 그 증오의 소리를 막지 못했다고 말한다. 복수가 아니라 양심 때문이었다며 \"나를 혐오하는 신을 위한 전쟁에 왜 돈을 대야 하지?\"라고 되묻는다. [[salahuddin|살라딘]]이 아니면 누구를 따르느냐는 물음에는 \"때가 되면 알게 될 것이다. 이미 알고 있을지도\"라고 답한다. 또 \"네 눈에서 의심이 보인다. 넌 우리를 막을 수 없다. 우리는 새로운 세상을 맞이하게 될 것\"이라는 말을 남긴다.",
        links: ["abul-nuqoud", "nine-targets", "salahuddin"],
        sources: at(AC1_MB4A, [2496, 2543], [2563, 2575])
      },
      {
        id: "ev-ac1-order-authority", year: 1191, game: "ac1",
        title: "'질서는 권위가 있어야 한다'",
        summary: "[[damascus|다마스쿠스]] [[rafiq|라피크]]에게 [[altair|알타이어]]는 [[abul-nuqoud|아불]]이 연회 손님들을 독살하고 전쟁이 그들 탓이라 비난했다고 전한다. 라피크는 상인왕이 원래 독특했다며 광기 탓으로 돌리고 [[al-mualim|알 무알림]]에게 물어보라고 한다. 알 무알림은 부패한 지도자를 없애 도시를 치유했다고 치하하지만, 알타이어는 처단한 자들이 죽을 때조차 후회 없이 성공을 확신했고 그들을 묶는 연대가 있다고 말한다. 알 무알림은 의문을 품는 것이 암살자의 본성이지만 생각을 멈추고 스승을 믿는 것도 의무라며, \"질서 없이는 진정한 평화도 없고, 질서는 권위가 있어야 한다\"고 답한다. 알타이어는 계급과 무기를 다시 돌려받고, 남은 두 명을 처단하라는 명령을 받는다.",
        links: ["altair", "al-mualim", "rafiq", "abul-nuqoud", "nine-targets"],
        sources: at(AC1_MB4A, [2798, 2826], [2876, 2882], [2897, 2911], [2927, 2939], [2957, 2964])
      },
      {
        id: "ev-ac1-acre-william-rafiq", year: 1191, game: "ac1",
        title: "다시 찾은 아크레 지부",
        summary: "[[acre|아크레]] 지부의 [[rafiq|라피크]]는 [[altair|알타이어]]가 자신을 되돌아보는 데 진심인 것 같다고 말한다. 표적이 [[william-of-montferrat|몽페라트의 윌리엄]]이라는 말에, 윌리엄은 왕이 전쟁을 하는 동안 섭정으로 임명되었다고 알려 준다. [[king-richard|리차드]]와 윌리엄의 아들 [[conrad|콘래드]]는 사이가 나쁘고, 아크레의 사라센 포로 거래 이후 콘래드는 티레로 돌아갔다. 리차드는 윌리엄을 '손님'으로 머물게 했는데, 알타이어는 이를 인질이라고 부른다. 라피크는 조사할 곳으로 남서쪽 리차드의 성채 앞 시장, 성 십자가 성당, 서쪽 경계를 꼽는다.",
        links: ["rafiq", "william-of-montferrat", "king-richard", "conrad", "acre"],
        sources: at(AC1_MB4B, [89, 151], [162, 176])
      },
      {
        id: "ev-ac1-william-investigation", year: 1191, game: "ac1",
        title: "윌리엄 조사",
        summary: "[[altair|알타이어]]는 [[acre|아크레]]를 돌며 정보를 모은다. 광장에서는 \"왕의 덕목에는 [[william-of-montferrat|윌리엄]]이 어울린다\"는 연설이 들린다. 조사 완료 화면에는 '윌리엄은 리차드의 방문으로 오늘 정신이 없을 것이다', '윌리엄의 궁수들의 위치를 보여 주는 지도를 얻었다'는 문구가 뜬다. 지도는 윌리엄이 보낸 궁수들을 처리해 준 대가로 받은 것이다. 지부로 돌아온 알타이어는, 리차드가 떠나면 윌리엄이 요새로 들어가 생각에 잠길 테니 그때 치겠다고 보고한다.",
        links: ["william-of-montferrat", "investigation", "rafiq", "acre", "king-richard"],
        sources: at(AC1_MB4B, 515, 600, 741, 758, 930, 980, 1360, 1715, 1734, [1827, 1866])
      },
      {
        id: "ev-ac1-richard-william", year: 1191, game: "ac1",
        title: "리차드 왕과 윌리엄의 언쟁",
        summary: "[[king-richard|리차드 왕]]은 \"3000명의 목숨이다, 윌리엄\"이라며, 포로들을 아군 병사와 교환할 거라 들었다고 따진다. [[william-of-montferrat|윌리엄]]은 사라센인들과의 거래는 명예롭게 끝나지 않았을 것이고 적은 오히려 두려움에 사로잡힐 것이라고 맞선다. 리차드는 \"신이 하는 일을 따르겠다고 맹세했지만 그 맹세를 짓밟았다\"며 \"설마 내 왕관이라도 원하는가\"라고 몰아세운 뒤 전장으로 떠난다. 혼자 남은 윌리엄은 \"새로운 세상에는 저자 같은 사람의 자리가 없을 것\"이라고 중얼거리고, 부대에 태만은 엄중히 처벌된다고 경고한다.",
        links: ["king-richard", "william-of-montferrat", "acre"],
        sources: at(AC1_MB4B, [1965, 1975], [1987, 2030], [2045, 2052])
      },
      {
        id: "ev-ac1-william", year: 1191, game: "ac1",
        title: "몽페라트의 윌리엄 암살",
        summary: "요새 안에서 [[altair|알타이어]]는 [[william-of-montferrat|윌리엄]]을 암살한다. 리차드를 살해하고 [[acre|아크레]]를 아들 [[conrad|콘래드]]에게 넘기려 했느냐는 물음에, 윌리엄은 아들은 제 수족도 못 가누는 멍청이이고 리차드도 실체 없는 믿음에 눈이 멀었다며 \"아크레는 그들 누구에게도 속하지 않는다\"고 답한다. 사람들의 음식을 빼앗고 강제로 부렸다는 비난에는 \"새로운 시대를 준비하게 하려던 것\"이고 힘든 시기에 나눠 주려고 가지고 있었을 뿐이라고 말한다. 그리고 \"너는 도시를 해방시키기는커녕 오히려 망칠 것이고, 마침내 네 스스로를 비난하게 될 것\"이라는 말을 남긴다.",
        links: ["william-of-montferrat", "nine-targets", "conrad", "king-richard"],
        sources: at(AC1_MB4B, [2560, 2601], [2633, 2646])
      },
      {
        id: "ev-ac1-william-report", year: 1191, game: "ac1",
        title: "윌리엄은 왜 지금?",
        summary: "[[acre|아크레]] 지부의 [[rafiq|라피크]]는 [[altair|알타이어]]가 아크레를 [[william-of-montferrat|윌리엄]]의 손에서 구했다고 기뻐한다. 알타이어는 십자군이 통합을 가장 필요로 할 때 왜 하필 지금이었는지, 윌리엄은 아크레를 [[conrad|콘래드]]에게 넘길 계획이 아니었다고 했다며 의문을 품는다. 라피크는 \"뱀의 말을 믿어서는 안 된다, 죽는 순간에도 독을 뿜으니까\"라며 [[masyaf|마시아프]]로 서둘러 가라고 한다.",
        links: ["rafiq", "william-of-montferrat", "conrad", "altair"],
        sources: at(AC1_MB4B, [2950, 2990])
      },
      {
        id: "ev-ac1-templars-revealed", year: 1191, game: "ac1",
        title: "표적들의 정체: 기사단",
        summary: "[[altair|알타이어]]는 수수께끼만 주는 [[al-mualim|알 무알림]]에게 \"더 이상은 싫다\"며, 명예를 잃은 게 아니라 빼앗겼고 망할 개처럼 다시 주워 오게 했다고 맞선다. 결국 알 무알림은 표적들이 피의 맹세로 연결되어 있다고 밝힌다. 그들은 누구냐는 물음에 \"논 노비스 도미네, 논 노비스\"라고 답하고, \"이제 [[robert-de-sable|로베르 드 사블레]]의 진정한 영향력을 깨달았군\"이라고 말한다. 도시의 지도자와 군대의 사령관들이 모두 그의 대의에 충성을 맹세했으며, 그들이 바라는 것은 신의 이름이 아니라 자신들을 위한 성지 '정복'이라고 한다. 리차드와 [[salahuddin|살라딘]]에 대해서는 \"[[templars|기사단]]에 반대하는 자는 누구든 파괴될 뿐\"이라고 답한다.",
        links: ["al-mualim", "templars", "robert-de-sable", "nine-targets", "altair"],
        sources: at(AC1_MB4B, 3026, [3038, 3068], [3087, 3133])
      },
      {
        id: "ev-ac1-leap-of-trust", year: 1191, game: "ac1",
        title: "'신뢰의 도약'",
        summary: "진실을 왜 숨겼느냐는 물음에 [[al-mualim|알 무알림]]은 [[altair|알타이어]]가 스스로 베일을 걷어 낼 수 있었고, 얻어 낸 정보가 주어진 정보보다 귀하며, 최근 행동이 믿음을 주지 못했다고 답한다. 솔로몬 사원에서 [[malik|말릭]]이 되찾아 온 유물이 무엇이냐는 물음에는 때가 되면 기사단의 임무처럼 [[temple-treasure|유물]]의 본질도 드러날 것이라며, 지금은 그것이 그들이 아니라 우리 손에 있다는 데 안심하라고 한다. 계급과 무기를 돌려준 뒤 \"내가 너를 죽이지 않을 것을 어떻게 알았는가?\"라고 묻자, 알타이어는 \"몰랐습니다. 신뢰의 도약을 했을 뿐입니다\"라고 답한다.",
        links: ["al-mualim", "altair", "temple-treasure", "malik"],
        sources: at(AC1_MB4B, [3144, 3220])
      },
      {
        id: "ev-ac1-majd-malik", year: 1191, game: "ac1",
        title: "예루살렘 지부, 다시 말릭에게",
        summary: "[[altair|알타이어]]는 [[jerusalem|예루살렘]] 지부의 [[malik|말릭]]에게 [[majd-addin|마아드 아딘]]이 표적이 되었다고 알린다. 말릭은 [[salahuddin|살라딘]]이 없는 사이 마아드 아딘이 스스로 그 역할을 맡았고, 공포와 협박으로 원하는 걸 얻을 뿐 그 자리에 대한 진정한 자격은 없다고 말한다. 예루살렘을 지배하는 만큼 철저히 보호받으니 계획을 잘 세우라고 경고하고, 알타이어가 도움을 '요구'가 아니라 '요청'한 것에 놀란다. 조사할 곳으로 남서쪽 모스크 근처, 최남단 교회, 시나고그 근처 길을 꼽는다.",
        links: ["malik", "majd-addin", "salahuddin", "jerusalem"],
        sources: at(AC1_MB4C, [33, 91])
      },
      {
        id: "ev-ac1-majd-investigation", year: 1191, game: "ac1",
        title: "마아드 아딘 조사",
        summary: "[[altair|알타이어]]는 [[jerusalem|예루살렘]]에서 정보원을 목적지까지 호위하고, 엿듣기와 심문으로 정보를 모은다. 일꾼들은 솔로몬 신전 서쪽 끝의 처형대를 또 고치라는 명령을 받았다며, [[salahuddin|살라딘]] 대신 임명된 자들이 하나같이 때 이른 죽음을 맞았고 그 자리가 한때 서기였던 [[majd-addin|마아드 아딘]]에게 넘어갔다고 수군거린다. 심문당한 부하는 처형당하는 자들이 범죄자가 아니라 그와 '그가 함께 일하는 자들'의 계획에 위험한 사람들이며, 그들에게 도시를 장악하는 것이 중요하다고 털어놓는다.",
        links: ["majd-addin", "investigation", "jerusalem"],
        sources: at(AC1_MB4C, 140, [242, 247], 560, 605, 840, 880, 905, 932)
      },
      {
        id: "ev-ac1-majd-malik-report", year: 1191, game: "ac1",
        title: "'자네는 아무것도 모르고, 추측만 할 뿐'",
        summary: "[[malik|말릭]]은 [[altair|알타이어]]를 '신참'이라 부르고, 알타이어는 \"한 사람의 능력은 의복의 표시가 아니라 행동으로 정의된다\"고 맞선다. 알타이어가 [[majd-addin|마아드 아딘]]이 근처에서 공개 처형을 한다며 뭘 해야 할지 안다고 하자, 말릭은 \"그래서 자네가 여전히 신참\"이라며 잘못될 것과 간과할 것을 생각하고 예상하라고 한다. 또 처형될 사람 중 하나가 형제단원이니, 구출은 자기 부하들이 맡을 테지만 마아드 아딘이 그를 죽이는 것만은 막으라고 부탁한다.",
        links: ["malik", "majd-addin", "assassins"],
        sources: at(AC1_MB4C, [997, 1062])
      },
      {
        id: "ev-ac1-majd-execution", year: 1191, game: "ac1",
        title: "마아드 아딘의 공개 처형",
        summary: "조사 완료 화면은 '오늘 사형 집행 동안 마아드 아딘을 공격하라. 그는 솔로몬 신전의 서쪽 외곽 근처에 있을 것'이라고 안내한다. 처형대에 선 [[majd-addin|마아드 아딘]]은 \"여러분 중에는 불평분자가 있다\"며 매춘부, 도둑, 도박꾼, 이단자 넷을 신의 심판에 넘기자고 외친다. 끌려 나온 여자는 \"그와 동침하지 않았다고 저를 죽이려는 것\"이라고 항변하고, 도박꾼으로 몰린 남자는 \"도시를 더럽히는 건 당신\"이라고 맞선다. 마아드 아딘이 \"모두가 위협받고 있다\"고 외치는 사이 [[altair|알타이어]]가 처형대로 뛰어든다.",
        links: ["majd-addin", "jerusalem"],
        sources: at(AC1_MB4C, 1080, [1169, 1177], [1189, 1193], [1222, 1238], 1267, 1283, 1295, [1320, 1327], [1351, 1355], [1377, 1388])
      },
      {
        id: "ev-ac1-majd", year: 1191, game: "ac1",
        title: "마아드 아딘 암살",
        summary: "[[altair|알타이어]]에게 찔린 [[majd-addin|마아드 아딘]]은 \"이제 막 시작했다\"고 외친다. 그는 \"조직은 도시를 원했고, 나는 권력을 원했다\"며 반체제 인사들의 목소리가 질서를 어지럽히기에 조직의 일에 함께했다고 말한다. 믿음이 다르다는 이유로 죽였느냐는 물음에는 \"물론 아니지. 죽일 수 있어서, 재밌었기에 죽였다\"고 답한다. 사람들이 환호하고 두려워했다며 \"나는 신과 같았다. 너도 할 수 있었다면 같은 짓을 했을 것\"이라고 하자, 알타이어는 \"한때는 그랬겠지. 하지만 남 위에 서려는 자의 말로가 어떻게 되는지 배웠다\"고 답한다.",
        links: ["majd-addin", "nine-targets"],
        sources: at(AC1_MB4C, [1395, 1462])
      },
      {
        id: "ev-ac1-majd-after", year: 1191, game: "ac1",
        title: "'더도 말고, 덜도 말고'",
        summary: "\"[[jerusalem|예루살렘]]에는 이제 새로운 지도자가 필요하네\"라는 [[altair|알타이어]]에게 [[malik|말릭]]은 아무 말이 없다. 알타이어가 조언 하나 없느냐고 묻자, 말릭은 \"자네는 암살자가 해야 하는 대로 일을 했네. 더도 말고, 덜도 말고\"라며 명령대로 한 일로 칭찬을 기대하느냐고 답한다. 그리고 [[masyaf|마시아프]]로 돌아가며 생각해 보라고 한다.",
        links: ["malik", "altair", "majd-addin"],
        sources: at(AC1_MB4C, [1636, 1662])
      },
      {
        id: "ev-ac1-piece-of-eden", year: 1191, game: "ac1",
        title: "에덴의 조각",
        summary: "[[altair|알타이어]]는 표적들이 왜 자기 지도자를 배신했는지 묻는다. [[al-mualim|알 무알림]]은 [[templars|기사단]]이 성지와 그 너머까지 지배하려 하지만, 그 계획은 기사단의 유물인 [[temple-treasure|에덴의 조각]]에 달려 있고 그것이 지금 우리 손에 있다고 답한다. 그는 은 덩어리 같은 유물을 보여 주며, 이것이 아담과 이브를 내쫓고 지팡이를 뱀으로 바꾸고 홍해를 갈랐으며, 에리스가 트로이 전쟁에 쓰고 가난한 농부가 물을 와인으로 바꿨다고 말한다. 이것을 든 자는 바라보는 자의 마음과 정신을 지배한다. [[garnier|가니에르]]의 사람들은 약초로 그 효과를 흉내 낸 실험이었고, [[talal|탈랄]]은 사람을, [[tamir|타미르]]는 무기를 댔다. 도시의 지배자들은 시민들을 완벽한 시민, 완벽한 군인으로 만들려 했다는 것이다. 알 무알림은 남은 기사단원이 [[acre|아크레]]의 [[sibrand|시브란드]]와 [[damascus|다마스쿠스]]의 [[jubair|주바이르]]라고 알려 준다.",
        links: ["al-mualim", "temple-treasure", "templars", "garnier", "talal", "tamir", "sibrand", "jubair"],
        sources: at(AC1_MB5A, 69, 80, [92, 104], [119, 170], [187, 197], [212, 218])
      },
      {
        id: "ev-ac1-jubair-rafiq", year: 1191, game: "ac1",
        title: "다마스쿠스의 영웅",
        summary: "[[damascus|다마스쿠스]] 지부의 [[rafiq|라피크]]는 \"다마스쿠스의 영웅이 오셨구만!\"이라며 [[altair|알타이어]]를 맞는다. 표적이 [[jubair|주바이르]]라는 말에 그는 [[salahuddin|살라딘]]의 수석 학자라며 의외라고 한다. 주바이르는 요 며칠 학자들을 조직해 거리에서 설교하게 했는데, 빛과 불꽃, 죄 사함, 길과 새로운 세계에 대한 종말론적 헛소리라고 한다. 조사할 곳으로 남쪽의 학술원과 감시탑, 동쪽의 병원을 꼽고, \"자네 확실히 바뀌었어, 더 좋은 쪽으로\"라고 말한다.",
        links: ["rafiq", "jubair", "salahuddin", "damascus"],
        sources: at(AC1_MB5A, [307, 308], [322, 325], [336, 348], [364, 376])
      },
      {
        id: "ev-ac1-jubair-investigation", year: 1191, game: "ac1",
        title: "주바이르 조사",
        summary: "정보원은 기사단원을 죽이고 얻은 편지를 다른 정보원에게 맡겼으니 그를 찾아 받아 가라고 한다. 거리에서는 [[jubair|주바이르]]의 학자들이 \"사악한 자들이 만든 거짓 지식\"이라며 집과 학교의 모든 글을 내놓으라고 외친다. [[altair|알타이어]]가 심문한 학자는 \"우리는 모든 사람이 걷게 될 길의 돌을 놓고 있다\", \"그분이 내게 많은 것을 보여 주셨다\"고 말한다. 지부로 돌아온 알타이어는 주바이르가 도시의 지식을 없애는 데 혈안이 되어 학자들을 시켜 모든 문서를 모으고 있으며, 곧 마드라사 알 칼라사에서 회의를 열 것이라고 보고한다.",
        links: ["jubair", "investigation", "rafiq", "damascus"],
        sources: at(AC1_MB5A, 470, 485, 1000, 1180, 1300, 1320, 1340, [1431, 1459])
      },
      {
        id: "ev-ac1-jubair-burning", year: 1191, game: "ac1",
        title: "책을 태우는 주바이르",
        summary: "마드라사에서 [[jubair|주바이르]]는 \"이 도시에 존재하는 문자 하나하나 전부 다 없어져야 한다\"고 외친다. 한 학자가 두루마리는 조상들이 남긴, 무지의 어둠에서 우리를 구원할 신호라고 맞서자, 주바이르는 \"너는 고작 잉크 방울로 쓰인 단어를 믿는다\", \"누가 그것을 거기에 두었는지 생각해 본 적 있나\"라며 반박한다. 그는 그 학자를 죽이고, 학자들에게 남은 글을 모두 모아 거리에 쌓으면 수레로 거둬 파괴하겠다고 명령한다. 이후 거리에서 \"하나의 지혜로 다스려지는, 진실과 통합의 시대\"를 외친다.",
        links: ["jubair", "damascus"],
        sources: at(AC1_MB5A, [1561, 1570], [1581, 1591], [1602, 1618], [1647, 1664], [1941, 1954])
      },
      {
        id: "ev-ac1-jubair", year: 1191, game: "ac1",
        title: "주바이르 암살",
        summary: "[[altair|알타이어]]는 [[jubair|주바이르]]를 암살하며 \"사람들은 무엇을 믿을지 자유로워야 하고, 의견이 다르다고 누군가를 벌할 권리는 우리에게 없다\"고 말한다. 그들을 자유롭게 하는 것은 힘이 아니라 지식이라는 것이다. 주바이르는 \"네가 구하려고 애쓴 책들과 내가 다른 게 뭐지? 네가 인정하지 않는 지식의 원천이라는 것?\"이라고 되묻는다. 십자군을 부추긴 것도, [[salahuddin|살라딘]]과 그 부하들을 정의로운 투쟁심으로 채운 것도 고대 두루마리였다며 \"나 역시 작은 희생을 만들었다\"는 말을 남긴다.",
        links: ["jubair", "nine-targets", "salahuddin"],
        sources: at(AC1_MB5A, [2042, 2105])
      },
      {
        id: "ev-ac1-truth", year: 1191, game: "ac1",
        title: "'진실이란 무엇이냐'",
        summary: "[[damascus|다마스쿠스]] [[rafiq|라피크]]는 \"무지가 악을 키운다\"며 [[altair|알타이어]]를 치하한다. [[masyaf|마시아프]]에서 알타이어가 왜 [[jubair|주바이르]]와 시브란드냐고 묻자, [[al-mualim|알 무알림]]은 그들이 변화의 길을 닦고 있으며, 그들을 약하게 하면 적도 약해진다고 답한다. 기사단은 잘린 곳이 금세 돋는 히드라 같다며, 이제 단 한 사람만이 우리와 궁극적인 목표 사이를 막고 있다고 말한다. 떠나기 전 알 무알림이 \"진실이란 무엇이냐\"고 묻자, 알타이어는 세상은 환상이고 신조는 우리에게 자유로워지라는 것이 아니라 현명해지라는 것이라고 답한다. 알 무알림은 기사단이 그 환상을 이용해 지배하려 하기에 유물을 가져오게 했고, 잠가 두었으며, 그들을 처단하는 것이라고 말한다.",
        links: ["al-mualim", "altair", "assassins", "templars", "temple-treasure", "sibrand", "jubair", "rafiq"],
        sources: at(AC1_MB5A, [2221, 2224], [2240, 2243], 2263, [2308, 2311], [2323, 2362], [2378, 2427], 2438)
      },
      {
        id: "ev-ac1-sibrand-rafiq", year: 1191, game: "ac1",
        title: "아크레 라피크의 사과",
        summary: "[[acre|아크레]] 지부의 [[rafiq|라피크]]는 [[sibrand|시브란드]]가 새롭게 [[teutonic-order|튜턴 기사단]]의 리더로 임명되어 [[venice|베네치아]] 구역에 살며 아크레 항구를 운영한다고 알려 준다. 조사할 곳으로 동쪽 부두의 선박과 선원들 사이, 항구가 내려다보이는 십자가 근처의 북동쪽 예배당, 북쪽 성 요한 문 앞을 꼽는다. 그리고 우리 대의를 위한 [[altair|알타이어]]의 헌신을 의심한 것을 사과한다. 알타이어는 \"잘못한 것은 나라네. 난 내가 신조보다 위에 있다고 생각했네\"라고 답한다.",
        links: ["rafiq", "sibrand", "teutonic-order", "acre", "altair"],
        sources: at(AC1_MB5B, [34, 82])
      },
      {
        id: "ev-ac1-sibrand-investigation", year: 1191, game: "ac1",
        title: "시브란드 조사",
        summary: "정보원이 낮에 훔친 편지를 [[altair|알타이어]]에게 건네고, 곧 지도가 갱신된다. 항구에서는 모든 선박을 비우고 [[teutonic-order|튜턴 기사단]]의 명령을 따르라는 포고가 들린다. 알타이어가 심문한 부두 관리인은 [[sibrand|시브란드]]가 배 100척 가까이를 징발해 봉쇄를 하려 한다고 털어놓는다. 지부로 돌아온 알타이어는 시브란드가 죽음이 다가온다는 사실에 미쳐 가며 공포에 잠식되어, 부두를 봉쇄하고 그 안에 숨어 배가 도착하기만을 기다리고 있다고 보고한다. 표적들이 모두 연결되어 있어 자기 행동이 그들 사이에 다 퍼졌다면서도, \"두려움이 그를 약하게 할 것\"이라고 말한다.",
        links: ["sibrand", "investigation", "teutonic-order", "rafiq", "acre"],
        sources: at(AC1_MB5B, 280, 300, [375, 385], 405, 440, 470, [1056, 1096])
      },
      {
        id: "ev-ac1-sibrand-priest", year: 1191, game: "ac1",
        title: "의심에 사로잡힌 시브란드",
        summary: "부두에서 [[sibrand|시브란드]]는 한 성직자를 몰아세운다. 아무도 그를 보증하지 않는다며 \"신의 자녀가 아니라 암살자이기 때문일 수도 있다\", \"너는 그들과 똑같은 예복을 입고 있다\"고 의심한다. 성직자가 굴복해서는 안 된다고 하자 시브란드는 권위에 도전한다며 화를 내고, \"[[william-of-montferrat|윌리엄]]과 [[garnier|가니에르]]는 너무 자신에 차 있어서 목숨을 잃게 되었지. 난 똑같은 실수는 하지 않을 것\"이라며 그를 죽인다. 그리고 수상한 움직임이 보이면 경비에게 보고하라고 명령한다.",
        links: ["sibrand", "william-of-montferrat", "garnier"],
        sources: at(AC1_MB5B, [1215, 1222], [1238, 1256], [1268, 1275], [1286, 1295], 1309, [1323, 1343])
      },
      {
        id: "ev-ac1-sibrand", year: 1191, game: "ac1",
        title: "시브란드 암살",
        summary: "[[altair|알타이어]]에게 찔린 [[sibrand|시브란드]]는 \"당연히 겁을 먹었지\"라고 말한다. 신의 품에 안기라는 말에 \"나는 무엇이 우리를 기다리는지 알고 있다\"며, 아무것도 기다리지 않는다는 것, \"이 삶이 우리의 전부\"라는 것이 두렵다고 답한다. 그의 역할은 해상을 봉쇄해 \"멍청한 왕과 여왕\"이 증원을 보내지 못하게 하는 것이었다. 성지를 점령할 때까지냐는 물음에 \"자유롭게 하는 것이다, 신앙의 폭정에서\"라고 답하고, \"난 명령을 따랐고 대의를 믿었을 뿐이다, 너처럼\"이라는 말을 남긴다.",
        links: ["sibrand", "nine-targets", "templars"],
        sources: at(AC1_MB5B, [1567, 1618], 1631)
      },
      {
        id: "ev-ac1-sibrand-doubt", year: 1191, game: "ac1",
        title: "\"내가 잘못된 거라면?\"",
        summary: "[[acre|아크레]] 지부로 돌아온 [[altair|알타이어]]에게 [[rafiq|라피크]]는 [[masyaf|마시아프]]로 가서 성공을 알리라고 한다. 알타이어가 불안해 보이자 라피크는 그가 죽인 사람들에게 뭔가를 느꼈다고 짚는다. 후회, 불확실, 동정은 다 예상되는 것이고 포용해야 하며, 이런 감정들이 사람으로 만들어 준다고 말한다. 알타이어는 \"내가 잘못된 거라면? 이 사람들이 죽을 운명이 아니었다면? 잘못된 결과였지만 의도는 순수했다면?\"이라고 묻는다. 라피크는 이런 생각은 자신에게 어렵다며 [[al-mualim|알 무알림]]이 도와줄 것이라고 답한다.",
        links: ["rafiq", "altair", "al-mualim"],
        sources: at(AC1_MB5B, [1943, 2016])
      },
      {
        id: "ev-ac1-last-target", year: 1191, game: "ac1",
        title: "마지막 표적, 로베르 드 사블레",
        summary: "[[al-mualim|알 무알림]]은 이제 [[robert-de-sable|로베르 드 사블레]]만이 승리를 가로막고 있다며, 그가 죽으면 기사단 유물의 지식과 위험도 사라진다고 말한다. 로베르는 [[temple-treasure|에덴의 조각]]의 힘을 맛본 뒤 그것을 파괴할 무기가 아니라 야망을 이룰 도구로 보게 되었다. 그는 우리처럼 평화를, 모든 사람이 하나가 된 세상을 꿈꾸지만, 평화를 강요해 자유 의지를 빼앗으려 한다는 것이다. 알 무알림은 \"희생자들에게 증오를 품지 마라\"고 당부하고, 지금까지의 죽음이 로베르에게 보낸 메시지였지만 그가 무시했다며, 처음 그를 만난 [[jerusalem|예루살렘]]으로 가라고 명령한다.",
        links: ["al-mualim", "robert-de-sable", "temple-treasure", "jerusalem", "nine-targets"],
        sources: at(AC1_MB6A, [164, 167], [175, 213], [221, 248], 288)
      },
      {
        id: "ev-ac1-robert-jerusalem", year: 1191, game: "ac1",
        title: "로베르가 예루살렘에 있다",
        summary: "[[malik|말릭]]은 [[robert-de-sable|로베르]]의 기사들을 직접 봤다며, 복수심이 판단을 흐리게 하지 말라고 당부한다. [[altair|알타이어]]는 복수가 아니라 지식을 바란다며, 지금까지 처단한 이들이 모두 로베르를 중심으로 함께 일했다고 말한다. 그들은 십자군도 사라센도 아닌 [[templars|템플 기사단]]이고, 오직 로베르에게 충성한다는 것이다. 말릭은 이 사람이 달라졌다며 놀라고, 로베르의 기사들을 본 곳으로 서쪽 감시탑과 병원 근처, 남서쪽 성묘 교회를 알려 준다.",
        links: ["malik", "robert-de-sable", "templars", "jerusalem"],
        sources: at(AC1_MB6A, [355, 382], [387, 418], [424, 446])
      },
      {
        id: "ev-ac1-robert-investigation", year: 1191, game: "ac1",
        title: "로베르 조사",
        summary: "영어 음성에 따르면 [[altair|알타이어]]는 [[jerusalem|예루살렘]]에서 정보원들을 돕고 정보를 모은다. 한 정보원은 [[robert-de-sable|로베르]]의 부하들은 전투 준비가 잘 되어 있으니 한꺼번에 싸우지 말고 쫓아오게 한 뒤 반격하라고 조언한다. 광장에서는 한 템플 기사가 \"십자군을 형제처럼 받아들이자\"며 평화를 설교하고, 알타이어는 그를 붙잡아 \"너희는 우리 모두를 노예로 만들 것\"이라고 맞선다. 그는 \"그게 최선\"이라고 답한다. 또 다른 정보원은 로베르 경비병의 배치를 적은 지도를 건넨다.",
        links: ["robert-de-sable", "templars", "investigation", "jerusalem"],
        sources: at(AC1_MB6A, 680, 1040, 1160, 1240, 1260, 1480)
      },
      {
        id: "ev-ac1-malik-apology", year: 1191, game: "ac1",
        title: "알타이어의 사과",
        summary: "[[altair|알타이어]]는 [[robert-de-sable|로베르]]와 템플 기사단원들이 [[majd-addin|마아드 아딘]]의 장례에 참석하러 온다며, 자신도 장례에 가서 로베르와 맞서겠다고 [[malik|말릭]]에게 보고한다. 시민들은 나뉘어 대부분은 그들의 목숨을 요구하지만, 나머지는 그들이 평화를 위해 왔다고 말한다. 떠나기 전 알타이어는 \"내가 어리석었다\"며, 자기 때문에 말릭이 팔을 잃고 [[kadar|카다르]]를 잃었다고 사과한다. 말릭은 \"자네는 솔로몬 사원에 함께 갔던 자와는 다른 사람\"이라며 사과할 것이 없다고 하고, 자신도 질투 때문에 부주의했다고 털어놓는다. \"우리는 하나\"이며 승리의 영광처럼 패배의 고통도 함께 나눠야 한다고 말한다.",
        links: ["malik", "altair", "kadar", "majd-addin", "robert-de-sable"],
        sources: at(AC1_MB6A, [1558, 1572], [1576, 1612], [1620, 1684])
      },
      {
        id: "ev-ac1-funeral", year: 1191, game: "ac1",
        title: "마아드 아딘의 장례",
        summary: "사제는 너무 빨리 떠난 [[majd-addin|마아드 아딘]]을 애도하며, 우리 모두 언젠가 이 세상을 떠나는 것은 해가 뜨고 지는 것처럼 자연스러운 일이라고 말한다. 그러다 그를 살해한 자가 \"우리 사이에 서 있다\"며 [[altair|알타이어]]를 붙잡으라고 외친다. 알타이어는 [[templars|템플 기사단]]과 싸운 끝에 [[robert-de-sable|로베르]]로 보이는 기사를 쓰러뜨린다.",
        links: ["majd-addin", "robert-de-sable", "jerusalem"],
        sources: at(AC1_MB6A, [1803, 1804], [1805, 1844], 1870, [1880, 1914])
      },
      {
        id: "ev-ac1-maria", year: 1191, game: "ac1",
        title: "로베르의 대역",
        summary: "투구를 벗기자 [[robert-de-sable|로베르]]가 아니라 여자가 나타난다. 그녀는 \"마법이 아니지. 우리는 네가 올 것을 알았다\"며, 로베르가 도망칠 시간이 필요했다고 말한다. 처음엔 유물을, 그다음엔 사람들을 잃어 성지를 지배하는 것은 멀어졌지만, 로베르는 [[altair|알타이어]]의 승리를 자신들의 이점으로 바꿀 기회를 봤다고 한다. 그는 사라센과 십자군이 힘을 합쳐 [[assassins|암살단]]에 맞서도록 간청하러 [[arsuf|아수프]]로 가고 있다. 알타이어가 처치한 이들은 양측의 희생자였기에, 알타이어 스스로 암살단을 공동의 적으로 만들었다는 것이다. 알타이어는 \"아홉이 아니라 여덟\"이라며, 그녀는 표적이 아니니 살려 준다.",
        links: ["maria", "robert-de-sable", "arsuf", "assassins", "nine-targets"],
        sources: at(AC1_MB6A, [1976, 1990], [2000, 2018], [2025, 2058])
      },
      {
        id: "ev-ac1-to-arsuf", year: 1191, game: "ac1",
        title: "아수프로",
        summary: "[[altair|알타이어]]는 [[malik|말릭]]에게 함정이었고 [[robert-de-sable|로베르]]가 대역을 두었다고 알린다. 로베르가 [[king-richard|리차드]]와 [[salahuddin|살라딘]]에게 공동의 적, 즉 [[assassins|암살단]]에 맞서 연합하자고 간청하러 간다는 것이다. 자신이 죽인 자들이 양측 모두에게 중요한 사람들이었기에 그 계획은 말이 된다고 한다. 말릭은 스승의 허락 없이 움직이면 형제단을 위협한다며 [[masyaf|마시아프]]로 돌아가라고 하지만, 알타이어는 \"신조와 교리를 방패처럼 휘두르지 말라\", \"스승님은 우리에게 무언가를 숨기고 있다\"고 맞선다. 알타이어는 말릭에게 자신이 죽인 자들을 섬겼던 사람들을 살펴보라고 부탁하고 [[arsuf|아수프]]로 떠난다.",
        links: ["malik", "robert-de-sable", "arsuf", "king-richard", "salahuddin", "al-mualim", "maria"],
        sources: at(AC1_MB6A, [2271, 2341], [2346, 2365], [2371, 2393])
      },
      {
        id: "ev-ac1-arsuf-richard", year: 1191, game: "ac1",
        title: "리차드 왕 앞에서",
        summary: "[[arsuf|아수프]] 전장을 뚫고 온 [[altair|알타이어]]는 \"말을 나누러 온 것\"이라며 [[king-richard|리차드 왕]] 앞에 선다. 자신을 보낸 것은 [[salahuddin|살라딘]]이 아니라 [[al-mualim|알 무알림]]이며, 왕의 부관 [[robert-de-sable|로베르 드 사블레]]가 배신할 계획이라고 말한다. 리차드는 로베르가 [[acre|아크레]]의 혼란 때문에 [[assassins|암살단]]에 복수하려 한다며 그를 지원하겠다고 하지만, 알타이어는 [[william-of-montferrat|윌리엄]], [[garnier|가니에르]], [[sibrand|시브란드]]가 무엇을 하려 했는지 밝히고 그들이 로베르에게서 명령을 받았다고 말한다. 로베르는 암살자들은 조작의 대가라고 맞선다. 서로가 서로를 문제 삼자 리차드는 \"이 판단을 나보다 더 현명한 자, 주님의 손에 맡기겠다\"며 결투로 결정하자고 한다.",
        links: ["king-richard", "robert-de-sable", "al-mualim", "arsuf", "william-of-montferrat", "garnier", "sibrand"],
        sources: at(AC1_MB6B, [834, 845], [851, 902], [907, 949], [955, 1009])
      },
      {
        id: "ev-ac1-robert-death", year: 1191, game: "ac1",
        title: "로베르 드 사블레 암살",
        summary: "결투 끝에 [[altair|알타이어]]는 [[robert-de-sable|로베르]]를 쓰러뜨린다. 로베르는 \"넌 꼭두각시에 불과하다. 그가 날 배신한 것처럼 그는 널 배신했다\"고 말한다. 유물을 찾았던 사람은 아홉이 아니라 열 명이었고, 비밀을 아는 자를 살려 둘 수 없으니 그 열 번째도 죽여야 한다는 것이다. 열 번째는 바로 [[al-mualim|알 무알림]]이었다. 알타이어가 \"그는 [[templars|템플러]]가 아니다\"라고 하자, 로베르는 알 무알림이 어떻게 우리를 그렇게 잘 알았겠느냐며 그도 [[temple-treasure|유물]]에 관심이 있고, 둘의 유일한 차이는 그가 그것을 나눌 생각이 없다는 점이라고 말한다. 그리고 \"네 위대한 적인 내가 네 안전장치였다니 아이러니하지 않나. 다음엔 네 차례겠지\"라는 말을 남긴다.",
        links: ["robert-de-sable", "al-mualim", "temple-treasure", "nine-targets", "templars"],
        sources: at(AC1_MB6B, [1300, 1308], [1311, 1334], [1337, 1363], [1383, 1398])
      },
      {
        id: "ev-ac1-richard-talk", year: 1191, game: "ac1",
        title: "리차드 왕과의 대화",
        summary: "[[king-richard|리차드]]는 \"오늘은 신이 자네의 손을 들어 주었군\"이라 하고, [[altair|알타이어]]는 \"신은 상관없었습니다. 제가 더 잘 싸웠을 뿐\"이라고 답한다. 왜 목숨을 걸고 한 사람을 죽이러 왔느냐는 물음에 알타이어는 복수가 아니라 정의, 그리고 거기에 있을 평화를 위해서라고 한다. 리차드는 백성들은 자기들이 원하는 것을 모르기에 우리 같은 자에게 의지한다고 하지만, 알타이어는 \"우리가 무엇인지는 우리가 선택하는 것\"이라고 답한다. 리차드는 지금도 [[salahuddin|살라딘]]이 부하들을 죽이고 있어 가야 한다며, 그가 자신의 취약함을 보면 행동을 다시 생각할 것이고 때가 되면 알타이어가 추구하는 것이 가능해질지도 모른다고 말한다. 알타이어는 스승과 할 말이 많다며 떠난다.",
        links: ["king-richard", "altair", "salahuddin", "al-mualim"],
        sources: at(AC1_MB6B, [1414, 1431], [1432, 1471], [1476, 1499], [1502, 1530], [1534, 1550])
      },
      {
        id: "ev-ac1-masyaf-entranced", year: 1191, game: "ac1",
        title: "홀린 마시아프",
        summary: "[[masyaf|마시아프]]로 돌아온 [[altair|알타이어]] 앞에서 마을 주민들은 \"스승님께서 보여 주시는 것만이 존재할 뿐\", \"우리를 빛으로 인도해 주시는 스승님께 경배를\"이라며 넋이 나간 듯 길을 걷는다. 알타이어는 \"[[al-mualim|알 무알림]]이 한 짓인가?\"라고 묻는다. 동료 암살자들도 \"스승님의 명령으로\", \"빛을 향해서\"를 외치며 \"그는 길을 걷지 않는다, 제거하라\"고 알타이어를 공격한다.",
        links: ["masyaf", "al-mualim", "temple-treasure", "assassins"],
        sources: at(AC1_MB7, [71, 100], 120, [278, 286])
      },
      {
        id: "ev-ac1-malik-joins", year: 1191, game: "ac1",
        title: "말릭의 합류",
        summary: "[[malik|말릭]]이 부하들을 이끌고 나타난다. [[al-mualim|알 무알림]]이 우리를 배신했다는 [[altair|알타이어]]의 말에, 말릭은 솔로몬 신전 아래 유적에 다시 가 보니 [[robert-de-sable|로베르]]가 적어 둔 일지에 폭로가 가득했다고 말한다. 스승님은 지금까지 우리를 이용했고, 우리는 성지를 구한 게 아니라 그에게 넘겨준 꼴이 되었다는 것이다. 알타이어는 말릭에게 홀린 사람들의 주의를 돌리고 뒤에서 요새를 점령하라고 하며, 그들은 정신이 지배되어 있으니 가능하면 죽이지 말라고 당부한다.",
        links: ["malik", "al-mualim", "robert-de-sable", "masyaf"],
        sources: at(AC1_MB7, [328, 368], [373, 416])
      },
      {
        id: "ev-ac1-al-mualim-confront", year: 1191, game: "ac1",
        title: "알 무알림과의 대면",
        summary: "요새 정원에서 [[al-mualim|알 무알림]]은 [[temple-treasure|유물]]의 힘으로 [[altair|알타이어]]를 붙잡는다. 왜 이런 짓을 하느냐는 물음에 \"어느 것도 진실이 아니고, 모든 것은 허용된다는 증거를 찾았다\"고 답하고, 배신자를 처단하라고 명령한다. 알타이어는 알 무알림이 [[robert-de-sable|로베르]]의 목적을 역겹다고 했지만 자신도 마찬가지였다고 비난한다. 알 무알림은 알타이어에게서 하나를 빼앗으면 자신에게서 다른 하나를 빼앗는 셈이었기에 템플 기사단원들을 죽여야 했다고 말한다. 서재에서 유물을 보여 줬을 때 알타이어를 홀리려 했지만, 알타이어는 다른 이들처럼 되지 않고 환상을 꿰뚫어 봤다는 것이다. 그는 홍해가 갈라진 적도, 물이 와인으로 변한 적도 없으며 그 모든 것이 유물이 만든 환상이었다고 말한다. 사라센과 십자군이 따르는 신들도 유령이니, 자신은 피를 덜 흘리는 다른 환상을 주려는 것뿐이라고 한다.",
        links: ["al-mualim", "temple-treasure", "templars", "altair"],
        sources: at(AC1_MB7, [466, 520], [678, 701], [763, 815], [824, 857], [861, 895], [897, 909])
      },
      {
        id: "ev-ac1-al-mualim-death", year: 1191, game: "ac1",
        title: "알 무알림의 최후",
        summary: "유물로 만든 환영들과 싸운 끝에 [[altair|알타이어]]는 [[al-mualim|알 무알림]]을 쓰러뜨린다. 알 무알림이 \"제자는 스승을 이길 수 없다\"고 하자, 알타이어는 \"La shai'a waqe'on mutlak bal kollon mumkin(어느 것도 진실이 아니고, 모든 것은 허용된다)\"이라고 답한다. 알 무알림은 \"네가 이겼다\"며 전리품을 챙기라고 한다. 알타이어가 이것은 파괴되었어야 했다고 하자, 그는 십자군을 끝내고 진정한 평화를 불러올 유일한 물건을 파괴하라는 거냐고 되묻는다. \"더 많은 지혜를 위해서는 더 많은 슬픔이 따른다\"는 말을 남긴다.",
        links: ["al-mualim", "temple-treasure", "altair", "assassins"],
        sources: at(AC1_MB7, [1051, 1060], [1066, 1077], [1087, 1105])
      },
      {
        id: "ev-ac1-map", year: 1191, game: "ac1",
        title: "유물이 보여 준 지도",
        summary: "[[al-mualim|알 무알림]]은 숨을 거두기 전 \"파괴해라! 네가 하겠다고 말했으니 파괴해라!\"라고 하고, [[altair|알타이어]]는 \"난 못 하겠어\"라고 답한다. 알 무알림은 \"아니, 넌 할 수 있다. 하지만 그러지 않겠지\"라는 말을 남긴다. 알타이어가 [[temple-treasure|유물]]을 들자 정원 위로 빛나는 지구 모양의 지도가 떠오르고, [[malik|말릭]]과 암살자들이 다가온다.",
        links: ["al-mualim", "temple-treasure", "malik", "altair"],
        sources: at(AC1_MB7, [1111, 1121], 1130, 1144)
      },
      {
        id: "ev-altair-codex-apple", year: 1191, game: "ac2",
        title: "유물과 씨름하는 알타이어",
        summary: "어쌔신 크리드 II에서 모을 수 있는 [[altair|알타이어]]의 [[codex|역사 자료]] 1쪽에 적힌 이야기다. [[al-mualim|알 무알림]]을 없앤 뒤 알타이어는 유물과 함께 수일, 어쩌면 몇 주나 몇 달을 보내며 확신을 잃는다. 사람들이 음식을 가져다주거나 탐구를 멈추라고 했고, [[malik|말릭]]은 아예 모두 그만두라고까지 했지만, 그는 [[temple-treasure|에덴의 조각]]을 반드시 이해해야 한다며 멈추지 않는다. 그는 유물의 기능이 지배와 조종이고, 빛나는 모습에 눈이 먼 자들은 원하는 것을 모두 얻는 대신 절대적인 복종을 대가로 치른다고 적는다. 아버지 같던 알 무알림이 가장 큰 적이 되었지만 그의 환영을 없애고 자유로워졌다면서도, 파괴하기로 마음먹었던 유물을 이해하려고 앉아 있다고 쓴다.",
        links: ["altair", "codex", "al-mualim", "malik", "temple-treasure"],
        sources: at(AC2_P33, [370, 492])
      },
      {
        id: "ev-altair-codex-reform", year: 1191, game: "ac2",
        title: "암살단을 다시 세우다",
        summary: "어쌔신 크리드 II에서 모을 수 있는 [[altair|알타이어]]의 [[codex|역사 자료]] 6쪽에 적힌 이야기다. [[robert-de-sable|로베르 드 사블레]]는 죽었을지 모르지만 그의 조직은 건재하며, 이제 그림자 속으로 숨어 추적하기 어려워졌고 키프로스에는 이미 소문이 무성하다고 쓴다. 알타이어는 [[assassins|암살단]]의 계획도 바뀌어야 한다며, 요새를 버리고 사람들 앞에서 화려하게 암살하지 않고 조심스레 덫을 놓아야 한다고 적는다. 손가락을 자르는 관습도, 지상낙원에 대한 소망도, 독을 금지하는 것도 의미가 없으며, 암살단의 검은 손가락을 자르지 않고도 쓸 수 있고 거짓말과 수도원으로 자신들을 감출 필요도 없다고 한다. '우리는 새롭게 다시 태어나야 한다'고 끝맺는다.",
        links: ["altair", "codex", "robert-de-sable", "templars", "assassins", "hidden-blade"],
        sources: at(AC2_P33, [526, 576])
      },
      {
        id: "ev-first-session", year: 2012, game: "ac1", yearVerified: true,
        title: "첫 접속 실패",
        summary: "영어 음성에 따르면 처음 [[animus|애니머스]]에 접속했을 때 [[desmond|데스몬드]]는 기억에 고정되지 못한다. 심리적 충격이 너무 커서 거부 반응을 보인다는 말이 나오고, \"보이는 건 진짜가 아니라 과거의 영상일 뿐\"이라는 진정에도 효과가 없자 그를 끌어낸다.",
        links: ["animus", "desmond", "warren-vidic", "lucy-stillman"],
        sources: at(AC1_MS, [0, 6], [20, 60])
      },
      {
        id: "ev-ac2-ezio-birth", year: 1459, game: "ac2",
        title: "에지오의 탄생",
        summary: "[[animus|애니머스]] 화면에 '[[subject-16|실험체 16]] · 비밀 정보'와 '[[desmond|실험체 17]] · 데스몬드 마일즈'가 나란히 뜨고, '관련 메모리 검색 중', '메모리 비교' 뒤에 기억에 접속한다. 한 여인이 아이를 낳고, \"도련님이십니다!\"라는 말에 일하다 소식을 듣고 달려온 남편이 아이를 안는다. 그는 \"너는 [[auditore-family|아디토레 가문]]의 사내란다. 너는 용사로 태어났어!\"라고 말하고, 아이의 이름을 \"[[ezio|에지오 아디토레 다 피렌체]]\"로 정한다.",
        links: ["ezio", "subject-16", "desmond", "animus"],
        sources: at(AC2_P1, [428, 449], [457, 465], [471, 531])
      },
      {
        id: "ev-ac2-vieri-brawl", year: 1476, yearVerified: true, game: "ac2",
        title: "다리 위의 패싸움",
        summary: "[[ezio|에지오]]와 친구들이 [[vieri-de-pazzi|비에리 데 파치]] 일당과 맞붙는다. 비에리가 [[auditore-family|아디토레 가문]]을 모욕하고 불행을 떠넘겼다는 이유다. 비에리는 오히려 에지오의 여동생을 들먹이며 도발한다. 싸움 도중 형 [[federico|페데리코]]가 나타나 함께 싸우고, 파치 쪽이 물러난다. 입술을 다친 에지오는 돈이 없어, 쓰러진 상대들의 주머니를 뒤져 치료비를 마련한 뒤 의사에게 간다.",
        links: ["ezio", "vieri-de-pazzi", "federico", "auditore-family", "florence"],
        sources: at(AC2_P2, 10, [44, 98], [155, 175], [249, 274], [343, 350], [427, 454])
      },
      {
        id: "ev-ac2-race", year: 1476, yearVerified: true, game: "ac2",
        title: "형제의 지붕 달리기",
        summary: "집에 가기 전 [[federico|페데리코]]가 교회 지붕까지 달리기 시합을 제안한다. 지붕 위에서 둘은 좋은 삶을 살고 있다며, 이 삶도 자신들도 절대 변하지 않기를 바란다.",
        links: ["federico", "ezio"],
        sources: at(AC2_P2, [532, 552], [560, 577], [600, 607])
      },
      {
        id: "ev-ac2-cristina", year: 1476, yearVerified: true, game: "ac2",
        title: "크리스티나의 집",
        summary: "[[ezio|에지오]]는 밤늦게 [[cristina|크리스티나]]를 찾아가 함께 밤을 보낸다. 아침에 크리스티나의 아버지가 둘을 발견하고 경비병을 부르자, 에지오는 지붕으로 달아난다.",
        links: ["cristina", "ezio"],
        sources: at(AC2_P2, [635, 637], [679, 745], [780, 819])
      },
      {
        id: "ev-ac2-medici-letter", year: 1476, yearVerified: true, game: "ac2",
        title: "메디치 은행 심부름",
        summary: "아버지 [[giovanni-auditore|지오반니]]는 파치와의 싸움과 [[cristina|크리스티나]] 일을 다 안다며, 젊을 때 자기 모습과 똑같다고 말한다. 그리고 [[lorenzo-medici|로렌조 메디치]]가 검토할 서류를 메디치 은행에 가져다 주라고 한다. 은행 사람은 로렌조가 카레지 빌라에 가서 내일이 지나야 돌아온다고 전한다. 돌아온 [[ezio|에지오]]는 아버지가 [[uberto-alberti|우베르토 알베르티]]와 이야기하는 것을 보는데, 우베르토는 \"프란체스코는 감옥에 있지 않나\"라며 지오반니를 안심시킨다.",
        links: ["giovanni-auditore", "lorenzo-medici", "uberto-alberti", "francesco-de-pazzi", "ezio"],
        sources: at(AC2_P2, [992, 1046], [1107, 1126], [1192, 1241])
      },
      {
        id: "ev-ac2-pazzi-trial", year: 1476, yearVerified: true, game: "ac2",
        title: "프란체스코 데 파치의 혐의",
        summary: "어머니 [[maria-auditore|마리아]]는 [[ezio|에지오]]가 [[vieri-de-pazzi|비에리]]와 싸운 일을 알고 있다. 비에리도 아버지 [[francesco-de-pazzi|프란체스코 데 파치]]의 일로 괴로울 것이라며, 프란체스코가 좋은 사람은 아니지만 사람을 죽일 만큼 나쁜 사람이었는지는 몰랐다고 한다. 에지오의 아버지가 증거를 가진 유일한 사람이라 증언하게 될 것이라고도 말한다.",
        links: ["maria-auditore", "francesco-de-pazzi", "vieri-de-pazzi", "giovanni-auditore"],
        sources: at(AC2_P2, [1317, 1393])
      },
      {
        id: "ev-ac2-leonardo", year: 1476, yearVerified: true, game: "ac2",
        title: "레오나르도와의 만남",
        summary: "어머니 [[maria-auditore|마리아]]를 따라 화가 [[leonardo|레오나르도]]의 작업실에 간 [[ezio|에지오]]는 그의 그림 옮기는 일을 돕는다. 레오나르도는 그림이 좋긴 하지만 건축이나 해부학처럼 좀 더 실체적이고 직접적인 일을 하고 싶다고 털어놓는다. 에지오는 아버지 일을 돕고 있다고 말한다.",
        links: ["leonardo", "maria-auditore", "ezio"],
        sources: at(AC2_P2, [1484, 1525], [1525, 1550], [1612, 1621])
      },
      {
        id: "ev-ac2-duccio", year: 1476, yearVerified: true, game: "ac2",
        title: "두치오 혼내 주기",
        summary: "여동생 [[claudia|클라우디아]]가 결혼을 약속한 [[duccio|두치오]]가 바람을 피운다는 소문에 울고 있다. [[ezio|에지오]]는 다른 여자에게 반지를 선물하는 두치오를 찾아가 따지고, 혼내 준다.",
        links: ["claudia", "duccio", "ezio"],
        sources: at(AC2_P2, [1674, 1699], [1768, 1829])
      },
      {
        id: "ev-ac2-petruccio", year: 1476, yearVerified: true, game: "ac2",
        title: "페트루치오의 깃털",
        summary: "몸이 아파 침대에서 쉬어야 할 막내 동생 [[petruccio|페트루치오]]가 밖에 나와 있다. [[ezio|에지오]]는 동생이 원하는 깃털을 지붕 위를 돌아다니며 모아다 준다. 왜 깃털이 필요한지는 때가 되면 말해 주겠다고 한다.",
        links: ["petruccio", "ezio"],
        sources: at(AC2_P2, [1953, 1960], [2122, 2130])
      },
      {
        id: "ev-ac2-delivery", year: 1476, yearVerified: true, game: "ac2",
        title: "아버지의 특별한 배달",
        summary: "[[giovanni-auditore|지오반니]]는 [[ezio|에지오]]에게 시내의 협력자들에게 서류를 전하고, 근처 비둘기 우리에서 전갈을 가져오라고 한다. 서류를 받은 사람은 지오반니에게 \"그들이 오늘 저녁 이동할 것\"이라고 전하라며, 설명도 없이 떠난다.",
        links: ["giovanni-auditore", "ezio"],
        sources: at(AC2_P3, [5, 26], [162, 178])
      },
      {
        id: "ev-ac2-arrest", year: 1476, yearVerified: true, game: "ac2",
        title: "아디토레 가문 체포",
        summary: "집에 돌아온 [[ezio|에지오]]에게 하녀 [[annetta|아네타]]가 경비들이 아버지와 형제들을 시뇨리아 광장의 베키오 궁전 감옥으로 끌고 갔다고 알린다. 어머니 [[maria-auditore|마리아]]는 저항하다 큰 충격을 받았다. 아네타는 어머니와 [[claudia|클라우디아]]를 자기 언니 집으로 데려가고, 경비들은 에지오도 찾고 있다.",
        links: ["annetta", "maria-auditore", "claudia", "giovanni-auditore", "federico", "petruccio", "auditore-family", "florence"],
        sources: at(AC2_P3, [281, 326])
      },
      {
        id: "ev-ac2-prison", year: 1476, yearVerified: true, game: "ac2",
        title: "감옥의 아버지",
        summary: "[[ezio|에지오]]는 벽을 타고 감옥 창가에 올라 아버지를 만난다. [[giovanni-auditore|지오반니]]는 이런 일이 벌어질 줄은 알았지만 이렇게 빨리일 줄은 몰랐다고 하며, 설명할 시간이 없다고 말한다. 집 사무실의 숨겨진 문 뒤에 있는 상자에서 모든 것을 챙기고, 그 안의 편지와 서류를 [[uberto-alberti|우베르토]]에게 가져다 주라고 한다.",
        links: ["giovanni-auditore", "uberto-alberti", "ezio"],
        sources: at(AC2_P3, [537, 594])
      },
      {
        id: "ev-ac2-chest", year: 1476, yearVerified: true, game: "ac2",
        title: "숨겨진 상자",
        summary: "[[ezio|에지오]]는 [[eagle-vision|매의 눈]]으로 아버지 사무실의 숨겨진 문을 찾는다. 그 뒤의 상자에서 하얀 로브와 검, 그리고 편지를 꺼내고 로브를 입는다. 편지는 '보낸 사람: [[giovanni-auditore|지오반니 아디토레]]'로 데이터베이스에 기록되지만, 화면의 손글씨는 읽을 수 없다.",
        links: ["eagle-vision", "giovanni-auditore", "ezio", "hidden-blade"],
        sources: at(AC2_P3, [710, 770])
      },
      {
        id: "ev-ac2-uberto-night", year: 1476, yearVerified: true, game: "ac2",
        title: "우베르토의 약속",
        summary: "거리에서 경비들은 [[ezio|에지오]]를 반역자라 부르며 덤빈다. 에지오는 밤에 [[uberto-alberti|우베르토 알베르티]]를 찾아가 서류를 건넨다. 우베르토는 오해가 있었다며, 서류에 이 도시와 [[auditore-family|아디토레 가문]]에 대한 음모의 증거가 담겨 있으니 내일 아침 재판에서 보이기만 하면 아버지와 형제들이 풀려날 것이라고 한다.",
        links: ["uberto-alberti", "ezio", "auditore-family"],
        sources: at(AC2_P3, [800, 813], [870, 942])
      },
      {
        id: "ev-ac2-execution", year: 1476, yearVerified: true, game: "ac2",
        title: "아디토레 처형",
        summary: "광장에서 [[uberto-alberti|우베르토]]는 [[giovanni-auditore|지오반니]]를 반역죄로 재판하고, 증거로 전달된 서류를 \"모르겠다\"고 잡아뗀다. 그는 무죄의 증거가 없다며 지오반니와 공범들에게 사형을 선고한다. 지오반니는 \"네가 바로 반역자\"라며 언젠가 갚아 주리라고 외치고, 지오반니와 [[federico|페데리코]], [[petruccio|페트루치오]]는 교수대에서 처형된다. [[ezio|에지오]]가 \"아버지!\"라고 외치자 우베르토는 그도 한패라며 잡으라고 한다. 에지오는 도망친다.",
        links: ["uberto-alberti", "giovanni-auditore", "federico", "petruccio", "auditore-family", "ezio", "florence"],
        sources: at(AC2_P3, [1053, 1101], [1106, 1131])
      },
      {
        id: "ev-ac2-annetta-meet", year: 1476, yearVerified: true, game: "ac2",
        title: "아네타와의 재회",
        summary: "처형장에서 달아난 [[ezio|에지오]]를 [[annetta|아네타]]가 찾아낸다. 에지오는 막을 수 없었다며 괴로워하고, 아네타는 어머니와 누이가 무사하다며 두오모 북쪽에 있는 자기 언니 집에서 만나자고 한다.",
        links: ["annetta", "ezio", "florence"],
        sources: at(AC2_P4, 7, [35, 62])
      },
      {
        id: "ev-ac2-paola", year: 1476, yearVerified: true, game: "ac2",
        title: "파올라의 가르침",
        summary: "[[annetta|아네타]]의 언니 [[paola|파올라]]의 집에 도착한 [[ezio|에지오]]는 쉬지 않고 [[uberto-alberti|우베르토 알베르티]]를 죽이러 가겠다고 한다. 파올라는 우베르토가 쉬운 상대가 아니고 에지오는 살인자가 아니라며, 죽이는 법이 아니라 살아남는 법을 가르쳐 주겠다고 한다. 그녀의 사람들에게서 군중 속에 섞여드는 법과 소매치기를 배운 에지오에게, 파올라는 아버지의 검과 손목 보호구를 내준다. 감옥에서 가져온 방법을 묻자 방금 가르친 기술을 썼을 뿐이라며, 고장 난 손목 장치는 [[leonardo|레오나르도 다빈치]]에게 가져가 보라고 한다. 왜 생면부지의 자신을 돕느냐는 물음에는 동병상련이라고 답한다.",
        links: ["paola", "annetta", "uberto-alberti", "leonardo", "hidden-blade", "ezio"],
        sources: at(AC2_P4, [645, 720], [1014, 1037], [1105, 1160])
      },
      {
        id: "ev-ac2-leonardo-blade", year: 1476, yearVerified: true, game: "ac2",
        title: "레오나르도가 고친 칼날",
        summary: "[[leonardo|레오나르도]]는 [[ezio|에지오]]가 가져온 장치가 오래됐지만 매우 진보된 기법으로 만들어졌다며, 도안 없이는 고칠 수 없다고 한다. 그러다 함께 온 암호화된 문서를 보고, 문자의 배열을 바꿔 세 번째 글자마다 뽑아내 해독한다. 문서대로 칼날을 고친 그는 착용자의 헌신을 위해 약지를 잘라야 한다고 겁을 주지만, 곧 예전엔 그랬지만 이제는 개선되어 그럴 필요가 없다고 웃는다. 이런 문서를 더 찾으면 가져와 달라고, 새 도안이 있으면 칼날도 더 좋게 만들어 주겠다고 한다.",
        links: ["leonardo", "hidden-blade", "ezio"],
        sources: at(AC2_P4, [1211, 1278], [1281, 1343], [1350, 1365])
      },
      {
        id: "ev-ac2-leonardo-guards", year: 1476, yearVerified: true, game: "ac2",
        title: "레오나르도를 찾아온 경비",
        summary: "[[florence|피렌체]] 경비대가 [[leonardo|레오나르도]]의 작업실에 찾아와, 그가 죄인 [[ezio|에지오]] 아디토레를 만났다는 첩보가 있다며 그를 때린다. 에지오가 경비를 처리하자 레오나르도는 시체를 안으로 가져와 연구를 위해 시에서 받은 다른 시체들 옆에 두라고 한다.",
        links: ["leonardo", "ezio"],
        sources: at(AC2_P4, [1364, 1430], [1441, 1455], [1493, 1512])
      },
      {
        id: "ev-ac2-santa-croce", year: 1476, yearVerified: true, game: "ac2",
        title: "산타 크로체로",
        summary: "[[paola|파올라]]는 [[ezio|에지오]]가 자신이 가르친 기술과 [[leonardo|레오나르도]]가 고친 칼날을 갖췄으니 이제 실행에 옮기는 일만 남았다고 한다. 그녀의 사람들에 따르면 오늘 저녁 산타 크로체 성당 회랑에서 베로키오의 작품을 공개하는 자리가 열리고, [[uberto-alberti|우베르토]]가 그곳에 온다. 에지오는 어머니와 누이를 파올라에게 부탁하고 떠난다.",
        links: ["paola", "uberto-alberti", "florence"],
        sources: at(AC2_P5, [183, 213])
      },
      {
        id: "ev-ac2-uberto-lorenzo", year: 1476, yearVerified: true, game: "ac2",
        title: "우베르토와 로렌조",
        summary: "산타 크로체 앞에서 [[uberto-alberti|우베르토]]는 [[lorenzo-medici|로렌조 데 메디치]]에게, 스스로 [[florence|피렌체]]의 군주로 즉위하신 분에게 그런 소리를 들을 입장은 아니라고 비꼰다. 로렌조가 그런 적 없다고 하자, 우베르토는 이제 그렇게 유세를 부릴 수 없을 것이고 이번 일로 '저희 쪽'도 보고 배운 게 있다고 말한다. 로렌조가 파치를 뜻하느냐고 묻자, 우베르토는 쓸데없는 오해를 사지 말라며 말을 아낀다.",
        links: ["uberto-alberti", "lorenzo-medici", "francesco-de-pazzi"],
        sources: at(AC2_P5, [339, 375])
      },
      {
        id: "ev-ac2-uberto", year: 1476, yearVerified: true, game: "ac2",
        title: "우베르토 알베르티 암살",
        summary: "회랑의 공개 행사에서 [[uberto-alberti|우베르토]]는 손님에게 [[auditore-family|아디토레 가문]] 일로 머리가 아팠는데 기분 전환으로 안성맞춤이라고 말한다. [[ezio|에지오]]가 군중 속에서 다가가 그를 찌르자, 우베르토는 \"결국 너도 똑같은 사람이 되고 말았군\"이라고 하고, 에지오는 그런지도 모른다고 답한다. 에지오는 아디토레 가문은 끝나지 않았다고 외치며 경비들을 피해 달아난다.",
        links: ["uberto-alberti", "ezio", "auditore-family"],
        sources: at(AC2_P5, [581, 615], [722, 735])
      },
      {
        id: "ev-ac2-leave-florence", year: 1476, yearVerified: true, game: "ac2",
        title: "피렌체를 떠나다",
        summary: "[[paola|파올라]]는 [[florence|피렌체]]를 떠나는 게 좋겠다고 한다. [[ezio|에지오]]는 [[monteriggioni|몬테리지오니]]에 빌라가 있는 [[mario-auditore|마리오 삼촌]]에게 가겠다고 한다. 파올라는 수배령이 내려져 벽보가 붙었으니 떼어 내고, 포고자에게 뇌물을 주거나 거짓 증언을 한 관리들을 없애면 자유롭게 떠날 수 있다고 알려 준다. 은신처에서 에지오는 [[claudia|클라우디아]]에게 아버지와 형제들이 죽었다고 털어놓고, 어머니를 잘 돌봐 달라고 부탁한다. 셋은 피렌체를 떠나며 집이 어떻게 됐는지, 제대로 장례를 치러 줬을지 이야기한다.",
        links: ["paola", "mario-auditore", "claudia", "maria-auditore", "ezio", "florence"],
        sources: at(AC2_P5, [967, 1000], [1233, 1305], [1454, 1495])
      },
      {
        id: "ev-ac2-vieri-ambush", year: 1476, yearVerified: true, game: "ac2",
        title: "비에리의 매복과 마리오",
        summary: "[[monteriggioni|몬테리지오니]] 가까이에서 [[vieri-de-pazzi|비에리 데 파치]]가 부하들을 이끌고 [[ezio|에지오]] 가족을 막아선다. 비에리는 아비와 형제 일은 미안하게 됐다고 비웃으며 어미와 누이에게도 섭섭지 않게 대접하겠다고 위협한다. 그때 [[mario-auditore|마리오]]가 부하들과 나타나 비에리 일당을 쫓아낸다. 오랜만이라 에지오는 삼촌을 바로 알아보지 못한다.",
        links: ["vieri-de-pazzi", "mario-auditore", "ezio", "claudia", "maria-auditore"],
        sources: at(AC2_P6, [29, 125], [181, 197])
      },
      {
        id: "ev-ac2-monteriggioni", year: 1476, yearVerified: true, game: "ac2",
        title: "몬테리지오니와 빌라 아디토레",
        summary: "[[mario-auditore|마리오]]는 [[monteriggioni|몬테리지오니]]를 안내하며, 이곳 사람들은 근면 성실하다고 한다. 몬테리지오니는 [[florence|피렌체]]와 해마다 동맹과 원수를 오간다고 한다. [[villa-auditore|빌라 아디토레]]는 지어진 지 거의 200년이 된 집으로, 온갖 비밀을 간직한 별난 분이던 증조할아버지가 지었다고 한다. 오랜 세력 다툼으로 손볼 곳이 많지만 돈도 시간도 없다고 아쉬워한다. 마리오는 [[ezio|에지오]]가 훈련받으러 온 줄 알았다며, [[giovanni-auditore|지오반니]]가 아무 말도 안 해 주었다는 데 놀란다.",
        links: ["mario-auditore", "monteriggioni", "villa-auditore", "giovanni-auditore", "ezio"],
        sources: at(AC2_P6, [237, 420])
      },
      {
        id: "ev-ac2-mario-training", year: 1476, yearVerified: true, game: "ac2",
        title: "마리오의 훈련과 아버지의 비밀",
        summary: "[[ezio|에지오]]는 가족을 데리고 멀리 떠나겠다고 하지만, [[mario-auditore|마리오]]는 [[vieri-de-pazzi|비에리]]도 상대 못 했는데 이대로 떠나면 일주일도 못 버틸 거라며 어머니와 누이를 위해서라도 기술을 익히라고 한다. 훈련 중 마리오는 \"네 아버지는 암살자였단다\"라고 밝힌다. 에지오는 암살자니 [[templars|템플 기사단]]이니 하는 이야기가 소설 같다고 하지만, 마리오의 서재에 몰래 들어갔던 일을 들키고 결국 받아들인다. 마리오는 템플 기사단이 십자군 전쟁 때 만들어졌고 200년 전 프랑스에서 해체되었다고 역사에 기록되었지만, 사실은 사악한 일을 계속하려 음지로 숨어들었을 뿐이라고 설명한다. 훈련을 마친 에지오는 3일 안에 스페인으로 떠나겠다고 하고, 마리오는 실망한다.",
        links: ["mario-auditore", "giovanni-auditore", "assassins", "templars", "ezio"],
        sources: at(AC2_P6, [739, 775], [775, 870], [954, 990])
      },
      {
        id: "ev-ac2-san-gimignano", year: 1477, game: "ac2",
        title: "산 지미냐노 공격",
        summary: "[[vieri-de-pazzi|비에리]]가 [[ezio|에지오]] 때문에 [[monteriggioni|몬테리지오니]]를 괴롭혀 왔다는 말에 에지오는 마리오를 따라나선다. [[mario-auditore|마리오]]는 비에리가 우리를 괴롭히는 건 그가 기사단이고 우리가 [[assassins|암살단]]이기 때문이라고 한다. 비에리가 성문을 닫고 경비를 세웠지만 남쪽 문이 허술해, 마리오의 부하들이 경비의 시선을 끄는 사이 에지오가 벽을 넘어 문을 연다. 이후 마리오가 습격을 받자 에지오에게 비에리를 찾아 정의를 보여 주라고 한다.",
        links: ["mario-auditore", "vieri-de-pazzi", "san-gimignano", "templars", "assassins"],
        sources: at(AC2_P6, [995, 1000], [1192, 1265], [1356, 1367], [1588, 1653])
      },
      {
        id: "ev-ac2-templar-meeting", year: 1477, game: "ac2",
        title: "템플 기사단의 회합",
        summary: "[[san-gimignano|산 지미냐노]]에서 [[vieri-de-pazzi|비에리]]는 템플 기사단원들과 계획을 나눈다. 한 사람은 남아 용병을 관리하고, [[francesco-de-pazzi|프란체스코]]는 도시 안 병력을 정비해 공격 시점을 정하며, [[jacopo-de-pazzi|야코포]]는 일이 끝난 뒤 시민들이 동요하지 않게 하라는 것이다. [[mario-auditore|마리오]]가 군대를 교란한다는 걱정에 비에리의 아버지는 그놈은 늘 그랬다며 그 동생놈과 똑같다고 한다. 비에리는 그렇다면 마리오도 동생이 있는 곳으로 보내 주겠다고 한다. 회합은 \"이해의 아버지께서 당신을 인도하여 주시기를\"이라는 인사로 끝난다.",
        links: ["vieri-de-pazzi", "francesco-de-pazzi", "jacopo-de-pazzi", "templars", "mario-auditore"],
        sources: at(AC2_P6, [1703, 1745])
      },
      {
        id: "ev-ac2-vieri", year: 1477, game: "ac2",
        title: "비에리 데 파치 암살",
        summary: "[[ezio|에지오]]는 [[vieri-de-pazzi|비에리]]를 찌르고, 너희들의 계획이 뭐냐, 아버지가 그걸 알아서 살해한 거냐고 따진다. 비에리는 고해 성사라도 하길 바라느냐며 비웃는다. 분노한 에지오가 시체를 욕하자 [[mario-auditore|마리오]]는 죽은 자에 대한 존중을 보이라며, 넌 비에리가 아니니 똑같은 놈이 될 필요 없다고 한다. 에지오는 결국 \"죽음이 네가 찾던 안식을 주기를\"이라고 말한다. 마리오는 비에리에게서 나온 편지를 에지오에게 주며 시간 있을 때 읽어 보라고 한다.",
        links: ["vieri-de-pazzi", "mario-auditore", "ezio", "nine-targets"],
        sources: at(AC2_P6, [1875, 1921])
      },
      {
        id: "ev-ac2-rodrigo", year: 1477, game: "ac2",
        title: "로드리고 보르지아",
        summary: "빌라로 돌아온 [[ezio|에지오]]에게 [[mario-auditore|마리오]]는 파치를 부하로 두는 스페인 사람이 있다고 알려 준다. 유럽에서 손꼽히는 유력 인사이자 [[templars|템플 기사단]]의 수장인 [[rodrigo-borgia|로드리고 보르지아]]다. 에지오는 아버지와 형제가 죽은 것도 그 때문이라며, 자유로워지려면 그와 맞서야 하지만 먼저 다른 템플 기사단원들부터 처리하겠다고 한다. 아버지의 명단이 안내할 것이고, 다음으로 [[florence|피렌체]]에 가서 프란체스코를 잡겠다고 한다.",
        links: ["mario-auditore", "rodrigo-borgia", "templars", "francesco-de-pazzi", "ezio"],
        sources: at(AC2_P6, [2009, 2055])
      },
      {
        id: "ev-ac2-giocondo-letter", year: 1477, game: "ac2",
        title: "프라 지오콘도의 편지",
        summary: "[[mario-auditore|마리오]]가 준 편지는 '프라 지오콘도'가 프란체스코에게 보낸 것이다. 요청대로 아드님([[vieri-de-pazzi|비에리]])과 이야기를 나누었다며, 비에리가 경솔하고 생각보다 행동이 앞서며 아랫사람을 장난감처럼 다뤄 보고서에도 최소 3명이 상해를 입었다고 쓴다. 다만 구제 불능은 아니라며, 아드님은 낮은 자존감 때문에 아버지에게 인정받고 관심받고 싶어 하는 것이고 거칠고 분노에 찬 행동도 아버지의 관심을 끌려는 것이라고 본다. 아드님에게 조금 더 관심을 보여 주라고 권하며, 이 편지가 오간 걸 아드님이 알면 무슨 일이 생길지 걱정된다고 덧붙인다.",
        links: ["vieri-de-pazzi", "francesco-de-pazzi"],
        sources: at(AC2_P6, [2068, 2108])
      },
      {
        id: "ev-ac2-codex-wall", year: 1477, game: "ac2",
        title: "코덱스 벽과 알타이어",
        summary: "[[mario-auditore|마리오]]는 서재 벽에 붙인 암호문들을 보여 준다. [[ezio|에지오]]의 아버지가 그 사건 전까지 암호문 일부를 찾아 해독해 왔다는 것이다. 에지오는 그중 하나를 [[leonardo|레오나르도 다빈치]]가 해독했다고 알아본다. 암호문은 서로 이어지는 고리가 있어 지도처럼 보인다. 마리오는 [[giovanni-auditore|지오반니]]와 자신이 알아낸 바로는, 이 문서들이 [[temple-treasure|에덴의 조각]]을 가졌던 암살자 [[altair|알타이어]]가 쓴 것이고 땅 아래 숨겨진 아주 오래되고 강력한 무언가를 알려 주려 했다고 한다. 에지오는 아버지 대신 돕겠다며, [[vieri-de-pazzi|비에리]]에게 얻은 암호문부터 레오나르도에게 해독을 부탁하겠다고 한다.",
        links: ["mario-auditore", "codex", "altair", "temple-treasure", "leonardo", "giovanni-auditore", "villa-auditore"],
        sources: at(AC2_P6, [2132, 2205])
      },
      {
        id: "ev-ac2-villa-repair", year: 1478, game: "ac2",
        title: "빌라 재건",
        summary: "[[claudia|클라우디아]]는 삼촌이 빌라를 수리할 돈을 마련해 보라며 자신에게 장부 일을 시켰다고 투덜댄다. [[ezio|에지오]]가 돈을 구하겠다고 하자, 클라우디아는 수리비와 에지오가 가져오는 물건을 장부에 기록하고 수입은 금고에 보관하겠다고 한다. [[mario-auditore|마리오]]가 부른 건축가는 돈만 있으면 바로 시작하겠다며, 상점을 지으면 땅 주인으로서 물건을 싸게 살 수 있고 수리를 하면 찾는 사람이 늘어 수입도 오른다고 설명한다. 이곳이 마리오의 할아버지에게 매우 중요했다고도 한다.",
        links: ["claudia", "mario-auditore", "villa-auditore", "monteriggioni"],
        sources: at(AC2_P7, [58, 115], [173, 233])
      },
      {
        id: "ev-ac2-sanctuary", year: 1478, game: "ac2",
        title: "성소와 알타이어의 갑옷",
        summary: "[[mario-auditore|마리오]]는 빌라 지하의 [[sanctuary|성소]]를 보여 준다. 증조할아버지가 [[assassins|암살단]]을 기리고 그 비밀을 지키려 지은 곳으로, 자유가 위험에 처했을 때 목숨을 아끼지 않고 자유를 수호했던 선대 암살자들의 석상이 서 있다. 가운데에는 [[altair|알타이어]]의 갑옷이 있는데, 매우 가볍고 단단하다. 마리오는 주고 싶지만 방법을 모른다며, 증조할아버지는 '완전한 때'가 이르기 전까지 열지 못할 것이라 했다고 전한다. 이탈리아 전역에 흩어진 [[assassin-tombs|지하 무덤]]에 몇백 년 전 이 여섯 석상이 있었고, 그 무덤들에 관련된 보물이 있다는 소문이 있다고 한다. 마리오는 어릴 적 찾아다녔지만 소용없었다며, 에지오라면 운이 좋을지 모른다고 한다.",
        links: ["mario-auditore", "sanctuary", "altair", "assassin-tombs", "villa-auditore", "assassins"],
        sources: at(AC2_P7, [345, 438])
      },
      {
        id: "ev-ac2-leonardo-2years", year: 1478, game: "ac2",
        title: "2년 만의 레오나르도",
        summary: "[[leonardo|레오나르도]]는 2년 만에 다시 만난 [[ezio|에지오]]에게 살아 있었다며 반가워한다. 에지오가 가져온 [[codex|암호문]]은 고대 문자를 잘 활용해 해독이 어렵지만, 암살 기술에 관한 내용으로 보인다. 그중 도안이 아닌 스케치를 모아 보던 레오나르도는 대단한 생각이라며 손목 보호구를 손봐 주겠다고 한다. 조수 빈첸조에게 연습할 준비를 시키고, 완성된 손목 보호구로 검을 막아 보게 한다. 에지오가 꼭 만나야 할 사람이 있다고 하자, 레오나르도는 메르카토 근처 도둑굴에 가 보라고 한다.",
        links: ["leonardo", "codex", "hidden-blade", "la-volpe"],
        sources: at(AC2_P7, [589, 645], [726, 760])
      },
      {
        id: "ev-ac2-la-volpe", year: 1478, game: "ac2",
        title: "라 볼페",
        summary: "거리에서 누군가 [[ezio|에지오]]의 주머니를 털어 달아난다. 에지오가 쫓아가 붙잡자, 그는 살인자, 망나니, 도둑이라 불리지만 그냥 [[la-volpe|라 볼페]]라고 부르라고 한다. 이 도시에서 벌어지는 일을 다 아는 게 자기 일이라는 그는, 로마에서 방금 도착한 상인에게 들었다며 오늘 저녁 해 질 무렵 [[francesco-de-pazzi|프란체스코 데 파치]]의 비밀 모임이 있다고 알려 주고 돈을 돌려준다. 그리고 프란체스코가 성당 안에서 사람들을 만나고 있다며, 지하 납골당으로 가면 그 모임을 엿들을 수 있다고 안내한다.",
        links: ["la-volpe", "francesco-de-pazzi", "florence"],
        sources: at(AC2_P7, [1011, 1095], [1220, 1241])
      },
      {
        id: "ev-ac2-novella-tomb", year: 1478, game: "ac2",
        title: "노벨라의 비밀",
        summary: "지하 납골당을 지나던 [[ezio|에지오]]는 경비들 사이를 빠져나가며 [[assassin-tombs|암살자의 무덤]]을 지난다. 업로더 챕터 제목에 따르면 이곳은 '노벨라의 비밀'로, 다리우스의 증표가 있는 무덤이다. [[templars|템플 기사단]] 회의를 엿들으라는 목표가 이어진다.",
        links: ["assassin-tombs", "sanctuary"],
        sources: at(AC2_P7, [1252, 1260], [1436, 1450], [2150, 2160])
      },
      {
        id: "ev-ac2-pazzi-conspiracy", year: 1478, game: "ac2",
        title: "파치 음모의 회합",
        summary: "성당 안에서 사제가 축복한 뒤, [[baroncelli|베르나르도]]는 검, 몽둥이, 도끼, 갑옷, 활까지 다 준비됐다고 보고한다. 바티칸에서도 허락이 떨어졌고, 피를 흘리지 않는 한이라는 조건으로 계획에 은총까지 기원해 주었다고 한다. 두오모에서 거사를 치를 준비는 끝났지만 그 멍청한 놈이 자꾸 계획을 바꾼다며, [[giuliano-medici|줄리아노]]가 미사에 빠지지 않게 하라고 한다. 메디치 놈들은 너무 멍청하고 거만해 눈치채지 못할 거라는 말에, 두건 쓴 인물([[rodrigo-borgia|로드리고 보르지아]])은 \"내 손자에게 일어났던 일을 벌써 잊었냐\"며 프란체스코를 꾸짖는다. 그는 로마로 돌아가기 전 처리할 일이 있다며 떠나고, \"내일 새로운 해가 [[florence|피렌체]]에 뜨겠구먼\"이라고 한다.",
        links: ["rodrigo-borgia", "francesco-de-pazzi", "baroncelli", "jacopo-de-pazzi", "lorenzo-medici", "templars", "florence"],
        sources: at(AC2_P7, [2153, 2232])
      },
      {
        id: "ev-ac2-duomo-plan", year: 1478, game: "ac2",
        title: "두오모에서의 내일",
        summary: "[[ezio|에지오]]는 [[la-volpe|라 볼페]]에게 엄청난 양의 무기와 교황의 지지까지 얻은 것 같다고 전한다. 메디치 가문과 관련이 있고 내일 아침 두오모에서 시작된다는 것이다. 메디치 가족은 주일 미사를 위해 두오모에 나타날 것이고 [[florence|피렌체]] 사람 모두가 모일 테니, 대미사 중에 일을 벌일 모양이다. 에지오는 사람이 많으면 몰래 숨어 있다가 작전을 막을 수 있다고 한다. 그들이 성공하면 [[lorenzo-medici|로렌조]]를 잃고 피렌체는 파치의 손에 넘어갈 거라는 말에, 에지오는 그런 일은 절대 없을 거라고 다짐한다.",
        links: ["la-volpe", "lorenzo-medici", "francesco-de-pazzi", "florence"],
        sources: at(AC2_P7, [2356, 2405])
      },
      {
        id: "ev-ac2-duomo-attack", year: 1478, game: "ac2",
        title: "두오모의 습격",
        summary: "두오모 앞에서 [[ezio|에지오]]는 로렌조의 동생 [[giuliano-medici|줄리아노]]와 [[francesco-de-pazzi|프란체스코]]를 찾아낸다. 프란체스코는 \"이걸 받아라, 배신자 놈!\"이라며 줄리아노를 공격하고, 살려 달라는 그를 \"너 같은 놈에게 자비란 없다\"며 찔러 죽인다. 프란체스코는 [[lorenzo-medici|로렌조]]에게도 네 가족 모두 내 칼에 죽으리라고 외친다. 에지오는 부상한 로렌조를 노리는 자들을 처치한다.",
        links: ["giuliano-medici", "francesco-de-pazzi", "lorenzo-medici", "florence"],
        sources: at(AC2_P8, [170, 235])
      },
      {
        id: "ev-ac2-lorenzo-rescue", year: 1478, game: "ac2",
        title: "로렌조를 구하다",
        summary: "부상한 [[lorenzo-medici|로렌조]]는 지금은 복수보다 믿을 수 있는 사람들이 있는 집으로 데려가 달라고 한다. 그는 [[francesco-de-pazzi|프란체스코 데 파치]]와 그 가족을 모두 멸하리라고 다짐한다. 저택에 도착해 \"[[poliziano|폴리찌아노]]! 문을 열란 말이다!\"라고 외쳐 들어간다. 로렌조가 왜 자신을 도왔냐고 묻자, [[ezio|에지오]]는 어르신만 파치에게 형제를 잃은 게 아니라며 자신을 소개한다. 로렌조는 [[giovanni-auditore|지오반니]]가 명예와 신의를 아는 좋은 사람이었다고 말한다. 파치 무리가 공격해 오자 로렌조는 에지오에게 도시를 구하고 파치의 목을 없애 달라고 부탁한다.",
        links: ["lorenzo-medici", "francesco-de-pazzi", "giovanni-auditore", "ezio", "poliziano"],
        sources: at(AC2_P8, [503, 645])
      },
      {
        id: "ev-ac2-francesco", year: 1478, game: "ac2",
        title: "프란체스코 데 파치 암살",
        summary: "프란체스코가 군대를 이끌고 후방을 공격해 들어오려 하자, [[ezio|에지오]]는 그를 쫓아 베키오 궁전까지 간다. 프란체스코는 검술을 좀 배워 온 모양이지만 딱 거기까지라며 맞서다가, 경비병을 불러도 아무도 오지 않는다. 에지오는 그를 찔러 \"네놈이 한 짓을 [[florence|피렌체]]가 기억할 것이다\"라고 말하고, \"이 세상에서 자족하는 법을 배우는 것이 다음 생을 동경하는 것보다 나은 것임을\"이라며 보낸다. 이후 프란체스코의 시신을 궁전에 매달고, 사람들은 \"자유를 위하여! 시민을 위하여!\"를 외친다.",
        links: ["francesco-de-pazzi", "ezio", "florence", "auditore-family"],
        sources: at(AC2_P8, [718, 727], [1196, 1330])
      },
      {
        id: "ev-ac2-lorenzo-names", year: 1478, yearVerified: true, game: "ac2",
        title: "로렌조가 알려 준 음모자들",
        summary: "시퀀스 5 시작 화면에 '[[florence|피렌체 공화국]] 1478년'이 나온다. [[lorenzo-medici|로렌조]]는 여섯 살 때 아르노 강에 빠졌다가 구해진 일이 두 집안의 좋은 인연의 시작이었다고 회상하며, [[ezio|에지오]]의 가족 일을 유감스러워한다. 에지오는 모든 게 [[jacopo-de-pazzi|야코포 데 파치]]의 짓이라고 하지만, 야코포는 체포되기 전에 달아났다. 로렌조는 야코포 혼자 꾸민 일이 아니라며 [[antonio-maffei|안토니오 마페이]], [[francesco-salviati|대주교 프란체스코 살비아티]], [[stefano-da-bagnone|스테파노 다 바뇨네]], [[baroncelli|베르나르도 바론첼리]]의 이름을 알려 준다. 에지오가 삼촌을 만나러 가겠다고 하자, 로렌조는 [[francesco-de-pazzi|프란체스코 데 파치]]가 갖고 있던 [[codex|코덱스]] 페이지를 선물로 준다.",
        links: ["lorenzo-medici", "jacopo-de-pazzi", "antonio-maffei", "francesco-salviati", "stefano-da-bagnone", "baroncelli", "codex", "florence"],
        sources: at(AC2_P9, [6, 10], [20, 142])
      },
      {
        id: "ev-ac2-poison-blade", year: 1478, yearVerified: true, game: "ac2",
        title: "독 칼날",
        summary: "[[leonardo|레오나르도]]는 메디치와 파치의 싸움 속에 [[ezio|에지오]]가 무사해 다행이라며, 도시가 다시 평화를 찾은 게 에지오 덕분이라고 한다. 에지오가 가져온 새 [[codex|코덱스]] 페이지는 지난번과 비슷한 방법으로 해독되었고, 독을 쓸 수 있는 검의 도안이었다. 레오나르도는 칼날에 독을 넣어 주며, 독이 떨어지면 의사를 찾아가라고 한다. 약도 세게 쓰면 독이 된다는 것이다.",
        links: ["leonardo", "codex", "hidden-blade"],
        sources: at(AC2_P9, [1647, 1715])
      },
      {
        id: "ev-ac2-mario-prophet", year: 1478, yearVerified: true, game: "ac2",
        title: "선지자만 열 수 있다",
        summary: "[[monteriggioni|몬테리지오니]]로 돌아온 [[ezio|에지오]]는 [[mario-auditore|마리오]]에게 [[jacopo-de-pazzi|야코포 데 파치]] 일당의 명단을 건넨다. 마리오는 이들이 야코포만큼 이 동네에 익숙하지 않아 찾기 쉬울 거라며 사람을 풀기로 한다. 에지오가 가져온 [[codex|코덱스]] 페이지에는 '오직 선지자만이 그것을 열 수 있다'는 말과 두 개의 [[temple-treasure|에덴의 조각]]에 대한 이야기가 있었지만, 뜻은 알 수 없었다. 마리오는 반격에 익숙한 [[templars|템플 기사단]]을 상대하려면 회피를 배워야 한다며 훈련장에서 가르친다. 부하가 야코포의 부하들 위치를 찾았다고 하자, 마리오는 에지오가 직접 처리할 때까지 아무것도 하지 말라고 명령한다.",
        links: ["mario-auditore", "jacopo-de-pazzi", "codex", "temple-treasure", "monteriggioni", "templars"],
        sources: at(AC2_P9, [1824, 1932], [2017, 2048])
      },
      {
        id: "ev-ac2-salviati", year: 1479, game: "ac2",
        title: "프란체스코 살비아티 암살",
        summary: "[[san-gimignano|산 지미냐노]]에서 [[mario-auditore|마리오]]의 부하가 대주교 [[francesco-salviati|살비아티]]가 빌라 안에 숨어 있다고 알린다. [[ezio|에지오]]는 용병들을 지휘해 밤중에 빌라를 공격하고, 문을 열어 용병들을 들여보낸다. 살비아티는 항복하면 목숨은 살려 주겠다며 경비병을 부르지만, 에지오에게 죽는다. 에지오가 [[jacopo-de-pazzi|야코포]]가 어디 있는지 묻자 그분은 네가 올 걸 이미 알고 있고 절대 모습을 드러내지 않는다고 답한다. 에지오는 \"믿음은 고통이 아닌 위로를 주니, 편히 잠드시게\"라고 말한다.",
        links: ["francesco-salviati", "san-gimignano", "jacopo-de-pazzi", "ezio"],
        sources: at(AC2_P10, [70, 95], [121, 300])
      },
      {
        id: "ev-ac2-bagnone", year: 1479, game: "ac2",
        title: "스테파노 다 바뇨네 암살",
        summary: "수도원에서 [[stefano-da-bagnone|스테파노 다 바뇨네]]는 기도하자는 수도사에게 하느님이 우리 일에 관심이나 있겠냐며, 성경대로라면 위에 계신 분은 제정신이 아닌 것 같다고 말한다. 지금 입은 게 제의가 아니냐는 물음에는 이걸 입어야 메디치에게 접근할 수 있었기 때문이라고 답한다. 화면 목표에는 '스테파노 다 바뇨네를 암살하십시오'라고 나온다. [[ezio|에지오]]에게 찔린 그는 [[jacopo-de-pazzi|야코포]]의 행방을 묻자 \"로마의 신들의 그림자가 드리운 곳에서 만난다네\"라고 답한다.",
        links: ["stefano-da-bagnone", "jacopo-de-pazzi", "ezio", "lorenzo-medici"],
        sources: at(AC2_P10, [952, 1042])
      },
      {
        id: "ev-ac2-baroncelli", year: 1479, game: "ac2",
        title: "베르나르도 바론첼리 암살",
        summary: "한 남자가 [[ezio|에지오]]에게 [[baroncelli|베르나르도 바론첼리]]를 찾았다고 알린다. 메디치가 그를 체포했지만 자막에 따르면 '콘스탄티노플레에서 이송 도중에' 탈출해, [[san-gimignano|산 지미냐노]] 어딘가에 있다는 것밖에 모른다. 바론첼리는 계속 도망치면 된다며 잠은 어디서 자야 안전하냐고 중얼거린다. 에지오가 [[jacopo-de-pazzi|야코포]]의 행방을 묻자 그는 모임이 소집되면 성당에서 모인다고 답하고 숨진다.",
        links: ["baroncelli", "jacopo-de-pazzi", "san-gimignano", "ezio"],
        sources: at(AC2_P10, [1294, 1320], [1365, 1440])
      },
      {
        id: "ev-ac2-maffei", year: 1478, yearVerified: true, game: "ac2",
        title: "안토니오 마페이 암살",
        summary: "[[mario-auditore|마리오]]의 부하가 [[antonio-maffei|안토니오 마페이]]가 이 지역에서 가장 높은 요새 위에서 정신 나간 놈처럼 성경 구절을 외치며 화살을 쏘고 있다고 알린다. 주변에 궁병들이 있어 먼저 없애야 한다. 마페이는 \"[[san-gimignano|산 지미냐노]]의 시민들이여! 회개하라!\"라며, 자유를 [[lorenzo-medici|로렌조 데 메디치]]에게 바치지 않았느냐고 외치고 성경 구절을 읊는다. [[ezio|에지오]]가 다가가자 그는 물러가라 악마야라고 외치고, 에지오는 죽는 게 두렵냐고 묻는다. 에지오는 \"육체와 영혼의 영원한 안식이 있기를\"이라며 그를 보낸다.",
        links: ["antonio-maffei", "san-gimignano", "lorenzo-medici", "ezio"],
        sources: at(AC2_P11, [479, 497], [544, 690])
      },
      {
        id: "ev-ac2-jacopo-tail", year: 1480, game: "ac2",
        title: "야코포를 미행하다",
        summary: "[[ezio|에지오]]는 놓치지만 않으면 [[jacopo-de-pazzi|야코포]]가 [[templars|템플 기사단]]이 있는 곳으로 인도해 더 많은 이름을 알아낼 수 있을 거라며 그를 뒤쫓는다. 야코포가 멈칫하자 눈치챘는지 살피며 지붕과 골목을 따라간다. 에지오는 \"네놈이 쓴 편지에 적힌 [[venice|베네치아]]는 무슨 의미지? 그곳에도 템플 기사단이 있는 건가?\"라고 혼잣말하고, 아버지의 죽음에 관련된 자들이 대체 몇 명이냐고 탄식한다.",
        links: ["jacopo-de-pazzi", "templars", "ezio", "giovanni-auditore"],
        sources: at(AC2_P11, [960, 1190], [1275, 1285])
      },
      {
        id: "ev-ac2-jacopo-death", year: 1480, game: "ac2",
        title: "야코포 데 파치의 최후",
        summary: "옛 기둥들이 선 곳에서 [[jacopo-de-pazzi|야코포]]는 두건을 쓴 인물을 '주군'이라 부르며, 암살자가 생각보다 강했다고 용서를 빈다. 이 인물은 [[rodrigo-borgia|로드리고 보르지아]]다. 두건 쓴 인물은 [[florence|피렌체]]가 여전히 메디치 영향 아래 있다며, 우리의 운명을 자네 가문에 맡겼는데 핑계만 늘어놓는다고 꾸짖는다. 야코포가 살려 달라고 빌자 \"아니. 너무 지저분해졌군\"이라며 그를 찌른다. 그는 숨어 있던 [[ezio|에지오]]에게 미행할 것을 몰랐겠냐며 병사들을 시킨다. 병사들에게 붙잡힌 에지오는 풀려나 싸우고, 화면 목표에 따라 암살검으로 야코포 데 파치의 최후를 맞이해 준다. 에지오는 \"걱정도 두려움도 없는 곳으로 가시게\"라고 말한다. 싸움 도중 흰 옷을 입은 사람들이 나타나 에지오와 함께 싸우는데, 이들이 누구인지는 어쌔신 크리드 II 영상에서 아직 밝혀지지 않았다.",
        links: ["rodrigo-borgia", "jacopo-de-pazzi", "templars", "francesco-de-pazzi", "ezio", "assassins"],
        sources: at(AC2_P11, [1300, 1585])
      },
      {
        id: "ev-ac2-medici-cape", year: 1480, yearVerified: true, game: "ac2",
        title: "메디치의 망토",
        summary: "시퀀스 6 시작 화면에 '[[florence|피렌체 공화국]] 1480년'이 나온다. [[ezio|에지오]]는 [[lorenzo-medici|로렌조]]에게 파치는 마지막 한 놈까지 모두 처리했다고 알린다. 로렌조는 살면서 누군가의 죽음을 이토록 바란 적이 있었나 싶다며, 자신의 꿈을 지켜 준 에지오에게 고마워한다. 에지오는 처리해야 할 자들이 남았고 이미 [[venice|베네치아]] 깊숙한 곳까지 들어와 있다고 한다. 로렌조는 메디치 가문과 신실한 사이임을 증명하는 망토를 선물하며, 이걸 입고 있는 한 도시경비대가 협조적일 거라고 말한다.",
        links: ["lorenzo-medici", "ezio", "florence", "templars"],
        sources: at(AC2_P12, [6, 10], [110, 180])
      },
      {
        id: "ev-ac2-leonardo-left", year: 1480, yearVerified: true, game: "ac2",
        title: "베네치아로 떠난 레오나르도",
        summary: "[[ezio|에지오]]가 [[leonardo|레오나르도]]의 작업실을 찾아가자, 조수는 다빈치 선생이 [[venice|베네치아]] 귀족의 부탁으로 초상화를 그리러 갔고 작업실도 전부 베네치아로 옮기기로 했다고 알려 준다.",
        links: ["leonardo", "ezio", "florence"],
        sources: at(AC2_P12, [240, 265])
      },
      {
        id: "ev-ac2-road-trip", year: 1480, yearVerified: true, game: "ac2",
        title: "베네치아로 가는 길",
        summary: "길에서 마차 바퀴가 고장 난 [[leonardo|레오나르도]]를 만난 [[ezio|에지오]]는 수리를 돕는다. 마차에 실린 거대한 박쥐 같은 물건에 대해 묻자, 레오나르도는 결국 참지 못하고 사람이 날 수 있는 기구를 만들고 있다고 털어놓는다. 에지오가 마차를 몰고, 레오나르도는 [[venice|베네치아]]가 리알토, 산 마르코, 아르세날레가 있는 아름다운 곳이라며 들뜬다. 그때 [[rodrigo-borgia|로드리고 보르지아]]의 부하들로 보이는 자들이 목숨을 노리고 마차를 습격한다. 에지오는 마차를 몰며 기어오르는 적을 떨쳐 내다가, 레오나르도에게 저놈들의 목표는 자신이니 먼저 피하라고 한다.",
        links: ["leonardo", "rodrigo-borgia", "ezio"],
        sources: at(AC2_P12, [813, 900], [908, 920], [1044, 1045], [1132, 1155])
      },
      {
        id: "ev-ac2-romagna", year: 1480, yearVerified: true, game: "ac2",
        title: "로마냐의 습격을 뚫다",
        summary: "[[leonardo|레오나르도]]를 먼저 보낸 [[ezio|에지오]]는 혼자 남아 습격자들과 싸워 이긴다. 업로더 챕터 제목과 같은 '로마냐의 휴일' 동기화 완료가 뜨고, 이어 에지오는 지도에 '포를리'로 나오는 도시에 들어선다.",
        links: ["ezio", "leonardo"],
        sources: at(AC2_P12, [1150, 1300])
      },
      {
        id: "ev-ac2-no-pass", year: 1480, game: "ac2",
        title: "통행권이 없다",
        summary: "부두에서 다시 만난 [[leonardo|레오나르도]]는 자네밖에 없다며 [[ezio|에지오]]에게 큰 빚을 졌다고 고마워한다. 둘은 [[venice|베네치아]]로 가는 배에 오르려 하지만, 관리가 통행권을 보여 달라고 한다. 통행권 없이는 베네치아에 들어갈 수 없고 누구의 초청으로 가느냐는 물음에, 아무도 초청하지 않았다고 하자 탑승을 막는다. 에지오는 레오나르도에게 방법을 찾아보겠다고 한다.",
        links: ["leonardo", "ezio"],
        sources: at(AC2_P13, [646, 695])
      },
      {
        id: "ev-ac2-caterina", year: 1480, game: "ac2",
        title: "카테리나를 돕다",
        summary: "물 건너편 강둑에 고립된 한 여인이 서 있지 말고 도와 달라며 사람 살려 달라고 외친다. [[ezio|에지오]]는 화면 목표대로 보트를 타고, 몇 번 물에 빠지면서도 노를 저어 그녀에게 간다. 그녀를 태우자 \"카테리나와 선착장으로 가십시오\"라는 목표가 뜨고, 돌아가는 동안 그녀는 보통이 아니라며 이름을 묻는다. 에지오는 \"아디토레, 에지오 아디토레입니다\"라고 답하고, 그녀는 자신을 [[caterina|카테리나]]라고 소개한다. 에지오가 [[venice|베네치아]]로 가야 한다며 도움을 청하자, 카테리나는 편안히 가실 수 있게 말해 두었다며 포를리에 들르면 꼭 대접하고 싶다고 한다. 앞서 막았던 관리는 에지오에게 아까는 죄송했다고 사과한다.",
        links: ["caterina", "ezio", "leonardo"],
        sources: at(AC2_P13, [695, 885])
      },
      {
        id: "ev-ac2-caterina-sforza", year: 1480, game: "ac2",
        title: "카테리나 스포르차의 정체",
        summary: "배 위에서 [[leonardo|레오나르도]]는 [[ezio|에지오]]에게 몸을 사리라며, 방금 도와준 여인이 누구인지 아느냐고 묻는다. 그녀는 [[caterina|카테리나 스포르차]]로, 밀라노 공작의 딸이고 남편은 포를리의 성주라고 한다. 레오나르도는 젊고 아름다운 외모만큼이나 힘 있고 위험한 여인이라고 하고, 에지오는 딱 내 취향의 여자인 것 같다고 답한다.",
        links: ["caterina", "leonardo", "ezio"],
        sources: at(AC2_P14, [10, 35])
      },
      {
        id: "ev-ac2-venice-arrival", year: 1481, yearVerified: true, game: "ac2",
        title: "베네치아 도착",
        summary: "화면에 '베네치아 공화국 1481년'이 나온다. 다빈치 선생의 안내를 맡은 알비세가 [[ezio|에지오]]와 [[leonardo|레오나르도]]를 작업실까지 데려가며 [[venice|베네치아]]를 소개한다. 리알토 다리, 가장 오래된 교회인 산 지아코모 디 리알토, 시장을 지나고, 세타 궁전이 [[emilio|에밀리오 디 파르마]]의 집이라고 알려 준다. 알비세에 따르면 에밀리오는 이곳 상인들을 하나로 연합시키려 했지만 저항하는 세력과 충돌이 있었다. 시장에서는 자릿세를 냈다고 항의하던 상인이 경비병에게 끌려가고, 도제와 원로회에 알리겠다는 말에 경비병은 내 말이 법이라고 답한다. 작업실에 도착한 에지오는 세타 궁전에 가서 에밀리오를 만나 보겠다고 한다.",
        links: ["venice", "leonardo", "emilio", "ezio"],
        sources: at(AC2_P15, [8, 12], [108, 383])
      },
      {
        id: "ev-ac2-rosa-arrow", year: 1481, game: "ac2",
        title: "화살 맞은 로사",
        summary: "세타 궁전에 들어갈 방법을 찾던 [[ezio|에지오]]는 도둑들이 궁전 벽을 넘으려는 모습을 본다. 그중 [[rosa|로사]]가 경비병의 화살에 허벅지를 맞고 떨어진다. 로사는 아까 자기를 치고 지나가고 사과도 안 했다고 투덜대면서도 에지오와 함께 달아난다. 다친 로사를 데리고 쫓아오는 경비병들을 피해, 동료 도둑 우고의 배를 타고 수로로 빠져나간다. 강가의 궁수들을 처리하며 [[antonio|안토니오]]에게 간다.",
        links: ["rosa", "antonio", "venice", "ezio"],
        sources: at(AC2_P15, [549, 625], [660, 1150])
      },
      {
        id: "ev-ac2-antonio", year: 1481, game: "ac2",
        title: "도둑 길드의 안토니오",
        summary: "도둑들의 은신처에서 [[antonio|안토니오]]는 [[rosa|로사]]의 허벅지를 관통한 화살을 뽑고, 비앙카에게 상처를 마무리하게 한다. 안토니오는 로사가 딸보다 소중한 아이라며 [[ezio|에지오]]에게 고마워하고, [[florence|피렌체]]와 토스카나에서부터 에지오에 대한 소문을 들었다고 한다. 에지오가 [[venice|베네치아]]에 온 이유도 짐작한다며 안으로 들어와 상의하자고 한다. 안토니오는 터키 상인들이 가져온 커피를 권하고, 궁전 일을 망쳐 입은 손해가 크고 [[emilio|에밀리오]]가 경비를 더 강화할 거라고 한다. 같은 목적을 가진 에지오에게 부하들을 도와 달라고 하고, 에지오는 제안을 받아들인다.",
        links: ["antonio", "rosa", "emilio", "ezio"],
        sources: at(AC2_P15, [1140, 1310], [1669, 1762])
      },
      {
        id: "ev-ac2-rosa-climb", year: 1481, game: "ac2",
        title: "로사의 벽타기",
        summary: "회복한 [[rosa|로사]]를 찾아간 [[ezio|에지오]]는 그녀처럼 벽을 타는 법을 배우고 싶다고 한다. 로사는 지금은 다쳐서 못 하지만 프랑코가 가르쳐 줄 수 있다며, 매달린 자세에서 튀어나온 곳을 향해 뛰어 잡고 올라가는 법을 보여 주게 한다. 에지오는 직접 해 보며 높이 뛰어오르는 법을 익히고, 로사는 실력을 시험해 보자며 프라리 앞에 있는 정원에서 만나자고 한다.",
        links: ["rosa", "ezio"],
        sources: at(AC2_P15, [1782, 1897])
      },
      {
        id: "ev-ac2-high-jump", year: 1481, game: "ac2",
        title: "탑 꼭대기 경주",
        summary: "프라리 앞 정원에서 만난 [[rosa|로사]]는 사형대 위를 오르는 것과 실전은 다르다며, 높이 뛰어오르는 기술을 써서 탑 꼭대기까지 올라가는 경주로 [[ezio|에지오]]를 시험한다. 에지오가 해내자 로사는 가르쳐 줄 수 있는 건 다 가르쳤다며 [[antonio|안토니오]]에게 말해 주겠다고 한다.",
        links: ["rosa", "antonio", "ezio"],
        sources: at(AC2_P16, [723, 855])
      },
      {
        id: "ev-ac2-traitors", year: 1481, game: "ac2",
        title: "집안 청소",
        summary: "[[antonio|안토니오]]는 [[emilio|에밀리오]]가 부하 몇몇을 뇌물과 협박으로 끌어들였고, 그들이 계획을 몰래 전하고 있어 공격할 수 없다고 한다. [[ezio|에지오]]는 그런 쥐새끼 같은 놈들은 없애야 한다며, [[venice|베네치아]] 곳곳에 숨은 배신자들을 찾아 처치한다.",
        links: ["antonio", "emilio", "ezio", "venice"],
        sources: at(AC2_P15, [1897, 1930], [2030, 2384])
      },
      {
        id: "ev-ac2-thieves-rescue", year: 1485, game: "ac2",
        title: "붙잡힌 도둑들",
        summary: "우고는 [[rosa|로사]]와 [[ezio|에지오]]는 빠져나왔지만 동료 몇 명이 붙잡혔고, [[emilio|에밀리오]]가 조만간 그들을 처형할 것 같다고 알린다. 정확한 위치는 모른다는 말에 에지오는 직접 찾아 구출하겠다고 한다. 에지오는 밤의 [[venice|베네치아]] 곳곳에서 경비병들이 지키는 철창을 찾아, 경비병을 처치하고 갇힌 도둑들을 풀어 준다. 경비병들은 에밀리오 어르신이 어디 있느냐, 궁전 창문에 몸뚱이를 걸어 두자는 말을 하고, 붙잡힌 도둑들은 시장은 우리 모두의 것이라며 에밀리오가 말하는 단결은 거짓말이라고 외친다.",
        links: ["rosa", "emilio", "venice", "ezio"],
        sources: at(AC2_P16, [90, 125], [135, 720])
      },
      {
        id: "ev-ac2-disguise", year: 1485, game: "ac2",
        title: "궁수로 변장할 준비",
        summary: "우고는 형제들을 구해 준 [[ezio|에지오]]에게 고마워하며, 구출한 이들이 경비병의 시선을 끌어 줄 수 있다고 한다. [[antonio|안토니오]]의 계획은 [[emilio|에밀리오]]의 궁수들로 변장하는 것이라, 마침 세타로 보낼 물품이 선적을 기다리고 있으니 그걸 빼앗고 곤돌라를 구해 오라고 한다. 에지오는 도둑들을 데리고 다니며 경비병의 시선을 돌리게 한 뒤 화물 세 개를 훔치고, 곤돌라를 몰아 항구로 가져온다. 우고는 안토니오에게 임무를 모두 마쳤다고 보고하겠다고 한다.",
        links: ["antonio", "emilio", "ezio"],
        sources: at(AC2_P16, [882, 940], [945, 1120])
      },
      {
        id: "ev-ac2-palazzo-seta", year: 1485, game: "ac2",
        title: "세타 궁전 습격",
        summary: "[[antonio|안토니오]]는 [[ezio|에지오]] 덕분에 세력을 회복했다며, 에지오는 어두울 때 위로 들어가 [[emilio|에밀리오]]가 궁전 근처에 배치한 궁병들을 조용히 없애라고 한다. 하나씩 제거할 때마다 변장한 자기 사람을 세워 두겠다고 한다. 에지오가 궁병들을 처리하자 안토니오는 궁전까지 가는 길을 확보했다고 하고, 경비가 여전히 삼엄하니 기녀들을 써서 경비병의 시선을 끌고 들어가라고 한다. 에지오는 기녀들 사이에 섞여 들어간 뒤 궁전 벽을 오른다.",
        links: ["antonio", "emilio", "ezio", "venice"],
        sources: at(AC2_P16, [1165, 1215], [1420, 1460])
      },
      {
        id: "ev-ac2-emilio-death", year: 1485, game: "ac2",
        title: "에밀리오 디 파르마 암살",
        summary: "궁전 안에서 [[emilio|에밀리오]]는 [[carlo-grimaldi|카를로]]에게 일이 꼬여 간다는 말을 듣는다. 카를로는 도둑들보다 암살자가 [[venice|베네치아]]에 와 있다는 게 문제라고 하고, 에밀리오는 [[florence|피렌체]]의 형제들에게 무기를 대는 일로 바쁘다고 투덜댄다. 카를로는 \"주군께서 모임을 소집하셨네\"라며 오늘부터 사흘 후 산토 스테파노에서 모일 거라고 전하고, 그놈들이 세타를 노리고 있다고 경고한 뒤 떠난다. 에밀리오는 보트를 준비시키고 숨을 곳을 찾으려 하지만, [[ezio|에지오]]가 지붕을 타고 쫓아가 그를 처치한다. 에밀리오는 자신이 원한 건 단결, 안정, 치안뿐이었다고 하고, 에지오는 너무 큰 희생을 요구한 게 문제라고 답한다. [[rosa|로사]]가 문을 열어 [[antonio|안토니오]]가 들어오고, 안토니오는 세타를 점령했다며 에밀리오가 빼앗은 것을 사람들에게 돌려주자고 한다.",
        links: ["rodrigo-borgia", "emilio", "carlo-grimaldi", "antonio", "rosa", "ezio", "templars"],
        sources: at(AC2_P16, [1540, 1615], [1640, 1660], [1685, 1725])
      },
      {
        id: "ev-ac2-carlo-name", year: 1485, game: "ac2",
        title: "카를로 그리말디",
        summary: "[[antonio|안토니오]]가 보답으로 무엇을 원하느냐고 묻자, [[ezio|에지오]]는 현금이 최고라고 답한다. 이어 [[emilio|에밀리오]]가 카를로라는 정부 관련 인물과 함께 있었다고 하자, 안토니오는 [[carlo-grimaldi|카를로 그리말디]]가 원로회 중 한 명이라고 알려 준다. 에지오는 가 봐야 할 곳이 있다고 한다.",
        links: ["antonio", "carlo-grimaldi", "ezio"],
        sources: at(AC2_P16, [1726, 1760])
      },
      {
        id: "ev-ac2-carlo-silvio", year: 1485, game: "ac2",
        title: "카를로와 실비오를 미행하다",
        summary: "[[ezio|에지오]]는 [[carlo-grimaldi|카를로 그리말디]]와 [[silvio-barbarigo|실비오]]의 뒤를 밟으며 대화를 엿듣는다. 두 사람은 [[emilio|에밀리오]]가 나타나지 않자 그를 기다린다. [[mocenigo|몬체니고]] 도제와 가까워지는 일이 쉽지 않다는 이야기가 오가고, 도제가 주변 사람들 말만 듣는다는 말에 '자네가 그 주변 사람 중 하나가 되면 되겠군'이라는 답이 나온다. 도제의 비위를 맞추려 사르디냐 과수원 잼, 밀라노 명품 옷까지 바치고 있다며, 아첨꾼이라는 말에 다투기도 한다. 조만간 도제를 끌어들일 수 있다는 말에 시간이 그리 많지 않다는 경고가 돌아온다.",
        links: ["carlo-grimaldi", "silvio-barbarigo", "mocenigo", "emilio", "ezio", "venice"],
        sources: at(AC2_P17, [373, 530])
      },
      {
        id: "ev-ac2-barbarigo-brothers", year: 1485, game: "ac2",
        title: "바바리고 형제",
        summary: "[[marco-barbarigo|마르코]]가 나타나 [[silvio-barbarigo|실비오]]와 [[carlo-grimaldi|카를로]]에게 인사하고, 파치를 죽인 암살자가 [[venice|베네치아]]에 와 있으며 [[emilio|에밀리오]]가 자기 집에서 당했다고 알린다. 마르코는 더 숨길 필요 없이 이번 주 안으로 실행에 옮겨야 한다고 하고, 며칠만 더 달라는 카를로를 거절한다. 실비오가 그 스페인 분께서는 계획 변경을 어떻게 생각하겠느냐고 묻자, 마르코는 직접 물어보라고 한다. 마르코와 실비오는 서로를 '형님', '동생'이라 부르며 누가 도제 자리를 맡을지 다투고, 바바리고 가문에서 다음 도제가 나오지 않을 수도 있다는 말에 진정한다. 마르코의 경호원 [[dante|단테]]가 누군가 쫓고 있다고 알리자 일행은 자리를 옮긴다.",
        links: ["marco-barbarigo", "silvio-barbarigo", "carlo-grimaldi", "dante", "emilio", "ezio"],
        sources: at(AC2_P17, [557, 720])
      },
      {
        id: "ev-ac2-doge-plot", year: 1485, game: "ac2",
        title: "도제 독살 계획",
        summary: "두건을 쓴 '주군'이 로마에서 돌아와 바바리고 형제와 [[carlo-grimaldi|카를로]]를 만난다. 그는 도제 자리는 너희들을 위한 자리가 아니라며, [[mocenigo|몬체니고]] 도제를 오늘 밤 없애고 [[marco-barbarigo|마르코]]가 그 자리를 차지하게 하라고 계획을 알린다. 몬체니고와 가장 가까운 카를로가 중요한 역할을 맡아, 도제의 음식에 독을 타기로 한다. 마르코는 무색무취의 가장 강력한 독인 칸타렐라를 구하겠다고 한다. 주군은 파치가 [[florence|피렌체]] 일을 망쳤듯 실수가 없게 직접 나섰다며, 애송이 암살자 녀석 하나에게 파치 가문이 콩가루가 되었으니 그를 만만히 보지 말라고 한다. 그는 다시 로마로 돌아간다. 이를 엿들은 [[ezio|에지오]]는 저놈들이 몸통이었다며, [[antonio|안토니오]]의 도움이 필요하겠다고 한다. [[silvio-barbarigo|실비오]]가 '그 스페인 분'이라 부르며 기다리던 이 '주군'은 [[rodrigo-borgia|로드리고 보르지아]]다.",
        links: ["rodrigo-borgia", "mocenigo", "marco-barbarigo", "silvio-barbarigo", "carlo-grimaldi", "templars", "antonio", "ezio"],
        sources: at(AC2_P17, [720, 975])
      },
      {
        id: "ev-ac2-antonio-help", year: 1485, game: "ac2",
        title: "두칼레 궁전으로",
        summary: "[[ezio|에지오]]는 [[antonio|안토니오]]에게 [[carlo-grimaldi|카를로 그리말디]]와 바바리고 일당이 스페인 사람이라 불리는 자와 함께 오늘 저녁 도제를 제거하고 자기 쪽 사람을 심으려 한다고 알린다. 안토니오와 [[rosa|로사]]는 돕겠다고 하고, 안토니오는 두칼레 궁전이 [[venice|베네치아]]에서 가장 경비가 삼엄한 곳이라고 경고한다. 궁전으로 가는 길에 안토니오는 아버지는 구두 수선공, 어머니는 접시나 닦는 시녀였다며, 귀족들은 출신 성분으로 사람을 판단하더라고 털어놓는다. 진짜 베네치아의 귀족은 카를로나 [[marco-barbarigo|마르코]] 같은 자들이 아니라 좀도둑, 용병, 창녀인 자기들이라고 말한다.",
        links: ["antonio", "rosa", "carlo-grimaldi", "mocenigo", "venice", "ezio"],
        sources: at(AC2_P19, [43, 175])
      },
      {
        id: "ev-ac2-palazzo-ducale", year: 1485, game: "ac2",
        title: "들어갈 수 없는 궁전",
        summary: "[[ezio|에지오]]와 [[antonio|안토니오]]는 두칼레 궁전 주변을 살피며 들어갈 길을 찾는다. 경비가 너무 삼엄해 정문으로는 안 되고, 성당 위로 올라가 보지만 궁전 쪽 벽은 넘을 수 없다. 담장 너머에서 [[carlo-grimaldi|카를로]]가 [[mocenigo|몬체니고]] 도제에게 제안을 들어 달라고 매달리다가, 말이 헛나왔다며 도제 어르신의 안위를 위해서였다고 둘러댄다. 안토니오가 새가 아니고서는 여기에 들어가거나 나오는 건 불가능하다고 하자, 에지오는 무언가를 떠올리고 자리를 뜬다.",
        links: ["antonio", "carlo-grimaldi", "mocenigo", "ezio"],
        sources: at(AC2_P19, [224, 265], [518, 612])
      },
      {
        id: "ev-ac2-flying-machine", year: 1485, game: "ac2",
        title: "비행 기계",
        summary: "[[ezio|에지오]]는 [[leonardo|레오나르도]]에게 그 비행 기계가 정말 날 수 있느냐고 묻는다. 레오나르도는 모형에 불과하고 탑 꼭대기에서 뛰어내려야 해 실험해 본 적이 없다고 하고, 에지오는 그 미친놈이 여기 있다고 나선다. 레오나르도는 공기보다 가벼워서가 아니라 균형으로 나는 것이라며, 몸의 체중으로 고도와 방향을 잡으라고 한다. 에지오는 실제로 날지만 멀리는 못 간다. [[antonio|안토니오]]가 [[carlo-grimaldi|카를로]]가 독을 손에 넣었다고 알리자, 레오나르도는 날개 아래 공기를 데우면 된다며 도시 곳곳에 불을 피우면 두칼레 궁전까지 갈 수 있다고 한다. 안토니오는 부하들에게 해가 지는 대로 불을 붙이게 하고, 에지오는 경비병들을 처리하기로 한다.",
        links: ["leonardo", "antonio", "carlo-grimaldi", "ezio"],
        sources: at(AC2_P19, [765, 915])
      },
      {
        id: "ev-ac2-doge-death", year: 1485, game: "ac2",
        title: "몬체니고 도제의 죽음",
        summary: "밤이 되자 [[leonardo|레오나르도]]는 불에서 불로 날아가라며 지붕의 궁수들을 조심하라고 하고, 날아가는 동안 손은 묶여도 두 다리로 궁수를 차 버리라고 한다. [[ezio|에지오]]는 불길을 따라 날아 두칼레 궁전에 내린다. 에지오가 도착했을 때 [[mocenigo|몬체니고]] 도제는 이미 독이 든 잔을 마신 뒤였고, 에지오가 마시지 말라고 외쳤지만 [[carlo-grimaldi|카를로]]는 너무 늦었다며 이미 도제는 죽었다고 한다. 카를로는 제 말에도 귀를 기울이셨어야 했다고 하고, 경비병들은 에지오가 도제를 살해했다고 외친다.",
        links: ["mocenigo", "carlo-grimaldi", "leonardo", "ezio", "venice"],
        sources: at(AC2_P19, [1420, 1460], [1590, 1640])
      },
      {
        id: "ev-ac2-carlo-death", year: 1485, game: "ac2",
        title: "카를로 그리말디 암살",
        summary: "[[ezio|에지오]]는 달아나는 [[carlo-grimaldi|카를로 그리말디]]를 쫓아가 쓰러뜨린다. 카를로는 암살자가 다른 암살자를 죽이려는 거냐며, 우리 같은 사람들은 자신을 위한 최선을 선택할 뿐이지 않았느냐고 묻는다. 에지오는 이번 일은 자신을 위한 게 아니라며 \"더 큰 유익을 위해 바치는 생명이니, 편히 잠드시게\"라고 말한다. 이후 경비병들을 피해 수로로 뛰어들어 달아난다.",
        links: ["carlo-grimaldi", "mocenigo", "ezio"],
        sources: at(AC2_P19, [1640, 1700], [1715, 1751])
      },
      {
        id: "ev-ac2-carnevale", year: 1486, yearVerified: true, game: "ac2",
        title: "카니발의 베네치아",
        summary: "시퀀스 9 시작 화면에 '[[venice|베네치아 공화국]] 1486년'이 나온다. [[leonardo|레오나르도]]는 살아 있던 [[ezio|에지오]]를 반기며 도제를 죽였다는 소문이 사실이냐고 묻는다. 에지오는 모든 베네치아 사람이 자신을 찾고 있다고 하고, 레오나르도는 지금 베네치아가 축제 기간이라 다들 가면을 쓰고 다니니 운이 좋을지도 모른다고 한다. 에지오가 가져온 새 도안은 손목에 다는 총기류에 가까운 장치였고, 레오나르도는 크기가 정말 작다며 만들어 본다. 새로 선출된 도제가 [[marco-barbarigo|마르코 바바리고]]라는 이야기에, 레오나르도는 도르소두로 구에 가면 [[teodora|테오도라]] 수녀를 통해 [[antonio|안토니오]]를 찾을 수 있다고 알려 준다.",
        links: ["leonardo", "marco-barbarigo", "teodora", "antonio", "venice", "ezio"],
        sources: at(AC2_P20, [8, 12], [37, 220])
      },
      {
        id: "ev-ac2-teodora", year: 1486, yearVerified: true, game: "ac2",
        title: "테오도라 수녀",
        summary: "[[ezio|에지오]]는 도르소두로의 기녀 집에서 [[antonio|안토니오]]를 만나고, 안토니오는 [[teodora|테오도라]]에게 그를 소개한다. 그때 루시아를 칼로 찌르고 언니의 돈을 훔쳐 간 살인마가 있다는 외침이 들리고, 테오도라는 에지오에게 그를 쫓게 한다. 에지오가 범인을 처리하고 돌아오자, 에지오는 [[marco-barbarigo|마르코 바바리고]] 때문에 왔다고 한다. 안토니오는 새 [[templars|템플 기사단]] 수장은 지난번보다 훨씬 강한 상대이고 절대 궁전을 떠나지 않는다고 한다. 테오도라는 마르코가 오늘 밤 축제를 그냥 넘길 리 없다며, 금으로 된 가면이 있어야 그의 파티에 들어갈 수 있고 가면마다 숫자가 적혀 있어 위조할 수 없다고 알려 준다. 테오도라는 수녀이면서 기녀 집을 운영하는 이유를 묻는 에지오에게, 교회 사람들에게 환멸을 느껴 자신만의 교회를 만들었다고 답한다.",
        links: ["teodora", "antonio", "marco-barbarigo", "ezio"],
        sources: at(AC2_P20, [366, 550], [594, 670])
      },
      {
        id: "ev-ac2-carnival-games", year: 1486, yearVerified: true, game: "ac2",
        title: "축제의 경기",
        summary: "축제 진행자는 네 개의 경기에서 모두 승리하는 사람이 도제의 파티에 들어갈 수 있는 황금 가면을 받는다고 알린다. [[ezio|에지오]]는 여인들의 리본을 가장 많이 모으는 경기, 깃발을 세 번 먼저 가져오는 깃발 뺏기, 장애물을 넘어 기록을 깨는 달리기, 무기 없이 링에서 마지막까지 버티는 결투에서 차례로 승리한다. 결투 도중 [[silvio-barbarigo|실비오]]가 [[dante|단테]]를 보내 에지오를 쓰러뜨리게 하지만, 에지오는 끝까지 남는다. 그런데 진행자는 황금 가면의 주인으로 단테 모로를 발표하고, 실비오는 단테에게 오늘 저녁에 보자고 한다. [[teodora|테오도라]]는 실비오가 미리 손을 써 두었을 줄 몰랐다고 사과한다.",
        links: ["silvio-barbarigo", "dante", "teodora", "ezio"],
        sources: at(AC2_P20, [670, 1680])
      },
      {
        id: "ev-ac2-golden-mask", year: 1486, yearVerified: true, game: "ac2",
        title: "황금 가면을 훔치다",
        summary: "[[teodora|테오도라]]의 사람이 황금 가면을 차지한 자가 도제의 파티로 가고 있다고 알린다. [[ezio|에지오]]는 그를 잡아 가면을 빼앗겠다고 하지만, [[antonio|안토니오]]는 그를 죽이면 파티가 취소되고 [[marco-barbarigo|마르코]]가 또 궁전 안에 숨을 거라며 몰래 훔치라고 한다. 테오도라의 기녀들이 길을 따라 [[dante|단테]]의 시선을 끄는 사이, 에지오는 그에게서 황금 가면을 훔친다.",
        links: ["teodora", "antonio", "dante", "marco-barbarigo", "ezio"],
        sources: at(AC2_P20, [1680, 1730], [1730, 2045])
      },
      {
        id: "ev-ac2-marco-death", year: 1486, yearVerified: true, game: "ac2",
        title: "마르코 바바리고 암살",
        summary: "황금 가면으로 파티에 들어간 [[ezio|에지오]]는 기녀들 사이에 숨어 다닌다. 도제 [[marco-barbarigo|마르코]]는 전쟁이 찾아와도 [[venice|베네치아]]의 축제는 계속될 것이라며, 오늘 밤 베네치아의 위대한 빛이 임할 거라고 연설한다. 마르코가 배에서 내려오지 않자, 에지오는 폭죽 소리에 묻혀 들리지 않을 테니 살인마를 잡을 때 쓴 무기를 써 보라는 말을 듣는다. 에지오가 그를 덮치자 마르코는 아직 때가 이르지 않았다고 외치고, 에지오는 \"죽음 앞에 겸허하게 하시옵소서. 편히 잠드시게\"라고 말한다. 에지오는 경비병들을 피해 물로 뛰어들어 달아난다. 돌아온 에지오를 기녀들과 [[teodora|테오도라]]가 베네치아의 구세주라며 반긴다.",
        links: ["marco-barbarigo", "teodora", "antonio", "ezio", "venice"],
        sources: at(AC2_P20, [2045, 2070], [2230, 2400], [2500, 2575])
      },
      {
        id: "ev-ac2-agostino", year: 1486, yearVerified: true, game: "ac2",
        title: "아고스티노 바바리고",
        summary: "시퀀스 10 시작 화면에도 '[[venice|베네치아 공화국]] 1486년'이 나온다. [[antonio|안토니오]]는 [[ezio|에지오]] 덕분에 곧 베네치아의 도제가 될 [[agostino-barbarigo|아고스티노 바바리고]]를 소개한다. 에지오가 형님 일은 유감이라고 하자, 아고스티노는 보르지아 놈들에게 놀아나더니 자초한 일이라고 답한다. 안토니오는 [[silvio-barbarigo|실비오 바바리고]]가 적어도 200명이 넘는 용병을 끌고 아르세날레로 쳐들어갔다고 알린다. 아고스티노는 40인회가 아직 자신의 승계를 인정하지 않았고, 실비오가 전체 군대를 주무를 권력을 갖고 있다고 한다. 에지오가 군대를 모으게 도와 달라고 하자, 아고스티노는 실비오에게 쌓인 게 많은 [[bartolomeo|바르톨로메오 드 알비아노]]를 아르세날레 남쪽 군사 지역에서 만나 보라고 한다.",
        links: ["agostino-barbarigo", "antonio", "silvio-barbarigo", "bartolomeo", "marco-barbarigo", "ezio"],
        sources: at(AC2_P21, [12, 18], [38, 42], [155, 225])
      },
      {
        id: "ev-ac2-bartolomeo", year: 1486, yearVerified: true, game: "ac2",
        title: "갇힌 전사",
        summary: "[[ezio|에지오]]가 바르톨로메오의 막사에 이르자, 남아 있던 부하가 [[silvio-barbarigo|실비오]]의 부하들이 와서 바르톨로메오를 잡아가 시내 깊숙한 곳으로 끌고 갔다고 알린다. 에지오는 철창 안에 갇혀 병사들에게 욕설을 퍼붓고 있는 [[bartolomeo|바르톨로메오]]를 찾아낸다. 그는 손을 묶어도 너희쯤은 문제없다고 외치고, 실비오를 조종하는 놈이 누군지 안다며 풀어 달라고 소리친다. 에지오가 철창을 열어 그를 풀어 주자, 바르톨로메오는 자유의 몸이 되었다고 기뻐한다. 둘은 실비오의 병사들을 뚫고 나아가며, 에지오는 덩치 큰 [[dante|단테]]를 조심하라는 말을 듣는다. 바르톨로메오는 막사에 이르자 '비앙카는 아무 일 없겠지?'라고 걱정한다.",
        links: ["bartolomeo", "silvio-barbarigo", "dante", "ezio"],
        sources: at(AC2_P21, [1400, 1832])
      },
      {
        id: "ev-ac2-bianca", year: 1486, yearVerified: true, game: "ac2",
        title: "낙오자는 없다",
        summary: "막사로 돌아온 [[bartolomeo|바르톨로메오]]는 '비앙카'를 찾다가 그것이 자신의 검임을 보여 주며, 아무 일 없어서 다행이라고 반긴다. [[ezio|에지오]]는 [[silvio-barbarigo|실비오 바바리고]]에게 볼 일이 있다며 도움을 청하고, 바르톨로메오는 자기 부하들을 준비시키는 동안 실비오의 습격으로 잡혀간 자들을 구출해 오라고 한다. 에지오는 [[venice|베네치아]] 곳곳에서 붙잡힌 바르톨로메오의 부하들을 구해 낸다. 한 곳에서는 병사들이 갇힌 자들을 물에 빠뜨려 죽이려 하지만, 실비오가 그들을 살려 두어 자기 군대에 합류시키려 한다는 말이 나온다. 구출된 부하들은 함께 싸우겠다며 바르톨로메오에게 합류한다.",
        links: ["bartolomeo", "silvio-barbarigo", "ezio"],
        sources: at(AC2_P22, [4, 75], [130, 180], [600, 915])
      },
      {
        id: "ev-ac2-arsenale-plan", year: 1486, yearVerified: true, game: "ac2",
        title: "아르세날레 작전",
        summary: "[[bartolomeo|바르톨로메오]]는 군대가 옛 모습을 찾아가고 있다며 이제 [[silvio-barbarigo|실비오]]에게 따끔한 맛을 보여 줄 차례라고 한다. 아르세날레를 직접 치면 성문도 못 넘고 죽을 테니, 부하들을 근처에 미리 배치해 두고 소동을 벌여 실비오가 병력을 풀게 한 뒤 들어가 처치하자는 계획이다. [[ezio|에지오]]는 바르톨로메오의 부하들을 각자 위치에 배치하고, 바르톨로메오는 구내에서 가장 높은 곳에서 신호탄을 쏘면 부하들이 소란을 일으킬 거라며 신호탄을 건넨다.",
        links: ["bartolomeo", "silvio-barbarigo", "ezio"],
        sources: at(AC2_P22, [915, 965], [1100, 1460])
      },
      {
        id: "ev-ac2-silvio-death", year: 1486, yearVerified: true, game: "ac2",
        title: "실비오 바바리고 암살",
        summary: "아르세날레 싸움 도중 [[dante|단테]]가 [[ezio|에지오]]를 막아서고, [[silvio-barbarigo|실비오]]는 에지오의 아버지를 직접 매달지 못한 게 아쉽다며 삼촌, 어머니, 여동생까지 처리하겠다고 조롱한다. 실비오가 배를 타고 떠나려 하자, [[bartolomeo|바르톨로메오]]는 저놈을 따라가면 실비오를 만날 수 있다며 자신과 부하들이 여기를 맡겠다고 한다. 에지오는 배 위에서 실비오를 쓰러뜨린다. 실비오는 도제 자리를 노린 건 위장일 뿐이었고 이게 원래 계획이라며, 사이프러스가 목적지였고 그들이 노린 것은… 이라 말하다 숨진다. 에지오는 \"어둠 속에 두려워 말며 겸허히 받아들이게 하옵소서. 편히 잠드시게\"라고 말한다.",
        links: ["silvio-barbarigo", "dante", "bartolomeo", "ezio"],
        sources: at(AC2_P22, [1560, 1720], [1720, 1860])
      },
      {
        id: "ev-ac2-dante-death", year: 1486, yearVerified: true, game: "ac2",
        title: "단테 모로의 최후",
        summary: "[[silvio-barbarigo|실비오]]를 처단한 장면에 이어 [[dante|단테 모로]]도 [[ezio|에지오]]의 칼에 쓰러진 모습이 나온다. [[bartolomeo|바르톨로메오]]는 실비오를 해치웠으니 군사 지역은 우리 차지가 되었고 [[venice|베네치아]]도 평화를 누릴 수 있겠다며 기뻐한다. 그러나 에지오는 실비오가 [[marco-barbarigo|마르코]]를 제거하고 도제가 되려던 게 아니라 베네치아를 떠나려 했던 것이며, 이 모든 게 속임수였다고 말한다.",
        links: ["dante", "bartolomeo", "silvio-barbarigo", "ezio"],
        sources: at(AC2_P22, [1840, 1931])
      },
      {
        id: "ev-ac2-prophecy", year: 1488, yearVerified: true, game: "ac2",
        title: "떠다니는 도시의 예언",
        summary: "시퀀스 11 시작 화면에 '[[venice|베네치아 공화국]] 1488년'이 나온다. 생일을 맞은 [[ezio|에지오]]는 [[rosa|로사]]에게 아버지와 형제들이 죽은 걸 본 지 딱 10년이 되었다며 아직 그 이유를 모르겠다고 털어놓는다. 로사는 생일 선물로 사이프러스로 떠났던 배가 기록된 아르세날레 운송 목록을 건네고, 그 배가 내일 돌아온다고 알려 준다. 이어 [[leonardo|레오나르도]]가 두 장의 [[codex|역사 자료 문서]]를 맞대어 보면 '두 번째 조각을 떠다니는 도시에 가져오면 선지자가 나타날 것이다'라는 문구가 보인다고 알려 준다. 에지오는 [[mario-auditore|마리오]]에게 들은 오랜 [[vault|지하금고]] 속의 강력한 무언가를 떠올리고, 바바리고가 사이프러스로 배를 보낸 것도 [[temple-treasure|에덴의 조각]]을 찾아 베네치아로 가져오기 위해서였다고 깨닫는다. [[mocenigo|몬체니고]]의 죽음, 메디치, 그리고 자기 아버지와 형제들의 죽음까지 모두 지하금고를 찾기 위한 [[rodrigo-borgia|로드리고 보르지아]]의 음모였다는 것이다.",
        links: ["rosa", "leonardo", "codex", "rodrigo-borgia", "temple-treasure", "mocenigo", "giovanni-auditore", "ezio"],
        sources: at(AC2_P23, [10, 14], [28, 200])
      },
      {
        id: "ev-ac2-box-courier", year: 1488, yearVerified: true, game: "ac2",
        title: "상자를 나르는 배달부",
        summary: "사이프러스에서 온 배가 도착하자, [[ezio|에지오]]는 상자를 운반하는 자들을 뒤쫓는다. 경비병은 주군께서 기다리고 계시니 실수 없이 단단히 포장하라고 하고, 에지오는 그 스페인 놈이 여기 있다는 말에 배달부인 척 숨어들어 그를 만나기로 한다. 에지오는 배달부로 변장해 상자를 들고 약속 장소로 간다.",
        links: ["rodrigo-borgia", "ezio"],
        sources: at(AC2_P23, [480, 520], [955, 975], [1060, 1215])
      },
      {
        id: "ev-ac2-rodrigo-venice", year: 1488, yearVerified: true, game: "ac2",
        title: "로드리고 보르지아와의 대면",
        summary: "[[rodrigo-borgia|로드리고 보르지아]]는 정말 가져온 거냐, 미행하는 자는 없었냐고 묻는다. 배달부로 변장한 [[ezio|에지오]]가 상자를 건넨 뒤 정체를 드러내고, 두 사람은 \"에지오, 오랜만이로군\", \"로드리고\"라고 서로를 부른다. 에지오는 선지자는 아무도 나타나지 않았다며, 이 상자 안의 물건 때문에 몇 명이 죽어야 했냐고 따진다. 로드리고는 선지자는 이미 이곳에 와 있다고 하고, 경비병들을 부른다. 위기에 처한 에지오 앞에 [[mario-auditore|마리오]]가 \"걱정 말아라, 조카야! 삼촌이 왔다!\"며 나타나고, [[la-volpe|라 볼페]], [[bartolomeo|바르톨로메오]] 등이 함께 싸운다. 로드리고는 네 아비처럼 너도 내 손에 죽어나갈 거라며, 네 형제들은 사실 죽을 필요도 없었고 [[templars|템플 기사단]]을 방해하는 자에게 경고를 하려던 것뿐이었다고 말한다. 에지오가 \"이건 내 아버지를 위한 것이다\"라며 덤비지만, 로드리고는 달아난다. [[paola|파올라]]는 그가 도망쳤지만 원했던 것은 손에 넣었다고 한다.",
        links: ["rodrigo-borgia", "mario-auditore", "la-volpe", "bartolomeo", "paola", "templars", "ezio"],
        sources: at(AC2_P23, [1196, 1360], [1460, 1600])
      },
      {
        id: "ev-ac2-initiation", year: 1488, yearVerified: true, game: "ac2",
        title: "암살단 입단",
        summary: "[[teodora|테오도라]]까지 모인 자리에서 [[ezio|에지오]]는 다들 여기서 뭘 하느냐고 묻는다. [[mario-auditore|마리오]]는 선지자가 나타나기를 바랐다며, 예언은 있었지만 선지자가 누구인지는 몰랐고 어쩌면 우리가 쫓던 선지자가 바로 에지오일지도 모른다고 한다. 한 남자가 자신을 [[machiavelli|니콜로 디 베르나르도 데이 마키아벨리]]라 소개하며, 자신도 인류의 발전을 수호하도록 훈련받은 [[assassins|암살단]]의 일원이라고 밝힌다. [[paola|파올라]]와 [[la-volpe|볼페]]까지 모두 암살자였다는 데 놀란 에지오에게, 마리오는 지난 수년간 모두가 그를 인도해 왔다고 말한다. 그날 해 질 녘, 에지오의 입단식이 열린다. 마리오는 'Laa shay'a waqi'un moutlaq bale kouloun moumkine'가 조상들이 쓰던 말로 '어느 것도 진실이 아니며, 모든 것이 허용된다'는 뜻이라고 하고, 모두가 이 신조를 함께 외운다. 마리오는 이제 조상들처럼 활동할 수는 없지만 암살단의 증표는 변함이 없다며 에지오에게 준비가 되었는지 묻는다. 에지오는 증표를 받고, 진정한 한 식구로 환영받는다.",
        links: ["mario-auditore", "machiavelli", "paola", "la-volpe", "teodora", "assassins", "ezio"],
        sources: at(AC2_P23, [1596, 1787])
      },
      {
        id: "ev-ac2-apple", year: 1488, yearVerified: true, game: "ac2",
        title: "선악과",
        summary: "[[leonardo|레오나르도]]는 [[rodrigo-borgia|로드리고]]에게서 빼앗은 물건을 살펴보며, 지구가 태양 주변을 공전하는 이유를 이것보다 더 적절하게 설명할 방법은 없을 것 같다고 한다. 물건이 빛나며 주변에 환영 같은 빛이 펼쳐진다. 역사 자료에서는 이것을 [[temple-treasure|에덴의 조각]]이라 부르고, [[ezio|에지오]]는 그 스페인 놈이 '선악과'라고 부르더라고 한다. 이브의 선악과, 허락되지 않은 지식에 관한 것이냐는 물음이 이어진다. 이것이 악한 자들에게 넘어가서는 안 되고, 신념이 강하지 않은 이들을 미치게 만들 수도 있다는 말에, [[machiavelli|마키아벨리]]는 에지오에게 지금껏 배운 모든 기술을 동원해 반드시 지켜 내라고 한다. 성벽과 대포로 무장한 포를리 요새로 가져가라며, 그곳에 동맹 [[caterina|카테리나 스포르차]]가 있다고 알려 준다.",
        links: ["leonardo", "machiavelli", "caterina", "temple-treasure", "rodrigo-borgia", "ezio"],
        sources: at(AC2_P25, [16, 105])
      },
      {
        id: "ev-ac2-forli-arrival", year: 1488, yearVerified: true, game: "ac2",
        title: "포를리에 도착하다",
        summary: "시퀀스 12 시작 화면에 '로마냐 1488년'이 나온다. 포를리에 도착한 [[ezio|에지오]]를 [[caterina|카테리나]]가 맞이하며, 예전에 만났을 때 뭔가 특별한 게 느껴졌는데 [[assassins|암살단]]이었냐고 묻는다. 그녀는 백 년 전부터 있던 대포를 보여 주며 포를리를 안내한다. 남편이 다스리던 도시지만 남편은 이제 이 세상 사람이 아니라고 하고, 에지오가 유감이라고 하자 그럴 필요 없다며 처음부터 그 인간은 별로였다고 말한다. [[machiavelli|마키아벨리]]는 지롤라모 리아리오가 [[templars|템플 기사단]]에 협조해 나머지 역사 자료 문서들이 있는 곳을 지도로 만들고 있었다고 알린다. 그때 성벽 바깥에서 [[orsi|오르시]] 일당이 쳐들어와 도시 전체가 공격당한다. 카테리나는 남편을 죽이는 일을 맡았던 놈들이라고 하고, 에지오는 오르시 같은 소인배들 배후에 스페인 놈이 있다고 본다. 마키아벨리는 놈들이 노리는 것이 선악과가 아니라 리아리오의 지도일 거라고 한다. 카테리나는 지도보다 도시 안에 있는 자기 아이들이 걱정이라고 외친다.",
        links: ["caterina", "machiavelli", "orsi", "rodrigo-borgia", "templars", "codex", "ezio"],
        sources: at(AC2_P25, [112, 124], [140, 290])
      },
      {
        id: "ev-ac2-forli-bodyguard", year: 1488, yearVerified: true, game: "ac2",
        title: "카테리나의 호위",
        summary: "적이 이미 진입한 포를리에서 [[ezio|에지오]]는 [[caterina|카테리나]]를 지키며 함께 나아간다. 카테리나는 성벽 위에서 적들에게 여긴 내 도시, 우리 집이라며 거침없이 욕설을 퍼붓는다. 에지오가 적들을 물리치자 카테리나는 잘했다며 자신을 따라오라고 한다.",
        links: ["caterina", "orsi", "ezio"],
        sources: at(AC2_P25, [340, 540])
      },
      {
        id: "ev-ac2-forli-defense", year: 1488, yearVerified: true, game: "ac2",
        title: "요새를 지켜라",
        summary: "요새 문 앞에서 매복을 뚫고 들어간 [[ezio|에지오]]와 [[machiavelli|마키아벨리]]를 [[caterina|카테리나]]가 부른다. 카테리나가 아이들 비앙카와 옥타비아노를 찾자, 하녀는 공습이 시작됐을 때 바깥에서 놀고 있어 지금은 어디 있는지 모른다고 답한다. 산 쪽에서 적군이 더 들어와 요새가 곧 함락될 거라는 외침이 들리고, 카테리나는 저놈들이 여기 들어오게 해선 안 된다고 한다. 에지오는 요새 곳곳에서 적들을 막아 싸운다.",
        links: ["caterina", "machiavelli", "orsi", "ezio"],
        sources: at(AC2_P25, [1095, 1160], [1160, 1466])
      },
      {
        id: "ev-ac2-lorenzo-born", year: 1449, yearVerified: true, game: "ac2",
        title: "로렌조 데 메디치 출생",
        summary: "어쌔신 크리드 II의 데이터베이스 카드에서 언급된다. [[lorenzo-medici|로렌조 데 메디치]]는 1449년에 태어났다.",
        links: ["lorenzo-medici"],
        sources: at(AC2_P9, [150, 162])
      },
      {
        id: "ev-ac2-lorenzo-head", year: 1469, yearVerified: true, game: "ac2",
        title: "로렌조, 메디치 가문을 이끌다",
        summary: "어쌔신 크리드 II의 데이터베이스 카드에서 언급된다. [[lorenzo-medici|로렌조]]는 1469년 20살에 메디치 가문을 이끌게 되어 빠르게 [[florence|피렌체]] 정부를 장악했다.",
        links: ["lorenzo-medici", "florence"],
        sources: at(AC2_P9, [150, 162])
      },
      {
        id: "ev-ac2-lorenzo-death", year: 1492, yearVerified: true, game: "ac2",
        title: "로렌조 데 메디치 사망",
        summary: "어쌔신 크리드 II의 데이터베이스 카드에서 언급된다. [[lorenzo-medici|로렌조]]는 1492년에 사망했고, 그때는 거의 빈털터리였다. 결국 수도승 [[savonarola|사보나롤라]]가 권력을 차지했다.",
        links: ["lorenzo-medici", "florence"],
        sources: at(AC2_P9, [150, 162])
      },
      {
        id: "ev-ac2-rodrigo-pope", year: 1492, yearVerified: true, game: "ac2",
        title: "로드리고 보르지아, 교황이 되다",
        summary: "어쌔신 크리드 II 현대 파트에서 언급된다. [[rodrigo-borgia|로드리고 보르지아]]가 1492년에 교황으로 선출되어, [[ezio|에지오]]의 가장 큰 적수가 이탈리아에서 가장 강력한 인물이 되었다.",
        links: ["rodrigo-borgia", "ezio"],
        sources: at(AC2_P24, [29, 45])
      },
      {
        id: "ev-leila-death", year: 2007, yearVerified: true, month: 9, game: "ac1",
        title: "레일라 마리노의 죽음",
        summary: "어쌔신 크리드 1편의 이메일에서 언급된다. [[abstergo|앱스테르고]]의 전 직원 [[leila-marino|레일라 마리노]]는 2007년 9월에 죽었다. 사고였다고 알려졌지만 검시관 기록은 봉인되어 있다.",
        links: ["leila-marino", "abstergo", "lucy-stillman"],
        sources: [...at(AC1_MB3B, 2780, 2835, 2865, 2925, 2940, 2970), ...at(AC1_MS, [1748, 1890])]
      },
      {
        id: "ev-ac2-orsi-threat", year: 1488, yearVerified: true, game: "ac2",
        title: "오르시 형제의 협박",
        summary: "요새 밖에서 [[orsi|오르시 형제]]가 [[caterina|카테리나]]를 부르며, 그녀의 딸을 붙잡고 있다고 협박한다. [[ezio|에지오]]를 보자 이건 생각지도 못했다며 놀라고, 자신들을 체코와 '대령'이라 소개한다. 아이들을 돌려주는 대가로 리아리오의 지도와 [[temple-treasure|선악과]]를 내놓으라고 하고, 그렇지 않으면 아이들의 목을 베겠다고 위협한다. 카테리나는 아무것도 못 준다며 애는 더 낳으면 된다고 맞받아치고, 오르시 형제는 마음이 바뀌면 한 시간 안에 도시 바깥 마을로 오라고 한다. 카테리나는 누구도 희생시키지 않겠다며 에지오에게 아이들을 데려와 달라고 하고, 선악과는 요새에 안전하게 두자고 한다.",
        links: ["orsi", "caterina", "temple-treasure", "ezio"],
        sources: at(AC2_P26, [6, 100])
      },
      {
        id: "ev-ac2-forli-children", year: 1488, yearVerified: true, game: "ac2",
        title: "카테리나의 아이들과 루도비코 오르시",
        summary: "[[ezio|에지오]]는 도시 바깥 마을을 뒤져 [[caterina|카테리나]]의 딸 비앙카를 구한다. 비앙카는 고맙다면서도 동생 옥타비아노가 등대에 갇혀 있다고 알린다. 등대 위에서 [[orsi|루도비코 오르시]]가 아이를 밀어 버리겠다며 카테리나에게 선악과와 지도를 가져오라고 외친다. 에지오는 등대를 올라가 그를 쓰러뜨리고 옥타비아노를 구한다. 그는 푼돈에 목숨을 내놓은 게 아니라, 주군께서 자신 덕분에 소중한 걸 얻으신다고 말하며 숨진다.",
        links: ["caterina", "orsi", "rodrigo-borgia", "ezio"],
        sources: at(AC2_P26, [160, 685])
      },
      {
        id: "ev-ac2-checco", year: 1488, yearVerified: true, game: "ac2",
        title: "체코 오르시 암살",
        summary: "아이들을 데리고 돌아온 [[ezio|에지오]]에게 [[caterina|카테리나]]와 [[machiavelli|마키아벨리]]는 모두 방심하게 만들려는 함정이었다고 알린다. 에지오가 떠난 직후 다시 공격해 와 [[orsi|체코 오르시]]가 선악과를 가져갔고, 산으로 숨어 버렸다는 것이다. 에지오는 그를 쫓아가 쓰러뜨린다. 에지오가 그 정도의 물건이라면 오래 잡고 있지 못할 거라고 하자, 체코는 시간이 지나 보면 알게 될 거라고 답한다. 에지오는 \"덧없는 것들을 향한 탐욕의 끝이여, 편히 잠들거라\"라고 말한다. 그 순간 검은 옷을 입은 인물이 나타나 에지오를 쓰러뜨리고 [[temple-treasure|선악과]]를 가져간다.",
        links: ["orsi", "caterina", "machiavelli", "temple-treasure", "savonarola", "ezio"],
        sources: at(AC2_P26, [685, 870])
      },
      {
        id: "ev-ac2-riario-map", year: 1488, yearVerified: true, game: "ac2",
        title: "리아리오의 지도",
        summary: "깨어난 [[ezio|에지오]]에게 [[caterina|카테리나]]는 경비병이 언덕 위 체코 [[orsi|오르시]]의 시체 옆에 쓰러진 그를 발견했다고 말한다. 에지오는 또 다른 사람이 있었고 그가 선악과를 가져갔다고 한다. 카테리나는 [[machiavelli|니콜로]]가 말했던 지도를 건네며, 전 남편이 역사 자료의 일부분이 있는 모든 위치를 알아냈다고 자신에 차 있었다고 한다. 선악과는 찾아낼 수 있겠지만 [[vault|지하금고]]에는 이것 없이 갈 수 없다는 것이다. 그녀는 근처 습지대의 수도원 수도사들이 검은 옷을 입고 다닌다며 그곳부터 가 보라고 한다.",
        links: ["caterina", "machiavelli", "codex", "temple-treasure", "ezio"],
        sources: at(AC2_P26, [863, 935])
      },
      {
        id: "ev-ac2-savonarola-trail", year: 1488, yearVerified: true, game: "ac2",
        title: "손가락이 없는 수도사",
        summary: "[[ezio|에지오]]는 습지대 수도원에서 손가락이 하나 없는 검은 옷의 수도사를 찾아 묻고 다닌다. 한 수도사는 에지오를 스테파노 형제를 죽인 자라며 겁을 내고, 에지오는 다른 이의 목숨을 앗아 간 자들만 처치할 뿐이라고 답한다. 수도사는 손가락이 하나 없다면 프라 [[savonarola|사보나롤라]]처럼 말이냐며, 한때 자신들과 함께 있었지만 오래전 암자로 가서 쉬라고 권했다고 한다. [[florence|피렌체]]의 산토 스피리토에서 공부했으니 아마 거기로 돌아갔을 거라고 알려 준다.",
        links: ["savonarola", "stefano-da-bagnone", "florence", "ezio"],
        sources: at(AC2_P26, [985, 1310])
      },
      {
        id: "ev-ac2-florence-1497", year: 1497, yearVerified: true, game: "ac2",
        title: "사보나롤라의 피렌체",
        summary: "시퀀스 13 시작 화면에 '[[florence|피렌체 공화국]] 1497년'이 나온다. 피렌체 거리에서는 암살자가 돌아와 독재자의 사슬에서 벗어나게 해 주면 좋겠다는 말과, 그건 동화 속 이야기일 뿐이라는 말이 오간다. [[machiavelli|마키아벨리]]는 마침 잘 돌아왔다며, 그 유물의 도움을 받은 게 틀림없다고 한다. 불과 몇 주 만에 모두가 욕하던 [[savonarola|사보나롤라]]가 하루아침에 모두가 숭배하는 사람이 되었다는 것이다. 그는 도시 전체가 아니라 영향력과 권력을 가진 지도층을 [[temple-treasure|선악과]]로 사로잡았고, 그 지도층이 사람들을 압박하고 있다. 거리에는 보르지아의 문장을 단 병사들의 시체가 있어, 스페인 놈도 자기 병사들을 피렌체로 보내고 있었다.",
        links: ["machiavelli", "savonarola", "temple-treasure", "rodrigo-borgia", "florence", "ezio"],
        sources: at(AC2_P27, [110, 118], [124, 215])
      },
      {
        id: "ev-ac2-instigators-plan", year: 1497, yearVerified: true, game: "ac2",
        title: "선동자들을 처치하라",
        summary: "[[machiavelli|마키아벨리]]와 [[ezio|에지오]]는 직접 공격하기에는 너무 위험하다고 본다. 시의 지도층을 빼면 사람들은 아직 제정신이고, 힘과 두려움 때문에 [[savonarola|사보나롤라]]를 따르고 있을 뿐이다. 에지오는 지도자들의 입을 막고 분열을 조장하면 사보나롤라가 신경을 쓰게 될 것이고, 그때가 공격할 기회라고 한다. 마키아벨리는 그사이 [[la-volpe|라 볼페]]와 [[paola|파올라]]를 만나 시민운동을 조직하겠다고 한다. 화면 목표는 아홉 명의 선동자를 처치하는 것이다.",
        links: ["machiavelli", "savonarola", "la-volpe", "paola", "ezio"],
        sources: at(AC2_P27, [297, 335], [440, 460])
      },
      {
        id: "ev-ac2-instigator-merchant", year: 1497, yearVerified: true, game: "ac2",
        title: "다리를 막은 선동자",
        summary: "다리를 막은 선동자는 참선지자인 [[savonarola|사보나롤라]]에게 충성을 맹세하기 전까지 아무도 못 지나간다고 외친다. 그는 메디치 가문은 자기 혼자 살겠다고 내뺐다며, 사보나롤라께서 유혹도 더러움도 없는, 모두가 평등한 도시를 주실 것이라고 한다. [[ezio|에지오]]에게 쓰러진 그는 재와 부로는 채워지지 않는 게 있어 더 많이 손에 넣고 싶었다고 털어놓고, 에지오는 \"빈손으로 오셨으니 빈손으로 보내드리지\"라고 말한다.",
        links: ["savonarola", "lorenzo-medici", "florence", "ezio"],
        sources: at(AC2_P27, [476, 560], [600, 625])
      },
      {
        id: "ev-ac2-bonfire", year: 1497, yearVerified: true, game: "ac2",
        title: "허영의 불꽃",
        summary: "[[florence|피렌체]] 곳곳에서 사람들이 물건을 불에 던진다. 한 선동자는 붓과 펜, 찰흙 같은 것들은 악마의 잔재라며 불에 던져 버리라고 외친다. 다른 선동자는 자신도 처음 화가가 됐을 때 주님께 헌신하려 했지만, 자기 작품이 사람들을 오히려 더 악하게 만들었다며 이제 그것들을 바로잡을 기회가 왔다고 말한다. [[ezio|에지오]]에게 쓰러진 그는 정신이 돌아온 듯 내가 대체 뭘 한 거냐며, 자신에게 가졌던 의문을 틈타 놈이 자신을 사로잡았다고 사과한다.",
        links: ["savonarola", "temple-treasure", "florence", "ezio"],
        sources: at(AC2_P27, [800, 970])
      },
      {
        id: "ev-ac2-instigator-preacher", year: 1497, yearVerified: true, game: "ac2",
        title: "종말을 외치는 설교자",
        summary: "광장에서 한 설교자가 [[florence|피렌체]] 시민들에게 마지막 날이 다가오고 있으니 회개하라고 외친다. 온 사방에 다툼과 배고픔, 전염병 같은 종말의 징후가 나타나고 있으며, 자신도 [[savonarola|사보나롤라]]가 나타나기 전에는 불신에 차 있었지만 그분을 통해 진리를 보았다고 한다. [[ezio|에지오]]에게 쓰러진 그는 자신은 이미 진리를 믿는다며, 자신이 말한 것은 모두 진실이라고 말한다. 화면에 '3/9 명의 선동자 처치'가 표시된다.",
        links: ["savonarola", "florence", "ezio"],
        sources: at(AC2_P27, [1135, 1300], [1355, 1364])
      },
      {
        id: "ev-ac2-instigator-docks", year: 1497, yearVerified: true, game: "ac2",
        title: "항구의 선동자",
        summary: "항구에서 수레를 지키게 하는 선동자는 배를 굶겨도 얼마나 버티는지 보겠다며, 먹고 싶다면 [[savonarola|사보나롤라]]의 뜻에 따라야 한다고 외친다. 한때 메디치 가문을 소중한 고객으로 여겼지만, 선지자가 눈을 뜨게 해 준 뒤로 경제 논리의 더러움을 보게 되었다고 한다. 사보나롤라가 하나의 핏줄로 이루어진 평등과 정의의 세상으로 이끌 거라는 것이다. [[ezio|에지오]]에게 쓰러진 그는 정신이 돌아온 듯 자신이 무슨 짓을 한 거냐고 묻는다. 헌신은 억지로 되는 게 아니라는 에지오에게 어느 정도의 강요는 필요하다고 하자, 에지오는 결코 억지로 되는 건 없다고 답한다.",
        links: ["savonarola", "lorenzo-medici", "florence", "ezio"],
        sources: at(AC2_P28, [130, 420])
      },
      {
        id: "ev-ac2-instigator-hay", year: 1497, yearVerified: true, game: "ac2",
        title: "건초를 지키는 선동자",
        summary: "논밭을 지키게 하는 선동자는 가장 중요한 자원이 없으면 결국 무릎을 꿇게 될 거라며, 이미 여러 명이 굶주림과 추위를 못 이겨 넘어왔다고 한다. 건초는 말의 먹이이자 수레를 끌어 물건을 다른 도시로 나르게 하고, 소와 양에게도 꼭 필요하다며, 이 건초가 적에게 넘어가서는 안 된다고 경비병들에게 이른다. [[ezio|에지오]]에게 쓰러진 그는 너무 오랜 시간 무식하고 저급한 사람이라는 조롱거리가 되었고, 그저 존경을 받고 싶었다고 털어놓는다.",
        links: ["savonarola", "florence", "ezio"],
        sources: at(AC2_P28, [576, 1215])
      },
      {
        id: "ev-ac2-instigator-noble", year: 1497, yearVerified: true, game: "ac2",
        title: "계획을 지키려는 선동자",
        summary: "한 선동자는 [[florence|피렌체]]가 미쳐 버렸다며, 이곳을 고치는 것이 자기 의무라고 외친다. 미치광이를 따르라고 강요해서냐는 [[ezio|에지오]]에게 힘 있는 자들에게 대항하는 건 현명하지 않다고 하자, 에지오는 권력은 돌고 도는 법이라고 답한다. 그는 [[savonarola|사보나롤라]]에게 반역죄를 알려야 한다며 경비병을 부르지만 에지오에게 쓰러진다. 죽어 가며 그가 이상한 물건으로 자신에게 마법을 걸었을 거라고 하자, 에지오는 그렇게 되도록 놔둔 것은 자신이었을 거라고 말한다.",
        links: ["savonarola", "temple-treasure", "florence", "ezio"],
        sources: at(AC2_P28, [1292, 1360])
      },
      {
        id: "ev-ac2-instigator-fighter", year: 1497, yearVerified: true, game: "ac2",
        title: "싸움꾼 선동자",
        summary: "또 다른 도전자가 나섰다며 반기는 선동자는, [[savonarola|사보나롤라]]께서 교리를 반대하는 자들이 있다고 해서 나름대로 준비를 했다고 한다. 며칠 전에는 서른 명이 넘는 부하를 쓰러뜨린 자도 결국 지쳐 뻗었다며 [[ezio|에지오]]와 맞붙는다. 에지오에게 쓰러진 그는 이것이 정말 교만하고 잔인한 자신의 모습이었냐고 묻고, 에지오는 사보나롤라가 그를 사주한 것뿐이라고 답한다. 그는 권력의 달콤함에 중독된 것은 아닐까, 조금 더 지혜롭지 못했던 게 후회된다고 말한다.",
        links: ["savonarola", "florence", "ezio"],
        sources: at(AC2_P28, [1546, 1790])
      },
      {
        id: "ev-ac2-instigator-priest", year: 1497, yearVerified: true, game: "ac2",
        title: "라틴어로 기도하는 선동자",
        summary: "라틴어 기도문을 외며 돌아다니는 선동자를 [[ezio|에지오]]가 쓰러뜨린다. 그는 주의 말씀을 나누는 사람인 줄 알았는데 자신의 양 떼를 늑대의 굴로 인도했다며, 그저 자신의 어리석은 믿음 때문이었다고 후회한다.",
        links: ["savonarola", "florence", "ezio"],
        sources: at(AC2_P29, [113, 380])
      },
      {
        id: "ev-ac2-instigator-preacher2", year: 1497, yearVerified: true, game: "ac2",
        title: "돌을 던지라는 선동자",
        summary: "한 선동자는 군중에게 [[florence|피렌체]]를 오래전에 떠난 메디치 가문을 감싸고 돌을 던지든지, 아니면 [[savonarola|사보나롤라]]를 받아들이라고 외친다. 사보나롤라가 오기 전 사람들은 정욕과 탐욕, 교만 속에 허덕였고, 그 때문에 하늘의 징벌을 받았다고 한다. [[ezio|에지오]]는 그를 처치한다.",
        links: ["savonarola", "lorenzo-medici", "florence", "ezio"],
        sources: at(AC2_P29, [454, 760])
      },
      {
        id: "ev-ac2-instigator-doctor", year: 1497, yearVerified: true, game: "ac2",
        title: "치료자 선동자",
        summary: "마지막 선동자는 의사로, 같은 말로 군중을 몰아세우다 [[ezio|에지오]]에게 쓰러진다. 치료자의 피를 흘리게 하다니라고 하자, 에지오는 독재자의 피를 흘리게 한 것이라고 답한다. 그는 생명을 다루는 기술을 배운 뒤로 자신이 정신이 나갔던 모양이라고 말한다. 화면에 '9/9 명의 선동자 처치'가 표시된다.",
        links: ["savonarola", "florence", "ezio"],
        sources: at(AC2_P29, [720, 780], [930, 940])
      },
      {
        id: "ev-ac2-savonarola-fall", year: 1497, yearVerified: true, game: "ac2",
        title: "사보나롤라의 몰락",
        summary: "선동자들이 모두 사라지자 시민들이 [[savonarola|사보나롤라]]의 수도원 앞으로 몰려든다. 동료들은 [[ezio|에지오]]에게 잘했다며 이제 잘 봐 두라고 한다. 사보나롤라는 집을 치우고 기도하며 회개하라고 하지 않았냐며 내 말에 복종하라고 외치지만, 성난 시민들에게 끌려 나간다. 그 소란 속에 [[temple-treasure|선악과]]가 사라지고, 에지오는 멀리 가지 못했을 거라는 말에 선악과를 되찾으러 쫓아간다.",
        links: ["savonarola", "temple-treasure", "florence", "ezio"],
        sources: at(AC2_P29, [934, 1100])
      },
      {
        id: "ev-ac2-savonarola-death", year: 1498, game: "ac2",
        title: "사보나롤라의 최후",
        summary: "광장에서 [[savonarola|사보나롤라]]가 화형대에 묶여 불타는 가운데, 그를 따르던 자는 주께서 이교도들을 불의 심판으로 벌하실 것이라고 외친다. 사보나롤라는 주께 자비를 구하고, [[ezio|에지오]]는 그 누구도 그런 고통 속에 죽어야 할 이유는 없다며 화형대로 다가간다. 사보나롤라는 이 날이 올 줄 알았다며 자비를 베풀어 달라고 하고, 에지오는 \"어서 가라. 너의 그 신 앞에서 심판을 받을 것이니. 편히 쉬게 하소서\"라며 그를 보낸다. 이어 에지오는 군중 앞에서 딱 22년 전 바로 이 자리에서 가족들이 죽는 것을 봐야 했다며, 사보나롤라도 메디치도 아닌 스스로의 길을 찾아야 한다고, 누구도 따라갈 필요가 없다고 연설한다.",
        links: ["savonarola", "auditore-family", "giovanni-auditore", "florence", "ezio"],
        sources: at(AC2_P29, [1254, 1463])
      },
      {
        id: "ev-bunker-double", year: 1945, yearVerified: true, game: "ac2",
        title: "벙커의 대역",
        summary: "어쌔신 크리드 II의 열일곱 번째 [[glyphs|문양]]에서 언급된다. [[abstergo|앱스테르고]] 코퍼레이션 문서에 따르면 1945년 전쟁이 끝난 뒤, H는 베를린의 벙커 안에서 자신의 대역을 죽이고 [[temple-treasure|에덴의 조각]]을 가지고 C와 접선 장소에서 만나기로 되어 있었지만, 사흘이 지나도 나타나지 않았다. 함께 나오는 문장과 암호문은 위쪽에서 출구를 감시하던 이들이 그를 덮쳤고, 대역은 벙커 안에서 살해당했다고 말한다. H는 상황상 아돌프 히틀러로 추정되며, C가 누구인지는 확실하지 않다.",
        links: ["glyphs", "abstergo", "temple-treasure", "templars", "assassins"],
        sources: at(AC2_P30, [1428, 1560])
      },
      {
        id: "ev-fake-bones", year: 1997, yearVerified: true, game: "ac2",
        title: "인공 뼈로 꾸민 연결고리",
        summary: "어쌔신 크리드 II의 스무 번째 [[glyphs|문양]]에서 언급된다. 1997년 [[abstergo|앱스테르고]] 코퍼레이션 편지에 따르면, 원시인과 현대 인류 사이에 빠진 연결고리가 더 이상 안전하지 않다는 경고가 커지자, 그들이 진실을 알게 하지 않으려고 이디오피아의 팀 화이트 원정지 근처에 인공 뼈를 묻어 진화 단계의 연결고리를 꾸미기로 한다. 편지는 '인류의 탄생 말입니다. 진실은 저를 신물나게 만듭니다'로 끝난다.",
        links: ["glyphs", "abstergo", "templars"],
        sources: at(AC2_P31, [818, 845])
      },
      {
        id: "ev-ac2-vault-in-rome", year: 1499, game: "ac2",
        title: "지하금고는 로마에",
        summary: "[[codex|역사 자료]]를 모두 모은 [[ezio|에지오]]는 [[mario-auditore|마리오]]에게 아버지가 오래전 시작한 일을 마무리할 때가 됐다고 한다. 서재 벽의 문서들을 맞추자 세계 지도가 드러나고, 지도에는 지금 알려지지 않은 땅들까지 그려져 있다. 에지오는 [[vault|지하금고]]가 로마에 있다고 깨닫고, 스페인 놈이 교황 자리를 노린 이유가 그것이었다고 한다. 역사 자료는 늘 두 개의 열쇠, 곧 두 개의 [[temple-treasure|에덴의 조각]]이 있어야 금고를 열 수 있다고 했는데, 하나는 선악과이고 다른 하나는 교황의 지팡이였다. 에지오는 로마로 가서 당장 지하금고를 찾겠다고 하고, 마리오는 소란을 피워 에지오가 편하게 움직일 수 있게 돕겠다고 한다.",
        links: ["mario-auditore", "codex", "vault", "temple-treasure", "rodrigo-borgia", "giovanni-auditore", "ezio"],
        sources: at(AC2_P32, [229, 430])
      },
      {
        id: "ev-ac2-vatican-infiltration", year: 1499, game: "ac2",
        title: "바티칸 잠입",
        summary: "[[mario-auditore|마리오]]와 용병들이 로마에서 소란을 일으키는 사이, [[ezio|에지오]]는 바티칸으로 숨어든다. 경비병들이 성문을 닫고 침입자를 막으라고 외치지만, 에지오는 경비를 뚫고 미사가 열리고 있는 시스티나 예배당까지 들어간다.",
        links: ["mario-auditore", "rodrigo-borgia", "ezio"],
        sources: at(AC2_P32, [471, 830], [1500, 1570])
      },
      {
        id: "ev-ac2-sistine-fight", year: 1499, game: "ac2",
        title: "시스티나 예배당의 결투",
        summary: "[[ezio|에지오]]는 미사를 집전하던 [[rodrigo-borgia|로드리고]]를 덮치지만, 로드리고가 먼저 에지오를 찌르고 \"편히 잠들어라, 개자식아\"라고 말한다. 쓰러진 줄 알았던 에지오가 다시 일어나자, 로드리고는 [[temple-treasure|교황의 지팡이]]를 휘두르며 네 아비를 쏙 빼닮았다고, 네 아비를 직접 만나게 해 주겠다고 한다. 에지오는 [[temple-treasure|선악과]]를 써서 맞서고, 마침내 로드리고를 꺾고 지팡이를 빼앗는다. 에지오가 다 끝났다며 순순히 항복하라고 하자, 로드리고는 네가 내 입장이었다면 그렇게 쉽게 포기할 수 있겠냐고 맞받는다.",
        links: ["rodrigo-borgia", "temple-treasure", "giovanni-auditore", "ezio"],
        sources: at(AC2_P32, [1570, 1720])
      },
      {
        id: "ev-ac2-vault-door", year: 1499, game: "ac2",
        title: "지하금고 앞의 결투",
        summary: "[[ezio|에지오]]는 [[vault|지하금고]] 입구에서 문을 열려고 애쓰는 [[rodrigo-borgia|로드리고]]를 따라잡는다. 에지오는 속임수도 유물도 무기도 쓰지 말자며 맨손으로 맞선다. 싸우는 동안 로드리고는 금고 안에 신이 있다며, 구원에는 관심이 없고 그 힘을 차지하고 싶을 뿐이라고 말한다. 지팡이와 선악과는 신을 쓰러뜨리려고 만들어진 것이라고 하고, 자신이 교황이 된 것도 금고에 접근할 핑계와 권력을 얻기 위해서였다며 책에 쓰인 말은 구닥다리라고 한다. 에지오는 로드리고를 쓰러뜨리지만, 그를 죽인다고 가족이 돌아오는 것도 아니라며 \"나는 이걸로 끝났다\"고 하고 목숨을 거두지 않는다. 쓰러진 로드리고를 두고 에지오는 \"아무 것도 진실이 아니며, 모든 것이 허용된다. 편히 잠들어라\"라고 말한다.",
        links: ["rodrigo-borgia", "vault", "temple-treasure", "auditore-family", "ezio"],
        sources: at(AC2_P32, [1829, 2005])
      },
      {
        id: "ev-ac2-minerva", year: 1499, game: "ac2",
        title: "미네르바의 메시지",
        summary: "[[ezio|에지오]]가 지팡이와 선악과로 [[vault|지하금고]]를 열자, 빛으로 된 여인이 나타나 \"선지자여, 이렇게 만나는군요\"라고 맞이한다. 그녀는 자신이 죽었을 때는 [[minerva|미네르바]]라고 불렸고, 그 전에는 메르바와 메라였다고 한다. 다른 이들도 마찬가지로 주노와 유니, 주피터와 티니아로 불렸다고 한다. 그녀는 자신들이 신이 아니라 먼저 왔던 자들일 뿐이라고 하고, 에지오에게 말하는 것이 아니라 에지오를 통해 대화하려는 것이라며, 에지오는 그와 자신들을 잇는 고리에 불과하다고 한다. 그녀에 따르면 자신들에게도 육신과 온전한 거처가 있었지만, 그들이 만든 인류가 그들을 배반했다. 땅의 일에 신경 쓰느라 하늘의 일을 돌보지 못해, 늦게 하늘에 집중했을 때는 이미 모든 것이 재만 남기고 타 버린 뒤였다. 그래도 그들은 살아남을 수 있는 모습으로 인간을 만들었고, 희생과 힘과 은혜로 세상에 다시 생명이 태어나게 했으며, 이런 비극이 반복되지 않도록 노력했다. 하지만 그들은 이제 죽어 가고, 진실은 신화와 전설로 바뀌었다. 그녀는 다른 신전들을 찾으라고 한다. 전쟁을 피하는 지혜를 가졌던 자들이 불로부터 세상을 지키려고 준비해 둔 곳으로, 그곳을 찾아 그들의 수고를 지켜 내면 이 세상도 지켜 낼 수 있다는 것이다. 서둘러야 하며 십자가의 공격에 대비하라고 경고한 뒤, \"나머지는 당신에게 맡기도록 하죠, 데스몬드\"라고 말하고 사라진다. 에지오는 데스몬드가 누구냐며 물어볼 게 많다고 외친다. 이 모든 것을 [[animus|애니머스]]로 지켜본 [[desmond|데스몬드]]는 \"이건 또 뭐야, 젠장\"이라고 내뱉는다.",
        links: ["minerva", "vault", "temple-treasure", "desmond", "ezio"],
        sources: at(AC2_P32, [2040, 2325])
      },
      {
        id: "ev-desmond", year: 2012, game: "ac1", yearVerified: true,
        title: "애니머스에 눕혀진 데스몬드",
        summary: "[[abstergo|앱스테르고]]에 끌려온 바텐더 [[desmond|데스몬드 마일즈]]가 [[warren-vidic|비딕]]의 협박에 못 이겨 [[animus|애니머스]]에 눕는다. 비딕은 DNA에 선조의 기억이 담겨 있다고 설명하고, 선조 [[altair|알타이어]]의 기억을 탐색하게 한다. 애니머스 음성은 데스몬드를 \"실험체 17\"이라고 부른다.",
        links: ["desmond", "animus", "abstergo", "warren-vidic", "lucy-stillman"],
        sources: [...at(AC1_MB1, 240, 300, 365, 420, 506), ...at(AC1_MS, [80, 330])]
      },
      {
        id: "ev-conference-argument", year: 2012, game: "ac1", yearVerified: true,
        title: "회의실의 말다툼",
        summary: "영어 음성에 따르면 [[lucy-stillman|루시]]는 회의실에서 [[warren-vidic|비딕]]에게 [[desmond|데스몬드]]를 죽이려 한다며 따진다. 비딕은 마감 기한을 정한 건 자신이 아니지만 그들에게 맞서지 않을 만큼은 똑똑하다고 답하고, \"[[leila-marino|레일라]]처럼 되고 싶나?\"라고 말한다. 그는 '그 사고' 때문에 모두가 예민하다고도 한다. 루시는 너무 몰아붙이면 데스몬드가 무너질 것이라고 경고한다.",
        links: ["lucy-stillman", "warren-vidic", "leila-marino", "desmond"],
        sources: at(AC1_MS, [400, 470])
      },
      {
        id: "ev-desmond-past", year: 2012, game: "ac1", yearVerified: true,
        title: "데스몬드가 털어놓은 과거",
        summary: "[[desmond|데스몬드]]가 [[lucy-stillman|루시]]에게 30명 남짓한 [[assassins|암살단]] 공동체('농장')에서 자랐고 16살에 도망쳤다고 말한다. 10년 동안 숨어 살았지만 [[abstergo|앱스테르고]]가 운전면허 기록(사진과 지문)으로 그를 찾아냈다.",
        links: ["desmond", "lucy-stillman", "abstergo"],
        sources: at(AC1_MB1, 2560, 2580, 2675)
      },
      {
        id: "ev-vidic-reeducation", year: 2012, game: "ac1", yearVerified: true,
        title: "비딕의 '재교육' 발언",
        summary: "다음 날 아침, [[warren-vidic|비딕]]은 [[desmond|데스몬드]]에게 그의 선조들이 '거의' 옳은 생각을 했다고 말한다. 부패는 암과 같아서 종양만 잘라 내서는 소용없고, 포괄적이고 체계적인 개입, 즉 대중의 '재교육'이 필요하다고 주장한다. 자신이 생각하는 해결책이 무엇인지는 비밀이라며 밝히지 않는다.",
        links: ["warren-vidic", "desmond"],
        sources: at(AC1_MB2A, 0, 15, 30, 45, 60)
      },
      {
        id: "ev-deadline", year: 2012, game: "ac1", yearVerified: true,
        title: "일주일의 기한",
        summary: "[[lucy-stillman|루시]]는 [[desmond|데스몬드]]에게 실험에 기한이 정해져 있다고 털어놓는다. 일주일이었고, 이제 6일 남았다. 루시는 [[animus|애니머스]]가 대사를 현대 영어로 옮겨 준다는 것과 [[abstergo|앱스테르고]]가 세계 최대 제약회사 중 하나라는 것을 알려 준다. 데스몬드는 루시의 컴퓨터에서 회사 이메일을 읽는다.",
        links: ["lucy-stillman", "desmond", "abstergo", "animus"],
        sources: at(AC1_MB2B, 2175, 2205, 2230, 2265, 2295, 2340, 2385)
      },
      {
        id: "ev-emails-pen", year: 2012, game: "ac1", yearVerified: true,
        title: "출입 키 펜과 '레일라처럼'",
        summary: "[[desmond|데스몬드]]가 [[lucy-stillman|루시]]의 받은 편지함에서 읽은 이메일이다. 9월 2일 루시는 [[warren-vidic|비딕]]에게 주차장에서 그의 출입 키(ACCESS-KEY) 펜을 또 주웠다며, 보안팀이 찾았다면 컴퓨터 접근 코드를 다시 짜느라 적어도 하루는 문을 닫았을 것이라고 쓴다. 비딕은 \"내 책상에 두고 내 물건보다 [[animus|애니머스]]가 돌아가게 하는 데 신경 써\"라고 답한다. 9월 3일에는 [[abstergo|앱스테르고]] 전 직원에게 회사 정책과 프로젝트를 말하지 말라는 기밀 유지 공지가 온다. 루시가 \"아까 '[[leila-marino|레일라]]처럼 된다'고 했던 건 무슨 뜻이냐\"고 묻자 비딕은 \"아무것도 아니야. 마감이 있으니 일이나 해\"라고 답한다.",
        links: ["lucy-stillman", "warren-vidic", "leila-marino", "abstergo"],
        sources: at(AC1_MS, [975, 1010], [1035, 1145], [1170, 1190])
      },
      {
        id: "ev-vidic-order", year: 2012, game: "ac1", yearVerified: true,
        title: "비딕이 말하는 '질서'",
        summary: "[[warren-vidic|비딕]]은 [[desmond|데스몬드]]에게 세상은 난장판이고, 조상 시대에서 천 년이 지났는데도 사회는 여전히 야만적이라고 말한다. 세계에 필요한 것은 질서이며, 방향을 갈망하는 인류에게 어떻게 살아야 하는지 '우리가 말해 주겠다'고 한다. 그것이 '모든 것에서의 평화'를 바라는 [[assassins|암살단]]의 목표와도 같지 않으냐고 묻고, 데스몬드에게 \"그게 어디 있는지 보여 주기만 하면 된다\"고 말한다.",
        links: ["warren-vidic", "desmond", "assassins"],
        sources: at(AC1_MB3A, 4, [35, 41], 53, [68, 88], [110, 116])
      },
      {
        id: "ev-vidic-gifts", year: 2012, game: "ac1", yearVerified: true,
        title: "'우리 이전에 온 존재들의 선물'",
        summary: "[[warren-vidic|비딕]]은 [[lucy-stillman|루시]]가 [[animus|애니머스]]를 개조해 [[desmond|데스몬드]]가 더 오래 머물 수 있게 됐다고 알린다. 그리고 지난 수천 년간 의학, 기계, 철학의 획기적인 도약이 [[abstergo|앱스테르고]]와 그 전신에게서 나왔다고 말한다. 의심을 사지 않으려고 공로를 내세우지 않고 수혜자를 신중히 고른다며, \"그건 우리가 통제하고 있다는 소리\"라고 한다. 또 자신들은 그것들을 발명한 게 아니라 '발견'했으며, \"우리 이전에 온 존재들로부터의 선물\"이라고 말한다.",
        links: ["warren-vidic", "abstergo", "desmond", "animus", "lucy-stillman"],
        sources: at(AC1_MB4A, [7, 36], [52, 62], [74, 86])
      },
      {
        id: "ev-lucy-story", year: 2012, game: "ac1", yearVerified: true,
        title: "루시가 털어놓은 사연",
        summary: "[[animus|애니머스]]가 과열되어 작업이 멈추자 [[warren-vidic|비딕]]은 루시에게 매시간 보고하라고 다그친다. [[lucy-stillman|루시]]는 [[desmond|데스몬드]]에게 자신도 집에 가지 못하는 처지라고 털어놓는다. 비딕이 일자리를 줘서 [[abstergo|앱스테르고]]에 왔지만 무장한 경비들에게 끌려가 죽을 뻔했고, 그때 비딕이 막아 줘서 살았다고 한다.",
        links: ["lucy-stillman", "warren-vidic", "desmond", "animus", "abstergo"],
        sources: at(AC1_MB3B, [2525, 2535], 2580, 2600, 2640, 2685, 2700, 2740)
      },
      {
        id: "ev-leila-emails", year: 2012, game: "ac1", yearVerified: true,
        title: "레일라 마리노에 관한 이메일",
        summary: "누군가 [[desmond|데스몬드]]의 방에 들어왔다 간 흔적과 접근 코드가 남아 있다. [[lucy-stillman|루시]]의 받은 편지함에는 [[leila-marino|레일라 마리노]]에 관한 이메일이 있다. 9월 4일 루시는 낸시 닐롭에게 2007년 9월에 죽은 전 직원 레일라에 대해 묻는다. 사고였다고 들었지만 검시관 기록이 봉인되어 있다며, 자살이라면 왜 이렇게 민감하게 다루느냐는 것이다. 낸시는 말할 권한이 없다고 답한다. 루시가 \"회사가 검시관 보고서를 '자산 정보'로 묶는 건 처음 본다. 그녀는 내 친구였다\"고 다시 쓰자, 낸시는 [[alan-rikkin|앨런 리킨]]에게 문의하라며 리킨과 [[warren-vidic|비딕]]을 참조로 넣는다. 비딕은 \"그녀는 자살했어. 노이만이라는 애와의 관계 때문이었다. 회사 사람과는 엮이지 마. 이제 그만 덮어\"라고 답한다.",
        links: ["leila-marino", "lucy-stillman", "warren-vidic", "alan-rikkin", "abstergo"],
        sources: [...at(AC1_MB3B, 2780, 2835, 2865, 2925, 2940, 2970), ...at(AC1_MS, [1748, 1890])]
      },
      {
        id: "ev-rescue-attempt", year: 2012, game: "ac1", yearVerified: true,
        title: "\"당신은 기사단에게 잡혀 있어요\"",
        summary: "[[warren-vidic|비딕]]은 서둘러 세션을 끝내고 누군가와 통화한 뒤 \"정말 문제가 많구만, 마일즈 군\"이라고 한다. [[lucy-stillman|루시]]는 암살자들이 [[desmond|데스몬드]]를 구하러 올 것 같다며, 그의 조상이 제3차 십자군 때 시작한 싸움은 끝나지 않았고 그는 지금 [[templars|기사단]]에게 잡혀 있다고 알려 준다. 비딕도, 루시 자신도 그들을 위해 일하며 [[abstergo|앱스테르고]]는 그들의 회사라고 한다. 루시는 기사단이 원하는 건 좋지만 그걸 행하는 방법이 아주 나쁘다고 말하고, 비딕에게 불려 가면서 \"질문에 대한 답은 바로 당신 앞에 있어요\"라고 남긴다.",
        links: ["warren-vidic", "lucy-stillman", "desmond", "templars", "abstergo"],
        sources: at(AC1_MB4C, [1697, 1707], [1724, 1759], 1770, [1786, 1801], 1812, [1826, 1829])
      },
      {
        id: "ev-emails-threat", year: 2012, game: "ac1", yearVerified: true,
        title: "리킨의 경고와 '나는 알고 있다'",
        summary: "9월 5일 [[lucy-stillman|루시]]는 [[alan-rikkin|리킨]]에게 \"5년이 지났는데도 아무도 친구에게 무슨 일이 있었는지 말해 주지 않는다. 회사에서의 내 기록이 말해 주지 않느냐\"고 쓴다. 리킨에게서는 10월 4일까지 자리를 비운다는 자동 답장이 온다. 그런데 리킨은 바로 [[warren-vidic|비딕]]에게 \"그녀가 문제를 일으키지 않는다더니 또 들쑤시고 있다. 처리해, 워렌. 네가 보증했으니 네 책임이다\"라고 쓴다. 비딕의 휴지통에는 9월 4일 발신자 불명의 메일 'I KNOW'가 있다. \"그가 금속 공을 들고 있었고, 그게 열리자 사람들이 미쳐서 서로 쏘고 찌르고 갈기갈기 찢었다. 로고를 봤고 이름을 들었다. 모두에게 알릴 것이고 너희는 대가를 치를 것\"이라는 내용이다. [[abstergo|앱스테르고]] 뉴스 메일에는 [[eye-abstergo-satellite|아이-앱스테르고 위성]] 발사가 12월 21일로 연기되었다는 소식도 있다.",
        links: ["alan-rikkin", "lucy-stillman", "warren-vidic", "leila-marino", "temple-treasure", "eye-abstergo-satellite"],
        sources: [...at(AC1_MB4C, 1918, 2010, 2135, 2230, 2303, 2351), ...at(AC1_MS, [2405, 2420], [2530, 2580], [2790, 2800], [2835, 2875])]
      },
      {
        id: "ev-last-memory", year: 2012, game: "ac1", yearVerified: true,
        title: "\"마지막 기억에 접근하게 되면\"",
        summary: "[[warren-vidic|비딕]]은 이름이 나오지 않은 누군가에게 \"거의 다 끝나 갑니다\"라고 보고한다. 상대는 시간이 얼마 없다며, 그것이 어디에 숨겨져 있든 되찾고 일이 다 끝나면 \"그는 처리될 것\"이냐고 묻고, 내일 아침까지 진행 보고서를 원한다고 한다. 비딕이 자리를 비우자 [[lucy-stillman|루시]]는 [[desmond|데스몬드]]를 [[animus|애니머스]]에서 꺼낸다. 그리고 그들이 데스몬드의 마지막 기억에 접근하게 되면 그것은 시작일 뿐이며, 우리가 사는 방식, 생각하는 방식, 존재하는 방식을 모두 바꾸려 한다고 말한다. 방법은 '기사단 유물'이라고 한다. 루시는 비딕에게 \"여기는 모두 '덴버'입니다\"라고 둘러댄다.",
        links: ["warren-vidic", "lucy-stillman", "desmond", "temple-treasure", "templars", "animus"],
        sources: at(AC1_MB5B, [2055, 2071], [2098, 2132], [2196, 2202])
      },
      {
        id: "ev-denver", year: 2012, game: "ac1", yearVerified: true,
        title: "덴버의 사고와 다른 유물들",
        summary: "영어 음성에 따르면 [[lucy-stillman|루시]]는 [[masyaf|마시아프]]에 있던 [[temple-treasure|유물]]은 그들이 가지고 있었지만 '사고'로 파괴되었다고 말한다. 그래서 그들은 [[desmond|데스몬드]]의 조상이 다른 유물들이 어디 있는지 보여 주기를 바라고 있다고 한다. 유물이 하나가 아니냐는 물음에는 \"아무것도 모르는군요\"라고 답한다. 또 '모든 것이 덴버'라는 말은 지하 시설이 있는 덴버 국제공항을 가리키며, 그곳에서 사고가 일어났다고 설명한다.",
        links: ["lucy-stillman", "temple-treasure", "desmond", "abstergo"],
        sources: at(AC1_MB5B, 2160, 2180, 2194, [2210, 2220])
      },
      {
        id: "ev-we-will-be-there-soon", year: 2012, game: "ac1", yearVerified: true,
        title: "루시의 비밀 메일",
        summary: "9월 6일 [[lucy-stillman|루시]]의 받은 편지함에 'faster cheaper meds'가 보낸 스팸처럼 보이는 메일 'Problems DOWN THERE?'이 있다. 본문에 대문자가 군데군데 섞여 있는데, 업로더 자막은 이를 'WE WILL BE THERE SOON(곧 거기로 가겠다)'으로 읽는다. 그 아래에는 루시와 이름 없는 상대가 주고받은 대화가 붙어 있다. 상대가 'DIA 사건'에 대한 정보를 요청하자 루시는 \"사고로 적어도 20명이 죽었다. 이곳을 발사지로, 아니라면 조립지로 보고 잠입해야 한다\"고 답한다. 발사 목적을 묻자 \"유물을 위한 [[eye-abstergo-satellite|저궤도 송신기]]. 5년 전 조건 반응 실험의 연장이다. 성공하면 그들은 모든 것을 지배한다\"고 쓰고, 마지막으로 \"구조대를 보내 줄 수 있나요?\"라고 묻는다.",
        links: ["lucy-stillman", "eye-abstergo-satellite", "temple-treasure", "desmond"],
        sources: [...at(AC1_MB5B, 2329, 2356, [2418, 2422], 2458, 2607, 2634), ...at(AC1_MS, [3335, 3345], [3380, 3465])]
      },
      {
        id: "ev-false-alarm", year: 2012, game: "ac1", yearVerified: true,
        title: "'불소 강화 연구' 유출",
        summary: "[[desmond|데스몬드]]는 [[warren-vidic|비딕]]의 받은 편지함도 읽는다. 9월 6일 뉴스 메일에는 [[abstergo|앱스테르고]] 홀딩스가 합성 약물 '뉴 플루오라이드'를 시험하려고 작은 마을의 수돗물을 몰래 조작해 수백 명이 입원했다는 기사가 있다. 동료들은 누군가 '불소 강화 연구' 문서를 유출해 제약 부서가 연방 수사를 받고 문을 닫았으며 \"마을 하나를 통째로 독살한 셈\"이라고 쓴다. [[alan-rikkin|리킨]]은 위성 발사가 21일로 연기된 것을 '통화 품질 개선' 때문이라고 보도자료를 내겠다며, 새 발사 일정에 맞춰 필요한 것을 얻으라고 비딕에게 말한다. 비딕은 리킨에게 비밀번호를 요청해 보안 부서에서 받는다.",
        links: ["warren-vidic", "alan-rikkin", "abstergo", "eye-abstergo-satellite"],
        sources: at(AC1_MS, [3530, 3560], [3600, 3660])
      },
      {
        id: "ev-vidic-history", year: 2012, game: "ac1", yearVerified: true,
        title: "\"보고 읽는 모든 것을 믿지 마라\"",
        summary: "[[warren-vidic|비딕]]은 이제 거의 다 끝났다며, 그들이 [[desmond|데스몬드]]에게 다음 단계를 보여 줄지도 모른다고 한다. 데스몬드가 [[animus|애니머스]]에서 본 것이 가끔 역사와 동떨어져 보이고, 책이나 편지 같은 자료와 맞지 않는다고 하자, 비딕은 \"누구도 책을 쓸 수 있고 원하는 어떤 내용도 넣을 수 있다\"고 답한다. 한때는 세상이 평평하다고 믿었고 달 착륙이 조작이라는 책도 있다며, 보고 읽는 모든 것을 믿지 말라고 한다. 데스몬드가 조상의 말 \"모든 것은 허용된다\"를 잇자, 비딕은 그것이 애니머스를 특별하게 만드는 점, 즉 오해의 여지가 없다는 점이라고 말한다. 데스몬드는 \"그럴 여지는 항상 있지\"라고 답한다.",
        links: ["warren-vidic", "desmond", "animus"],
        sources: at(AC1_MB6A, [6, 13], [19, 56], [61, 85], [90, 117])
      },
      {
        id: "ev-rescue-failed", year: 2012, game: "ac1", yearVerified: true,
        title: "실패한 구출",
        summary: "[[warren-vidic|비딕]]은 [[desmond|데스몬드]]를 깨우며 \"자네 암살자 친구들이 우릴 찾은 것 같군\"이라고 소리친다. 연구소가 공격받았지만 직원들은 대여섯 명뿐이고 수적으로 우위라며 곧 진압한다. 비딕은 지난 한 해 동안 [[assassins|암살단]]의 거주지와 사막 구역 같은 곳들을 수색해 왔다며, 데스몬드를 위해 올 암살자는 남아 있지 않고 \"자네 혼자 남았을지도 모르겠군\"이라고 말한다. 내일 끝내야 한다는 말도 덧붙인다.",
        links: ["warren-vidic", "desmond", "assassins", "abstergo"],
        sources: at(AC1_MB6B, [1574, 1596], [1598, 1622], [1630, 1650], [1653, 1661])
      },
      {
        id: "ev-lucy-faith", year: 2012, game: "ac1", yearVerified: true,
        title: "\"믿음을 가져요\"",
        summary: "[[lucy-stillman|루시]]는 [[warren-vidic|비딕]]이 말한 사막에 팀이 갔지만 이미 비어 있었다며, [[desmond|데스몬드]]의 부모님은 도망쳤을 것 같다고 말한다. 데스몬드는 탈출할 유일한 기회가 사라졌고 일이 끝나면 그들이 자신을 죽일 것이라며 절망한다. 루시는 \"믿음을 좀 가져 봐요\"라고 말한다. 업로더 자막에 따르면 이때 루시는 약지를 접어 [[assassins|암살단]]을 뜻하는 몸짓을 보인다.",
        links: ["lucy-stillman", "desmond", "assassins"],
        sources: at(AC1_MB6B, [1704, 1722], [1724, 1737], [1741, 1750])
      },
      {
        id: "ev-emails-end", year: 2012, game: "ac1", yearVerified: true,
        title: "\"실험체 17의 플러그를 뽑겠다\"",
        summary: "9월 7일 [[alan-rikkin|리킨]]은 [[warren-vidic|비딕]]에게 '추가 실험체?'라는 메일을 보낸다. [[desmond|데스몬드]]가 원하는 걸 주지 못하면 다른 곳을 찾아야 하며, 그가 '은퇴'할 경우 획득 부서의 데이비드가 실험체를 더 구해 줄 수 있다는 내용이다. 불소 강화 건으로 감시가 심해졌으니 21일에 발사해야 하고, DIA의 난장판은 치웠지만 한 수하물 담당자가 인터넷에 대량 살인과 기업의 은폐를 퍼뜨리고 있다고 한다. 보고서에 따르면 정리반이 도착하기 전에 '프로젝트 책임자'가 그곳 사람들을 모두 죽였다. 리킨은 [[assassins|암살단]] 놈들이 아직 몇 명 돌아다니고 있어 불소 유출이 내부 소행일지도 모른다며, \"실험체 17의 플러그를 뽑을 생각이다. 결과를 가져오든지 다른 사람을 [[animus|애니머스]]에 넣어라\"라고 쓴다.",
        links: ["alan-rikkin", "warren-vidic", "desmond", "abstergo", "assassins", "temple-treasure"],
        sources: [...at(AC1_MB6B, 1823, 1840, 1896, 2137), ...at(AC1_MS, [4184, 4290])]
      },
      {
        id: "ev-rikkin-analysis", year: 2012, game: "ac1", yearVerified: true,
        title: "리킨의 '분석' 메일",
        summary: "'프로젝트 책임자 #9' 받은 편지함에 [[alan-rikkin|리킨]]이 보낸 '분석' 메일이 있다. 실험체 12~16의 [[animus|애니머스]] 기록을 검토했으며, [[temple-treasure|에덴의 조각]]이 최우선이지만 남은 유물들도 찾아야 하고 위성의 효과에 면역이거나 보호받는 자들도 처리해야 한다는 내용이다. 1) 에덴의 조각(3번): DIA 위성 사고로 2번을 잃은 뒤 대체 유물을 찾고 있고, [[desmond|실험체 17]]은 자신도 모르게 다른 유물들의 위치를 알고 있으니 마지막 기억을 반드시 열어야 한다. 2) 필라델피아 프로젝트: 실험체 12의 데이터에 따르면 배가 약 18분간 미래에 나타났지만, 경영진은 역설을 우려해 진행을 거부했다. 3) [[tunguska|퉁구스카 사건]]: [[assassins|암살단]]의 공격 결과로 보이며 연구소와 유물이 파괴되었다. 4) 성배: 존재를 확인할 증거가 부족해 목표에서 뺀다. 5) 미첼-헤지스 통신기: 작동이 확인되어 발사 뒤 안전한 통신 채널로 쓴다. 메일은 \"이해의 아버지께서 성공으로 인도하시길\"로 끝난다.",
        links: ["tunguska", "alan-rikkin", "warren-vidic", "temple-treasure", "eye-abstergo-satellite", "subject-16", "desmond", "templars"],
        sources: at(AC1_MS, [4442, 4485])
      },
      {
        id: "ev-map-found", year: 2012, game: "ac1", yearVerified: true,
        title: "\"드디어 찾았다\"",
        summary: "[[warren-vidic|비딕]]은 [[animus|애니머스]] 화면 속 지도를 보고 \"드디어 찾았다\"고 외친다. 이름이 나오지 않은 상대(자막의 '???')에게 지도를 획득했다고 보고하며, 유물은 적어도 여섯 개이고 그중 일부는 망가졌을 것이며, 적어도 두 개는 지금은 없는 대륙에 있는 것으로 나타난다고 말한다. 상대는 각 장소로 팀을 보내 확인하고 나머지도 우선 모으라며, \"우리는 딱 하나만 있으면 된다\"고 한다. 정말 필요 없는 것은 \"새로운 세상에서 문제를 일으킬 수 있는 생존자들\"이라는 말도 한다.",
        links: ["warren-vidic", "temple-treasure", "desmond", "animus"],
        sources: at(AC1_MB7, [1141, 1144], [1160, 1196])
      },
      {
        id: "ev-lucy-saves-desmond", year: 2012, game: "ac1", yearVerified: true,
        title: "\"그가 필요할지도 몰라요\"",
        summary: "[[warren-vidic|비딕]]이 \"그럼 저 암살자는?\"이라고 묻자 상대는 \"필요한 건 다 얻었네\"라고 답한다. [[lucy-stillman|루시]]가 끼어들어, 일이 제대로 진행될지 모르니 그의 기억이 필요할 수도 있다며 당황스러운 일이 없다는 것이 확인될 때까지 그를 두자고 한다. 상대는 \"그가 더 이상 필요 없다고 확신이 들면 그때 그를 죽이게\"라고 결정한다. 비딕은 [[desmond|데스몬드]]에게 \"너무 편하게 있지는 말라, 곧 돌아오겠다\"고 한다.",
        links: ["lucy-stillman", "warren-vidic", "desmond"],
        sources: at(AC1_MB7, [1195, 1229], 1237)
      },
      {
        id: "ev-wall-writings", year: 2012, game: "ac1", yearVerified: true,
        title: "벽의 핏자국",
        summary: "혼자 남은 [[desmond|데스몬드]]의 눈에 방바닥과 벽 곳곳에 빛나는 글씨와 그림이 보인다. 그는 \"저건… 피 아닌가? 내가 오기 전에 누굴 여기 가둬 둔 거지? 그 사람한텐 무슨 일이?\"라고 묻는다. 업로더 설명 자막에 따르면, 벽의 핏자국은 [[subject-16|실험체 16]]의 작품이다. 데스몬드가 이를 보게 된 것은 조상의 기억과 현실의 기억이 섞이는 [[bleeding-effect|혼입 효과]] 때문인 것으로 추측된다. 글씨 중에는 12212012라는 숫자도 있다.",
        links: ["desmond", "subject-16", "animus"],
        sources: [...at(AC1_MB7, [1247, 1250], [1290, 1313], 1660), ...at(AC1_MS, [4830, 4850])]
      },
      {
        id: "ev-ending-emails", year: 2012, game: "ac1", yearVerified: true,
        title: "엔딩 이후의 이메일",
        summary: "어쌔신 크리드 1편 엔딩 뒤 [[warren-vidic|비딕]]의 메일함에는 9월 8일 뉴스가 있다. 'L-11 발병' 이후 거의 6년이 지났지만 '두 번째 역병'으로 불리는 그 일로 아프리카 인구의 약 96%가 3개월 만에 줄어 대륙이 사실상 비었다는 기사다. 같은 날 [[lucy-stillman|루시]]가 보낸 '실험체 16번' 보고서도 있다. [[animus|애니머스]]에 오래 노출되어 [[subject-16|실험체 16]]의 유전 구조에 [[bleeding-effect|혼입 효과(Bleeding Effect)]]가 생겼고, 유전 기억과 실시간 기억이 섞여 자기 삶과 조상의 삶을 구별하지 못하게 되었다는 내용이다. 루시는 그의 조상 하나가 고대 극동의 중요한 사건에 관련되었던 것 같다며, 그가 남긴 벽의 글씨를 언어학자와 역사학자에게 조사시키고 있다고 쓴다. 그리고 실험체들을 더 조심히 다뤄야 하며 죽일 필요가 없다고 호소한다.",
        links: ["lucy-stillman", "warren-vidic", "subject-16", "bleeding-effect"],
        sources: [...at(AC1_MB7, 1625, 1674), ...at(AC1_MS, 4970, [5010, 5020])]
      },
      {
        id: "ev-ac2-escape-start", year: 2012, game: "ac2",
        title: "\"떠나야 해요\"",
        summary: "피를 묻힌 [[lucy-stillman|루시]]가 [[desmond|데스몬드]]를 깨운다. 10분 안에 자신이 한 일을 그들이 알아챌 것이고, 그때까지 나가지 못하면 끝이라며 질문은 나중에 답할 테니 일단 [[animus|애니머스]]에 들어가 달라고 한다.",
        links: ["lucy-stillman", "desmond", "animus"],
        sources: at(AC2_P1, [377, 411])
      },
      {
        id: "ev-ac2-escape", year: 2012, game: "ac2",
        title: "앱스테르고 탈출",
        summary: "[[lucy-stillman|루시]]와 [[desmond|데스몬드]]는 연구동을 빠져나간다. \"연구동에 침입자 발생\" 방송이 나오고 경비들이 쫓아온다. 루시는 감시 카메라에 예전 화면이 계속 나오게 해 두었고, 그 덕에 데스몬드가 매일 밤 기웃거린 것도 들키지 않았다고 말한다. 다른 방에는 [[animus|애니머스]]가 잔뜩 놓여 있다. 루시의 카드로 열리지 않는 문을 데스몬드가 어떻게 했는지도 모르게 연다. 데스몬드가 다른 애니머스를 보고 \"16호? [[ezio|에지오]]… 아디… 아디 뭐?\"라고 하자, 루시는 \"우리가 생각했던 게 모두 틀렸어요. [[warren-vidic|비딕]]과 [[templars|템플 기사단]]은 문제의 일부분일 뿐\"이라고 말한다. 둘은 차 트렁크에 숨어 빠져나간다.",
        links: ["lucy-stillman", "desmond", "abstergo", "animus", "subject-16", "ezio"],
        sources: at(AC2_P1, [540, 570], [574, 640], [659, 690], [704, 750], [802, 807])
      },
      {
        id: "ev-ac2-why-escape", year: 2012, game: "ac2",
        title: "탈출한 이유",
        summary: "[[lucy-stillman|루시]]는 탈출한 이유가 [[desmond|데스몬드]]의 도움이 필요해서라고 말한다. [[abstergo|앱스테르고]]는 잃은 유물을 다른 것으로 바꾸려 하고, 조상이 찾아낸 지도가 그걸 확실하게 해 줄 것이라고 한다. [[assassins|암살단]]은 이 전쟁에서 밀리고 있고, [[templars|템플 기사단]]은 상상 이상의 힘을 가졌으며 매일 동료들이 죽고 있다. 그래서 데스몬드를 훈련해 암살자로 만들겠다는 것이다. 몇 년이 걸릴 거라는 데스몬드에게 루시는 [[animus|애니머스]] 안에서 [[bleeding-effect|혼입 효과]]를 쓰면 조상 [[ezio|에지오]]가 수년간 익힌 것을 며칠 만에 배울 수 있다고 한다. 데스몬드는 \"템플 기사단 놈들이 날 엿 먹인 걸 생각하면 그냥 넘어갈 수가 없다\"며 받아들인다.",
        links: ["lucy-stillman", "desmond", "assassins", "templars", "bleeding-effect", "ezio", "abstergo"],
        sources: at(AC2_P1, [837, 940])
      },
      {
        id: "ev-ac2-hideout", year: 2012, game: "ac2",
        title: "션 헤이스팅스와 레베카 크레인",
        summary: "숨은 거처에서 [[shaun-hastings|션 헤이스팅스]]가 \"7년 만인가?\"라며 [[lucy-stillman|루시]]를 반긴다. 그는 [[desmond|데스몬드]]를 \"그 악명 높은 17호\"라 부르고 자신과 [[rebecca-crane|레베카 크레인]]을 소개한다. 루시는 [[abstergo|앱스테르고]] 탈출 기념 선물로 메모리 코어를 건네고, 레베카는 앱스테르고의 데이터로 일이 훨씬 빨라질 것이라며 코드를 합치겠다고 한다. 루시에 따르면 션은 정보 창고(전자 도서관)를 관리하며, 데스몬드가 [[animus|애니머스]]에서 사람, 장소, 사건을 만나면 데이터베이스를 만들어 둔다. 션은 다른 암살자들을 전술적으로 지원하는 일도 한다고 덧붙인다.",
        links: ["shaun-hastings", "rebecca-crane", "lucy-stillman", "desmond", "animus"],
        sources: at(AC2_P1, [953, 976], [983, 998], [1000, 1063])
      },
      {
        id: "ev-ac2-lucy-desmond", year: 2012, game: "ac2",
        title: "애니머스 2.0",
        summary: "[[desmond|데스몬드]]는 [[lucy-stillman|루시]]에게 [[abstergo|앱스테르고]]에 있었던 일을 고마워하고 사과한다. 그리고 방에서 보이던 심볼들, 키패드에 겹쳐 보이던 코드들이 [[altair|알타이어]] 때와 똑같다고 말한다. 루시는 [[bleeding-effect|혼입 효과]] 때문에 조상의 기억뿐 아니라 기술까지 흘러들어 오는 것이고, 그럴 때는 [[eagle-vision|매의 눈]]을 쓰라고 한다. 애니머스 안에서 [[ezio|에지오]]가 배운 것을 데스몬드도 익히게 될 것이며, \"당신은 이미 암살자예요\"라고 말한다. [[rebecca-crane|레베카]]는 자신이 돌보는 '공주님'이 [[animus|애니머스]] 2.0이라며, [[templars|템플 기사단]]이 돈은 훨씬 많아도 열정도 경쟁력도 없다고 자랑한다.",
        links: ["lucy-stillman", "desmond", "bleeding-effect", "eagle-vision", "rebecca-crane", "animus"],
        sources: at(AC2_P1, [1105, 1140], [1140, 1180], [1184, 1220])
      },
      {
        id: "ev-ac2-subject16-glyph", year: 2012, game: "ac2",
        title: "실험체 16의 메시지",
        summary: "[[shaun-hastings|션]]이 르네상스 이탈리아 곳곳에서 찾은 이상한 [[glyphs|문양]]을 조사해 달라고 부탁한다. [[ezio|에지오]]가 문양을 살피자 컴퓨터 코드가 나오고, [[animus|애니머스]]에서만 열리는 암호 파일이 열린다. 영상 속 [[subject-16|실험체 16]]은 \"우리는 지금까지 속아 왔다\"며 증거를 20개 조각으로 나눠 암호화해 숨겨 두었다고 말한다. [[rebecca-crane|레베카]]는 [[abstergo|앱스테르고]]에서 가져온 메모리 코어에 실험체 16의 데이터가 들어 있었고, 그가 [[warren-vidic|비딕]]이 자리를 비운 사이 시스템을 해킹한 것이라고 본다. 앱스테르고 벽의 피로 쓴 징표가 바로 애니머스 안을 확인하라는 신호였다는 것이다. 첫 파일은 명화 다섯 점의 공통점을 찾는 퍼즐로, 비너스의 탄생과 파리의 심판 등이 나온다.",
        links: ["subject-16", "glyphs", "shaun-hastings", "rebecca-crane", "animus", "abstergo"],
        sources: at(AC2_P4, [8, 26], [412, 470], [503, 532], [540, 605])
      },
      {
        id: "ev-ac2-glyph2", year: 2012, game: "ac2",
        title: "두 번째 문양",
        summary: "[[ezio|에지오]]가 두 번째 [[glyphs|문양]]을 찾자 '과거란 거미줄처럼 짜여진 연결고리들과 서로 연작점으로 이루어져 있다, 모든 것은 우연의 지배를 받고 있다'는 문구가 나온다. 퍼즐은 원형 이미지를 돌려 맞추는 방식으로, 맞추면 연도와 이름 일부가 드러난다. 업로더 챕터 제목에 따르면 이 문양은 '산타 크로체'에서 발견되었다.",
        links: ["glyphs", "subject-16"],
        sources: at(AC2_P5, [719, 830])
      },
      {
        id: "ev-ac2-glyph3", year: 2012, game: "ac2",
        title: "세 번째 문양",
        summary: "세 번째 [[glyphs|문양]]의 첫 화면에는 '권력은 절대 사라지지 않아. 전해질 뿐이지'라는 문구가 나온다. 퍼즐은 역사 사진 속에서 무언가를 찾는 방식으로, '루즈벨트 대통령이 항상 몸에 지니던 것. 남긴 물건에 주목'이라는 안내와 함께 1944년 프랭클린 델러노 루즈벨트의 전략상 회의, 1930년 소금 행진하는 간디 사진이 나온다. 풀면 '진실' 영상 조각이 열린다. 업로더 챕터 제목에 따르면 이 문양은 '[[villa-auditore|빌라 아디토레]]'에서 발견되었다.",
        links: ["glyphs", "subject-16", "villa-auditore"],
        sources: at(AC2_P6, [445, 530])
      },
      {
        id: "ev-ac2-glyph4", year: 2012, game: "ac2",
        title: "네 번째 문양",
        summary: "네 번째 [[glyphs|문양]]은 역사 사진들 위에 문장이 하나씩 이어지는 퍼즐이다. '그의 벌어진 입은 죽음의 키스를 전한다', '그것의 목구멍에서 나오는 불길이 그들의 눈을 찔러서 뽑혀지게 하였다', '젊은이들을 죽음에 이르게 하였다' 같은 문장과 함께 1968년 베트남, 1962년 사우스캐롤라이나 뷰포트 연합군 편대, 1944년 2D 보병사단 병사들의 사진이 나온다. 사진에서 숫자 암호를 찾아 ID를 입력하는 방식이다. 업로더 챕터 제목과 데이터베이스 화면에 따르면 이 문양은 [[florence|피렌체]]의 '메르카토 베키오'에서 발견되었다. [[subject-16|실험체 16]]의 목소리는 [[abstergo|앱스테르고]] 중앙 시스템에 들어가는 게 점점 쉬워진다며, 이미 그 시대를 살아 본 것처럼 원하는 자료를 알 수 있다고 말한다.",
        links: ["glyphs", "subject-16", "abstergo"],
        sources: at(AC2_P7, [844, 961])
      },
      {
        id: "ev-ac2-tomb-database", year: 2012, game: "ac2",
        title: "암살단의 무덤을 찾다",
        summary: "지하 납골당의 석상을 보고 [[shaun-hastings|션]]은 아디토레 빌라에 있던 것과 똑같다며, [[ezio|에지오]]의 삼촌이 말했던 [[assassin-tombs|암살단의 무덤]] 중 하나를 찾은 것 같다고 한다. 들어가는 방법을 찾아냈으니 데이터베이스에 표시해 두겠다고 한다.",
        links: ["shaun-hastings", "assassin-tombs", "villa-auditore"],
        sources: at(AC2_P7, [2253, 2270])
      },
      {
        id: "ev-ac2-glyph5", year: 2012, game: "ac2",
        title: "다섯 번째 문양",
        summary: "다섯 번째 [[glyphs|문양]]의 첫 화면에는 \"알겠지? 무슨 일인지 이제 알겠지? 아직 아닐 거야. 하지만 곧 보게 될 걸\"이라는 문구가 나온다. 퍼즐은 명화 속에서 같은 물건을 지닌 인물을 고르는 방식으로, '그들이 받은 힘으로 적들을 잘라 버렸다', '그들의 손 안에서 현명한 자들은 위대한 힘에 의지한다'는 문장이 이어진다. 프랑스의 잔 다르크, 중국의 순치 황제 같은 인물이 나오고, 맞히면 'ID: [[temple-treasure|에덴의 조각]] 34 - 지팡이'가 뜬다. 업로더 챕터 제목에 따르면 이 문양은 '산 [[lorenzo-medici|로렌조]]'에서 발견되었다.",
        links: ["glyphs", "subject-16", "temple-treasure"],
        sources: at(AC2_P8, [901, 1091])
      },
      {
        id: "ev-ac2-glyph6", year: 2012, game: "ac2",
        title: "여섯 번째 문양",
        summary: "여섯 번째 [[glyphs|문양]]의 제목은 '형제'다. 처음에 \"그들은 대부분 영웅들이었어\"라며 역사의 거미줄이 선한 것들을 덮어 버렸고, 악의 세력이 자신의 것이 아닌 것들을 차지하게 될 거라는 목소리가 나온다. 퍼즐은 카인 그림의 조각을 맞추는 방식으로, '사탄이 카인에게: 네 목을 걸고 맹세하라. 말을 했다간 죽게 될 것이다', '모든 것들이 아무도 모르게 이루어질 것이다', '카인이 대답하기를, 나는 마한이니 이 거대한 비밀을 모두 알고 있는 자라', '이에 카인은 마한의 주인으로 불리게 되었으며 그의 악명이 온 땅에 퍼졌더라'는 문장이 차례로 드러난다. 이어 네 그림에서 \"볼지어다. 카인의 표적을!\"이라는 말과 함께 암호를 찾고, 52931을 입력하면 파일이 해제되어 '진실' 영상 조각이 하나 추가된다. 업로더 챕터 제목에 따르면 이 문양은 '몬테 올리베토 마지오레'에서 발견되었다.",
        links: ["glyphs", "subject-16"],
        sources: at(AC2_P10, [548, 560], [600, 935])
      },
      {
        id: "ev-ac2-glyph7", year: 2012, game: "ac2",
        title: "일곱 번째 문양",
        summary: "일곱 번째 [[glyphs|문양]]은 명화들 가운데 알맞은 그림을 골라 순서대로 놓는 퍼즐이다. 화면 위에는 '뱀이 지키고 있던 나무에서 가장 처음 뽑힌 후, 그 힘은 기적을 행한다. 그 후 여러 세대에 걸쳐 소모되고 여러 조각으로 갈라져 홍해 밑에 숨겨져 시간의 흐름을 재구성한다'는 문장이 나온다. 그림에는 'B.C. 1700년경, 이집트, 요셉', '선사시대, 그리스, 야손', 'B.C. 30년경, [[jerusalem|예루살렘]], 예수 그리스도' 같은 설명이 붙어 있다. 퍼즐 팁에는 입고 있는 의복과 관련된 것 같다며, 예수가 두 번이나 나오니 예수와 관련된 걸 거라는 말이 나온다. 마지막 십자가 그림에서 'ID: [[temple-treasure|에덴의 조각]] 66 - 수의'가 나온다. 업로더 챕터 제목에 따르면 이 문양은 '산타 마리아 아순타'에서 발견되었다.",
        links: ["glyphs", "subject-16", "temple-treasure"],
        sources: at(AC2_P11, [30, 275])
      },
      {
        id: "ev-ac2-glyph8", year: 2012, game: "ac2",
        title: "여덟 번째 문양",
        summary: "여덟 번째 [[glyphs|문양]]은 '러시아, 짜르 니콜라스 2세'와 '프랑스, 잔 다르크' 그림에서 숨은 것을 찾는 퍼즐이다. 잔 다르크 그림에서 '[[temple-treasure|에덴의 조각]] 25'가 나온다. 이어 유럽 지도 위에 '그들이 잔 다르크를 산 채로 태워 죽였다', '라스푸틴이 [[tunguska|퉁구스카]]에 그것을 가져갔다'는 문장이 뜨고, \"지팡이가 없는 황제는 아무 힘도 없었어. 결국 지배력을 상실하고 말았지! 혁명이 시작된 거야!\"라는 말이 나온다. 풀고 나면 '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 이 문양은 '토리 데 살부치'에서 발견되었다.",
        links: ["tunguska", "glyphs", "subject-16", "temple-treasure"],
        sources: at(AC2_P11, [820, 953])
      },
      {
        id: "ev-ac2-glyph9", year: 2012, game: "ac2",
        title: "아홉 번째 문양",
        summary: "아홉 번째 [[glyphs|문양]]의 제목은 '모자 속임수'다. 처음에 \"세 명의 도둑. 발각되지 않음. 사람들은 자신들의 눈에 익숙한 것만 보려고 하지\"라는 목소리가 나온다. '그들이 이 일을 사고처럼 보이도록 꾸몄다'는 문장과 함께 '1915년, 베스와 후디니', 'RIP: 1926년 10월 31일. 후디니의 무덤' 사진이, '그는 그들을 때릴 뻔 하였다'는 문장과 함께 '1946년, 간디' 사진이 나오고, 이어 'RIP: 1948년 1월 30일. 간디의 장례행렬' 사진이 나온다. 이어 \"늑대들이 사냥을 떠나기 시작했어. 어디지? 책은 어디로 갔을까?\"라는 말과 함께 비밀번호를 맞추면 'Dallas TX' 문서가 열린다. '작전: J.F. 케네디 대통령의 뉴프런티어'라는 제목 아래, 선거캠프가 자원을 내보내는 데 동의했고 F는 모두에게 투표권을 행사할 것이며, PE2로 연구실에서 훈련시킨 운전기사를 보내고, 오스왈드나 Z가 표적을 처리한 뒤 PE1으로 주의를 분산시키면 운전기사가 PE3를 확보할 것이라고 적혀 있다. 암호 18916을 입력하면 '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 이 문양은 '오스페달레 델리 이노센티'에서 발견되었다.",
        links: ["glyphs", "subject-16", "temple-treasure"],
        sources: at(AC2_P12, [584, 790])
      },
      {
        id: "ev-ac2-glyph10", year: 2012, game: "ac2",
        title: "열 번째 문양",
        summary: "열 번째 [[glyphs|문양]]의 제목은 '아폴로'다. 달 사진에서 '독수리를 찾아라'라는 과제가 나오고, 원판을 돌려 맞추는 퍼즐에는 J.F. 케네디의 말로 '위험한 무기로 무장한 자유정책에 반대하는 세력들은 이러한 무기를 활용하여 자신의 영토를 확고히 하며 영향력을 행사하여 궁극적으로 파괴를 목표로 하게 될 것입니다'라는 문장이 붙어 있다. 이어 '아폴로 11호의 사진이 대중에 공개됨'이라는 설명과 함께 달 위의 우주인 사진이 나온다. 마지막에 \"책이 깊이 파고 들어갔을 땐 간단한 일이었지\"라는 말이 나온다. 업로더 챕터 제목에 따르면 이 문양은 '아바찌아 디 산 메르큐리알레'에서 발견되었다.",
        links: ["glyphs", "subject-16"],
        sources: at(AC2_P13, [140, 355])
      },
      {
        id: "ev-ac2-glyph11", year: 2012, game: "ac2",
        title: "열한 번째 문양",
        summary: "열한 번째 [[glyphs|문양]]은 \"고리를 끊고 싶어했어. 비밀을 말해버리고 말이야\"라는 말로 시작한다. 'FROM NIKOLA TESLA'라는 편지에는 전선을 사용하지 않고 전기를 경제적으로 전달하는 기술은 무엇보다 인간에게 중요하며, 대기와 바다와 사막을 완전히 지배하게 되고, 그 기술은 지구에 평화와 통합을 가져다 줄 것이라고 적혀 있다. '1902년 경, [[nikola-tesla|니콜라 테슬라]]의 워든클리프 타워 건설 현장', '1900년경, 니콜라 테슬라' 사진이 나오고, \"크로아티아에서 결국 찾아냈지\"라는 말이 이어진다. 사진에서 '[[temple-treasure|에덴의 조각]] 4'를 찾으면 \"그들은 그의 연구실에서 찾게 될 거야\"라는 말과 함께 암호 61902가 나오고, '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 이 문양은 '아밤포스토 베네치아노'에서 발견되었다.",
        links: ["nikola-tesla", "glyphs", "subject-16", "temple-treasure"],
        sources: at(AC2_P13, [910, 1352])
      },
      {
        id: "ev-ac2-side-effects", year: 2012, game: "ac2",
        title: "애니머스의 부작용",
        summary: "[[animus|애니머스]]에서 나온 [[desmond|데스몬드]]에게 [[lucy-stillman|루시]]는 엄청난 진도를 보이고 있다면서도, 애니머스 안에 너무 오래 있으면 부작용이 생길 수 있다고 알려 준다. 인지능력의 퇴화, 일시적인 환영, 다중 인식 문제가 생기고 실제와 가상을 구분하지 못하게 될 수 있지만, 제어만 잘하면 그리 나쁘지 않을 거라고 한다. 다만 지금까지 제대로 제어한 사람은 없었고, [[subject-16|16호]]는 심할 땐 며칠씩 애니머스 안에 방치되었다. 루시는 데스몬드는 보호장치가 되어 있다며 [[ezio|에지오]]의 능력을 얼마나 배웠는지 시험해 보자고 한다.",
        links: ["lucy-stillman", "desmond", "animus", "subject-16", "bleeding-effect"],
        sources: at(AC2_P14, [51, 112])
      },
      {
        id: "ev-ac2-skill-test", year: 2012, game: "ac2",
        title: "창고의 보안 시스템",
        summary: "[[desmond|데스몬드]]가 [[shaun-hastings|션]]에게 16호가 찾아낸 게 뭐길래 이렇게 보안까지 신경 쓰느냐고 묻자, 션은 알아보고 싶지만 여길 지키는 게 자기 역할이라고 한다. 아래층에서 [[lucy-stillman|루시]]는 [[abstergo|앱스테르고]]가 자금과 장비가 더 좋아 이곳을 찾는 건 시간 문제라며, 창고의 보안 시스템을 작동시키라고 한다. 데스몬드는 힌트를 달라고 하지만 직접 센서까지 올라가야 한다. 그는 철골과 선반을 타고 오르며 센서를 켜 나간다. 도중에 데스몬드가 이상한 것들이 보인다고 하자, 루시는 30초 이상 환영이 보이는 게 아니면 걱정할 필요 없다고 한다.",
        links: ["desmond", "lucy-stillman", "shaun-hastings", "abstergo"],
        sources: at(AC2_P14, [122, 140], [225, 320])
      },
      {
        id: "ev-ac2-why-ezio", year: 2012, game: "ac2",
        title: "왜 에지오인가",
        summary: "[[lucy-stillman|루시]]는 [[desmond|데스몬드]]가 [[ezio|에지오]]의 기술을 남김없이 습득했다며 하루나 이틀이면 마무리할 수 있다고 한다. 데스몬드가 왜 [[altair|알타이어]]로 돌아가지 않고 에지오와 이탈리아를 택했냐고 묻자, 루시는 [[subject-16|16호]]부터 시작된 일이라고 답한다. [[warren-vidic|비딕 박사]]가 따로 표시해 둔 16호의 [[animus|애니머스]] 기록에는 고대 아프리카에서 중동을 거쳐 이탈리아까지 여러 조상의 자료가 있었고, 마지막에는 이탈리아에 이상하리만치 집착했다. 비딕도 [[vault|지하금고]]에 대해 알고 있던 것 같다고 한다. 이후 기록 몇 개는 사라졌고 남은 것도 뒤죽박죽이다. 루시는 [[templars|템플 기사단]]이, 아니 자신이 16호를 그렇게 무리시키지 않았다면 이미 답을 찾았고 16호도 살아 있었을 거라고 자책한다. 데스몬드는 16호에게 벌어진 일은 그녀의 잘못이 아니라고 위로한다.",
        links: ["lucy-stillman", "desmond", "subject-16", "warren-vidic", "altair"],
        sources: at(AC2_P14, [320, 430])
      },
      {
        id: "ev-ac2-acre-dream", year: 2012, game: "ac2",
        title: "아크레의 꿈",
        summary: "잠든 [[desmond|데스몬드]]는 [[acre|아크레]] 거리에 선 [[altair|알타이어]]가 되어, [[animus|애니머스]] 안도 아닌데 이게 뭐냐며 놀란다. 이상한 꿈을 꾸는 것 같다면서도 거리를 지나 높은 탑을 오르고, 꼭대기에서 [[maria|마리아]]를 만난다. 데스몬드는 아크레에서 봤던 그 여자라며 무엇을 얻으려는 건지 의아해한다. 알타이어와 마리아는 함께 아래 건초 더미로 떨어지고, 데스몬드는 솔직히 생각도 못한 일이라고 한다. 이어 탑 위에서 그는 왜 알타이어를 쫓지 않고 마리아에게 머물러 있느냐며 또 이상한 꿈이냐고 중얼거린다.",
        links: ["desmond", "altair", "maria", "acre", "bleeding-effect"],
        sources: at(AC2_P14, [495, 730])
      },
      {
        id: "ev-ac2-lost-teams", year: 2012, game: "ac2",
        title: "잃어버린 팀들",
        summary: "[[rebecca-crane|레베카]]가 [[desmond|데스몬드]]를 깨우러 오고, 데스몬드는 잠자리가 뒤숭숭했다고 사과한다. [[shaun-hastings|션]]이 비꼬자 레베카가 그만하라고 한다. [[lucy-stillman|루시]]는 지난밤 두 팀을 잃어 벌써 여덟 명이 사라졌다며 상황이 점점 나빠진다고 털어놓는다. 데스몬드는 그녀가 했던 믿음을 가지라는 말을 떠올리게 하며, 놈들이 찾아오면 그때 방법을 찾으면 된다고 다독인다.",
        links: ["lucy-stillman", "desmond", "rebecca-crane", "shaun-hastings", "assassins"],
        sources: at(AC2_P14, [763, 865])
      },
      {
        id: "ev-ac2-glyph12", year: 2012, game: "ac2",
        title: "열두 번째 문양",
        summary: "열두 번째 [[glyphs|문양]]의 제목은 '업계의 거물들'이다. \"그가 원했던 것은 우리 모두가 비밀을 알아내는 거였어. 우리를 모두 구원하기 위해서. 그들은 그걸 이용해서 그를…\"이라는 목소리로 시작한다. 비밀번호를 맞추면 'From the Laboratory of Thomas A. Edison'이라는 편지가 열린다. 에디슨은 모건에게 [[nikola-tesla|니콜라 테슬라]]가 PE4로 전 세계를 아우르는 정보망을 무상으로 구축하려 한다며, 그의 실험에 대한 기금 투자를 중단해 달라고 한다. 이미 미디어로 테슬라를 공격하기 시작했다고도 적는다. 이어 에디슨이 교류 전기의 위험성을 알리려 서커스 코끼리를 대중 앞에서 감전사시켰다는 설명과 영상이 나온다. 두 번째 비밀번호로 열리는 헨리 포드의 편지에는, 에디슨이 PE4를 사용하게 해 준 덕분에 임금을 삭감하고도 직원들이 5달러 인상을 받았다고 믿게 만들었으며, 지시대로 PE4를 유럽으로 보냈다고 적혀 있다. 그가 PE4로 점령을 시작하면 전쟁이 시작되고, 전쟁의 혼란 속에서 새로운 질서가 정립될 거라고 한다. 풀고 나면 '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 이 문양은 '질다 데 라드리 디 [[venice|베네치아]]'에서 발견되었다.",
        links: ["nikola-tesla", "glyphs", "subject-16", "temple-treasure"],
        sources: [...at(AC2_P15, [1329, 1620]), ...at(AC2_MS, [2525, 2535])]
      },
      {
        id: "ev-ac2-glyph13", year: 2012, game: "ac2",
        title: "열세 번째 문양",
        summary: "열세 번째 [[glyphs|문양]]의 제목은 '\"나는 종말, 세계의 파괴자가 되었다\"'이다. '트리니티(문서)'라는 파일은 처음에 접속 거부되고, 사진들 속에서 비밀번호를 찾아야 열린다. 열린 문서는 [[abstergo|앱스테르고]] 코퍼레이션의 '실험 허가'로, 모든 실험은 때가 되면 공개적으로 결과를 테스트해야 하고, 새로운 세계질서를 확립하려면 성공이 필수라고 적혀 있다. 세계의 안전과 번영을 위해 군중을 이끌 강하고 양심에 흔들리지 않을 세력이 필요하니 O에게 그 자격을 부여하라고 한다. 이어 빨간 버튼과 폭발 장면이 나오고, 종이에서 숨은 숫자를 찾아 '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 이 문양은 '리알토 다리'에서 발견되었다.",
        links: ["glyphs", "subject-16", "abstergo"],
        sources: at(AC2_P17, [1015, 1250])
      },
      {
        id: "ev-ac2-glyph14", year: 2012, game: "ac2",
        title: "열네 번째 문양",
        summary: "열네 번째 [[glyphs|문양]]은 [[subject-16|실험체 16]]으로 보이는 목소리로 시작한다. 그는 기계 속에 갇혀 지내며 계속 들어가라고 시킨다고, 어떻게 할 수가 없고 다 같이 불타 버리고 있다고, 게티스버그 근처에서 장총을 들고 사람을 찔렀다고, 오페라 공연장과 포럼, 숲 속 사냥, 달이 보인다고 기억을 뒤섞어 말한다. 그리고 우리에게 이런 능력이 주어진 건 다 타고난 핏줄 때문이라고 한다. 제목은 '혈통'이고, '두 세계가 만남으로써 씨가 뿌려졌다. 암살자여, 두 세계의 자녀들을 지켜보라!'는 문장과 함께 '주피터와 만난 다나에', '에우로페의 납치', '주피터와 이오' 같은 신과 인간이 만나는 그림을 골라내는 퍼즐이 나온다. 그는 어쩌면 신과 사람이 사랑에 빠지는 신화가 사실일지도 모른다고 한다. 업로더 챕터 제목에 따르면 이 문양은 '캄파닐레 디 산 마르코'에서 발견되었다.",
        links: ["glyphs", "subject-16"],
        sources: [...at(AC2_P17, [1500, 1835]), ...at(AC2_MS, [2610, 2680])]
      },
      {
        id: "ev-ac2-glyph15", year: 2012, game: "ac2",
        title: "열다섯 번째 문양",
        summary: "열다섯 번째 [[glyphs|문양]]의 제목은 '경비병'이다. 둥근 그림의 고리들을 돌려 맞추면, 흩어져 있던 글자가 '모든 폭군들의 죽음으로 사람들이 자유를 …'로 시작하는 문장으로 이어진다. 완성된 그림에는 [[assassins|암살단]] 문장이 표시된다. 이어 세계 지도 위에 잉글랜드의 매리 1세, 토마스 데 토르케마다, 존 윌크스 부스, 장클로드 뒤발리에, 프란시스코 피사로, 클레오파트라, 라스푸틴, 스탈린 같은 인물들이 표시된다. 암호를 찾으면 '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 이 문양은 '산 지아코모 디 리알토'에서 발견되었다.",
        links: ["glyphs", "subject-16", "assassins"],
        sources: at(AC2_P18, [1186, 1387])
      },
      {
        id: "ev-ac2-glyph16", year: 2012, game: "ac2",
        title: "열여섯 번째 문양",
        summary: "열여섯 번째 [[glyphs|문양]]의 제목은 '십자가'다. 처음에 \"1908년에 일어난 일이야. 아니다, 2008년이었나? 1708년인가? 아, 기억이 나질 않아!\"라는 목소리가 나온다. 파일이 해제되면 '니콜라'에게 보낸 편지가 나온다. 편지에는 그들이 당신의 연구실과 업적에 무슨 짓을 했는지 알고 있다며, 그들은 황제에게서 어떤 물건을 탈취해 [[tunguska|퉁구스카]]에서 그 사용법을 알아내려는 실험을 하고 있고, 그 전에 되찾지 않으면 전 세계가 위험해진다고 적혀 있다. 때가 되면 당신이 발명한 전기로 그 물건을 없애 달라고 부탁한다. 이어 지명이 뒤섞인 세계 지도에서 퉁구스카를 찾고 폭발 영상이 나오며, 암호 81126을 입력하면 '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 이 문양은 '산 피에트로 디 카스텔로'에서 발견되었다.",
        links: ["nikola-tesla", "tunguska", "glyphs", "subject-16", "temple-treasure"],
        sources: at(AC2_P22, [422, 528])
      },
      {
        id: "ev-ac2-to-vatican", year: 2012, game: "ac2",
        title: "바티칸으로",
        summary: "[[animus|애니머스]]에서 깨어난 [[desmond|데스몬드]]에게 [[lucy-stillman|루시]]가 괜찮냐며 중지할지 묻지만, 데스몬드는 다시 돌아가야 한다며 지금 당장 들어가겠다고 한다. 애니머스 안에서 데스몬드가 이건 정말 좀 아니라고 하자, [[shaun-hastings|션]]은 우리도 좀 알면 안 되겠냐고 묻는다. 이어 [[rodrigo-borgia|로드리고 보르지아]]가 1492년에 교황으로 선출되어, [[ezio|에지오]]의 가장 큰 적수가 이탈리아에서 가장 강력한 인물이 되었다는 말이 나온다. 바티칸에 꼭 한번 가 보고 싶었다는 말에, 지금 바로 바티칸으로 가야 한다며 타이밍이 정말 좋다는 대답이 돌아온다.",
        links: ["desmond", "lucy-stillman", "shaun-hastings", "rodrigo-borgia", "animus"],
        sources: at(AC2_P24, [3, 60])
      },
      {
        id: "ev-ac2-glyph17", year: 2012, game: "ac2",
        title: "열일곱 번째 문양",
        summary: "열일곱 번째 [[glyphs|문양]]의 제목은 '벙커'다. \"그들이 전쟁을 꾸몄어. 평화도 계획했지. 하지만 대가를 치르게 될 거야. 우리의 증표를 찾아라\"라는 목소리가 나온다. 비밀번호를 맞추면 [[abstergo|앱스테르고]] 코퍼레이션 문서가 열린다. 1945년 5월 2일, 전쟁은 끝났고 계획대로 권력을 손에 넣었지만, 베를린의 요원들에 따르면 H는 벙커 안의 대역을 죽이고 [[temple-treasure|에덴의 조각]]을 가지고 C와 접선 장소에서 만나기로 했는데 사흘이 지나도 나타나지 않았다는 내용이다. 이어 '우리는 위쪽에서 출구를 감시하고 있었다. 그는 우리가 오는 것을 보지 못했다'는 문장과 함께 벙커 출구 사진에서 암호문을 찾아 해독하면 'THE DOUBLE WAS KILLED IN THE BUNKER(대역은 벙커 안에서 살해당했다)'가 나온다. 업로더 챕터 제목에 따르면 이 문양은 '토레 델오롤로지오'에서 발견되었다.",
        links: ["glyphs", "subject-16", "abstergo", "temple-treasure"],
        sources: at(AC2_P30, [1266, 1761])
      },
      {
        id: "ev-ac2-glyph18", year: 2012, game: "ac2",
        title: "열여덟 번째 문양",
        summary: "열여덟 번째 [[glyphs|문양]]의 제목은 '신경 세포의 연접부'다. \"점점 힘들어져. 시대를 넘나드는 고통이 나를 눌러와. 내가 칼을 드는걸 그녀가 보고 있어. 이젠 좀 더 길어진 것 같군\"이라는 목소리로 시작하고, \"태초. 창세. 그때\"라는 말이 이어진다. 뇌 그림과 수메르 숫자로 된 비밀번호를 풀면 'BIOLOGICAL FRONTIER' 기사가 열린다. '2012년 1월, 사건 1'이라는 기사로, 우 박사와 P.J. 트라우네로 박사가 살아 있는 뉴런 안을 관찰해 새로운 신경 전달 물질을 발견했는데, 쓰임새가 없어 보이는 소망이 신경 전달 물질로 가득 차 있었고, 다른 종의 조상들에게서는 찾지 못해 이 물질이 인간의 몸 속에서 진화한 것이라고 한다. 목소리는 그들이 원한 건 조각들이었다며, 마치 우리의 정신이 복종하기 위해 만들어진 것 같았다고 말한다. 업로더 챕터 제목에 따르면 이 문양은 '스쿠올라 그란데 디 산마르코'에서 발견되었다.",
        links: ["glyphs", "subject-16", "temple-treasure"],
        sources: [...at(AC2_P30, [1761, 2221]), ...at(AC2_MS, [2893, 2912])]
      },
      {
        id: "ev-ac2-glyph19", year: 2012, game: "ac2",
        title: "열아홉 번째 문양",
        summary: "열아홉 번째 [[glyphs|문양]]의 제목은 '네 번째 날'이다. \"끝. 종말. 마지막 날이 다가왔어. 이미 있었던 일이야. 하나였던 조각들이 맞춰져 가고 있어\"라는 목소리가 나온다. '한때는 칭송 받았지만 지금은 무시되고 있다. 멀리서 지켜보고 있다'는 문장과 함께 '1500년 경. 마르스, 비너스, 그리고 아모르', '기원전 1310년 경. 죽음의 책' 같은 그림들 가운데 태양을 담은 것을 고른다. 이어 태양 사진에서 숨은 곳을 찾아 암호 69185를 얻는다. 업로더 챕터 제목에 따르면 이 문양은 '안티코 티아트로 로마노'에서 발견되었다.",
        links: ["glyphs", "subject-16"],
        sources: at(AC2_P31, [367, 520])
      },
      {
        id: "ev-ac2-glyph20", year: 2012, game: "ac2",
        title: "스무 번째 문양",
        summary: "스무 번째 [[glyphs|문양]]의 제목은 '종의 기원'이다. 목소리는 오직 소수만이 진실을 알고 있다며, 진실은 현상 속에도, 그림 속에도, 사람들의 얼굴과 문서에도 널려 있지만 우리는 우리가 만들어 낸 것조차 알아보지 못한다고 말한다. 둥근 그림을 맞추면 '그것은 숨겨졌고 변질되었다'는 문장이 완성되고, '눈을 뜨시오'라는 말과 함께 그림 속 물건을 찾는다. 지금까지 문양에서 얻은 숫자들과 '아무 것도 진실이 아니며, 모든 것이 허용된다'는 문구가 놓인 비밀번호 화면을 풀면 [[abstergo|앱스테르고]] 코퍼레이션 문서가 열린다. 1997년 1월 3일자 편지로, 원시인과 현대 인류 사이에 빠진 연결고리가 더 이상 안전하지 않으니 그들이 진실을 알게 해서는 안 되며, 이디오피아의 팀 화이트 원정지 근처에 인공 뼈를 묻어 진화 단계의 연결고리를 제공하겠다는 내용이다. 이어 해골 그림에서 [[temple-treasure|에덴의 조각]]처럼 보이는 구를 찾는다. 목소리는 끊임없이 이어지는 시간의 공전 속에서 자유로워질 수 있을지 모르겠다며, 목을 자르는 단두대와 가슴을 꿰뚫는 총알, 폐 속을 채우는 물, 흐르는 선홍색 피가 느껴진다고 한다. 이제 나가야 한다며, 달과 별이 보이고 정신은 이미 떠나갔다고 하고, \"[[lucy-stillman|루시]], 이제 더 기다리는 것은 의미가 없어. 난 떠날 준비가 됐어. 내가 칼을 드는걸 그녀가 보고 있거든\"이라고 말한다. 업로더 챕터 제목에 따르면 이 문양은 '토레 델 디아블로'에서 발견되었다.",
        links: ["glyphs", "subject-16", "lucy-stillman", "abstergo", "temple-treasure"],
        sources: [...at(AC2_P31, [635, 890]), ...at(AC2_MS, [3081, 3105], [3122, 3175])]
      },
      {
        id: "ev-ac2-truth", year: 2012, game: "ac2",
        title: "진실",
        summary: "스무 개의 [[glyphs|문양]]을 모두 풀자 '진실' 영상이 열린다. 화면에는 '[[subject-16|실험체 16]] · 세션 12: [날짜 확인] 기원전'이라고 뜬다. 영상 속에서 벌거벗은 한 남자와 한 여자가 빛나는 문양이 새겨진 몸으로 거대한 건물 안을 달아나, 빛나는 공 모양의 물건을 들고 밖으로 빠져나간다. 건물 밖에는 하얀 미래 도시 같은 건물들과 설산이 펼쳐진다. 영상을 본 [[lucy-stillman|루시]]는 [[desmond|데스몬드]]의 세션이 끝나는 대로 영상을 보내 분석을 맡기겠다며, 실험체 16에게 물어볼 수만 있다면 모든 걸 설명해 줄 텐데라고 아쉬워한다. 영상 속 두 사람이 누구인지는 어쌔신 크리드 II 영상에서 밝혀지지 않았다.",
        links: ["glyphs", "subject-16", "temple-treasure", "desmond", "lucy-stillman", "rebecca-crane", "shaun-hastings"],
        sources: at(AC2_P31, [890, 956])
      },
      {
        id: "ev-ac2-hideout-raid", year: 2012, game: "ac2",
        title: "은신처 습격",
        summary: "[[animus|애니머스]]에서 나온 [[desmond|데스몬드]]에게 [[lucy-stillman|루시]]는 10분밖에 없다며, [[templars|템플 기사단]]이 곧 들이닥친다고 알린다. 루시는 [[shaun-hastings|션]]과 [[rebecca-crane|레베카]]에게 장비를 챙겨 화물차로 옮기게 하고, 데스몬드에게는 함께 기사단을 막자고 한다. 곧 [[warren-vidic|워렌 비딕]]이 경비병들을 이끌고 나타나, 이렇게 쉽게 끝날 줄 몰랐다며 데스몬드를 집으로 데려가겠다고 한다. 루시가 거절하자 비딕은 한 번 살려 줬는데 이렇게 은혜를 갚느냐고 하고, 루시는 자신을 살려 준 건 사람들의 인생을 망치며 실험을 계속하기 위해서였다고 맞선다. 비딕은 함께 실험을 하던 건 루시였고, 자신만큼 많은 피를 흘리게 한 것이 그녀의 두 손이라고 쏘아붙인다. 비딕은 두 사람을 산 채로 데려가라고 명령하지만, 데스몬드는 [[ezio|에지오]]에게서 익힌 기술로 경비병들을 모두 쓰러뜨린다. 비딕은 자네가 이겼지만 곧 자네도 끝날 거라고 말하고, 데스몬드와 루시는 화물차에 올라 빠져나간다. 루시는 워렌이 나중에 죗값을 치르게 될 거라고 말한다.",
        links: ["lucy-stillman", "desmond", "warren-vidic", "shaun-hastings", "rebecca-crane", "templars", "abstergo", "bleeding-effect"],
        sources: at(AC2_P33, [0, 250])
      },
      {
        id: "ev-ac2-second-disaster", year: 2012, game: "ac2",
        title: "두 번째 재앙의 예고",
        summary: "화물차 안에서 [[lucy-stillman|루시]]는 북쪽의 별장에서 얼마 동안 안전하게 지내며 [[animus|애니머스]] 세션에서 얻은 자료부터 분석하겠다고 한다. [[rebecca-crane|레베카]]는 가는 길에도 애니머스를 쓸 수 있게 준비해 두었다고 한다. [[desmond|데스몬드]]가 [[vault|지하금고]] 속에 대체 뭐가 있느냐고 묻자, 루시는 데스몬드가 본 것이 자신이 염려하던 모든 것을 증명해 주었다며, 장기적으로 보면 [[templars|템플 기사단]]이 가장 무서운 상대가 아니라고 한다. 최근 지구의 자기장이 약해졌다는 연구가 있었고, 충분한 힘만 뒷받침된다면 지구 전체가 심하게 불안해질 수 있다는 것이다. 최초 문명을 이룬 이들에게 분명 그만큼 강력한 일이 벌어졌고, [[minerva|미네르바]]가 두 번째 재앙이 내려올 것을 암시한 듯하다는 이야기가 오간다. 루시는 영상을 다시 확인해 보겠다며 데스몬드에게 계속 기억을 되살려 아직 찾지 못한 것을 찾아야 한다고 하고, 데스몬드는 \"그럼 시작해볼까\"라며 다시 애니머스에 들어간다.",
        links: ["lucy-stillman", "desmond", "rebecca-crane", "vault", "minerva", "animus", "templars"],
        sources: at(AC2_P33, [250, 335])
      }
    ],

    articles: [
      // ---------- 조직 ----------
      {
        id: "assassins", title: "암살단", category: "조직",
        aliases: ["형제단", "Assassins"],
        summary: "알타이어와 알 무알림이 속한 조직. 마시아프를 본거지로 템플 기사단과 맞선다.",
        body: "## 개요\n[[masyaf|마시아프]]를 본거지로 하며 [[al-mualim|알 무알림]]이 이끈다. [[templars|템플 기사단]]를 가장 큰 적으로 여긴다.\n\n## 무엇을 위해 싸우는가\n알 무알림은 암살단이 '모든 것에서의 평화'를 위해 싸운다고 말한다. 한 사람이 다른 사람에게 가하는 폭력을 끝내는 것뿐 아니라 내면의 평화까지 뜻하며, 둘 중 하나만으로는 이룰 수 없다고 가르친다.\n\n## 신조\n> 어느 것도 진실이 아니고, 모든 것이 허용된다. (Nothing is true, everything is permitted.)\n\n솔로몬 신전 작전에서 [[altair|알타이어]]가 [[malik|말릭]]에게 이 말을 한다. 알 무알림은 이 말이 하고 싶은 대로 해도 된다는 자유가 아니라, 감각을 이끌어 주는 지식이며 지혜를 요구한다고 바로잡는다.\n\n## 세 가지 교리\n- 무고한 자의 몸에 칼을 대지 말 것\n- 눈에 띄지 말고 군중 속에 섞여 숨을 것\n- 형제단을 위태롭게 하지 말 것 (직접적이든 간접적이든)\n\n어쌔신 크리드 1편 [[animus|애니머스]] 튜토리얼에서 처음 소개되고, 알 무알림이 알타이어를 꾸짖으며 하나씩 다시 설명한다. 알 무알림은 \"암살단의 신조를 준수하지 않는다면 우리는 아무것도 아니다\"라고 말한다.\n\n## 일하는 방식\n- 암살자는 표적을 직접 추적하며, [[investigation|엿듣기, 소매치기, 심문]] 같은 수단을 쓴다.\n- 도시마다 암살단 지부가 있고, [[rafiq|라피크]]가 이를 맡는다.\n\n## 현대\n[[desmond|데스몬드]]는 암살단 공동체에서 자랐다.\n\n## 신조의 뜻 (알타이어의 깨달음)\n- 진실은 우리가 우리 스스로를 신뢰하는 것이다.\n- 세상은 환상이며, 복종할 수도 초월할 수도 있다.\n- 초월이란 어느 것도 진실이 아니며 모든 것은 허용된다는 것, 법칙은 신성함이 아니라 이성에서 나왔다는 것을 인식하는 일이다.\n- 신조는 자유로워지라는 것이 아니라 현명해지라는 것이다.\n\n## 현대의 형제단\n[[warren-vidic|비딕]]에 따르면 [[abstergo|앱스테르고]]는 지난 한 해 동안 암살단의 거주지와 사막 공동체를 수색했다. 데스몬드를 구하러 온 암살자들은 진압되었다.\n\n## 회사 메일 속 암살단\n[[alan-rikkin|리킨]]은 '암살단 놈들이 아직 몇 명 돌아다니고 있다'고 쓰고, [[tunguska|퉁구스카 사건]]이 암살단의 공격 결과로 보인다고 한다.\n\n## 밀리는 전쟁 (어쌔신 크리드 II)\n[[lucy-stillman|루시]]는 암살단이 템플 기사단과의 전쟁에서 밀리고 있고 매일 동료들이 죽고 있다고 말한다. 다른 암살자들은 각자 있는 곳에서 자기 역할을 하고 있다.\n\n## 에지오의 입단 (어쌔신 크리드 II)\n1488년 [[venice|베네치아]]에서 [[mario-auditore|마리오]], [[machiavelli|마키아벨리]], [[paola|파올라]], [[la-volpe|볼페]] 등이 모두 암살단의 일원임이 드러난다. 그들은 지난 수년간 [[ezio|에지오]]를 인도해 왔고, 해 질 녘 입단식에서 '어느 것도 진실이 아니며, 모든 것이 허용된다'는 신조를 함께 외운다. 마리오는 이제 조상들처럼 활동할 수는 없지만 암살단의 증표는 변함이 없다고 말한다.",
        sources: [...at(AC1_MB1, 980, 1065, 2250, 2560), ...at(AC1_MB2A, 120, 150, 165, 330, 1010), ...at(AC1_MB5A, [2378, 2405]), ...at(AC1_MB6B, [1646, 1661]), ...at(AC1_MS, [4255, 4290], 4470), ...at(AC2_P1, [852, 873]), ...at(AC2_P23, [1640, 1787])]
      },
      {
        id: "templars", title: "템플 기사단", category: "조직",
        aliases: ["템플러", "기사단", "Templars", "템플러 기사단"],
        summary: "로베르 드 사블레가 이끄는 기사단. 솔로몬 신전 아래에서 보물을 찾아냈다.",
        body: "## 개요\n한글 자막에서는 주로 '기사단'이라고 부른다. [[assassins|암살단]]과 맞서는 세력이다.\n\n## 영상 속 활동\n- 솔로몬 신전 아래에서 [[temple-treasure|보물]]을 찾아냈다.\n- [[robert-de-sable|로베르 드 사블레]]가 이끌고 신전에서 암살자들과 맞섰다.\n- 빼앗긴 보물을 되찾으려고 [[masyaf|마시아프]]를 습격했다.\n- 암살단 안에 [[masun|마순]] 같은 내통자를 두었다. 마순은 \"기사단의 명분은 정당하다\"고 말한다.\n\n## 정체가 드러남\n[[al-mualim|알 무알림]]은 [[nine-targets|아홉 명의 표적]]이 피의 맹세로 연결되어 있다고 밝힌다. 누구냐는 물음에 \"논 노비스 도미네, 논 노비스(주여, 우리에게 영광을 돌리지 마소서)\"라고 답하고, [[robert-de-sable|로베르 드 사블레]]의 대의에 도시의 지도자와 군대의 사령관들이 모두 충성을 맹세했다고 말한다.\n\n## 목표\n알 무알림에 따르면 그들은 신의 이름이 아니라 자신들을 위해 성지를 '정복'하려 한다. 리차드든 [[salahuddin|살라딘]]이든 기사단에 반대하는 자는 누구든 파괴될 것이며, 그들에게는 그럴 수단이 있다.\n\n## 현대의 기사단\n[[lucy-stillman|루시]]는 [[desmond|데스몬드]]에게 그의 조상이 제3차 십자군 때 시작한 싸움이 끝나지 않았고, 그가 지금 기사단에게 잡혀 있다고 알려 준다. [[warren-vidic|비딕]]도 루시도 그들을 위해 일하며, [[abstergo|앱스테르고]]는 그들의 회사다. 그들은 아주 잘 숨어 있고, 기사단에 대한 이야기의 절반은 음모론자들에게서, 나머지 절반은 기사단이 일부러 퍼뜨린 거짓 정보에서 나왔다고 한다. 루시는 \"그들이 원하는 건 좋은 거지만, 그걸 행하는 방법은 아주 나쁘다\"고 말한다.\n\n## 계획과 유물\n알 무알림에 따르면 표적들은 자기 도시를 기사단의 이름 아래 두어 기사단이 성지와 그 너머까지 지배하게 하려 했다. 그 계획은 [[temple-treasure|에덴의 조각]]에 달려 있다. 기사단은 잘린 곳이 금세 돋는 히드라 같아서, 한 명이라도 살아남는 한 새로운 세계 질서를 만들려 할 것이라고 한다.\n\n## 알타이어의 정리\n[[altair|알타이어]]는 그들이 십자군도 사라센도 아닌 다른 소속이며, 오직 로베르에게 충성한다고 말한다. [[jerusalem|예루살렘]]에서는 한 템플 기사가 십자군을 형제처럼 받아들이자며 평화를 설교했다. 영어 음성에 따르면 그는 \"우리의 깃발 아래 땅이 하나 될 것\"이라고 했다.\n\n## 열 번째 사람\n로베르는 유물의 비밀을 아는 자가 아홉이 아니라 열이었고, 열 번째가 알 무알림이라고 밝힌다.\n\n## 메일 속 모토\n[[alan-rikkin|리킨]]의 '분석' 메일은 \"이해의 아버지께서 성공으로 인도하시길\"로 끝난다.\n\n## 르네상스의 템플 기사단 (어쌔신 크리드 II)\n[[shaun-hastings|션]]이 찾은 템플 기사단 데이터베이스 기록에 따르면, 복수를 노리던 [[uberto-alberti|우베르토 알베르티]]에게 템플 기사단이 손을 내밀었다.\n\n## 르네상스의 템플 기사단 2 (어쌔신 크리드 II)\n[[mario-auditore|마리오]]에 따르면 템플 기사단은 십자군 전쟁 때 만들어졌고, 200년 전 프랑스에서 해체되었다고 역사에 기록되었다. 하지만 사실은 사악한 일을 계속하려 음지로 숨어들었다. 수장은 [[rodrigo-borgia|로드리고 보르지아]]이고, 파치 가문이 그 아래에 있다. 회합은 \"이해의 아버지께서 당신을 인도하여 주시기를\"이라는 인사로 끝난다.\n\n## 파치 음모\n성당 회합에서 바티칸이 '피를 흘리지 않는 한'이라는 조건으로 계획에 은총을 기원했다는 말이 나온다.\n\n## 주군의 모임 (어쌔신 크리드 II)\n[[carlo-grimaldi|카를로 그리말디]]는 [[emilio|에밀리오]]에게 주군께서 모임을 소집했다며, 사흘 후 산토 스테파노에서 모인다고 전한다. 이 '주군'은 [[rodrigo-borgia|로드리고 보르지아]]다.\n\n## 베네치아의 계획 (어쌔신 크리드 II)\n두건 쓴 '주군'은 [[mocenigo|몬체니고 도제]]를 독살하고 [[marco-barbarigo|마르코 바바리고]]를 도제에 앉히려 한다. 파치가 [[florence|피렌체]] 일을 망친 것처럼 실수가 없게 직접 나섰다고 하며, 로마로 돌아간다.\n\n## 알타이어가 본 템플 기사단 (어쌔신 크리드 II 역사 자료)\n알타이어는 로베르 드 사블레가 죽은 뒤에도 조직이 건재하며 그림자 속으로 숨었다고 적었다. 템플 기사단은 절대 진리가 없다는 것을 알고, 그 자리에 '새로운 세계의 질서'라는 교리를 채워 세상을 재구성하려 한다고 보았다.",
        sources: [...at(AC1_MB1, 1080, 1240, 1710, 2020), ...at(AC1_MB2A, 840), ...at(AC1_MB4B, [3087, 3099], [3112, 3133]), ...at(AC1_MB4C, [1744, 1759], [1775, 1780], [1793, 1798]), ...at(AC1_MB5A, [102, 119], 2350, 2427), ...at(AC1_MB6A, [409, 418], 1240), ...at(AC1_MB6B, [1320, 1371]), ...at(AC1_MS, 4484), ...at(AC2_P5, [255, 270]), ...at(AC2_P6, [860, 870], [1740, 1745], [2016, 2025]), ...at(AC2_P7, [2174, 2183]), ...at(AC2_P16, [1572, 1590]), ...at(AC2_P17, [720, 975]), ...at(AC2_P33, [526, 576], [620, 700])]
      },
      {
        id: "abstergo", title: "앱스테르고", category: "조직",
        aliases: ["Abstergo", "앱스테르고 인더스트리"],
        summary: "데스몬드를 데려와 애니머스 실험을 하는 회사. 겉으로는 제약회사다.",
        body: "## 개요\n[[desmond|데스몬드]]는 \"여긴 제약회사잖아요\"라고 말한다. [[warren-vidic|비딕]]은 자신의 '고용주'들이 데스몬드의 머릿속에 든 정보를 원한다고 말한다.\n\n## 데스몬드를 찾아낸 방법\n10년 동안 숨어 살던 데스몬드를 운전면허 기록(사진과 지문)으로 찾아냈다. \"이 사람들은 어디에나 있다\"는 말이 뒤따른다.\n\n## 회사\n- 이메일 화면에 정식 이름 'Abstergo Industries'가 나온다.\n- [[lucy-stillman|루시]]에 따르면 세계에서 가장 큰 제약회사 중 하나이고, 가장 중점을 두는 것은 항우울제다.\n- [[animus|애니머스]]는 회사의 공개된 모습이 아니다.\n- 직원들은 회사 정책과 프로젝트에 대해 말하지 못하게 되어 있다. 위반하면 회사가 손해 배상을 청구할 수 있다는 공지 이메일이 돈다.\n\n## 루시를 가둔 방식\n[[lucy-stillman|루시]]를 제품 출시 때까지 비밀 유지를 이유로 회사의 '손님'으로 머물게 했다. 애니머스가 완성되자 무장한 경비들이 그녀를 끌어냈다.\n\n## 레일라 마리노 사건\n전 직원 [[leila-marino|레일라 마리노]]의 죽음에 관한 기록은 봉인되어 있다. 문의 메일에는 담당자 낸시 닐롭이 답을 피하고, [[alan-rikkin|앨런 리킨]]을 참조로 넣었다.\n\n## '세상을 바꾼다'\n[[warren-vidic|비딕]]에 따르면 앱스테르고와 그 전신은 지난 수천 년간 의학, 기계, 철학의 도약을 이끌었다. 의심을 피하려고 공로를 내세우지 않고 수혜자를 신중히 골랐다. 비딕은 이를 '통제하고 있다'는 뜻이라고 말한다.\n\n## 기사단의 회사\n[[lucy-stillman|루시]]는 앱스테르고가 [[templars|기사단]]의 회사라고 밝힌다.\n\n## 메일로 드러난 일 (이메일 원문)\n- 9월 3일 전 직원에게 회사 정책과 프로젝트를 말하지 말라는 기밀 유지 공지(고용 계약 2.15조)를 보냈다. 소송이 걸려 있다고 한다.\n- 앱스테르고 홀딩스가 '뉴 플루오라이드'라는 합성 약물을 시험하려고 작은 마을의 수돗물을 조작했다는 기사가 났고, 제약 부서가 연방 수사를 받았다.\n- [[eye-abstergo-satellite|아이-앱스테르고 위성]] 발사를 12월 21일로 미뤘다.\n- 획득 부서, 혈통 발견 및 획득 부서 같은 조직이 메일에 나온다.\n\n## 문양 속 문서 (어쌔신 크리드 II)\n열일곱 번째 문양에 1945년 5월 2일자, 스무 번째 문양에 1997년 1월 3일자 앱스테르고 코퍼레이션 문서가 나온다. 각각 벙커의 대역과 [[temple-treasure|에덴의 조각]], 인공 뼈로 꾸민 진화의 연결고리에 관한 내용이다.",
        sources: [...at(AC1_MB1, 280, 2660, 2675), ...at(AC1_MB2B, 2295, 2310, 2400), ...at(AC1_MB3B, 2685, 2700, 2865, 2940), ...at(AC1_MB4A, [31, 36], [52, 62]), ...at(AC1_MB4C, 1759), ...at(AC1_MS, [1035, 1145], [3600, 3660], 2540, 4470), ...at(AC2_P31, [800, 840])]
      },

      // ---------- 인물: 과거 ----------
      {
        id: "altair", title: "알타이어", category: "인물",
        aliases: ["알타이르", "Altaïr"],
        summary: "데스몬드의 선조인 암살자. 실력은 뛰어나지만 오만하다.",
        body: "## 개요\n[[desmond|데스몬드]]가 [[animus|애니머스]]로 기억을 따라가는 선조다. 어쌔신 크리드 1편과 II 영상의 한글 자막 표기 '알타이어'를 따른다. '알타이르'로 적기도 한다.\n\n## 솔로몬 신전 작전\n- 무고한 노인을 죽이고, 이를 나무라는 [[malik|말릭]]에게 \"난 너보다 위다. 직위와 실력 모두\"라고 말한다.\n- 말릭의 만류를 무시하고 [[robert-de-sable|로베르]]에게 덤볐다가 제압당한다.\n\n## 마시아프\n- [[al-mualim|알 무알림]]은 그를 '나의 최고의 사람'이라 부르며 가장 중요한 임무를 맡겼다.\n- 임무 실패와 [[kadar|카다르]]의 죽음으로 비난받는다.\n- 공방전에서 함정을 작동시켜 템플 기사단 군을 물리친다.\n- 알 무알림에게 신조의 세 교리를 모두 어겼다며 배신자로 단죄된다.\n\n## 강등과 구원의 기회\n- 단죄는 실제 처형이 아니었다. 깨어난 알타이어는 직위와 계급, 장비를 잃고 신입으로 강등된다.\n- 알 무알림은 그가 오만하고 지나치게 자신만만하며 내면의 평화를 찾지 못했다고 말한다.\n- 배신자 [[masun|마순]]을 찾아내 다시 칼을 찰 자격을 얻는다.\n- [[nine-targets|아홉 명의 표적]]을 처단하라는 임무를 받는다. 알타이어는 이를 \"9명과 제 목숨의 교환\"이라고 말한다.\n\n## 다마스쿠스\n- 강등된 뒤 처음으로 직접 표적을 조사해 [[tamir|타미르]]를 암살한다.\n- [[rafiq|라피크]]는 다른 암살자들이 여전히 알타이어를 낮게 본다고 안타까워하지만, 알타이어는 \"다른 사람들이 뭐라 생각하든 신경 쓰지 않는다\"고 답한다.\n\n## 계급 회복\n표적을 처단할 때마다 [[al-mualim|알 무알림]]이 계급과 장비를 조금씩 돌려준다. 타미르 다음에는 짧은 칼(Short Blade)과 반격 기술을 얻는다.\n\n## 커지는 의문\n[[garnier|가니에르]]가 사람들을 돕고 있다고 믿는 것 같았고 포로들도 그에게 고마워하는 듯했다며 의문을 품는다. [[acre|아크레]]의 라피크와 알 무알림은 궁금해하지 말고 행하라고 말한다.\n\n## 연대를 의심함\n[[abul-nuqoud|아불 누쿠드]]까지 처단한 뒤 알 무알림에게, 처단한 자들이 죽을 때조차 후회 없이 성공을 확신했고 그들을 묶는 연대가 분명히 있다고 말한다. 알 무알림이 깨달으라면서도 생각을 멈추라고 하자 \"자꾸 돌려서 말씀하신다\"고 반발한다.\n\n## 스승에게 맞섬\n표적들이 남기는 이상한 말과 스승의 수수께끼에 지쳐 \"더 이상은 싫습니다\", \"저는 사람을 죽이는 사람입니다\"라고 맞선다. 명예를 잃은 게 아니라 빼앗겼다며, 표적들을 잇는 것이 무엇인지 알려 달라고 '요구'한다. 그 결과 표적들이 [[templars|기사단]]이라는 사실을 듣는다.\n\n## 신뢰의 도약\n알 무알림이 자신을 죽이지 않을 줄 어떻게 알았느냐는 물음에 \"몰랐습니다. 신뢰의 도약을 했을 뿐입니다\"라고 답한다.\n\n## 신조를 깨달음\n알 무알림의 물음에 \"진실은 우리가 우리 스스로를 신뢰하는 것\", \"세상은 환상\"이라고 답한다. 초월한다는 것은 '어느 것도 진실이 아니며 모든 것은 허용된다'는 것, 법칙은 신성함이 아니라 이성에서 나왔다는 것을 인식하는 일이며, \"신조는 우리에게 자유로워지라는 것이 아니라 현명해지라는 것\"이라고 말한다.\n\n## 변화\n[[damascus|다마스쿠스]] 라피크는 \"자네 확실히 바뀌었어, 더 좋은 쪽으로\"라고 말한다.\n\n## 커지는 회의\n아크레 라피크의 사과에 \"잘못한 것은 나라네. 난 내가 신조보다 위에 있다고 생각했네\"라고 답한다. [[sibrand|시브란드]]를 처단한 뒤에는 \"내가 잘못된 거라면? 이 사람들이 죽을 운명이 아니었다면? 잘못된 결과였지만 의도는 순수했다면?\"이라고 묻는다.\n\n## 말릭에게 사과\n자기 때문에 말릭이 팔을 잃고 카다르를 잃었다며 처음으로 사과한다.\n\n## 스승을 의심함\n\"스승님은 우리에게 무언가를 숨기고 있다\"며, 템플 기사단과 관련된 문제가 더 깊다고 의심한다. 로베르를 처리하면 [[masyaf|마시아프]]로 돌아가 답을 얻겠다고 한다.\n\n## 로베르 처단과 스승에 대한 의심\n[[arsuf|아수프]]에서 [[king-richard|리차드 왕]] 앞에 나서 로베르의 배신을 고하고, 결투 끝에 로베르를 처단한다. 로베르에게서 열 번째 사람이 알 무알림이라는 말을 듣는다. 리차드에게 \"우리가 무엇인지는 우리가 선택하는 것\"이라고 말하고, 스승과 할 말이 많다며 떠난다.\n\n## 스승을 쓰러뜨림\n홀린 마시아프로 돌아와 [[malik|말릭]]과 힘을 합치고, 유물의 힘을 쓰는 [[al-mualim|알 무알림]]과 싸워 그를 쓰러뜨린다. 마지막에 신조를 아랍어로 \"La shai'a waqe'on mutlak bal kollon mumkin\"이라고 말한다. 유물을 파괴해야 한다고 했지만 결국 파괴하지 못하고, 유물이 보여 주는 지도를 보게 된다.\n\n## 에지오의 시대에서 (어쌔신 크리드 II)\n[[mario-auditore|마리오]]에 따르면 [[codex|코덱스]] 암호문은 [[temple-treasure|에덴의 조각]]을 가졌던 암살자 알타이어가 쓴 것으로, 땅 아래 숨겨진 아주 오래되고 강력한 무언가를 알려 주려 했다.\n\n## 알타이어의 갑옷\n[[villa-auditore|빌라 아디토레]]의 [[sanctuary|성소]]에 알타이어의 갑옷이 있다. 마리오는 그의 삶은 거의 알려지지 않았지만 갑옷은 매우 가볍고 단단하다고 한다.\n\n## 역사 자료에 남긴 이야기 (어쌔신 크리드 II)\n어쌔신 크리드 II의 역사 자료 30쪽은 알타이어가 남긴 글이다.\n- 알 무알림을 없앤 뒤 수일에서 몇 달 동안 에덴의 조각을 연구했고, 말릭은 그만두라고 했다.\n- 로베르 드 사블레가 죽은 뒤에도 템플 기사단은 건재하다며, [[assassins|암살단]]이 요새를 버리고 손가락을 자르는 관습 없이 새롭게 태어나야 한다고 적었다.\n- 아다가 자신을 안식처로 인도해 검을 내려놓게 해 줄 것이라 믿었지만, 바다 건너 템플 기사단에게서 그녀를 구하러 갔을 때는 이미 늦어 그녀가 품 안에서 숨을 거뒀다. 이후 지구 끝까지 복수했지만 기쁨이 없었고, 어떤 여인에게도 마음을 주지 않기로 했다. 그리고 '내가 잘못 생각했던 것이 오히려 다행이었다'고 덧붙인다.\n- 부모를 일찍 잃어 알 무알림이 아버지 같았고, 언젠가 가질 아이들은 사랑하겠다고 적었다.\n- 암살검을 손가락을 자르지 않아도 되게 고치고, 독을 쓰는 검과 손목 화기, 가볍고 강한 방어구를 만들었다.\n- 선악과를 섬의 숨겨진 금고에 봉인하기로 했다.\n- 테무진(징기스칸)의 군대가 몰려오자 그를 막으려 했고, '그녀와 내가' 아이들과 함께 그곳으로 여행할 것이라고 적었다. 이 '그녀'는 7쪽에서 다시 마음을 준 여인, 곧 아이들의 어머니로 보인다. 이름은 나오지 않지만, 어쌔신 크리드 1편에서 알타이어가 살려 준 [[maria|마리아]]와 데스몬드가 꿈에서 본 장면으로 보아 마리아로 추정된다.\n- 죽음을 앞두고 유물을 다시 보고 싶은 마음에 흔들린다고 썼다.",
        sources: [...at(AC1_MB1, 1065, 1215, 1275, 1620, 2120, 2340), ...at(AC1_MB2A, 105, 165, 178, 900, 975), ...at(AC1_MB2B, 1890, 2130, 2148), ...at(AC1_MB3A, 202, 225, 2966, 2986, 3046, 3126), ...at(AC1_MB4A, [2897, 2905], [2942, 2944]), ...at(AC1_MB4B, [3041, 3068], 3087, [3217, 3220]), ...at(AC1_MB5A, [374, 376], [2379, 2405]), ...at(AC1_MB5B, [76, 78], [1997, 2000]), ...at(AC1_MB6A, [1625, 1644], [2349, 2364]), ...at(AC1_MB6B, [834, 902], [1300, 1371], [1490, 1495], [1539, 1550]), ...at(AC1_MB7, [328, 368], [1051, 1060], [1096, 1121], 1130), ...at(AC2_P6, [2160, 2190]), ...at(AC2_P7, [400, 420]), ...at(AC2_P33, [370, 492], [526, 590], [1025, 1228])]
      },
      {
        id: "al-mualim", title: "알 무알림", category: "인물",
        aliases: ["Al Mualim", "스승"],
        summary: "마시아프 암살단을 이끈 스승. 에덴의 조각으로 사람들을 홀리려다 알타이어에게 쓰러졌다.",
        body: "## 개요\n[[masyaf|마시아프]] 요새의 도서관에서 [[assassins|암살단]]을 이끈다. 솔로몬 신전 아래의 [[temple-treasure|보물]]을 되찾는 일을 가장 중요한 임무로 여겼다.\n\n## 마시아프 공방전\n[[robert-de-sable|로베르]]가 인질을 앞세워 보물을 요구하자 \"우리 병사들은 죽음을 두려워하지 않는다\"며 맞섰다. 암살자들에게 탑에서 뛰어내리라고 명령해 기사들에게 두려움 없음을 보여 주었다.\n\n## 알타이어 단죄\n공방전이 끝난 뒤 신조의 세 교리를 하나씩 짚으며, 모두 어긴 [[altair|알타이어]]를 배신자로 단죄했다. 그러나 실제로 죽이지는 않았다. \"자네는 내가 보여 주려던 것을 본 것이고, 죽은 자의 잠에 빠지게 된 것\"이라고 밝히고, 그를 신입으로 강등해 구원의 기회를 주었다.\n\n## 배신자 처단\n누군가 [[robert-de-sable|로베르]]를 도왔다며 알타이어에게 배신자를 찾게 했다. 끌려온 [[masun|마순]]이 뉘우치기를 거부하자 직접 처형했다. 마순을 도운 사람에 대해서는 \"타락한 의지를 가진 자는 반드시 파괴되어야 한다\"며 [[jamal|자말]]을 지켜보겠다고 말한다.\n\n## 아홉 명의 표적\n알타이어에게 [[nine-targets|아홉 명의 이름]]이 적힌 목록을 주고, 그들을 죽여 평화의 씨앗을 심으라고 명령했다.\n\n## 궁금증을 경계함\n[[tamir|타미르]]가 자신을 잘 아는 듯 말했다는 보고에 \"자네의 큰 실패는 너무 많은 궁금증에서 비롯됐다\"고 답한다. 정보를 주지 않는 것은 알타이어가 같은 실수를 되풀이하지 않게 하려는 것이라고 말한다.\n\n## 낙원의 약속\n적들은 알 무알림이 암살자들에게 약을 먹이고 여자와 환락의 정원을 보상으로 유혹한다고 비난한다. 알 무알림은 사람들이 진실을 몰라야 한다고 말한다. 암살단이 평화만을 원한다는 것을 알면 더는 두려워하지 않을 것이고, 그러면 암살단이 그들에게 맞설 수 없기 때문이다.\n\n## 세 도시의 지도자\n[[king-richard|리차드 왕]]과 [[salahuddin|살라딘]]을 죽이면 군대가 흩어져 땅이 짓밟힐 것이라며, 대신 그들이 없는 동안 도시를 다스리는 [[abul-nuqoud|아불 누쿠드]], [[majd-addin|마아드 아딘]], [[william-of-montferrat|몽페라트의 윌리엄]]을 처단하라고 명령한다.\n\n## 질서와 권위\n표적들을 잇는 연대가 있다는 알타이어의 말에 \"진실이라고 들리는 것과 진실을 보는 것 사이에 차이가 있다\"고 답한다. 의문을 품는 것은 암살자의 본성이지만 생각을 멈추고 스승을 믿는 것도 의무라며, \"질서 없이는 진정한 평화도 없고, 질서는 권위가 있어야 한다\"고 말한다. 알타이어는 \"자꾸 돌려서 말씀하신다\"고 반발한다.\n\n## 기사단의 정체를 밝힘\n수수께끼만 준다며 맞서는 알타이어에게 표적들이 피의 맹세로 연결된 [[templars|기사단]]이라고 밝힌다. 진실을 숨긴 이유로는 알타이어가 스스로 베일을 걷어 내길 바랐고, 얻어 낸 정보가 주어진 정보보다 귀하며, 최근 행동이 믿음을 주지 못했다는 점을 든다.\n\n## 신뢰의 도약\n\"내가 너를 죽이지 않을 것을 어떻게 알았는가?\"라고 묻자 알타이어는 \"몰랐습니다. 신뢰의 도약을 했을 뿐입니다\"라고 답한다.\n\n## 에덴의 조각을 보여 줌\n기사단의 계획이 [[temple-treasure|에덴의 조각]]에 달려 있다며 알타이어에게 유물을 보여 주고 그 역사와 힘을 설명한다.\n\n## 진실과 환상\n\"진실이란 무엇이냐\"는 물음에 알타이어가 세상은 환상이고 신조는 현명해지라는 뜻이라고 답하자, 기사단은 그 환상을 이용해 지배하려 하기에 위협이라고 말한다. 기사단을 잘라도 다시 돋는 히드라에 비유하고, 남은 한 명이 죽으면 로베르 드 사블레가 마침내 상처를 입을 것이라고 한다.\n\n## 로베르에 대하여\n로베르가 꿈꾸는 '모든 사람이 하나가 된 세상'이라는 목표에 공감한다고 말한다. 다만 평화는 배우고 이해하고 수용해야 하는 것이며, 로베르는 그것을 강요해 자유 의지를 빼앗으려 한다고 한다. 알타이어에게 \"희생자들에게 증오를 품지 마라\"고 당부한다.\n\n## 열 번째 사람\n[[robert-de-sable|로베르]]는 죽기 전에 유물을 찾은 사람은 아홉이 아니라 열 명이었고, 그 열 번째가 알 무알림이라고 밝힌다. 그래서 알 무알림이 기사단을 그렇게 잘 알았으며, 그도 유물에 관심이 있지만 나눌 생각이 없을 뿐이라고 한다. 알타이어는 \"그는 암살단의 스승님이시다\"라고 반박한다. 리차드 왕에게는 \"그분도 잘못이 없는 것은 아닌 것 같다\"고 말한다.\n\n## 배신\n로베르의 일지를 본 [[malik|말릭]]에 따르면 알 무알림은 지금까지 암살자들을 이용했고, 성지를 그에게 넘겨준 꼴이 되었다. 그는 유물로 마시아프 사람들과 암살자들을 홀렸다. 알타이어에게 \"어느 것도 진실이 아니고, 모든 것은 허용된다는 증거를 찾았다\"며 템플 기사단원들을 죽여야 했던 이유를 밝힌다. 모든 기적과 신들이 유물이 만든 환상이었고, 자신은 피를 덜 흘리는 다른 환상을 주려 했다고 말한다.\n\n## 최후\n알타이어에게 쓰러진다. 유물을 파괴하라고 하면서도 \"넌 할 수 있다. 하지만 그러지 않겠지\"라는 말을 남긴다.\n\n## 알타이어의 기록 (어쌔신 크리드 II)\n알타이어의 역사 자료에 따르면, 알 무알림은 아버지 같은 존재였지만 가장 큰 적이 되었다. 감정적 결합이 암살단을 약하게 만든다고 믿었고, 예수가 실존 인물이며 군중 심리를 자극하는 데 뛰어났다고 말했다고 한다.",
        sources: [...at(AC1_MB1, 1580, 1620, 2070, 2085, 2250, 2340), ...at(AC1_MB2A, 105, 240, 900, [930, 940], 952), ...at(AC1_MB3A, [184, 188], [3096, 3101], [3112, 3118]), ...at(AC1_MB4A, 213, 227, 240, 2911, [2927, 2942]), ...at(AC1_MB4B, [3087, 3095], [3149, 3164], [3214, 3220]), ...at(AC1_MB5A, 119, [2340, 2350], 2378, [2405, 2410], 2438), ...at(AC1_MB6A, [229, 248], 254), ...at(AC1_MB6B, [1320, 1371], [1539, 1545]), ...at(AC1_MB7, [71, 100], [343, 368], [466, 520], [763, 909], [1051, 1121]), ...at(AC2_P33, [440, 492], [1040, 1090])]
      },
      {
        id: "malik", title: "말릭", category: "인물",
        aliases: ["말리크", "Malik"],
        summary: "알타이어와 함께 솔로몬 신전 작전에 나선 암살자. 동생 카다르를 잃었다.",
        body: "## 개요\n동생 [[kadar|카다르]]와 함께 [[altair|알타이어]]를 따라 솔로몬 신전 작전에 나섰다. 어쌔신 크리드 1편 영상의 한글 자막 표기 '말릭'을 따른다. '말리크'로 적기도 한다.\n\n## 솔로몬 신전\n- 무고한 노인을 죽인 알타이어에게 \"나는 주의를 끌지 않았을 것이고, 무고한 사람의 목숨도 빼앗지 않았을 것\"이라고 말한다.\n- \"우리의 목표는 보물을 되찾는 것이고, 필요할 때만 [[robert-de-sable|로베르]]를 상대해야 한다\"며 알타이어를 말린다.\n\n## 마시아프\n동생을 잃고 돌아와 \"바로 당신 때문\"이라며 알타이어를 탓한다. 그러면서도 [[temple-treasure|신전의 보물]]을 [[al-mualim|알 무알림]]에게 가져왔다.\n\n알 무알림에 따르면 말릭은 동생의 죽음을 알타이어의 목숨으로 갚는 것이 공평하다고 생각했다.\n\n## 예루살렘 지부\n[[jerusalem|예루살렘]] [[assassins|암살단]] 지부를 맡고 있다. 찾아온 알타이어에게 \"자네 자신을 돌아보라고 시킨 사소한 일\"이라며 냉랭하게 굴지만, [[talal|탈랄]]을 조사할 장소를 알려 준다. 알타이어가 탈랄을 처단하고 돌아오자 온 도시가 다 알게 됐다며 은밀함을 잊었냐고 꾸짖는다.\n\n## 다시 예루살렘에서\n[[majd-addin|마아드 아딘]] 조사를 돕는다. 알타이어가 도움을 요구하지 않고 요청하자 \"인상 깊군\"이라고 한다. 알타이어는 그를 '다이'(상위 직책)라고 부르고, 말릭은 알타이어를 '신참'이라 부른다. 처형될 형제단원의 구출은 자기 부하들에게 맡기고, 알타이어에게는 마아드 아딘이 그를 죽이지 못하게 막으라고 부탁했다. 일을 마친 알타이어에게는 \"더도 말고, 덜도 말고\" 해야 할 일을 했을 뿐이라고 말한다.\n\n## 화해\n알타이어가 \"자네는 나 때문에 팔을 잃었고, 카다르를 잃었다\"며 사과하자, 말릭은 그가 솔로몬 사원에 함께 갔던 자와는 다른 사람이라며 사과할 것이 없다고 답한다. 자신도 질투 때문에 부주의했다고 털어놓고 \"우리는 하나\"라고 말한다.\n\n## 아수프로 떠나는 알타이어를 말림\n스승의 허락 없이 움직이면 형제단을 위협한다며 [[masyaf|마시아프]]로 돌아가라고 하지만, 알타이어는 그에게 자신이 죽인 자들을 섬겼던 사람들을 살펴보라고 부탁한다.\n\n## 마시아프 탈환\n솔로몬 신전 아래 유적에서 로베르의 일지를 찾아 알 무알림의 배신을 알게 된다. 부하들을 이끌고 마시아프로 와서 알타이어를 돕고, 홀린 사람들의 주의를 돌려 요새를 점령한다. 알타이어를 '다이(상위 직책)'라고 부른다.\n\n## 알타이어의 기록 (어쌔신 크리드 II)\n알타이어의 역사 자료에 따르면, 알타이어가 에덴의 조각 연구에 매달리자 말릭은 아예 모두 그만두라고까지 했다.",
        sources: [...at(AC1_MB1, 1055, 1200, 1675, 1695), ...at(AC1_MB2A, 178), ...at(AC1_MB3B, 845, 870, 2470), ...at(AC1_MB4C, 74, 87, 997, 1045, 1056, 1646), ...at(AC1_MB6A, [1620, 1684], [2341, 2393]), ...at(AC1_MB7, [328, 416]), ...at(AC2_P33, [370, 420])]
      },
      {
        id: "kadar", title: "카다르", category: "인물",
        aliases: ["카타르", "Kadar"],
        summary: "말릭의 동생. 솔로몬 신전 작전에서 목숨을 잃었다.",
        body: "## 개요\n형 [[malik|말릭]]과 함께 [[altair|알타이어]]의 솔로몬 신전 작전에 나섰다. 알타이어가 노인을 죽이자 \"완벽하군요\"라며 감탄했다. 어쌔신 크리드 1편 영상의 한글 자막에서는 '카타르'로 적었다.\n\n## 죽음\n작전에서 돌아오지 못했다. 말릭은 알타이어가 경고를 듣지 않아 동생이 죽었다고 말한다.\n\n## 말릭의 고백\n말릭은 알타이어를 그렇게 질투하지 않았다면 자신도 부주의하지 않았을 것이라며, 자기에게도 잘못이 있다고 말한다.",
        sources: [...at(AC1_MB1, 1035, [1665, 1675]), ...at(AC1_MB6A, [1661, 1667])]
      },
      {
        id: "robert-de-sable", title: "로베르 드 사블레", category: "인물",
        aliases: ["로베르", "로베르 드 사브레", "Robert de Sable"],
        summary: "템플 기사단을 이끈 기사. 아홉 명의 표적 중 마지막으로 처단되었다.",
        body: "## 개요\n[[templars|템플 기사단]]을 이끄는 기사다. 알타이어는 그를 '우리의 가장 강력한 적'이라 불렀다.\n\n## 솔로몬 신전\n덤벼든 [[altair|알타이어]]를 손쉽게 제압해 내던지고 \"성지는 너희 것이 아니다. 기회가 있을 때 당장 달아나라. 그렇지 않다면 죽음뿐이다\"라고 경고했다.\n\n## 마시아프 습격\n[[masyaf|마시아프]]를 공격하고, 인질을 앞세워 [[al-mualim|알 무알림]]에게 \"내게서 훔쳐 간 것\"을 내놓으라고 요구했다. 결국 함정에 군대가 무너져 물러났다.\n\n## 내부의 조력자\n알 무알림은 [[assassins|암살단]] 안의 누군가가 로베르를 도왔다고 말한다. 그 배신자는 [[masun|마순]]이었다.\n\n## 표적들의 중심\n알 무알림은 알타이어가 처단한 표적들이 모두 로베르의 대의에 충성을 맹세한 [[templars|기사단]]이라고 밝히며, \"이제 로베르 드 사블레의 진정한 영향력을 깨달았군\"이라고 말한다. 어쌔신 크리드 1편 영상의 한글 자막에서는 '로베르 드 사브레'로 적었다.\n\n## 유물에 잠식됨\n[[al-mualim|알 무알림]]에 따르면 로베르는 [[temple-treasure|에덴의 조각]]의 힘을 맛본 뒤 그 힘에 잠식되었다. 그는 우리처럼 평화를, 모든 사람이 하나가 된 세상을 꿈꾸지만, 그 평화를 강요해 자유 의지를 빼앗으려 한다.\n\n## 장례식의 대역\n[[majd-addin|마아드 아딘]]의 장례에 나타난 것은 로베르가 아니라 대역 [[maria|마리아]]였다. 그녀에 따르면 로베르는 사라센과 십자군이 힘을 합쳐 암살단에 맞서도록 간청하러 [[arsuf|아수프]]로 갔다.\n\n## 리차드 왕의 부관\n[[arsuf|아수프]]에서 [[king-richard|리차드 왕]]의 부관으로 나타난다. 알타이어가 배신을 고하자, 암살자들은 조작의 대가이며 알타이어는 요새를 지키려 할 뿐이라고 맞섰다. 리차드는 결투로 판단을 내리게 했다.\n\n## 최후\n결투에서 [[altair|알타이어]]에게 쓰러진다. 유물의 비밀을 아는 자는 아홉이 아니라 열이며, 열 번째가 [[al-mualim|알 무알림]]이라고 밝힌다. 알 무알림이 기사단을 그렇게 잘 알았던 것도, 유물에 관심이 있는 것도 그 때문이며, 둘의 유일한 차이는 알 무알림이 유물을 나눌 생각이 없다는 점이라고 말한다. \"네 위대한 적인 내가 네 안전장치였다. 다음엔 네 차례겠지\"라는 말을 남긴다.",
        sources: [...at(AC1_MB1, 1210, 1275, 2020, 2200), ...at(AC1_MB2A, 240, 840), ...at(AC1_MB4B, [3104, 3112]), ...at(AC1_MB6A, [164, 213], [221, 248], [2000, 2058], [2276, 2290]), ...at(AC1_MB6B, [851, 902], [931, 949], [1300, 1398])]
      },

      // ---------- 인물: 현대 ----------
      {
        id: "desmond", title: "데스몬드 마일즈", category: "인물",
        aliases: ["데스몬드", "Desmond Miles", "데스몬드 마일스", "실험체 17", "Subject 17"],
        summary: "앱스테르고에 끌려와 애니머스 실험을 받는 바텐더. 알타이어의 후손.",
        body: "## 개요\n바텐더로 일하던 중 [[abstergo|앱스테르고]]에 끌려왔다. [[warren-vidic|비딕]]은 그가 암살자이며, 머릿속에 자신들이 원하는 정보가 있다고 말한다.\n\n## 애니머스\n협조하지 않으면 혼수 상태로 만들어 작업을 이어 간 뒤 죽게 두겠다는 협박에 [[animus|애니머스]]에 눕는다. 선조 [[altair|알타이어]]의 기억을 따라간다.\n\n## 과거\n- 30명 남짓한 [[assassins|암살단]] 공동체에서 자랐다. 그곳을 '농장'이라고 불렀다.\n- 부모를 감시자처럼 느껴 16살에 도망쳤다.\n- 10년 동안 다른 암살자와 접촉 없이 현금만 쓰며 살았지만, 운전면허 기록 때문에 앱스테르고에 발견됐다.\n\n## 구출 시도\n[[lucy-stillman|루시]]는 암살자들이 데스몬드를 구하러 올 것 같다며 \"아마 당신은 당신 생각보다 더 중요한 사람\"이라고 말한다. 데스몬드는 이때 처음으로 자신이 [[templars|기사단]]에게 잡혀 있다는 것을 알게 된다.\n\n## 마지막 기억\n[[lucy-stillman|루시]]는 그들이 데스몬드의 마지막 기억에 접근하는 순간이 시작일 뿐이라고 경고한다. 비딕과 대화한 누군가는 일이 끝나면 '그'를 처리하겠다는 듯 말한다.\n\n## 실패한 구출\n암살자들의 구출 시도가 진압되고, 비딕은 데스몬드를 위해 올 암살자는 남지 않았다고 말한다. 루시에 따르면 부모님은 도망친 것 같다.\n\n## 살아남음\n지도를 얻은 기사단은 데스몬드를 죽이려 했지만, 루시의 만류로 \"더 이상 필요 없다고 확신이 들 때까지\" 살려 두기로 한다.\n\n## 벽의 글씨\n방 곳곳에서 빛나는 글씨와 그림을 보게 된다. 업로더 설명 자막에 따르면 이는 조상의 기억이 현실에 섞이는 [[bleeding-effect|혼입 효과]] 때문이다.\n\n## 실험체 17\n어쌔신 크리드 1편 애니머스 튜토리얼이 시작될 때 애니머스 음성이 그를 'subject 17(실험체 17)'이라고 부른다. 화면 글자나 한글 자막으로는 나오지 않고 음성으로만 나온다.\n\n## 회사 메일 속 실험체 17\n[[alan-rikkin|리킨]]의 메일에서 데스몬드는 'Subject Seventeen(실험체 17)'으로 불린다. 리킨은 그가 '은퇴'할 경우를 대비해 다른 실험체를 구하겠다고 쓰고, 그가 자신도 모르게 다른 유물들의 위치를 알고 있으니 마지막 기억을 반드시 열어야 한다고 말한다.\n\n## 앱스테르고 탈출 (어쌔신 크리드 II)\n[[lucy-stillman|루시]]와 함께 앱스테르고를 탈출한다. 탈출 중 루시의 카드로 열리지 않는 문을 자기도 모르게 연다. 숨은 거처에서 [[shaun-hastings|션]]과 [[rebecca-crane|레베카]]를 만나고, 조상 [[ezio|에지오]]의 기억으로 암살자 훈련을 받기로 한다.\n\n## 혼입 효과\n방의 심볼과 키패드의 코드가 보이던 것은 알타이어 때와 같은 혼입 효과라고 루시가 설명한다. 조상의 기술까지 흘러들어 온다고 한다.\n\n## 마음의 변화\n어쌔신 크리드 II의 시작에서 데스몬드는 처음 끌려왔을 때는 맞서 싸우면 무슨 일을 당할지 두려웠지만, 이제는 싸우지 않으면 무슨 일이 일어날지가 더 두렵다고 말한다.\n\n## 에지오의 기술 (어쌔신 크리드 II)\n에지오의 기술을 남김없이 습득해, 창고 철골을 타고 올라 보안 시스템 센서를 켠다. 그 뒤 애니머스 밖에서 환영을 보고, 잠든 사이 알타이어가 되어 [[acre|아크레]]에서 마리아를 만나는 꿈을 꾼다.\n\n## 은신처 습격과 두 번째 재앙 (어쌔신 크리드 II)\n[[minerva|미네르바]]의 메시지를 본 직후 템플 기사단의 습격을 받고, 에지오에게서 익힌 기술로 경비병들을 쓰러뜨린다. 북쪽 별장으로 가는 화물차 안에서 두 번째 재앙의 가능성을 듣고, 다시 애니머스에 들어간다.",
        sources: [...at(AC1_MB1, 260, 280, 300, 2560, 2600, 2675), ...at(AC1_MB4C, [1729, 1734], 1749), ...at(AC1_MB5B, [2063, 2065], 2111), ...at(AC1_MB6B, [1574, 1661], [1704, 1737]), ...at(AC1_MB7, [1195, 1229], [1290, 1313], 1674), ...at(AC1_MB1, 506), ...at(AC1_MS, [4255, 4290], [4442, 4485]), ...at(AC2_P1, [273, 300], [704, 750], [837, 940], [1140, 1180]), ...at(AC2_P1, [315, 325]), ...at(AC2_P14, [225, 330], [495, 730]), ...at(AC2_P33, [0, 335])]
      },
      {
        id: "warren-vidic", title: "워렌 비딕", category: "인물",
        aliases: ["비딕", "Vidic", "Warren Vidic"],
        summary: "앱스테르고에서 애니머스로 데스몬드를 실험하는 박사.",
        body: "## 개요\n[[desmond|데스몬드]]를 [[animus|애니머스]]에 눕혀 실험한다. 협조하지 않으면 혼수 상태로 만들어 작업을 이어 가고, 끝나면 죽게 두겠다고 협박했다.\n\n## 유전 기억 연구\n30년 동안 연구한 끝에, DNA가 세대를 이어 내려온 유전 정보뿐 아니라 선조의 기억까지 담은 기록 보관소라는 사실을 알아냈다고 말한다.\n\n## 루시와의 갈등\n데스몬드를 더 오래 애니머스에 두려 하다가 이를 말리는 [[lucy-stillman|루시]]와 다툰다.\n\n## '재교육'\n데스몬드의 선조들이 '거의' 옳았다고 말한다. 부패는 암과 같아 종양만 잘라 내서는 시간을 버는 정도에 그치며, 포괄적이고 체계적인 개입, 즉 대중의 '재교육'이 필요하다고 주장한다. 자신의 해결책은 비밀이라며 밝히지 않는다.\n\n## 루시를 구함\n애니머스가 완성된 뒤 무장한 경비들이 [[lucy-stillman|루시]]를 해치려 하자 그들을 물리쳤다. 루시는 그가 행복한 사람도, 좋은 사람도 아니지만 자신의 목숨을 구했다고 말한다.\n\n## 레일라 마리노\n루시가 [[leila-marino|레일라 마리노]]의 죽음을 묻자 \"그녀는 자살했다\", \"이제 그만 덮어라\"라고 답장했다.\n\n## '질서'\n세상은 난장판이고 천 년이 지나도 사회는 야만적이라며, 세계에 필요한 것은 질서라고 말한다. 방향을 갈망하는 인류에게 어떻게 살아야 하는지 말해 주면 모든 갈등이 끝날 것이라고 한다. 데스몬드에게는 \"그게 어디 있는지 보여 주기만 하면 된다\"고 말한다.\n\n## '선물'\n의학, 기계, 철학의 획기적인 도약이 [[abstergo|앱스테르고]]와 그 전신에게서 나왔다고 말한다. 그것들은 발명한 것이 아니라 발견한 것이며, '우리 이전에 온 존재들로부터의 선물'이라고 한다.\n\n## 기사단\n[[lucy-stillman|루시]]에 따르면 비딕은 [[templars|기사단]]을 위해 일한다. 암살자들이 데스몬드를 구하러 올 것 같다는 연락을 받은 듯 서둘러 세션을 끝낸다.\n\n## 누군가에게 보고함\n이름이 나오지 않은 누군가에게 \"거의 다 끝나 갑니다\"라고 보고한다. 상대는 그것을 되찾고 일이 끝나면 \"그는 처리될 것\"이냐고 묻고, 내일 아침까지 진행 보고서를 원한다고 한다.\n\n## 애니머스와 역사\n누구나 책을 쓰고 원하는 내용을 넣을 수 있다며 보고 읽는 모든 것을 믿지 말라고 한다. 애니머스는 오해의 여지가 없어 특별하다고 말한다.\n\n## 구출 시도 진압\n암살자들이 연구소를 공격하자 데스몬드가 불러들인 것으로 의심한다. 진압한 뒤, 지난 한 해 동안 [[assassins|암살단]] 거주지를 수색해 왔으니 데스몬드를 위해 올 암살자는 남아 있지 않다고 말한다.\n\n## 지도 획득\n애니머스로 유물의 지도를 보고 \"드디어 찾았다\"며 상대에게 보고한다. 데스몬드를 죽이려 했지만 루시의 만류로 미뤄진다. 상대는 데스몬드가 더 이상 필요 없다는 확신이 들면 그때 죽이라고 결정한다.\n\n## '프로젝트 책임자 #9'\n[[alan-rikkin|리킨]]의 '분석' 메일이 '프로젝트 책임자 #9' 받은 편지함에 와 있다. 비딕의 메일함을 보다가 열린 화면이다. 리킨은 그에게 미첼-헤지스 통신기 하나를 계속 갖고 있으라고 한다.\n\n## 압박\n리킨은 결과를 내지 못하면 실험체 17을 포기하겠다고 압박하고, 루시 문제도 그에게 책임지라고 한다.\n\n## 16호의 기록 (어쌔신 크리드 II)\n루시에 따르면 비딕 박사는 16호의 애니머스 기록 일부를 따로 표시해 두었고, [[vault|지하금고]]에 대해서도 알고 있었던 것 같다.\n\n## 은신처 습격 (어쌔신 크리드 II)\n경비병들을 이끌고 암살단의 은신처에 쳐들어와 데스몬드를 데려가려 한다. 루시에게 한 번 살려 줬는데 은혜를 이렇게 갚느냐고 하고, 함께 실험을 하던 건 루시였다고 쏘아붙인다. 데스몬드에게 경비병들이 모두 쓰러지자, 자네가 이겼지만 곧 자네도 끝날 거라고 말한다.",
        sources: [...at(AC1_MB1, 300, 335, 400, 420, 2370), ...at(AC1_MB2A, 15, 30, 45, 60), ...at(AC1_MB3B, 2535, [2740, 2745], 2970), ...at(AC1_MB3A, 35, 53, 68, 84, 110), ...at(AC1_MB4A, 36, [74, 82]), ...at(AC1_MB4C, 1697, 1756), ...at(AC1_MB5B, [2055, 2066]), ...at(AC1_MB6A, [61, 113]), ...at(AC1_MB6B, [1574, 1661]), ...at(AC1_MB7, [1141, 1229]), ...at(AC1_MS, [4442, 4485], [4184, 4290], [2835, 2875]), ...at(AC2_P14, [348, 370]), ...at(AC2_P33, [60, 230])]
      },
      {
        id: "lucy-stillman", title: "루시 스틸먼", category: "인물",
        aliases: ["루시", "스틸만", "Lucy Stillman"],
        summary: "비딕과 함께 데스몬드의 애니머스 실험을 지켜보는 사람.",
        body: "## 개요\n[[warren-vidic|비딕]]과 함께 [[desmond|데스몬드]]의 [[animus|애니머스]] 실험을 지켜본다. 어쌔신 크리드 1편 영상의 한글 자막에서 비딕은 그녀를 '스틸만 양'이라고 부른다.\n\n## 데스몬드를 걱정함\n- 데스몬드를 너무 오래 애니머스에 두면 안 된다며 비딕을 말린다.\n- 무리하게 밀어붙이면 데스몬드가 무너질 것이라고 경고한다.\n- 데스몬드에게서 [[assassins|암살단]] 공동체에서 자란 과거를 듣는다.\n\n## 기한\n데스몬드에게 실험의 기한이 일주일이고 이제 6일 남았다고 털어놓는다. 무엇을 찾는지는 끝내 말하지 않지만, 애니머스의 번역 기능과 [[abstergo|앱스테르고]]에 대해서는 알려 준다.\n\n## 이메일\n루시의 받은 편지함에는 비딕에게 보낸 메일이 있다. 주차장에서 주운 비딕의 출입 키 펜을 돌려주며, 보안팀이 발견했다면 컴퓨터 접근 코드를 모두 바꾸느라 적어도 하루는 문을 닫았을 것이라고 주의를 준다. 메일 날짜는 9월 2~3일이다(연도는 나오지 않는다).\n\n## 앱스테르고에 오기까지\n- 박사 과정을 마칠 무렵, 대학은 그녀의 연구를 사이비 과학이라 부르며 받아 주지 않았다. 다른 대학과 회사에서도 마찬가지였다.\n- 돈도 시간도 떨어졌을 때 [[warren-vidic|비딕]]에게서 편지를 받았다. 학부 때부터 그녀의 경력을 지켜봤다는 내용이었다.\n- 앱스테르고에서 애니머스 프로젝트를 돕는 일을 제안받았다. 제품이 출시될 때까지 6개월에서 1년 정도 회사의 '손님'으로 지내야 한다는 조건이었다.\n- 애니머스가 완성되자 무장한 경비 세 명이 자는 그녀를 끌어냈다. 그중에는 함께 점심을 먹던 리처드도 있었다. 죽을 뻔했지만 비딕이 막아 주었다.\n- 애니머스를 직접 만들지는 않았지만 조립을 감독했다.\n\n## 레일라 마리노\n회사에 [[leila-marino|레일라 마리노]]의 죽음에 대해 물었지만 답을 얻지 못했다. 이메일에 \"그녀는 내 친구였다\"고 썼다.\n\n## 기사단에 대해 털어놓음\n데스몬드에게 그가 [[templars|기사단]]에게 잡혀 있고, 비딕과 자신도 그들을 위해 일한다고 알려 준다. 떠나면서 \"질문에 대한 답은 바로 당신 앞에 있어요. 어디를 봐야 할지 알아야 할 뿐이에요\"라고 남긴다.\n\n## 회사의 경계\n[[alan-rikkin|앨런 리킨]]은 비딕에게 루시가 또 들쑤시고 있으니 처리하라는 메일을 보냈다.\n\n## 데스몬드에게 털어놓음\n비딕이 자리를 비운 사이 데스몬드를 애니머스에서 꺼내, 그들이 데스몬드의 마지막 기억에 접근하면 모든 것을 바꾸려 할 것이라고 알려 준다. 비딕에게는 \"여기는 모두 '덴버'입니다\"라고 둘러댄다. 영어 음성에 따르면 '덴버'는 사고가 일어난 덴버 국제공항 지하 시설을 가리킨다.\n\n## 믿음을 가져요\n데스몬드의 부모가 살던 사막 공동체는 이미 비어 있었다며 부모님이 도망쳤을 것 같다고 말한다. 절망한 데스몬드에게 \"믿음을 가져요\"라고 한다. 업로더 자막에 따르면 이때 약지를 접어 암살단을 뜻하는 몸짓을 보인다.\n\n## 데스몬드를 살림\n상대가 데스몬드를 처리하려 하자, 그의 기억이 더 필요할 수 있다며 막는다. 업로더 설명 자막에 따르면, 어쌔신 크리드 1편 엔딩 뒤 이메일에서 비딕에게 [[bleeding-effect|혼입 효과]]를 설명한다.\n\n## 비밀 메일\n9월 6일 메일에서 루시는 이름 없는 상대와 'DIA 사건'에 대한 정보를 주고받는다. 위성이 '유물을 위한 [[eye-abstergo-satellite|저궤도 송신기]]'이며 성공하면 그들이 모든 것을 지배할 것이라고 알리고, 구조대를 보내 달라고 요청한다. 그 메일은 스팸처럼 위장되어 있었다.\n\n## 실험체 16 보고서\n9월 8일 비딕에게 실험체 16의 혼입 효과 보고서를 보내며, 실험체들을 더 조심히 다뤄야 하고 죽일 필요가 없다고 호소한다.\n\n## 탈출을 이끔 (어쌔신 크리드 II)\n피를 묻힌 채 데스몬드를 깨워 앱스테르고를 탈출한다. 감시 카메라에 예전 화면을 반복시켜 데스몬드의 밤 산책을 숨겨 왔다고 밝힌다. 숨은 거처의 [[shaun-hastings|션]]과는 7년 만에 다시 만난다. 앱스테르고에서 가져온 메모리 코어를 [[rebecca-crane|레베카]]에게 건넨다.\n\n## 암살단의 처지\n\"우린 이미 이 전쟁에서 밀리고 있어요\"라며, 데스몬드를 혼입 효과로 훈련해 암살자로 만들 계획을 밝힌다.\n\n## 16호에 대한 자책 (어쌔신 크리드 II)\n[[subject-16|16호]]를 애니머스에 무리하게 들어가게 한 게 자신이라고 털어놓는다. 데스몬드는 그녀의 잘못이 아니라고 위로한다. 이후 동료 팀을 잇달아 잃어 여덟 명이 사라졌다며 불안해한다.\n\n## 은신처를 떠나다 (어쌔신 크리드 II)\n비딕이 은신처를 습격하자 데스몬드와 함께 맞서고, 비딕에게 자신을 살려 준 건 실험을 계속하기 위해서였다고 말한다. 북쪽 별장으로 피하며, 템플 기사단보다 더 무서운 것이 있다고, 지구 자기장이 약해지면 지구 전체가 불안해질 수 있다고 걱정한다.",
        sources: [...at(AC1_MB1, 180, 210, 2370, 2480, 2560), ...at(AC1_MB2B, 2175, 2205, 2240, 2340, 2385), ...at(AC1_MB3B, 2580, 2600, 2640, 2655, 2685, 2700, 2740, 2925), ...at(AC1_MB4C, [1748, 1756], [1826, 1829], 2351), ...at(AC1_MB5B, 2098, [2111, 2116], 2202, 2220), ...at(AC1_MB6B, [1704, 1750]), ...at(AC1_MB7, [1199, 1215], 1674), ...at(AC1_MS, [3335, 3465], [5010, 5020]), ...at(AC2_P1, [377, 411], [608, 640], [953, 998], [837, 940]), ...at(AC2_P14, [51, 112], [320, 430], [800, 865]), ...at(AC2_P33, [0, 335])]
      },

      // ---------- 장소·물건 ----------
      {
        id: "masyaf", title: "마시아프", category: "장소",
        aliases: ["Masyaf"],
        summary: "암살단의 본거지. 산 위의 요새와 그 아래 마을로 이루어져 있다.",
        body: "## 개요\n[[assassins|암살단]]의 본거지다. 요새 탑의 도서관에서 [[al-mualim|알 무알림]]이 암살단을 이끈다. 요새 안에서는 무기 사용이 제한된다. 요새 안뜰에서는 [[rauf|라우프]]가 훈련생들에게 검술을 가르친다.\n\n## 공방전\n[[robert-de-sable|로베르]]의 [[templars|템플 기사단]] 군이 마을을 습격했다. 암살단은 함정으로 적을 물리쳤다. 이때 [[masun|마순]]이 문을 열어 기사단을 들여보냈다.\n\n## 공방전 이후\n마을 사람들은 습격으로 많은 것을 잃었다. 마순은 마을에서 알 무알림을 '마시아프의 미친 사람'이라 부르며 반란을 선동했다.\n\n## 홀린 마시아프\n알 무알림이 유물로 마을 주민들과 암살자들을 홀렸다. 그들은 \"스승님께서 보여 주시는 것만이 존재한다\"며 [[altair|알타이어]]를 공격했다. [[malik|말릭]]의 부하들이 요새를 점령하고, 알타이어는 요새 정원에서 알 무알림과 맞섰다.",
        sources: [...at(AC1_MB1, 1360, 1560, 1710, 2120), ...at(AC1_MB2A, 405, 540, 750, 1080), ...at(AC1_MB7, [71, 100], [278, 286], [389, 400])]
      },
      {
        id: "temple-treasure", title: "에덴의 조각", category: "물건",
        aliases: ["신전의 보물", "보물", "유물", "솔로몬 신전의 보물", "Piece of Eden"],
        summary: "기사단이 솔로몬 신전 아래에서 찾아낸 유물. 바라보는 자의 마음과 정신을 지배한다.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 [[templars|템플 기사단]]가 솔로몬 신전 아래에서 무언가를 찾았다고 보고 [[altair|알타이어]]에게 회수를 맡겼다. 처음에는 정체가 밝혀지지 않았지만, 어쌔신 크리드 1편 Memory Block 5에서 알 무알림이 '기사단의 유물인 에덴의 조각'이라고 밝힌다.\n\n## 행방\n- 알타이어는 회수에 실패했다.\n- [[malik|말릭]]이 이를 가지고 [[masyaf|마시아프]]로 돌아와 알 무알림에게 건넸다.\n- [[robert-de-sable|로베르]]는 이것을 되찾으려고 마시아프를 습격했다.\n\n## 알 무알림의 대답\n알타이어가 솔로몬 사원에서 말릭이 되찾아 온 유물이 무엇이며 로베르가 왜 그토록 되찾으려 했는지 묻는다. 알 무알림은 때가 되면 기사단의 임무가 드러났듯 유물의 본질도 드러날 것이라며, 지금은 그것이 기사단이 아니라 우리 손에 있다는 데 안심하라고 답한다. 어쌔신 크리드 1편 영상의 한글 자막은 '유물'이라고 부른다.\n\n## 정체\n[[al-mualim|알 무알림]]은 이것을 '기사단의 유물인 에덴의 조각'이라 부르며 \"유혹이다\"라고 말한다. 알타이어의 눈에는 평범한 은 덩어리처럼 보인다.\n\n## 알 무알림이 말한 역사\n- 아담과 이브를 내쫓았다.\n- 막대기를 뱀으로 바꾸고, 홍해를 가르고 닫았다.\n- 에리스가 트로이 전쟁에 사용했다.\n- 가난한 농부가 이것으로 물을 와인으로 바꿨다.\n\n## 힘\n이것을 든 자는 바라보는 자의 마음과 정신을 지배한다. 사람들은 이를 '맛본 자'라고 말한다.\n\n## 기사단의 계획\n[[templars|기사단]]의 계획은 이 유물에 달려 있었다. [[garnier|가니에르]]의 사람들은 약초로 유물의 효과를 흉내 낸 실험이었고, 도시의 지배자들은 시민을 '완벽한 시민, 완벽한 군인'으로 만들려 했다. 알 무알림은 기사단이 유물을 다시 노리지 못하게 잠가 두었다고 말한다.\n\n## 현대의 행방 (영어 음성 기준)\n[[lucy-stillman|루시]]에 따르면 마시아프의 유물은 그들이 가지고 있었지만 덴버의 지하 시설에서 일어난 '사고'로 파괴되었다. 유물은 하나가 아니며, 그들은 [[desmond|데스몬드]]의 조상이 다른 유물들의 위치를 보여 주기를 바란다. 루시는 그들이 이 '기사단 유물'로 우리가 사는 방식, 생각하는 방식, 존재하는 방식을 모두 바꾸려 한다고 말한다.\n\n## 알 무알림의 관심\n로베르에 따르면 알 무알림도 유물에 관심이 있고, 다만 그것을 나눌 생각이 없을 뿐이다.\n\n## 환상의 힘\n[[al-mualim|알 무알림]]은 홍해가 갈라진 것도, 물이 와인으로 변한 것도, 트로이 전쟁도 모두 유물이 만든 환상이었다고 말한다. 그는 유물로 마시아프 사람들을 홀리고, 알타이어와 싸울 때 환영을 만들어 냈다.\n\n## 지도\n알 무알림이 죽은 뒤 알타이어가 유물을 들자 빛나는 지구 모양의 지도가 떠올랐다. 현대의 [[warren-vidic|비딕]]은 이 지도를 보고, 유물이 적어도 여섯 개이며 그중 적어도 두 개는 지금은 없는 대륙에 있다고 보고한다.\n\n## 회사 메일 속 유물 (이메일 원문)\n- [[alan-rikkin|리킨]]의 '분석' 메일은 데스몬드가 찾는 유물을 '에덴의 조각(3번)'이라 부르고, '2번'은 DIA 위성 사고로 잃었다고 쓴다.\n- 같은 메일에 필라델피아 프로젝트의 유물, [[tunguska|퉁구스카 사건]]의 유물, 성배, 미첼-헤지스 통신기도 나온다. 성배를 뺀 그리스도와 관련된 다른 유물들은 '에덴의 조각에서 나온 문학적 장치'라고 한다.\n- 발신자 불명의 메일 'I KNOW'는 '금속 공'이 열리자 사람들이 서로를 죽였다고 쓴다.\n\n## 에덴의 조각 34 (어쌔신 크리드 II)\n다섯 번째 문양 퍼즐에서 'ID: 에덴의 조각 34 - 지팡이'가 나온다. 역사 속 인물들이 지닌 물건이 에덴의 조각이라는 암시다.\n\n## 에덴의 조각 66과 25 (어쌔신 크리드 II)\n일곱 번째 문양에서는 'ID: 에덴의 조각 66 - 수의'가, 여덟 번째 문양에서는 잔 다르크 그림에서 '에덴의 조각 25'가 나온다. 여덟 번째 문양은 지팡이 없는 황제가 힘을 잃었다고 말한다.\n\n## 에덴의 조각 4 (어쌔신 크리드 II)\n열한 번째 문양에서 [[nikola-tesla|니콜라 테슬라]] 사진 속에 '에덴의 조각 4'가 나온다. 크로아티아에서 찾아냈고, 그들은 그의 연구실에서 찾게 될 거라는 말이 함께 나온다.\n\n## PE4 (어쌔신 크리드 II)\n열두 번째 문양의 에디슨 편지에 따르면 니콜라 테슬라가 PE4로 전 세계 정보망을 만들려 했다. 헨리 포드의 편지에는 PE4를 유럽으로 보냈고, 그것을 가진 자가 점령을 시작하면 전쟁이 일어날 거라고 적혀 있다. PE가 무엇의 약자인지는 영상에서 직접 풀어 말하지 않는다.\n\n## 퉁구스카 (어쌔신 크리드 II)\n열여섯 번째 문양의 편지에 따르면, 그들은 황제에게서 어떤 물건을 탈취해 퉁구스카에서 사용법을 알아내려 했다. 편지는 니콜라에게 때가 되면 그가 발명한 전기로 그 물건을 없애 달라고 부탁한다. 여덟 번째 문양에서도 라스푸틴이 퉁구스카에 그것을 가져갔다는 문장이 나온다.\n\n## 선악과 (어쌔신 크리드 II)\n1488년 [[venice|베네치아]]에서 [[rodrigo-borgia|로드리고 보르지아]]에게서 빼앗은 물건이다. 역사 자료에서는 에덴의 조각이라 부르고, 로드리고는 '선악과'라고 불렀다. 악한 자들에게 넘어가서는 안 되며, 신념이 강하지 않은 이들을 미치게 만들 수도 있다고 한다. [[machiavelli|마키아벨리]]는 이것을 포를리 요새로 가져가 지키라고 한다.\n\n## 빼앗긴 선악과\n1488년 포를리에서 체코 [[orsi|오르시]]가 선악과를 빼앗아 달아나고, [[ezio|에지오]]가 그를 처단한 직후 검은 옷의 인물([[savonarola|사보나롤라]]로 보인다)이 가져간다.\n\n## 교황의 지팡이 (어쌔신 크리드 II)\n역사 자료는 [[vault|지하금고]]를 열려면 두 개의 열쇠, 곧 두 개의 에덴의 조각이 필요하다고 했다. 하나는 선악과, 다른 하나는 교황의 지팡이였다. 에지오는 로드리고에게서 지팡이를 빼앗아 선악과와 함께 써서 바티칸 아래의 지하금고를 연다.\n\n## 알타이어의 선악과\n알타이어는 선악과의 기능을 지배와 조종이라 적었고, 그 속에서 불기둥과 무너진 철탑 같은 미래의 환영을 보았다. 파괴하려 했지만 부서지지 않아 섬의 숨겨진 금고에 봉인하기로 했다.",
        sources: [...at(AC1_MB1, 1080, 1620, 1695, 2020), ...at(AC1_MB4B, [3177, 3192]), ...at(AC1_MB5A, [119, 170], [187, 193], [2419, 2422]), ...at(AC1_MB5B, 2116, 2132, 2160, 2180, 2210), ...at(AC1_MB6B, [1383, 1388]), ...at(AC1_MB7, [824, 857], 1130, [1160, 1196]), ...at(AC1_MS, [4442, 4485], 2795), ...at(AC2_P8, [1065, 1075]), ...at(AC2_P11, [255, 270], [893, 953]), ...at(AC2_P13, [1325, 1345]), ...at(AC2_P15, [1430, 1450], [1565, 1600]), ...at(AC2_P22, [460, 500]), ...at(AC2_P25, [16, 105]), ...at(AC2_P26, [685, 870]), ...at(AC2_P32, [390, 420], [1680, 1720], [2010, 2040]), ...at(AC2_P33, [370, 492], [840, 900], [1090, 1115])]
      },

      // ---------- 기술·게임 시스템 ----------
      {
        id: "animus", title: "애니머스", category: "기술",
        aliases: ["Animus", "애니무스"],
        summary: "DNA 속 선조의 유전 기억을 3차원으로 재생하는 장치.",
        body: "## 개요\n[[warren-vidic|비딕]]은 애니머스를 '유전자 기억을 삼차원으로 만들어 주는 프로젝터'라고 설명한다. 사람의 DNA에는 자신의 기억뿐 아니라 선조의 기억도 담겨 있고, 애니머스로 이를 해독해 읽을 수 있다.\n\n## 문제점\n원하는 기억으로 곧장 들어가려 하면 사용자의 무의식이 거부해 기억에서 튕겨 나온다. 그래서 동기화할 수 있는 기억부터 시작해 차츰 나아가야 한다.\n\n## 관련 문서\n- [[synchronization|동기화]]\n- [[desmond|데스몬드 마일즈]]\n\n## 번역 기능\n애니머스는 중요하다고 판단한 대사를 현대 영어로 옮겨 준다. 그래서 과거 인물들이 가끔 현대식으로 말하는 시대착오가 생긴다. [[lucy-stillman|루시]]는 더 사실적으로 만들 수도 있지만 알아듣기 어려울 것이라고 말한다.\n\n## 과열\n작업 도중 이상한 온도가 측정되며 과열되어 멈춘다. [[abstergo|앱스테르고]]의 엔지니어 팀이 만들었고, [[lucy-stillman|루시]]가 조립을 감독했다.\n\n## 개조\n[[lucy-stillman|루시]]가 애니머스를 개조해 데스몬드가 더 오래 머물 수 있게 되었다.\n\n## 역사와의 차이\n데스몬드는 애니머스에서 본 것이 역사책과 다를 때가 있다고 말한다. 비딕은 기록은 누구나 쓸 수 있지만 애니머스는 오해의 여지가 없다고 답한다.\n\n## 실험체 번호\n애니머스는 데스몬드를 'subject 17(실험체 17)'로 부른다.\n\n## 애니머스 2.0\n[[rebecca-crane|레베카 크레인]]이 돌보는 [[assassins|암살단]]의 애니머스다. 레베카는 '공주님'이라 부르며 앱스테르고 것보다 낫다고 말한다. 화면에는 '[[subject-16|실험체 16]] · 비밀 정보'와 '실험체 17 · 데스몬드 마일즈'가 함께 뜨고, 메모리를 비교한 뒤 접속한다.\n\n## 앱스테르고의 애니머스들\n연구동의 한 방에 애니머스가 잔뜩 놓여 있었다. 데스몬드는 \"대체 얼마나 많이 있는 거야?\"라고 묻는다.",
        sources: [...at(AC1_MB1, 365, 380, 420, 440), ...at(AC1_MB2B, 2265, 2280), ...at(AC1_MB3B, 2525, 2580), ...at(AC1_MB4A, [12, 16]), ...at(AC1_MB6A, [37, 56], [105, 113]), ...at(AC1_MB1, 506), ...at(AC2_P1, [428, 449], [1184, 1220], [659, 690])]
      },
      {
        id: "synchronization", title: "동기화", category: "기술",
        aliases: ["싱크", "Synchronization"],
        summary: "애니머스 사용자가 선조의 기억과 얼마나 일치하는지 나타내는 값.",
        body: "## 개요\n동기화 막대는 사용자가 선조의 기억과 얼마나 맞아떨어지는지 보여 준다. 동기화가 완전히 깨지면 [[animus|애니머스]]가 마지막으로 동기화된 지점으로 되돌린다.\n\n## 올리는 법과 잃는 법\n- 올라감: 목표를 완수하거나 눈에 띄지 않게 행동할 때\n- 떨어짐: 무고한 사람을 죽이거나, 너무 높은 곳에서 떨어지거나, 전투에서 다칠 때\n\n선조가 따르던 [[assassins|암살단]] 신조대로 행동하면 동기화를 유지하는 데 도움이 된다.",
        sources: at(AC1_MB1, 520, 540, [980, 990])
      },
      {
        id: "eagle-vision", title: "독수리의 눈", category: "기술",
        aliases: ["Eagle Vision", "이글 비전", "매의 눈"],
        summary: "주변 사람들의 의도를 알아보는 선조의 감각.",
        body: "## 개요\n어쌔신 크리드 1편 [[animus|애니머스]] 튜토리얼은 이것을 선조가 주변 사람들의 의도를 이해하도록 도운 '여섯 번째 감각'이라고 소개한다. 영상 화면에는 영어로 'Eagle Vision'이라고 나온다.\n\n## 색깔의 의미\n- 흰색: 정보\n- 노란색: 암살 표적\n- 빨간색: 병사\n- 파란색: 아군\n\n가만히 서 있고 완전히 [[synchronization|동기화]]된 상태에서만 쓸 수 있다.\n\n## 데스몬드\n어쌔신 크리드 1편 엔딩에서 [[desmond|데스몬드]]는 맨눈으로 방바닥과 벽의 빛나는 글씨와 그림을 본다.\n\n## 표기\n어쌔신 크리드 II의 게임 한글 자막은 이 능력을 '매의 눈'이라고 옮긴다. [[lucy-stillman|루시]]는 [[bleeding-effect|혼입 효과]]로 보이는 심볼과 코드에 매의 눈을 쓰라고 말한다.\n\n## 에지오\n[[ezio|에지오]]는 매의 눈으로 아버지 사무실의 숨겨진 문을 찾는다. 화면 안내에는 '매의 눈을 사용하여 주변 상황에 대한 정보를 습득합니다'라고 나온다.",
        sources: [...at(AC1_MB1, 940, 965), ...at(AC1_MB7, [1250, 1313]), ...at(AC2_P1, [1150, 1160]), ...at(AC2_P3, [710, 725])]
      },
      {
        id: "hidden-blade", title: "히든 블레이드", category: "기술",
        aliases: ["Hidden Blade"],
        summary: "암살에 쓰는 숨겨진 칼날.",
        body: "## 개요\n어쌔신 크리드 1편 [[animus|애니머스]] 튜토리얼에서 표적을 고정하고 히든 블레이드를 고른 뒤, 병사에게 다가가 조용히 암살하는 법을 배운다. 시체가 발견되면 주변 병사의 경계 상태가 바뀐다.\n\n## 알타이어\n강등되며 장비를 빼앗긴 [[altair|알타이어]]는 배신자 [[masun|마순]]을 처단한 뒤 검과 함께 히든 블레이드를 되찾는다.\n\n## 에지오의 칼날 (어쌔신 크리드 II)\n[[paola|파올라]]가 감옥에서 가져다준 아버지의 검과 손목 보호구에 들어 있던 장치다. 고장 나 있던 것을 [[leonardo|레오나르도 다빈치]]가 함께 온 암호 문서를 해독해 고쳤다. 예전에는 착용자가 약지를 잘라야 했지만, 문서에 따르면 개선되어 그럴 필요가 없어졌다.\n\n## 독 칼날 (어쌔신 크리드 II)\n레오나르도가 [[codex|코덱스]] 도안으로 칼날에 독을 넣을 수 있게 만들어 준다. 독은 의사에게서 다시 채울 수 있다.\n\n## 알타이어의 개량 (어쌔신 크리드 II 역사 자료)\n알타이어는 손가락을 잘라야만 쓸 수 있던 암살검을 고쳐 철 보호구를 더했고, 다른 암살자들은 그가 새 금속을 주조했다고 믿었다. 이후 독을 쓰는 검과, 작은 물체를 쏘는 손목 화기도 만들었다.",
        sources: [...at(AC1_MB1, 740, 780), ...at(AC1_MB2A, 1050, 1065), ...at(AC2_P4, [1118, 1145], [1281, 1343]), ...at(AC2_P9, [1677, 1715]), ...at(AC2_P33, [762, 800], [1000, 1020], [1145, 1170])]
      },
      {
        id: "investigation", title: "조사 방법", category: "기술",
        aliases: ["엿듣기", "소매치기", "심문", "Eavesdrop", "Pickpocket", "Interrogation"],
        summary: "암살자가 표적에 대한 정보를 모으는 수단. 엿듣기, 소매치기, 심문이 있다.",
        body: "## 개요\n강등 전에는 다른 암살자들이 [[altair|알타이어]] 대신 표적을 추적해 주었다. 강등 뒤로는 스스로 추적해야 한다. [[al-mualim|알 무알림]]이 붙여 준 암살자가 알타이어에게 이 방법들을 다시 일깨운다.\n\n## 방법\n- **엿듣기 (Eavesdrop)**: 근처 벤치에 앉아 표적의 대화를 엿듣는다.\n- **소매치기 (Pickpocket)**: 걷고 있는 사람에게서 물건을 몰래 빼낸다.\n- **심문 (Interrogation)**: 표적을 외딴 곳까지 따라가 말할 때까지 때린다.\n\n## 사용 예\n배신자를 찾을 때 마을 사람들의 대화를 엿듣고, 바구니 직공의 편지를 소매치기하고, [[masun|마순]]을 심문했다.\n\n## 다마스쿠스에서\n[[tamir|타미르]]를 조사할 때는 [[rafiq|라피크]]가 알려 준 장소들을 돌며 엿듣기와 소매치기로 정보를 모으고, 지부 소속 정보원의 이야기도 들었다. 정보원은 시장 남동쪽 출구 근처에 경비병과 사이가 나쁜 무리가 모이니, 그들과 친해지면 도움이 될 것이라고 알려 준다.\n\n## 시민 구하기와 조력자\n경비병에게 괴롭힘당하는 시민을 구하면 도움을 받을 수 있다. 조사 완료 화면은 '시장을 빠져나올 때 도움을 줄 도시의 조력자를 찾아라'라고 안내한다.\n\n## 조사 완료 화면\n조사를 하나 마칠 때마다 'Investigation Complete' 화면에 짧은 요약이 뜬다. [[damascus|다마스쿠스]]에서 [[abul-nuqoud|아불 누쿠드]]를 조사할 때는 6개 중 3개를 마쳐야 암살 기억이 열렸다.\n\n## 실패\n소매치기를 들키면 'Memory Update Failed'가 뜨고, 몸을 숨기거나 잠시 기다려야 다시 시도할 수 있다.\n\n## 정보원 호위\n[[jerusalem|예루살렘]]에서는 경비병에게 쫓기는 정보원을 목적지까지 안전하게 호위하는 '정보원 경호 챌린지'가 있었다. 정보원은 보답으로 경비병에게서 빼낸 물건을 건넨다.\n\n## 섞여들기와 소매치기 (어쌔신 크리드 II)\n[[paola|파올라]]의 사람들이 [[ezio|에지오]]에게 군중 속에 섞여드는 법을 가르친다. 파올라는 훔친 뒤에는 절대 망설이지 말고 바로 자리를 떠나라고 한다.",
        sources: [...at(AC1_MB2A, 225, 330, 375, 570, 735, 765), ...at(AC1_MB2B, 675, 1050, 1280, 1305), ...at(AC1_MB4A, 720, 1329, 1802), ...at(AC1_MB4B, 600), ...at(AC1_MB4C, 220, 247, 440), ...at(AC2_P4, [707, 719], [1014, 1047])]
      },
      {
        id: "masun", title: "마순", category: "인물",
        aliases: ["Masun"],
        summary: "마시아프의 문을 열어 기사단을 들여보낸 암살단 내부의 배신자.",
        body: "## 배신\n[[masyaf|마시아프]] 공방전 때 문을 열어 [[templars|기사단]]을 들여보냈다. 요새 안의 누군가와 편지를 주고받았고, 바구니 직공이 공격 직전에 그에게 편지를 전했다.\n\n## 선동\n공격 뒤 마을에서 \"오늘의 공격은 시작일 뿐\"이라며, [[al-mualim|알 무알림]]이야말로 배신자이니 '마시아프의 미친 사람'에게 맞서 일어서자고 선동했다.\n\n## 최후\n[[altair|알타이어]]에게 심문당하자 \"우리는 기사단을 섬긴다. 기사단의 명분은 정당하다\"고 말했다. 알 무알림 앞에서도 \"유일하게 아쉬운 것은 그들이 실패했다는 것\"이라며 뉘우치기를 거부해 처형되었다.",
        sources: at(AC1_MB2A, 405, 420, 735, 750, 840, 880, [895, 900])
      },
      {
        id: "jamal", title: "자말", category: "인물",
        aliases: ["Jamal"],
        summary: "알 무알림이 마순을 도운 사람과 관련해 언급한 인물.",
        body: "## 개요\n[[masun|마순]]이 처형된 뒤 [[altair|알타이어]]가 그를 도운 사람은 어떻게 되느냐고 묻는다. [[al-mualim|알 무알림]]은 무지나 두려움 때문에 잘못을 저지른 사람은 구할 수 있지만 타락한 의지를 가진 사람은 반드시 파괴해야 한다고 답한다. 그러면서 \"곧 우리는 자말이 어떤 사람인지 보게 될 것\"이라고 말한다.\n\n어쌔신 크리드 1편 영상에서는 그 이상 나오지 않는다.",
        sources: at(AC1_MB2A, 915, [930, 940])
      },
      {
        id: "nine-targets", title: "아홉 명의 표적", category: "임무",
        aliases: ["9명의 표적", "아홉 개의 이름", "목록"],
        summary: "알 무알림이 알타이어에게 준 목록. 죽여야 할 아홉 명의 이름이 적혀 있다.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 이들을 역병을 퍼뜨리고 전쟁을 일으키는 자들이라고 부른다. 그들의 권력과 영향력이 땅을 타락시키고 십자군 전쟁을 계속되게 한다고 말한다. 이들을 죽이면 이 지역과 [[altair|알타이어]] 자신 모두에게 평화의 씨앗을 심게 되고, 그렇게 구원받을 수 있다고 한다.\n\n## 처단한 순서\n1. [[tamir|타미르]]: [[damascus|다마스쿠스]]의 무기 상인\n2. [[garnier|가니에르 드 나플라우스]]: [[acre|아크레]]의 [[hospitaller|기사단 병원]] 그랜드 마스터\n3. [[talal|탈랄]]: [[jerusalem|예루살렘]]에서 사람들을 납치한 자\n4. [[abul-nuqoud|아불 누쿠드]]: 다마스쿠스의 상인왕\n5. [[william-of-montferrat|몽페라트의 윌리엄]]: 아크레의 섭정\n6. [[majd-addin|마아드 아딘]]: 예루살렘의 섭정\n7. [[jubair|주바이르]]: [[salahuddin|살라딘]]의 수석 학자 (다마스쿠스)\n8. [[sibrand|시브란드]]: [[teutonic-order|튜턴 기사단]]의 리더 (아크레)\n9. [[robert-de-sable|로베르 드 사블레]]: 템플 기사단의 지도자 ([[arsuf|아수프]]에서 결투로 처단)\n\n알 무알림은 타미르 다음 표적으로 아크레나 예루살렘에 가라고 했고, 알타이어는 아크레부터 갔다. 세 명을 처단한 뒤 알 무알림은 \"아홉 중 셋이 죽었다\"고 확인했다.\n\n\n## 마지막 표적\n주바이르를 처단한 뒤 알 무알림은 \"단 한 사람만이 우리와 우리의 궁극적인 목표 사이를 막고 있다\"고 말한다. 그 사람이 로베르 드 사블레였다.\n\n## 열 번째 사람\n로베르는 유물을 찾은 사람이 아홉이 아니라 열 명이었고, 열 번째가 [[al-mualim|알 무알림]]이라고 밝힌다.\n\n## 정체\n알 무알림은 표적들이 모두 [[robert-de-sable|로베르 드 사블레]]의 대의에 충성을 맹세한 [[templars|기사단]]이며, 피의 맹세로 연결되어 있다고 밝힌다.\n\n## 서로 연결된 표적들\n타미르는 죽기 전 자신은 혼자 움직인 것이 아니라 '한 조각'에 불과하며, 알타이어가 곧 '다른 이들'을 알게 될 것이라고 말한다. [[talal|탈랄]]도 죽기 전 '우리 조직'은 충분히 강해서 자신이 죽어도 일이 멈추지 않는다고 말한다.\n\n## 연대\n아불 누쿠드도 죽기 전 '새로운 세상'을 말하며, 알타이어에게 \"넌 우리를 막을 수 없다\"고 했다.",
        sources: [...at(AC1_MB2A, [952, 960], 975, 990), ...at(AC1_MB2B, 1890, 1905, 2160), ...at(AC1_MB3A, 209, 2958), ...at(AC1_MB4A, 182, 240, [2572, 2575], 2961), ...at(AC1_MB4B, 2563, 3087, 3104), ...at(AC1_MB4C, 1395), ...at(AC1_MB5A, [212, 215], 2350, 2438), ...at(AC1_MB5B, 1567), ...at(AC1_MB6A, [167, 175], [2033, 2046]), ...at(AC1_MB6B, [1300, 1334])]
      },
      {
        id: "tamir", title: "타미르", category: "인물",
        aliases: ["Tamir"],
        summary: "다마스쿠스 알 실라흐 수크를 다스린 무기 상인. 아홉 명의 표적 중 첫 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]이 [[nine-targets|아홉 명의 표적]] 가운데 '첫 번째로 쓰러질 사람'으로 지목한 [[damascus|다마스쿠스]]의 암시장 상인이다.\n\n## 무기 상인\n[[souk-al-silaah|알 실라흐 수크]]를 다스리며 무기와 갑옷을 팔아 재산을 모았다. 대장장이, 상인, 자본가들의 지원을 받는 '이 땅에서 가장 큰 죽음의 상인'이다. 시장에서 일생 최대의 거래를 준비하고 있었다.\n\n## 잔혹함\n주문량을 맞추기 어렵다고 호소하는 상인에게 \"게으르거나 무능한 사람의 변명\"이라며 다그치다가, 그 자리에서 찔러 죽인다. 그러고는 \"시체는 그대로 둬라\"라고 말한다.\n\n## 최후\n[[altair|알타이어]]에게 암살당한다. 죽어 가며 \"나는 단순한 죽음의 상인이 아니라 훨씬 고귀한 대의를 섬긴다\"고 말한다. 또 자신은 '형제들'처럼 맡은 역할이 있는 한 조각일 뿐이며, 다른 이들이 알타이어를 가만두지 않을 것이라고 경고한다.\n\n## 알타이어의 보고\n알타이어는 타미르가 [[al-mualim|알 무알림]]을 잘 아는 듯이 말했고, 자신의 임무에 더 큰 의미가 있는 것처럼 굴었다고 전한다.\n\n## 역할\n알타이어는 타미르가 무기를 준비했다고 정리하고, 알 무알림은 그것이 '전쟁'을 위한 것이었다고 답한다.",
        sources: [...at(AC1_MB2A, 990), ...at(AC1_MB2B, 1365, 1380, 1500, 1560, 1590, 1890, 1905, 1920), ...at(AC1_MB3A, 170), ...at(AC1_MB5A, [179, 184])]
      },
      {
        id: "rafiq", title: "라피크", category: "직책",
        aliases: ["Rafiq", "지부장", "Bureau Leader"],
        summary: "도시마다 있는 암살단 지부를 맡은 사람.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 [[altair|알타이어]]에게 도시에 도착하면 [[assassins|암살단]] 지부를 찾아가 라피크와 이야기하라고 한다. 알 무알림이 새를 보내 그의 도착을 미리 알려 둔다.\n\n## 임무 허가\n알타이어는 라피크의 허락 없이는 임무를 시작할 수 없다. 알타이어는 시간 낭비라며 반발하지만, 알 무알림은 \"이건 네 실수에 대한 대가\"이며 이제는 자신뿐 아니라 암살단원 모두에게 답해야 한다고 말한다.\n\n화면의 목표 문구는 'Speak with the Bureau Leader in Damascus'다.\n\n## 지부의 규칙\n- 도시에서 쫓기게 되면 지부로 돌아와 몸을 피할 수 있다.\n- 다만 적이 너무 가까이 쫓아오면, 따돌릴 때까지 지부의 문은 닫혀 있다. 적을 안으로 끌어들이는 것은 형제단을 위태롭게 하는 일이기 때문이다.\n- 조사를 마치고 계획을 보고하면 라피크가 [[al-mualim|알 무알림]]의 표식을 주고 임무를 허락한다.\n\n## 다마스쿠스의 라피크\n[[altair|알타이어]]를 반갑게 맞고 [[tamir|타미르]] 조사를 안내한다. 타미르가 죽은 뒤에는 고마움과 존경을 표하며, 승전보를 알 무알림에게 전하겠다고 한다. 어쌔신 크리드 1편 영상에서 이름은 나오지 않는다.\n\n## 예루살렘의 라피크\n[[jerusalem|예루살렘]] 지부는 [[malik|말릭]]이 맡고 있다.\n\n## 아크레의 라피크\n\"작은 새가 자네의 방문을 알려 줬다\"며 알타이어를 맞는다. [[garnier|가니에르]]를 처단한 뒤 알타이어가 의문을 털어놓자 \"자네가 할 일은 궁금해하는 것이 아니라 행하는 것\"이라고 다그친다. 어쌔신 크리드 1편 영상에서 이름은 나오지 않는다.\n\n## 다마스쿠스의 라피크 (다시 방문)\n[[abul-nuqoud|아불 누쿠드]]를 노리는 알타이어에게 \"깨지고 강등당한 것만 빼고, 다른 암살자들의 험담만 빼고 다 부럽다\"며 너스레를 떤다. 아불을 처단하고 돌아온 알타이어가 의심을 내비치자, 상인왕이 원래 독특했다며 광기 탓으로 돌린다.\n\n## 아크레의 라피크 (다시 방문)\n[[william-of-montferrat|윌리엄]] 표적을 맡은 알타이어에게 [[acre|아크레]]의 정치 사정을 알려 주며 \"자네의 행동 하나하나가 이 영지의 미래를 바꾼다\"고 말한다. 윌리엄을 처단한 뒤 알타이어가 의문을 품자 \"뱀의 말을 믿어서는 안 된다\"고 답한다.\n\n## 다마스쿠스의 라피크 (세 번째 방문)\n\"[[damascus|다마스쿠스]]의 영웅이 오셨구만!\"이라며 반긴다. [[jubair|주바이르]]가 처단된 뒤에는 \"무지가 악을 키운다\", \"주바이르 같은 사람들은 방향성을 잃은 사람들을 악하게 바꾸기 쉽다\"고 말한다.\n\n## 아크레의 라피크 (세 번째 방문)\n우리 대의를 위한 알타이어의 헌신을 의심한 것을 사과한다. [[sibrand|시브란드]] 처단 뒤 불안해하는 알타이어에게, 후회와 불확실과 동정은 포용해야 하며 이런 감정들이 사람으로 만들어 준다고 말한다. \"자네처럼 능숙한 이를 도운 것만으로도 영광\"이라고 한다.",
        sources: [...at(AC1_MB2A, [1000, 1032], 1380), ...at(AC1_MB2B, 690, 735, 765, 780, 2040, 2130, 2145), ...at(AC1_MB3B, 840), ...at(AC1_MB3A, 1232, [2978, 2981]), ...at(AC1_MB4A, 418, 430, 442, [2816, 2820]), ...at(AC1_MB4B, 92, 151, 2980), ...at(AC1_MB5A, 307, 2240, 2263), ...at(AC1_MB5B, [71, 73], 1966, [1986, 1991], 2016)]
      },
      {
        id: "damascus", title: "다마스쿠스", category: "장소",
        aliases: ["다마스커스", "Damascus"],
        summary: "첫 번째 표적 타미르가 있는 도시.",
        body: "## 개요\n[[nine-targets|아홉 명의 표적]] 중 첫 번째인 [[tamir|타미르]]가 있는 도시다. 어쌔신 크리드 1편 영상의 한글 자막에서는 '다마스커스'로 적었다.\n\n## 가는 길\n[[altair|알타이어]]는 [[masyaf|마시아프]]에서 말을 타고 '왕국(Kingdom)' 지역을 지나 다마스쿠스로 향한다. 도착하면 [[assassins|암살단]] 지부의 [[rafiq|라피크]]를 만나야 한다.\n\n## 도시\n- 기억 지도 화면에 인구가 약 45,323명으로 나온다.\n- 부자 구역(Rich District), 가난한 구역(Poor District), 중간 구역(Middle District)으로 나뉜다.\n- 가난한 구역에만 전망 지점이 9곳 있다.\n- 무기 시장 [[souk-al-silaah|알 실라흐 수크]]가 있다.\n\n## 귀족 구역과 상인왕\n[[abul-nuqoud|아불 누쿠드]]는 귀족 구역(Rich District)에서 지냈다. 라피크는 조사할 곳으로 서쪽의 오마야드 모스크와 사루자 수크, 북서쪽의 [[salahuddin|살라딘]]의 성채를 꼽았다.\n\n## 주바이르의 분서\n[[jubair|주바이르]]가 학자들을 시켜 도시의 모든 글을 모아 불태웠다. 그는 마드라사 알 칼라사에서 회의를 열었다.",
        sources: [...at(AC1_MB2A, 990, 1380, 1395, 1620), ...at(AC1_MB2B, 0, 270, 1380), ...at(AC1_MB4A, 459, [473, 479], 720), ...at(AC1_MB5A, 1459, 1561)]
      },
      {
        id: "rauf", title: "라우프", category: "인물",
        aliases: ["Rauf"],
        summary: "마시아프의 암살자. 훈련생들에게 검술을 가르친다.",
        body: "## 마시아프 귀환\n솔로몬 신전 작전에서 돌아온 [[altair|알타이어]]를 반갑게 맞는다.\n\n## 공방전\n[[masyaf|마시아프]] 공방전 때 알타이어에게 \"저쪽에 서 있게\"라며 위치를 알려 준다.\n\n## 훈련 교관\n\"내 학생들이 검을 어떻게 휘두르는지 잘 이해하지 못하는 것 같네\"라며 강등된 알타이어에게 시범을 부탁한다.",
        sources: [...at(AC1_MB1, 1360, 2025), ...at(AC1_MB2A, 1080)]
      },
      {
        id: "souk-al-silaah", title: "알 실라흐 수크", category: "장소",
        aliases: ["수크 알 실라흐", "Souk Al-Silaah", "무기 시장"],
        summary: "다마스쿠스의 무기 시장. 타미르가 다스렸다.",
        body: "## 개요\n[[damascus|다마스쿠스]]에 있는 시장으로, [[tamir|타미르]]가 다스리며 무기와 갑옷을 거래했다. 어쌔신 크리드 1편 영상의 한글 자막에서는 '알 실라흐 수크'로 적었다.\n\n## 타미르 암살\n타미르가 일생 최대의 무기 거래를 위한 회의를 이곳에서 열었다. 그가 일에 정신이 팔린 틈에 [[altair|알타이어]]가 그를 암살했다.",
        sources: at(AC1_MB2B, 1380, 1425, 1500, 1890)
      },
      {
        id: "jerusalem", title: "예루살렘", category: "장소",
        aliases: ["Jerusalem"],
        summary: "세 번째로 처단한 표적 탈랄이 있던 도시. 말릭이 지부를 맡고 있다.",
        body: "## 개요\n[[altair|알타이어]]는 [[masyaf|마시아프]]에서 말을 타고 '왕국' 지역을 지나 예루살렘으로 간다. 화면의 목표 문구는 'Speak with Bureau Leader in Jerusalem'이다.\n\n## 암살단 지부\n지부 입구는 지붕에 있다. [[malik|말릭]]이 지부를 맡고 있다.\n\n## 도시\n[[malik|말릭]]이 [[talal|탈랄]] 조사 장소로 꼽은 곳은 무슬림 구역과 유대인 구역 경계의 시장, 이슬람 사원 근처, 성 안나 교회 앞이다. 탈랄의 창고는 북쪽의 바르비칸 안에 있다.\n\n## 섭정\n[[al-mualim|알 무알림]]은 [[majd-addin|마아드 아딘]]을 '예루살렘의 섭정'이라고 소개한다.\n\n## 처형대\n솔로몬 신전 서쪽 끝에 처형대가 있다. [[majd-addin|마아드 아딘]]이 이곳에서 공개 처형을 벌였다.",
        sources: [...at(AC1_MB3B, 75, 825, 885, 1480), ...at(AC1_MB4A, 240), ...at(AC1_MB4C, 560, 1080)]
      },
      {
        id: "talal", title: "탈랄", category: "인물",
        aliases: ["Talal"],
        summary: "예루살렘 시민을 납치해 노예로 판다고 알려진 자. 알타이어에게 처단되었다.",
        body: "## 개요\n거리에서는 \"힘든 시기지만 일할 의지만 있으면 보상받는다. 탈랄이 베푼다\"는 외침으로 사람들을 모은다. 사람들이 하나둘 사라지는데도 경비병은 손을 놓고 있다.\n\n## 알타이어의 조사\n- 탈랄의 부하는 탈랄이 사람들을 '여정'에 대비시키고 있으며, 창고에 가뒀다가 때가 되면 [[acre|아크레]]로 보낸다고 털어놓는다.\n- [[malik|말릭]]에게 보고된 내용: [[jerusalem|예루살렘]] 시민을 납치해 노예로 팔고, 북쪽 바르비칸 안의 창고를 근거지로 삼으며, 대상(카라반)을 준비하고 있다.\n\n## 최후\n창고에서 [[altair|알타이어]]를 기다리고 있었다. 자신이 문을 열고 길을 터 알타이어를 불러들였다고 말한 뒤 부하들과 함께 덤볐다. 죽어 가며 이렇게 주장한다.\n- 자신은 노예상이 아니라 그들을 돕고 싶었다. 자신도 도움을 받았기 때문이다.\n- 데려간 사람은 거지, 매춘부, 중독자, 나병 환자로, 노예로도 쓸 수 없는 이들이었다. 팔려고가 아니라 구하려고 데려갔다.\n- 자신의 역할은 끝났지만 '우리 조직'은 충분히 강해서 자신이 죽어도 일이 멈추지 않는다.\n- [[assassins|암살단]]만 성지에 계획을 품은 것이 아니다.\n\n알타이어는 \"넌 죽고 망가진 이들이 있는 전쟁에서 이득을 봤다\"고 답한다.\n\n## 역할\n알타이어는 탈랄이 [[garnier|가니에르]]에게 사람들을 '보급'했다고 정리한다.",
        sources: [...at(AC1_MB3B, 640, 1020, 1320, 1340, 1480, 1825, 1870, 2240, 2255, 2270, 2285), ...at(AC1_MB3B, 75), ...at(AC1_MB5A, 177)]
      },
      {
        id: "leila-marino", title: "레일라 마리노", category: "인물",
        aliases: ["Leila Marino", "레일라"],
        summary: "앱스테르고의 전 직원. 2007년 9월에 죽었고, 기록은 봉인되어 있다.",
        body: "## 개요\n[[lucy-stillman|루시]]의 이메일로만 등장한다. 영상 업로더의 설명 자막은 그녀를 루시의 전임자라고 소개한다.\n\n## 죽음을 둘러싼 이메일\n- 루시는 레일라가 2007년 9월에 죽었고 사고였다고 들었지만, 검시관 기록이 봉인되어 있다고 쓴다. 자살이라면 왜 이렇게 민감한 정보로 다루느냐고 묻는다.\n- 회사 담당자 낸시 닐롭은 이 직원이나 퇴사 경위에 대해 말할 권한이 없다고 답하고, [[alan-rikkin|앨런 리킨]]을 참조로 넣는다.\n- 루시는 \"그녀는 내 친구였다. 무슨 일이 있었는지 알고 싶을 뿐\"이라고 다시 쓴다.\n- [[warren-vidic|비딕]]은 \"그녀는 자살했다. 노이만이라는 녀석과의 관계 때문이었다\"며 그만 덮으라고 답한다.\n\n이메일 날짜는 9월 4일이다(연도는 나오지 않는다).\n\n## 더 나온 이메일 (업로더 설명 자막 기준)\n- 루시가 앨런 리킨에게 친구 레일라에 대한 정보를 요청했다.\n- 레일라에 대해 묻는 루시에게 비딕이 일이나 하라고 답했다.\n\n## 이메일 원문 기준 정리 (현대 파트 모음)\n- 루시가 2007년 9월에 죽은 전 직원으로 레일라를 언급하며, '사고'였다지만 검시관 기록이 봉인되었다고 쓴다.\n- 회사 담당자 낸시 닐롭은 '이 직원이나 회사를 떠난 경위'에 대해 말할 권한이 없다고 답한다.\n- 비딕은 \"노이만이라는 애와의 관계 때문에 자살했다\"고 쓴다.\n- 루시는 9월 5일 메일에서 '5년이 지났는데도'라고 쓴다.\n- 비딕은 회의실에서 루시에게 \"레일라처럼 되고 싶나?\"라고 말했다(영어 음성).",
        sources: [...at(AC1_MB3B, 2835, 2850, 2865, 2925, 2940, 2970), ...at(AC1_MB4C, 1918, 2230), ...at(AC1_MB5B, 2329), ...at(AC1_MS, [1748, 1890], 2409, [400, 470])]
      },
      {
        id: "garnier", title: "가니에르 드 나플라우스", category: "인물",
        aliases: ["가니에르", "Garnier de Naplouse"],
        summary: "아크레 기사단 병원의 그랜드 마스터. 아홉 명의 표적 중 두 번째로 처단되었다.",
        body: "## 개요\n[[acre|아크레]]에 있는 [[hospitaller|기사단 병원]]의 그랜드 마스터로, 병원 구역 안에서 지낸다.\n\n## 소문\n벽 안에서 무고한 시민들로 잔혹한 실험을 한다고 한다. 대부분은 [[jerusalem|예루살렘]]에서 데려온 사람들로, 다른 도시에서 데려와 의심을 피하려 한 것으로 보인다.\n\n## 병원 마당에서\n도망치려던 환자가 붙잡혀 오자 부하들에게 \"찾아오라고 했지 죽이라고 하지는 않았다\"고 꾸짖는다. 하지만 환자가 \"저자가 영혼을 가져갔다\"고 울부짖자 \"이렇게 하는 걸 내가 좋아한다고 생각하나? 하지만 선택지는 없다\"며 두 다리를 부러뜨리라고 명령한다.\n\n## 최후\n[[altair|알타이어]]에게 암살당한다. 죽어 가며 '내 아이들'은 어떻게 되느냐고 묻는다. 알타이어가 그들이 풀려나 집으로 돌아갈 것이라 하자, \"무슨 집? 하수구? 사창가? 그들을 빼낸 감옥?\"이라며 그들에게는 스스로 결정할 의지가 없다고 말한다. 불장난을 하고 싶어 하는 아이에게 원하는 대로 하라고 하겠느냐는 비유도 든다. 알타이어가 그들은 아이가 아니라 다 큰 어른이라고 하자, \"내가 그렇게 생각하는 것이 아니라 확실히 아는 것\"이라고 답한다.\n\n## 실험의 정체\n[[al-mualim|알 무알림]]은 가니에르의 사람들이 '실험'이었고, 약초로 유물의 효과를 흉내 내 언제든 대비하려 했다고 밝힌다.",
        sources: [...at(AC1_MB3A, 1242, [1946, 1955], 2519, 2553, 2571, 2583, 2758, 2772, [2792, 2802], 2839), ...at(AC1_MB5A, [170, 172])]
      },
      {
        id: "acre", title: "아크레", category: "장소",
        aliases: ["Acre", "에이커"],
        summary: "두 번째 표적 가니에르가 있던 도시.",
        body: "## 개요\n[[altair|알타이어]]가 [[tamir|타미르]] 다음으로 찾아간 도시다. 기억 지도에는 '아크레 지부장과 이야기하기'와 '[[jerusalem|예루살렘]] 지부장과 이야기하기'가 함께 목표로 떠 있었다.\n\n## 조사 장소\n[[rafiq|라피크]]가 꼽은 곳은 북쪽의 공공 정원 터, 북서쪽의 버려진 시장, 서쪽의 마리아 교회다.\n\n## 기사단 병원\n북서쪽에 [[hospitaller|기사단 병원]]이 있고, [[garnier|가니에르]]가 그 안에서 지낸다. 도시 곳곳에 'Hospitalier Flag'라는 수집품이 있다.\n\n## 영주\n[[al-mualim|알 무알림]]은 [[william-of-montferrat|몽페라트의 윌리엄]]을 '아크레의 영주'라고 소개한다. 리차드 왕은 아크레에서 승리를 거둔 뒤 예루살렘으로 남진할 준비를 하고 있다.\n\n## 섭정 윌리엄\n[[king-richard|리차드 왕]]이 전쟁을 하는 동안 [[william-of-montferrat|몽페라트의 윌리엄]]이 섭정을 맡았다. 어쌔신 크리드 1편 영상에서 리차드는 그를 '날 대신해서 통치하는 아크레의 섭정'이라고 부른다. 윌리엄이 죽은 뒤 라피크는 알타이어가 아크레를 그의 손에서 구했다고 말한다.\n\n## 조사 장소\n이번에 라피크가 꼽은 곳은 남서쪽 리차드의 성채 앞 시장, 같은 방향의 성 십자가 성당, 서쪽의 체인 지역과 구호 지역 경계다.\n\n## 시브란드\n알 무알림은 남은 기사단원 중 한 명인 [[sibrand|시브란드]]가 아크레에 있다고 말한다.\n\n## 항구\n[[sibrand|시브란드]]가 아크레 항구를 운영했다. 그는 부두를 봉쇄하고 배를 징발했으며, 항구에서는 모든 선박을 비우고 [[teutonic-order|튜턴 기사단]]의 명령을 따르라는 포고가 들렸다. 라피크가 꼽은 조사 장소는 동쪽 부두, 북동쪽 예배당, 북쪽 성 요한 문 앞이다.\n\n## 표기\n어쌔신 크리드 II의 한글 자막에서는 '에이커'로 나온다.",
        sources: [...at(AC1_MB3A, 555, [1257, 1263], 1942, 2430), ...at(AC1_MB4A, 196, 243), ...at(AC1_MB4B, 108, [162, 176], 2019, 2956), ...at(AC1_MB5A, 215), ...at(AC1_MB5B, 42, [54, 61], 385, 1077), ...at(AC2_P14, [506, 510], [686, 690])]
      },
      {
        id: "hospitaller", title: "기사단 병원", category: "조직",
        aliases: ["Hospitalier", "호스피탈러"],
        summary: "아크레에 있는 기사단의 병원. 가니에르가 그랜드 마스터로 있었다.",
        body: "## 개요\n어쌔신 크리드 1편 영상의 한글 자막은 [[garnier|가니에르]]를 '기사단 병원의 그랜드 마스터'라고 소개한다. 화면의 수집품 이름은 'Hospitalier Flag'다.\n\n## 병원 안\n흰 옷을 입은 환자들이 마당에 모여 있고, 검은 옷의 수도사들과 경비병이 지킨다. 도망치려던 환자는 붙잡혀 와 다리가 부러졌다. [[altair|알타이어]]는 이곳을 \"치료가 아니라 고통의 장소\"라고 말했다.",
        sources: at(AC1_MB3A, 1242, 2430, 2496, 2583, 2990)
      },
      {
        id: "abul-nuqoud", title: "아불 누쿠드", category: "인물",
        aliases: ["아불", "상인왕", "Abu'l Nuqoud", "다마스쿠스의 상인왕"],
        summary: "다마스쿠스에서 가장 부유한 '상인왕'. 아홉 명의 표적 중 네 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 그를 '다마스쿠스에서 가장 부유한 사람'이라고 소개한다. [[damascus|다마스쿠스]]의 [[rafiq|라피크]]는 '상인왕'이라 부르며, 귀족 구역에서 호화롭게 지낸다고 말한다.\n\n## 소문과 조사\n- 거리에서는 그가 매주 사람들에게 문을 열어 베푼다는 칭송이 들린다.\n- 알타이어가 심문한 사람은 그가 수치심 때문에 숙소에 틀어박혀 지내고, 연회 때만 나와 사람들을 내려다본다고 말한다.\n- 알타이어는 그가 다마스쿠스 사람들의 돈을 빼돌려 사사로이 쓴다고 보고한다.\n\n## 연회\n손님들에게 [[salahuddin|살라딘]]의 전쟁을 지원한 관용에 건배하다가, 수군거림을 다 들었다며 그들을 몰아세운다. 모든 고통은 두려움과 증오에서 나온다고 말하고, \"나는 또 다른 대의에 맹세했다. 모두가 평화롭게 살 새로운 세상\"이라고 외친다. 알타이어의 보고에 따르면 손님들을 독살했다.\n\n## 최후\n[[altair|알타이어]]에게 암살당한다. 자신의 본질 때문에 다스리던 사람들에게 멸시당했고, \"나를 혐오하는 신을 위한 전쟁에 왜 돈을 대야 하지?\"라며 복수가 아니라 양심 때문이었다고 말한다. 누구를 따르느냐는 물음에는 \"때가 되면 알게 될 것이다. 이미 알고 있을지도\"라고 답한다. 또 \"넌 우리를 막을 수 없다. 우리는 새로운 세상을 맞이하게 될 것\"이라는 말을 남긴다.",
        sources: at(AC1_MB4A, 235, 426, 459, 1500, 1740, 1885, 2259, 2273, [2373, 2376], 2509, 2526, [2563, 2575], 2805)
      },
      {
        id: "majd-addin", title: "마아드 아딘", category: "인물",
        aliases: ["Majd Addin", "마이드 아딘", "마이드", "마즈드 아딘"],
        summary: "예루살렘의 섭정. 아홉 명의 표적 중 여섯 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]이 '[[jerusalem|예루살렘]]의 섭정'이라고 소개한다. [[salahuddin|살라딘]]과 [[king-richard|리차드 왕]]이 없는 동안 도시를 다스리는 자들 가운데 하나로, [[nine-targets|표적]]으로 지목되었다.\n\n## 섭정이 되기까지\n[[malik|말릭]]에 따르면 [[salahuddin|살라딘]]이 없는 사이 스스로 예루살렘의 지도자 역할을 맡았고, 공포와 협박으로 원하는 것을 얻는다. 그 자리에 대한 진정한 자격은 없다. 일꾼들은 살라딘 대신 임명된 자들이 하나같이 때 이른 죽음을 맞았고, 결국 한때 서기였던 마아드 아딘에게 자리가 넘어갔다고 수군거린다.\n\n## 공개 처형\n솔로몬 신전 서쪽의 처형대에서 매춘부, 도둑, 도박꾼, 이단자로 몬 사람들을 공개 처형하며 \"모두가 위협받고 있다\"고 외쳤다. 그의 부하에 따르면 처형당하는 자들은 범죄자가 아니라 그와 '그가 함께 일하는 자들'의 계획에 위험한 사람들이었다.\n\n## 최후\n처형대에서 [[altair|알타이어]]에게 암살당한다. \"조직은 도시를 원했고, 나는 권력을 원했다\"며 반체제 인사들이 질서를 어지럽힌다고 했다. 사람들을 죽인 것은 믿음이 달라서가 아니라 \"죽일 수 있어서, 재밌었기에\"였고, \"나는 신과 같았다\"고 말한다.\n\n## 표기\n어쌔신 크리드 1편 영상의 한글 자막에서는 '마이드 아딘'으로 적었다.\n\n## 장례\n예루살렘에서 장례가 치러졌다. 사제는 그가 살해당했다며 범인이 그 자리에 있다고 외쳤다. [[robert-de-sable|로베르]]와 템플 기사단원들이 그를 애도하러 온다는 소문이 돌았다.",
        sources: [...at(AC1_MB4A, 227, 240), ...at(AC1_MB4C, [43, 53], 560, 880, 1169, 1222, 1377, [1396, 1405], 1419, 1431, 1447), ...at(AC1_MB4C, 39), ...at(AC1_MB6A, [1569, 1572], [1805, 1914])]
      },
      {
        id: "william-of-montferrat", title: "몽페라트의 윌리엄", category: "인물",
        aliases: ["윌리엄", "William of Montferrat"],
        summary: "아크레의 섭정. 아홉 명의 표적 중 다섯 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]이 '[[acre|아크레]]의 영주'라고 소개한다. [[salahuddin|살라딘]]과 [[king-richard|리차드 왕]]이 없는 동안 도시를 다스리는 자들 가운데 하나로, [[nine-targets|표적]]으로 지목되었다.\n\n## 아크레의 섭정\n[[king-richard|리차드 왕]]이 전쟁을 하는 동안 섭정으로 임명되었다. 아들 [[conrad|콘래드]]와 리차드의 사이가 나빠, 리차드는 그를 '손님'으로 아크레에 머물게 했다. 알타이어는 이를 인질이라고 불렀다. 광장에서는 \"왕의 덕목에는 윌리엄이 어울린다\"는 연설이 들린다.\n\n## 리차드와의 언쟁\n사라센 포로 3000명을 처리한 일로 리차드에게 \"맹세를 짓밟았다\"는 비난을 듣는다. 리차드가 떠난 뒤 \"새로운 세상에는 저자 같은 사람의 자리가 없을 것\"이라고 중얼거린다.\n\n## 최후\n요새에서 [[altair|알타이어]]에게 암살당한다. 아크레를 아들에게 넘기려 했다는 말은 부정했다. 아들은 멍청이고 리차드는 실체 없는 믿음에 눈이 멀었다며 \"아크레는 그들 누구에게도 속하지 않는다\"고 말한다. 음식을 빼앗고 사람들을 강제로 부린 것은 '새로운 시대'를 준비하게 하려던 것이라고 했다. 마지막으로 알타이어가 도시를 해방하기는커녕 망칠 것이고, 결국 자신을 비난하게 될 것이라는 말을 남긴다.",
        sources: [...at(AC1_MB4A, 227, 243), ...at(AC1_MB4B, 108, 130, 144, 741, 1965, 2022, 2045, [2564, 2571], [2591, 2599], [2633, 2643])]
      },
      {
        id: "salahuddin", title: "살라딘", category: "인물",
        aliases: ["Salah Al'din", "Saladin", "살라후딘"],
        summary: "리차드 왕과 맞서는 쪽의 지도자. 무너진 아르수프 성채에 병력을 모으고 있다.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 [[king-richard|리차드 왕]]의 남진을 살라딘도 분명 알고 있어서, 무너진 아르수프 성채에 병력을 모으고 있다고 말한다. [[altair|알타이어]]가 두 사람을 모두 죽여 전쟁을 끝내자고 하자, 알 무알림은 군대가 흩어져 더 큰 혼란이 올 것이라며 반대한다.\n\n## 언급\n- [[damascus|다마스쿠스]]에는 '살라딘의 성채'가 있다.\n- [[abul-nuqoud|아불 누쿠드]]의 연회 손님들은 살라딘의 전쟁에 돈을 댔다.\n\n아직 직접 등장하지 않았다.\n\n## 기사단의 위협\n알 무알림은 리차드든 살라딘이든 기사단에 반대하는 자는 누구든 파괴될 것이라고 말한다.\n\n## 수석 학자\n[[jubair|주바이르]]는 살라딘의 수석 학자였다.\n\n## 아수프 전투\n리차드에 따르면 결투가 끝난 그 순간에도 살라딘이 부하들을 죽이고 있었다. 알타이어는 살라딘도 이 전쟁이 끝나기를 원할 것이라고 말한다.\n\n## 표기\n일반적인 한국어 표기는 '살라딘'이다. 어쌔신 크리드 1편과 II 영상의 한글 자막에서는 '살라후딘'으로 적었다.",
        sources: [...at(AC1_MB4A, [202, 213], 479, 2261), ...at(AC1_MB4B, [3127, 3129]), ...at(AC1_MB5A, 325), ...at(AC1_MB6B, [1459, 1473], [1508, 1514]), ...at(AC1_MB4A, 202)]
      },
      {
        id: "king-richard", title: "리차드 왕", category: "인물",
        aliases: ["리처드 왕", "King Richard"],
        summary: "아크레에서 승리한 뒤 예루살렘으로 남진을 준비하는 왕.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 리차드 왕이 [[acre|아크레]]의 승리에 힘입어 [[jerusalem|예루살렘]]을 향해 남진할 준비를 하고 있다고 말한다. 알 무알림은 [[salahuddin|살라딘]]과 함께 그를 죽이는 것에 반대했다.\n\n## 언급\n게임 화면의 수집품 'King Richard Flag'에도 이름이 나온다.\n\n## 등장\n아크레에서 [[william-of-montferrat|윌리엄]]과 언쟁을 벌인다. 사라센 포로 3000명이 죽은 일로 그를 꾸짖으며 \"설마 내 왕관이라도 원하는가\"라고 묻고, 싸워야 할 전장이 있다며 떠난다.\n\n## 아수프의 결투\n[[altair|알타이어]]와 [[robert-de-sable|로베르]]가 서로를 고발하자 \"이 판단을 나보다 더 현명한 자의 손에 맡기겠다\"며 결투로 정하게 한다. 결투 후 알타이어와 대화하며, 백성들은 자기들이 원하는 것을 모르기에 우리 같은 자에게 의지한다고 말한다. 살라딘이 그 순간에도 부하들을 죽이고 있다며 전장으로 돌아간다.",
        sources: [...at(AC1_MB3A, 540), ...at(AC1_MB4A, 196, 213), ...at(AC1_MB4B, 1965, 1997, [2017, 2024]), ...at(AC1_MB6B, [955, 1009], [1414, 1431], [1473, 1530])]
      },
      {
        id: "conrad", title: "콘래드", category: "인물",
        aliases: ["Conrad"],
        summary: "몽페라트의 윌리엄의 아들. 리차드 왕과 사이가 나쁘다.",
        body: "## 개요\n[[acre|아크레]]의 [[rafiq|라피크]]에 따르면 [[king-richard|리차드]]와 대부분의 문제에서 의견이 맞지 않는다. 대중 앞에서는 예의를 지키지만 서로에게 악의가 있다는 말이 많다. 아크레의 사라센 포로 거래 이후 티레로 돌아갔다.\n\n## 아버지의 평가\n[[altair|알타이어]]가 [[william-of-montferrat|윌리엄]]이 아크레를 콘래드에게 넘기려 했다고 하자, 윌리엄은 \"내 아들은 왕국은커녕 제 수족도 못 가누는 멍청이\"라고 말한다.\n\n아직 직접 등장하지 않았다.",
        sources: at(AC1_MB4B, [112, 130], [2564, 2571])
      },
      {
        id: "alan-rikkin", title: "앨런 리킨", category: "인물",
        aliases: ["리킨", "Alan Rikkin"],
        summary: "앱스테르고 이메일에 이름이 나오는 인물.",
        body: "## 개요\n이메일로만 등장한다.\n- 레일라 마리노 관련 문의 메일에서 회사 담당자가 그를 참조로 넣었다.\n- [[lucy-stillman|루시]]가 그에게 친구 [[leila-marino|레일라]]에 대한 정보를 요청했다.\n- 그는 [[warren-vidic|비딕]]에게 루시가 또 들쑤시고 있으니 처리하라고 했다.\n\n회사 안에서의 정확한 직책은 아직 나오지 않았다.\n\n## 이메일 원문으로 확인된 것\n- 루시의 메일에 10월 4일까지 자리를 비운다는 자동 답장을 보냈지만, 같은 날 비딕에게 루시를 처리하라는 메일을 따로 보냈다. 비서는 오브리 제이컵스다.\n- 비딕에게 [[desmond|실험체 17]](데스몬드)을 포기하고 다른 실험체를 쓸 수 있다고 압박한다.\n- 실험체 12~16의 기록을 검토한 '분석' 메일을 보내고, \"이해의 아버지께서 성공으로 인도하시길\"이라는 [[templars|템플 기사단]]의 말로 끝맺는다.",
        sources: [...at(AC1_MB3B, 2865), ...at(AC1_MB4C, 1918, 2351), ...at(AC1_MB5B, 2329), ...at(AC1_MS, [2835, 2875], [4184, 4290], [4442, 4485])]
      },
      {
        id: "jubair", title: "주바이르", category: "인물",
        aliases: ["Jubair"],
        summary: "살라딘의 수석 학자. 다마스쿠스의 글을 불태웠다. 아홉 명의 표적 중 일곱 번째로 처단되었다.",
        body: "## 개요\n[[rafiq|라피크]]에 따르면 [[salahuddin|살라딘]]의 수석 학자다. [[al-mualim|알 무알림]]은 그를 [[damascus|다마스쿠스]]에 있는 [[templars|기사단]]원이라고 말한다.\n\n## 분서\n학자들을 조직해 거리에서 빛과 불꽃, 죄 사함, 새로운 세계를 설교하게 했다. 사악한 자들이 만든 거짓 지식이라며 도시의 모든 글을 모아 불태웠고, 반대하는 학자도 죽였다. 알타이어에 따르면 불 속으로 들어간 것은 책만이 아니라 반대하는 자들도였다.\n\n## 주장\n- 사람들은 스스로보다 글에 더 의존하며, 이것이 사람을 나약하고 멍청하게 만든다.\n- 잉크 방울로 쓰인 단어를 의심 없이 믿지만, 누가 왜 그것을 썼는지는 생각하지 않는다.\n- 불꽃으로부터 '하나의 지혜로 다스려지는, 진실과 통합의 시대'가 탄생할 것이다.\n\n## 최후\n[[altair|알타이어]]에게 암살당한다. \"네가 구하려고 애쓴 책들과 내가 다른 게 뭐지?\"라고 묻고, 십자군과 살라딘의 군대를 부추긴 것도 고대 두루마리였다며 \"나 역시 작은 희생을 만들었다\"고 말한다.",
        sources: at(AC1_MB5A, 218, 325, [338, 343], 1561, [1602, 1611], 1647, 1954, [2077, 2099], 2272)
      },
      {
        id: "sibrand", title: "시브란드", category: "인물",
        aliases: ["Sibrand"],
        summary: "튜턴 기사단의 리더. 아크레 항구를 운영했다. 아홉 명의 표적 중 여덟 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]이 남은 [[templars|기사단]]원 두 명 가운데 하나로 꼽은 인물로, [[acre|아크레]]에 있다. [[jubair|주바이르]]가 처단된 뒤 알 무알림은 단 한 사람만이 남았고, 그가 죽으면 [[robert-de-sable|로베르 드 사블레]]가 마침내 상처를 입을 것이라고 말한다.\n\n## 튜턴 기사단의 리더\n아크레 [[rafiq|라피크]]에 따르면 새롭게 [[teutonic-order|튜턴 기사단]]의 리더로 임명되었고, [[venice|베네치아]] 구역에 살며 아크레 항구를 운영한다. 배 100척 가까이를 징발해 해상 봉쇄를 준비했다.\n\n## 공포\n죽음이 다가온다는 사실에 미쳐 가며 공포에 잠식되었다. 부두를 봉쇄하고 그 안에 숨어 배를 기다렸다. 성직자를 암살자로 의심해 죽이며 \"[[william-of-montferrat|윌리엄]]과 [[garnier|가니에르]]는 너무 자신에 차 있어서 목숨을 잃었다\"고 말했다.\n\n## 최후\n[[altair|알타이어]]에게 암살당한다. 죽음 뒤에는 아무것도 없고 \"이 삶이 우리의 전부\"라는 것이 두렵다고 말한다. 자신의 역할은 해상을 봉쇄해 왕과 여왕들이 증원을 보내지 못하게 하는 것이었고, 목적은 사람들을 '신앙의 폭정에서 자유롭게 하는 것'이라고 했다. \"난 명령을 따랐고 대의를 믿었을 뿐이다, 너처럼\"이라는 말을 남긴다.",
        sources: [...at(AC1_MB5A, [212, 215], [2343, 2350], 2438), ...at(AC1_MB5B, 42, 470, [1063, 1069], 1238, [1286, 1293], 1576, [1599, 1617], 1631)]
      },
      {
        id: "teutonic-order", title: "튜턴 기사단", category: "조직",
        aliases: ["Teutonic Order"],
        summary: "시브란드가 리더로 있던 기사단. 아크레 항구를 장악했다.",
        body: "## 개요\n[[acre|아크레]] [[rafiq|라피크]]에 따르면 [[sibrand|시브란드]]가 새롭게 이 기사단의 리더로 임명되었다.\n\n## 아크레에서의 활동\n항구에서는 모든 선박을 비우고 튜턴 기사단의 명령을 따르라는 포고가 들렸다. 영어 음성에 따르면 선장들은 튜턴 기사단 대표에게 출두해 재배치를 받아야 했다.",
        sources: at(AC1_MB5B, 42, 385, 405)
      },
      {
        id: "maria", title: "마리아", category: "인물",
        aliases: ["Maria"],
        summary: "마아드 아딘의 장례에서 로베르 드 사블레 행세를 한 여자.",
        body: "## 개요\n[[majd-addin|마아드 아딘]]의 장례에서 [[robert-de-sable|로베르]]의 갑옷을 입고 대역을 맡았다. 이름은 어쌔신 크리드 1편 영상 업로더의 자막에서 화자 이름 '마리아'로 나온다. 대사 속에서 이름이 불리지는 않는다.\n\n## 알타이어와의 대화\n- 로베르가 도망칠 시간이 필요했고, 기사단은 [[altair|알타이어]]가 올 것을 알았다고 말한다.\n- 로베르는 사라센과 십자군이 힘을 합쳐 [[assassins|암살단]]에 맞서도록 간청하러 [[arsuf|아수프]]로 갔다고 알려 준다.\n- 알타이어가 처치한 '아홉'이 양측의 희생자였으니, 그가 암살단을 공동의 적으로 만들었다고 말한다.\n\n알타이어는 그녀가 표적이 아니라며 살려 준다. \"쫓아올 필요가 없다, 넌 이미 늦었으니\"라는 말을 남긴다. 알타이어는 [[malik|말릭]]에게 \"여자였다. 이상하지, 나도 안다\"며 이 일은 다음에 이야기하자고 한다.\n\n## 데스몬드의 꿈 (어쌔신 크리드 II)\n[[desmond|데스몬드]]가 꾼 꿈에서 [[acre|아크레]]의 탑 꼭대기에 있다가 알타이어와 만나고, 둘은 함께 건초 더미로 떨어진다.",
        sources: [...at(AC1_MB6A, [1976, 1990], [2000, 2018], [2025, 2058], [2297, 2305]), ...at(AC2_P14, [660, 730])]
      },
      {
        id: "arsuf", title: "아수프", category: "장소",
        aliases: ["Arsuf"],
        summary: "로베르 드 사블레가 리차드와 살라딘을 만나러 간 곳.",
        body: "## 개요\n로베르의 대역에 따르면 [[robert-de-sable|로베르]]는 사라센과 십자군이 힘을 합쳐 [[assassins|암살단]]에 맞서도록 간청하러 아수프로 갔다. [[altair|알타이어]]도 그를 쫓아 아수프로 향한다.\n\n## 언급\n어쌔신 크리드 1편 Memory Block 4에서 [[al-mualim|알 무알림]]은 [[salahuddin|살라딘]]이 '무너진 아르수프 성채'에 병력을 모으고 있다고 말했다. 어쌔신 크리드 1편 영상마다 한글 자막 표기가 다르다(아르수프/아수프).\n\n## 결투\n알타이어는 아수프 전장을 뚫고 [[king-richard|리차드 왕]] 앞에 나섰다. 이곳에서 로베르와 결투해 그를 처단했다.",
        sources: [...at(AC1_MB4A, 202), ...at(AC1_MB6A, [2020, 2026], [2386, 2393]), ...at(AC1_MB6B, [834, 902], [1300, 1308])]
      },
      {
        id: "subject-16", title: "실험체 16", category: "인물",
        aliases: ["Subject 16"],
        summary: "데스몬드보다 먼저 애니머스 실험을 받은 것으로 보이는 사람.",
        body: "## 개요\n어쌔신 크리드 1편 엔딩에서 [[desmond|데스몬드]]는 방바닥과 벽에 남은 빛나는 글씨와 그림을 보고, 자신보다 먼저 누가 여기 갇혀 있었는지 묻는다. [[lucy-stillman|루시]]의 보고서는 실험체 16이 '벽의 글씨'를 남겼다고 쓴다.\n\n이름은 아직 나오지 않았다.\n\n## 실험체 17\n데스몬드는 [[animus|애니머스]] 음성에서 '실험체 17'로 불린다.\n\n## 루시의 보고서 (이메일 원문)\n9월 8일 루시가 [[warren-vidic|비딕]]에게 보낸 '실험체 16번' 보고서에 따르면, 애니머스에 오래 노출되어 [[bleeding-effect|혼입 효과]]가 생겼다. 그는 자기 삶과 조상의 삶을 구별하지 못하게 되었고, 그의 방에서 '사건'이 있었다. 그의 조상 하나는 고대 극동의 중요한 사건에 관련된 것으로 보이고, 그가 남긴 벽의 글씨는 일반적인 설명으로는 풀리지 않는다고 한다.\n\n## 다른 실험체\n[[alan-rikkin|리킨]]은 '실험체 12~16'의 애니머스 기록을 검토했다고 쓴다. 실험체 12의 데이터는 필라델피아 프로젝트와 관련이 있다.\n\n## 애니머스 기록 (어쌔신 크리드 II)\n애니머스 화면에 실험체 16의 정보는 '비밀 정보'로 표시된다. 탈출 중 데스몬드는 [[abstergo|앱스테르고]]의 다른 애니머스를 보고 \"16호? [[ezio|에지오]]… 아디…\"라고 중얼거린다.\n\n## 숨겨진 문양 (어쌔신 크리드 II)\n애니머스 2.0에 옮겨진 메모리 코어에 그의 데이터가 들어 있었다. 르네상스 이탈리아 곳곳에 [[glyphs|문양]]을 숨겨 두고, \"우리는 지금까지 속아 왔다\"며 증거를 20개 조각으로 나눠 암호화했다고 말한다. [[rebecca-crane|레베카]]는 앱스테르고 벽에 피로 쓴 징표가 이 문양을 찾으라는 신호였다고 본다.\n\n## 루시가 말한 16호 (어쌔신 크리드 II)\n심할 땐 며칠씩 애니머스 안에 방치되었다. 비딕 박사가 표시해 둔 기록에 따르면 고대 아프리카에서 중동을 거쳐 이탈리아까지 여러 조상을 거쳤고, 마지막에는 이탈리아에 집착했다. 이후 기록 일부는 사라졌다. 데스몬드는 16호가 자기 피로 방을 도배했다고 말한다.\n\n## 열네 번째 문양의 목소리\n기계 속에 갇혀 계속 들어가라고 강요당한다며, 여러 시대의 기억이 뒤섞여 보인다고 말한다. 우리에게 이런 능력이 주어진 건 타고난 핏줄 때문이라고 한다.\n\n## 마지막 문양들의 목소리\n열여덟 번째 문양에서 시대를 넘나드는 고통이 자신을 눌러 온다고 하고, 스무 번째 문양에서는 '루시, 이제 더 기다리는 것은 의미가 없어. 난 떠날 준비가 됐어. 내가 칼을 드는걸 그녀가 보고 있거든'이라고 말한다.\n\n## 앱스테르고 해킹\n네 번째 문양의 목소리는 앱스테르고 중앙 시스템에 들어가는 게 점점 쉬워진다며, 이미 그 시대를 살아 본 것처럼 원하는 자료를 알 수 있다고 말한다.",
        sources: [...at(AC1_MB7, [1290, 1313], 1684), ...at(AC1_MB1, 506), ...at(AC1_MS, [5010, 5020], 4450, 4460), ...at(AC2_P1, [428, 449], [734, 740]), ...at(AC2_P4, [440, 532]), ...at(AC2_P14, [90, 112], [330, 400]), ...at(AC2_P17, [1500, 1570]), ...at(AC2_P31, [860, 880]), ...at(AC2_P7, [873, 878])]
      },
      {
        id: "bleeding-effect", title: "혼입 효과", category: "기술",
        aliases: ["Bleeding Effect", "출혈 효과"],
        summary: "애니머스에 오래 노출되어 조상의 기억과 현실의 기억이 섞이는 현상.",
        body: "## 개요\n[[lucy-stillman|루시]]의 보고서(이메일 원문)에 따르면 [[animus|애니머스]]에 오래 노출되면 유전 구조에 'Bleeding Effect'가 생긴다. 유전 기억과 실시간 기억이 섞여 자기 삶과 조상의 삶을 구별하지 못하게 된다. 어쌔신 크리드 1편 영상의 한글 자막은 '혼입 효과'라고 옮겼다.\n\n## 사례\n- [[subject-16|실험체 16]]이 이 효과로 무너졌고, 그의 방에서 '사건'이 있었다.\n- 루시는 이것이 다중 인격이나 망상 장애와 비슷하며, 전생을 경험한다는 사람들이 자연스럽게 이런 일을 겪는 것일 수 있다고 본다. 증상은 사람마다 달라도 결국 정신을 잃는다고 한다.\n- 어쌔신 크리드 1편 엔딩에서 [[desmond|데스몬드]]가 방의 빛나는 글씨를 본 것도, 업로더 자막은 이 효과 때문으로 추측한다.\n\n## 훈련에 쓰기 (어쌔신 크리드 II)\n[[lucy-stillman|루시]]는 이 효과를 이용하면 데스몬드가 조상 [[ezio|에지오]]가 수년간 익힌 것을 며칠 만에 배울 수 있다고 말한다. 조상의 기억뿐 아니라 기술까지 흘러들어 온다고 한다.\n\n## 루시의 설명 (어쌔신 크리드 II)\n애니머스 안에 너무 오래 있으면 인지능력의 퇴화, 일시적인 환영, 다중 인식 문제가 생기고 실제와 가상을 구분하지 못하게 될 수 있다. 이후 데스몬드는 애니머스 밖에서 이상한 것들을 보고, 잠든 사이 [[altair|알타이어]]가 되는 꿈을 꾼다.\n\n## 에지오의 기술 (어쌔신 크리드 II 엔딩)\n은신처 습격 때 데스몬드는 에지오에게서 익힌 기술로 경비병들을 맨손과 칼로 쓰러뜨린다.",
        sources: [...at(AC1_MS, [5010, 5020]), ...at(AC1_MB7, 1674), ...at(AC2_P1, [880, 910], [1140, 1180]), ...at(AC2_P14, [59, 90], [305, 320], [495, 730]), ...at(AC2_P33, [130, 230])]
      },
      {
        id: "eye-abstergo-satellite", title: "아이-앱스테르고 위성", category: "기술",
        aliases: ["Eye-Abstergo", "위성", "저궤도 송신기"],
        summary: "앱스테르고가 12월 21일로 발사를 미룬 '올인원 통신 위성'. 실제로는 유물을 위한 송신기다.",
        body: "## 겉으로 알려진 것\n[[abstergo|앱스테르고]] 뉴스 메일에 따르면 아이-앱스테르고는 새 올인원 통신 위성을 막판 조정 때문에 12월 21일까지 미뤘고, 이전 세대보다 빠르고 안정적인 데이터 전송을 내세운다. [[alan-rikkin|리킨]]은 이를 '통화 품질 개선' 때문이라고 보도자료를 내겠다고 쓴다.\n\n## 실제 목적\n- [[lucy-stillman|루시]]의 비밀 메일: '유물을 위한 저궤도 송신기'이며 5년 전 조건 반응 실험의 연장이고, 성공하면 그들이 모든 것을 지배한다.\n- 리킨의 '분석' 메일: 위성이 일의 상당 부분을 해 주겠지만, 그 효과에 면역이거나 보호받는 자들은 따로 처리해야 한다.\n- 리킨은 감시가 심해졌으니 21일에 꼭 발사해야 한다고 쓴다.\n\n## DIA 사고\n덴버 국제공항(DIA)의 사고로 적어도 20명이 죽었고, 루시는 그곳을 발사지나 조립지로 본다. 리킨의 메일에서는 'DIA 위성 사고'로 [[temple-treasure|에덴의 조각]] 2번을 잃었다고 한다.",
        sources: at(AC1_MS, [2540, 2577], [3380, 3465], [3640, 3660], [4255, 4290], [4442, 4485])
      },
      {
        id: "ezio", title: "에지오 아디토레 다 피렌체", category: "인물",
        aliases: ["에지오", "에지오 아우디토레", "Ezio Auditore da Firenze", "Ezio"],
        summary: "데스몬드의 조상. 어쌔신 크리드 II에서 애니머스로 따라가는 인물.",
        body: "## 개요\n[[lucy-stillman|루시]]가 [[desmond|데스몬드]]의 훈련을 위해 찾아낸 조상이다. 루시는 에지오의 발자취를 따라가면 그가 했던 모든 것을 배울 수 있다고 말한다. 어쌔신 크리드 II 영상의 게임 한글 자막은 '아디토레'로 적는다.\n\n## 탄생\n아디토레 가문에서 태어났다. 아버지는 그를 안고 \"너는 아디토레 가문의 사내란다. 너는 용사로 태어났어!\"라고 말하고, '에지오 아디토레 다 [[florence|피렌체]]'라는 이름을 지어 준다. 부모의 이름은 어쌔신 크리드 II 영상에서 나오지 않는다.\n\n## 1476년의 에지오\n피렌체에서 형 [[federico|페데리코]]와 어울리며 [[vieri-de-pazzi|비에리 데 파치]] 일당과 싸우고, [[cristina|크리스티나]]를 몰래 찾아가는 혈기 왕성한 청년이다. 아버지는 그런 모습이 젊을 때 자신과 똑같다고 한다. 아버지 일을 도와 [[lorenzo-medici|로렌조 메디치]]에게 서류를 전하고, 은행 일을 배우는 중이다.\n\n## 가족\n[[auditore-family|아디토레 가문]] 문서를 보라.\n\n## 가문의 몰락\n아버지와 형제들이 체포된 뒤 아버지의 숨겨진 상자에서 로브와 검을 꺼내 입는다. 우베르토를 믿고 서류를 맡기지만, 재판에서 배신당해 가족이 처형되는 것을 지켜본다. 이후 반역자의 한패로 쫓긴다.\n\n## 첫 번째 복수\n산타 크로체에서 [[uberto-alberti|우베르토]]를 처단하고, 아디토레 가문은 끝나지 않았다고 외친다. 이후 어머니와 누이를 데리고 [[monteriggioni|몬테리지오니]]의 [[mario-auditore|마리오 삼촌]]에게 향한다.\n\n## 암살자의 길\n몬테리지오니에서 삼촌 마리오에게 아버지가 암살자였다는 사실을 듣고 훈련을 받는다. 처음엔 스페인으로 떠나려 했지만 비에리를 처단하고, [[templars|템플 기사단]]의 수장 [[rodrigo-borgia|로드리고 보르지아]]와 맞서기로 한다. 아버지의 명단을 따라 템플 기사단원들을 처리하겠다고 한다.\n\n## 파치 음모를 막다\n두오모에서 부상한 로렌조 데 메디치를 구해 저택까지 데려가고, 베키오 궁전에서 [[francesco-de-pazzi|프란체스코 데 파치]]를 처단한다.\n\n## 음모자 추적\n로렌조에게서 파치 음모자들의 이름을 듣고, [[leonardo|레오나르도]]에게 독 칼날을 받는다. 몬테리지오니에서 마리오에게 회피를 배운다.\n\n## 음모자 처단\n[[san-gimignano|산 지미냐노]] 일대에서 [[francesco-salviati|살비아티]], [[stefano-da-bagnone|스테파노 다 바뇨네]], [[baroncelli|바론첼리]]를 차례로 처단하며 [[jacopo-de-pazzi|야코포]]의 행방을 캐묻는다.\n\n## 야코포의 최후\n[[antonio-maffei|마페이]]를 처단한 뒤 야코포를 미행해 템플 기사단의 모임을 엿본다. 두건 쓴 인물이 야코포를 찌른 뒤, 병사들과 싸우며 야코포의 최후를 맞이하게 한다.\n\n## 베네치아로 가는 길\n로렌조에게 메디치의 망토를 받고, 레오나르도와 함께 [[venice|베네치아]]로 향하다 습격을 받는다. 레오나르도를 먼저 보내고 혼자 싸운 뒤 포를리에 이른다.\n\n## 카테리나\n통행권이 없어 베네치아행 배를 타지 못하던 중 강둑에 고립된 [[caterina|카테리나]]를 보트로 데려오고, 그녀 덕분에 배에 오를 수 있게 된다.\n\n## 베네치아\n1481년 레오나르도와 베네치아에 도착한다. 화살 맞은 [[rosa|로사]]를 구하고, 도둑 길드의 [[antonio|안토니오]]와 손잡아 [[emilio|에밀리오]]의 배신자들을 처치한다.\n\n## 세타 궁전\n붙잡힌 도둑들을 구출하고, 안토니오와 함께 궁수로 변장해 세타 궁전을 습격한다. 에밀리오 디 파르마를 처단하고 [[carlo-grimaldi|카를로 그리말디]]의 이름을 알아낸다.\n\n## 바바리고 형제의 음모\n카를로 그리말디와 [[silvio-barbarigo|실비오]]를 미행하다가, 바바리고 형제와 두건 쓴 '주군'이 [[mocenigo|몬체니고 도제]]를 독살하려는 계획을 엿듣는다.\n\n## 비행 기계와 두칼레 궁전\n레오나르도의 비행 기계를 타고 불길을 따라 두칼레 궁전으로 날아가지만, 몬체니고 도제는 이미 독살된 뒤였다. 도제 살해 누명을 쓰고, 카를로 그리말디를 처단한 뒤 달아난다.\n\n## 마르코 바바리고\n1486년 축제 기간에 [[teodora|테오도라]]의 도움을 받아 축제 경기를 치르고, [[dante|단테]]에게서 황금 가면을 훔쳐 파티에 들어간다. 도제 [[marco-barbarigo|마르코 바바리고]]를 처단한다.\n\n## 아르세날레\n곧 도제가 될 [[agostino-barbarigo|아고스티노 바바리고]]를 만나고, 실비오에게 맞설 군대를 모으려 [[bartolomeo|바르톨로메오 드 알비아노]]를 찾아가 철창에서 구해 낸다.\n\n## 실비오와 단테\n바르톨로메오의 부하들을 구해 내고, 아르세날레 작전으로 실비오 바바리고와 단테 모로를 처단한다. 실비오가 사이프러스로 떠나려 했다는 사실을 알게 된다.\n\n## 암살단 입단\n1488년, 아버지와 형제들이 죽은 지 10년 되는 생일에 모든 음모가 로드리고 보르지아의 [[vault|지하금고]] 찾기였다는 것을 깨닫는다. 베네치아에서 로드리고와 맞서고, 마리오 일행이 모두 암살자였다는 사실을 알게 된 뒤 [[assassins|암살단]]에 입단한다.\n\n## 포를리\n1488년 [[temple-treasure|에덴의 조각]]을 지키러 포를리로 가지만, [[orsi|오르시 일당]]의 공격을 받는다. 카테리나를 호위하고 요새를 지킨다.\n\n## 빼앗긴 선악과\n1488년 포를리에서 카테리나의 아이들을 구하고 체코 오르시를 처단하지만, 검은 옷의 수도사에게 선악과를 빼앗긴다. 리아리오의 지도를 받고 그 수도사가 사보나롤라라는 단서를 얻는다.\n\n## 1497년 피렌체\n선악과를 되찾으러 피렌체로 돌아와, [[savonarola|사보나롤라]]를 따르는 선동자들을 하나씩 처치한다.\n\n## 선동자 처치\n항구, 논밭, 거리에서 사보나롤라를 따르는 선동자들을 차례로 처치한다.\n\n## 피렌체 시민들에게\n사보나롤라의 화형 뒤 군중 앞에서, 22년 전 바로 이 자리에서 가족이 죽는 걸 봐야 했고 복수심에 빠질 뻔했지만 동료들 덕분에 깨달음의 길을 찾았다고 말한다. 어떤 책이나 스승도 정답을 줄 수 없으니 스스로 길을 개척하라고 연설한다.\n\n## 지하금고와 미네르바\n역사 자료로 지하금고가 로마에 있다는 걸 알아내고 바티칸에 잠입한다. 로드리고를 꺾고도 목숨은 거두지 않으며, 지팡이와 선악과로 지하금고를 열어 [[minerva|미네르바]]를 만난다. 미네르바는 에지오를 통해 데스몬드에게 말을 건넨다.",
        sources: [...at(AC2_P1, [490, 531], [894, 910]), ...at(AC2_P2, [10, 12], [992, 1046], [1525, 1550]), ...at(AC2_P3, [710, 770], [1106, 1131]), ...at(AC2_P5, [581, 615], [967, 1000]), ...at(AC2_P6, [739, 775], [954, 990], [1875, 1921], [2009, 2055]), ...at(AC2_P8, [503, 645], [1196, 1330]), ...at(AC2_P9, [76, 142], [1647, 1715], [1908, 2048]), ...at(AC2_P10, [121, 300], [952, 1042], [1365, 1440]), ...at(AC2_P11, [544, 690], [960, 1190], [1300, 1585]), ...at(AC2_P12, [110, 180], [813, 1155], [1150, 1300]), ...at(AC2_P13, [646, 885]), ...at(AC2_P15, [8, 12], [549, 625], [1669, 1762], [1897, 1930]), ...at(AC2_P16, [135, 720], [1540, 1615], [1726, 1760]), ...at(AC2_P17, [373, 975]), ...at(AC2_P19, [765, 915], [1420, 1460], [1590, 1751]), ...at(AC2_P20, [670, 1680], [2230, 2400]), ...at(AC2_P21, [155, 225], [1400, 1832]), ...at(AC2_P22, [600, 915], [1560, 1931]), ...at(AC2_P23, [28, 200], [1196, 1360], [1640, 1787]), ...at(AC2_P25, [57, 80], [140, 290], [1160, 1466]), ...at(AC2_P26, [160, 870], [985, 1310]), ...at(AC2_P27, [124, 335], [476, 1364]), ...at(AC2_P28, [130, 1790]), ...at(AC2_P29, [1341, 1430]), ...at(AC2_P32, [229, 430], [1829, 2325])]
      },
      {
        id: "shaun-hastings", title: "션 헤이스팅스", category: "인물",
        aliases: ["션", "Shaun Hastings"],
        summary: "암살단의 정보 창고(전자 도서관)를 관리하는 사람.",
        body: "## 개요\n숨은 거처에서 [[lucy-stillman|루시]]를 \"7년 만인가?\"라며 반긴다. [[desmond|데스몬드]]를 '그 악명 높은 17호'라고 부른다.\n\n## 하는 일\n- 정보 창고, 곧 전자 도서관을 관리한다. 데스몬드가 [[animus|애니머스]]에서 사람, 장소, 사건을 만나면 데이터베이스를 만들어 둔다.\n- 다른 암살자들을 전술적으로 지원한다. 그는 \"거기 있는 사람들은 수행하는 임무가 있고, 작은 것 때문에 목숨이 왔다 갔다 한다\"고 말한다.\n\n일을 방해받는 걸 싫어해 데스몬드에게 \"안녕 데스몬드, 꺼져 줄래\"라고 한다.",
        sources: at(AC2_P1, [953, 976], [1000, 1065])
      },
      {
        id: "rebecca-crane", title: "레베카 크레인", category: "인물",
        aliases: ["레베카", "Rebecca Crane"],
        summary: "암살단의 애니머스 2.0을 돌보는 사람.",
        body: "## 개요\n숨은 거처에서 [[desmond|데스몬드]]를 맞는다. [[lucy-stillman|루시]]가 가져온 [[abstergo|앱스테르고]]의 메모리 코어를 받고, 그 데이터로 코드를 합치겠다고 한다.\n\n## 애니머스 2.0\n자신이 돌보는 '공주님'이 [[animus|애니머스]] 2.0이라고 말한다. [[templars|템플 기사단]]은 돈은 훨씬 많아도 열정도 경쟁력도 없어서, 자신이 그들보다 더 좋은 결과물을 더 빨리 뽑아낸다고 자랑한다.\n\n## 노출 수준 프로그램\n애니머스에 새 프로그램을 설치해, [[ezio|에지오]]가 얼마나 노출되어 있는지 익명 수준부터 완전 노출 수준까지 보여 주게 했다.",
        sources: [...at(AC2_P1, [969, 998], [1184, 1220]), ...at(AC2_P5, [1010, 1030])]
      },
      {
        id: "auditore-family", title: "아디토레 가문", category: "조직",
        aliases: ["아디토레", "아우디토레 가문", "Auditore"],
        summary: "에지오가 태어난 피렌체의 가문.",
        body: "## 가족 (1476년)\n- 아버지 [[giovanni-auditore|지오반니]]\n- 어머니 [[maria-auditore|마리아]]\n- 형 [[federico|페데리코]]\n- [[ezio|에지오]]\n- 여동생 [[claudia|클라우디아]]\n- 막내 동생 [[petruccio|페트루치오]]\n\n## 평판\n[[vieri-de-pazzi|비에리 데 파치]]는 \"아디토레 가문은 항상 허풍이 심하지만 말뿐\"이라고 비꼰다. 파치 가문과 사이가 나쁘다.\n\n## 22년 뒤\n에지오는 [[savonarola|사보나롤라]]의 화형 뒤, 딱 22년 전 바로 이 광장에서 가족들이 죽는 것을 봐야 했다고 말한다.",
        sources: [...at(AC2_P2, [427, 432], [1029, 1046], [1213, 1225], [1484, 1500], [1674, 1680], [1812, 1820], [1953, 1960]), ...at(AC2_P29, [1341, 1355])]
      },
      {
        id: "giovanni-auditore", title: "지오반니 아디토레", category: "인물",
        aliases: ["지오반니", "Giovanni Auditore"],
        summary: "에지오의 아버지.",
        body: "## 개요\n[[ezio|에지오]]의 아버지다. 은행 일을 하며 [[lorenzo-medici|로렌조 메디치]]와 서류를 주고받는다. 친구 [[uberto-alberti|우베르토 알베르티]]는 그를 '지오반니'라고 부른다.\n\n## 증인\n어머니 [[maria-auditore|마리아]]에 따르면 [[francesco-de-pazzi|프란체스코 데 파치]]의 혐의에 대한 증거를 가진 유일한 사람이라 증언하게 될 것이다.\n\n## 체포와 처형\n협력자들과 서류를 주고받으며 무언가를 준비하다 체포되어 베키오 궁전 감옥에 갇힌다. 이런 일이 올 줄은 알았지만 이렇게 빠를 줄은 몰랐다고 말한다. 에지오에게 사무실의 숨겨진 상자와 우베르토에게 줄 서류를 맡기지만, 재판에서 우베르토에게 배신당해 [[federico|페데리코]], [[petruccio|페트루치오]]와 함께 처형된다.\n\n## 암살자였던 아버지\n[[mario-auditore|마리오]]에 따르면 지오반니는 암살자였다. 에지오에게는 이를 숨겼다. 그 사건 전까지 동생 마리오와 함께 [[codex|코덱스]] 암호문을 찾아 해독해 왔다.\n\n## 프란체스코를 가둔 일\n[[shaun-hastings|션]]의 데이터베이스에 따르면, 지오반니는 프란체스코가 메디치를 제거하려는 것을 눈치채고 그를 감옥에 가두었다. 하지만 [[templars|템플 기사단]]이 손을 써 풀려났다. 로렌조는 지오반니를 명예와 신의를 아는 좋은 사람이었다고 말한다.",
        sources: [...at(AC2_P2, [992, 1046], [1192, 1241], [1377, 1393]), ...at(AC2_P3, [5, 26], [537, 594], [1053, 1110]), ...at(AC2_P6, [780, 790], [2132, 2145]), ...at(AC2_P8, [617, 627], [700, 712])]
      },
      {
        id: "maria-auditore", title: "마리아 아디토레", category: "인물",
        aliases: ["Maria Auditore"],
        summary: "에지오의 어머니.",
        body: "## 개요\n[[ezio|에지오]]의 어머니다. 화가 [[leonardo|레오나르도]]는 그녀를 '마리아 님'이라 부른다. 레오나르도의 그림을 사러 작업실에 간다.\n\n## 대화\n에지오에게 자신을 표현할 무언가를 찾아보라고 권한다. [[vieri-de-pazzi|비에리]]와 싸운 일을 알고 있으며, [[francesco-de-pazzi|프란체스코 데 파치]]가 사람을 죽일 만큼 나쁜 사람이었는지는 몰랐다고 말한다.\n\n## 체포 이후\n경비들이 집에 들이닥쳤을 때 저항하다 큰 충격을 받는다. 하녀 [[annetta|아네타]]가 [[claudia|클라우디아]]와 함께 자기 언니 집으로 데려간다.\n\n## 침묵\n클라우디아에 따르면 집을 떠난 이후로 한마디도 하지 않는다. 에지오, 클라우디아와 함께 [[florence|피렌체]]를 떠난다.\n\n## 몬테리지오니\n클라우디아에 따르면 여전히 한마디도 하지 않고, 밤낮으로 [[petruccio|페트루치오]]가 모으던 깃털만 보고 있다. 페트루치오의 죽음을 받아들이지 못하는 것 같다.",
        sources: [...at(AC2_P2, [1317, 1393], [1484, 1525]), ...at(AC2_P3, [302, 326]), ...at(AC2_P5, [1242, 1250], [1454, 1495]), ...at(AC2_P6, [1106, 1120])]
      },
      {
        id: "federico", title: "페데리코 아디토레", category: "인물",
        aliases: ["페데리코", "Federico Auditore"],
        summary: "에지오의 형.",
        body: "## 개요\n[[ezio|에지오]]의 형이다. 다리 위 패싸움에 나타나 \"내 어린 동생이 이제 싸우는 법을 배웠나 보러 왔다\"며 함께 싸운다. 여자들과 와인에 돈을 다 써서 치료비도 없다.\n\n## 지붕 위에서\n에지오와 교회 지붕까지 달리기 시합을 하고, 좋은 삶을 살고 있다며 절대 변하지 않기를 바란다.\n\n## 최후\n1476년 아버지, [[petruccio|페트루치오]]와 함께 체포되어 처형된다.",
        sources: [...at(AC2_P2, [155, 175], [265, 274], [532, 607]), ...at(AC2_P3, [281, 300], [1106, 1110])]
      },
      {
        id: "claudia", title: "클라우디아 아디토레", category: "인물",
        aliases: ["클라우디아", "Claudia Auditore"],
        summary: "에지오의 여동생.",
        body: "## 개요\n[[ezio|에지오]]의 여동생이다. 결혼을 약속했던 [[duccio|두치오]]가 바람을 피운다는 소문에 상처받는다. 에지오는 \"넌 그 녀석을 사랑했다고 믿었을 뿐\"이라며 두치오를 찾아간다.\n\n## 체포 이후\n아버지와 형제들이 끌려간 뒤 어머니와 함께 [[annetta|아네타]]의 언니 집으로 피한다.\n\n## 가족의 죽음을 알게 됨\n은신처에서 에지오에게 아버지와 형제들의 소식을 묻고, 그들이 죽었다는 말에 믿지 못한다. 에지오는 어머니를 잘 돌봐 달라고 부탁한다.\n\n## 몬테리지오니\n빌라에 머물기 싫다며 집에 가고 싶어 한다. 어머니가 한마디도 하지 않고 [[petruccio|페트루치오]]가 모으던 깃털만 보고 있다고 에지오에게 털어놓는다.\n\n## 빌라 장부\n삼촌의 지시로 빌라 수리 장부와 금고를 맡는다. 아버지가 계셨으면 책상에서 일하게 하지 않았을 거라며 투덜댄다.",
        sources: [...at(AC2_P2, [1674, 1699], [1778, 1786]), ...at(AC2_P3, [302, 326]), ...at(AC2_P5, [1233, 1305]), ...at(AC2_P6, [710, 715], [1106, 1120]), ...at(AC2_P7, [58, 115])]
      },
      {
        id: "petruccio", title: "페트루치오 아디토레", category: "인물",
        aliases: ["페트루치오", "Petruccio Auditore"],
        summary: "에지오의 막내 동생. 몸이 아프다.",
        body: "## 개요\n[[ezio|에지오]]의 막내 동생이다. 아파서 침대에서 쉬어야 하는데 밖에 나와 있다. 에지오에게 깃털을 모아 달라고 하고, 왜 필요한지는 때가 되면 말해 주겠다고 한다.\n\n## 최후\n1476년 아버지, [[federico|페데리코]]와 함께 체포되어 처형된다.",
        sources: [...at(AC2_P2, [1953, 1960], [2122, 2130]), ...at(AC2_P3, [281, 300], [1100, 1110])]
      },
      {
        id: "cristina", title: "크리스티나", category: "인물",
        aliases: ["Cristina"],
        summary: "에지오가 밤에 몰래 찾아간 여인.",
        body: "## 개요\n[[ezio|에지오]]가 밤에 찾아가 함께 밤을 보낸다. 아침에 그녀의 아버지가 에지오를 발견하고 경비병을 부른다. 형 [[federico|페데리코]]와 아버지도 이 일을 알고 있다.",
        sources: at(AC2_P2, [627, 640], [679, 745], [992, 1010])
      },
      {
        id: "duccio", title: "두치오", category: "인물",
        aliases: ["Duccio"],
        summary: "클라우디아와 결혼을 약속했지만 바람을 피운 남자.",
        body: "## 개요\n[[claudia|클라우디아]]와 결혼을 약속했지만 다른 여자에게 반지를 선물한다. 그 여자의 아버지는 '아디토레보다 훨씬 나은 사람을 찾을 수 있다'고 했다고 한다. [[ezio|에지오]]에게 혼이 난다.",
        sources: at(AC2_P2, [1768, 1829])
      },
      {
        id: "vieri-de-pazzi", title: "비에리 데 파치", category: "인물",
        aliases: ["비에리", "Vieri de' Pazzi"],
        summary: "파치 가문의 젊은이. 아디토레 가문과 앙숙이다.",
        body: "## 개요\n[[auditore-family|아디토레 가문]]의 이름을 모욕하고 불행을 떠넘겼다는 이유로 [[ezio|에지오]] 일당과 패싸움을 벌인다. 에지오의 여동생을 들먹이며 도발한다.\n\n## 아버지\n아버지 [[francesco-de-pazzi|프란체스코 데 파치]]는 사람을 죽인 혐의로 감옥에 있다. 에지오의 어머니는 비에리도 그 일로 괴로울 것이라고 말한다.\n\n## 매복\n[[monteriggioni|몬테리지오니]]로 가는 에지오 가족을 막아서지만 [[mario-auditore|마리오]]에게 쫓겨난다. 이후 에지오 때문에 몬테리지오니를 계속 괴롭힌다.\n\n## 산 지미냐노\n[[san-gimignano|산 지미냐노]]의 성문을 닫고 템플 기사단원들과 계획을 나눈다. 마리오도 동생이 있는 곳으로 보내 주겠다고 한다.\n\n## 최후\n에지오에게 처단된다. 마리오가 그의 몸에서 나온 프라 지오콘도의 편지를 에지오에게 준다. 편지에 따르면 경솔하고 아랫사람을 다치게 했지만, 사실은 아버지의 관심을 받고 싶어 했다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 [[florence|피렌체]]에서 두 번째로 유명한 은행 가문의 막내다. 아버지 돈을 무기와 진귀한 동물과 옷에 탕진했고, 경쟁심이 강해 보트, 승마, 달리기 시합을 모두 조작했다. 혹시라도 지면 상대 가족을 집으로 초대해 저녁을 대접했는데, 그게 승리자와 그 가족의 최후의 만찬이 되곤 했다.\n\n## 연도\n어쌔신 크리드 II 영상에는 비에리 암살 장면에 연도 화면이 나오지 않는다. 나무위키 연표에는 비에리 암살이 1477년의 일로 적혀 있다.",
        sources: [...at(AC2_P2, [55, 98], [670, 690], [1192, 1205], [1356, 1370]), ...at(AC2_P6, [29, 125], [995, 1000], [1703, 1745], [1875, 1921], [2068, 2108]), ...at(AC2_P6, [1022, 1065]), ...at(AC2_P6, [1875, 1900])]
      },
      {
        id: "francesco-de-pazzi", title: "프란체스코 데 파치", category: "인물",
        aliases: ["프란체스코", "Francesco de' Pazzi"],
        summary: "비에리의 아버지. 두오모에서 줄리아노 데 메디치를 죽였고, 에지오에게 처단되었다.",
        body: "## 개요\n[[vieri-de-pazzi|비에리]]의 아버지다. 사람을 죽인 혐의로 감옥에 있다. [[uberto-alberti|우베르토 알베르티]]는 그가 감옥 안에서는 아무것도 할 수 없다며 지오반니를 안심시킨다. [[giovanni-auditore|지오반니]]가 증거를 가진 유일한 사람이라 증언하게 될 것이라고 한다.\n\n## 템플 기사단 (1476년)\n감옥에서 나와 [[san-gimignano|산 지미냐노]]에서 아들 비에리와 함께 [[templars|템플 기사단]] 회합에 참석한 것으로 보인다. 도시 안 병력을 정비해 공격 시점을 정하는 일을 맡는다. [[ezio|에지오]]는 그를 잡으러 [[florence|피렌체]]로 가겠다고 한다. 프라 지오콘도의 편지는 그에게 보낸 것이다.\n\n## 두오모 음모\n성당에서 베르나르도, 두건 쓴 인물 등과 회합하며 두오모 거사를 준비한다. 두건 쓴 인물은 \"내 손자에게 일어났던 일을 벌써 잊었냐\"며 그를 꾸짖는다.\n\n## 두오모의 습격\n두오모에서 [[lorenzo-medici|로렌조]]의 동생 [[giuliano-medici|줄리아노]]를 찔러 죽이고, 로렌조의 가족도 모두 죽이겠다고 외친다.\n\n## 최후\n군대를 이끌고 메디치 저택 후방을 노리다가, 베키오 궁전에서 에지오에게 처단된다. 시신은 궁전에 매달린다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 새로 급부상한 메디치 가문이 세력을 뻗치던 도시에서 귀족으로 성장했지만, 은행에 의해 밀려나는 걸 지켜봐야만 했다. 수백 년간 피렌체를 쥐락펴락했지만 결국 그것마저 잃었다. [[rodrigo-borgia|로드리고 보르지아]]는 그에게 구세주 같았을 것이다. 템플 기사단의 간단한 부탁만 들어주면 중산계급을 영원히 자기 아래에 둘 수 있게 되었는데, 그 부탁은 메디치를 제거하라는 것이었다. 지오반니 아디토레가 눈치채고 그를 감옥에 가두었지만, 템플 기사단이 바로 손을 써서 풀려났다.",
        sources: [...at(AC2_P2, [1192, 1205], [1356, 1393]), ...at(AC2_P6, [1703, 1745], [2050, 2055], [2068, 2108]), ...at(AC2_P7, [2153, 2232]), ...at(AC2_P8, [170, 235], [1196, 1330], [675, 712])]
      },
      {
        id: "uberto-alberti", title: "우베르토 알베르티", category: "인물",
        aliases: ["알베르티", "Uberto Alberti"],
        summary: "지오반니의 친구였지만 재판에서 아디토레 가문을 배신했다. 에지오에게 처단되었다.",
        body: "## 개요\n[[giovanni-auditore|지오반니]]의 친구다. 지오반니는 [[ezio|에지오]]에게 '아빠 친구 우베르토 아저씨'라고 소개하고, 에지오는 '알베르티 장관님'이라고 부른다. [[francesco-de-pazzi|프란체스코 데 파치]]가 감옥에 있으니 걱정 말라며 지오반니를 안심시킨다.\n\n## 배신\n에지오가 가져온 서류를 받고 다음 날 재판에서 아버지와 형제들이 풀려날 것이라고 약속한다. 하지만 재판에서는 서류를 모른다고 잡아떼고, 지오반니와 공범들에게 사형을 선고한다. 지오반니는 그를 반역자라 부르고, 우베르토는 에지오도 한패라며 잡으라고 한다.\n\n## 복수의 표적\n에지오는 [[paola|파올라]]에게 우베르토 알베르티를 제거하러 가야 한다고 말한다. 파올라는 장관이 결코 쉬운 상대가 아니라고 경고한다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 역사책에서는 거의 성인으로 그려진 변호사였다. 그러나 템플 기사단 데이터베이스에는 그가 코시모 데 메디치에게 버림받은 뒤 복수를 별렀고, 그때 [[templars|템플 기사단]]이 나타났다는 기록이 있다. 지오반니의 영향력을 질투했고, 장관직에 오르자 복수를 시작했다.\n\n## 로렌조와의 대화\n산타 크로체 앞에서 [[lorenzo-medici|로렌조]]에게 '저희 쪽'도 보고 배운 게 있다며 위협한다. 로렌조가 파치를 뜻하느냐고 묻자 말을 아낀다.\n\n## 최후\n산타 크로체 회랑에서 베로키오의 작품 공개 행사에 왔다가 에지오에게 암살당한다. 죽기 전 \"결국 너도 똑같은 사람이 되고 말았군\"이라고 말한다.",
        sources: [...at(AC2_P2, [1192, 1241]), ...at(AC2_P3, [870, 942], [1053, 1131]), ...at(AC2_P4, [683, 690]), ...at(AC2_P5, [231, 285], [339, 375], [581, 615])]
      },
      {
        id: "lorenzo-medici", title: "로렌조 메디치", category: "인물",
        aliases: ["로렌조", "로렌조 데 메디치", "Lorenzo de' Medici"],
        summary: "피렌체의 군주. 1449년생이며 메디치 은행을 이끄는 메디치 가문의 수장.",
        body: "## 개요\n[[giovanni-auditore|지오반니]]는 로렌조 메디치가 검토할 서류를 메디치 은행에 가져다 주라고 한다. 1476년 [[ezio|에지오]]가 찾아갔을 때는 카레지 빌라에 가 있어 다음 날이 지나야 돌아온다고 했다.\n\n## 우베르토와의 대화\n산타 크로체 앞에서 [[uberto-alberti|우베르토]]가 그를 '스스로 [[florence|피렌체]]의 군주로 즉위하신 분'이라 비꼬자 그런 적 없다고 답한다. 우베르토가 '저희 쪽'을 말하자 파치를 뜻하느냐고 묻는다.\n\n## 파치의 음모\n파치 쪽은 내일 아침 두오모 미사 중에 메디치 가문을 노린다. [[la-volpe|라 볼페]]는 그들이 성공하면 로렌조를 잃고 피렌체가 파치의 손에 넘어갈 거라고 한다.\n\n## 두오모의 습격\n두오모에서 동생 [[giuliano-medici|줄리아노]]를 잃고 자신도 다친다. 에지오의 도움으로 저택에 피신해, 프란체스코와 그 가족을 모두 멸하리라 다짐한다. 지오반니를 명예와 신의를 아는 좋은 사람이었다고 회상하며, 에지오에게 도시를 구해 달라고 부탁한다.\n\n## 에지오와의 인연\n여섯 살 때 아르노 강에 빠졌다가 구해졌고, 그때부터 아디토레 집안과 좋은 인연이 시작되었다고 회상한다. 음모자들의 이름을 알려 주고, [[francesco-de-pazzi|프란체스코 데 파치]]가 갖고 있던 [[codex|코덱스 페이지]]를 에지오에게 선물한다.\n\n## 데이터베이스\n어쌔신 크리드 II의 데이터베이스 카드에 따르면 1449년생이다. 피렌체 공화국의 꿈을 지키면서도 시민들에게는 극히 최소한의 권한만 허락했으며, 르네상스 시대 피렌체의 황금기 동안 집권했다. 할아버지 코시모는 메디치 은행을 세워 유럽에서 가장 강력한 금융기관으로 키웠다. 어머니는 시인으로, 로렌조를 당대 예술가들에게 소개했다. 1469년 20살에 가문을 이끌게 되어 빠르게 피렌체 정부를 장악했고, 보티첼리와 미켈란젤로의 작품이 그의 보살핌 아래 탄생했다. 1492년 사망했으며, 그때는 거의 빈털터리였고 결국 수도승 [[savonarola|사보나롤라]]가 권력을 차지했다.\n\n## 션의 데이터베이스 (파치 음모)\n[[shaun-hastings|션]]에 따르면 [[stefano-da-bagnone|스테파노 다 바뇨네]]가 로렌조를 뒤에서 찔렀고, [[antonio-maffei|안토니오 마페이]]가 목을 베었다.\n\n## 메디치의 망토\n1480년 파치를 모두 처리했다는 에지오에게 고마워하며, 메디치 가문과 신실한 사이임을 증명하는 망토를 선물한다. 이 망토를 입고 있으면 도시경비대가 협조적일 거라고 한다.",
        sources: [...at(AC2_P2, [1029, 1046], [1107, 1126]), ...at(AC2_P5, [339, 375]), ...at(AC2_P7, [2196, 2210], [2356, 2405]), ...at(AC2_P8, [170, 235], [503, 645]), ...at(AC2_P9, [20, 142], [150, 162], [202, 228]), ...at(AC2_P12, [110, 180])]
      },
      {
        id: "leonardo", title: "레오나르도 다빈치", category: "인물",
        aliases: ["레오나르도", "Leonardo da Vinci", "다빈치"],
        summary: "피렌체의 화가이자 발명가. 에지오의 칼날을 고쳐 주었다.",
        body: "## 개요\n[[maria-auditore|마리아]]는 그를 재능이 아주 뛰어난 사람이라고 한다. [[ezio|에지오]]에게 그림 옮기는 일을 도움받으며, 그림도 좋지만 건축이나 해부학처럼 더 실체적이고 직접적인 일을 하고 싶다고 털어놓는다. 에지오와 또 만나고 싶다고 말한다.\n\n## 그냥 화가가 아니다\n[[paola|파올라]]는 그를 '그냥 화가가 아니'라고 소개한다. 에지오가 가져온 암호 문서를 해독해 아버지의 손목 칼날을 고쳐 주고, 이런 문서를 더 찾으면 가져와 달라고 부탁한다.\n\n## 경비대\n에지오를 만났다는 첩보로 경비대에게 맞지만, 그 학대에는 이미 익숙하다고 말한다. 연구를 위해 시에서 받은 시체들을 작업실에 두고 있다.\n\n## 2년 뒤\n에지오와 2년 만에 다시 만난다. 새 암호문에 담긴 스케치로 손목 보호구를 손봐 검을 막을 수 있게 해 준다. 조수 이름은 빈첸조다. 에지오에게 메르카토 근처 도둑굴을 알려 준다.\n\n## 독 칼날\n새 [[codex|코덱스 페이지]]로 독을 쓸 수 있는 칼날을 만들어 준다. 독이 떨어지면 의사를 찾아가라며, 약도 세게 쓰면 독이 된다고 말한다.\n\n## 베네치아로\n[[venice|베네치아]] 귀족의 부탁으로 초상화를 그리러 작업실을 통째로 베네치아로 옮긴다. 가는 길에 에지오를 만나 사람이 날 수 있는 기구를 만들고 있다고 털어놓는다. 보르지아의 부하들로 보이는 자들이 습격하자 에지오의 말에 따라 먼저 피한다.\n\n## 통행권\n부두에서 에지오와 다시 만나 큰 빚을 졌다고 고마워한다. 통행권이 없어 베네치아행 배에 오르지 못하다가, 에지오가 도운 [[caterina|카테리나]] 덕분에 배를 탈 수 있게 된다.\n\n## 베네치아의 작업실\n1481년 베네치아에 새 작업실을 차린다. 에지오가 가져온 또 다른 암호문을 두 줄의 순서를 바꾸고 왼쪽으로 다시 배열해 해독한다.\n\n## 비행 기계\n사람이 날 수 있는 기계를 만들었지만 실험해 본 적은 없었다. 에지오가 처음 날아 보지만 멀리 가지 못하자, 날개 아래 공기를 데우면 된다며 도시 곳곳에 불을 피워 두칼레 궁전까지 날아가는 방법을 떠올린다.\n\n## 손목 총\n1486년 베네치아에서 에지오가 가져온 도안을 보고, 검이 아니라 총기류에 가까운 아주 작은 손목 장치를 만든다.\n\n## 에덴의 조각\n[[rodrigo-borgia|로드리고]]에게서 빼앗은 물건을 살펴보며, 지구가 태양 주변을 공전하는 이유를 이보다 더 잘 설명할 수는 없을 것 같다고 한다.",
        sources: [...at(AC2_P2, [1484, 1550], [1612, 1621]), ...at(AC2_P4, [1150, 1160], [1211, 1365], [1413, 1455]), ...at(AC2_P7, [589, 645], [726, 760]), ...at(AC2_P9, [1647, 1715]), ...at(AC2_P12, [240, 265], [813, 900], [1150, 1155]), ...at(AC2_P13, [646, 695], [845, 885]), ...at(AC2_P15, [330, 440]), ...at(AC2_P19, [765, 915], [1420, 1460]), ...at(AC2_P20, [71, 100]), ...at(AC2_P25, [16, 30])]
      },
      {
        id: "florence", title: "피렌체", category: "장소",
        aliases: ["피렌체 공화국", "Florence", "Firenze"],
        summary: "에지오가 태어나 자란 도시.",
        body: "## 개요\n어쌔신 크리드 II 시퀀스 1이 시작될 때 화면에 '피렌체 공화국 1476년'이 나온다. [[ezio|에지오]]의 이름 '에지오 아디토레 다 피렌체'도 피렌체에서 따왔다.\n\n## 등장한 곳\n- 메디치 은행\n- [[leonardo|레오나르도]]의 작업실\n- 다리 위 패싸움이 벌어진 곳, 교회 지붕\n\n## 베키오 궁전\n[[auditore-family|아디토레 가문]] 사람들이 끌려간 감옥이 시뇨리아 광장의 베키오 궁전에 있다. 그 앞 광장에서 재판과 처형이 열렸다.\n\n## 사보나롤라의 피렌체 (1497년)\n[[savonarola|사보나롤라]]가 선악과로 지도층을 사로잡아 도시를 장악한다. 다리가 막히고 사람들이 물건을 불에 던지며, 보르지아의 병사들도 들어와 있다.",
        sources: [...at(AC2_P1, [520, 531]), ...at(AC2_P2, 10, [1107, 1126], [1484, 1500]), ...at(AC2_P3, [294, 300], [1053, 1110]), ...at(AC2_P27, [110, 215], [476, 560], [800, 970])]
      },
      {
        id: "annetta", title: "아네타", category: "인물",
        aliases: ["Annetta"],
        summary: "아디토레 가문의 하녀.",
        body: "## 개요\n경비들이 아버지와 형제들을 끌고 간 뒤 [[ezio|에지오]]에게 이를 알린다. 어머니와 [[claudia|클라우디아]]를 자기 언니 집으로 데려간다. [[giovanni-auditore|지오반니]]는 감옥에서 \"아네타가 데려갔느냐\"고 묻는다.\n\n## 언니 파올라\n에지오를 두오모 북쪽에 있는 언니 [[paola|파올라]]의 집으로 안내한다.",
        sources: [...at(AC2_P3, [288, 326], [545, 548]), ...at(AC2_P4, [35, 62], [658, 665])]
      },
      {
        id: "paola", title: "파올라", category: "인물",
        aliases: ["Paola"],
        summary: "아네타의 언니. 에지오에게 섞여들기와 소매치기를 가르쳤다.",
        body: "## 개요\n[[annetta|아네타]]의 언니로, [[ezio|에지오]]의 어머니와 누이를 자기 집에 숨겨 준다. 그냥 '파올라'라고 부르라고 한다.\n\n## 가르침\n우베르토를 죽이러 가겠다는 에지오에게 죽이는 법이 아니라 살아남는 법을 가르쳐 주겠다고 한다. 자기 직업 때문에 신중함이 몸에 뱄다며, 그녀의 사람들을 통해 군중 속에 섞여드는 법과 소매치기를 가르친다.\n\n## 아버지의 유품\n같은 기술로 감옥에서 [[giovanni-auditore|지오반니]]의 검과 손목 보호구를 가져와 에지오에게 준다. 고장 난 장치는 [[leonardo|레오나르도 다빈치]]에게 가져가 보라고 한다. 왜 돕느냐는 물음에 동병상련이라고 답한다.\n\n## 떠나는 길\n우베르토의 위치를 알려 주고, 일이 끝나자 [[florence|피렌체]]를 떠나라고 한다. 수배 벽보를 떼고 포고자에게 뇌물을 주거나 거짓 증언한 관리들을 없애면 자유롭게 떠날 수 있다고 알려 준다. 에지오의 어머니와 누이를 가족처럼 돌보겠다고 약속한다.\n\n## 암살단\n1488년 [[venice|베네치아]]에서 [[rodrigo-borgia|로드리고]]를 놓친 뒤 우리가 원했던 것은 손에 넣었다고 말한다. 에지오는 이때 파올라도 암살자였다는 사실을 알게 된다.",
        sources: [...at(AC2_P4, [645, 720], [1014, 1037], [1105, 1160]), ...at(AC2_P5, [183, 213], [967, 1000]), ...at(AC2_P23, [1596, 1610], [1650, 1660])]
      },
      {
        id: "glyphs", title: "문양", category: "기술",
        aliases: ["글리프", "Glyph", "징표"],
        summary: "실험체 16이 애니머스 속 르네상스 이탈리아 곳곳에 숨겨 둔 표식.",
        body: "## 개요\n[[shaun-hastings|션]]이 르네상스 이탈리아 시대에서 발견한 이상한 징표로, [[rebecca-crane|레베카]]가 데이터베이스에 아이콘으로 표시하고 빛나게 해 두었다. [[ezio|에지오]]가 [[eagle-vision|매의 눈]]으로 살피면 컴퓨터 코드가 나오고, [[animus|애니머스]]에서만 열리는 암호 파일이 열린다.\n\n## 실험체 16의 증거\n[[subject-16|실험체 16]]은 증거를 20개 조각으로 나눠 각각 암호화해 숨겼다. 문양을 모두 찾으면 진실이 보이기 시작할 것이라고 한다.\n\n## 첫 번째 파일 '시작(태초)'\n명화 열 점 가운데 공통점을 가진 다섯 점을 골라내는 퍼즐이다. 화면 안내는 '이 신비로운 장면 중 다섯 장면은 중요한 유사점을 가진다'이다. 비너스의 탄생, 파리의 심판, 헤스페리데스 정원의 헤라클레스 등이 나온다. 풀면 '암호 찾기' 화면이 나온다. 업로더 챕터 제목에 따르면 이 문양은 '라 [[rosa|로사]] 콜타'에서 발견되었다.\n\n## 두 번째 문양\n'과거란 거미줄처럼 짜여진 연결고리들과 서로 연작점으로 이루어져 있다. 모든 것은 우연의 지배를 받고 있다'는 문구로 시작한다. 원형 이미지를 돌려 맞추는 퍼즐이다. 업로더 챕터 제목에 따르면 '산타 크로체'에서 발견되었다.\n\n## 세 번째 문양\n'권력은 절대 사라지지 않아. 전해질 뿐이지'라는 문구로 시작한다. 루즈벨트와 간디 사진 속에서 '남긴 물건'을 찾는 퍼즐이다. 업로더 챕터 제목에 따르면 '[[villa-auditore|빌라 아디토레]]'에서 발견되었다.\n\n## 네 번째 문양\n역사 사진 위에 '그의 벌어진 입은 죽음의 키스를 전한다' 같은 문장이 이어지는 퍼즐이다. 업로더 챕터 제목에 따르면 '메르카토 베키오'에서 발견되었다.\n\n## 다섯 번째 문양\n명화 속 인물들이 지닌 물건을 골라내는 퍼즐로, 'ID: [[temple-treasure|에덴의 조각]] 34 - 지팡이'가 나온다. 업로더 챕터 제목에 따르면 '산 [[lorenzo-medici|로렌조]]'에서 발견되었다.\n\n## 여섯 번째 문양\n제목은 '형제'. 카인 그림 조각을 맞추고 암호 52931을 찾으면 '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 '몬테 올리베토 마지오레'에서 발견되었다.\n\n## 일곱 번째 문양\n명화를 순서대로 고르는 퍼즐로, 'ID: 에덴의 조각 66 - 수의'가 나온다. 업로더 챕터 제목에 따르면 '산타 마리아 아순타'에서 발견되었다.\n\n## 여덟 번째 문양\n니콜라스 2세와 잔 다르크 그림에서 '에덴의 조각 25'를 찾고, 라스푸틴과 퉁구스카 이야기가 나온다. 업로더 챕터 제목에 따르면 '토리 데 살부치'에서 발견되었다.\n\n## 아홉 번째 문양\n제목은 '모자 속임수'. 후디니, 간디, 케네디 사진과 'Dallas TX' 문서가 나오고, 암호 18916을 찾으면 '진실' 영상 조각이 추가된다. 업로더 챕터 제목에 따르면 '오스페달레 델리 이노센티'에서 발견되었다.\n\n## 열 번째 문양\n제목은 '아폴로'. 달 사진, 케네디의 말, 아폴로 11호 사진이 나온다. 업로더 챕터 제목에 따르면 '아바찌아 디 산 메르큐리알레'에서 발견되었다.\n\n## 열한 번째 문양\n니콜라 테슬라의 편지와 사진에서 '에덴의 조각 4'를 찾고 암호 61902를 얻는다. 업로더 챕터 제목에 따르면 '아밤포스토 베네치아노'에서 발견되었다.\n\n## 열두 번째 문양\n제목은 '업계의 거물들'. 에디슨과 헨리 포드의 편지에 PE4가 나온다. 업로더 챕터 제목에 따르면 '질다 데 라드리 디 [[venice|베네치아]]'에서 발견되었다.\n\n## 열세 번째 문양\n제목은 '\"나는 종말, 세계의 파괴자가 되었다\"'. [[abstergo|앱스테르고]]의 '실험 허가' 문서가 나온다. 업로더 챕터 제목에 따르면 '리알토 다리'에서 발견되었다.\n\n## 열네 번째 문양\n제목은 '혈통'. 신과 인간이 만나는 그림들을 고르고, 우리 능력은 타고난 핏줄 때문이라는 말이 나온다. 업로더 챕터 제목에 따르면 '캄파닐레 디 산 마르코'에서 발견되었다.\n\n## 열다섯 번째 문양\n제목은 '경비병'. 그림 고리를 돌려 '모든 폭군들의 죽음으로…'라는 문장을 완성하고, 세계 지도에 여러 역사 인물이 표시된다. 업로더 챕터 제목에 따르면 '산 지아코모 디 리알토'에서 발견되었다.\n\n## 열여섯 번째 문양\n제목은 '십자가'. 니콜라에게 보낸 편지와 퉁구스카 폭발 영상이 나온다. 업로더 챕터 제목에 따르면 '산 피에트로 디 카스텔로'에서 발견되었다.\n\n## 문양이 암시하는 역사\n문양은 현실 역사 뒤에 에덴의 조각과 [[templars|템플 기사단]]이 있었다는 것을 사진과 문장으로 내비친다. 장면으로 직접 보여 주지는 않는다.\n- 1926년 10월 31일 후디니의 죽음: 아홉 번째 문양에서 'RIP: 1926년 10월 31일. 후디니의 무덤' 사진이 '그들이 이 일을 사고처럼 보이도록 꾸몄다'는 문장과 함께 나온다.\n- 1948년 1월 30일 간디의 죽음: 아홉 번째 문양에서 '1946년, 간디' 사진 뒤에 'RIP: 1948년 1월 30일. 간디의 장례행렬' 사진이 나온다.\n- 케네디: 아홉 번째 문양의 'Dallas TX' 문서에 'J.F. 케네디 대통령의 뉴프런티어' 작전과 오스왈드, PE가 나온다. 열 번째 문양에는 케네디의 말이 나온다.\n- [[nikola-tesla|니콜라 테슬라]]: 열한 번째 문양의 편지와 워든클리프 타워 사진, 열여섯 번째 문양의 '니콜라'에게 보낸 편지가 나온다.\n- [[tunguska|퉁구스카]]: 여덟 번째 문양에 '라스푸틴이 퉁구스카에 그것을 가져갔다'는 문장이, 열여섯 번째 문양에 퉁구스카 폭발 영상이 나온다.\n- 잔 다르크와 니콜라 2세: 여덟 번째 문양에서 잔 다르크 그림 속 '에덴의 조각 25'와 '지팡이가 없는 황제는 아무 힘도 없었어'라는 말이 나온다.\n- 에디슨과 헨리 포드: 열두 번째 문양의 편지에 PE4가 나온다.\n- 아폴로 11호: 열 번째 문양에 '아폴로 11호의 사진이 대중에 공개됨'이 나온다.\n- 1945년 5월 2일 벙커: 열일곱 번째 문양의 앱스테르고 문서에 따르면 H는 벙커 안의 대역을 죽이고 에덴의 조각을 가지고 C와 만나기로 했지만 나타나지 않았다. 암호문은 대역이 벙커 안에서 살해당했다고 말한다. H는 1945년 5월 직전 베를린의 벙커와 대역이라는 단서로 보아 아돌프 히틀러로 추정되며, 어쌔신 크리드 위키도 이 문양을 근거로 히틀러가 대역을 죽이고 에덴의 조각을 템플 기사단 연락책에게 넘기려다 벙커를 나서던 중 [[assassins|암살단]]에게 암살되었다고 설명한다. C가 누구인지는 확실하지 않다.\n- 2012년 1월 신경 전달 물질 발견: 열여덟 번째 문양의 기사에 우 박사와 P.J. 트라우네로 박사의 발견이 나온다.\n- 1997년 1월 3일 인공 뼈: 스무 번째 문양의 앱스테르고 편지에 이디오피아의 팀 화이트 원정지 근처에 인공 뼈를 묻겠다는 계획이 나온다.\n\n## 열일곱~스무 번째 문양\n- 열일곱 번째 '벙커': 1945년 5월 2일자 앱스테르고 문서와 'THE DOUBLE WAS KILLED IN THE BUNKER' 암호문이 나온다.\n- 열여덟 번째 '신경 세포의 연접부': '2012년 1월, 사건 1' 기사에 인간의 몸 속에서 진화한 새로운 신경 전달 물질이 나온다.\n- 열아홉 번째 '네 번째 날': 태양을 담은 그림과 태양 사진에서 암호를 찾는다.\n- 스무 번째 '종의 기원': 1997년 1월 3일자 앱스테르고 편지에 인공 뼈를 묻어 진화의 연결고리를 꾸민다는 내용이 나온다.\n\n## 진실\n스무 개의 문양을 모두 풀면 '진실' 영상이 열린다. 기원전의 남자와 여자가 빛나는 공 모양의 물건을 들고 거대한 건물에서 달아나는 장면이다.",
        sources: [...at(AC2_P4, [8, 26], [412, 470], [503, 532], [540, 605]), ...at(AC2_P5, [719, 830]), ...at(AC2_P6, [445, 530]), ...at(AC2_P7, [844, 961]), ...at(AC2_P8, [901, 1091]), ...at(AC2_P10, [548, 935]), ...at(AC2_P11, [30, 275], [820, 953]), ...at(AC2_P12, [584, 790]), ...at(AC2_P13, [140, 355], [910, 1352]), ...at(AC2_P15, [1329, 1620]), ...at(AC2_P17, [1015, 1250], [1500, 1835]), ...at(AC2_P18, [1186, 1387]), ...at(AC2_P22, [422, 528]), ...at(AC2_P12, [600, 650]), ...at(AC2_P31, [367, 520], [635, 956])]
      },
      {
        id: "mario-auditore", title: "마리오 아디토레", category: "인물",
        aliases: ["마리오 삼촌", "마리오", "Mario Auditore"],
        summary: "에지오의 삼촌. 몬테리지오니의 빌라 아디토레에 살며 용병을 거느린 암살자다.",
        body: "## 개요\n[[ezio|에지오]]는 [[florence|피렌체]]를 떠나며 몬테리지오니에 빌라가 있는 마리오 삼촌에게 가겠다고 한다.\n\n## 등장\n[[vieri-de-pazzi|비에리]] 일당에게 막힌 에지오 가족을 구한다. [[monteriggioni|몬테리지오니]]와 [[villa-auditore|빌라 아디토레]]를 안내하고, 에지오에게 싸우는 법을 가르친다. 신앙은 없다고 말한다.\n\n## 암살단\n에지오에게 [[giovanni-auditore|지오반니]]가 암살자였다고 밝히고, [[templars|템플 기사단]]이 해체된 것이 아니라 음지로 숨어들었다고 설명한다. 비에리가 자신들을 괴롭히는 건 그가 기사단이고 자신들이 [[assassins|암살단]]이기 때문이라고 말한다.\n\n## 코덱스\n서재 벽에 형 지오반니와 함께 모은 암호문을 붙여 두고, [[altair|알타이어]]가 남긴 수수께끼를 풀려 한다.\n\n## 성소\n빌라 지하의 [[sanctuary|성소]]를 보여 주며, 증조할아버지가 암살단을 기리려 지은 곳이라고 설명한다. 알타이어의 갑옷을 주고 싶지만 방법을 모른다며, 어릴 적 이탈리아의 [[assassin-tombs|지하 무덤]]을 찾아다녔지만 소용없었다고 한다.\n\n## 회피 훈련\n[[jacopo-de-pazzi|야코포]] 일당의 명단을 받고 사람을 풀어 찾게 한다. 반격만으로는 템플 기사단에게 통하지 않는다며 에지오에게 회피를 가르친다. 부하들에게는 에지오가 직접 처리할 때까지 움직이지 말라고 명령하고, 외곽의 용병들을 데려가라고 한다.\n\n## 베네치아\n1488년 [[venice|베네치아]]에서 [[rodrigo-borgia|로드리고]]와 맞선 에지오를 도우러 나타난다. 자신들도 선지자가 나타나기를 바랐다며, 에지오가 바로 그 선지자일지 모른다고 한다. 해 질 녘 에지오의 암살단 입단식을 이끈다.\n\n## 로마로\n에지오가 [[vault|지하금고]]가 로마에 있다는 걸 알아내자, 소란을 일으켜 에지오가 바티칸에 들어갈 수 있게 돕는다.",
        sources: [...at(AC2_P5, [971, 980]), ...at(AC2_P6, [29, 125], [237, 420], [739, 870], [1192, 1200], [2132, 2205]), ...at(AC2_P7, [345, 438]), ...at(AC2_P9, [1824, 1932], [2017, 2048]), ...at(AC2_P23, [1440, 1460], [1640, 1787]), ...at(AC2_P32, [229, 430])]
      },
      {
        id: "monteriggioni", title: "몬테리지오니", category: "장소",
        aliases: ["Monteriggioni"],
        summary: "마리오 아디토레의 빌라가 있는 마을.",
        body: "## 개요\n[[mario-auditore|마리오]]에 따르면 이곳 사람들은 근면 성실하고, 시장은 물건이 다양하지 않아도 튼튼하고 믿을 만한 물건을 판다. 성당도 있다.\n\n## 피렌체와의 관계\n지금은 [[florence|피렌체]]의 원수지만 다음 해엔 동맹을 맺고, 그다음 해엔 다시 원수가 되는 일이 반복된다고 한다.\n\n## 빌라\n[[villa-auditore|빌라 아디토레]]가 이곳에 있다. 오랜 세력 다툼으로 손볼 곳이 많다.",
        sources: at(AC2_P6, [244, 340])
      },
      {
        id: "villa-auditore", title: "빌라 아디토레", category: "장소",
        aliases: ["Villa Auditore"],
        summary: "몬테리지오니에 있는 아디토레 가문의 빌라.",
        body: "## 개요\n[[mario-auditore|마리오]]에 따르면 지어진 지 거의 200년이 되었고, 온갖 비밀을 간직한 별난 분이던 증조할아버지가 지었다. 눈을 똑바로 뜨고 보면 무언가를 발견할 수 있을지도 모른다고 한다. 꼭대기 층에 [[ezio|에지오]]의 방이 있다.\n\n## 서재와 코덱스 벽\n마리오의 서재 벽에 [[codex|코덱스]] 암호문들이 붙어 있다.\n\n## 재건\n[[claudia|클라우디아]]가 장부와 금고를 맡고, 마리오가 부른 건축가가 상점과 수리를 맡는다. 수리하면 찾는 사람이 늘어 수입이 오른다.\n\n## 성소\n지하에 [[sanctuary|성소]]가 있다.",
        sources: [...at(AC2_P6, [318, 340], [365, 420], [2132, 2145]), ...at(AC2_P7, [58, 115], [173, 233], [345, 380])]
      },
      {
        id: "san-gimignano", title: "산 지미냐노", category: "장소",
        aliases: ["San Gimignano"],
        summary: "비에리 데 파치가 성문을 닫고 지키던 도시.",
        body: "## 개요\n[[vieri-de-pazzi|비에리]]가 성문을 닫고 경비를 세워 두었다. [[mario-auditore|마리오]]와 [[ezio|에지오]]는 경비가 허술한 남쪽 문으로 쳐들어갔다. 이곳에서 [[templars|템플 기사단]]의 회합이 열렸고, 에지오가 비에리를 처단했다.\n\n## 음모자들의 은신처\n파치 음모가 실패한 뒤 대주교 [[francesco-salviati|살비아티]]와 [[baroncelli|베르나르도 바론첼리]]가 이곳에 숨었다가 에지오에게 처단된다. 탑 안에는 '토레 그로싸의 비밀' 무덤이 있다.\n\n## 마페이의 설교\n[[antonio|안토니오]] [[antonio-maffei|마페이]]는 이 지역에서 가장 높은 요새 위에서 \"산 지미냐노의 시민들이여! 회개하라!\"라고 외친다.",
        sources: [...at(AC2_P6, [995, 1000], [1208, 1265], [1703, 1745]), ...at(AC2_P10, [70, 95], [1294, 1320], [2200, 2245]), ...at(AC2_P11, [479, 497], [544, 560])]
      },
      {
        id: "rodrigo-borgia", title: "로드리고 보르지아", category: "인물",
        aliases: ["로드리고", "보르지아", "Rodrigo Borgia"],
        summary: "템플 기사단의 수장. 템플 기사단원들이 '주군'이라 부르는 두건 쓴 인물이다.",
        body: "## 개요\n[[mario-auditore|마리오]]에 따르면 파치 가문을 부하로 두고 있는 스페인 사람으로, 유럽에서 손꼽히는 유력 인사이자 [[templars|템플 기사단]]의 수장이다. [[ezio|에지오]]는 아버지와 형제가 죽은 것도 그 때문이라고 본다. 기회만 되면 에지오의 목숨도 노릴 것이라고 한다.\n\n템플 기사단원들이 '주군'이라 부르는 두건 쓴 인물이 바로 로드리고 보르지아다.\n\n## 파치와의 관계\n[[shaun-hastings|션]]에 따르면 메디치에게 밀려난 [[francesco-de-pazzi|프란체스코 데 파치]]에게 로드리고 보르지아는 구세주 같았을 것이다. 템플 기사단은 메디치를 제거하는 대가로 파치에게 중산계급을 영원히 아래에 둘 수 있게 해 주었다.\n\n## 마차 습격\n[[venice|베네치아]]로 가는 길에 에지오와 [[leonardo|레오나르도]]를 습격한 자들을 두고 로드리고 보르지아의 부하들인 듯하다는 말이 나온다.\n\n## 두건 쓴 '주군'\n템플 기사단원들이 '주군'이라 부르는 두건 쓴 인물로 여러 번 등장한다. 1488년 베네치아에서 에지오가 그를 '로드리고'라고 부르며 맞서면서 같은 인물임이 드러난다. 그 전에도 다음과 같은 단서가 있었다.\n- 마리오는 로드리고가 파치 가문을 부하로 둔 스페인 사람이자 템플 기사단의 수장이라고 했다.\n- 베네치아에서 [[silvio-barbarigo|실비오 바바리고]]가 '그 스페인 분'의 생각을 묻자 [[marco-barbarigo|마르코]]는 직접 물어보라고 하고, 곧 두건 쓴 인물이 나타나 '로마에서 돌아오셨습니까?'라는 인사와 함께 '주군'으로 불린다.\n- 그는 파치가 [[florence|피렌체]] 일을 망쳤다며, 애송이 암살자에게 파치 가문이 무너졌다고 말한다.\n\n## '주군'이 나온 장면\n- 피렌체의 파치 음모 회합을 이끌며, 메디치를 얕보는 프란체스코를 꾸짖고 로마로 돌아가기 전 처리할 일이 있다며 떠난다.\n- [[jacopo-de-pazzi|야코포 데 파치]]가 '주군'이라 부르며 용서를 빌지만, 그를 찌르고 에지오를 병사들에게 맡긴다.\n- [[carlo-grimaldi|카를로 그리말디]]가 [[emilio|에밀리오]]에게 '주군께서 모임을 소집하셨다'며 사흘 후 산토 스테파노에서 모인다고 전한다.\n- 로마에서 돌아와 바바리고 형제와 카를로에게 [[mocenigo|몬체니고]] 도제를 독살하고 마르코를 도제에 앉히라고 지시한 뒤, 다시 로마로 돌아간다.\n\n## 베네치아의 대면\n1488년 사이프러스에서 가져온 상자를 받으러 직접 베네치아에 온다. 배달부로 변장한 에지오가 상자를 건네고 정체를 드러내자, 선지자는 이미 이곳에 와 있다고 말한다. 에지오의 형제들은 죽을 필요도 없었고 템플 기사단을 방해하는 자에게 경고하려던 것뿐이었다고 말하며, [[vault|지하금고]]에 숨겨진 물건은 자신이 차지할 거라고 한다. 결국 달아난다.\n\n## 교황 선출\n어쌔신 크리드 II 현대 파트에서 로드리고 보르지아가 1492년에 교황으로 선출되어, 에지오의 가장 큰 적수가 이탈리아에서 가장 강력한 인물이 되었다는 말이 나온다.\n\n## 교황 알렉산데르 6세\n[[shaun-hastings|션]]의 데이터베이스에 따르면 로드리고 보르지아는 '스페인 어르신'으로 알려진 인물로, 템플 기사단의 이름으로 이탈리아를 통일하려고 너무 많은 피를 흘렸다. 반대하는 자들은 조각조각 내서 죽였고, 기분이 좋을 때는 독살로 깔끔하게 끝내기도 했다. 교황 알렉산데르 6세가 된 뒤에는 템플 기사단에 반대하는 모든 도시와 전쟁을 벌였다. 소문에 따르면 엄청난 수의 첩들이 수레를 타고 바티칸으로 들어갔고, 이 모두가 사생아 루크레치아와의 특별한 관계 때문이었다고 한다. 공개적으로 방탕하게 지내면서도 적들을 뒤에서 조용히 없앴고, 권력에서 밀려날 때를 대비해 템플 기사단의 힘을 키우려 했다.\n\n## 바티칸의 결투\n시스티나 예배당에서 에지오를 찔러 쓰러뜨렸다고 여기지만, 에지오가 다시 일어나 교황의 지팡이와 선악과로 맞선 끝에 진다. 지하금고 앞에서는 맨손 싸움에서도 지는데, 금고 안에 신이 있다며 그 힘을 차지하고 싶었을 뿐이라고 말하고, 교황이 된 것도 금고에 접근하기 위해서였다고 한다. 에지오는 그를 죽이지 않는다.",
        sources: [...at(AC2_P6, [2016, 2035]), ...at(AC2_P8, [690, 705]), ...at(AC2_P12, [891, 900]), ...at(AC2_P11, [1300, 1460]), ...at(AC2_P16, [1572, 1590]), ...at(AC2_P17, [640, 660], [720, 975]), ...at(AC2_P7, [2215, 2232]), ...at(AC2_P23, [1196, 1360], [1460, 1600]), ...at(AC2_P24, [29, 45]), ...at(AC2_P32, [262, 312], [1570, 1720], [1829, 2005])]
      },
      {
        id: "jacopo-de-pazzi", title: "야코포 데 파치", category: "인물",
        aliases: ["야코포", "Jacopo de' Pazzi"],
        summary: "파치 가문을 이끄는 템플 기사단원. 파치 음모가 실패한 뒤 달아났다가, '주군'에게 찔리고 에지오에게 최후를 맞았다.",
        body: "## 개요\n[[templars|템플 기사단]] 회합에서 일이 모두 끝난 뒤 시민들이 동요하지 않게 하라는 역할을 맡는다. [[vieri-de-pazzi|비에리]]의 아버지로 보이는 인물이 회합을 이끄는 장면에서 이름이 불린다.\n\n## 도주\n[[ezio|에지오]]는 가족의 죽음과 [[lorenzo-medici|로렌조]] 습격이 모두 야코포 데 파치의 짓이라고 하지만, 야코포는 체포되기 전에 달아났다. [[mario-auditore|마리오]]도 며칠째 그를 찾고 있었다. 마리오의 부하들은 야코포의 부하들 위치를 찾아낸다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 재력의 상징이었고, 파치 가문을 이끌며 여러 금융 사업에 손을 댔다. 로렌조 데 메디치와는 동업자였고 사적으로는 나쁜 감정이 없었기에, 템플 기사단의 청부업자 4명을 고용해 일을 처리하게 했다. 그 넷은 [[baroncelli|베르나르도 바론첼리]], [[stefano-da-bagnone|스테파노 다 바뇨네]], [[antonio-maffei|안토니오 마페이]], [[francesco-salviati|프란체스코 살비아티]]다.\n\n## 행방의 단서\n살비아티는 그가 에지오가 올 걸 알고 있고 절대 모습을 드러내지 않는다고 한다. 스테파노 다 바뇨네는 '로마의 신들의 그림자가 드리운 곳에서' 만난다고, 바론첼리는 모임이 소집되면 성당에서 모인다고 말한다.\n\n## 최후\n에지오에게 미행당해 옛 기둥들이 선 곳에서 두건 쓴 인물을 '주군'이라 부르며 용서를 빈다. 그 인물은 핑계만 늘어놓는다며 그를 찌르고, 에지오가 암살검으로 최후를 맞이하게 한다. 에지오는 그가 쓴 편지에 [[venice|베네치아]]가 적혀 있었다고 혼잣말한다.\n\n## 연도\n어쌔신 크리드 II 영상에서는 1478년 시퀀스 안에서 최후를 맞지만, 나무위키 연표에는 1480년의 일로 적혀 있다.",
        sources: [...at(AC2_P6, [1703, 1720]), ...at(AC2_P9, [76, 100], [166, 184], [1824, 1840], [2022, 2030]), ...at(AC2_P10, [286, 300], [1030, 1040], [1430, 1436]), ...at(AC2_P11, [1180, 1190], [1300, 1460]), ...at(AC2_P11, [1300, 1310])]
      },
      {
        id: "codex", title: "코덱스", category: "물건",
        aliases: ["코덱스 페이지", "암호문", "Codex"],
        summary: "알타이어가 남긴 암호 문서. 레오나르도 다빈치가 해독한다.",
        body: "## 개요\n[[leonardo|레오나르도 다빈치]]가 해독해 [[ezio|에지오]]의 칼날을 고친 문서처럼, 암호화된 문서들이다. 레오나르도는 이런 문서를 더 찾으면 가져다 달라고 했다.\n\n## 마리오의 코덱스 벽\n[[mario-auditore|마리오]]의 서재 벽에 [[giovanni-auditore|지오반니]]가 찾아 해독한 암호문들이 붙어 있다. 암호문끼리 이어지는 고리가 있어 지도처럼 보인다. 마리오에 따르면 [[temple-treasure|에덴의 조각]]을 가졌던 암살자 [[altair|알타이어]]가 쓴 것으로, 땅 아래 숨겨진 아주 오래되고 강력한 무언가를 알려 주려 했다.\n\n## 손목 보호구\n두 번째로 가져온 암호문은 고대 문자를 잘 활용해 해독이 어려웠다. 암살 기술에 관한 내용과 스케치가 있었고, 레오나르도는 이것으로 손목 보호구를 만들었다.\n\n## 독 칼날\n[[lorenzo-medici|로렌조]]가 준 코덱스 페이지는 지난번과 비슷한 방법으로 해독되었고, 독을 쓸 수 있는 검의 도안이었다.\n\n## 선지자\n마리오가 읽은 새 페이지에는 '오직 선지자만이 그것을 열 수 있다'는 말과 두 개의 에덴의 조각에 대한 이야기가 있다. 이것만으로는 뜻을 알 수 없다고 한다.\n\n## 베네치아의 암호문\n코덱스 페이지는 대부분 아무 때나 모아 레오나르도에게 가져가는 수집품이다. [[venice|베네치아]]의 새 작업실에서 레오나르도는 두 줄의 순서를 바꾸고 왼쪽으로 다시 배열하는 방법으로 새 암호문을 해독한다.\n\n## 두 장의 문서와 예언\n레오나르도가 두 장의 역사 자료 문서를 맞대어 보니 '두 번째 조각을 떠다니는 도시에 가져오면 선지자가 나타날 것이다'라는 문구가 나타났다. 앞서 마리오가 읽은 '선지자만이 그것을 열 수 있을 것이다', '에덴의 조각 2개'와 이어진다.\n\n## 리아리오의 지도\n[[caterina|카테리나]]의 전 남편 지롤라모 리아리오는 역사 자료 문서가 있는 모든 위치를 알아냈다고 자신했다. 카테리나는 [[vault|지하금고]]에는 이 지도 없이 갈 수 없다며 에지오에게 건넨다.\n\n## 손상된 메모리\n역사 자료 일부를 가진 채 메모리 데이터가 손상되어 화면에 '완료되지 않음'이 뜬다는 말이 나온다. 레오나르도는 또 다른 암호문을 반기며 글자를 바꿔 넣는 방법으로 해독한다.\n\n## 세계 지도\n모든 역사 자료를 서재 벽에 맞추자 세계 지도가 드러나고, 지하금고가 로마에 있다는 것과 두 개의 열쇠가 필요하다는 것이 밝혀진다.\n\n## 알타이어의 역사자료 (어쌔신 크리드 II 엔딩)\n모든 역사 자료를 모으면 알타이어가 남긴 글 30쪽을 차례로 볼 수 있다. 2, 3, 10, 12, 15, 23쪽은 문서 없이 그림만 있다.\n- 1쪽: [[al-mualim|알 무알림]]을 없앤 뒤 유물과 씨름한 기록.\n- 4쪽: [[assassins|암살단]]의 세 가지 역설(평화를 추구하지만 암살이 도구이고, 열린 정신을 말하지만 복종을 요구하며, 맹신을 경계하지만 스스로 맹신에 빠진다)과 신조에 대한 물음.\n- 5쪽: 선행 인류는 어떤 존재이고 왜 이곳을 떠났는지, 유물은 남겨진 도구인지 버려진 장난감인지에 대한 물음.\n- 6쪽: [[robert-de-sable|로베르 드 사블레]]가 죽은 뒤의 [[templars|템플 기사단]]과 암살단의 개혁.\n- 7쪽: 아다를 잃은 이야기.\n- 8, 9쪽: 폭력과 진실에 대한 생각. 템플 기사단은 '새로운 세계의 질서'라는 교리로 세상을 재구성하려 하지만, 신조는 죽일 수 없고 언젠가 다시 발견된다.\n- 11쪽: 신화 속 인물들이 에덴의 조각으로 모습만 바뀐 한 사람일지도 모른다는 생각. 알 무알림은 예수가 실존 인물이고 군중 심리를 자극하는 데 뛰어났다고 했다.\n- 13쪽: 암살검 개선. 손가락을 자르지 않아도 되게 하고, 철 보호구를 더했다.\n- 14쪽: 억압받는 이들을 보며 [[masyaf|마시아프]]의 첨탑에서 관용과 평등, 교육을 논한 기록.\n- 16, 17쪽: 선악과 속에서 본 미래의 환영. 하늘까지 솟은 불기둥과 무너진 철탑.\n- 18쪽: 정체를 드러내지 않고 숨어 지내야 하는 이유.\n- 19쪽: 가볍고 강한 방어구를 만들었지만, 원수의 손에 넘어갈까 제조법을 지울지 고민한다.\n- 20쪽: 새로 불거진 유일신 신앙에 대한 비판.\n- 21쪽: 독의 재배와 증류, 독을 쓰는 검의 제작법.\n- 22쪽: 세상은 공처럼 둥글고 아직 발견되지 않은 땅이 많다는 지도.\n- 24쪽: 가족과 알 무알림, 언젠가 가질 아이들에 대한 생각.\n- 26쪽: 선악과를 섬의 숨겨진 금고에 봉인하기로 한다. 언젠가 문이 열리고 메시지가 전해지며 정해진 선지자를 만나게 될 것이라고 적는다.\n- 27쪽: 각지에서 모여든 이들이 첫 번째 신조 '아무 것도 진실이 아니다'를 발견했다는 이야기.\n- 28쪽: 암살검으로 작은 물체를 쏘는 손목 화기를 만들고, 폭약 제작법도 개선했다.\n- 29쪽: 동쪽에서 테무진, 곧 징기스칸의 군대가 몰려오자 그를 막으려 한다.\n- 30쪽: 죽음을 앞두고, 유물을 쓰지 않겠다는 맹세 앞에서 다시 흔들린다.",
        sources: [...at(AC2_P4, [1281, 1343], [1350, 1365]), ...at(AC2_P6, [2132, 2205]), ...at(AC2_P7, [606, 645]), ...at(AC2_P9, [118, 142], [1662, 1680], [1857, 1885]), ...at(AC2_P15, [406, 440]), ...at(AC2_P23, [93, 150]), ...at(AC2_P26, [895, 935]), ...at(AC2_P30, [64, 108]), ...at(AC2_P32, [350, 420]), ...at(AC2_P33, [360, 1228])]
      },
      {
        id: "sanctuary", title: "성소", category: "장소",
        aliases: ["빌라 아디토레 성소", "Sanctuary"],
        summary: "빌라 아디토레 지하에 있는 암살단의 성소.",
        body: "## 개요\n[[mario-auditore|마리오]]에 따르면 증조할아버지가 [[assassins|암살단]]을 기리고 그 비밀을 지키려 지었다. 자유가 위험에 처했을 때 목숨을 아끼지 않고 자유를 수호했던 선대 암살자들의 석상이 있다.\n\n## 알타이어의 갑옷\n가운데에 [[altair|알타이어]]의 갑옷이 있다. 증조할아버지에 따르면 '완전한 때'가 이르기 전까지 열지 못한다.\n\n## 여섯 석상\n이탈리아 전역에 흩어진 [[assassin-tombs|지하 무덤]]에 몇백 년 전 이 여섯 석상이 있었다는 소문이 있다.\n\n## 알타이어의 갑옷 (어쌔신 크리드 II)\n여섯 개의 증표를 모두 모은 [[ezio|에지오]]는 성소에서 알타이어의 갑옷을 얻고, '감사합니다, 알타이어시여. 이 소중한 갑옷이 원수로부터 저를 지키도록 하소서'라고 기도한다.",
        sources: [...at(AC2_P7, [380, 438]), ...at(AC2_P23, [232, 340])]
      },
      {
        id: "assassin-tombs", title: "암살자의 무덤", category: "장소",
        aliases: ["암살단의 무덤", "지하 무덤"],
        summary: "이탈리아 전역에 흩어진 지하 무덤. 성소 석상과 관련된 보물이 있다고 한다.",
        body: "## 개요\n[[mario-auditore|마리오]]는 이탈리아 전역에 흩어진 지하 무덤에 몇백 년 전 [[sanctuary|성소]]의 여섯 석상이 있었고, 그 무덤들에 관련된 보물이 있다는 소문을 들었다고 한다. 어릴 적 찾아다녔지만 찾지 못했다.\n\n## 필수 무덤과 선택 무덤\n'노벨라의 비밀'은 본편 진행 중에 반드시 지나는 무덤이고, 나머지 무덤은 플레이어가 원하는 때에 들를 수 있는 선택 무덤이다. 아래 무덤 순서는 업로더가 플레이한 순서다.\n\n## 노벨라의 비밀\n[[florence|피렌체]]의 지하 납골당에서 첫 무덤을 지난다. [[shaun-hastings|션]]은 그곳 석상이 [[villa-auditore|빌라 아디토레]]에 있던 것과 똑같다며 데이터베이스에 표시해 둔다. 업로더 챕터 제목에 따르면 이 무덤은 '노벨라의 비밀'이고 다리우스의 증표가 있다.\n\n## 일 두오모의 비밀\n두오모 안에서 신부는 일꾼들에게 벽의 그림에서 떨어지고, 돔을 칠할 때 위에 있는 성물들을 건드리지 말라고 당부한다. [[ezio|에지오]]는 성당 안의 비계와 기둥을 높이 타고 올라가 무덤에 이르고 석관을 연다. 업로더 챕터 제목에 따르면 이 무덤은 '일 두오모의 비밀'이고 일타니의 증표가 있다.\n\n## 토레 그로싸의 비밀\n[[san-gimignano|산 지미냐노]]의 탑 안으로 들어가 경비병들을 피하고 쓰러뜨리며 높이 올라가 석관을 연다. 화면에 '토레 그로싸의 비밀' 동기화 완료가 뜬다. 업로더 챕터 제목에 따르면 웨이 유의 증표가 있다.\n\n## 라발디노의 비밀\n포를리의 요새 아래 감옥과 통로를 지나며 경비병을 피하고 장치를 움직여 무덤에 이른다. 업로더 챕터 제목에 따르면 쿼란 갈의 증표가 있다.\n\n## 산 마르코의 비밀\n[[venice|베네치아]]의 산 마르코 대성당 안에서 경비병을 피해 장식과 기둥, 높은 창틀을 타고 오르내리며 길을 찾아 석관을 연다. 업로더 챕터 제목에 따르면 이 무덤은 '산 마르코의 비밀'이고 아뮤넷의 증표가 있다.\n\n## 비지타지오네의 비밀\n베네치아의 비지타지오네 성당 지하로 들어가 무덤을 찾는다. 업로더 챕터 제목에 따르면 이 무덤은 '비지타지오네의 비밀'이고 레오니우스의 증표가 있다.",
        sources: [...at(AC2_P7, [420, 438], [1252, 1260], [2253, 2270]), ...at(AC2_P9, [465, 510], [1225, 1240]), ...at(AC2_P10, [1522, 1560], [2200, 2245]), ...at(AC2_P12, [1558, 1600], [2270, 2320]), ...at(AC2_P18, [126, 1190]), ...at(AC2_P21, [441, 1401])]
      },
      {
        id: "la-volpe", title: "라 볼페", category: "인물",
        aliases: ["볼페", "La Volpe", "여우"],
        summary: "피렌체의 도둑. 이 도시에서 벌어지는 일을 다 안다.",
        body: "## 개요\n[[ezio|에지오]]의 주머니를 털어 달아났다가 붙잡힌다. 살인자, 망나니, 도둑이라 불리지만 그냥 '라 볼페'라고 부르라고 한다. 이 도시에서 벌어지는 일을 다 아는 게 자기 일이라고 한다. [[leonardo|레오나르도]]는 그를 '여우'라 부르며 메르카토 근처 도둑굴에 있다고 알려 준다.\n\n## 도움\n로마에서 온 상인에게 들은 [[francesco-de-pazzi|프란체스코 데 파치]]의 비밀 모임을 알려 주고, 지하 납골당으로 엿들으러 가는 길을 안내한다. 파치가 성공하면 [[lorenzo-medici|로렌조]]를 잃고 [[florence|피렌체]]가 파치의 손에 넘어갈 거라고 걱정한다.\n\n## 암살단\n1488년 [[venice|베네치아]]에서 에지오와 함께 [[rodrigo-borgia|로드리고]]의 경비병들과 싸운다. 에지오는 이때 볼페도 암살자였다는 사실을 알게 된다.",
        sources: [...at(AC2_P7, [745, 760], [1011, 1095], [1220, 1241], [2356, 2405]), ...at(AC2_P23, [1460, 1530], [1650, 1660])]
      },
      {
        id: "giuliano-medici", title: "줄리아노 데 메디치", category: "인물",
        aliases: ["줄리아노", "Giuliano de' Medici"],
        summary: "로렌조의 동생. 두오모에서 프란체스코 데 파치에게 살해되었다.",
        body: "## 개요\n[[lorenzo-medici|로렌조]]의 동생이다. 파치 음모 회합에서는 그가 미사에 빠지지 않게 해야 한다는 말이 나온다.\n\n## 최후\n두오모 앞에서 [[francesco-de-pazzi|프란체스코]]에게 \"배신자 놈\"이라 불리며 공격받고, 살려 달라고 애원했지만 죽임을 당한다.",
        sources: [...at(AC2_P7, [2192, 2200]), ...at(AC2_P8, [170, 200])]
      },
      {
        id: "poliziano", title: "폴리찌아노", category: "인물",
        aliases: ["Poliziano"],
        summary: "로렌조가 저택 문을 열라고 부른 사람.",
        body: "## 개요\n부상한 [[lorenzo-medici|로렌조]]가 저택에 도착해 \"폴리찌아노! 문을 열란 말이다!\"라고 외친다. 저택 안의 사람으로 보이며, 어쌔신 크리드 II 영상에서 더 나오지는 않는다.",
        sources: at(AC2_P8, [590, 600])
      },
      {
        id: "baroncelli", title: "베르나르도 바론첼리", category: "인물",
        aliases: ["바론첼리", "베르나르도", "베르나르도 반디니 디 바론첼리", "Bernardo Baroncelli", "Bernardo"],
        summary: "파치 음모에 가담한 템플 기사단 청부업자. 첫 일격을 맡았고, 산 지미냐노에서 에지오에게 처단되었다.",
        body: "## 개요\n[[lorenzo-medici|로렌조]]가 알려 준 음모자 중 한 명이다.\n\n## 파치 음모의 회합\n성당 회합에서 \"베르나르도\"라는 이름으로 나와, 검, 몽둥이, 도끼, 갑옷, 활까지 다 준비됐다고 보고한다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 이름은 베르나르도 반디니 디 바론첼리다. 사촌들이 유배된 일 때문에 메디치 가문을 증오하며 자랐다. 낮에는 파치의 은행에서 일했지만, 밤에는 템플 기사단원으로 살인도 서슴지 않았다. 파치 음모에서 첫 번째 일격을 맡았다.\n\n## 회합의 베르나르도와 같은 인물\n회합에서는 성 없이 \"베르나르도\"로만 불려서 어쌔신 크리드 II 영상만으로는 직접 확인되지 않는다. 어쌔신 크리드 위키에 따르면 회합에서 무기를 댄 베르나르도가 바로 바론첼리다.\n\n## 도주와 최후\n메디치가 그를 체포했지만 자막에 따르면 '콘스탄티노플레에서 이송 도중에' 탈출해 [[san-gimignano|산 지미냐노]]에 숨었다. 계속 도망치면 된다며 잠잘 곳을 걱정하다가 [[ezio|에지오]]에게 처단된다. 죽기 전 모임이 소집되면 성당에서 모인다고 말한다.\n\n## 연도\n어쌔신 크리드 II 영상에서는 1478년 시퀀스 안에서 처단되지만, 나무위키 연표에는 1479년의 일로 적혀 있다.",
        sources: [...at(AC2_P7, [2164, 2172]), ...at(AC2_P9, [100, 112], [184, 205]), ...at(AC2_P10, [1294, 1320], [1365, 1440]), ...at(AC2_P10, [0, 10])]
      },
      {
        id: "stefano-da-bagnone", title: "스테파노 다 바뇨네", category: "인물",
        aliases: ["스테파노", "바뇨네", "스테파노 다 바노네", "Stefano da Bagnone"],
        summary: "파치 음모에 가담한 템플 기사단 청부업자. 로렌조를 뒤에서 찔렀고, 수도원에서 에지오에게 처단되었다.",
        body: "## 개요\n[[lorenzo-medici|로렌조]]가 알려 준 음모자 중 한 명이다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 악질 중의 악질로, 로마에서 [[templars|템플 기사단]]의 해결사로 훈련받았다. 로렌조 데 메디치를 뒤에서 찌른 사람이다.\n\n## 제의를 입은 이유\n수도원에서 기도하자는 수도사에게 하느님의 존재를 비웃는다. 제의를 입은 건 메디치에게 접근하기 위해서였다고 말한다.\n\n## 최후\n수도원에서 [[ezio|에지오]]에게 처단된다. [[jacopo-de-pazzi|야코포]]의 행방을 묻자 '로마의 신들의 그림자가 드리운 곳에서' 만난다고 답한다.\n\n## 연도\n어쌔신 크리드 II 영상에서는 1478년 시퀀스 안에서 처단되지만, 나무위키 연표에는 1479년의 일로 적혀 있다.",
        sources: [...at(AC2_P9, [100, 112], [202, 214]), ...at(AC2_P10, [952, 1042]), ...at(AC2_P10, [0, 10])]
      },
      {
        id: "antonio-maffei", title: "안토니오 마페이", category: "인물",
        aliases: ["마페이", "Antonio Maffei"],
        summary: "파치 음모에 가담한 템플 기사단원. 로렌조의 목을 베었고, 산 지미냐노에서 에지오에게 처단되었다.",
        body: "## 개요\n[[lorenzo-medici|로렌조]]가 알려 준 음모자 중 한 명이다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 [[florence|피렌체]] 용병대가 악행을 저지른 볼테라 사건의 증인이었다. 마페이는 이를 로렌조의 탓으로 여겨, 복수하려고 [[templars|템플 기사단]]에 들어갔다. 결국 로렌조의 목을 벤 것이 마페이였다.\n\n## 최후\n[[san-gimignano|산 지미냐노]]에서 가장 높은 요새 위에 궁병들을 두고, 시민들에게 회개하라며 성경 구절을 외치고 화살을 쏜다. [[ezio|에지오]]에게 \"물러가라 악마야!\"라고 외치다 처단된다.",
        sources: [...at(AC2_P9, [100, 112], [211, 228]), ...at(AC2_P11, [479, 497], [544, 690])]
      },
      {
        id: "francesco-salviati", title: "프란체스코 살비아티", category: "인물",
        aliases: ["살비아티", "대주교 프란체스코 살비아티", "Francesco Salviati"],
        summary: "파치 음모에 가담한 대주교. 산 지미냐노에서 에지오에게 처단되었다.",
        body: "## 개요\n[[lorenzo-medici|로렌조]]가 알려 준 음모자 중 한 명인 대주교다. [[francesco-de-pazzi|프란체스코 데 파치]]와는 다른 인물이다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 자신이 [[florence|피렌체]]의 다음 대주교가 되리라 굳게 믿었지만, 로렌조는 그에게 협조적이지 않았다. 결국 [[templars|템플 기사단]]의 제안을 받아들였고, 병력을 이끌고 도시로 들어왔다.\n\n## 최후\n[[san-gimignano|산 지미냐노]]의 빌라에 숨어 있다가 [[ezio|에지오]]와 용병들의 습격을 받는다. 죽기 전 [[jacopo-de-pazzi|야코포]]는 에지오가 올 걸 이미 알고 있고 절대 모습을 드러내지 않는다고 말한다.\n\n## 연도\n어쌔신 크리드 II 영상에서는 1478년 시퀀스 안에서 처단되지만, 나무위키 연표에는 1479년의 일로 적혀 있다.",
        sources: [...at(AC2_P9, [100, 112], [226, 241]), ...at(AC2_P10, [70, 95], [121, 300]), ...at(AC2_P10, [0, 10])]
      },
      {
        id: "caterina", title: "카테리나 스포르차", category: "인물",
        aliases: ["카테리나", "카테리나 스포르자", "Caterina Sforza"],
        summary: "밀라노 공작의 딸이자 포를리 성주의 아내. 에지오가 강둑에서 구해 주었다.",
        body: "## 개요\n물 건너편 강둑에 고립되어 도와 달라고 외치던 여인이다. [[ezio|에지오]]가 보트를 저어 데리러 가서 선착장까지 태워 주고, 그녀는 자신을 카테리나라고 소개한다.\n\n## 베네치아행 배\n통행권이 없어 배를 타지 못하던 에지오와 레오나르도가 편안히 갈 수 있도록 말해 둔다. 포를리에 들르면 꼭 한번 대접하고 싶다고 한다.\n\n## 정체\n[[leonardo|레오나르도]]에 따르면 이름은 카테리나 스포르차로, 밀라노 공작의 딸이다. 남편은 포를리의 성주이고, 젊고 아름다운 외모만큼이나 힘 있고 위험한 여인이라고 한다.\n\n## 표기\n어쌔신 크리드 II 영상의 한글 자막에는 '카테리나 스포르자'로 나온다.\n\n## 연도\n포를리에 도착해 카테리나를 구한 장면에는 연도 화면이 따로 나오지 않는다. 시퀀스 6 시작 화면은 '[[florence|피렌체 공화국]] 1480년'이지만, 어쌔신 크리드 위키와 다른 플레이 기록에는 포를리 도착이 1481년으로 적혀 있다.\n\n## 포를리의 성주 부인\n1488년 포를리에서 에지오를 맞이한다. 남편이 다스리던 도시였지만 남편은 이제 세상에 없고, 그를 처음부터 별로였다고 말한다. [[machiavelli|마키아벨리]]에 따르면 남편 지롤라모 리아리오는 [[templars|템플 기사단]]에 협조하고 있었다. [[orsi|오르시 일당]]이 쳐들어오자 성벽 위에서 적들에게 거침없이 맞서고, 아이들 비앙카와 옥타비아노를 걱정한다.\n\n## 아이들\n딸 비앙카와 아들 옥타비아노가 오르시 형제에게 붙잡히자, 협박에는 굴하지 않으면서 에지오에게 아이들을 데려와 달라고 한다. 이후 에지오에게 전 남편 리아리오의 지도를 건넨다.\n\n## 남편의 죽음\n[[shaun-hastings|션]]의 데이터베이스에 따르면 카테리나가 오르시 형제를 고용해 남편 지롤라모 리아리오를 죽였다.",
        sources: [...at(AC2_P13, [695, 885]), ...at(AC2_P14, [10, 35]), ...at(AC2_P14, [16, 23]), ...at(AC2_P12, [6, 10]), ...at(AC2_P25, [140, 290], [340, 540], [1130, 1160]), ...at(AC2_P26, [6, 100], [863, 935], [115, 140])]
      },
      {
        id: "venice", title: "베네치아", category: "장소",
        aliases: ["베네치아 공화국", "Venezia", "Venice"],
        summary: "에지오가 1481년에 도착한 도시.",
        body: "## 개요\n화면에 '베네치아 공화국 1481년'이 나온다. [[leonardo|레오나르도]]는 리알토, 산 마르코, 아르세날레가 있는 아름다운 곳이라고 들뜬다. 알비세는 리알토 다리, 가장 오래된 교회인 산 지아코모 디 리알토, 시장, 세타 궁전을 소개한다.\n\n## 상인들\n알비세에 따르면 [[emilio|에밀리오 디 파르마]]가 상인들을 하나로 연합시키려 했지만 저항이 있었다. 시장에서는 자릿세를 낸 상인도 경비병에게 끌려간다.\n\n## 세타 궁전\n에밀리오 디 파르마의 궁전이었으나, [[antonio|안토니오]]와 도둑들이 점령한다.\n\n## 션의 데이터베이스: 산 마르코 대성당\n[[shaun-hastings|션]]의 데이터베이스에 따르면 산 마르코 대성당은 알렉산드리아에서 훔쳐 온 [[marco-barbarigo|마르코]] 성인의 유해를 보관하려고 828년에 지어졌고, 지금의 비잔틴 양식은 1063년에 완성되었다. 정면의 장식물은 대부분 [[templars|템플 기사단]]이 가져온 것이거나 거상들이 기부한 것이다.",
        sources: [...at(AC2_P12, [879, 890]), ...at(AC2_P15, [8, 12], [108, 330]), ...at(AC2_P16, [1685, 1725]), ...at(AC2_P18, [15, 25])]
      },
      {
        id: "rosa", title: "로사", category: "인물",
        aliases: ["Rosa"],
        summary: "베네치아 도둑 길드의 도둑. 벽타기에 능하다.",
        body: "## 개요\n세타 궁전 벽을 넘다가 화살에 허벅지를 맞는다. [[ezio|에지오]]와 함께 달아나 [[antonio|안토니오]]의 은신처에서 치료받는다. 안토니오는 로사를 딸보다 소중한 아이라고 한다.\n\n## 벽타기\n회복한 뒤 에지오에게 높이 뛰어오르는 벽타기를 가르쳐 달라는 부탁을 받고, 프랑코에게 시범을 보이게 한다.\n\n## 탑 꼭대기 경주\n높이 뛰어오르는 기술로 탑 꼭대기까지 경주하며 에지오를 시험하고, 가르칠 건 다 가르쳤다고 한다. 세타 습격에서는 안토니오가 들어올 수 있게 문을 연다.",
        sources: [...at(AC2_P15, [549, 625], [1200, 1290], [1782, 1897]), ...at(AC2_P16, [723, 855], [1685, 1700])]
      },
      {
        id: "antonio", title: "안토니오", category: "인물",
        aliases: ["Antonio", "안토니오 아저씨"],
        summary: "베네치아 도둑들을 이끄는 인물. 에지오와 손을 잡았다.",
        body: "## 개요\n[[rosa|로사]]가 '안토니오 아저씨'라 부르는 도둑들의 우두머리다. [[florence|피렌체]]와 토스카나에서부터 [[ezio|에지오]]에 대한 소문을 들었다고 한다. 성은 어쌔신 크리드 II 영상에서 아직 나오지 않았다.\n\n## 동맹\n세타 궁전 일로 손해를 입었고, [[emilio|에밀리오]]와 같은 적을 둔 에지오에게 부하들을 도와 달라고 한다. 이후 에밀리오에게 넘어간 배신자들을 처리해 달라고 부탁한다.\n\n## 세타 점령\n에지오와 함께 에밀리오의 궁수들로 변장하고 세타 궁전을 습격해 점령한다. 에밀리오가 사람들에게서 빼앗은 것을 다시 돌려주자고 한다. [[carlo-grimaldi|카를로 그리말디]]가 원로회 중 한 명이라고 알려 준다.\n\n## 출신\n아버지는 구두 수선공, 어머니는 접시나 닦는 시녀였다. 열심히 공부했지만 귀족들은 출신 성분으로 사람을 판단했다고 한다. 진짜 [[venice|베네치아]]의 귀족은 좀도둑, 용병, 창녀인 자기들이라고 말한다.\n\n## 테오도라와 함께\n도르소두로의 [[teodora|테오도라 수녀]] 집에서 에지오를 다시 만난다. 황금 가면을 가진 자를 죽이지 말고 가면만 훔치라고 조언한다.",
        sources: [...at(AC2_P15, [1140, 1310], [1669, 1762], [1897, 1930]), ...at(AC2_P16, [1165, 1215], [1700, 1760]), ...at(AC2_P19, [115, 175]), ...at(AC2_P20, [366, 400], [1700, 1730])]
      },
      {
        id: "emilio", title: "에밀리오 디 파르마", category: "인물",
        aliases: ["에밀리오", "Emilio"],
        summary: "세타 궁전의 주인. 베네치아 상인들을 하나로 묶으려 했고, 에지오에게 처단되었다.",
        body: "## 개요\n알비세에 따르면 세타 궁전이 에밀리오 디 파르마의 집이다. 이곳 상인들을 하나로 연합시키려 했지만 저항하는 세력과 충돌이 있었다.\n\n## 안토니오와의 대립\n[[antonio|안토니오]]는 에밀리오가 궁전 경비를 더 강화할 거라고 한다. 에밀리오는 안토니오의 부하 몇몇을 뇌물과 협박으로 끌어들여 계획을 빼냈다.\n\n## 표기\n어쌔신 크리드 II 영상의 한글 자막에는 '에밀리오 디 파르마'로 나온다.\n\n## 최후\n도둑들에게 붙잡힌 이들을 처형하려다 실패하고, 세타 궁전을 습격당한다. [[carlo-grimaldi|카를로 그리말디]]에게서 주군이 모임을 소집했다는 말을 듣고 달아나려다 [[ezio|에지오]]에게 처단된다. 자신이 원한 건 단결, 안정, 치안뿐이었다고 말한다. [[florence|피렌체]]의 형제들에게 무기를 대고 있었다고 한다.\n\n## 연도\n어쌔신 크리드 II 영상에서는 1481년으로 시작하는 시퀀스 안에서 처단되지만, 어쌔신 크리드 위키는 그의 사망일을 1485년 9월 11일로, 나무위키 연표도 1485년으로 적고 있다.",
        sources: [...at(AC2_P15, [269, 300], [1700, 1720], [1912, 1930]), ...at(AC2_P16, [90, 125], [1540, 1615], [1640, 1660]), ...at(AC2_P16, [1540, 1560])]
      },
      {
        id: "carlo-grimaldi", title: "카를로 그리말디", category: "인물",
        aliases: ["카를로", "Carlo Grimaldi"],
        summary: "베네치아 원로회의 한 사람. 몬체니고 도제를 독살하고 에지오에게 처단되었다.",
        body: "## 개요\n[[antonio|안토니오]]에 따르면 원로회 중 한 명이다. [[ezio|에지오]]는 그가 정부와 관련된 사람 같다고 한다.\n\n## 에밀리오와의 대화\n세타 궁전에서 [[emilio|에밀리오]]에게 암살자가 [[venice|베네치아]]에 와 있다고 경고한다. '주군'께서 모임을 소집했다며, 사흘 후 산토 스테파노에서 모인다고 전한다.\n\n## 도제 독살 계획\n[[mocenigo|몬체니고 도제]]와 가장 가까운 사람으로, 도제의 비위를 맞추려 애쓴다. '주군'의 계획에 따라 도제의 음식에 독을 타는 역할을 맡는다. 도제가 자기 말을 귀담아듣지는 않지만 경계하지도 않는다고 한다.\n\n## 최후\n두칼레 궁전에서 몬체니고 도제가 독이 든 잔을 마시게 한 뒤, 에지오를 살인자로 몰아세운다. 달아나다 에지오에게 처단된다. 죽기 전 우리 같은 사람들은 자신을 위한 최선을 선택할 뿐이라고 말한다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 모나코에서 큰 정치적 야망을 품고 왔고, 베네치아 귀족들에게 귀한 대접을 받으며 믿을 만한 사람으로 알려져 뒷거래에도 끼게 되었다. 원로회의 일원이 된 이야기가 유명하다. 원로회 회장이던 이그나시오 콘타리니의 집에 갔다가 그의 딸을 만났는데, 딸은 정략결혼을 피해 어려서부터 사랑한 하인의 아들과 밀라노로 도망치려 했다. 카를로는 배를 타고 밤에 도망치라고 했지만, 두 사람이 배에 오르자 이그나시오가 갑판에서 기다리고 있었다. 카를로는 콘타리니 가문에 대한 충성심으로 포상까지 받았다.",
        sources: [...at(AC2_P16, [1540, 1600], [1735, 1760]), ...at(AC2_P17, [373, 530], [720, 820]), ...at(AC2_P19, [518, 612], [612, 700], [1590, 1700])]
      },
      {
        id: "marco-barbarigo", title: "마르코 바바리고", category: "인물",
        aliases: ["마르코", "Marco Barbarigo"],
        summary: "몬체니고의 뒤를 이은 템플 기사단의 도제. 축제 밤에 에지오에게 처단되었다.",
        body: "## 개요\n실비오가 '형님'이라 부르고, 실비오를 '동생'이라 부른다. 성은 '바바리고 가문에서 다음 도제가 나오지 않을 수도 있다'는 말에서 나온다. 경호원 [[dante|단테]]를 두었다.\n\n## 도제 자리\n[[silvio-barbarigo|실비오]]와 누가 도제가 될지 다툰다. 두건 쓴 '주군'은 [[mocenigo|몬체니고 도제]]가 죽은 뒤 마르코가 그 자리를 차지하게 하라고 한다. 도제에게 쓸 독으로 칸타렐라를 구하겠다고 한다.\n\n## 도제가 되다\n몬체니고가 죽은 뒤 새 도제가 된다. [[antonio|안토니오]]는 그가 지난번 상대보다 훨씬 강하고 절대 궁전을 떠나지 않는다고 한다. 축제 밤에는 황금 가면을 가진 사람만 들어갈 수 있는 파티를 연다.\n\n## 최후\n축제 파티에서 연설한 뒤 [[ezio|에지오]]에게 처단된다. 아직 때가 이르지 않았다고 외친다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 형인 아고스티노는 위대한 업적으로 유명하지만, 마르코도 [[venice|베네치아]] 역사에 길이 남을 인물이다. 걸음마를 시작할 때부터 엄청난 고집을 부렸다고 전해지고, 원하는 건 뭐든 손에 넣어야 했다. 가문이 사들인 보석과 함선은 모두 마르코의 지시로 구매했다. 아내 카를로타는 원래 자신의 경호원 [[dante|단테 모로]]의 아내였다.\n\n## 동생 아고스티노\n동생 [[agostino-barbarigo|아고스티노]]는 마르코가 보르지아 놈들에게 놀아나더니 자초한 일이라고 말한다.",
        sources: [...at(AC2_P17, [557, 720], [750, 860]), ...at(AC2_P20, [195, 220], [540, 560], [2230, 2400], [230, 262]), ...at(AC2_P21, [170, 185])]
      },
      {
        id: "silvio-barbarigo", title: "실비오 바바리고", category: "인물",
        aliases: ["실비오", "Silvio Barbarigo"],
        summary: "바바리고 가문 사람. 아르세날레에서 에지오에게 처단되었다.",
        body: "## 개요\n[[marco-barbarigo|마르코]]가 '동생'이라 부른다. 마르코와의 관계로 보아 바바리고 가문 사람이다. [[carlo-grimaldi|카를로]]와 함께 다니며 도제를 끌어들이는 일을 재촉한다.\n\n## 도제 자리\n전체 작전을 계획한 사람이 도제 자리를 맡아야 한다며 형 마르코와 다툰다.\n\n## 축제의 경기\n축제 결투에서 [[dante|단테]]를 보내 [[ezio|에지오]]를 쓰러뜨리게 하고, 미리 손을 써 황금 가면이 단테에게 가게 한다.\n\n## 아르세날레\n마르코가 죽은 뒤 200명이 넘는 용병을 끌고 아르세날레로 쳐들어가고, 전체 군대를 주무를 권력을 갖고 있다. 부하들을 보내 [[bartolomeo|바르톨로메오]]를 잡아 가둔다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 부유한 상인의 아들로, 아버지가 가문의 재산을 상속받지 못하게 되면서 정치판에 등장했다. 그때부터 자신의 아버지를 죽인 삼촌을 위해 일해야 했다. 설득의 대가였던 실비오는 곧 삼촌의 조언자가 되었고, 소란조 가문이 바바리고 가문을 상대로 꾸민 음모를 미리 알아챘다. 그는 부활절 축하 파티를 열어 소란조 가문 사람들을 초대하고, 정원에 아이들을 위한 인형극을 마련한 뒤 부모들을 지붕으로 데려가 건배하는 척하며 장문마다 배치해 둔 궁병들에게 신호를 보냈다. 그 뒤 소란조 가문은 바바리고 가문에 덤빌 생각을 하지 못했다. 10년쯤 지나 실비오는 삼촌의 집을 차지했다. 역사책에는 삼촌이 침대에서 죽었다고 나온다.\n\n## 최후\n아르세날레에서 에지오의 가족을 조롱하다가 배를 타고 달아나려 한다. 배 위에서 에지오에게 처단되며, 도제 자리는 위장이었고 사이프러스가 목적지였다고 말한다.",
        sources: [...at(AC2_P17, [373, 530], [600, 690]), ...at(AC2_P20, [1500, 1645]), ...at(AC2_P21, [195, 215], [1435, 1445], [228, 300]), ...at(AC2_P22, [1560, 1720], [1720, 1860])]
      },
      {
        id: "dante", title: "단테 모로", category: "인물",
        aliases: ["단테", "Dante Moro"],
        summary: "마르코 바바리고의 경호원. 원래 도시경비대장이었다.",
        body: "## 개요\n[[marco-barbarigo|마르코]] 일행에게 누군가 쫓고 있다고 알린다. 마르코는 두 번이나 자기 목숨을 살린 친구로, 말수가 없는 걸 빼면 훌륭한 젊은이라고 한다.\n\n## 황금 가면\n축제 경기에서 [[silvio-barbarigo|실비오]]의 지시로 [[ezio|에지오]]와 싸우고, 실비오가 미리 손을 써 황금 가면의 주인으로 발표된다. 파티로 가던 중 에지오에게 가면을 도둑맞는다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 단테 모로는 도시경비대장이었고, [[venice|베네치아]]에서 명망 있는 가문의 독자였다. 마르코와 가까운 친구였지만, 마르코는 단테의 아내 카를로타를 탐냈다. 가톨릭 교리상 이혼할 수 없어 남편이 죽어야 했기에, 마르코는 단테를 죽이기로 한다. 단테는 몸에 세 번, 머리에 한 번 칼에 찔리고도 살아남았지만 뇌를 크게 다쳐 유아 수준의 지능을 갖게 되었다. 마르코는 친구의 아내를 얻고 단테를 영원히 자신의 노예로 두었다.\n\n## 최후\n아르세날레에서 실비오를 지키다가, 실비오에 이어 에지오에게 쓰러진다.",
        sources: [...at(AC2_P17, [686, 720]), ...at(AC2_P20, [1500, 1645], [1680, 1730], [258, 310]), ...at(AC2_P22, [1560, 1580], [1840, 1880])]
      },
      {
        id: "mocenigo", title: "몬체니고", category: "인물",
        aliases: ["몬체니고 도제", "도제", "Mocenigo"],
        summary: "베네치아의 도제. 카를로 그리말디에게 독살되었다.",
        body: "## 개요\n[[venice|베네치아]]의 도제다. [[carlo-grimaldi|카를로 그리말디]]가 가장 가까이 지내지만, 카를로의 말을 귀담아듣지 않는다고 한다.\n\n## 독살 계획\n두건 쓴 '주군'은 몬체니고 도제를 오늘 밤 없애고 [[marco-barbarigo|마르코 바바리고]]를 그 자리에 앉히려 한다. 카를로가 도제의 음식에 칸타렐라를 타기로 한다.\n\n## 표기\n어쌔신 크리드 II 영상의 한글 자막 표기 '몬체니고'를 따랐다.\n\n## 죽음\n두칼레 궁전에서 카를로 그리말디가 건넨 독이 든 잔을 마시고 죽는다. [[ezio|에지오]]가 마시지 말라고 외쳤지만 이미 늦었다.\n\n## 연도\n어쌔신 크리드 II 영상에는 독살 장면에 연도 화면이 나오지 않는다. 나무위키 연표에는 몬체니고 독살이 1485년의 일로 적혀 있다.",
        sources: [...at(AC2_P17, [400, 470], [740, 860]), ...at(AC2_P19, [1590, 1640]), ...at(AC2_P19, [1590, 1600])]
      },
      {
        id: "teodora", title: "테오도라", category: "인물",
        aliases: ["테오도라 수녀", "Teodora"],
        summary: "베네치아 도르소두로의 수녀. 기녀 집을 운영한다.",
        body: "## 개요\n[[leonardo|레오나르도]]가 '수녀'라고 소개하며, '뭐, 수녀라고 부를 수도 있겠지'라고 덧붙인다. 도르소두로 구에서 기녀들을 거느린 집을 운영하고, [[antonio|안토니오]]와 아는 사이다.\n\n## 믿음\n자신은 이미 주님과 결혼했다고 말한다. 어린 시절 교회에 끌렸지만 신을 머리 속에만 두는 사람들에게 환멸을 느꼈고, 구원을 얻으려면 사랑하는 법부터 배워야 한다며 자신만의 교회를 만들었다고 한다.\n\n## 황금 가면\n[[marco-barbarigo|마르코]]의 축제 파티에 들어가려면 황금 가면이 필요하다고 알려 주고, 축제 경기와 가면 훔치기에서 기녀들로 [[ezio|에지오]]를 돕는다.\n\n## 암살단\n1488년 [[rodrigo-borgia|로드리고]]와의 싸움 뒤 [[mario-auditore|마리오]] 일행과 함께 모인 자리에 있다.",
        sources: [...at(AC2_P20, [200, 220], [366, 670], [1680, 1730]), ...at(AC2_P23, [1600, 1660])]
      },
      {
        id: "agostino-barbarigo", title: "아고스티노 바바리고", category: "인물",
        aliases: ["아고스티노", "Agostino Barbarigo"],
        summary: "마르코 바바리고의 동생. 마르코가 죽은 뒤 도제가 될 사람이다.",
        body: "## 개요\n[[antonio|안토니오]]가 [[ezio|에지오]] 덕분에 곧 [[venice|베네치아]]의 도제가 될 사람이라고 소개한다. 형 [[marco-barbarigo|마르코]]의 죽음에 대해서는 보르지아 놈들에게 놀아나더니 자초한 일이라고 말한다. [[shaun-hastings|션]]의 데이터베이스는 아고스티노가 위대한 업적으로 유명하다고 한다.\n\n## 승계\n40인회가 아직 그의 승계를 인정하지 않았고, [[silvio-barbarigo|실비오]]가 군대를 주무르고 있어 직권으로 그를 끌어내리지 못한다. 대신 에지오에게 [[bartolomeo|바르톨로메오 드 알비아노]]를 찾아가라고 한다.",
        sources: [...at(AC2_P20, [230, 240]), ...at(AC2_P21, [155, 225])]
      },
      {
        id: "bartolomeo", title: "바르톨로메오 드 알비아노", category: "인물",
        aliases: ["바르톨로메오", "Bartolomeo d'Alviano"],
        summary: "실비오 바바리고에게 원한이 많은 용병대장. 에지오가 철창에서 구해 주었다.",
        body: "## 개요\n[[agostino-barbarigo|아고스티노]]에 따르면 그와 그의 부하들은 [[silvio-barbarigo|실비오]]에게 쌓인 게 많고, 아르세날레 남쪽 군사 지역에 산다.\n\n## 철창 속의 전사\n실비오의 부하들에게 잡혀 철창에 갇혀 있으면서도, 손을 묶어도 너희쯤은 문제없다며 병사들에게 욕설을 퍼붓는다. 실비오를 조종하는 자가 누군지 안다고 하며, 그 얍삽한 녀석을 오래전부터 상대해 왔다고 말한다. [[ezio|에지오]]가 풀어 주자 함께 실비오의 병사들과 싸운다. 막사로 가면서 '비앙카는 아무 일 없겠지?'라고 걱정한다.\n\n## 비앙카\n바르톨로메오가 걱정하던 '비앙카'는 그의 검이다. 막사로 돌아와 검을 되찾고 '오, 내 사랑!'이라며 반긴다.\n\n## 아르세날레\n부하들을 되찾은 뒤 에지오와 함께 아르세날레 작전을 세운다. 실비오를 해치운 뒤 군사 지역을 되찾는다.\n\n## 베네치아의 싸움\n1488년 [[venice|베네치아]]에서 에지오와 함께 [[rodrigo-borgia|로드리고]]의 경비병들과 싸운다. 비앙카가 오늘 엄청 배가 고픈 모양이라고 외친다.",
        sources: [...at(AC2_P21, [210, 225], [1400, 1832]), ...at(AC2_P22, [4, 35], [915, 965], [1860, 1900]), ...at(AC2_P23, [1490, 1500])]
      },
      {
        id: "machiavelli", title: "니콜로 마키아벨리", category: "인물",
        aliases: ["마키아벨리", "니콜로 디 베르나르도 데이 마키아벨리", "Niccolò Machiavelli"],
        summary: "암살단의 일원. 1488년 베네치아에서 에지오 앞에 처음 정체를 밝혔다.",
        body: "## 개요\n자신을 '니콜로 디 베르나르도 데이 마키아벨리'라고 소개하며, 인류의 발전을 수호하도록 훈련받은 [[assassins|암살단]]의 일원이라고 밝힌다.\n\n## 선지자\n선지자가 나타나지 않았다는 [[ezio|에지오]]에게, [[mario-auditore|마리오]]와 함께 에지오가 바로 우리가 쫓던 선지자일지도 모른다고 한다.\n\n## 포를리\n에지오에게 [[temple-treasure|에덴의 조각]]을 포를리 요새로 가져가 지키라고 한다. 지롤라모 리아리오가 [[templars|템플 기사단]]을 위해 나머지 역사 자료 문서들의 위치를 지도로 만들고 있었다고 알리고, [[orsi|오르시 일당]]이 노리는 것은 그 지도일 거라고 본다.\n\n## 포를리의 함정\n오르시 형제의 아이 납치가 방심하게 만들려는 함정이었고, 체코 오르시가 선악과를 가져갔다고 에지오에게 알린다.\n\n## 1497년 피렌체\n[[savonarola|사보나롤라]]가 선악과로 [[florence|피렌체]] 지도층을 사로잡았다고 에지오에게 알린다. 에지오가 선동자들을 처치하는 동안 [[la-volpe|라 볼페]], [[paola|파올라]]와 함께 시민운동을 조직하기로 한다.",
        sources: [...at(AC2_P23, [1630, 1660]), ...at(AC2_P25, [57, 80], [195, 215], [268, 280]), ...at(AC2_P26, [690, 720]), ...at(AC2_P27, [124, 335])]
      },
      {
        id: "orsi", title: "오르시", category: "인물",
        aliases: ["오르시 형제", "오르시 일당", "Orsi"],
        summary: "체코와 루도비코 오르시 형제. 1488년 포를리를 공격했다.",
        body: "## 개요\n[[caterina|카테리나]]에 따르면 그녀의 남편을 죽이는 일을 맡았던 자들이다. [[ezio|에지오]]는 오르시 같은 소인배들이 이런 일에 낄 이유가 없다며 배후에 스페인 놈([[rodrigo-borgia|로드리고 보르지아]])이 있다고 본다. [[machiavelli|마키아벨리]]는 그들이 노리는 것이 리아리오의 지도일 거라고 한다.\n\n## 협박과 최후\n카테리나의 아이들을 붙잡고 리아리오의 지도와 선악과를 요구한다. 루도비코 오르시는 등대에서 옥타비아노를 인질로 잡다 에지오에게 쓰러지고, 체코 오르시는 선악과를 빼앗아 달아났다가 에지오에게 처단된다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 체코와 루도비코 오르시는 시골의 조용한 삶이 지겨워 대부업을 시작했는데, 빌린 돈을 갚지 않으면 그냥 죽여 버려 크게 성공했다. 카테리나 스포르차가 템플 기사단원이던 남편 지롤라모 리아리오를 청부살인하려고 이 형제를 고용했고, 형제는 말을 타고 집으로 가서 남편의 가슴을 찌르고 집안을 털어 시신을 시내 중심가에 버렸다. [[abstergo|앱스테르고]]의 자료에 따르면 로드리고 보르지아는 [[venice|베네치아]]에서 탈출한 뒤 [[temple-treasure|에덴의 조각]]과 카테리나의 목을 가져오라며 이 형제를 고용했고, 아이들 납치는 형제의 생각이었다.",
        sources: [...at(AC2_P25, [255, 285]), ...at(AC2_P26, [6, 100], [500, 870], [100, 160])]
      },
      {
        id: "savonarola", title: "지롤라모 사보나롤라", category: "인물",
        aliases: ["사보나롤라", "프라 사보나롤라", "Girolamo Savonarola"],
        summary: "선악과로 1497년 피렌체를 장악한 도미니크회 수사. 시민들에게 끌려 나가 화형대에서 최후를 맞았다.",
        body: "## 개요\n습지대 수도원의 수도사에 따르면 손가락이 하나 없고, 한때 그들과 함께 지냈다. 오래전 암자로 가서 쉬라는 권유를 받았고, [[florence|피렌체]]의 산토 스피리토에서 공부했다. 1488년 포를리에서 체코 [[orsi|오르시]]가 쓰러진 뒤 선악과를 가져간 검은 옷의 인물이 그로 보인다.\n\n## 션의 데이터베이스\n[[shaun-hastings|션]]에 따르면 페라라에서 온 도미니크회 수사로, 부유한 자들이 가난한 자들을 압박하고 사제들이 면죄부를 파는 세태를 보고 결국 미쳐 버렸다. 자신이 하느님의 도구라 여기며 피렌체에서 강론을 시작했고, 사람들은 광기에 빠졌다. 그는 모든 소유와 문명을 버리고 에덴으로 돌아가자고 외쳤다. [[temple-treasure|에덴의 조각]]으로 책과 그림, 악기 등을 모아 태워 버린 일이 유명한 '허영의 불꽃'이며, 결국 피렌체는 어둠에 빠졌다.\n\n## 로렌조 이후\n어쌔신 크리드 II의 데이터베이스 카드에 따르면 [[lorenzo-medici|로렌조 데 메디치]]가 1492년 사망한 뒤 사보나롤라가 권력을 차지했다.\n\n## 피렌체 장악 (1497년)\n선악과로 피렌체의 지도층을 사로잡아, 몇 주 만에 모두가 숭배하는 사람이 된다. 그를 따르는 선동자들은 메디치 가문을 비난하고, 붓과 펜 같은 물건을 악마의 잔재라며 불에 던지게 하고, 종말이 다가온다며 회개를 외친다. [[machiavelli|마키아벨리]]에 따르면 사람들은 자발적으로가 아니라 힘과 두려움 때문에 그를 따른다.\n\n## 선동자들\n그를 따르는 선동자들은 항구의 식량, 논밭의 건초 같은 자원을 틀어쥐고 사람들을 굴복시키려 한다. [[ezio|에지오]]에게 쓰러진 선동자들은 정신이 돌아온 듯 후회하는 말을 남기기도 하고, 한 선동자는 사보나롤라가 이상한 물건으로 자신에게 마법을 걸었을 거라고 말한다.\n\n## 몰락과 최후\n아홉 명의 선동자가 모두 처치되자 시민들에게 끌려 나가고, 광장에서 화형대에 묶여 불탄다. 에지오는 고통 속에 죽어 가는 그에게 다가가 마지막 자비를 베푼다.\n\n## 연도\n시퀀스 13 시작 화면은 '피렌체 공화국 1497년'이다. 화형 장면 뒤 에지오가 '딱 22년 전' 바로 이 자리에서 가족이 죽었다고 말하는데, 가족이 처형된 해는 1476년이라 이 일은 1498년으로 볼 수 있다.",
        sources: [...at(AC2_P9, [150, 162]), ...at(AC2_P26, [1210, 1310], [1310, 1385]), ...at(AC2_P27, [124, 335], [800, 970], [1135, 1300]), ...at(AC2_P28, [130, 420], [576, 1215], [1292, 1360], [1546, 1790]), ...at(AC2_P29, [934, 1100], [1254, 1463], [1341, 1350])]
      },
      {
        id: "tunguska", title: "퉁구스카", category: "사건",
        aliases: ["퉁구스카 사건", "Tunguska"],
        summary: "에덴의 조각과 관련된 실험이 있었다고 암시되는 곳. 어쌔신 크리드 1편과 II에서 언급된다.",
        body: "## 개요\n어쌔신 크리드 시리즈에서 세 번 언급된다. 장면으로 직접 보여 주지는 않는다.\n\n## 리킨의 메일 (어쌔신 크리드 1편)\n[[alan-rikkin|앨런 리킨]]의 '분석' 메일에 따르면 퉁구스카 사건은 [[assassins|암살단]]의 공격 결과로 보이며, 그 일로 연구소와 유물이 파괴되었다.\n\n## 여덟 번째 문양 (어쌔신 크리드 II)\n[[glyphs|문양]] 속 유럽 지도 위에 '라스푸틴이 퉁구스카에 그것을 가져갔다'는 문장이 뜨고, 지팡이가 없는 황제는 아무 힘도 없었다는 말이 이어진다.\n\n## 열여섯 번째 문양 (어쌔신 크리드 II)\n[[nikola-tesla|니콜라]]에게 보낸 편지에 따르면, 그들은 황제에게서 어떤 물건을 탈취해 퉁구스카에서 그 사용법을 알아내려는 실험을 하고 있었다. 편지는 때가 되면 니콜라가 발명한 전기로 그 물건을 없애 달라고 부탁한다. 이어 퉁구스카 폭발 영상이 나온다.",
        sources: [...at(AC1_MS, [4442, 4485]), ...at(AC2_P11, [880, 920]), ...at(AC2_P22, [460, 528])]
      },
      {
        id: "nikola-tesla", title: "니콜라 테슬라", category: "인물",
        aliases: ["테슬라", "니콜라", "Nikola Tesla"],
        summary: "어쌔신 크리드 II의 문양에 여러 번 나오는 발명가. 에덴의 조각과 관련된 편지들이 남아 있다.",
        body: "## 개요\n어쌔신 크리드 II의 [[glyphs|문양]]에 세 번 나온다. 장면으로 직접 등장하지는 않는다.\n\n## 열한 번째 문양\n'FROM NIKOLA TESLA'라는 편지에, 전선을 쓰지 않고 전기를 경제적으로 전달하는 기술이 인간에게 무엇보다 중요하며 지구에 평화와 통합을 가져다줄 것이라고 적혀 있다. 워든클리프 타워 건설 현장과 테슬라의 사진이 나오고, 사진 속에서 '[[temple-treasure|에덴의 조각]] 4'를 찾는다.\n\n## 열두 번째 문양\n에디슨이 모건에게 보낸 편지에 따르면, 테슬라는 PE4로 전 세계를 아우르는 정보망을 무상으로 구축하려 했다. 에디슨은 그의 실험에 대한 투자를 끊어 달라고 하고, 이미 미디어로 테슬라를 공격하기 시작했다고 쓴다.\n\n## 열여섯 번째 문양\n'니콜라'에게 보낸 편지에, 그들이 니콜라의 연구실과 업적에 무슨 짓을 했는지 알고 있다며, 황제에게서 탈취한 물건을 [[tunguska|퉁구스카]]에서 실험하고 있으니 때가 되면 그가 발명한 전기로 그 물건을 없애 달라고 적혀 있다.",
        sources: [...at(AC2_P13, [910, 1352]), ...at(AC2_P15, [1418, 1460]), ...at(AC2_P22, [460, 500])]
      },
      {
        id: "vault", title: "지하금고", category: "장소",
        aliases: ["금고", "바티칸 지하금고", "Vault"],
        summary: "역사 자료가 가리키던 장소. 바티칸 아래에 있으며, 두 개의 에덴의 조각으로 열린다.",
        body: "## 개요\n[[mario-auditore|마리오]]는 땅 아래 숨겨진 아주 오래되고 강력한 무언가를 [[altair|알타이어]]의 [[codex|역사 자료]]가 알려 주려 한다고 했다. [[ezio|에지오]]는 아버지와 형제들의 죽음까지 모두 [[rodrigo-borgia|로드리고 보르지아]]의 지하금고 찾기 때문이었다고 깨닫는다.\n\n## 위치와 열쇠\n역사 자료를 모두 맞추자 지하금고가 로마에 있다는 것이 드러난다. 금고를 열려면 두 개의 [[temple-treasure|에덴의 조각]], 곧 선악과와 교황의 지팡이가 필요하다. 로드리고는 이 때문에 교황 자리를 노렸다.\n\n## 안에서 만난 것\n로드리고는 금고 안에 신이 있다고 믿었지만, 에지오가 금고를 열자 [[minerva|미네르바]]가 나타나 메시지를 전한다.",
        sources: [...at(AC2_P6, [2132, 2205]), ...at(AC2_P32, [229, 430], [1829, 2060])]
      },
      {
        id: "minerva", title: "미네르바", category: "인물",
        aliases: ["Minerva", "메르바", "메라"],
        summary: "바티칸 지하금고에서 에지오를 통해 데스몬드에게 말을 건넨 '먼저 왔던 자'.",
        body: "## 개요\n[[ezio|에지오]]가 [[vault|지하금고]]를 열자 빛으로 된 모습으로 나타나 그를 '선지자'라고 부른다. 자신이 죽었을 때는 미네르바라고 불렸고, 그 전에는 메르바와 메라였다고 한다. 다른 이들도 주노와 유니, 주피터와 티니아로 불렸다고 말한다.\n\n## 먼저 왔던 자들\n자신들은 신이 아니라 먼저 왔던 자들일 뿐이라고 한다. 그들이 만든 인류가 그들을 배반했고, 하늘의 일을 돌보지 못해 모든 것이 타 버렸다. 그래도 살아남을 수 있는 모습으로 인간을 만들어 세상에 다시 생명이 태어나게 했지만, 이제 그들은 죽어 가고 진실은 신화와 전설이 되었다.\n\n## 데스몬드에게 남긴 말\n에지오가 아니라 에지오를 통해 대화하려는 것이라며, 에지오는 그와 자신들을 잇는 고리라고 한다. 전쟁을 피하는 지혜를 가졌던 자들이 불로부터 세상을 지키려 준비한 다른 신전들을 찾으라고 하고, 십자가의 공격에 대비하라고 경고한다. 마지막으로 '나머지는 당신에게 맡기도록 하죠, [[desmond|데스몬드]]'라고 말한다.\n\n## 두 번째 재앙\n[[lucy-stillman|루시]] 일행은 미네르바가 두 번째 재앙이 내려올 것을 암시한 것으로 본다.",
        sources: [...at(AC2_P32, [2040, 2325]), ...at(AC2_P33, [300, 320])]
      }
    ]
  };
})();
