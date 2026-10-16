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
      { url: AC1_MS, title: "[어쌔신크리드1] 현대파트 모음 · Fastwon" }
    ],

    events: [
      {
        id: "ev-ac1-temple", year: 1191, game: "ac1",
        title: "솔로몬 신전 아래의 작전",
        summary: "[[altair|알타이르]]가 [[malik|말리크]], [[kadar|카다르]] 형제와 함께 [[templars|템플 기사단]]가 신전 아래에서 찾아낸 [[temple-treasure|보물]]을 회수하러 간다. 알타이르는 무고한 노인을 죽이고, 이를 나무라는 말리크와 다툰다.",
        links: ["altair", "malik", "kadar", "templars", "temple-treasure"],
        sources: at(AC1_MB1, 1020, [1055, 1065], 1080)
      },
      {
        id: "ev-ac1-robert", year: 1191, game: "ac1",
        title: "로베르 드 사블레와의 대면",
        summary: "알타이르가 \"보물을 되찾는 것이 목표\"라는 말리크의 만류를 무시하고 [[robert-de-sable|로베르 드 사블레]]에게 덤비지만 제압당해 내던져진다. 로베르는 \"성지는 너희 것이 아니다. 기회가 있을 때 달아나라\"고 경고한다.",
        links: ["altair", "robert-de-sable", "malik"],
        sources: at(AC1_MB1, 1200, 1215, 1275)
      },
      {
        id: "ev-ac1-report", year: 1191, game: "ac1",
        title: "실패한 임무와 카다르의 죽음",
        summary: "[[masyaf|마시아프]]로 돌아온 알타이르가 [[al-mualim|알 무알림]]에게 보물도 잃고 로베르도 놓쳤다고 보고한다. 뒤이어 살아 돌아온 [[malik|말리크]]가 동생 [[kadar|카다르]]의 죽음을 알리며 알타이르를 탓하고, [[temple-treasure|신전의 보물]]을 내놓는다.",
        links: ["al-mualim", "malik", "kadar", "masyaf", "temple-treasure"],
        sources: at(AC1_MB1, 1360, 1580, [1665, 1675], 1695)
      },
      {
        id: "ev-ac1-siege", year: 1191, game: "ac1",
        title: "마시아프 공방전",
        summary: "[[robert-de-sable|로베르]]가 마시아프 마을을 습격하고, 인질을 앞세워 빼앗긴 보물을 돌려 달라고 요구한다. [[al-mualim|알 무알림]]의 명령에 암살자들이 탑에서 뛰어내려 두려움 없음을 보여 주고, 알타이르가 함정을 작동시켜 템플 기사단 군을 물리친다.",
        links: ["masyaf", "robert-de-sable", "al-mualim", "temple-treasure"],
        sources: at(AC1_MB1, 1710, 2020, 2085, 2120)
      },
      {
        id: "ev-ac1-judgement", year: 1191, game: "ac1",
        title: "알 무알림의 심판",
        summary: "[[al-mualim|알 무알림]]이 [[assassins|암살단]] 신조의 세 가지 교리를 하나씩 짚으며 알타이르가 모두 어겼다고 꾸짖는다. 오늘 죽은 사람들은 모두 알타이르 탓이라며 그를 배신자로 단죄한다. 다음 기억에서 이는 실제 처형이 아니었음이 드러난다.",
        links: ["al-mualim", "altair", "assassins"],
        sources: at(AC1_MB1, 2220, 2250, 2325, 2340)
      },
      {
        id: "ev-ac1-demotion", year: 1191, game: "ac1",
        title: "알타이르의 강등",
        summary: "깨어난 [[altair|알타이르]]에게 [[al-mualim|알 무알림]]은 \"네가 본 것은 내가 보여 주려던 것\"이라며 그를 죽이지 않았다고 밝힌다. 신조의 참뜻을 다시 가르친 뒤 알타이르의 직위와 계급, 장비를 빼앗고 신입으로 강등한다. 대신 형제단에 돌아올 구원의 기회를 준다.",
        links: ["altair", "al-mualim", "assassins", "malik"],
        sources: at(AC1_MB2A, 105, 120, 150, 165, 178, 195)
      },
      {
        id: "ev-ac1-traitor-hunt", year: 1191, game: "ac1",
        title: "배신자 추적",
        summary: "알 무알림은 누군가 [[robert-de-sable|로베르]]를 도왔다며, 내부의 배신자를 찾아오라고 명령한다. 알타이르는 [[investigation|엿듣기]]로 [[masun|마순]]이 문을 열어 기사단을 들였고, 요새 안의 누군가와 바구니 직공을 통해 편지를 주고받았다는 사실을 알아낸다. 이어 바구니 직공에게서 편지를 슬쩍한다.",
        links: ["al-mualim", "masun", "investigation", "masyaf"],
        sources: at(AC1_MB2A, 240, 330, 405, 420, 450, 570)
      },
      {
        id: "ev-ac1-masun", year: 1191, game: "ac1",
        title: "배신자 마순의 최후",
        summary: "[[masun|마순]]은 마을에서 \"알 무알림이야말로 우리를 배신했다\"며 사람들을 선동한다. 알타이르에게 붙잡힌 그는 \"우리는 기사단을 섬긴다\"고 털어놓고, 알 무알림 앞에서도 뉘우치기를 거부하다 처형된다. 알타이르는 다시 칼을 찰 자격을 얻고, 알 무알림은 마순을 도운 [[jamal|자말]]을 언급한다.",
        links: ["masun", "al-mualim", "altair", "templars", "jamal"],
        sources: at(AC1_MB2A, 735, 750, 840, 868, [895, 900], 940)
      },
      {
        id: "ev-ac1-nine-targets", year: 1191, game: "ac1",
        title: "아홉 명의 표적",
        summary: "[[al-mualim|알 무알림]]이 알타이르에게 죽여야 할 [[nine-targets|아홉 명의 이름]]이 적힌 목록을 건넨다. 첫 표적은 [[damascus|다마스쿠스]]의 암시장 상인 [[tamir|타미르]]다. 임무를 시작하려면 그 도시 암살단 지부의 [[rafiq|라피크]]에게 허락을 받아야 한다.",
        links: ["nine-targets", "al-mualim", "tamir", "damascus", "rafiq"],
        sources: at(AC1_MB2A, [952, 960], 975, 990, 1010, 1032)
      },
      {
        id: "ev-ac1-to-damascus", year: 1191, game: "ac1",
        title: "다마스쿠스로 출발",
        summary: "알타이르가 검과 [[hidden-blade|히든 블레이드]]를 되찾는다. [[rauf|라우프]]의 부탁으로 훈련생들에게 검술을 보여 준 뒤, 말을 타고 [[masyaf|마시아프]]를 떠나 [[damascus|다마스쿠스]]로 향한다.",
        links: ["altair", "hidden-blade", "rauf", "masyaf", "damascus"],
        sources: at(AC1_MB2A, 1050, 1065, 1080, 1380, 1395)
      },
      {
        id: "ev-ac1-damascus-rafiq", year: 1191, game: "ac1",
        title: "다마스쿠스 지부의 라피크",
        summary: "[[damascus|다마스쿠스]]에 도착한 알타이르가 암살단 지부의 [[rafiq|라피크]]를 찾아간다. 라피크는 [[tamir|타미르]]가 어디서 일하고 무엇을 꾸미는지 먼저 조사하라며 찾아볼 장소들을 알려 준다. 조사를 마치고 돌아오면 [[al-mualim|알 무알림]]의 표식을 주겠다고 한다.",
        links: ["damascus", "rafiq", "tamir", "altair"],
        sources: at(AC1_MB2B, 0, 690, 720, 735, 750, 765, 780)
      },
      {
        id: "ev-ac1-tamir-investigation", year: 1191, game: "ac1",
        title: "타미르 조사",
        summary: "알타이르가 다마스쿠스 곳곳에서 [[investigation|엿듣기와 소매치기]]로 정보를 모은다. 다시 찾아간 라피크에게 타미르가 [[souk-al-silaah|알 실라흐 수크]]를 다스리는 이 땅 최대의 무기 상인이고, 곧 그곳에서 일생 최대의 거래를 위한 회의가 열린다고 보고한다. 라피크는 알타이르의 계획을 듣고 임무를 허락한다.",
        links: ["tamir", "investigation", "souk-al-silaah", "rafiq"],
        sources: at(AC1_MB2B, 1050, 1280, 1305, 1340, 1365, 1380, 1425)
      },
      {
        id: "ev-ac1-tamir", year: 1191, game: "ac1",
        title: "타미르 암살",
        summary: "[[tamir|타미르]]는 주문량을 맞추지 못한다고 변명하는 상인을 시장 한복판에서 살해한다. 알타이르는 그를 암살하고, 타미르는 숨을 거두며 \"나는 한 조각에 불과하다. 곧 다른 이들을 알게 될 것\"이라는 말을 남긴다. 알타이르는 추격을 따돌리고 지부로 돌아가 라피크에게 승리를 알린다.",
        links: ["tamir", "nine-targets", "souk-al-silaah", "rafiq"],
        sources: at(AC1_MB2B, 1500, 1560, 1575, 1890, 1905, 1920, 1935, 2145)
      },
      {
        id: "ev-ac1-after-tamir", year: 1191, game: "ac1",
        title: "타미르 처단 보고",
        summary: "마시아프로 돌아온 알타이르는 [[tamir|타미르]]가 스승을 잘 아는 듯 말했고 자신의 임무에 더 큰 의미가 있는 것처럼 굴었다고 전한다. [[al-mualim|알 무알림]]은 \"자네의 큰 실패는 너무 많은 궁금증에서 비롯됐다\"며 더 묻지 말라고 한다. 그리고 계급을 올려 주고 장비 일부를 돌려준 뒤, [[acre|아크레]]나 [[jerusalem|예루살렘]]으로 가라고 명령한다.",
        links: ["al-mualim", "tamir", "acre", "jerusalem", "altair"],
        sources: at(AC1_MB3A, [163, 170], 184, [196, 209], 225)
      },
      {
        id: "ev-ac1-acre-rafiq", year: 1191, game: "ac1",
        title: "아크레 지부의 라피크",
        summary: "알타이르는 [[acre|아크레]]를 먼저 찾는다. 지부의 [[rafiq|라피크]]는 \"작은 새가 자네의 방문을 알려 줬다\"며 맞이하고, [[garnier|가니에르 드 나플라우스]]가 [[hospitaller|기사단 병원]]의 그랜드 마스터이며 그들 구역 안에서 지낸다고 알려 준다. 조사할 곳으로는 북쪽의 공공 정원 터, 북서쪽의 버려진 시장, 서쪽의 마리아 교회를 꼽는다.",
        links: ["acre", "rafiq", "garnier", "hospitaller"],
        sources: at(AC1_MB3A, 555, [1232, 1263])
      },
      {
        id: "ev-ac1-garnier-investigation", year: 1191, game: "ac1",
        title: "가니에르 조사",
        summary: "알타이르는 [[garnier|가니에르]]가 북서쪽의 기사단 병원에서 살며 일한다고 보고한다. 소문으로는 벽 안에서 무고한 시민들, 그것도 대부분 예루살렘에서 데려온 사람들로 잔혹한 실험을 한다고 한다. 가니에르는 종종 환자를 살피러 회진을 도는데, 알타이르는 그때 치겠다고 한다. 라피크는 \"이 얼룩을 아크레에서 지우라\"며 임무를 허락한다.",
        links: ["garnier", "hospitaller", "acre", "rafiq"],
        sources: at(AC1_MB3A, [1934, 1955], [1967, 1973], 1991)
      },
      {
        id: "ev-ac1-garnier", year: 1191, game: "ac1",
        title: "가니에르 암살",
        summary: "병원 마당에서 도망치다 붙잡힌 환자가 \"저자가 영혼을 가져갔다\"고 울부짖자, [[garnier|가니에르]]는 \"선택지는 없다\"며 그의 두 다리를 부러뜨리라고 명령한다. 알타이르가 그를 암살하자 가니에르는 \"내 아이들은 어떻게 되느냐\"고 묻는다. 알타이르는 그들이 풀려나 집으로 돌아갈 것이라고 답하지만, 가니에르는 \"무슨 집? 하수구? 사창가?\"라며 그들에게는 스스로 결정할 의지조차 없다고 맞선다.",
        links: ["garnier", "nine-targets", "hospitaller"],
        sources: at(AC1_MB3A, 2496, 2534, 2571, 2583, [2749, 2780], 2839)
      },
      {
        id: "ev-ac1-acre-report", year: 1191, game: "ac1",
        title: "알타이르의 의문",
        summary: "아크레 지부로 돌아온 알타이르는 \"뭔가 이상하다\"며 가니에르가 사람들을 돕고 있다고 믿는 것 같았다고 털어놓는다. 라피크는 \"자네가 할 일은 궁금해하는 것이 아니라 행하는 것\"이라고 다그친다. 마시아프에서도 알타이르는 포로들이 가니에르에게 고마워하는 것 같았다며, 어떻게 적을 친구로 만들 수 있는지 묻는다.",
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
        title: "예루살렘 지부의 말리크",
        summary: "[[jerusalem|예루살렘]] 지부를 찾은 알타이르를 맞은 사람은 [[malik|말리크]]였다. 말리크는 \"자네 자신을 돌아보라고 시킨 사소한 일\"이라며 냉랭하게 대하지만, 장님처럼 도시를 헤매게 둘 수는 없다며 [[talal|탈랄]]을 조사할 장소 세 곳을 알려 준다.",
        links: ["malik", "jerusalem", "talal", "altair", "rafiq"],
        sources: at(AC1_MB3B, 75, [840, 855], 870, 885)
      },
      {
        id: "ev-ac1-talal-investigation", year: 1191, game: "ac1",
        title: "탈랄 조사",
        summary: "거리에서는 \"탈랄이 베푼다\"며 일거리를 미끼로 사람을 모으는 외침이 들린다. 알타이르는 경비병이 손 놓은 사이 사람들이 사라지고 있다는 이야기를 엿듣고, 탈랄의 부하를 심문해 납치된 사람들이 창고에 갇혔다가 아크레로 보내진다는 사실을 알아낸다. 말리크에게는 탈랄이 예루살렘 시민을 납치해 노예로 파는 자라고 보고한다.",
        links: ["talal", "investigation", "malik", "jerusalem"],
        sources: at(AC1_MB3B, 640, 1020, 1040, 1320, 1340, 1460, 1480, 1495)
      },
      {
        id: "ev-ac1-talal", year: 1191, game: "ac1",
        title: "탈랄 암살",
        summary: "창고에 숨어든 알타이르 앞에 [[talal|탈랄]]이 나타난다. 그는 노예상이라는 말에 \"나는 그들을 돕고 싶을 뿐\"이라고 맞서고, 알타이르를 일부러 이곳까지 끌어들였다고 말한 뒤 부하들과 공격한다. 죽어 가며 탈랄은 자신이 데려간 사람들은 거지와 중독자, 나병 환자처럼 노예로도 쓸 수 없는 이들이었고 팔려고가 아니라 구하려고 데려갔다고 주장한다. \"우리 조직은 내가 죽어도 멈추지 않는다\"는 말도 남긴다.",
        links: ["talal", "nine-targets", "jerusalem"],
        sources: at(AC1_MB3B, 1825, 1840, 1870, 1900, 1915, 2240, 2270, 2285)
      },
      {
        id: "ev-ac1-malik-subtlety", year: 1191, game: "ac1",
        title: "말리크와의 언쟁",
        summary: "지부로 돌아온 알타이르에게 [[malik|말리크]]는 \"온 도시가 다 안다\"며 은밀함의 의미를 잊었냐고 꾸짖는다. 알타이르는 임무를 해냈다며 \"우리는 같은 편\"이라고 맞받는다.",
        links: ["malik", "altair"],
        sources: at(AC1_MB3B, 2455, 2470, 2485)
      },
      {
        id: "ev-ac1-three-leaders", year: 1191, game: "ac1",
        title: "세 도시의 지도자",
        summary: "[[al-mualim|알 무알림]]은 아홉 중 셋이 죽었다며 치하하지만 안주하지 말라고 한다. [[king-richard|리차드 왕]]은 아크레의 승리에 힘입어 예루살렘으로 남진할 준비를 하고, [[salahuddin|살라후딘]]은 무너진 아르수프 성채에 병력을 모으고 있다. 알타이르가 두 사람을 모두 죽여 전쟁을 끝내야 하느냐고 묻자, 알 무알림은 그러면 수천 명의 병사가 흩어져 땅을 짓밟을 것이라며 거절한다. 대신 두 사람이 없는 동안 도시를 다스리는 자들을 처단하라며 세 이름을 준다. [[abul-nuqoud|아불 누쿠드]], [[majd-addin|마아드 아딘]], [[william-of-montferrat|몽페라트의 윌리엄]]이다. 죄목은 탐욕, 교만, 무고한 자 학살이다.",
        links: ["al-mualim", "abul-nuqoud", "majd-addin", "william-of-montferrat", "king-richard", "salahuddin", "nine-targets"],
        sources: at(AC1_MB4A, 182, 196, 213, [227, 248], 265, 286)
      },
      {
        id: "ev-ac1-abul-rafiq", year: 1191, game: "ac1",
        title: "다시 찾은 다마스쿠스 지부",
        summary: "다마스쿠스 지부의 [[rafiq|라피크]]는 알타이르를 반갑게 맞는다. 표적이 '다마스쿠스의 상인왕' [[abul-nuqoud|아불 누쿠드]]라는 말에 \"깨지고 강등당한 것만 빼고 다 부럽다\"고 너스레를 떤다. 아불은 귀족 구역에서 호화롭게 지낸다며, 조사할 곳으로 서쪽의 오마야드 모스크와 사루자 수크, 북서쪽의 살라후딘의 성채를 꼽는다.",
        links: ["rafiq", "abul-nuqoud", "damascus"],
        sources: at(AC1_MB4A, [418, 432], 448, 459, [473, 481])
      },
      {
        id: "ev-ac1-abul-investigation", year: 1191, game: "ac1",
        title: "아불 누쿠드 조사",
        summary: "알타이르는 다마스쿠스 귀족 구역을 돌며 정보를 모은다. 조사 완료 화면에는 '상인왕이 연회를 준비하고 있다', '상인왕의 숙소로 올라가는 통로가 있다', '상인왕은 연회 중에 사람들에게 연설을 하러 나올 것이다'라는 문구가 뜬다. 지부로 돌아온 알타이르는 아불이 속까지 부패해 시민들에게 경멸받고, 다마스쿠스 사람들의 돈을 빼돌려 사사로이 쓰며, 호화로운 파티를 준비하고 있다고 보고한다.",
        links: ["abul-nuqoud", "investigation", "rafiq", "damascus"],
        sources: at(AC1_MB4A, 780, 825, 980, 1300, 1329, 1720, 1802, [1873, 1899])
      },
      {
        id: "ev-ac1-abul-feast", year: 1191, game: "ac1",
        title: "상인왕의 연회",
        summary: "[[abul-nuqoud|아불 누쿠드]]는 손님들을 환대하며 [[salahuddin|살라후딘]]의 전쟁을 지원해 준 그들의 관용에 건배한다. 그러다 태도를 바꿔, 자기 뒤에서 수군거린 것을 다 들었다며 손님들을 몰아세운다. 그들이 성지의 신성함이나 적 잉글랜드를 핑계로 돈을 대지만 실은 모든 고통이 두려움과 증오에서 나온다고 말한다. \"나는 또 다른 대의에 맹세했다. 모두가 평화롭게 살 새로운 세상\"이라고 외친 뒤, 쓰러지는 손님들 앞에서 \"탈출하려는 자는 모두 죽여라\"라고 명령한다.",
        links: ["abul-nuqoud", "salahuddin"],
        sources: at(AC1_MB4A, [2216, 2221], [2250, 2261], 2273, 2300, 2315, 2329, 2347, [2373, 2376], 2388, 2406)
      },
      {
        id: "ev-ac1-abul", year: 1191, game: "ac1",
        title: "아불 누쿠드 암살",
        summary: "알타이르는 혼란 속에서 [[abul-nuqoud|아불 누쿠드]]를 암살한다. 돈을 어디에 왜 썼느냐는 물음에 아불은 자신의 본질 때문에 다스리던 사람들에게 멸시당했고, 화려한 옷도 그 증오의 소리를 막지 못했다고 말한다. 복수가 아니라 양심 때문이었다며 \"나를 혐오하는 신을 위한 전쟁에 왜 돈을 대야 하지?\"라고 되묻는다. 살라후딘이 아니면 누구를 따르느냐는 물음에는 \"때가 되면 알게 될 것이다. 이미 알고 있을지도\"라고 답한다. 또 \"네 눈에서 의심이 보인다. 넌 우리를 막을 수 없다. 우리는 새로운 세상을 맞이하게 될 것\"이라는 말을 남긴다.",
        links: ["abul-nuqoud", "nine-targets", "salahuddin"],
        sources: at(AC1_MB4A, [2496, 2543], [2563, 2575])
      },
      {
        id: "ev-ac1-order-authority", year: 1191, game: "ac1",
        title: "'질서는 권위가 있어야 한다'",
        summary: "다마스쿠스 라피크에게 알타이르는 아불이 연회 손님들을 독살하고 전쟁이 그들 탓이라 비난했다고 전한다. 라피크는 상인왕이 원래 독특했다며 광기 탓으로 돌리고 알 무알림에게 물어보라고 한다. 알 무알림은 부패한 지도자를 없애 도시를 치유했다고 치하하지만, 알타이르는 처단한 자들이 죽을 때조차 후회 없이 성공을 확신했고 그들을 묶는 연대가 있다고 말한다. 알 무알림은 의문을 품는 것이 암살자의 본성이지만 생각을 멈추고 스승을 믿는 것도 의무라며, \"질서 없이는 진정한 평화도 없고, 질서는 권위가 있어야 한다\"고 답한다. 알타이르는 계급과 무기를 다시 돌려받고, 남은 두 명을 처단하라는 명령을 받는다.",
        links: ["altair", "al-mualim", "rafiq", "abul-nuqoud", "nine-targets"],
        sources: at(AC1_MB4A, [2798, 2826], [2876, 2882], [2897, 2911], [2927, 2939], [2957, 2964])
      },
      {
        id: "ev-ac1-acre-william-rafiq", year: 1191, game: "ac1",
        title: "다시 찾은 아크레 지부",
        summary: "아크레 지부의 [[rafiq|라피크]]는 알타이르가 자신을 되돌아보는 데 진심인 것 같다고 말한다. 표적이 [[william-of-montferrat|몽페라트의 윌리엄]]이라는 말에, 윌리엄은 왕이 전쟁을 하는 동안 섭정으로 임명되었다고 알려 준다. [[king-richard|리차드]]와 윌리엄의 아들 [[conrad|콘래드]]는 사이가 나쁘고, 아크레의 사라센 포로 거래 이후 콘래드는 티레로 돌아갔다. 리차드는 윌리엄을 '손님'으로 머물게 했는데, 알타이르는 이를 인질이라고 부른다. 라피크는 조사할 곳으로 남서쪽 리차드의 성채 앞 시장, 성 십자가 성당, 서쪽 경계를 꼽는다.",
        links: ["rafiq", "william-of-montferrat", "king-richard", "conrad", "acre"],
        sources: at(AC1_MB4B, [89, 151], [162, 176])
      },
      {
        id: "ev-ac1-william-investigation", year: 1191, game: "ac1",
        title: "윌리엄 조사",
        summary: "알타이르는 아크레를 돌며 정보를 모은다. 광장에서는 \"왕의 덕목에는 윌리엄이 어울린다\"는 연설이 들린다. 조사 완료 화면에는 '윌리엄은 리차드의 방문으로 오늘 정신이 없을 것이다', '윌리엄의 궁수들의 위치를 보여 주는 지도를 얻었다'는 문구가 뜬다. 지도는 윌리엄이 보낸 궁수들을 처리해 준 대가로 받은 것이다. 지부로 돌아온 알타이르는, 리차드가 떠나면 윌리엄이 요새로 들어가 생각에 잠길 테니 그때 치겠다고 보고한다.",
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
        summary: "요새 안에서 알타이르는 [[william-of-montferrat|윌리엄]]을 암살한다. 리차드를 살해하고 아크레를 아들 [[conrad|콘래드]]에게 넘기려 했느냐는 물음에, 윌리엄은 아들은 제 수족도 못 가누는 멍청이이고 리차드도 실체 없는 믿음에 눈이 멀었다며 \"아크레는 그들 누구에게도 속하지 않는다\"고 답한다. 사람들의 음식을 빼앗고 강제로 부렸다는 비난에는 \"새로운 시대를 준비하게 하려던 것\"이고 힘든 시기에 나눠 주려고 가지고 있었을 뿐이라고 말한다. 그리고 \"너는 도시를 해방시키기는커녕 오히려 망칠 것이고, 마침내 네 스스로를 비난하게 될 것\"이라는 말을 남긴다.",
        links: ["william-of-montferrat", "nine-targets", "conrad", "king-richard"],
        sources: at(AC1_MB4B, [2560, 2601], [2633, 2646])
      },
      {
        id: "ev-ac1-william-report", year: 1191, game: "ac1",
        title: "윌리엄은 왜 지금?",
        summary: "아크레 지부의 [[rafiq|라피크]]는 알타이르가 아크레를 윌리엄의 손에서 구했다고 기뻐한다. 알타이르는 십자군이 통합을 가장 필요로 할 때 왜 하필 지금이었는지, 윌리엄은 아크레를 콘래드에게 넘길 계획이 아니었다고 했다며 의문을 품는다. 라피크는 \"뱀의 말을 믿어서는 안 된다, 죽는 순간에도 독을 뿜으니까\"라며 마시아프로 서둘러 가라고 한다.",
        links: ["rafiq", "william-of-montferrat", "conrad", "altair"],
        sources: at(AC1_MB4B, [2950, 2990])
      },
      {
        id: "ev-ac1-templars-revealed", year: 1191, game: "ac1",
        title: "표적들의 정체: 기사단",
        summary: "알타이르는 수수께끼만 주는 [[al-mualim|알 무알림]]에게 \"더 이상은 싫다\"며, 명예를 잃은 게 아니라 빼앗겼고 망할 개처럼 다시 주워 오게 했다고 맞선다. 결국 알 무알림은 표적들이 피의 맹세로 연결되어 있다고 밝힌다. 그들은 누구냐는 물음에 \"논 노비스 도미네, 논 노비스\"라고 답하고, \"이제 [[robert-de-sable|로베르 드 사블레]]의 진정한 영향력을 깨달았군\"이라고 말한다. 도시의 지도자와 군대의 사령관들이 모두 그의 대의에 충성을 맹세했으며, 그들이 바라는 것은 신의 이름이 아니라 자신들을 위한 성지 '정복'이라고 한다. 리차드와 살라후딘에 대해서는 \"[[templars|기사단]]에 반대하는 자는 누구든 파괴될 뿐\"이라고 답한다.",
        links: ["al-mualim", "templars", "robert-de-sable", "nine-targets", "altair"],
        sources: at(AC1_MB4B, 3026, [3038, 3068], [3087, 3133])
      },
      {
        id: "ev-ac1-leap-of-trust", year: 1191, game: "ac1",
        title: "'신뢰의 도약'",
        summary: "진실을 왜 숨겼느냐는 물음에 [[al-mualim|알 무알림]]은 알타이르가 스스로 베일을 걷어 낼 수 있었고, 얻어 낸 정보가 주어진 정보보다 귀하며, 최근 행동이 믿음을 주지 못했다고 답한다. 솔로몬 사원에서 말리크가 되찾아 온 유물이 무엇이냐는 물음에는 때가 되면 기사단의 임무처럼 [[temple-treasure|유물]]의 본질도 드러날 것이라며, 지금은 그것이 그들이 아니라 우리 손에 있다는 데 안심하라고 한다. 계급과 무기를 돌려준 뒤 \"내가 너를 죽이지 않을 것을 어떻게 알았는가?\"라고 묻자, 알타이르는 \"몰랐습니다. 신뢰의 도약을 했을 뿐입니다\"라고 답한다.",
        links: ["al-mualim", "altair", "temple-treasure", "malik"],
        sources: at(AC1_MB4B, [3144, 3220])
      },
      {
        id: "ev-ac1-majd-malik", year: 1191, game: "ac1",
        title: "예루살렘 지부, 다시 말리크에게",
        summary: "알타이르는 예루살렘 지부의 [[malik|말리크]]에게 [[majd-addin|마아드 아딘]]이 표적이 되었다고 알린다. 말리크는 [[salahuddin|살라후딘]]이 없는 사이 마아드 아딘이 스스로 그 역할을 맡았고, 공포와 협박으로 원하는 걸 얻을 뿐 그 자리에 대한 진정한 자격은 없다고 말한다. 예루살렘을 지배하는 만큼 철저히 보호받으니 계획을 잘 세우라고 경고하고, 알타이르가 도움을 '요구'가 아니라 '요청'한 것에 놀란다. 조사할 곳으로 남서쪽 모스크 근처, 최남단 교회, 시나고그 근처 길을 꼽는다.",
        links: ["malik", "majd-addin", "salahuddin", "jerusalem"],
        sources: at(AC1_MB4C, [33, 91])
      },
      {
        id: "ev-ac1-majd-investigation", year: 1191, game: "ac1",
        title: "마아드 아딘 조사",
        summary: "알타이르는 예루살렘에서 정보원을 목적지까지 호위하고, 엿듣기와 심문으로 정보를 모은다. 일꾼들은 솔로몬 신전 서쪽 끝의 처형대를 또 고치라는 명령을 받았다며, 살라후딘 대신 임명된 자들이 하나같이 때 이른 죽음을 맞았고 그 자리가 한때 서기였던 마아드 아딘에게 넘어갔다고 수군거린다. 심문당한 부하는 처형당하는 자들이 범죄자가 아니라 그와 '그가 함께 일하는 자들'의 계획에 위험한 사람들이며, 그들에게 도시를 장악하는 것이 중요하다고 털어놓는다.",
        links: ["majd-addin", "investigation", "jerusalem"],
        sources: at(AC1_MB4C, 140, [242, 247], 560, 605, 840, 880, 905, 932)
      },
      {
        id: "ev-ac1-majd-malik-report", year: 1191, game: "ac1",
        title: "'자네는 아무것도 모르고, 추측만 할 뿐'",
        summary: "[[malik|말리크]]는 알타이르를 '신참'이라 부르고, 알타이르는 \"한 사람의 능력은 의복의 표시가 아니라 행동으로 정의된다\"고 맞선다. 알타이르가 마아드 아딘이 근처에서 공개 처형을 한다며 뭘 해야 할지 안다고 하자, 말리크는 \"그래서 자네가 여전히 신참\"이라며 잘못될 것과 간과할 것을 생각하고 예상하라고 한다. 또 처형될 사람 중 하나가 형제단원이니, 구출은 자기 부하들이 맡을 테지만 마아드 아딘이 그를 죽이는 것만은 막으라고 부탁한다.",
        links: ["malik", "majd-addin", "assassins"],
        sources: at(AC1_MB4C, [997, 1062])
      },
      {
        id: "ev-ac1-majd-execution", year: 1191, game: "ac1",
        title: "마아드 아딘의 공개 처형",
        summary: "조사 완료 화면은 '오늘 사형 집행 동안 마아드 아딘을 공격하라. 그는 솔로몬 신전의 서쪽 외곽 근처에 있을 것'이라고 안내한다. 처형대에 선 [[majd-addin|마아드 아딘]]은 \"여러분 중에는 불평분자가 있다\"며 매춘부, 도둑, 도박꾼, 이단자 넷을 신의 심판에 넘기자고 외친다. 끌려 나온 여자는 \"그와 동침하지 않았다고 저를 죽이려는 것\"이라고 항변하고, 도박꾼으로 몰린 남자는 \"도시를 더럽히는 건 당신\"이라고 맞선다. 마아드 아딘이 \"모두가 위협받고 있다\"고 외치는 사이 알타이르가 처형대로 뛰어든다.",
        links: ["majd-addin", "jerusalem"],
        sources: at(AC1_MB4C, 1080, [1169, 1177], [1189, 1193], [1222, 1238], 1267, 1283, 1295, [1320, 1327], [1351, 1355], [1377, 1388])
      },
      {
        id: "ev-ac1-majd", year: 1191, game: "ac1",
        title: "마아드 아딘 암살",
        summary: "알타이르에게 찔린 [[majd-addin|마아드 아딘]]은 \"이제 막 시작했다\"고 외친다. 그는 \"조직은 도시를 원했고, 나는 권력을 원했다\"며 반체제 인사들의 목소리가 질서를 어지럽히기에 조직의 일에 함께했다고 말한다. 믿음이 다르다는 이유로 죽였느냐는 물음에는 \"물론 아니지. 죽일 수 있어서, 재밌었기에 죽였다\"고 답한다. 사람들이 환호하고 두려워했다며 \"나는 신과 같았다. 너도 할 수 있었다면 같은 짓을 했을 것\"이라고 하자, 알타이르는 \"한때는 그랬겠지. 하지만 남 위에 서려는 자의 말로가 어떻게 되는지 배웠다\"고 답한다.",
        links: ["majd-addin", "nine-targets"],
        sources: at(AC1_MB4C, [1395, 1462])
      },
      {
        id: "ev-ac1-majd-after", year: 1191, game: "ac1",
        title: "'더도 말고, 덜도 말고'",
        summary: "\"예루살렘에는 이제 새로운 지도자가 필요하네\"라는 알타이르에게 [[malik|말리크]]는 아무 말이 없다. 알타이르가 조언 하나 없느냐고 묻자, 말리크는 \"자네는 암살자가 해야 하는 대로 일을 했네. 더도 말고, 덜도 말고\"라며 명령대로 한 일로 칭찬을 기대하느냐고 답한다. 그리고 마시아프로 돌아가며 생각해 보라고 한다.",
        links: ["malik", "altair", "majd-addin"],
        sources: at(AC1_MB4C, [1636, 1662])
      },
      {
        id: "ev-ac1-piece-of-eden", year: 1191, game: "ac1",
        title: "에덴의 조각",
        summary: "알타이르는 표적들이 왜 자기 지도자를 배신했는지 묻는다. [[al-mualim|알 무알림]]은 [[templars|기사단]]이 성지와 그 너머까지 지배하려 하지만, 그 계획은 기사단의 유물인 [[temple-treasure|에덴의 조각]]에 달려 있고 그것이 지금 우리 손에 있다고 답한다. 그는 은 덩어리 같은 유물을 보여 주며, 이것이 아담과 이브를 내쫓고 지팡이를 뱀으로 바꾸고 홍해를 갈랐으며, 에리스가 트로이 전쟁에 쓰고 가난한 농부가 물을 와인으로 바꿨다고 말한다. 이것을 든 자는 바라보는 자의 마음과 정신을 지배한다. [[garnier|가니에르]]의 사람들은 약초로 그 효과를 흉내 낸 실험이었고, [[talal|탈랄]]은 사람을, [[tamir|타미르]]는 무기를 댔다. 도시의 지배자들은 시민들을 완벽한 시민, 완벽한 군인으로 만들려 했다는 것이다. 알 무알림은 남은 기사단원이 [[acre|아크레]]의 [[sibrand|시브란드]]와 [[damascus|다마스쿠스]]의 [[jubair|주바이르]]라고 알려 준다.",
        links: ["al-mualim", "temple-treasure", "templars", "garnier", "talal", "tamir", "sibrand", "jubair"],
        sources: at(AC1_MB5A, 69, 80, [92, 104], [119, 170], [187, 197], [212, 218])
      },
      {
        id: "ev-ac1-jubair-rafiq", year: 1191, game: "ac1",
        title: "다마스쿠스의 영웅",
        summary: "다마스쿠스 지부의 [[rafiq|라피크]]는 \"다마스쿠스의 영웅이 오셨구만!\"이라며 알타이르를 맞는다. 표적이 [[jubair|주바이르]]라는 말에 그는 [[salahuddin|살라후딘]]의 수석 학자라며 의외라고 한다. 주바이르는 요 며칠 학자들을 조직해 거리에서 설교하게 했는데, 빛과 불꽃, 죄 사함, 길과 새로운 세계에 대한 종말론적 헛소리라고 한다. 조사할 곳으로 남쪽의 학술원과 감시탑, 동쪽의 병원을 꼽고, \"자네 확실히 바뀌었어, 더 좋은 쪽으로\"라고 말한다.",
        links: ["rafiq", "jubair", "salahuddin", "damascus"],
        sources: at(AC1_MB5A, [307, 308], [322, 325], [336, 348], [364, 376])
      },
      {
        id: "ev-ac1-jubair-investigation", year: 1191, game: "ac1",
        title: "주바이르 조사",
        summary: "정보원은 기사단원을 죽이고 얻은 편지를 다른 정보원에게 맡겼으니 그를 찾아 받아 가라고 한다. 거리에서는 주바이르의 학자들이 \"사악한 자들이 만든 거짓 지식\"이라며 집과 학교의 모든 글을 내놓으라고 외친다. 알타이르가 심문한 학자는 \"우리는 모든 사람이 걷게 될 길의 돌을 놓고 있다\", \"그분이 내게 많은 것을 보여 주셨다\"고 말한다. 지부로 돌아온 알타이르는 주바이르가 도시의 지식을 없애는 데 혈안이 되어 학자들을 시켜 모든 문서를 모으고 있으며, 곧 마드라사 알 칼라사에서 회의를 열 것이라고 보고한다.",
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
        summary: "알타이르는 [[jubair|주바이르]]를 암살하며 \"사람들은 무엇을 믿을지 자유로워야 하고, 의견이 다르다고 누군가를 벌할 권리는 우리에게 없다\"고 말한다. 그들을 자유롭게 하는 것은 힘이 아니라 지식이라는 것이다. 주바이르는 \"네가 구하려고 애쓴 책들과 내가 다른 게 뭐지? 네가 인정하지 않는 지식의 원천이라는 것?\"이라고 되묻는다. 십자군을 부추긴 것도, 살라후딘과 그 부하들을 정의로운 투쟁심으로 채운 것도 고대 두루마리였다며 \"나 역시 작은 희생을 만들었다\"는 말을 남긴다.",
        links: ["jubair", "nine-targets", "salahuddin"],
        sources: at(AC1_MB5A, [2042, 2105])
      },
      {
        id: "ev-ac1-truth", year: 1191, game: "ac1",
        title: "'진실이란 무엇이냐'",
        summary: "다마스쿠스 라피크는 \"무지가 악을 키운다\"며 알타이르를 치하한다. 마시아프에서 알타이르가 왜 주바이르와 시브란드냐고 묻자, [[al-mualim|알 무알림]]은 그들이 변화의 길을 닦고 있으며, 그들을 약하게 하면 적도 약해진다고 답한다. 기사단은 잘린 곳이 금세 돋는 히드라 같다며, 이제 단 한 사람만이 우리와 궁극적인 목표 사이를 막고 있다고 말한다. 떠나기 전 알 무알림이 \"진실이란 무엇이냐\"고 묻자, 알타이르는 세상은 환상이고 신조는 우리에게 자유로워지라는 것이 아니라 현명해지라는 것이라고 답한다. 알 무알림은 기사단이 그 환상을 이용해 지배하려 하기에 유물을 가져오게 했고, 잠가 두었으며, 그들을 처단하는 것이라고 말한다.",
        links: ["al-mualim", "altair", "assassins", "templars", "temple-treasure", "sibrand", "jubair", "rafiq"],
        sources: at(AC1_MB5A, [2221, 2224], [2240, 2243], 2263, [2308, 2311], [2323, 2362], [2378, 2427], 2438)
      },
      {
        id: "ev-ac1-sibrand-rafiq", year: 1191, game: "ac1",
        title: "아크레 라피크의 사과",
        summary: "아크레 지부의 [[rafiq|라피크]]는 [[sibrand|시브란드]]가 새롭게 [[teutonic-order|튜턴 기사단]]의 리더로 임명되어 베네치아 구역에 살며 아크레 항구를 운영한다고 알려 준다. 조사할 곳으로 동쪽 부두의 선박과 선원들 사이, 항구가 내려다보이는 십자가 근처의 북동쪽 예배당, 북쪽 성 요한 문 앞을 꼽는다. 그리고 우리 대의를 위한 알타이르의 헌신을 의심한 것을 사과한다. 알타이르는 \"잘못한 것은 나라네. 난 내가 신조보다 위에 있다고 생각했네\"라고 답한다.",
        links: ["rafiq", "sibrand", "teutonic-order", "acre", "altair"],
        sources: at(AC1_MB5B, [34, 82])
      },
      {
        id: "ev-ac1-sibrand-investigation", year: 1191, game: "ac1",
        title: "시브란드 조사",
        summary: "정보원이 낮에 훔친 편지를 알타이르에게 건네고, 곧 지도가 갱신된다. 항구에서는 모든 선박을 비우고 [[teutonic-order|튜턴 기사단]]의 명령을 따르라는 포고가 들린다. 알타이르가 심문한 부두 관리인은 시브란드가 배 100척 가까이를 징발해 봉쇄를 하려 한다고 털어놓는다. 지부로 돌아온 알타이르는 시브란드가 죽음이 다가온다는 사실에 미쳐 가며 공포에 잠식되어, 부두를 봉쇄하고 그 안에 숨어 배가 도착하기만을 기다리고 있다고 보고한다. 표적들이 모두 연결되어 있어 자기 행동이 그들 사이에 다 퍼졌다면서도, \"두려움이 그를 약하게 할 것\"이라고 말한다.",
        links: ["sibrand", "investigation", "teutonic-order", "rafiq", "acre"],
        sources: at(AC1_MB5B, 280, 300, [375, 385], 405, 440, 470, [1056, 1096])
      },
      {
        id: "ev-ac1-sibrand-priest", year: 1191, game: "ac1",
        title: "의심에 사로잡힌 시브란드",
        summary: "부두에서 [[sibrand|시브란드]]는 한 성직자를 몰아세운다. 아무도 그를 보증하지 않는다며 \"신의 자녀가 아니라 암살자이기 때문일 수도 있다\", \"너는 그들과 똑같은 예복을 입고 있다\"고 의심한다. 성직자가 굴복해서는 안 된다고 하자 시브란드는 권위에 도전한다며 화를 내고, \"윌리엄과 가니에르는 너무 자신에 차 있어서 목숨을 잃게 되었지. 난 똑같은 실수는 하지 않을 것\"이라며 그를 죽인다. 그리고 수상한 움직임이 보이면 경비에게 보고하라고 명령한다.",
        links: ["sibrand", "william-of-montferrat", "garnier"],
        sources: at(AC1_MB5B, [1215, 1222], [1238, 1256], [1268, 1275], [1286, 1295], 1309, [1323, 1343])
      },
      {
        id: "ev-ac1-sibrand", year: 1191, game: "ac1",
        title: "시브란드 암살",
        summary: "알타이르에게 찔린 [[sibrand|시브란드]]는 \"당연히 겁을 먹었지\"라고 말한다. 신의 품에 안기라는 말에 \"나는 무엇이 우리를 기다리는지 알고 있다\"며, 아무것도 기다리지 않는다는 것, \"이 삶이 우리의 전부\"라는 것이 두렵다고 답한다. 그의 역할은 해상을 봉쇄해 \"멍청한 왕과 여왕\"이 증원을 보내지 못하게 하는 것이었다. 성지를 점령할 때까지냐는 물음에 \"자유롭게 하는 것이다, 신앙의 폭정에서\"라고 답하고, \"난 명령을 따랐고 대의를 믿었을 뿐이다, 너처럼\"이라는 말을 남긴다.",
        links: ["sibrand", "nine-targets", "templars"],
        sources: at(AC1_MB5B, [1567, 1618], 1631)
      },
      {
        id: "ev-ac1-sibrand-doubt", year: 1191, game: "ac1",
        title: "\"내가 잘못된 거라면?\"",
        summary: "아크레 지부로 돌아온 알타이르에게 [[rafiq|라피크]]는 마시아프로 가서 성공을 알리라고 한다. 알타이르가 불안해 보이자 라피크는 그가 죽인 사람들에게 뭔가를 느꼈다고 짚는다. 후회, 불확실, 동정은 다 예상되는 것이고 포용해야 하며, 이런 감정들이 사람으로 만들어 준다고 말한다. 알타이르는 \"내가 잘못된 거라면? 이 사람들이 죽을 운명이 아니었다면? 잘못된 결과였지만 의도는 순수했다면?\"이라고 묻는다. 라피크는 이런 생각은 자신에게 어렵다며 알 무알림이 도와줄 것이라고 답한다.",
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
        summary: "[[malik|말리크]]는 로베르의 기사들을 직접 봤다며, 복수심이 판단을 흐리게 하지 말라고 당부한다. 알타이르는 복수가 아니라 지식을 바란다며, 지금까지 처단한 이들이 모두 로베르를 중심으로 함께 일했다고 말한다. 그들은 십자군도 사라센도 아닌 [[templars|템플 기사단]]이고, 오직 로베르에게 충성한다는 것이다. 말리크는 이 사람이 달라졌다며 놀라고, 로베르의 기사들을 본 곳으로 서쪽 감시탑과 병원 근처, 남서쪽 성묘 교회를 알려 준다.",
        links: ["malik", "robert-de-sable", "templars", "jerusalem"],
        sources: at(AC1_MB6A, [355, 382], [387, 418], [424, 446])
      },
      {
        id: "ev-ac1-robert-investigation", year: 1191, game: "ac1",
        title: "로베르 조사",
        summary: "영어 음성에 따르면 알타이르는 예루살렘에서 정보원들을 돕고 정보를 모은다. 한 정보원은 로베르의 부하들은 전투 준비가 잘 되어 있으니 한꺼번에 싸우지 말고 쫓아오게 한 뒤 반격하라고 조언한다. 광장에서는 한 템플 기사가 \"십자군을 형제처럼 받아들이자\"며 평화를 설교하고, 알타이르는 그를 붙잡아 \"너희는 우리 모두를 노예로 만들 것\"이라고 맞선다. 그는 \"그게 최선\"이라고 답한다. 또 다른 정보원은 로베르 경비병의 배치를 적은 지도를 건넨다.",
        links: ["robert-de-sable", "templars", "investigation", "jerusalem"],
        sources: at(AC1_MB6A, 680, 1040, 1160, 1240, 1260, 1480)
      },
      {
        id: "ev-ac1-malik-apology", year: 1191, game: "ac1",
        title: "알타이르의 사과",
        summary: "알타이르는 로베르와 템플 기사단원들이 [[majd-addin|마아드 아딘]]의 장례에 참석하러 온다며, 자신도 장례에 가서 로베르와 맞서겠다고 [[malik|말리크]]에게 보고한다. 시민들은 나뉘어 대부분은 그들의 목숨을 요구하지만, 나머지는 그들이 평화를 위해 왔다고 말한다. 떠나기 전 알타이르는 \"내가 어리석었다\"며, 자기 때문에 말리크가 팔을 잃고 [[kadar|카다르]]를 잃었다고 사과한다. 말리크는 \"자네는 솔로몬 사원에 함께 갔던 자와는 다른 사람\"이라며 사과할 것이 없다고 하고, 자신도 질투 때문에 부주의했다고 털어놓는다. \"우리는 하나\"이며 승리의 영광처럼 패배의 고통도 함께 나눠야 한다고 말한다.",
        links: ["malik", "altair", "kadar", "majd-addin", "robert-de-sable"],
        sources: at(AC1_MB6A, [1558, 1572], [1576, 1612], [1620, 1684])
      },
      {
        id: "ev-ac1-funeral", year: 1191, game: "ac1",
        title: "마아드 아딘의 장례",
        summary: "사제는 너무 빨리 떠난 [[majd-addin|마아드 아딘]]을 애도하며, 우리 모두 언젠가 이 세상을 떠나는 것은 해가 뜨고 지는 것처럼 자연스러운 일이라고 말한다. 그러다 그를 살해한 자가 \"우리 사이에 서 있다\"며 알타이르를 붙잡으라고 외친다. 알타이르는 템플 기사단과 싸운 끝에 로베르로 보이는 기사를 쓰러뜨린다.",
        links: ["majd-addin", "robert-de-sable", "jerusalem"],
        sources: at(AC1_MB6A, [1803, 1804], [1805, 1844], 1870, [1880, 1914])
      },
      {
        id: "ev-ac1-maria", year: 1191, game: "ac1",
        title: "로베르의 대역",
        summary: "투구를 벗기자 로베르가 아니라 여자가 나타난다. 그녀는 \"마법이 아니지. 우리는 네가 올 것을 알았다\"며, 로베르가 도망칠 시간이 필요했다고 말한다. 처음엔 유물을, 그다음엔 사람들을 잃어 성지를 지배하는 것은 멀어졌지만, 로베르는 알타이르의 승리를 자신들의 이점으로 바꿀 기회를 봤다고 한다. 그는 사라센과 십자군이 힘을 합쳐 [[assassins|암살단]]에 맞서도록 간청하러 [[arsuf|아수프]]로 가고 있다. 알타이르가 처치한 이들은 양측의 희생자였기에, 알타이르 스스로 암살단을 공동의 적으로 만들었다는 것이다. 알타이르는 \"아홉이 아니라 여덟\"이라며, 그녀는 표적이 아니니 살려 준다.",
        links: ["maria", "robert-de-sable", "arsuf", "assassins", "nine-targets"],
        sources: at(AC1_MB6A, [1976, 1990], [2000, 2018], [2025, 2058])
      },
      {
        id: "ev-ac1-to-arsuf", year: 1191, game: "ac1",
        title: "아수프로",
        summary: "알타이르는 [[malik|말리크]]에게 함정이었고 로베르가 대역을 두었다고 알린다. 로베르가 [[king-richard|리차드]]와 [[salahuddin|살라후딘]]에게 공동의 적, 즉 암살단에 맞서 연합하자고 간청하러 간다는 것이다. 자신이 죽인 자들이 양측 모두에게 중요한 사람들이었기에 그 계획은 말이 된다고 한다. 말리크는 스승의 허락 없이 움직이면 형제단을 위협한다며 마시아프로 돌아가라고 하지만, 알타이르는 \"신조와 교리를 방패처럼 휘두르지 말라\", \"스승님은 우리에게 무언가를 숨기고 있다\"고 맞선다. 알타이르는 말리크에게 자신이 죽인 자들을 섬겼던 사람들을 살펴보라고 부탁하고 [[arsuf|아수프]]로 떠난다.",
        links: ["malik", "robert-de-sable", "arsuf", "king-richard", "salahuddin", "al-mualim", "maria"],
        sources: at(AC1_MB6A, [2271, 2341], [2346, 2365], [2371, 2393])
      },
      {
        id: "ev-ac1-arsuf-richard", year: 1191, game: "ac1",
        title: "리차드 왕 앞에서",
        summary: "[[arsuf|아수프]] 전장을 뚫고 온 알타이르는 \"말을 나누러 온 것\"이라며 [[king-richard|리차드 왕]] 앞에 선다. 자신을 보낸 것은 살라후딘이 아니라 [[al-mualim|알 무알림]]이며, 왕의 부관 [[robert-de-sable|로베르 드 사블레]]가 배신할 계획이라고 말한다. 리차드는 로베르가 아크레의 혼란 때문에 암살단에 복수하려 한다며 그를 지원하겠다고 하지만, 알타이르는 [[william-of-montferrat|윌리엄]], [[garnier|가니에르]], [[sibrand|시브란드]]가 무엇을 하려 했는지 밝히고 그들이 로베르에게서 명령을 받았다고 말한다. 로베르는 암살자들은 조작의 대가라고 맞선다. 서로가 서로를 문제 삼자 리차드는 \"이 판단을 나보다 더 현명한 자, 주님의 손에 맡기겠다\"며 결투로 결정하자고 한다.",
        links: ["king-richard", "robert-de-sable", "al-mualim", "arsuf", "william-of-montferrat", "garnier", "sibrand"],
        sources: at(AC1_MB6B, [834, 845], [851, 902], [907, 949], [955, 1009])
      },
      {
        id: "ev-ac1-robert-death", year: 1191, game: "ac1",
        title: "로베르 드 사블레 암살",
        summary: "결투 끝에 알타이르는 [[robert-de-sable|로베르]]를 쓰러뜨린다. 로베르는 \"넌 꼭두각시에 불과하다. 그가 날 배신한 것처럼 그는 널 배신했다\"고 말한다. 유물을 찾았던 사람은 아홉이 아니라 열 명이었고, 비밀을 아는 자를 살려 둘 수 없으니 그 열 번째도 죽여야 한다는 것이다. 열 번째는 바로 [[al-mualim|알 무알림]]이었다. 알타이르가 \"그는 템플러가 아니다\"라고 하자, 로베르는 알 무알림이 어떻게 우리를 그렇게 잘 알았겠느냐며 그도 [[temple-treasure|유물]]에 관심이 있고, 둘의 유일한 차이는 그가 그것을 나눌 생각이 없다는 점이라고 말한다. 그리고 \"네 위대한 적인 내가 네 안전장치였다니 아이러니하지 않나. 다음엔 네 차례겠지\"라는 말을 남긴다.",
        links: ["robert-de-sable", "al-mualim", "temple-treasure", "nine-targets", "templars"],
        sources: at(AC1_MB6B, [1300, 1308], [1311, 1334], [1337, 1363], [1383, 1398])
      },
      {
        id: "ev-ac1-richard-talk", year: 1191, game: "ac1",
        title: "리차드 왕과의 대화",
        summary: "[[king-richard|리차드]]는 \"오늘은 신이 자네의 손을 들어 주었군\"이라 하고, 알타이르는 \"신은 상관없었습니다. 제가 더 잘 싸웠을 뿐\"이라고 답한다. 왜 목숨을 걸고 한 사람을 죽이러 왔느냐는 물음에 알타이르는 복수가 아니라 정의, 그리고 거기에 있을 평화를 위해서라고 한다. 리차드는 백성들은 자기들이 원하는 것을 모르기에 우리 같은 자에게 의지한다고 하지만, 알타이르는 \"우리가 무엇인지는 우리가 선택하는 것\"이라고 답한다. 리차드는 지금도 [[salahuddin|살라후딘]]이 부하들을 죽이고 있어 가야 한다며, 그가 자신의 취약함을 보면 행동을 다시 생각할 것이고 때가 되면 알타이르가 추구하는 것이 가능해질지도 모른다고 말한다. 알타이르는 스승과 할 말이 많다며 떠난다.",
        links: ["king-richard", "altair", "salahuddin", "al-mualim"],
        sources: at(AC1_MB6B, [1414, 1431], [1432, 1471], [1476, 1499], [1502, 1530], [1534, 1550])
      },
      {
        id: "ev-ac1-masyaf-entranced", year: 1191, game: "ac1",
        title: "홀린 마시아프",
        summary: "마시아프로 돌아온 알타이르 앞에서 마을 주민들은 \"스승님께서 보여 주시는 것만이 존재할 뿐\", \"우리를 빛으로 인도해 주시는 스승님께 경배를\"이라며 넋이 나간 듯 길을 걷는다. 알타이르는 \"알 무알림이 한 짓인가?\"라고 묻는다. 동료 암살자들도 \"스승님의 명령으로\", \"빛을 향해서\"를 외치며 \"그는 길을 걷지 않는다, 제거하라\"고 알타이르를 공격한다.",
        links: ["masyaf", "al-mualim", "temple-treasure", "assassins"],
        sources: at(AC1_MB7, [71, 100], 120, [278, 286])
      },
      {
        id: "ev-ac1-malik-joins", year: 1191, game: "ac1",
        title: "말리크의 합류",
        summary: "[[malik|말리크]]가 부하들을 이끌고 나타난다. 알 무알림이 우리를 배신했다는 알타이르의 말에, 말리크는 솔로몬 신전 아래 유적에 다시 가 보니 [[robert-de-sable|로베르]]가 적어 둔 일지에 폭로가 가득했다고 말한다. 스승님은 지금까지 우리를 이용했고, 우리는 성지를 구한 게 아니라 그에게 넘겨준 꼴이 되었다는 것이다. 알타이르는 말리크에게 홀린 사람들의 주의를 돌리고 뒤에서 요새를 점령하라고 하며, 그들은 정신이 지배되어 있으니 가능하면 죽이지 말라고 당부한다.",
        links: ["malik", "al-mualim", "robert-de-sable", "masyaf"],
        sources: at(AC1_MB7, [328, 368], [373, 416])
      },
      {
        id: "ev-ac1-al-mualim-confront", year: 1191, game: "ac1",
        title: "알 무알림과의 대면",
        summary: "요새 정원에서 [[al-mualim|알 무알림]]은 [[temple-treasure|유물]]의 힘으로 알타이르를 붙잡는다. 왜 이런 짓을 하느냐는 물음에 \"어느 것도 진실이 아니고, 모든 것은 허용된다는 증거를 찾았다\"고 답하고, 배신자를 처단하라고 명령한다. 알타이르는 알 무알림이 로베르의 목적을 역겹다고 했지만 자신도 마찬가지였다고 비난한다. 알 무알림은 알타이르에게서 하나를 빼앗으면 자신에게서 다른 하나를 빼앗는 셈이었기에 템플 기사단원들을 죽여야 했다고 말한다. 서재에서 유물을 보여 줬을 때 알타이르를 홀리려 했지만, 알타이르는 다른 이들처럼 되지 않고 환상을 꿰뚫어 봤다는 것이다. 그는 홍해가 갈라진 적도, 물이 와인으로 변한 적도 없으며 그 모든 것이 유물이 만든 환상이었다고 말한다. 사라센과 십자군이 따르는 신들도 유령이니, 자신은 피를 덜 흘리는 다른 환상을 주려는 것뿐이라고 한다.",
        links: ["al-mualim", "temple-treasure", "templars", "altair"],
        sources: at(AC1_MB7, [466, 520], [678, 701], [763, 815], [824, 857], [861, 895], [897, 909])
      },
      {
        id: "ev-ac1-al-mualim-death", year: 1191, game: "ac1",
        title: "알 무알림의 최후",
        summary: "유물로 만든 환영들과 싸운 끝에 알타이르는 [[al-mualim|알 무알림]]을 쓰러뜨린다. 알 무알림이 \"제자는 스승을 이길 수 없다\"고 하자, 알타이르는 \"La shai'a waqe'on mutlak bal kollon mumkin(어느 것도 진실이 아니고, 모든 것은 허용된다)\"이라고 답한다. 알 무알림은 \"네가 이겼다\"며 전리품을 챙기라고 한다. 알타이르가 이것은 파괴되었어야 했다고 하자, 그는 십자군을 끝내고 진정한 평화를 불러올 유일한 물건을 파괴하라는 거냐고 되묻는다. \"더 많은 지혜를 위해서는 더 많은 슬픔이 따른다\"는 말을 남긴다.",
        links: ["al-mualim", "temple-treasure", "altair", "assassins"],
        sources: at(AC1_MB7, [1051, 1060], [1066, 1077], [1087, 1105])
      },
      {
        id: "ev-ac1-map", year: 1191, game: "ac1",
        title: "유물이 보여 준 지도",
        summary: "알 무알림은 숨을 거두기 전 \"파괴해라! 네가 하겠다고 말했으니 파괴해라!\"라고 하고, 알타이르는 \"난 못 하겠어\"라고 답한다. 알 무알림은 \"아니, 넌 할 수 있다. 하지만 그러지 않겠지\"라는 말을 남긴다. 알타이르가 [[temple-treasure|유물]]을 들자 정원 위로 빛나는 지구 모양의 지도가 떠오르고, [[malik|말리크]]와 암살자들이 다가온다.",
        links: ["al-mualim", "temple-treasure", "malik", "altair"],
        sources: at(AC1_MB7, [1111, 1121], 1130, 1144)
      },
      {
        id: "ev-first-session", year: 2012, game: "ac1", yearVerified: true,
        title: "첫 접속 실패",
        summary: "영어 음성에 따르면 처음 [[animus|애니머스]]에 접속했을 때 데스몬드는 기억에 고정되지 못한다. 심리적 충격이 너무 커서 거부 반응을 보인다는 말이 나오고, \"보이는 건 진짜가 아니라 과거의 영상일 뿐\"이라는 진정에도 효과가 없자 그를 끌어낸다.",
        links: ["animus", "desmond", "warren-vidic", "lucy-stillman"],
        sources: at(AC1_MS, [0, 6], [20, 60])
      },
      {
        id: "ev-desmond", year: 2012, game: "ac1", yearVerified: true,
        title: "애니머스에 눕혀진 데스몬드",
        summary: "[[abstergo|앱스테르고]]에 끌려온 바텐더 [[desmond|데스몬드 마일즈]]가 [[warren-vidic|비딕]]의 협박에 못 이겨 [[animus|애니머스]]에 눕는다. 비딕은 DNA에 선조의 기억이 담겨 있다고 설명하고, 선조 알타이르의 기억을 탐색하게 한다. 애니머스 음성은 데스몬드를 \"실험체 17\"이라고 부른다.",
        links: ["desmond", "animus", "abstergo", "warren-vidic", "lucy-stillman"],
        sources: [...at(AC1_MB1, 240, 300, 365, 420, 506), ...at(AC1_MS, [80, 330])]
      },
      {
        id: "ev-conference-argument", year: 2012, game: "ac1", yearVerified: true,
        title: "회의실의 말다툼",
        summary: "영어 음성에 따르면 [[lucy-stillman|루시]]는 회의실에서 [[warren-vidic|비딕]]에게 데스몬드를 죽이려 한다며 따진다. 비딕은 마감 기한을 정한 건 자신이 아니지만 그들에게 맞서지 않을 만큼은 똑똑하다고 답하고, \"레일라처럼 되고 싶나?\"라고 말한다. 그는 '그 사고' 때문에 모두가 예민하다고도 한다. 루시는 너무 몰아붙이면 데스몬드가 무너질 것이라고 경고한다.",
        links: ["lucy-stillman", "warren-vidic", "leila-marino", "desmond"],
        sources: at(AC1_MS, [400, 470])
      },
      {
        id: "ev-desmond-past", year: 2012, game: "ac1", yearVerified: true,
        title: "데스몬드가 털어놓은 과거",
        summary: "데스몬드가 [[lucy-stillman|루시]]에게 30명 남짓한 암살단 공동체('농장')에서 자랐고 16살에 도망쳤다고 말한다. 10년 동안 숨어 살았지만 [[abstergo|앱스테르고]]가 운전면허 기록(사진과 지문)으로 그를 찾아냈다.",
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
        summary: "[[lucy-stillman|루시]]는 [[desmond|데스몬드]]에게 실험에 기한이 정해져 있다고 털어놓는다. 일주일이었고, 이제 6일 남았다. 루시는 애니머스가 대사를 현대 영어로 옮겨 준다는 것과 [[abstergo|앱스테르고]]가 세계 최대 제약회사 중 하나라는 것을 알려 준다. 데스몬드는 루시의 컴퓨터에서 회사 이메일을 읽는다.",
        links: ["lucy-stillman", "desmond", "abstergo", "animus"],
        sources: at(AC1_MB2B, 2175, 2205, 2230, 2265, 2295, 2340, 2385)
      },
      {
        id: "ev-emails-pen", year: 2012, game: "ac1", yearVerified: true,
        title: "출입 키 펜과 '레일라처럼'",
        summary: "데스몬드가 루시의 받은 편지함에서 읽은 이메일이다. 9월 2일 루시는 비딕에게 주차장에서 그의 출입 키(ACCESS-KEY) 펜을 또 주웠다며, 보안팀이 찾았다면 컴퓨터 접근 코드를 다시 짜느라 적어도 하루는 문을 닫았을 것이라고 쓴다. 비딕은 \"내 책상에 두고 내 물건보다 애니머스가 돌아가게 하는 데 신경 써\"라고 답한다. 9월 3일에는 앱스테르고 전 직원에게 회사 정책과 프로젝트를 말하지 말라는 기밀 유지 공지가 온다. 루시가 \"아까 '레일라처럼 된다'고 했던 건 무슨 뜻이냐\"고 묻자 비딕은 \"아무것도 아니야. 마감이 있으니 일이나 해\"라고 답한다.",
        links: ["lucy-stillman", "warren-vidic", "leila-marino", "abstergo"],
        sources: at(AC1_MS, [975, 1010], [1035, 1145], [1170, 1190])
      },
      {
        id: "ev-vidic-order", year: 2012, game: "ac1", yearVerified: true,
        title: "비딕이 말하는 '질서'",
        summary: "[[warren-vidic|비딕]]은 [[desmond|데스몬드]]에게 세상은 난장판이고, 조상 시대에서 천 년이 지났는데도 사회는 여전히 야만적이라고 말한다. 세계에 필요한 것은 질서이며, 방향을 갈망하는 인류에게 어떻게 살아야 하는지 '우리가 말해 주겠다'고 한다. 그것이 '모든 것에서의 평화'를 바라는 암살단의 목표와도 같지 않으냐고 묻고, 데스몬드에게 \"그게 어디 있는지 보여 주기만 하면 된다\"고 말한다.",
        links: ["warren-vidic", "desmond", "assassins"],
        sources: at(AC1_MB3A, 4, [35, 41], 53, [68, 88], [110, 116])
      },
      {
        id: "ev-vidic-gifts", year: 2012, game: "ac1", yearVerified: true,
        title: "'우리 이전에 온 존재들의 선물'",
        summary: "[[warren-vidic|비딕]]은 [[lucy-stillman|루시]]가 [[animus|애니머스]]를 개조해 데스몬드가 더 오래 머물 수 있게 됐다고 알린다. 그리고 지난 수천 년간 의학, 기계, 철학의 획기적인 도약이 [[abstergo|앱스테르고]]와 그 전신에게서 나왔다고 말한다. 의심을 사지 않으려고 공로를 내세우지 않고 수혜자를 신중히 고른다며, \"그건 우리가 통제하고 있다는 소리\"라고 한다. 또 자신들은 그것들을 발명한 게 아니라 '발견'했으며, \"우리 이전에 온 존재들로부터의 선물\"이라고 말한다.",
        links: ["warren-vidic", "abstergo", "desmond", "animus", "lucy-stillman"],
        sources: at(AC1_MB4A, [7, 36], [52, 62], [74, 86])
      },
      {
        id: "ev-lucy-story", year: 2012, game: "ac1", yearVerified: true,
        title: "루시가 털어놓은 사연",
        summary: "[[animus|애니머스]]가 과열되어 작업이 멈추자 [[warren-vidic|비딕]]은 루시에게 매시간 보고하라고 다그친다. [[lucy-stillman|루시]]는 데스몬드에게 자신도 집에 가지 못하는 처지라고 털어놓는다. 비딕이 일자리를 줘서 앱스테르고에 왔지만 무장한 경비들에게 끌려가 죽을 뻔했고, 그때 비딕이 막아 줘서 살았다고 한다.",
        links: ["lucy-stillman", "warren-vidic", "desmond", "animus", "abstergo"],
        sources: at(AC1_MB3B, [2525, 2535], 2580, 2600, 2640, 2685, 2700, 2740)
      },
      {
        id: "ev-leila-emails", year: 2012, game: "ac1", yearVerified: true,
        title: "레일라 마리노에 관한 이메일",
        summary: "누군가 데스몬드의 방에 들어왔다 간 흔적과 접근 코드가 남아 있다. 루시의 받은 편지함에는 [[leila-marino|레일라 마리노]]에 관한 이메일이 있다. 9월 4일 루시는 낸시 닐롭에게 2007년 9월에 죽은 전 직원 레일라에 대해 묻는다. 사고였다고 들었지만 검시관 기록이 봉인되어 있다며, 자살이라면 왜 이렇게 민감하게 다루느냐는 것이다. 낸시는 말할 권한이 없다고 답한다. 루시가 \"회사가 검시관 보고서를 '자산 정보'로 묶는 건 처음 본다. 그녀는 내 친구였다\"고 다시 쓰자, 낸시는 [[alan-rikkin|앨런 리킨]]에게 문의하라며 리킨과 [[warren-vidic|비딕]]을 참조로 넣는다. 비딕은 \"그녀는 자살했어. 노이만이라는 애와의 관계 때문이었다. 회사 사람과는 엮이지 마. 이제 그만 덮어\"라고 답한다.",
        links: ["leila-marino", "lucy-stillman", "warren-vidic", "alan-rikkin", "abstergo"],
        sources: [...at(AC1_MB3B, 2780, 2835, 2865, 2925, 2940, 2970), ...at(AC1_MS, [1748, 1890])]
      },
      {
        id: "ev-rescue-attempt", year: 2012, game: "ac1", yearVerified: true,
        title: "\"당신은 기사단에게 잡혀 있어요\"",
        summary: "[[warren-vidic|비딕]]은 서둘러 세션을 끝내고 누군가와 통화한 뒤 \"정말 문제가 많구만, 마일즈 군\"이라고 한다. [[lucy-stillman|루시]]는 암살자들이 데스몬드를 구하러 올 것 같다며, 그의 조상이 제3차 십자군 때 시작한 싸움은 끝나지 않았고 그는 지금 [[templars|기사단]]에게 잡혀 있다고 알려 준다. 비딕도, 루시 자신도 그들을 위해 일하며 [[abstergo|앱스테르고]]는 그들의 회사라고 한다. 루시는 기사단이 원하는 건 좋지만 그걸 행하는 방법이 아주 나쁘다고 말하고, 비딕에게 불려 가면서 \"질문에 대한 답은 바로 당신 앞에 있어요\"라고 남긴다.",
        links: ["warren-vidic", "lucy-stillman", "desmond", "templars", "abstergo"],
        sources: at(AC1_MB4C, [1697, 1707], [1724, 1759], 1770, [1786, 1801], 1812, [1826, 1829])
      },
      {
        id: "ev-emails-threat", year: 2012, game: "ac1", yearVerified: true,
        title: "리킨의 경고와 '나는 알고 있다'",
        summary: "9월 5일 루시는 [[alan-rikkin|리킨]]에게 \"5년이 지났는데도 아무도 친구에게 무슨 일이 있었는지 말해 주지 않는다. 회사에서의 내 기록이 말해 주지 않느냐\"고 쓴다. 리킨에게서는 10월 4일까지 자리를 비운다는 자동 답장이 온다. 그런데 리킨은 바로 [[warren-vidic|비딕]]에게 \"그녀가 문제를 일으키지 않는다더니 또 들쑤시고 있다. 처리해, 워렌. 네가 보증했으니 네 책임이다\"라고 쓴다. 비딕의 휴지통에는 9월 4일 발신자 불명의 메일 'I KNOW'가 있다. \"그가 금속 공을 들고 있었고, 그게 열리자 사람들이 미쳐서 서로 쏘고 찌르고 갈기갈기 찢었다. 로고를 봤고 이름을 들었다. 모두에게 알릴 것이고 너희는 대가를 치를 것\"이라는 내용이다. 앱스테르고 뉴스 메일에는 아이-앱스테르고 위성 발사가 12월 21일로 연기되었다는 소식도 있다.",
        links: ["alan-rikkin", "lucy-stillman", "warren-vidic", "leila-marino", "temple-treasure", "eye-abstergo-satellite"],
        sources: [...at(AC1_MB4C, 1918, 2010, 2135, 2230, 2303, 2351), ...at(AC1_MS, [2405, 2420], [2530, 2580], [2790, 2800], [2835, 2875])]
      },
      {
        id: "ev-last-memory", year: 2012, game: "ac1", yearVerified: true,
        title: "\"마지막 기억에 접근하게 되면\"",
        summary: "[[warren-vidic|비딕]]은 이름이 나오지 않은 누군가에게 \"거의 다 끝나 갑니다\"라고 보고한다. 상대는 시간이 얼마 없다며, 그것이 어디에 숨겨져 있든 되찾고 일이 다 끝나면 \"그는 처리될 것\"이냐고 묻고, 내일 아침까지 진행 보고서를 원한다고 한다. 비딕이 자리를 비우자 [[lucy-stillman|루시]]는 데스몬드를 애니머스에서 꺼낸다. 그리고 그들이 데스몬드의 마지막 기억에 접근하게 되면 그것은 시작일 뿐이며, 우리가 사는 방식, 생각하는 방식, 존재하는 방식을 모두 바꾸려 한다고 말한다. 방법은 '기사단 유물'이라고 한다. 루시는 비딕에게 \"여기는 모두 '덴버'입니다\"라고 둘러댄다.",
        links: ["warren-vidic", "lucy-stillman", "desmond", "temple-treasure", "templars", "animus"],
        sources: at(AC1_MB5B, [2055, 2071], [2098, 2132], [2196, 2202])
      },
      {
        id: "ev-denver", year: 2012, game: "ac1", yearVerified: true,
        title: "덴버의 사고와 다른 유물들",
        summary: "영어 음성에 따르면 [[lucy-stillman|루시]]는 마시아프에 있던 [[temple-treasure|유물]]은 그들이 가지고 있었지만 '사고'로 파괴되었다고 말한다. 그래서 그들은 데스몬드의 조상이 다른 유물들이 어디 있는지 보여 주기를 바라고 있다고 한다. 유물이 하나가 아니냐는 물음에는 \"아무것도 모르는군요\"라고 답한다. 또 '모든 것이 덴버'라는 말은 지하 시설이 있는 덴버 국제공항을 가리키며, 그곳에서 사고가 일어났다고 설명한다.",
        links: ["lucy-stillman", "temple-treasure", "desmond", "abstergo"],
        sources: at(AC1_MB5B, 2160, 2180, 2194, [2210, 2220])
      },
      {
        id: "ev-we-will-be-there-soon", year: 2012, game: "ac1", yearVerified: true,
        title: "루시의 비밀 메일",
        summary: "9월 6일 루시의 받은 편지함에 'faster cheaper meds'가 보낸 스팸처럼 보이는 메일 'Problems DOWN THERE?'이 있다. 본문에 대문자가 군데군데 섞여 있는데, 업로더 자막은 이를 'WE WILL BE THERE SOON(곧 거기로 가겠다)'으로 읽는다. 그 아래에는 루시와 이름 없는 상대가 주고받은 대화가 붙어 있다. 상대가 'DIA 사건'에 대한 정보를 요청하자 루시는 \"사고로 적어도 20명이 죽었다. 이곳을 발사지로, 아니라면 조립지로 보고 잠입해야 한다\"고 답한다. 발사 목적을 묻자 \"유물을 위한 저궤도 송신기. 5년 전 조건 반응 실험의 연장이다. 성공하면 그들은 모든 것을 지배한다\"고 쓰고, 마지막으로 \"구조대를 보내 줄 수 있나요?\"라고 묻는다.",
        links: ["lucy-stillman", "eye-abstergo-satellite", "temple-treasure", "desmond"],
        sources: [...at(AC1_MB5B, 2329, 2356, [2418, 2422], 2458, 2607, 2634), ...at(AC1_MS, [3335, 3345], [3380, 3465])]
      },
      {
        id: "ev-false-alarm", year: 2012, game: "ac1", yearVerified: true,
        title: "'불소 강화 연구' 유출",
        summary: "데스몬드는 [[warren-vidic|비딕]]의 받은 편지함도 읽는다. 9월 6일 뉴스 메일에는 앱스테르고 홀딩스가 합성 약물 '뉴 플루오라이드'를 시험하려고 작은 마을의 수돗물을 몰래 조작해 수백 명이 입원했다는 기사가 있다. 동료들은 누군가 '불소 강화 연구' 문서를 유출해 제약 부서가 연방 수사를 받고 문을 닫았으며 \"마을 하나를 통째로 독살한 셈\"이라고 쓴다. [[alan-rikkin|리킨]]은 위성 발사가 21일로 연기된 것을 '통화 품질 개선' 때문이라고 보도자료를 내겠다며, 새 발사 일정에 맞춰 필요한 것을 얻으라고 비딕에게 말한다. 비딕은 리킨에게 비밀번호를 요청해 보안 부서에서 받는다.",
        links: ["warren-vidic", "alan-rikkin", "abstergo", "eye-abstergo-satellite"],
        sources: at(AC1_MS, [3530, 3560], [3600, 3660])
      },
      {
        id: "ev-vidic-history", year: 2012, game: "ac1", yearVerified: true,
        title: "\"보고 읽는 모든 것을 믿지 마라\"",
        summary: "[[warren-vidic|비딕]]은 이제 거의 다 끝났다며, 그들이 [[desmond|데스몬드]]에게 다음 단계를 보여 줄지도 모른다고 한다. 데스몬드가 애니머스에서 본 것이 가끔 역사와 동떨어져 보이고, 책이나 편지 같은 자료와 맞지 않는다고 하자, 비딕은 \"누구도 책을 쓸 수 있고 원하는 어떤 내용도 넣을 수 있다\"고 답한다. 한때는 세상이 평평하다고 믿었고 달 착륙이 조작이라는 책도 있다며, 보고 읽는 모든 것을 믿지 말라고 한다. 데스몬드가 조상의 말 \"모든 것은 허용된다\"를 잇자, 비딕은 그것이 애니머스를 특별하게 만드는 점, 즉 오해의 여지가 없다는 점이라고 말한다. 데스몬드는 \"그럴 여지는 항상 있지\"라고 답한다.",
        links: ["warren-vidic", "desmond", "animus"],
        sources: at(AC1_MB6A, [6, 13], [19, 56], [61, 85], [90, 117])
      },
      {
        id: "ev-rescue-failed", year: 2012, game: "ac1", yearVerified: true,
        title: "실패한 구출",
        summary: "[[warren-vidic|비딕]]은 데스몬드를 깨우며 \"자네 암살자 친구들이 우릴 찾은 것 같군\"이라고 소리친다. 연구소가 공격받았지만 직원들은 대여섯 명뿐이고 수적으로 우위라며 곧 진압한다. 비딕은 지난 한 해 동안 암살단의 거주지와 사막 구역 같은 곳들을 수색해 왔다며, 데스몬드를 위해 올 암살자는 남아 있지 않고 \"자네 혼자 남았을지도 모르겠군\"이라고 말한다. 내일 끝내야 한다는 말도 덧붙인다.",
        links: ["warren-vidic", "desmond", "assassins", "abstergo"],
        sources: at(AC1_MB6B, [1574, 1596], [1598, 1622], [1630, 1650], [1653, 1661])
      },
      {
        id: "ev-lucy-faith", year: 2012, game: "ac1", yearVerified: true,
        title: "\"믿음을 가져요\"",
        summary: "[[lucy-stillman|루시]]는 비딕이 말한 사막에 팀이 갔지만 이미 비어 있었다며, 데스몬드의 부모님은 도망쳤을 것 같다고 말한다. 데스몬드는 탈출할 유일한 기회가 사라졌고 일이 끝나면 그들이 자신을 죽일 것이라며 절망한다. 루시는 \"믿음을 좀 가져 봐요\"라고 말한다. 업로더 자막에 따르면 이때 루시는 약지를 접어 암살단을 뜻하는 몸짓을 보인다.",
        links: ["lucy-stillman", "desmond", "assassins"],
        sources: at(AC1_MB6B, [1704, 1722], [1724, 1737], [1741, 1750])
      },
      {
        id: "ev-emails-end", year: 2012, game: "ac1", yearVerified: true,
        title: "\"실험체 17의 플러그를 뽑겠다\"",
        summary: "9월 7일 [[alan-rikkin|리킨]]은 [[warren-vidic|비딕]]에게 '추가 실험체?'라는 메일을 보낸다. 데스몬드가 원하는 걸 주지 못하면 다른 곳을 찾아야 하며, 그가 '은퇴'할 경우 획득 부서의 데이비드가 실험체를 더 구해 줄 수 있다는 내용이다. 불소 강화 건으로 감시가 심해졌으니 21일에 발사해야 하고, DIA의 난장판은 치웠지만 한 수하물 담당자가 인터넷에 대량 살인과 기업의 은폐를 퍼뜨리고 있다고 한다. 보고서에 따르면 정리반이 도착하기 전에 '프로젝트 책임자'가 그곳 사람들을 모두 죽였다. 리킨은 암살단 놈들이 아직 몇 명 돌아다니고 있어 불소 유출이 내부 소행일지도 모른다며, \"실험체 17의 플러그를 뽑을 생각이다. 결과를 가져오든지 다른 사람을 애니머스에 넣어라\"라고 쓴다.",
        links: ["alan-rikkin", "warren-vidic", "desmond", "abstergo", "assassins", "temple-treasure"],
        sources: [...at(AC1_MB6B, 1823, 1840, 1896, 2137), ...at(AC1_MS, [4184, 4290])]
      },
      {
        id: "ev-rikkin-analysis", year: 2012, game: "ac1", yearVerified: true,
        title: "리킨의 '분석' 메일",
        summary: "'프로젝트 책임자 #9' 받은 편지함에 [[alan-rikkin|리킨]]이 보낸 '분석' 메일이 있다. 실험체 12~16의 애니머스 기록을 검토했으며, 에덴의 조각이 최우선이지만 남은 유물들도 찾아야 하고 위성의 효과에 면역이거나 보호받는 자들도 처리해야 한다는 내용이다. 1) 에덴의 조각(3번): DIA 위성 사고로 2번을 잃은 뒤 대체 유물을 찾고 있고, 실험체 17은 자신도 모르게 다른 유물들의 위치를 알고 있으니 마지막 기억을 반드시 열어야 한다. 2) 필라델피아 프로젝트: 실험체 12의 데이터에 따르면 배가 약 18분간 미래에 나타났지만, 경영진은 역설을 우려해 진행을 거부했다. 3) 퉁구스카 사건: 암살단의 공격 결과로 보이며 연구소와 유물이 파괴되었다. 4) 성배: 존재를 확인할 증거가 부족해 목표에서 뺀다. 5) 미첼-헤지스 통신기: 작동이 확인되어 발사 뒤 안전한 통신 채널로 쓴다. 메일은 \"이해의 아버지께서 성공으로 인도하시길\"로 끝난다.",
        links: ["alan-rikkin", "warren-vidic", "temple-treasure", "eye-abstergo-satellite", "subject-16", "desmond", "templars"],
        sources: at(AC1_MS, [4442, 4485])
      },
      {
        id: "ev-map-found", year: 2012, game: "ac1", yearVerified: true,
        title: "\"드디어 찾았다\"",
        summary: "[[warren-vidic|비딕]]은 애니머스 화면 속 지도를 보고 \"드디어 찾았다\"고 외친다. 이름이 나오지 않은 상대(자막의 '???')에게 지도를 획득했다고 보고하며, 유물은 적어도 여섯 개이고 그중 일부는 망가졌을 것이며, 적어도 두 개는 지금은 없는 대륙에 있는 것으로 나타난다고 말한다. 상대는 각 장소로 팀을 보내 확인하고 나머지도 우선 모으라며, \"우리는 딱 하나만 있으면 된다\"고 한다. 정말 필요 없는 것은 \"새로운 세상에서 문제를 일으킬 수 있는 생존자들\"이라는 말도 한다.",
        links: ["warren-vidic", "temple-treasure", "desmond", "animus"],
        sources: at(AC1_MB7, [1141, 1144], [1160, 1196])
      },
      {
        id: "ev-lucy-saves-desmond", year: 2012, game: "ac1", yearVerified: true,
        title: "\"그가 필요할지도 몰라요\"",
        summary: "비딕이 \"그럼 저 암살자는?\"이라고 묻자 상대는 \"필요한 건 다 얻었네\"라고 답한다. [[lucy-stillman|루시]]가 끼어들어, 일이 제대로 진행될지 모르니 그의 기억이 필요할 수도 있다며 당황스러운 일이 없다는 것이 확인될 때까지 그를 두자고 한다. 상대는 \"그가 더 이상 필요 없다고 확신이 들면 그때 그를 죽이게\"라고 결정한다. 비딕은 데스몬드에게 \"너무 편하게 있지는 말라, 곧 돌아오겠다\"고 한다.",
        links: ["lucy-stillman", "warren-vidic", "desmond"],
        sources: at(AC1_MB7, [1195, 1229], 1237)
      },
      {
        id: "ev-wall-writings", year: 2012, game: "ac1", yearVerified: true,
        title: "벽의 핏자국",
        summary: "혼자 남은 [[desmond|데스몬드]]의 눈에 방바닥과 벽 곳곳에 빛나는 글씨와 그림이 보인다. 그는 \"저건… 피 아닌가? 내가 오기 전에 누굴 여기 가둬 둔 거지? 그 사람한텐 무슨 일이?\"라고 묻는다. 업로더 설명 자막에 따르면, 벽의 핏자국은 [[subject-16|실험체 16]]의 작품이다. 데스몬드가 이를 보게 된 것은 조상의 기억과 현실의 기억이 섞이는 혼입 효과 때문인 것으로 추측된다. 글씨 중에는 12212012라는 숫자도 있다.",
        links: ["desmond", "subject-16", "animus"],
        sources: [...at(AC1_MB7, [1247, 1250], [1290, 1313], 1660), ...at(AC1_MS, [4830, 4850])]
      },
      {
        id: "ev-ending-emails", year: 2012, game: "ac1", yearVerified: true,
        title: "엔딩 이후의 이메일",
        summary: "엔딩 뒤 [[warren-vidic|비딕]]의 메일함에는 9월 8일 뉴스가 있다. 'L-11 발병' 이후 거의 6년이 지났지만 '두 번째 역병'으로 불리는 그 일로 아프리카 인구의 약 96%가 3개월 만에 줄어 대륙이 사실상 비었다는 기사다. 같은 날 [[lucy-stillman|루시]]가 보낸 '실험체 16번' 보고서도 있다. 애니머스에 오래 노출되어 실험체 16의 유전 구조에 [[bleeding-effect|혼입 효과(Bleeding Effect)]]가 생겼고, 유전 기억과 실시간 기억이 섞여 자기 삶과 조상의 삶을 구별하지 못하게 되었다는 내용이다. 루시는 그의 조상 하나가 고대 극동의 중요한 사건에 관련되었던 것 같다며, 그가 남긴 벽의 글씨를 언어학자와 역사학자에게 조사시키고 있다고 쓴다. 그리고 실험체들을 더 조심히 다뤄야 하며 죽일 필요가 없다고 호소한다.",
        links: ["lucy-stillman", "warren-vidic", "subject-16", "bleeding-effect"],
        sources: [...at(AC1_MB7, 1625, 1674), ...at(AC1_MS, 4970, [5010, 5020])]
      }
    ],

    articles: [
      // ---------- 조직 ----------
      {
        id: "assassins", title: "암살단", category: "조직",
        aliases: ["형제단", "Assassins"],
        summary: "알타이르와 알 무알림이 속한 조직. 마시아프를 본거지로 템플 기사단과 맞선다.",
        body: "## 개요\n[[masyaf|마시아프]]를 본거지로 하며 [[al-mualim|알 무알림]]이 이끈다. [[templars|템플 기사단]]를 가장 큰 적으로 여긴다.\n\n## 무엇을 위해 싸우는가\n알 무알림은 암살단이 '모든 것에서의 평화'를 위해 싸운다고 말한다. 한 사람이 다른 사람에게 가하는 폭력을 끝내는 것뿐 아니라 내면의 평화까지 뜻하며, 둘 중 하나만으로는 이룰 수 없다고 가르친다.\n\n## 신조\n> 어느 것도 진실이 아니고, 모든 것이 허용된다. (Nothing is true, everything is permitted.)\n\n솔로몬 신전 작전에서 [[altair|알타이르]]가 [[malik|말리크]]에게 이 말을 한다. 알 무알림은 이 말이 하고 싶은 대로 해도 된다는 자유가 아니라, 감각을 이끌어 주는 지식이며 지혜를 요구한다고 바로잡는다.\n\n## 세 가지 교리\n- 무고한 자의 몸에 칼을 대지 말 것\n- 눈에 띄지 말고 군중 속에 섞여 숨을 것\n- 형제단을 위태롭게 하지 말 것 (직접적이든 간접적이든)\n\n애니머스 튜토리얼에서 처음 소개되고, 알 무알림이 알타이르를 꾸짖으며 하나씩 다시 설명한다. 알 무알림은 \"암살단의 신조를 준수하지 않는다면 우리는 아무것도 아니다\"라고 말한다.\n\n## 일하는 방식\n- 암살자는 표적을 직접 추적하며, [[investigation|엿듣기, 소매치기, 심문]] 같은 수단을 쓴다.\n- 도시마다 암살단 지부가 있고, [[rafiq|라피크]]가 이를 맡는다.\n\n## 현대\n[[desmond|데스몬드]]는 암살단 공동체에서 자랐다.\n\n## 신조의 뜻 (알타이르의 깨달음)\n- 진실은 우리가 우리 스스로를 신뢰하는 것이다.\n- 세상은 환상이며, 복종할 수도 초월할 수도 있다.\n- 초월이란 어느 것도 진실이 아니며 모든 것은 허용된다는 것, 법칙은 신성함이 아니라 이성에서 나왔다는 것을 인식하는 일이다.\n- 신조는 자유로워지라는 것이 아니라 현명해지라는 것이다.\n\n## 현대의 형제단\n[[warren-vidic|비딕]]에 따르면 앱스테르고는 지난 한 해 동안 암살단의 거주지와 사막 공동체를 수색했다. 데스몬드를 구하러 온 암살자들은 진압되었다.\n\n## 회사 메일 속 암살단\n리킨은 '암살단 놈들이 아직 몇 명 돌아다니고 있다'고 쓰고, 퉁구스카 사건이 암살단의 공격 결과로 보인다고 한다.",
        sources: [...at(AC1_MB1, 980, 1065, 2250, 2560), ...at(AC1_MB2A, 120, 150, 165, 330, 1010), ...at(AC1_MB5A, [2378, 2405]), ...at(AC1_MB6B, [1646, 1661]), ...at(AC1_MS, [4255, 4290], 4470)]
      },
      {
        id: "templars", title: "템플 기사단", category: "조직",
        aliases: ["템플러", "기사단", "Templars", "템플러 기사단"],
        summary: "로베르 드 사블레가 이끄는 기사단. 솔로몬 신전 아래에서 보물을 찾아냈다.",
        body: "## 개요\n한글 자막에서는 주로 '기사단'이라고 부른다. [[assassins|암살단]]과 맞서는 세력이다.\n\n## 영상 속 활동\n- 솔로몬 신전 아래에서 [[temple-treasure|보물]]을 찾아냈다.\n- [[robert-de-sable|로베르 드 사블레]]가 이끌고 신전에서 암살자들과 맞섰다.\n- 빼앗긴 보물을 되찾으려고 [[masyaf|마시아프]]를 습격했다.\n- 암살단 안에 [[masun|마순]] 같은 내통자를 두었다. 마순은 \"기사단의 명분은 정당하다\"고 말한다.\n\n## 정체가 드러남\n[[al-mualim|알 무알림]]은 [[nine-targets|아홉 명의 표적]]이 피의 맹세로 연결되어 있다고 밝힌다. 누구냐는 물음에 \"논 노비스 도미네, 논 노비스(주여, 우리에게 영광을 돌리지 마소서)\"라고 답하고, [[robert-de-sable|로베르 드 사블레]]의 대의에 도시의 지도자와 군대의 사령관들이 모두 충성을 맹세했다고 말한다.\n\n## 목표\n알 무알림에 따르면 그들은 신의 이름이 아니라 자신들을 위해 성지를 '정복'하려 한다. 리차드든 살라후딘이든 기사단에 반대하는 자는 누구든 파괴될 것이며, 그들에게는 그럴 수단이 있다.\n\n## 현대의 기사단\n[[lucy-stillman|루시]]는 데스몬드에게 그의 조상이 제3차 십자군 때 시작한 싸움이 끝나지 않았고, 그가 지금 기사단에게 잡혀 있다고 알려 준다. [[warren-vidic|비딕]]도 루시도 그들을 위해 일하며, [[abstergo|앱스테르고]]는 그들의 회사다. 그들은 아주 잘 숨어 있고, 기사단에 대한 이야기의 절반은 음모론자들에게서, 나머지 절반은 기사단이 일부러 퍼뜨린 거짓 정보에서 나왔다고 한다. 루시는 \"그들이 원하는 건 좋은 거지만, 그걸 행하는 방법은 아주 나쁘다\"고 말한다.\n\n## 계획과 유물\n알 무알림에 따르면 표적들은 자기 도시를 기사단의 이름 아래 두어 기사단이 성지와 그 너머까지 지배하게 하려 했다. 그 계획은 [[temple-treasure|에덴의 조각]]에 달려 있다. 기사단은 잘린 곳이 금세 돋는 히드라 같아서, 한 명이라도 살아남는 한 새로운 세계 질서를 만들려 할 것이라고 한다.\n\n## 알타이르의 정리\n알타이르는 그들이 십자군도 사라센도 아닌 다른 소속이며, 오직 로베르에게 충성한다고 말한다. 예루살렘에서는 한 템플 기사가 십자군을 형제처럼 받아들이자며 평화를 설교했다. 영어 음성에 따르면 그는 \"우리의 깃발 아래 땅이 하나 될 것\"이라고 했다.\n\n## 열 번째 사람\n로베르는 유물의 비밀을 아는 자가 아홉이 아니라 열이었고, 열 번째가 알 무알림이라고 밝힌다.\n\n## 메일 속 모토\n리킨의 '분석' 메일은 \"이해의 아버지께서 성공으로 인도하시길\"로 끝난다.",
        sources: [...at(AC1_MB1, 1080, 1240, 1710, 2020), ...at(AC1_MB2A, 840), ...at(AC1_MB4B, [3087, 3099], [3112, 3133]), ...at(AC1_MB4C, [1744, 1759], [1775, 1780], [1793, 1798]), ...at(AC1_MB5A, [102, 119], 2350, 2427), ...at(AC1_MB6A, [409, 418], 1240), ...at(AC1_MB6B, [1320, 1371]), ...at(AC1_MS, 4484)]
      },
      {
        id: "abstergo", title: "앱스테르고", category: "조직",
        aliases: ["Abstergo", "앱스테르고 인더스트리"],
        summary: "데스몬드를 데려와 애니머스 실험을 하는 회사. 겉으로는 제약회사다.",
        body: "## 개요\n[[desmond|데스몬드]]는 \"여긴 제약회사잖아요\"라고 말한다. [[warren-vidic|비딕]]은 자신의 '고용주'들이 데스몬드의 머릿속에 든 정보를 원한다고 말한다.\n\n## 데스몬드를 찾아낸 방법\n10년 동안 숨어 살던 데스몬드를 운전면허 기록(사진과 지문)으로 찾아냈다. \"이 사람들은 어디에나 있다\"는 말이 뒤따른다.\n\n## 회사\n- 이메일 화면에 정식 이름 'Abstergo Industries'가 나온다.\n- [[lucy-stillman|루시]]에 따르면 세계에서 가장 큰 제약회사 중 하나이고, 가장 중점을 두는 것은 항우울제다.\n- 애니머스는 회사의 공개된 모습이 아니다.\n- 직원들은 회사 정책과 프로젝트에 대해 말하지 못하게 되어 있다. 위반하면 회사가 손해 배상을 청구할 수 있다는 공지 이메일이 돈다.\n\n## 루시를 가둔 방식\n[[lucy-stillman|루시]]를 제품 출시 때까지 비밀 유지를 이유로 회사의 '손님'으로 머물게 했다. 애니머스가 완성되자 무장한 경비들이 그녀를 끌어냈다.\n\n## 레일라 마리노 사건\n전 직원 [[leila-marino|레일라 마리노]]의 죽음에 관한 기록은 봉인되어 있다. 문의 메일에는 담당자 낸시 닐롭이 답을 피하고, 앨런 리킨을 참조로 넣었다.\n\n## '세상을 바꾼다'\n[[warren-vidic|비딕]]에 따르면 앱스테르고와 그 전신은 지난 수천 년간 의학, 기계, 철학의 도약을 이끌었다. 의심을 피하려고 공로를 내세우지 않고 수혜자를 신중히 골랐다. 비딕은 이를 '통제하고 있다'는 뜻이라고 말한다.\n\n## 기사단의 회사\n[[lucy-stillman|루시]]는 앱스테르고가 [[templars|기사단]]의 회사라고 밝힌다.\n\n## 메일로 드러난 일 (이메일 원문)\n- 9월 3일 전 직원에게 회사 정책과 프로젝트를 말하지 말라는 기밀 유지 공지(고용 계약 2.15조)를 보냈다. 소송이 걸려 있다고 한다.\n- 앱스테르고 홀딩스가 '뉴 플루오라이드'라는 합성 약물을 시험하려고 작은 마을의 수돗물을 조작했다는 기사가 났고, 제약 부서가 연방 수사를 받았다.\n- 아이-앱스테르고 위성 발사를 12월 21일로 미뤘다.\n- 획득 부서, 혈통 발견 및 획득 부서 같은 조직이 메일에 나온다.",
        sources: [...at(AC1_MB1, 280, 2660, 2675), ...at(AC1_MB2B, 2295, 2310, 2400), ...at(AC1_MB3B, 2685, 2700, 2865, 2940), ...at(AC1_MB4A, [31, 36], [52, 62]), ...at(AC1_MB4C, 1759), ...at(AC1_MS, [1035, 1145], [3600, 3660], 2540, 4470)]
      },

      // ---------- 인물: 과거 ----------
      {
        id: "altair", title: "알타이르", category: "인물",
        aliases: ["알타이어", "Altaïr"],
        summary: "데스몬드의 선조인 암살자. 실력은 뛰어나지만 오만하다.",
        body: "## 개요\n[[desmond|데스몬드]]가 [[animus|애니머스]]로 기억을 따라가는 선조다. 이 영상의 한글 자막에서는 '알타이어'로 적었다.\n\n## 솔로몬 신전 작전\n- 무고한 노인을 죽이고, 이를 나무라는 [[malik|말리크]]에게 \"난 너보다 위다. 직위와 실력 모두\"라고 말한다.\n- 말리크의 만류를 무시하고 [[robert-de-sable|로베르]]에게 덤볐다가 제압당한다.\n\n## 마시아프\n- [[al-mualim|알 무알림]]은 그를 '나의 최고의 사람'이라 부르며 가장 중요한 임무를 맡겼다.\n- 임무 실패와 [[kadar|카다르]]의 죽음으로 비난받는다.\n- 공방전에서 함정을 작동시켜 템플 기사단 군을 물리친다.\n- 알 무알림에게 신조의 세 교리를 모두 어겼다며 배신자로 단죄된다.\n\n## 강등과 구원의 기회\n- 단죄는 실제 처형이 아니었다. 깨어난 알타이르는 직위와 계급, 장비를 잃고 신입으로 강등된다.\n- 알 무알림은 그가 오만하고 지나치게 자신만만하며 내면의 평화를 찾지 못했다고 말한다.\n- 배신자 [[masun|마순]]을 찾아내 다시 칼을 찰 자격을 얻는다.\n- [[nine-targets|아홉 명의 표적]]을 처단하라는 임무를 받는다. 알타이르는 이를 \"9명과 제 목숨의 교환\"이라고 말한다.\n\n## 다마스쿠스\n- 강등된 뒤 처음으로 직접 표적을 조사해 [[tamir|타미르]]를 암살한다.\n- 라피크는 다른 암살자들이 여전히 알타이르를 낮게 본다고 안타까워하지만, 알타이르는 \"다른 사람들이 뭐라 생각하든 신경 쓰지 않는다\"고 답한다.\n\n## 계급 회복\n표적을 처단할 때마다 [[al-mualim|알 무알림]]이 계급과 장비를 조금씩 돌려준다. 타미르 다음에는 짧은 칼(Short Blade)과 반격 기술을 얻는다.\n\n## 커지는 의문\n[[garnier|가니에르]]가 사람들을 돕고 있다고 믿는 것 같았고 포로들도 그에게 고마워하는 듯했다며 의문을 품는다. 아크레의 라피크와 알 무알림은 궁금해하지 말고 행하라고 말한다.\n\n## 연대를 의심함\n[[abul-nuqoud|아불 누쿠드]]까지 처단한 뒤 알 무알림에게, 처단한 자들이 죽을 때조차 후회 없이 성공을 확신했고 그들을 묶는 연대가 분명히 있다고 말한다. 알 무알림이 깨달으라면서도 생각을 멈추라고 하자 \"자꾸 돌려서 말씀하신다\"고 반발한다.\n\n## 스승에게 맞섬\n표적들이 남기는 이상한 말과 스승의 수수께끼에 지쳐 \"더 이상은 싫습니다\", \"저는 사람을 죽이는 사람입니다\"라고 맞선다. 명예를 잃은 게 아니라 빼앗겼다며, 표적들을 잇는 것이 무엇인지 알려 달라고 '요구'한다. 그 결과 표적들이 [[templars|기사단]]이라는 사실을 듣는다.\n\n## 신뢰의 도약\n알 무알림이 자신을 죽이지 않을 줄 어떻게 알았느냐는 물음에 \"몰랐습니다. 신뢰의 도약을 했을 뿐입니다\"라고 답한다.\n\n## 신조를 깨달음\n알 무알림의 물음에 \"진실은 우리가 우리 스스로를 신뢰하는 것\", \"세상은 환상\"이라고 답한다. 초월한다는 것은 '어느 것도 진실이 아니며 모든 것은 허용된다'는 것, 법칙은 신성함이 아니라 이성에서 나왔다는 것을 인식하는 일이며, \"신조는 우리에게 자유로워지라는 것이 아니라 현명해지라는 것\"이라고 말한다.\n\n## 변화\n다마스쿠스 라피크는 \"자네 확실히 바뀌었어, 더 좋은 쪽으로\"라고 말한다.\n\n## 커지는 회의\n아크레 라피크의 사과에 \"잘못한 것은 나라네. 난 내가 신조보다 위에 있다고 생각했네\"라고 답한다. 시브란드를 처단한 뒤에는 \"내가 잘못된 거라면? 이 사람들이 죽을 운명이 아니었다면? 잘못된 결과였지만 의도는 순수했다면?\"이라고 묻는다.\n\n## 말리크에게 사과\n자기 때문에 말리크가 팔을 잃고 카다르를 잃었다며 처음으로 사과한다.\n\n## 스승을 의심함\n\"스승님은 우리에게 무언가를 숨기고 있다\"며, 템플 기사단과 관련된 문제가 더 깊다고 의심한다. 로베르를 처리하면 마시아프로 돌아가 답을 얻겠다고 한다.\n\n## 로베르 처단과 스승에 대한 의심\n[[arsuf|아수프]]에서 리차드 왕 앞에 나서 로베르의 배신을 고하고, 결투 끝에 로베르를 처단한다. 로베르에게서 열 번째 사람이 알 무알림이라는 말을 듣는다. 리차드에게 \"우리가 무엇인지는 우리가 선택하는 것\"이라고 말하고, 스승과 할 말이 많다며 떠난다.\n\n## 스승을 쓰러뜨림\n홀린 마시아프로 돌아와 [[malik|말리크]]와 힘을 합치고, 유물의 힘을 쓰는 [[al-mualim|알 무알림]]과 싸워 그를 쓰러뜨린다. 마지막에 신조를 아랍어로 \"La shai'a waqe'on mutlak bal kollon mumkin\"이라고 말한다. 유물을 파괴해야 한다고 했지만 결국 파괴하지 못하고, 유물이 보여 주는 지도를 보게 된다.",
        sources: [...at(AC1_MB1, 1065, 1215, 1275, 1620, 2120, 2340), ...at(AC1_MB2A, 105, 165, 178, 900, 975), ...at(AC1_MB2B, 1890, 2130, 2148), ...at(AC1_MB3A, 202, 225, 2966, 2986, 3046, 3126), ...at(AC1_MB4A, [2897, 2905], [2942, 2944]), ...at(AC1_MB4B, [3041, 3068], 3087, [3217, 3220]), ...at(AC1_MB5A, [374, 376], [2379, 2405]), ...at(AC1_MB5B, [76, 78], [1997, 2000]), ...at(AC1_MB6A, [1625, 1644], [2349, 2364]), ...at(AC1_MB6B, [834, 902], [1300, 1371], [1490, 1495], [1539, 1550]), ...at(AC1_MB7, [328, 368], [1051, 1060], [1096, 1121], 1130)]
      },
      {
        id: "al-mualim", title: "알 무알림", category: "인물",
        aliases: ["Al Mualim", "스승"],
        summary: "마시아프 암살단을 이끈 스승. 에덴의 조각으로 사람들을 홀리려다 알타이르에게 쓰러졌다.",
        body: "## 개요\n[[masyaf|마시아프]] 요새의 도서관에서 [[assassins|암살단]]을 이끈다. 솔로몬 신전 아래의 [[temple-treasure|보물]]을 되찾는 일을 가장 중요한 임무로 여겼다.\n\n## 마시아프 공방전\n[[robert-de-sable|로베르]]가 인질을 앞세워 보물을 요구하자 \"우리 병사들은 죽음을 두려워하지 않는다\"며 맞섰다. 암살자들에게 탑에서 뛰어내리라고 명령해 기사들에게 두려움 없음을 보여 주었다.\n\n## 알타이르 단죄\n공방전이 끝난 뒤 신조의 세 교리를 하나씩 짚으며, 모두 어긴 [[altair|알타이르]]를 배신자로 단죄했다. 그러나 실제로 죽이지는 않았다. \"자네는 내가 보여 주려던 것을 본 것이고, 죽은 자의 잠에 빠지게 된 것\"이라고 밝히고, 그를 신입으로 강등해 구원의 기회를 주었다.\n\n## 배신자 처단\n누군가 [[robert-de-sable|로베르]]를 도왔다며 알타이르에게 배신자를 찾게 했다. 끌려온 [[masun|마순]]이 뉘우치기를 거부하자 직접 처형했다. 마순을 도운 사람에 대해서는 \"타락한 의지를 가진 자는 반드시 파괴되어야 한다\"며 [[jamal|자말]]을 지켜보겠다고 말한다.\n\n## 아홉 명의 표적\n알타이르에게 [[nine-targets|아홉 명의 이름]]이 적힌 목록을 주고, 그들을 죽여 평화의 씨앗을 심으라고 명령했다.\n\n## 궁금증을 경계함\n[[tamir|타미르]]가 자신을 잘 아는 듯 말했다는 보고에 \"자네의 큰 실패는 너무 많은 궁금증에서 비롯됐다\"고 답한다. 정보를 주지 않는 것은 알타이르가 같은 실수를 되풀이하지 않게 하려는 것이라고 말한다.\n\n## 낙원의 약속\n적들은 알 무알림이 암살자들에게 약을 먹이고 여자와 환락의 정원을 보상으로 유혹한다고 비난한다. 알 무알림은 사람들이 진실을 몰라야 한다고 말한다. 암살단이 평화만을 원한다는 것을 알면 더는 두려워하지 않을 것이고, 그러면 암살단이 그들에게 맞설 수 없기 때문이다.\n\n## 세 도시의 지도자\n[[king-richard|리차드 왕]]과 [[salahuddin|살라후딘]]을 죽이면 군대가 흩어져 땅이 짓밟힐 것이라며, 대신 그들이 없는 동안 도시를 다스리는 [[abul-nuqoud|아불 누쿠드]], [[majd-addin|마아드 아딘]], [[william-of-montferrat|몽페라트의 윌리엄]]을 처단하라고 명령한다.\n\n## 질서와 권위\n표적들을 잇는 연대가 있다는 알타이르의 말에 \"진실이라고 들리는 것과 진실을 보는 것 사이에 차이가 있다\"고 답한다. 의문을 품는 것은 암살자의 본성이지만 생각을 멈추고 스승을 믿는 것도 의무라며, \"질서 없이는 진정한 평화도 없고, 질서는 권위가 있어야 한다\"고 말한다. 알타이르는 \"자꾸 돌려서 말씀하신다\"고 반발한다.\n\n## 기사단의 정체를 밝힘\n수수께끼만 준다며 맞서는 알타이르에게 표적들이 피의 맹세로 연결된 [[templars|기사단]]이라고 밝힌다. 진실을 숨긴 이유로는 알타이르가 스스로 베일을 걷어 내길 바랐고, 얻어 낸 정보가 주어진 정보보다 귀하며, 최근 행동이 믿음을 주지 못했다는 점을 든다.\n\n## 신뢰의 도약\n\"내가 너를 죽이지 않을 것을 어떻게 알았는가?\"라고 묻자 알타이르는 \"몰랐습니다. 신뢰의 도약을 했을 뿐입니다\"라고 답한다.\n\n## 에덴의 조각을 보여 줌\n기사단의 계획이 [[temple-treasure|에덴의 조각]]에 달려 있다며 알타이르에게 유물을 보여 주고 그 역사와 힘을 설명한다.\n\n## 진실과 환상\n\"진실이란 무엇이냐\"는 물음에 알타이르가 세상은 환상이고 신조는 현명해지라는 뜻이라고 답하자, 기사단은 그 환상을 이용해 지배하려 하기에 위협이라고 말한다. 기사단을 잘라도 다시 돋는 히드라에 비유하고, 남은 한 명이 죽으면 로베르 드 사블레가 마침내 상처를 입을 것이라고 한다.\n\n## 로베르에 대하여\n로베르가 꿈꾸는 '모든 사람이 하나가 된 세상'이라는 목표에 공감한다고 말한다. 다만 평화는 배우고 이해하고 수용해야 하는 것이며, 로베르는 그것을 강요해 자유 의지를 빼앗으려 한다고 한다. 알타이르에게 \"희생자들에게 증오를 품지 마라\"고 당부한다.\n\n## 열 번째 사람\n[[robert-de-sable|로베르]]는 죽기 전에 유물을 찾은 사람은 아홉이 아니라 열 명이었고, 그 열 번째가 알 무알림이라고 밝힌다. 그래서 알 무알림이 기사단을 그렇게 잘 알았으며, 그도 유물에 관심이 있지만 나눌 생각이 없을 뿐이라고 한다. 알타이르는 \"그는 암살단의 스승님이시다\"라고 반박한다. 리차드 왕에게는 \"그분도 잘못이 없는 것은 아닌 것 같다\"고 말한다.\n\n## 배신\n로베르의 일지를 본 [[malik|말리크]]에 따르면 알 무알림은 지금까지 암살자들을 이용했고, 성지를 그에게 넘겨준 꼴이 되었다. 그는 유물로 마시아프 사람들과 암살자들을 홀렸다. 알타이르에게 \"어느 것도 진실이 아니고, 모든 것은 허용된다는 증거를 찾았다\"며 템플 기사단원들을 죽여야 했던 이유를 밝힌다. 모든 기적과 신들이 유물이 만든 환상이었고, 자신은 피를 덜 흘리는 다른 환상을 주려 했다고 말한다.\n\n## 최후\n알타이르에게 쓰러진다. 유물을 파괴하라고 하면서도 \"넌 할 수 있다. 하지만 그러지 않겠지\"라는 말을 남긴다.",
        sources: [...at(AC1_MB1, 1580, 1620, 2070, 2085, 2250, 2340), ...at(AC1_MB2A, 105, 240, 900, [930, 940], 952), ...at(AC1_MB3A, [184, 188], [3096, 3101], [3112, 3118]), ...at(AC1_MB4A, 213, 227, 240, 2911, [2927, 2942]), ...at(AC1_MB4B, [3087, 3095], [3149, 3164], [3214, 3220]), ...at(AC1_MB5A, 119, [2340, 2350], 2378, [2405, 2410], 2438), ...at(AC1_MB6A, [229, 248], 254), ...at(AC1_MB6B, [1320, 1371], [1539, 1545]), ...at(AC1_MB7, [71, 100], [343, 368], [466, 520], [763, 909], [1051, 1121])]
      },
      {
        id: "malik", title: "말리크", category: "인물",
        aliases: ["말릭", "Malik"],
        summary: "알타이르와 함께 솔로몬 신전 작전에 나선 암살자. 동생 카다르를 잃었다.",
        body: "## 개요\n동생 [[kadar|카다르]]와 함께 [[altair|알타이르]]를 따라 솔로몬 신전 작전에 나섰다. 이 영상의 한글 자막에서는 '말릭'으로 적었다.\n\n## 솔로몬 신전\n- 무고한 노인을 죽인 알타이르에게 \"나는 주의를 끌지 않았을 것이고, 무고한 사람의 목숨도 빼앗지 않았을 것\"이라고 말한다.\n- \"우리의 목표는 보물을 되찾는 것이고, 필요할 때만 로베르를 상대해야 한다\"며 알타이르를 말린다.\n\n## 마시아프\n동생을 잃고 돌아와 \"바로 당신 때문\"이라며 알타이르를 탓한다. 그러면서도 [[temple-treasure|신전의 보물]]을 [[al-mualim|알 무알림]]에게 가져왔다.\n\n알 무알림에 따르면 말리크는 동생의 죽음을 알타이르의 목숨으로 갚는 것이 공평하다고 생각했다.\n\n## 예루살렘 지부\n[[jerusalem|예루살렘]] 암살단 지부를 맡고 있다. 찾아온 알타이르에게 \"자네 자신을 돌아보라고 시킨 사소한 일\"이라며 냉랭하게 굴지만, [[talal|탈랄]]을 조사할 장소를 알려 준다. 알타이르가 탈랄을 처단하고 돌아오자 온 도시가 다 알게 됐다며 은밀함을 잊었냐고 꾸짖는다.\n\n## 다시 예루살렘에서\n[[majd-addin|마아드 아딘]] 조사를 돕는다. 알타이르가 도움을 요구하지 않고 요청하자 \"인상 깊군\"이라고 한다. 알타이르는 그를 '다이'(상위 직책)라고 부르고, 말리크는 알타이르를 '신참'이라 부른다. 처형될 형제단원의 구출은 자기 부하들에게 맡기고, 알타이르에게는 마아드 아딘이 그를 죽이지 못하게 막으라고 부탁했다. 일을 마친 알타이르에게는 \"더도 말고, 덜도 말고\" 해야 할 일을 했을 뿐이라고 말한다.\n\n## 화해\n알타이르가 \"자네는 나 때문에 팔을 잃었고, 카다르를 잃었다\"며 사과하자, 말리크는 그가 솔로몬 사원에 함께 갔던 자와는 다른 사람이라며 사과할 것이 없다고 답한다. 자신도 질투 때문에 부주의했다고 털어놓고 \"우리는 하나\"라고 말한다.\n\n## 아수프로 떠나는 알타이르를 말림\n스승의 허락 없이 움직이면 형제단을 위협한다며 마시아프로 돌아가라고 하지만, 알타이르는 그에게 자신이 죽인 자들을 섬겼던 사람들을 살펴보라고 부탁한다.\n\n## 마시아프 탈환\n솔로몬 신전 아래 유적에서 로베르의 일지를 찾아 알 무알림의 배신을 알게 된다. 부하들을 이끌고 마시아프로 와서 알타이르를 돕고, 홀린 사람들의 주의를 돌려 요새를 점령한다. 알타이르를 '다이(상위 직책)'라고 부른다.",
        sources: [...at(AC1_MB1, 1055, 1200, 1675, 1695), ...at(AC1_MB2A, 178), ...at(AC1_MB3B, 845, 870, 2470), ...at(AC1_MB4C, 74, 87, 997, 1045, 1056, 1646), ...at(AC1_MB6A, [1620, 1684], [2341, 2393]), ...at(AC1_MB7, [328, 416])]
      },
      {
        id: "kadar", title: "카다르", category: "인물",
        aliases: ["카타르", "Kadar"],
        summary: "말리크의 동생. 솔로몬 신전 작전에서 목숨을 잃었다.",
        body: "## 개요\n형 [[malik|말리크]]와 함께 [[altair|알타이르]]의 솔로몬 신전 작전에 나섰다. 알타이르가 노인을 죽이자 \"완벽하군요\"라며 감탄했다. 이 영상의 한글 자막에서는 '카타르'로 적었다.\n\n## 죽음\n작전에서 돌아오지 못했다. 말리크는 알타이르가 경고를 듣지 않아 동생이 죽었다고 말한다.\n\n## 말리크의 고백\n말리크는 알타이르를 그렇게 질투하지 않았다면 자신도 부주의하지 않았을 것이라며, 자기에게도 잘못이 있다고 말한다.",
        sources: [...at(AC1_MB1, 1035, [1665, 1675]), ...at(AC1_MB6A, [1661, 1667])]
      },
      {
        id: "robert-de-sable", title: "로베르 드 사블레", category: "인물",
        aliases: ["로베르", "로베르 드 사브레", "Robert de Sable"],
        summary: "템플 기사단을 이끈 기사. 아홉 명의 표적 중 마지막으로 처단되었다.",
        body: "## 개요\n[[templars|템플 기사단]]을 이끄는 기사다. 알타이르는 그를 '우리의 가장 강력한 적'이라 불렀다.\n\n## 솔로몬 신전\n덤벼든 [[altair|알타이르]]를 손쉽게 제압해 내던지고 \"성지는 너희 것이 아니다. 기회가 있을 때 당장 달아나라. 그렇지 않다면 죽음뿐이다\"라고 경고했다.\n\n## 마시아프 습격\n[[masyaf|마시아프]]를 공격하고, 인질을 앞세워 [[al-mualim|알 무알림]]에게 \"내게서 훔쳐 간 것\"을 내놓으라고 요구했다. 결국 함정에 군대가 무너져 물러났다.\n\n## 내부의 조력자\n알 무알림은 암살단 안의 누군가가 로베르를 도왔다고 말한다. 그 배신자는 [[masun|마순]]이었다.\n\n## 표적들의 중심\n알 무알림은 알타이르가 처단한 표적들이 모두 로베르의 대의에 충성을 맹세한 [[templars|기사단]]이라고 밝히며, \"이제 로베르 드 사블레의 진정한 영향력을 깨달았군\"이라고 말한다. 이 영상의 한글 자막에서는 '로베르 드 사브레'로 적었다.\n\n## 유물에 잠식됨\n[[al-mualim|알 무알림]]에 따르면 로베르는 [[temple-treasure|에덴의 조각]]의 힘을 맛본 뒤 그 힘에 잠식되었다. 그는 우리처럼 평화를, 모든 사람이 하나가 된 세상을 꿈꾸지만, 그 평화를 강요해 자유 의지를 빼앗으려 한다.\n\n## 장례식의 대역\n[[majd-addin|마아드 아딘]]의 장례에 나타난 것은 로베르가 아니라 대역 [[maria|마리아]]였다. 그녀에 따르면 로베르는 사라센과 십자군이 힘을 합쳐 암살단에 맞서도록 간청하러 [[arsuf|아수프]]로 갔다.\n\n## 리차드 왕의 부관\n[[arsuf|아수프]]에서 리차드 왕의 부관으로 나타난다. 알타이르가 배신을 고하자, 암살자들은 조작의 대가이며 알타이르는 요새를 지키려 할 뿐이라고 맞섰다. 리차드는 결투로 판단을 내리게 했다.\n\n## 최후\n결투에서 [[altair|알타이르]]에게 쓰러진다. 유물의 비밀을 아는 자는 아홉이 아니라 열이며, 열 번째가 [[al-mualim|알 무알림]]이라고 밝힌다. 알 무알림이 기사단을 그렇게 잘 알았던 것도, 유물에 관심이 있는 것도 그 때문이며, 둘의 유일한 차이는 알 무알림이 유물을 나눌 생각이 없다는 점이라고 말한다. \"네 위대한 적인 내가 네 안전장치였다. 다음엔 네 차례겠지\"라는 말을 남긴다.",
        sources: [...at(AC1_MB1, 1210, 1275, 2020, 2200), ...at(AC1_MB2A, 240, 840), ...at(AC1_MB4B, [3104, 3112]), ...at(AC1_MB6A, [164, 213], [221, 248], [2000, 2058], [2276, 2290]), ...at(AC1_MB6B, [851, 902], [931, 949], [1300, 1398])]
      },

      // ---------- 인물: 현대 ----------
      {
        id: "desmond", title: "데스몬드 마일즈", category: "인물",
        aliases: ["데스몬드", "Desmond Miles", "데스몬드 마일스", "실험체 17", "Subject 17"],
        summary: "앱스테르고에 끌려와 애니머스 실험을 받는 바텐더. 알타이르의 후손.",
        body: "## 개요\n바텐더로 일하던 중 [[abstergo|앱스테르고]]에 끌려왔다. [[warren-vidic|비딕]]은 그가 암살자이며, 머릿속에 자신들이 원하는 정보가 있다고 말한다.\n\n## 애니머스\n협조하지 않으면 혼수 상태로 만들어 작업을 이어 간 뒤 죽게 두겠다는 협박에 [[animus|애니머스]]에 눕는다. 선조 [[altair|알타이르]]의 기억을 따라간다.\n\n## 과거\n- 30명 남짓한 암살단 공동체에서 자랐다. 그곳을 '농장'이라고 불렀다.\n- 부모를 감시자처럼 느껴 16살에 도망쳤다.\n- 10년 동안 다른 암살자와 접촉 없이 현금만 쓰며 살았지만, 운전면허 기록 때문에 앱스테르고에 발견됐다.\n\n## 구출 시도\n[[lucy-stillman|루시]]는 암살자들이 데스몬드를 구하러 올 것 같다며 \"아마 당신은 당신 생각보다 더 중요한 사람\"이라고 말한다. 데스몬드는 이때 처음으로 자신이 [[templars|기사단]]에게 잡혀 있다는 것을 알게 된다.\n\n## 마지막 기억\n[[lucy-stillman|루시]]는 그들이 데스몬드의 마지막 기억에 접근하는 순간이 시작일 뿐이라고 경고한다. 비딕과 대화한 누군가는 일이 끝나면 '그'를 처리하겠다는 듯 말한다.\n\n## 실패한 구출\n암살자들의 구출 시도가 진압되고, 비딕은 데스몬드를 위해 올 암살자는 남지 않았다고 말한다. 루시에 따르면 부모님은 도망친 것 같다.\n\n## 살아남음\n지도를 얻은 기사단은 데스몬드를 죽이려 했지만, 루시의 만류로 \"더 이상 필요 없다고 확신이 들 때까지\" 살려 두기로 한다.\n\n## 벽의 글씨\n방 곳곳에서 빛나는 글씨와 그림을 보게 된다. 업로더 설명 자막에 따르면 이는 조상의 기억이 현실에 섞이는 혼입 효과 때문이다.\n\n## 실험체 17\n애니머스 튜토리얼이 시작될 때 애니머스 음성이 그를 'subject 17(실험체 17)'이라고 부른다. 화면 글자나 한글 자막으로는 나오지 않고 음성으로만 나온다.\n\n## 회사 메일 속 실험체 17\n리킨의 메일에서 데스몬드는 'Subject Seventeen(실험체 17)'으로 불린다. 리킨은 그가 '은퇴'할 경우를 대비해 다른 실험체를 구하겠다고 쓰고, 그가 자신도 모르게 다른 유물들의 위치를 알고 있으니 마지막 기억을 반드시 열어야 한다고 말한다.",
        sources: [...at(AC1_MB1, 260, 280, 300, 2560, 2600, 2675), ...at(AC1_MB4C, [1729, 1734], 1749), ...at(AC1_MB5B, [2063, 2065], 2111), ...at(AC1_MB6B, [1574, 1661], [1704, 1737]), ...at(AC1_MB7, [1195, 1229], [1290, 1313], 1674), ...at(AC1_MB1, 506), ...at(AC1_MS, [4255, 4290], [4442, 4485])]
      },
      {
        id: "warren-vidic", title: "워렌 비딕", category: "인물",
        aliases: ["비딕", "Vidic", "Warren Vidic"],
        summary: "앱스테르고에서 애니머스로 데스몬드를 실험하는 박사.",
        body: "## 개요\n[[desmond|데스몬드]]를 [[animus|애니머스]]에 눕혀 실험한다. 협조하지 않으면 혼수 상태로 만들어 작업을 이어 가고, 끝나면 죽게 두겠다고 협박했다.\n\n## 유전 기억 연구\n30년 동안 연구한 끝에, DNA가 세대를 이어 내려온 유전 정보뿐 아니라 선조의 기억까지 담은 기록 보관소라는 사실을 알아냈다고 말한다.\n\n## 루시와의 갈등\n데스몬드를 더 오래 애니머스에 두려 하다가 이를 말리는 [[lucy-stillman|루시]]와 다툰다.\n\n## '재교육'\n데스몬드의 선조들이 '거의' 옳았다고 말한다. 부패는 암과 같아 종양만 잘라 내서는 시간을 버는 정도에 그치며, 포괄적이고 체계적인 개입, 즉 대중의 '재교육'이 필요하다고 주장한다. 자신의 해결책은 비밀이라며 밝히지 않는다.\n\n## 루시를 구함\n애니머스가 완성된 뒤 무장한 경비들이 [[lucy-stillman|루시]]를 해치려 하자 그들을 물리쳤다. 루시는 그가 행복한 사람도, 좋은 사람도 아니지만 자신의 목숨을 구했다고 말한다.\n\n## 레일라 마리노\n루시가 [[leila-marino|레일라 마리노]]의 죽음을 묻자 \"그녀는 자살했다\", \"이제 그만 덮어라\"라고 답장했다.\n\n## '질서'\n세상은 난장판이고 천 년이 지나도 사회는 야만적이라며, 세계에 필요한 것은 질서라고 말한다. 방향을 갈망하는 인류에게 어떻게 살아야 하는지 말해 주면 모든 갈등이 끝날 것이라고 한다. 데스몬드에게는 \"그게 어디 있는지 보여 주기만 하면 된다\"고 말한다.\n\n## '선물'\n의학, 기계, 철학의 획기적인 도약이 앱스테르고와 그 전신에게서 나왔다고 말한다. 그것들은 발명한 것이 아니라 발견한 것이며, '우리 이전에 온 존재들로부터의 선물'이라고 한다.\n\n## 기사단\n[[lucy-stillman|루시]]에 따르면 비딕은 [[templars|기사단]]을 위해 일한다. 암살자들이 데스몬드를 구하러 올 것 같다는 연락을 받은 듯 서둘러 세션을 끝낸다.\n\n## 누군가에게 보고함\n이름이 나오지 않은 누군가에게 \"거의 다 끝나 갑니다\"라고 보고한다. 상대는 그것을 되찾고 일이 끝나면 \"그는 처리될 것\"이냐고 묻고, 내일 아침까지 진행 보고서를 원한다고 한다.\n\n## 애니머스와 역사\n누구나 책을 쓰고 원하는 내용을 넣을 수 있다며 보고 읽는 모든 것을 믿지 말라고 한다. 애니머스는 오해의 여지가 없어 특별하다고 말한다.\n\n## 구출 시도 진압\n암살자들이 연구소를 공격하자 데스몬드가 불러들인 것으로 의심한다. 진압한 뒤, 지난 한 해 동안 암살단 거주지를 수색해 왔으니 데스몬드를 위해 올 암살자는 남아 있지 않다고 말한다.\n\n## 지도 획득\n애니머스로 유물의 지도를 보고 \"드디어 찾았다\"며 상대에게 보고한다. 데스몬드를 죽이려 했지만 루시의 만류로 미뤄진다. 상대는 데스몬드가 더 이상 필요 없다는 확신이 들면 그때 죽이라고 결정한다.\n\n## '프로젝트 책임자 #9'\n리킨의 '분석' 메일이 '프로젝트 책임자 #9' 받은 편지함에 와 있다. 비딕의 메일함을 보다가 열린 화면이다. 리킨은 그에게 미첼-헤지스 통신기 하나를 계속 갖고 있으라고 한다.\n\n## 압박\n리킨은 결과를 내지 못하면 실험체 17을 포기하겠다고 압박하고, 루시 문제도 그에게 책임지라고 한다.",
        sources: [...at(AC1_MB1, 300, 335, 400, 420, 2370), ...at(AC1_MB2A, 15, 30, 45, 60), ...at(AC1_MB3B, 2535, [2740, 2745], 2970), ...at(AC1_MB3A, 35, 53, 68, 84, 110), ...at(AC1_MB4A, 36, [74, 82]), ...at(AC1_MB4C, 1697, 1756), ...at(AC1_MB5B, [2055, 2066]), ...at(AC1_MB6A, [61, 113]), ...at(AC1_MB6B, [1574, 1661]), ...at(AC1_MB7, [1141, 1229]), ...at(AC1_MS, [4442, 4485], [4184, 4290], [2835, 2875])]
      },
      {
        id: "lucy-stillman", title: "루시 스틸먼", category: "인물",
        aliases: ["루시", "스틸만", "Lucy Stillman"],
        summary: "비딕과 함께 데스몬드의 애니머스 실험을 지켜보는 사람.",
        body: "## 개요\n[[warren-vidic|비딕]]과 함께 [[desmond|데스몬드]]의 [[animus|애니머스]] 실험을 지켜본다. 이 영상의 한글 자막에서 비딕은 그녀를 '스틸만 양'이라고 부른다.\n\n## 데스몬드를 걱정함\n- 데스몬드를 너무 오래 애니머스에 두면 안 된다며 비딕을 말린다.\n- 무리하게 밀어붙이면 데스몬드가 무너질 것이라고 경고한다.\n- 데스몬드에게서 암살단 공동체에서 자란 과거를 듣는다.\n\n## 기한\n데스몬드에게 실험의 기한이 일주일이고 이제 6일 남았다고 털어놓는다. 무엇을 찾는지는 끝내 말하지 않지만, 애니머스의 번역 기능과 앱스테르고에 대해서는 알려 준다.\n\n## 이메일\n루시의 받은 편지함에는 비딕에게 보낸 메일이 있다. 주차장에서 주운 비딕의 출입 키 펜을 돌려주며, 보안팀이 발견했다면 컴퓨터 접근 코드를 모두 바꾸느라 적어도 하루는 문을 닫았을 것이라고 주의를 준다. 메일 날짜는 9월 2~3일이다(연도는 나오지 않는다).\n\n## 앱스테르고에 오기까지\n- 박사 과정을 마칠 무렵, 대학은 그녀의 연구를 사이비 과학이라 부르며 받아 주지 않았다. 다른 대학과 회사에서도 마찬가지였다.\n- 돈도 시간도 떨어졌을 때 [[warren-vidic|비딕]]에게서 편지를 받았다. 학부 때부터 그녀의 경력을 지켜봤다는 내용이었다.\n- 앱스테르고에서 애니머스 프로젝트를 돕는 일을 제안받았다. 제품이 출시될 때까지 6개월에서 1년 정도 회사의 '손님'으로 지내야 한다는 조건이었다.\n- 애니머스가 완성되자 무장한 경비 세 명이 자는 그녀를 끌어냈다. 그중에는 함께 점심을 먹던 리처드도 있었다. 죽을 뻔했지만 비딕이 막아 주었다.\n- 애니머스를 직접 만들지는 않았지만 조립을 감독했다.\n\n## 레일라 마리노\n회사에 [[leila-marino|레일라 마리노]]의 죽음에 대해 물었지만 답을 얻지 못했다. 이메일에 \"그녀는 내 친구였다\"고 썼다.\n\n## 기사단에 대해 털어놓음\n데스몬드에게 그가 [[templars|기사단]]에게 잡혀 있고, 비딕과 자신도 그들을 위해 일한다고 알려 준다. 떠나면서 \"질문에 대한 답은 바로 당신 앞에 있어요. 어디를 봐야 할지 알아야 할 뿐이에요\"라고 남긴다.\n\n## 회사의 경계\n앨런 리킨은 비딕에게 루시가 또 들쑤시고 있으니 처리하라는 메일을 보냈다.\n\n## 데스몬드에게 털어놓음\n비딕이 자리를 비운 사이 데스몬드를 애니머스에서 꺼내, 그들이 데스몬드의 마지막 기억에 접근하면 모든 것을 바꾸려 할 것이라고 알려 준다. 비딕에게는 \"여기는 모두 '덴버'입니다\"라고 둘러댄다. 영어 음성에 따르면 '덴버'는 사고가 일어난 덴버 국제공항 지하 시설을 가리킨다.\n\n## 믿음을 가져요\n데스몬드의 부모가 살던 사막 공동체는 이미 비어 있었다며 부모님이 도망쳤을 것 같다고 말한다. 절망한 데스몬드에게 \"믿음을 가져요\"라고 한다. 업로더 자막에 따르면 이때 약지를 접어 암살단을 뜻하는 몸짓을 보인다.\n\n## 데스몬드를 살림\n상대가 데스몬드를 처리하려 하자, 그의 기억이 더 필요할 수 있다며 막는다. 업로더 설명 자막에 따르면, 엔딩 뒤 이메일에서 비딕에게 혼입 효과를 설명한다.\n\n## 비밀 메일\n9월 6일 메일에서 루시는 이름 없는 상대와 'DIA 사건'에 대한 정보를 주고받는다. 위성이 '유물을 위한 저궤도 송신기'이며 성공하면 그들이 모든 것을 지배할 것이라고 알리고, 구조대를 보내 달라고 요청한다. 그 메일은 스팸처럼 위장되어 있었다.\n\n## 실험체 16 보고서\n9월 8일 비딕에게 실험체 16의 혼입 효과 보고서를 보내며, 실험체들을 더 조심히 다뤄야 하고 죽일 필요가 없다고 호소한다.",
        sources: [...at(AC1_MB1, 180, 210, 2370, 2480, 2560), ...at(AC1_MB2B, 2175, 2205, 2240, 2340, 2385), ...at(AC1_MB3B, 2580, 2600, 2640, 2655, 2685, 2700, 2740, 2925), ...at(AC1_MB4C, [1748, 1756], [1826, 1829], 2351), ...at(AC1_MB5B, 2098, [2111, 2116], 2202, 2220), ...at(AC1_MB6B, [1704, 1750]), ...at(AC1_MB7, [1199, 1215], 1674), ...at(AC1_MS, [3335, 3465], [5010, 5020])]
      },

      // ---------- 장소·물건 ----------
      {
        id: "masyaf", title: "마시아프", category: "장소",
        aliases: ["Masyaf"],
        summary: "암살단의 본거지. 산 위의 요새와 그 아래 마을로 이루어져 있다.",
        body: "## 개요\n[[assassins|암살단]]의 본거지다. 요새 탑의 도서관에서 [[al-mualim|알 무알림]]이 암살단을 이끈다. 요새 안에서는 무기 사용이 제한된다. 요새 안뜰에서는 [[rauf|라우프]]가 훈련생들에게 검술을 가르친다.\n\n## 공방전\n[[robert-de-sable|로베르]]의 템플 기사단 군이 마을을 습격했다. 암살단은 함정으로 적을 물리쳤다. 이때 [[masun|마순]]이 문을 열어 기사단을 들여보냈다.\n\n## 공방전 이후\n마을 사람들은 습격으로 많은 것을 잃었다. 마순은 마을에서 알 무알림을 '마시아프의 미친 사람'이라 부르며 반란을 선동했다.\n\n## 홀린 마시아프\n알 무알림이 유물로 마을 주민들과 암살자들을 홀렸다. 그들은 \"스승님께서 보여 주시는 것만이 존재한다\"며 알타이르를 공격했다. 말리크의 부하들이 요새를 점령하고, 알타이르는 요새 정원에서 알 무알림과 맞섰다.",
        sources: [...at(AC1_MB1, 1360, 1560, 1710, 2120), ...at(AC1_MB2A, 405, 540, 750, 1080), ...at(AC1_MB7, [71, 100], [278, 286], [389, 400])]
      },
      {
        id: "temple-treasure", title: "에덴의 조각", category: "물건",
        aliases: ["신전의 보물", "보물", "유물", "솔로몬 신전의 보물", "Piece of Eden"],
        summary: "기사단이 솔로몬 신전 아래에서 찾아낸 유물. 바라보는 자의 마음과 정신을 지배한다.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 [[templars|템플 기사단]]가 솔로몬 신전 아래에서 무언가를 찾았다고 보고 [[altair|알타이르]]에게 회수를 맡겼다. 처음에는 정체가 밝혀지지 않았지만, Memory Block 5에서 알 무알림이 '기사단의 유물인 에덴의 조각'이라고 밝힌다.\n\n## 행방\n- 알타이르는 회수에 실패했다.\n- [[malik|말리크]]가 이를 가지고 마시아프로 돌아와 알 무알림에게 건넸다.\n- [[robert-de-sable|로베르]]는 이것을 되찾으려고 마시아프를 습격했다.\n\n## 알 무알림의 대답\n알타이르가 솔로몬 사원에서 말리크가 되찾아 온 유물이 무엇이며 로베르가 왜 그토록 되찾으려 했는지 묻는다. 알 무알림은 때가 되면 기사단의 임무가 드러났듯 유물의 본질도 드러날 것이라며, 지금은 그것이 기사단이 아니라 우리 손에 있다는 데 안심하라고 답한다. 이 영상의 한글 자막은 '유물'이라고 부른다.\n\n## 정체\n[[al-mualim|알 무알림]]은 이것을 '기사단의 유물인 에덴의 조각'이라 부르며 \"유혹이다\"라고 말한다. 알타이르의 눈에는 평범한 은 덩어리처럼 보인다.\n\n## 알 무알림이 말한 역사\n- 아담과 이브를 내쫓았다.\n- 막대기를 뱀으로 바꾸고, 홍해를 가르고 닫았다.\n- 에리스가 트로이 전쟁에 사용했다.\n- 가난한 농부가 이것으로 물을 와인으로 바꿨다.\n\n## 힘\n이것을 든 자는 바라보는 자의 마음과 정신을 지배한다. 사람들은 이를 '맛본 자'라고 말한다.\n\n## 기사단의 계획\n[[templars|기사단]]의 계획은 이 유물에 달려 있었다. [[garnier|가니에르]]의 사람들은 약초로 유물의 효과를 흉내 낸 실험이었고, 도시의 지배자들은 시민을 '완벽한 시민, 완벽한 군인'으로 만들려 했다. 알 무알림은 기사단이 유물을 다시 노리지 못하게 잠가 두었다고 말한다.\n\n## 현대의 행방 (영어 음성 기준)\n[[lucy-stillman|루시]]에 따르면 마시아프의 유물은 그들이 가지고 있었지만 덴버의 지하 시설에서 일어난 '사고'로 파괴되었다. 유물은 하나가 아니며, 그들은 데스몬드의 조상이 다른 유물들의 위치를 보여 주기를 바란다. 루시는 그들이 이 '기사단 유물'로 우리가 사는 방식, 생각하는 방식, 존재하는 방식을 모두 바꾸려 한다고 말한다.\n\n## 알 무알림의 관심\n로베르에 따르면 알 무알림도 유물에 관심이 있고, 다만 그것을 나눌 생각이 없을 뿐이다.\n\n## 환상의 힘\n[[al-mualim|알 무알림]]은 홍해가 갈라진 것도, 물이 와인으로 변한 것도, 트로이 전쟁도 모두 유물이 만든 환상이었다고 말한다. 그는 유물로 마시아프 사람들을 홀리고, 알타이르와 싸울 때 환영을 만들어 냈다.\n\n## 지도\n알 무알림이 죽은 뒤 알타이르가 유물을 들자 빛나는 지구 모양의 지도가 떠올랐다. 현대의 [[warren-vidic|비딕]]은 이 지도를 보고, 유물이 적어도 여섯 개이며 그중 적어도 두 개는 지금은 없는 대륙에 있다고 보고한다.\n\n## 회사 메일 속 유물 (이메일 원문)\n- 리킨의 '분석' 메일은 데스몬드가 찾는 유물을 '에덴의 조각(3번)'이라 부르고, '2번'은 DIA 위성 사고로 잃었다고 쓴다.\n- 같은 메일에 필라델피아 프로젝트의 유물, 퉁구스카 사건의 유물, 성배, 미첼-헤지스 통신기도 나온다. 성배를 뺀 그리스도와 관련된 다른 유물들은 '에덴의 조각에서 나온 문학적 장치'라고 한다.\n- 발신자 불명의 메일 'I KNOW'는 '금속 공'이 열리자 사람들이 서로를 죽였다고 쓴다.",
        sources: [...at(AC1_MB1, 1080, 1620, 1695, 2020), ...at(AC1_MB4B, [3177, 3192]), ...at(AC1_MB5A, [119, 170], [187, 193], [2419, 2422]), ...at(AC1_MB5B, 2116, 2132, 2160, 2180, 2210), ...at(AC1_MB6B, [1383, 1388]), ...at(AC1_MB7, [824, 857], 1130, [1160, 1196]), ...at(AC1_MS, [4442, 4485], 2795)]
      },

      // ---------- 기술·게임 시스템 ----------
      {
        id: "animus", title: "애니머스", category: "기술",
        aliases: ["Animus", "애니무스"],
        summary: "DNA 속 선조의 유전 기억을 3차원으로 재생하는 장치.",
        body: "## 개요\n[[warren-vidic|비딕]]은 애니머스를 '유전자 기억을 삼차원으로 만들어 주는 프로젝터'라고 설명한다. 사람의 DNA에는 자신의 기억뿐 아니라 선조의 기억도 담겨 있고, 애니머스로 이를 해독해 읽을 수 있다.\n\n## 문제점\n원하는 기억으로 곧장 들어가려 하면 사용자의 무의식이 거부해 기억에서 튕겨 나온다. 그래서 동기화할 수 있는 기억부터 시작해 차츰 나아가야 한다.\n\n## 관련 문서\n- [[synchronization|동기화]]\n- [[desmond|데스몬드 마일즈]]\n\n## 번역 기능\n애니머스는 중요하다고 판단한 대사를 현대 영어로 옮겨 준다. 그래서 과거 인물들이 가끔 현대식으로 말하는 시대착오가 생긴다. [[lucy-stillman|루시]]는 더 사실적으로 만들 수도 있지만 알아듣기 어려울 것이라고 말한다.\n\n## 과열\n작업 도중 이상한 온도가 측정되며 과열되어 멈춘다. 앱스테르고의 엔지니어 팀이 만들었고, [[lucy-stillman|루시]]가 조립을 감독했다.\n\n## 개조\n[[lucy-stillman|루시]]가 애니머스를 개조해 데스몬드가 더 오래 머물 수 있게 되었다.\n\n## 역사와의 차이\n데스몬드는 애니머스에서 본 것이 역사책과 다를 때가 있다고 말한다. 비딕은 기록은 누구나 쓸 수 있지만 애니머스는 오해의 여지가 없다고 답한다.\n\n## 실험체 번호\n애니머스는 데스몬드를 'subject 17(실험체 17)'로 부른다.",
        sources: [...at(AC1_MB1, 365, 380, 420, 440), ...at(AC1_MB2B, 2265, 2280), ...at(AC1_MB3B, 2525, 2580), ...at(AC1_MB4A, [12, 16]), ...at(AC1_MB6A, [37, 56], [105, 113]), ...at(AC1_MB1, 506)]
      },
      {
        id: "synchronization", title: "동기화", category: "기술",
        aliases: ["싱크", "Synchronization"],
        summary: "애니머스 사용자가 선조의 기억과 얼마나 일치하는지 나타내는 값.",
        body: "## 개요\n동기화 막대는 사용자가 선조의 기억과 얼마나 맞아떨어지는지 보여 준다. 동기화가 완전히 깨지면 애니머스가 마지막으로 동기화된 지점으로 되돌린다.\n\n## 올리는 법과 잃는 법\n- 올라감: 목표를 완수하거나 눈에 띄지 않게 행동할 때\n- 떨어짐: 무고한 사람을 죽이거나, 너무 높은 곳에서 떨어지거나, 전투에서 다칠 때\n\n선조가 따르던 [[assassins|암살단]] 신조대로 행동하면 동기화를 유지하는 데 도움이 된다.",
        sources: at(AC1_MB1, 520, 540, [980, 990])
      },
      {
        id: "eagle-vision", title: "독수리의 눈", category: "기술",
        aliases: ["Eagle Vision", "이글 비전"],
        summary: "주변 사람들의 의도를 알아보는 선조의 감각.",
        body: "## 개요\n튜토리얼은 이것을 선조가 주변 사람들의 의도를 이해하도록 도운 '여섯 번째 감각'이라고 소개한다. 영상 화면에는 영어로 'Eagle Vision'이라고 나온다.\n\n## 색깔의 의미\n- 흰색: 정보\n- 노란색: 암살 표적\n- 빨간색: 병사\n- 파란색: 아군\n\n가만히 서 있고 완전히 [[synchronization|동기화]]된 상태에서만 쓸 수 있다.\n\n## 데스몬드\n엔딩에서 데스몬드는 맨눈으로 방바닥과 벽의 빛나는 글씨와 그림을 본다.",
        sources: [...at(AC1_MB1, 940, 965), ...at(AC1_MB7, [1250, 1313])]
      },
      {
        id: "hidden-blade", title: "히든 블레이드", category: "기술",
        aliases: ["Hidden Blade"],
        summary: "암살에 쓰는 숨겨진 칼날.",
        body: "## 개요\n튜토리얼에서 표적을 고정하고 히든 블레이드를 고른 뒤, 병사에게 다가가 조용히 암살하는 법을 배운다. 시체가 발견되면 주변 병사의 경계 상태가 바뀐다.\n\n## 알타이르\n강등되며 장비를 빼앗긴 [[altair|알타이르]]는 배신자 [[masun|마순]]을 처단한 뒤 검과 함께 히든 블레이드를 되찾는다.",
        sources: [...at(AC1_MB1, 740, 780), ...at(AC1_MB2A, 1050, 1065)]
      },
      {
        id: "investigation", title: "조사 방법", category: "기술",
        aliases: ["엿듣기", "소매치기", "심문", "Eavesdrop", "Pickpocket", "Interrogation"],
        summary: "암살자가 표적에 대한 정보를 모으는 수단. 엿듣기, 소매치기, 심문이 있다.",
        body: "## 개요\n강등 전에는 다른 암살자들이 [[altair|알타이르]] 대신 표적을 추적해 주었다. 강등 뒤로는 스스로 추적해야 한다. [[al-mualim|알 무알림]]이 붙여 준 암살자가 알타이르에게 이 방법들을 다시 일깨운다.\n\n## 방법\n- **엿듣기 (Eavesdrop)**: 근처 벤치에 앉아 표적의 대화를 엿듣는다.\n- **소매치기 (Pickpocket)**: 걷고 있는 사람에게서 물건을 몰래 빼낸다.\n- **심문 (Interrogation)**: 표적을 외딴 곳까지 따라가 말할 때까지 때린다.\n\n## 사용 예\n배신자를 찾을 때 마을 사람들의 대화를 엿듣고, 바구니 직공의 편지를 소매치기하고, [[masun|마순]]을 심문했다.\n\n## 다마스쿠스에서\n[[tamir|타미르]]를 조사할 때는 [[rafiq|라피크]]가 알려 준 장소들을 돌며 엿듣기와 소매치기로 정보를 모으고, 지부 소속 정보원의 이야기도 들었다. 정보원은 시장 남동쪽 출구 근처에 경비병과 사이가 나쁜 무리가 모이니, 그들과 친해지면 도움이 될 것이라고 알려 준다.\n\n## 시민 구하기와 조력자\n경비병에게 괴롭힘당하는 시민을 구하면 도움을 받을 수 있다. 조사 완료 화면은 '시장을 빠져나올 때 도움을 줄 도시의 조력자를 찾아라'라고 안내한다.\n\n## 조사 완료 화면\n조사를 하나 마칠 때마다 'Investigation Complete' 화면에 짧은 요약이 뜬다. 다마스쿠스에서 아불 누쿠드를 조사할 때는 6개 중 3개를 마쳐야 암살 기억이 열렸다.\n\n## 실패\n소매치기를 들키면 'Memory Update Failed'가 뜨고, 몸을 숨기거나 잠시 기다려야 다시 시도할 수 있다.\n\n## 정보원 호위\n예루살렘에서는 경비병에게 쫓기는 정보원을 목적지까지 안전하게 호위하는 '정보원 경호 챌린지'가 있었다. 정보원은 보답으로 경비병에게서 빼낸 물건을 건넨다.",
        sources: [...at(AC1_MB2A, 225, 330, 375, 570, 735, 765), ...at(AC1_MB2B, 675, 1050, 1280, 1305), ...at(AC1_MB4A, 720, 1329, 1802), ...at(AC1_MB4B, 600), ...at(AC1_MB4C, 220, 247, 440)]
      },
      {
        id: "masun", title: "마순", category: "인물",
        aliases: ["Masun"],
        summary: "마시아프의 문을 열어 기사단을 들여보낸 암살단 내부의 배신자.",
        body: "## 배신\n마시아프 공방전 때 문을 열어 [[templars|기사단]]을 들여보냈다. 요새 안의 누군가와 편지를 주고받았고, 바구니 직공이 공격 직전에 그에게 편지를 전했다.\n\n## 선동\n공격 뒤 마을에서 \"오늘의 공격은 시작일 뿐\"이라며, [[al-mualim|알 무알림]]이야말로 배신자이니 '마시아프의 미친 사람'에게 맞서 일어서자고 선동했다.\n\n## 최후\n[[altair|알타이르]]에게 심문당하자 \"우리는 기사단을 섬긴다. 기사단의 명분은 정당하다\"고 말했다. 알 무알림 앞에서도 \"유일하게 아쉬운 것은 그들이 실패했다는 것\"이라며 뉘우치기를 거부해 처형되었다.",
        sources: at(AC1_MB2A, 405, 420, 735, 750, 840, 880, [895, 900])
      },
      {
        id: "jamal", title: "자말", category: "인물",
        aliases: ["Jamal"],
        summary: "알 무알림이 마순을 도운 사람과 관련해 언급한 인물.",
        body: "## 개요\n[[masun|마순]]이 처형된 뒤 [[altair|알타이르]]가 그를 도운 사람은 어떻게 되느냐고 묻는다. [[al-mualim|알 무알림]]은 무지나 두려움 때문에 잘못을 저지른 사람은 구할 수 있지만 타락한 의지를 가진 사람은 반드시 파괴해야 한다고 답한다. 그러면서 \"곧 우리는 자말이 어떤 사람인지 보게 될 것\"이라고 말한다.\n\n이 영상에서는 그 이상 나오지 않는다.",
        sources: at(AC1_MB2A, 915, [930, 940])
      },
      {
        id: "nine-targets", title: "아홉 명의 표적", category: "임무",
        aliases: ["9명의 표적", "아홉 개의 이름", "목록"],
        summary: "알 무알림이 알타이르에게 준 목록. 죽여야 할 아홉 명의 이름이 적혀 있다.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 이들을 역병을 퍼뜨리고 전쟁을 일으키는 자들이라고 부른다. 그들의 권력과 영향력이 땅을 타락시키고 십자군 전쟁을 계속되게 한다고 말한다. 이들을 죽이면 이 지역과 [[altair|알타이르]] 자신 모두에게 평화의 씨앗을 심게 되고, 그렇게 구원받을 수 있다고 한다.\n\n## 처단한 순서\n1. [[tamir|타미르]]: [[damascus|다마스쿠스]]의 무기 상인\n2. [[garnier|가니에르 드 나플라우스]]: [[acre|아크레]]의 [[hospitaller|기사단 병원]] 그랜드 마스터\n3. [[talal|탈랄]]: [[jerusalem|예루살렘]]에서 사람들을 납치한 자\n4. [[abul-nuqoud|아불 누쿠드]]: 다마스쿠스의 상인왕\n5. [[william-of-montferrat|몽페라트의 윌리엄]]: 아크레의 섭정\n6. [[majd-addin|마아드 아딘]]: 예루살렘의 섭정\n7. [[jubair|주바이르]]: 살라후딘의 수석 학자 (다마스쿠스)\n8. [[sibrand|시브란드]]: 튜턴 기사단의 리더 (아크레)\n9. [[robert-de-sable|로베르 드 사블레]]: 템플 기사단의 지도자 ([[arsuf|아수프]]에서 결투로 처단)\n\n알 무알림은 타미르 다음 표적으로 아크레나 예루살렘에 가라고 했고, 알타이르는 아크레부터 갔다. 세 명을 처단한 뒤 알 무알림은 \"아홉 중 셋이 죽었다\"고 확인했다.\n\n\n## 마지막 표적\n주바이르를 처단한 뒤 알 무알림은 \"단 한 사람만이 우리와 우리의 궁극적인 목표 사이를 막고 있다\"고 말한다. 그 사람이 로베르 드 사블레였다.\n\n## 열 번째 사람\n로베르는 유물을 찾은 사람이 아홉이 아니라 열 명이었고, 열 번째가 [[al-mualim|알 무알림]]이라고 밝힌다.\n\n## 정체\n알 무알림은 표적들이 모두 [[robert-de-sable|로베르 드 사블레]]의 대의에 충성을 맹세한 [[templars|기사단]]이며, 피의 맹세로 연결되어 있다고 밝힌다.\n\n## 서로 연결된 표적들\n타미르는 죽기 전 자신은 혼자 움직인 것이 아니라 '한 조각'에 불과하며, 알타이르가 곧 '다른 이들'을 알게 될 것이라고 말한다. [[talal|탈랄]]도 죽기 전 '우리 조직'은 충분히 강해서 자신이 죽어도 일이 멈추지 않는다고 말한다.\n\n## 연대\n아불 누쿠드도 죽기 전 '새로운 세상'을 말하며, 알타이르에게 \"넌 우리를 막을 수 없다\"고 했다.",
        sources: [...at(AC1_MB2A, [952, 960], 975, 990), ...at(AC1_MB2B, 1890, 1905, 2160), ...at(AC1_MB3A, 209, 2958), ...at(AC1_MB4A, 182, 240, [2572, 2575], 2961), ...at(AC1_MB4B, 2563, 3087, 3104), ...at(AC1_MB4C, 1395), ...at(AC1_MB5A, [212, 215], 2350, 2438), ...at(AC1_MB5B, 1567), ...at(AC1_MB6A, [167, 175], [2033, 2046]), ...at(AC1_MB6B, [1300, 1334])]
      },
      {
        id: "tamir", title: "타미르", category: "인물",
        aliases: ["Tamir"],
        summary: "다마스쿠스 알 실라흐 수크를 다스린 무기 상인. 아홉 명의 표적 중 첫 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]이 [[nine-targets|아홉 명의 표적]] 가운데 '첫 번째로 쓰러질 사람'으로 지목한 [[damascus|다마스쿠스]]의 암시장 상인이다.\n\n## 무기 상인\n[[souk-al-silaah|알 실라흐 수크]]를 다스리며 무기와 갑옷을 팔아 재산을 모았다. 대장장이, 상인, 자본가들의 지원을 받는 '이 땅에서 가장 큰 죽음의 상인'이다. 시장에서 일생 최대의 거래를 준비하고 있었다.\n\n## 잔혹함\n주문량을 맞추기 어렵다고 호소하는 상인에게 \"게으르거나 무능한 사람의 변명\"이라며 다그치다가, 그 자리에서 찔러 죽인다. 그러고는 \"시체는 그대로 둬라\"라고 말한다.\n\n## 최후\n[[altair|알타이르]]에게 암살당한다. 죽어 가며 \"나는 단순한 죽음의 상인이 아니라 훨씬 고귀한 대의를 섬긴다\"고 말한다. 또 자신은 '형제들'처럼 맡은 역할이 있는 한 조각일 뿐이며, 다른 이들이 알타이르를 가만두지 않을 것이라고 경고한다.\n\n## 알타이르의 보고\n알타이르는 타미르가 [[al-mualim|알 무알림]]을 잘 아는 듯이 말했고, 자신의 임무에 더 큰 의미가 있는 것처럼 굴었다고 전한다.\n\n## 역할\n알타이르는 타미르가 무기를 준비했다고 정리하고, 알 무알림은 그것이 '전쟁'을 위한 것이었다고 답한다.",
        sources: [...at(AC1_MB2A, 990), ...at(AC1_MB2B, 1365, 1380, 1500, 1560, 1590, 1890, 1905, 1920), ...at(AC1_MB3A, 170), ...at(AC1_MB5A, [179, 184])]
      },
      {
        id: "rafiq", title: "라피크", category: "직책",
        aliases: ["Rafiq", "지부장", "Bureau Leader"],
        summary: "도시마다 있는 암살단 지부를 맡은 사람.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 [[altair|알타이르]]에게 도시에 도착하면 암살단 지부를 찾아가 라피크와 이야기하라고 한다. 알 무알림이 새를 보내 그의 도착을 미리 알려 둔다.\n\n## 임무 허가\n알타이르는 라피크의 허락 없이는 임무를 시작할 수 없다. 알타이르는 시간 낭비라며 반발하지만, 알 무알림은 \"이건 네 실수에 대한 대가\"이며 이제는 자신뿐 아니라 암살단원 모두에게 답해야 한다고 말한다.\n\n화면의 목표 문구는 'Speak with the Bureau Leader in Damascus'다.\n\n## 지부의 규칙\n- 도시에서 쫓기게 되면 지부로 돌아와 몸을 피할 수 있다.\n- 다만 적이 너무 가까이 쫓아오면, 따돌릴 때까지 지부의 문은 닫혀 있다. 적을 안으로 끌어들이는 것은 형제단을 위태롭게 하는 일이기 때문이다.\n- 조사를 마치고 계획을 보고하면 라피크가 [[al-mualim|알 무알림]]의 표식을 주고 임무를 허락한다.\n\n## 다마스쿠스의 라피크\n[[altair|알타이르]]를 반갑게 맞고 [[tamir|타미르]] 조사를 안내한다. 타미르가 죽은 뒤에는 고마움과 존경을 표하며, 승전보를 알 무알림에게 전하겠다고 한다. 이 영상에서 이름은 나오지 않는다.\n\n## 예루살렘의 라피크\n예루살렘 지부는 [[malik|말리크]]가 맡고 있다.\n\n## 아크레의 라피크\n\"작은 새가 자네의 방문을 알려 줬다\"며 알타이르를 맞는다. [[garnier|가니에르]]를 처단한 뒤 알타이르가 의문을 털어놓자 \"자네가 할 일은 궁금해하는 것이 아니라 행하는 것\"이라고 다그친다. 이 영상에서 이름은 나오지 않는다.\n\n## 다마스쿠스의 라피크 (다시 방문)\n[[abul-nuqoud|아불 누쿠드]]를 노리는 알타이르에게 \"깨지고 강등당한 것만 빼고, 다른 암살자들의 험담만 빼고 다 부럽다\"며 너스레를 떤다. 아불을 처단하고 돌아온 알타이르가 의심을 내비치자, 상인왕이 원래 독특했다며 광기 탓으로 돌린다.\n\n## 아크레의 라피크 (다시 방문)\n[[william-of-montferrat|윌리엄]] 표적을 맡은 알타이르에게 아크레의 정치 사정을 알려 주며 \"자네의 행동 하나하나가 이 영지의 미래를 바꾼다\"고 말한다. 윌리엄을 처단한 뒤 알타이르가 의문을 품자 \"뱀의 말을 믿어서는 안 된다\"고 답한다.\n\n## 다마스쿠스의 라피크 (세 번째 방문)\n\"다마스쿠스의 영웅이 오셨구만!\"이라며 반긴다. [[jubair|주바이르]]가 처단된 뒤에는 \"무지가 악을 키운다\", \"주바이르 같은 사람들은 방향성을 잃은 사람들을 악하게 바꾸기 쉽다\"고 말한다.\n\n## 아크레의 라피크 (세 번째 방문)\n우리 대의를 위한 알타이르의 헌신을 의심한 것을 사과한다. 시브란드 처단 뒤 불안해하는 알타이르에게, 후회와 불확실과 동정은 포용해야 하며 이런 감정들이 사람으로 만들어 준다고 말한다. \"자네처럼 능숙한 이를 도운 것만으로도 영광\"이라고 한다.",
        sources: [...at(AC1_MB2A, [1000, 1032], 1380), ...at(AC1_MB2B, 690, 735, 765, 780, 2040, 2130, 2145), ...at(AC1_MB3B, 840), ...at(AC1_MB3A, 1232, [2978, 2981]), ...at(AC1_MB4A, 418, 430, 442, [2816, 2820]), ...at(AC1_MB4B, 92, 151, 2980), ...at(AC1_MB5A, 307, 2240, 2263), ...at(AC1_MB5B, [71, 73], 1966, [1986, 1991], 2016)]
      },
      {
        id: "damascus", title: "다마스쿠스", category: "장소",
        aliases: ["다마스커스", "Damascus"],
        summary: "첫 번째 표적 타미르가 있는 도시.",
        body: "## 개요\n[[nine-targets|아홉 명의 표적]] 중 첫 번째인 [[tamir|타미르]]가 있는 도시다. 이 영상의 한글 자막에서는 '다마스커스'로 적었다.\n\n## 가는 길\n[[altair|알타이르]]는 [[masyaf|마시아프]]에서 말을 타고 '왕국(Kingdom)' 지역을 지나 다마스쿠스로 향한다. 도착하면 암살단 지부의 [[rafiq|라피크]]를 만나야 한다.\n\n## 도시\n- 기억 지도 화면에 인구가 약 45,323명으로 나온다.\n- 부자 구역(Rich District), 가난한 구역(Poor District), 중간 구역(Middle District)으로 나뉜다.\n- 가난한 구역에만 전망 지점이 9곳 있다.\n- 무기 시장 [[souk-al-silaah|알 실라흐 수크]]가 있다.\n\n## 귀족 구역과 상인왕\n[[abul-nuqoud|아불 누쿠드]]는 귀족 구역(Rich District)에서 지냈다. 라피크는 조사할 곳으로 서쪽의 오마야드 모스크와 사루자 수크, 북서쪽의 살라후딘의 성채를 꼽았다.\n\n## 주바이르의 분서\n[[jubair|주바이르]]가 학자들을 시켜 도시의 모든 글을 모아 불태웠다. 그는 마드라사 알 칼라사에서 회의를 열었다.",
        sources: [...at(AC1_MB2A, 990, 1380, 1395, 1620), ...at(AC1_MB2B, 0, 270, 1380), ...at(AC1_MB4A, 459, [473, 479], 720), ...at(AC1_MB5A, 1459, 1561)]
      },
      {
        id: "rauf", title: "라우프", category: "인물",
        aliases: ["Rauf"],
        summary: "마시아프의 암살자. 훈련생들에게 검술을 가르친다.",
        body: "## 마시아프 귀환\n솔로몬 신전 작전에서 돌아온 [[altair|알타이르]]를 반갑게 맞는다.\n\n## 공방전\n마시아프 공방전 때 알타이르에게 \"저쪽에 서 있게\"라며 위치를 알려 준다.\n\n## 훈련 교관\n\"내 학생들이 검을 어떻게 휘두르는지 잘 이해하지 못하는 것 같네\"라며 강등된 알타이르에게 시범을 부탁한다.",
        sources: [...at(AC1_MB1, 1360, 2025), ...at(AC1_MB2A, 1080)]
      },
      {
        id: "souk-al-silaah", title: "알 실라흐 수크", category: "장소",
        aliases: ["수크 알 실라흐", "Souk Al-Silaah", "무기 시장"],
        summary: "다마스쿠스의 무기 시장. 타미르가 다스렸다.",
        body: "## 개요\n[[damascus|다마스쿠스]]에 있는 시장으로, [[tamir|타미르]]가 다스리며 무기와 갑옷을 거래했다. 이 영상의 한글 자막에서는 '알 실라흐 수크'로 적었다.\n\n## 타미르 암살\n타미르가 일생 최대의 무기 거래를 위한 회의를 이곳에서 열었다. 그가 일에 정신이 팔린 틈에 [[altair|알타이르]]가 그를 암살했다.",
        sources: at(AC1_MB2B, 1380, 1425, 1500, 1890)
      },
      {
        id: "jerusalem", title: "예루살렘", category: "장소",
        aliases: ["Jerusalem"],
        summary: "세 번째로 처단한 표적 탈랄이 있던 도시. 말리크가 지부를 맡고 있다.",
        body: "## 개요\n[[altair|알타이르]]는 [[masyaf|마시아프]]에서 말을 타고 '왕국' 지역을 지나 예루살렘으로 간다. 화면의 목표 문구는 'Speak with Bureau Leader in Jerusalem'이다.\n\n## 암살단 지부\n지부 입구는 지붕에 있다. [[malik|말리크]]가 지부를 맡고 있다.\n\n## 도시\n[[malik|말리크]]가 [[talal|탈랄]] 조사 장소로 꼽은 곳은 무슬림 구역과 유대인 구역 경계의 시장, 이슬람 사원 근처, 성 안나 교회 앞이다. 탈랄의 창고는 북쪽의 바르비칸 안에 있다.\n\n## 섭정\n[[al-mualim|알 무알림]]은 [[majd-addin|마아드 아딘]]을 '예루살렘의 섭정'이라고 소개한다.\n\n## 처형대\n솔로몬 신전 서쪽 끝에 처형대가 있다. [[majd-addin|마아드 아딘]]이 이곳에서 공개 처형을 벌였다.",
        sources: [...at(AC1_MB3B, 75, 825, 885, 1480), ...at(AC1_MB4A, 240), ...at(AC1_MB4C, 560, 1080)]
      },
      {
        id: "talal", title: "탈랄", category: "인물",
        aliases: ["Talal"],
        summary: "예루살렘 시민을 납치해 노예로 판다고 알려진 자. 알타이르에게 처단되었다.",
        body: "## 개요\n거리에서는 \"힘든 시기지만 일할 의지만 있으면 보상받는다. 탈랄이 베푼다\"는 외침으로 사람들을 모은다. 사람들이 하나둘 사라지는데도 경비병은 손을 놓고 있다.\n\n## 알타이르의 조사\n- 탈랄의 부하는 탈랄이 사람들을 '여정'에 대비시키고 있으며, 창고에 가뒀다가 때가 되면 아크레로 보낸다고 털어놓는다.\n- [[malik|말리크]]에게 보고된 내용: 예루살렘 시민을 납치해 노예로 팔고, 북쪽 바르비칸 안의 창고를 근거지로 삼으며, 대상(카라반)을 준비하고 있다.\n\n## 최후\n창고에서 알타이르를 기다리고 있었다. 자신이 문을 열고 길을 터 알타이르를 불러들였다고 말한 뒤 부하들과 함께 덤볐다. 죽어 가며 이렇게 주장한다.\n- 자신은 노예상이 아니라 그들을 돕고 싶었다. 자신도 도움을 받았기 때문이다.\n- 데려간 사람은 거지, 매춘부, 중독자, 나병 환자로, 노예로도 쓸 수 없는 이들이었다. 팔려고가 아니라 구하려고 데려갔다.\n- 자신의 역할은 끝났지만 '우리 조직'은 충분히 강해서 자신이 죽어도 일이 멈추지 않는다.\n- 암살단만 성지에 계획을 품은 것이 아니다.\n\n알타이르는 \"넌 죽고 망가진 이들이 있는 전쟁에서 이득을 봤다\"고 답한다.\n\n## 역할\n알타이르는 탈랄이 가니에르에게 사람들을 '보급'했다고 정리한다.",
        sources: [...at(AC1_MB3B, 640, 1020, 1320, 1340, 1480, 1825, 1870, 2240, 2255, 2270, 2285), ...at(AC1_MB3B, 75), ...at(AC1_MB5A, 177)]
      },
      {
        id: "leila-marino", title: "레일라 마리노", category: "인물",
        aliases: ["Leila Marino", "레일라"],
        summary: "앱스테르고의 전 직원. 2007년 9월에 죽었고, 기록은 봉인되어 있다.",
        body: "## 개요\n[[lucy-stillman|루시]]의 이메일로만 등장한다. 영상 업로더의 설명 자막은 그녀를 루시의 전임자라고 소개한다.\n\n## 죽음을 둘러싼 이메일\n- 루시는 레일라가 2007년 9월에 죽었고 사고였다고 들었지만, 검시관 기록이 봉인되어 있다고 쓴다. 자살이라면 왜 이렇게 민감한 정보로 다루느냐고 묻는다.\n- 회사 담당자 낸시 닐롭은 이 직원이나 퇴사 경위에 대해 말할 권한이 없다고 답하고, 앨런 리킨을 참조로 넣는다.\n- 루시는 \"그녀는 내 친구였다. 무슨 일이 있었는지 알고 싶을 뿐\"이라고 다시 쓴다.\n- [[warren-vidic|비딕]]은 \"그녀는 자살했다. 노이만이라는 녀석과의 관계 때문이었다\"며 그만 덮으라고 답한다.\n\n이메일 날짜는 9월 4일이다(연도는 나오지 않는다).\n\n## 더 나온 이메일 (업로더 설명 자막 기준)\n- 루시가 앨런 리킨에게 친구 레일라에 대한 정보를 요청했다.\n- 레일라에 대해 묻는 루시에게 비딕이 일이나 하라고 답했다.\n\n## 이메일 원문 기준 정리 (현대 파트 모음)\n- 루시가 2007년 9월에 죽은 전 직원으로 레일라를 언급하며, '사고'였다지만 검시관 기록이 봉인되었다고 쓴다.\n- 회사 담당자 낸시 닐롭은 '이 직원이나 회사를 떠난 경위'에 대해 말할 권한이 없다고 답한다.\n- 비딕은 \"노이만이라는 애와의 관계 때문에 자살했다\"고 쓴다.\n- 루시는 9월 5일 메일에서 '5년이 지났는데도'라고 쓴다.\n- 비딕은 회의실에서 루시에게 \"레일라처럼 되고 싶나?\"라고 말했다(영어 음성).",
        sources: [...at(AC1_MB3B, 2835, 2850, 2865, 2925, 2940, 2970), ...at(AC1_MB4C, 1918, 2230), ...at(AC1_MB5B, 2329), ...at(AC1_MS, [1748, 1890], 2409, [400, 470])]
      },
      {
        id: "garnier", title: "가니에르 드 나플라우스", category: "인물",
        aliases: ["가니에르", "Garnier de Naplouse"],
        summary: "아크레 기사단 병원의 그랜드 마스터. 아홉 명의 표적 중 두 번째로 처단되었다.",
        body: "## 개요\n[[acre|아크레]]에 있는 [[hospitaller|기사단 병원]]의 그랜드 마스터로, 병원 구역 안에서 지낸다.\n\n## 소문\n벽 안에서 무고한 시민들로 잔혹한 실험을 한다고 한다. 대부분은 [[jerusalem|예루살렘]]에서 데려온 사람들로, 다른 도시에서 데려와 의심을 피하려 한 것으로 보인다.\n\n## 병원 마당에서\n도망치려던 환자가 붙잡혀 오자 부하들에게 \"찾아오라고 했지 죽이라고 하지는 않았다\"고 꾸짖는다. 하지만 환자가 \"저자가 영혼을 가져갔다\"고 울부짖자 \"이렇게 하는 걸 내가 좋아한다고 생각하나? 하지만 선택지는 없다\"며 두 다리를 부러뜨리라고 명령한다.\n\n## 최후\n[[altair|알타이르]]에게 암살당한다. 죽어 가며 '내 아이들'은 어떻게 되느냐고 묻는다. 알타이르가 그들이 풀려나 집으로 돌아갈 것이라 하자, \"무슨 집? 하수구? 사창가? 그들을 빼낸 감옥?\"이라며 그들에게는 스스로 결정할 의지가 없다고 말한다. 불장난을 하고 싶어 하는 아이에게 원하는 대로 하라고 하겠느냐는 비유도 든다. 알타이르가 그들은 아이가 아니라 다 큰 어른이라고 하자, \"내가 그렇게 생각하는 것이 아니라 확실히 아는 것\"이라고 답한다.\n\n## 실험의 정체\n알 무알림은 가니에르의 사람들이 '실험'이었고, 약초로 유물의 효과를 흉내 내 언제든 대비하려 했다고 밝힌다.",
        sources: [...at(AC1_MB3A, 1242, [1946, 1955], 2519, 2553, 2571, 2583, 2758, 2772, [2792, 2802], 2839), ...at(AC1_MB5A, [170, 172])]
      },
      {
        id: "acre", title: "아크레", category: "장소",
        aliases: ["Acre"],
        summary: "두 번째 표적 가니에르가 있던 도시.",
        body: "## 개요\n[[altair|알타이르]]가 타미르 다음으로 찾아간 도시다. 기억 지도에는 '아크레 지부장과 이야기하기'와 '예루살렘 지부장과 이야기하기'가 함께 목표로 떠 있었다.\n\n## 조사 장소\n[[rafiq|라피크]]가 꼽은 곳은 북쪽의 공공 정원 터, 북서쪽의 버려진 시장, 서쪽의 마리아 교회다.\n\n## 기사단 병원\n북서쪽에 [[hospitaller|기사단 병원]]이 있고, [[garnier|가니에르]]가 그 안에서 지낸다. 도시 곳곳에 'Hospitalier Flag'라는 수집품이 있다.\n\n## 영주\n[[al-mualim|알 무알림]]은 [[william-of-montferrat|몽페라트의 윌리엄]]을 '아크레의 영주'라고 소개한다. 리차드 왕은 아크레에서 승리를 거둔 뒤 예루살렘으로 남진할 준비를 하고 있다.\n\n## 섭정 윌리엄\n[[king-richard|리차드 왕]]이 전쟁을 하는 동안 [[william-of-montferrat|몽페라트의 윌리엄]]이 섭정을 맡았다. 이 영상에서 리차드는 그를 '날 대신해서 통치하는 아크레의 섭정'이라고 부른다. 윌리엄이 죽은 뒤 라피크는 알타이르가 아크레를 그의 손에서 구했다고 말한다.\n\n## 조사 장소\n이번에 라피크가 꼽은 곳은 남서쪽 리차드의 성채 앞 시장, 같은 방향의 성 십자가 성당, 서쪽의 체인 지역과 구호 지역 경계다.\n\n## 시브란드\n알 무알림은 남은 기사단원 중 한 명인 [[sibrand|시브란드]]가 아크레에 있다고 말한다.\n\n## 항구\n[[sibrand|시브란드]]가 아크레 항구를 운영했다. 그는 부두를 봉쇄하고 배를 징발했으며, 항구에서는 모든 선박을 비우고 [[teutonic-order|튜턴 기사단]]의 명령을 따르라는 포고가 들렸다. 라피크가 꼽은 조사 장소는 동쪽 부두, 북동쪽 예배당, 북쪽 성 요한 문 앞이다.",
        sources: [...at(AC1_MB3A, 555, [1257, 1263], 1942, 2430), ...at(AC1_MB4A, 196, 243), ...at(AC1_MB4B, 108, [162, 176], 2019, 2956), ...at(AC1_MB5A, 215), ...at(AC1_MB5B, 42, [54, 61], 385, 1077)]
      },
      {
        id: "hospitaller", title: "기사단 병원", category: "조직",
        aliases: ["Hospitalier", "호스피탈러"],
        summary: "아크레에 있는 기사단의 병원. 가니에르가 그랜드 마스터로 있었다.",
        body: "## 개요\n이 영상의 한글 자막은 [[garnier|가니에르]]를 '기사단 병원의 그랜드 마스터'라고 소개한다. 화면의 수집품 이름은 'Hospitalier Flag'다.\n\n## 병원 안\n흰 옷을 입은 환자들이 마당에 모여 있고, 검은 옷의 수도사들과 경비병이 지킨다. 도망치려던 환자는 붙잡혀 와 다리가 부러졌다. 알타이르는 이곳을 \"치료가 아니라 고통의 장소\"라고 말했다.",
        sources: at(AC1_MB3A, 1242, 2430, 2496, 2583, 2990)
      },
      {
        id: "abul-nuqoud", title: "아불 누쿠드", category: "인물",
        aliases: ["아불", "상인왕", "Abu'l Nuqoud", "다마스쿠스의 상인왕"],
        summary: "다마스쿠스에서 가장 부유한 '상인왕'. 아홉 명의 표적 중 네 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 그를 '다마스쿠스에서 가장 부유한 사람'이라고 소개한다. [[damascus|다마스쿠스]]의 [[rafiq|라피크]]는 '상인왕'이라 부르며, 귀족 구역에서 호화롭게 지낸다고 말한다.\n\n## 소문과 조사\n- 거리에서는 그가 매주 사람들에게 문을 열어 베푼다는 칭송이 들린다.\n- 알타이르가 심문한 사람은 그가 수치심 때문에 숙소에 틀어박혀 지내고, 연회 때만 나와 사람들을 내려다본다고 말한다.\n- 알타이르는 그가 다마스쿠스 사람들의 돈을 빼돌려 사사로이 쓴다고 보고한다.\n\n## 연회\n손님들에게 [[salahuddin|살라후딘]]의 전쟁을 지원한 관용에 건배하다가, 수군거림을 다 들었다며 그들을 몰아세운다. 모든 고통은 두려움과 증오에서 나온다고 말하고, \"나는 또 다른 대의에 맹세했다. 모두가 평화롭게 살 새로운 세상\"이라고 외친다. 알타이르의 보고에 따르면 손님들을 독살했다.\n\n## 최후\n[[altair|알타이르]]에게 암살당한다. 자신의 본질 때문에 다스리던 사람들에게 멸시당했고, \"나를 혐오하는 신을 위한 전쟁에 왜 돈을 대야 하지?\"라며 복수가 아니라 양심 때문이었다고 말한다. 누구를 따르느냐는 물음에는 \"때가 되면 알게 될 것이다. 이미 알고 있을지도\"라고 답한다. 또 \"넌 우리를 막을 수 없다. 우리는 새로운 세상을 맞이하게 될 것\"이라는 말을 남긴다.",
        sources: at(AC1_MB4A, 235, 426, 459, 1500, 1740, 1885, 2259, 2273, [2373, 2376], 2509, 2526, [2563, 2575], 2805)
      },
      {
        id: "majd-addin", title: "마아드 아딘", category: "인물",
        aliases: ["Majd Addin", "마이드 아딘", "마이드", "마즈드 아딘"],
        summary: "예루살렘의 섭정. 아홉 명의 표적 중 여섯 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]이 '예루살렘의 섭정'이라고 소개한다. [[salahuddin|살라후딘]]과 [[king-richard|리차드 왕]]이 없는 동안 도시를 다스리는 자들 가운데 하나로, [[nine-targets|표적]]으로 지목되었다.\n\n## 섭정이 되기까지\n[[malik|말리크]]에 따르면 [[salahuddin|살라후딘]]이 없는 사이 스스로 예루살렘의 지도자 역할을 맡았고, 공포와 협박으로 원하는 것을 얻는다. 그 자리에 대한 진정한 자격은 없다. 일꾼들은 살라후딘 대신 임명된 자들이 하나같이 때 이른 죽음을 맞았고, 결국 한때 서기였던 마아드 아딘에게 자리가 넘어갔다고 수군거린다.\n\n## 공개 처형\n솔로몬 신전 서쪽의 처형대에서 매춘부, 도둑, 도박꾼, 이단자로 몬 사람들을 공개 처형하며 \"모두가 위협받고 있다\"고 외쳤다. 그의 부하에 따르면 처형당하는 자들은 범죄자가 아니라 그와 '그가 함께 일하는 자들'의 계획에 위험한 사람들이었다.\n\n## 최후\n처형대에서 [[altair|알타이르]]에게 암살당한다. \"조직은 도시를 원했고, 나는 권력을 원했다\"며 반체제 인사들이 질서를 어지럽힌다고 했다. 사람들을 죽인 것은 믿음이 달라서가 아니라 \"죽일 수 있어서, 재밌었기에\"였고, \"나는 신과 같았다\"고 말한다.\n\n## 표기\n이 영상의 한글 자막에서는 '마이드 아딘'으로 적었다.\n\n## 장례\n예루살렘에서 장례가 치러졌다. 사제는 그가 살해당했다며 범인이 그 자리에 있다고 외쳤다. 로베르와 템플 기사단원들이 그를 애도하러 온다는 소문이 돌았다.",
        sources: [...at(AC1_MB4A, 227, 240), ...at(AC1_MB4C, [43, 53], 560, 880, 1169, 1222, 1377, [1396, 1405], 1419, 1431, 1447), ...at(AC1_MB4C, 39), ...at(AC1_MB6A, [1569, 1572], [1805, 1914])]
      },
      {
        id: "william-of-montferrat", title: "몽페라트의 윌리엄", category: "인물",
        aliases: ["윌리엄", "William of Montferrat"],
        summary: "아크레의 섭정. 아홉 명의 표적 중 다섯 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]이 '[[acre|아크레]]의 영주'라고 소개한다. [[salahuddin|살라후딘]]과 [[king-richard|리차드 왕]]이 없는 동안 도시를 다스리는 자들 가운데 하나로, [[nine-targets|표적]]으로 지목되었다.\n\n## 아크레의 섭정\n[[king-richard|리차드 왕]]이 전쟁을 하는 동안 섭정으로 임명되었다. 아들 [[conrad|콘래드]]와 리차드의 사이가 나빠, 리차드는 그를 '손님'으로 아크레에 머물게 했다. 알타이르는 이를 인질이라고 불렀다. 광장에서는 \"왕의 덕목에는 윌리엄이 어울린다\"는 연설이 들린다.\n\n## 리차드와의 언쟁\n사라센 포로 3000명을 처리한 일로 리차드에게 \"맹세를 짓밟았다\"는 비난을 듣는다. 리차드가 떠난 뒤 \"새로운 세상에는 저자 같은 사람의 자리가 없을 것\"이라고 중얼거린다.\n\n## 최후\n요새에서 [[altair|알타이르]]에게 암살당한다. 아크레를 아들에게 넘기려 했다는 말은 부정했다. 아들은 멍청이고 리차드는 실체 없는 믿음에 눈이 멀었다며 \"아크레는 그들 누구에게도 속하지 않는다\"고 말한다. 음식을 빼앗고 사람들을 강제로 부린 것은 '새로운 시대'를 준비하게 하려던 것이라고 했다. 마지막으로 알타이르가 도시를 해방하기는커녕 망칠 것이고, 결국 자신을 비난하게 될 것이라는 말을 남긴다.",
        sources: [...at(AC1_MB4A, 227, 243), ...at(AC1_MB4B, 108, 130, 144, 741, 1965, 2022, 2045, [2564, 2571], [2591, 2599], [2633, 2643])]
      },
      {
        id: "salahuddin", title: "살라후딘", category: "인물",
        aliases: ["Salah Al'din", "살라딘"],
        summary: "리차드 왕과 맞서는 쪽의 지도자. 무너진 아르수프 성채에 병력을 모으고 있다.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 [[king-richard|리차드 왕]]의 남진을 살라후딘도 분명 알고 있어서, 무너진 아르수프 성채에 병력을 모으고 있다고 말한다. 알타이르가 두 사람을 모두 죽여 전쟁을 끝내자고 하자, 알 무알림은 군대가 흩어져 더 큰 혼란이 올 것이라며 반대한다.\n\n## 언급\n- [[damascus|다마스쿠스]]에는 '살라후딘의 성채'가 있다.\n- [[abul-nuqoud|아불 누쿠드]]의 연회 손님들은 살라후딘의 전쟁에 돈을 댔다.\n\n아직 직접 등장하지 않았다.\n\n## 기사단의 위협\n알 무알림은 리차드든 살라후딘이든 기사단에 반대하는 자는 누구든 파괴될 것이라고 말한다.\n\n## 수석 학자\n[[jubair|주바이르]]는 살라후딘의 수석 학자였다.\n\n## 아수프 전투\n리차드에 따르면 결투가 끝난 그 순간에도 살라후딘이 부하들을 죽이고 있었다. 알타이르는 살라후딘도 이 전쟁이 끝나기를 원할 것이라고 말한다.",
        sources: [...at(AC1_MB4A, [202, 213], 479, 2261), ...at(AC1_MB4B, [3127, 3129]), ...at(AC1_MB5A, 325), ...at(AC1_MB6B, [1459, 1473], [1508, 1514])]
      },
      {
        id: "king-richard", title: "리차드 왕", category: "인물",
        aliases: ["리처드 왕", "King Richard"],
        summary: "아크레에서 승리한 뒤 예루살렘으로 남진을 준비하는 왕.",
        body: "## 개요\n[[al-mualim|알 무알림]]은 리차드 왕이 [[acre|아크레]]의 승리에 힘입어 [[jerusalem|예루살렘]]을 향해 남진할 준비를 하고 있다고 말한다. 알 무알림은 [[salahuddin|살라후딘]]과 함께 그를 죽이는 것에 반대했다.\n\n## 언급\n게임 화면의 수집품 'King Richard Flag'에도 이름이 나온다.\n\n## 등장\n아크레에서 [[william-of-montferrat|윌리엄]]과 언쟁을 벌인다. 사라센 포로 3000명이 죽은 일로 그를 꾸짖으며 \"설마 내 왕관이라도 원하는가\"라고 묻고, 싸워야 할 전장이 있다며 떠난다.\n\n## 아수프의 결투\n알타이르와 로베르가 서로를 고발하자 \"이 판단을 나보다 더 현명한 자의 손에 맡기겠다\"며 결투로 정하게 한다. 결투 후 알타이르와 대화하며, 백성들은 자기들이 원하는 것을 모르기에 우리 같은 자에게 의지한다고 말한다. 살라후딘이 그 순간에도 부하들을 죽이고 있다며 전장으로 돌아간다.",
        sources: [...at(AC1_MB3A, 540), ...at(AC1_MB4A, 196, 213), ...at(AC1_MB4B, 1965, 1997, [2017, 2024]), ...at(AC1_MB6B, [955, 1009], [1414, 1431], [1473, 1530])]
      },
      {
        id: "conrad", title: "콘래드", category: "인물",
        aliases: ["Conrad"],
        summary: "몽페라트의 윌리엄의 아들. 리차드 왕과 사이가 나쁘다.",
        body: "## 개요\n아크레의 [[rafiq|라피크]]에 따르면 [[king-richard|리차드]]와 대부분의 문제에서 의견이 맞지 않는다. 대중 앞에서는 예의를 지키지만 서로에게 악의가 있다는 말이 많다. 아크레의 사라센 포로 거래 이후 티레로 돌아갔다.\n\n## 아버지의 평가\n[[altair|알타이르]]가 윌리엄이 아크레를 콘래드에게 넘기려 했다고 하자, 윌리엄은 \"내 아들은 왕국은커녕 제 수족도 못 가누는 멍청이\"라고 말한다.\n\n아직 직접 등장하지 않았다.",
        sources: at(AC1_MB4B, [112, 130], [2564, 2571])
      },
      {
        id: "alan-rikkin", title: "앨런 리킨", category: "인물",
        aliases: ["리킨", "Alan Rikkin"],
        summary: "앱스테르고 이메일에 이름이 나오는 인물.",
        body: "## 개요\n이메일로만 등장한다.\n- 레일라 마리노 관련 문의 메일에서 회사 담당자가 그를 참조로 넣었다.\n- [[lucy-stillman|루시]]가 그에게 친구 [[leila-marino|레일라]]에 대한 정보를 요청했다.\n- 그는 [[warren-vidic|비딕]]에게 루시가 또 들쑤시고 있으니 처리하라고 했다.\n\n회사 안에서의 정확한 직책은 아직 나오지 않았다.\n\n## 이메일 원문으로 확인된 것\n- 루시의 메일에 10월 4일까지 자리를 비운다는 자동 답장을 보냈지만, 같은 날 비딕에게 루시를 처리하라는 메일을 따로 보냈다. 비서는 오브리 제이컵스다.\n- 비딕에게 실험체 17(데스몬드)을 포기하고 다른 실험체를 쓸 수 있다고 압박한다.\n- 실험체 12~16의 기록을 검토한 '분석' 메일을 보내고, \"이해의 아버지께서 성공으로 인도하시길\"이라는 템플 기사단의 말로 끝맺는다.",
        sources: [...at(AC1_MB3B, 2865), ...at(AC1_MB4C, 1918, 2351), ...at(AC1_MB5B, 2329), ...at(AC1_MS, [2835, 2875], [4184, 4290], [4442, 4485])]
      },
      {
        id: "jubair", title: "주바이르", category: "인물",
        aliases: ["Jubair"],
        summary: "살라후딘의 수석 학자. 다마스쿠스의 글을 불태웠다. 아홉 명의 표적 중 일곱 번째로 처단되었다.",
        body: "## 개요\n[[rafiq|라피크]]에 따르면 [[salahuddin|살라후딘]]의 수석 학자다. 알 무알림은 그를 [[damascus|다마스쿠스]]에 있는 [[templars|기사단]]원이라고 말한다.\n\n## 분서\n학자들을 조직해 거리에서 빛과 불꽃, 죄 사함, 새로운 세계를 설교하게 했다. 사악한 자들이 만든 거짓 지식이라며 도시의 모든 글을 모아 불태웠고, 반대하는 학자도 죽였다. 알타이르에 따르면 불 속으로 들어간 것은 책만이 아니라 반대하는 자들도였다.\n\n## 주장\n- 사람들은 스스로보다 글에 더 의존하며, 이것이 사람을 나약하고 멍청하게 만든다.\n- 잉크 방울로 쓰인 단어를 의심 없이 믿지만, 누가 왜 그것을 썼는지는 생각하지 않는다.\n- 불꽃으로부터 '하나의 지혜로 다스려지는, 진실과 통합의 시대'가 탄생할 것이다.\n\n## 최후\n[[altair|알타이르]]에게 암살당한다. \"네가 구하려고 애쓴 책들과 내가 다른 게 뭐지?\"라고 묻고, 십자군과 살라후딘의 군대를 부추긴 것도 고대 두루마리였다며 \"나 역시 작은 희생을 만들었다\"고 말한다.",
        sources: at(AC1_MB5A, 218, 325, [338, 343], 1561, [1602, 1611], 1647, 1954, [2077, 2099], 2272)
      },
      {
        id: "sibrand", title: "시브란드", category: "인물",
        aliases: ["Sibrand"],
        summary: "튜턴 기사단의 리더. 아크레 항구를 운영했다. 아홉 명의 표적 중 여덟 번째로 처단되었다.",
        body: "## 개요\n[[al-mualim|알 무알림]]이 남은 [[templars|기사단]]원 두 명 가운데 하나로 꼽은 인물로, [[acre|아크레]]에 있다. [[jubair|주바이르]]가 처단된 뒤 알 무알림은 단 한 사람만이 남았고, 그가 죽으면 로베르 드 사블레가 마침내 상처를 입을 것이라고 말한다.\n\n## 튜턴 기사단의 리더\n아크레 [[rafiq|라피크]]에 따르면 새롭게 [[teutonic-order|튜턴 기사단]]의 리더로 임명되었고, 베네치아 구역에 살며 아크레 항구를 운영한다. 배 100척 가까이를 징발해 해상 봉쇄를 준비했다.\n\n## 공포\n죽음이 다가온다는 사실에 미쳐 가며 공포에 잠식되었다. 부두를 봉쇄하고 그 안에 숨어 배를 기다렸다. 성직자를 암살자로 의심해 죽이며 \"윌리엄과 가니에르는 너무 자신에 차 있어서 목숨을 잃었다\"고 말했다.\n\n## 최후\n[[altair|알타이르]]에게 암살당한다. 죽음 뒤에는 아무것도 없고 \"이 삶이 우리의 전부\"라는 것이 두렵다고 말한다. 자신의 역할은 해상을 봉쇄해 왕과 여왕들이 증원을 보내지 못하게 하는 것이었고, 목적은 사람들을 '신앙의 폭정에서 자유롭게 하는 것'이라고 했다. \"난 명령을 따랐고 대의를 믿었을 뿐이다, 너처럼\"이라는 말을 남긴다.",
        sources: [...at(AC1_MB5A, [212, 215], [2343, 2350], 2438), ...at(AC1_MB5B, 42, 470, [1063, 1069], 1238, [1286, 1293], 1576, [1599, 1617], 1631)]
      },
      {
        id: "teutonic-order", title: "튜턴 기사단", category: "조직",
        aliases: ["Teutonic Order"],
        summary: "시브란드가 리더로 있던 기사단. 아크레 항구를 장악했다.",
        body: "## 개요\n아크레 [[rafiq|라피크]]에 따르면 [[sibrand|시브란드]]가 새롭게 이 기사단의 리더로 임명되었다.\n\n## 아크레에서의 활동\n항구에서는 모든 선박을 비우고 튜턴 기사단의 명령을 따르라는 포고가 들렸다. 영어 음성에 따르면 선장들은 튜턴 기사단 대표에게 출두해 재배치를 받아야 했다.",
        sources: at(AC1_MB5B, 42, 385, 405)
      },
      {
        id: "maria", title: "마리아", category: "인물",
        aliases: ["Maria"],
        summary: "마아드 아딘의 장례에서 로베르 드 사블레 행세를 한 여자.",
        body: "## 개요\n[[majd-addin|마아드 아딘]]의 장례에서 [[robert-de-sable|로베르]]의 갑옷을 입고 대역을 맡았다. 이름은 이 영상 업로더의 자막에서 화자 이름 '마리아'로 나온다. 대사 속에서 이름이 불리지는 않는다.\n\n## 알타이르와의 대화\n- 로베르가 도망칠 시간이 필요했고, 기사단은 알타이르가 올 것을 알았다고 말한다.\n- 로베르는 사라센과 십자군이 힘을 합쳐 암살단에 맞서도록 간청하러 [[arsuf|아수프]]로 갔다고 알려 준다.\n- 알타이르가 처치한 '아홉'이 양측의 희생자였으니, 그가 암살단을 공동의 적으로 만들었다고 말한다.\n\n알타이르는 그녀가 표적이 아니라며 살려 준다. \"쫓아올 필요가 없다, 넌 이미 늦었으니\"라는 말을 남긴다. 알타이르는 말리크에게 \"여자였다. 이상하지, 나도 안다\"며 이 일은 다음에 이야기하자고 한다.",
        sources: at(AC1_MB6A, [1976, 1990], [2000, 2018], [2025, 2058], [2297, 2305])
      },
      {
        id: "arsuf", title: "아수프", category: "장소",
        aliases: ["Arsuf"],
        summary: "로베르 드 사블레가 리차드와 살라후딘을 만나러 간 곳.",
        body: "## 개요\n로베르의 대역에 따르면 [[robert-de-sable|로베르]]는 사라센과 십자군이 힘을 합쳐 [[assassins|암살단]]에 맞서도록 간청하러 아수프로 갔다. 알타이르도 그를 쫓아 아수프로 향한다.\n\n## 언급\nMemory Block 4에서 알 무알림은 [[salahuddin|살라후딘]]이 '무너진 아르수프 성채'에 병력을 모으고 있다고 말했다. 한글 자막 표기가 영상마다 다르다(아르수프/아수프).\n\n## 결투\n알타이르는 아수프 전장을 뚫고 리차드 왕 앞에 나섰다. 이곳에서 로베르와 결투해 그를 처단했다.",
        sources: [...at(AC1_MB4A, 202), ...at(AC1_MB6A, [2020, 2026], [2386, 2393]), ...at(AC1_MB6B, [834, 902], [1300, 1308])]
      },
      {
        id: "subject-16", title: "실험체 16", category: "인물",
        aliases: ["Subject 16"],
        summary: "데스몬드보다 먼저 애니머스 실험을 받은 것으로 보이는 사람.",
        body: "## 개요\n엔딩에서 [[desmond|데스몬드]]는 방바닥과 벽에 남은 빛나는 글씨와 그림을 보고, 자신보다 먼저 누가 여기 갇혀 있었는지 묻는다. 루시의 보고서는 실험체 16이 '벽의 글씨'를 남겼다고 쓴다.\n\n이름은 아직 나오지 않았다.\n\n## 실험체 17\n데스몬드는 애니머스 음성에서 '실험체 17'로 불린다.\n\n## 루시의 보고서 (이메일 원문)\n9월 8일 루시가 비딕에게 보낸 '실험체 16번' 보고서에 따르면, 애니머스에 오래 노출되어 [[bleeding-effect|혼입 효과]]가 생겼다. 그는 자기 삶과 조상의 삶을 구별하지 못하게 되었고, 그의 방에서 '사건'이 있었다. 그의 조상 하나는 고대 극동의 중요한 사건에 관련된 것으로 보이고, 그가 남긴 벽의 글씨는 일반적인 설명으로는 풀리지 않는다고 한다.\n\n## 다른 실험체\n리킨은 '실험체 12~16'의 애니머스 기록을 검토했다고 쓴다. 실험체 12의 데이터는 필라델피아 프로젝트와 관련이 있다.",
        sources: [...at(AC1_MB7, [1290, 1313], 1684), ...at(AC1_MB1, 506), ...at(AC1_MS, [5010, 5020], 4450, 4460)]
      },
      {
        id: "bleeding-effect", title: "혼입 효과", category: "기술",
        aliases: ["Bleeding Effect", "출혈 효과"],
        summary: "애니머스에 오래 노출되어 조상의 기억과 현실의 기억이 섞이는 현상.",
        body: "## 개요\n[[lucy-stillman|루시]]의 보고서(이메일 원문)에 따르면 [[animus|애니머스]]에 오래 노출되면 유전 구조에 'Bleeding Effect'가 생긴다. 유전 기억과 실시간 기억이 섞여 자기 삶과 조상의 삶을 구별하지 못하게 된다. 이 영상의 한글 자막은 '혼입 효과'라고 옮겼다.\n\n## 사례\n- [[subject-16|실험체 16]]이 이 효과로 무너졌고, 그의 방에서 '사건'이 있었다.\n- 루시는 이것이 다중 인격이나 망상 장애와 비슷하며, 전생을 경험한다는 사람들이 자연스럽게 이런 일을 겪는 것일 수 있다고 본다. 증상은 사람마다 달라도 결국 정신을 잃는다고 한다.\n- 엔딩에서 [[desmond|데스몬드]]가 방의 빛나는 글씨를 본 것도, 업로더 자막은 이 효과 때문으로 추측한다.",
        sources: [...at(AC1_MS, [5010, 5020]), ...at(AC1_MB7, 1674)]
      },
      {
        id: "eye-abstergo-satellite", title: "아이-앱스테르고 위성", category: "기술",
        aliases: ["Eye-Abstergo", "위성", "저궤도 송신기"],
        summary: "앱스테르고가 12월 21일로 발사를 미룬 '올인원 통신 위성'. 실제로는 유물을 위한 송신기다.",
        body: "## 겉으로 알려진 것\n앱스테르고 뉴스 메일에 따르면 아이-앱스테르고는 새 올인원 통신 위성을 막판 조정 때문에 12월 21일까지 미뤘고, 이전 세대보다 빠르고 안정적인 데이터 전송을 내세운다. [[alan-rikkin|리킨]]은 이를 '통화 품질 개선' 때문이라고 보도자료를 내겠다고 쓴다.\n\n## 실제 목적\n- [[lucy-stillman|루시]]의 비밀 메일: '유물을 위한 저궤도 송신기'이며 5년 전 조건 반응 실험의 연장이고, 성공하면 그들이 모든 것을 지배한다.\n- 리킨의 '분석' 메일: 위성이 일의 상당 부분을 해 주겠지만, 그 효과에 면역이거나 보호받는 자들은 따로 처리해야 한다.\n- 리킨은 감시가 심해졌으니 21일에 꼭 발사해야 한다고 쓴다.\n\n## DIA 사고\n덴버 국제공항(DIA)의 사고로 적어도 20명이 죽었고, 루시는 그곳을 발사지나 조립지로 본다. 리킨의 메일에서는 'DIA 위성 사고'로 에덴의 조각 2번을 잃었다고 한다.",
        sources: at(AC1_MS, [2540, 2577], [3380, 3465], [3640, 3660], [4255, 4290], [4442, 4485])
      }
    ]
  };
})();
