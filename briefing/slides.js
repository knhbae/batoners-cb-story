import { returnsMarkup } from './returns.js?v=3';

export const sources = {
  crowdyListing: { title: '크라우디 · 투자 프로젝트 모집 화면 (2026.11.28 캡처)', url: 'https://www.ycrowdy.com/' },
  crowdyRecs: { title: '크라우디 · 렉스이노베이션 주식형 모집 상세 (2026.11.28 확인)', url: 'https://www.ycrowdy.com/i/recsinno' },
  fundingListing: { title: '펀딩포유 · 투자 프로젝트 모집 화면 (2026.11.28 캡처)', url: 'https://www.funding4u.co.kr/milestones/all/invest' },
  fundingMold: { title: '펀딩포유 · 몰드 2차 CB 모집 상세 (2026.11.28 확인)', url: 'https://www.funding4u.co.kr/projects/select_show/11189' },
  market: { title: '중소벤처기업부 · 2026년 1~3분기 벤처투자 동향 (2026.11)', url: 'https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1072576&cbIdx=86&parentSeq=1072576' },
  seoul: { title: '서울거래 · 공식 회사 소개', url: 'https://seoulexchange.oopy.io/' },
  seoulCB: { title: '서울거래 · 2023.12.04 CB 모집 공지 (신청 마감)', url: 'https://www.seoulexchange.kr/boards/notices/20231204%EC%84%9C%EC%9A%B8%EA%B1%B0%EB%9E%98-%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC-%EB%B0%9C%ED%96%89-%ED%88%AC%EC%9E%90%EC%9E%90-%EB%AA%A8%EC%A7%91/' },
  seoulService: { title: '서울거래 · 비상장 주식 서비스 운영 규정', url: 'https://www.seoulexchange.kr/boards/terms/operation/' },
  radexel: { title: '라덱셀 · 회사 소개와 연혁', url: 'https://radexel.com/about' },
  radexelProducts: { title: '라덱셀 · 개발 제품과 인허가 단계', url: 'https://radexel.com/' },
  radexelNews: { title: '라덱셀 게시 조선비즈 기사 · 352억원 R&D 과제 (2026.08.24)', url: 'https://radexel.com/news/?bmode=view&idx=173503859&q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&t=board' },
  pensionExit: { title: '국세청 · 연금 외 수령의 과세', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7888&mi=6608' },
  localWithholding: { title: '지방세법 제103조의13 · 원천징수 소득세의 10% 특별징수', url: 'https://law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1031176375' },
  interest: { title: '국세청 · 이자소득 원천징수 세율', url: 'https://nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7703&mi=2291' },
  venture: { title: '조세특례제한법 제16조 · 공제율·한도·보유기간', url: 'https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1001022315' },
  tax: { title: '소득세법 제55조 · 종합소득세 세율', url: 'https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1032203257' },
  local: { title: '지방세법 제92조 · 개인지방소득세 세율', url: 'https://law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1029492599' },
  pension: { title: '소득세법 제59조의3 · 연금계좌 세액공제', url: 'https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1001059880' },
  ntsPension: { title: '국세청 · 연금계좌 공제 한도와 공제율', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7875&mi=6608' },
  card: { title: '조세특례제한법 제126조의2 · 카드 공제율·문턱·한도', url: 'https://www.law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1000669411' },
  donation: { title: '소득세법 제59조의4 제4항 · 기부금 세액공제', url: 'https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1032903351' },
  isa: { title: '조세특례제한법 제91조의18 · ISA 운용소득 과세특례', url: 'https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1021859593' },
  faq: { title: '엔젤투자지원센터 FAQ · 투자확인·투자일·공제 시점', url: 'https://tax.kban.or.kr/svc/info/faq.do' },
  company: { title: '바토너스 홈페이지', url: 'https://batoners.com/' },
  saramin: { title: '사람인 · 바토너스 기업정보', url: 'https://www.saramin.co.kr/zf_user/company-info/view/csn/czY5ZzZWblpRVGF4VURVT1lUVEd4Zz09/company_nm/(%EC%A3%BC)%EB%B0%94%ED%86%A0%EB%84%88%EC%8A%A4' },
  news: { title: '머니투데이 · 소득공제·원금보장을 내세운 개인투자조합 보도 (2023.11.07)', url: 'https://www.mt.co.kr/future/2023/11/07/2023110617432537632' },
  guide: { title: '모임 구성원용 전체 안내', url: '../guide.html' },
  friends: { title: '지인·가족용 전체 안내', url: '../friends/guide.html' }
};

export const taxExamples = [
  { before: 3000, after: 2000, saving: 165, rate: '5.22' },
  { before: 7000, after: 6000, saving: 264, rate: '8.12' },
  { before: 12000, after: 11000, saving: 385, rate: '11.47' }
];
const number = value => value.toLocaleString('ko-KR');
const link = (key, label = sources[key].title) => `<a href="${sources[key].url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;

export const slides = [
  {
    id: 'start', section: '시작', title: '벤처투자와 소득공제', layout: 'opening',
    body: `<p class="opening-title">벤처투자와<br><span>소득공제</span></p><p class="opening-subtitle">우리 모임에서 함께 검토하는 투자 구상</p><div class="opening-question">연말정산에서<br>직접 챙겨 본 공제가 있나요?</div><p class="opening-route">제도 이해 <span>→</span> 투자 경험 <span>→</span> 우리 구상</p>`,
    foot: '설명회 초안 · 2026.11.28',
    notes: ['한두 분의 경험을 듣고 시작합니다. 소득이나 투자금액을 공개적으로 답할 필요는 없습니다.', '오늘은 투자 방식과 조건을 함께 확인합니다. 참여 의사는 자료를 검토한 뒤 개별적으로 전달받습니다.'], refs: []
  },
  {
    id: 'policy', section: '제도 이해', title: '벤처투자에 세제 혜택을 주는 이유',
    body: `<p class="lead">벤처기업으로 향하는 민간 투자를 지원하는 제도입니다.</p><div class="two-columns"><div><h2>투자자는</h2><p>요건에 맞는 투자금의 일부 또는 전부를<br><strong>소득에서 공제</strong></p></div><div><h2>기업은</h2><p>사업을 이어가고 성장하는 데 필요한<br><strong>투자자금 확보</strong></p></div></div><div class="rule-band"><strong>적격 직접투자 3,000만원 이하분: 100% 소득공제</strong><span>공제 한도는 해당 연도 종합소득금액의 50%</span></div><p class="small">2026.11 기준 · 기업·투자 방식·개인별 요건을 함께 충족해야 합니다.</p>`,
    foot: '100% 소득공제는 투자금 전액을 환급한다는 뜻이 아닙니다.',
    notes: ['제도의 취지를 소개하고, 세금을 계산할 소득을 줄이는 방식임을 설명합니다.', '적격 직접투자 등의 공제율은 3천만원 이하분 100%, 3천만원 초과~5천만원 이하분 70%, 5천만원 초과분 30%입니다. 펀드·조합별 공제 방식은 같지 않습니다.', '현행 법은 2028년 말까지의 적격 투자를 대상으로 규정합니다. 이 자료의 이번 납입 목표는 2026년입니다.'], refs: ['venture']
  },
  {
    id: 'market', section: '국내 현황', title: '국내 벤처투자는 어느 정도 규모일까요?', layout: 'market-slide',
    body: `<p class="data-period">같은 기간 비교 · 각 연도 1~3분기 · 중소벤처기업부 2026.11 발표</p><div class="market-layout"><div class="market-bars" role="img" aria-label="1~3분기 신규 벤처투자액: 2023년 7.71조원, 2024년 8.65조원, 2025년 9.84조원, 2026년 12.62조원">${[['2023',7.7118],['2024',8.6463],['2025',9.8362],['2026',12.6248]].map(([year,value])=>`<div class="market-bar-row ${year==='2026'?'current':''}"><span>${year}</span><div><i style="width:${value/14*100}%"></i></div><strong>${value.toFixed(2)}조원</strong></div>`).join('')}<p class="chart-axis">0에서 시작하는 동일 척도 · 연간 전체 금액과 구분</p></div><div class="market-stat"><span>2026년 1~3분기</span><strong>12.62조원</strong><p>전년 같은 기간보다 <b>28.4% 증가</b></p><hr><p>상위 투자 분야<br><b>ICT 서비스 · 전기·기계·장비 · 바이오·의료</b></p></div></div><div class="source-strip"><span>발표 자료를 요약하고 수치를 그래프로 다시 구성했습니다.</span>${link('market','공식 발표 원문')}</div>`,
    foot: '벤처투자회사·조합과 신기술금융사·조합의 합산 통계입니다. 개인 직접투자 소득공제 이용자 수나 수익률 통계가 아닙니다.',
    notes: ['신규 벤처투자액은 2023년 1~3분기 77,118억원, 2024년 86,463억원, 2025년 98,362억원, 2026년 126,248억원입니다. 모두 같은 1~3분기 기간과 합산 기준입니다.', '2026년 상위 투자 분야는 ICT 서비스 2.5조원, 전기·기계·장비 2.2조원, 바이오·의료 1.9조원입니다. 기업의 성장단계·산업별 상황은 다릅니다.', '시장 규모 증가가 개별 기업의 성공, 원금 회수 또는 소득공제 적격성을 보장하지 않습니다. 개인 투자 사례는 다음 회사 자료와 구분해 설명합니다.'], refs: ['market']
  },
  {
    id: 'funding-stock', section: '실제 모집 사례', title: '소득공제를 내세운 주식 투자 모집', layout: 'promotion-slide',
    body: `<div class="promotion-layout"><figure class="promotion-capture"><a href="assets/funding-examples/crowdy-recs-20261128.png" target="_blank" rel="noopener noreferrer" aria-label="크라우디 모집 화면 캡처 크게 보기"><img src="assets/funding-examples/crowdy-recs-20261128.png" width="624" height="582" alt="크라우디의 렉스이노베이션 모집 카드. 주식형이며 홍보 제목 앞에 26년 소득공제를 표시합니다."></a><figcaption>크라우디 공식 모집 화면 일부 · 클릭하면 확대</figcaption></figure><div class="promotion-details"><span class="promotion-status">모집 중 · 2026.11.28 기준</span><h2>크라우디 · 렉스이노베이션</h2><dl class="promotion-facts"><div><dt>투자 방식</dt><dd>주식형<small>상환전환우선주</small></dd></div><div><dt>청약 마감</dt><dd>2026.11.30</dd></div><div><dt>홍보 내용</dt><dd>2026년 소득공제 대상임을<br>제목에서 강조</dd></div></dl><p class="promotion-takeaway">소득공제와 함께 기업의 사업을 소개하며 투자자를 모집합니다.</p>${link('crowdyRecs','모집 상세 원문')}</div></div>`,
    foot: '2026.11.28 확인·캡처 · 모집 홍보 사례입니다. 개인별 공제와 투자금 회수가 보장되는 것은 아닙니다.',
    notes: ['공식 홈페이지의 투자 모집 카드에서 이미지·기업명·홍보 제목 부분만 실제 캡처했습니다. 원본 페이지의 문구·색상·구성을 바꾸지 않았습니다. 캡처 안의 말줄임표는 해당 사이트의 원래 표시입니다.', '2026.11.28 상세 페이지에서 펀딩 중, 2026.11.30 종료를 확인했습니다. 증권 발행 설명은 의결권이 배제된 상환전환우선주입니다. 모집 일정·조건은 이후 변경될 수 있습니다.', '이 사례는 주식형 공개 모집이며 이번 회사의 CB 직접 인수와 증권 종류·계약·모집 절차가 다릅니다. 상환전환우선주의 상환권도 원금 회수를 보장하지 않습니다.', '화면의 소득공제 문구는 모집 주체의 안내를 인용한 것입니다. 투자자 개인의 공제 적격성을 검증하거나 이 상품을 추천한 것으로 설명하지 않습니다.'], refs: ['crowdyListing', 'crowdyRecs']
  },
  {
    id: 'funding-cb', section: '실제 모집 사례', title: 'CB 모집에도 소득공제를 표시합니다', layout: 'promotion-slide',
    body: `<div class="promotion-layout"><figure class="promotion-capture"><a href="assets/funding-examples/funding4u-mold-20261128.png" target="_blank" rel="noopener noreferrer" aria-label="펀딩포유 모집 화면 캡처 크게 보기"><img src="assets/funding-examples/funding4u-mold-20261128.png" width="696" height="600" alt="펀딩포유의 몰드 2차 모집 카드. 전환사채 연 6%와 소득공제 표시, 12월 7일 오픈 예정 안내가 보입니다."></a><figcaption>펀딩포유 공식 모집 화면 일부 · 클릭하면 확대</figcaption></figure><div class="promotion-details"><span class="promotion-status upcoming">오픈 예정 · 2026.11.28 기준</span><h2>펀딩포유 · 몰드 2차 모집</h2><dl class="promotion-facts"><div><dt>투자 방식</dt><dd>전환사채(CB)<small>연 이자율 6%로 안내</small></dd></div><div><dt>청약 예정</dt><dd>2026.12.07 ~ 12.18</dd></div><div><dt>홍보 내용</dt><dd>이자 조건과 소득공제를<br>함께 표시</dd></div></dl><p class="promotion-takeaway">이번 투자안은 이자 0%로 검토 중입니다.<br>같은 CB라도 조건은 다릅니다.</p>${link('fundingMold','모집 상세 원문')}</div></div>`,
    foot: '2026.11.28 확인·캡처 · 오픈 전 조건은 변경될 수 있습니다. 이자·상환 약정도 원금 보장은 아닙니다.',
    notes: ['공식 프로젝트 목록의 유형·소득공제 표시, 이미지, 기업명·오픈 일정, 제목 부분만 실제 캡처했습니다. 원본 페이지의 문구·색상·구성을 바꾸지 않았습니다.', '2026.11.28 상세 페이지에서 청약 예정 기간 2026.12.07~12.18, 연 이자율 6%, 3개월마다 이자 지급, 납입·발행 예정일 2026.12.31을 확인했습니다. 페이지는 프로젝트 오픈 시 모집정보가 바뀔 수 있다고 안내합니다.', '이 사례의 12.18은 청약 마감 예정일입니다. 우리 계획의 12.18 납입 목표와 구분합니다. 이 사례의 일정이 우리 발행·등기·공제 서류 처리 기한에 여유가 있다는 근거는 아닙니다.', '소득공제를 홍보하는 공개 모집이 실제 존재한다는 사례입니다. 이자율·회수 조건·모집 절차는 이번 회사의 이자 0% CB 직접 인수와 다릅니다. 플랫폼을 통한 모집과 소득공제 표시가 원금·이자 지급을 보증하지 않습니다.'], refs: ['fundingListing', 'fundingMold']
  },
  {
    id: 'general-flow', section: '제도 이해', title: '투자금은 어떤 경로로 움직일까요?',
    body: `<div class="flow-line"><h2>직접투자</h2><div class="flow-path"><span>개인</span><i aria-hidden="true">→</i><span>벤처기업<br><small>신주·적격 CB 등</small></span><i aria-hidden="true">→</i><span>회사 사업</span></div></div><div class="flow-line"><h2>간접투자</h2><div class="flow-path"><span>개인</span><i aria-hidden="true">→</i><span>펀드·조합</span><i aria-hidden="true">→</i><span>투자기업</span></div></div><p class="takeaway">이번 구상: <strong>개인이 회사의 CB를 직접 인수</strong></p><p class="small">CB는 계약 조건에 따라 주식으로 전환할 수 있는 회사의 채권입니다.</p>`,
    foot: '투자금의 회수 방법과 공제 요건은 투자 방식·계약에 따라 다릅니다.',
    notes: ['이 장은 투자 경로를 설명하는 단순화한 도식입니다. 펀드·조합 출자와 회사 직접투자를 구분합니다.', '이번 자료에서는 개인이 새로 발행하는 무담보 CB를 인수하는 구상을 설명합니다. 기존 채권을 다른 사람에게서 사는 경우와 구분해야 합니다.'], refs: ['venture', 'faq']
  },
  {
    id: 'seoul-case', section: '회사·사례', title: '서울거래: 비상장 거래 플랫폼과 CB 사례', layout: 'case-slide',
    body: `<div class="case-columns"><div><h2>어떤 회사인가요?</h2><p>서울거래㈜가 운영하는<br><strong>비상장 주식 거래 플랫폼</strong></p><ul><li>투자자의 매매 주문을 증권사에 전달</li><li>비상장 기업의 주식을 사고파는 유통 서비스</li></ul><div class="link-row">${link('seoul','회사 소개')}${link('seoulService','서비스 운영 규정')}</div></div><div class="case-evidence"><span class="case-date">과거 공개 사례 · 2023.12.04 · 신청 마감</span><h2>운영회사 자체의<br>엔젤투자용 CB 모집</h2><dl class="case-terms"><div><dt>약정 이자</dt><dd>연 0%</dd></div><div><dt>만기</dt><dd>3년</dd></div><div><dt>당시 대상</dt><dd>등록 전문투자자</dd></div></dl>${link('seoulCB','당시 모집 공지 읽기')}</div></div><p class="case-takeaway">플랫폼에서 기존 주식을 매수하는 거래와, 운영회사 CB를 인수하는 투자는 구분합니다.</p>`,
    foot: '현재 모집 안내가 아닌 과거 공지 사례입니다. 발표자의 실제 투자 조건·성과를 뜻하지 않습니다.',
    notes: ['서울거래의 플랫폼 사업과 서울거래 주식회사가 자체 CB를 발행한 사례를 구분합니다. 플랫폼 거래를 했다는 사실만으로 소득공제 대상이 되지는 않습니다.', '2023년 12월 4일 공식 공지에는 연 이자율 0%, 3년 만기, 해지 45일 전 사전 협의, 등록 전문투자자 대상이 기재되어 있습니다. 현재 신청은 마감되어 있습니다.', '과거 공지의 “3년 이상 투자하여야 소득공제”라는 문구는 현재 법령 설명으로 그대로 옮기지 않았습니다. 투자한 해부터 공제 신청과 원칙적 3년 보유 요건을 구분합니다.', '이번 바토너스 계약의 중도 회수·전환·콜옵션 조건을 서울거래 사례와 같다고 취급하지 않습니다. 개인 경험과 수치는 발표자가 직접 설명합니다.'], refs: ['seoul', 'seoulService', 'seoulCB', 'venture']
  },
  {
    id: 'radexel-case', section: '회사·사례', title: '라덱셀: 자기장 기반 방사선치료 기술 개발', layout: 'case-slide',
    body: `<div class="case-columns"><div><h2>어떤 회사인가요?</h2><p><strong>2018년 설립 의료기기 기업</strong><br>자기장과 방사선치료를 결합한 MPRT 개발</p><ul><li>정상조직의 불필요한 방사선 노출을 줄이는 기술</li><li>모듈형·통합형·로봇형 제품을 개발 중</li></ul><div class="link-row">${link('radexel','회사 소개')}${link('radexelProducts','제품·개발 단계')}</div></div><div class="case-evidence"><span class="case-date">회사 게시 기사 · 조선비즈 2026.08.24</span><h2>7년간 총 352억원 규모<br>의료기기 R&D 과제</h2><p>라덱셀 컨소시엄 주관<br>서울아산병원·한국원자력연구원 등 참여</p><p class="small">정부지원금 279.5억원 포함.<br>라덱셀 단독의 민간 투자유치 금액이 아닙니다.</p>${link('radexelNews','관련 기사 읽기')}</div></div><p class="case-takeaway">개발·전임상 결과, 임상 검증, 제품 인허가는 단계가 다릅니다.</p>`,
    foot: '회사 공개자료를 요약했습니다. 개발 중인 의료기기의 임상 효과나 상용화 완료를 보증하는 설명이 아닙니다.',
    notes: ['공식 회사 연혁은 2018년 법인 설립, 2019년 서울아산병원에서 라덱셀로의 기술이전을 안내합니다. 연구 시작 시점인 2013년과 법인 설립일을 구분했습니다.', 'MPRT는 자기장으로 방사선치료 과정의 이차전자 경로를 조절해 정상조직의 피폭을 줄이는 것을 목표로 하는 기술입니다. 제품 소개의 개발·인허가 상태를 함께 확인합니다.', '2026년 8월 24일 회사 게시 조선비즈 기사에 따르면 라덱셀 컨소시엄의 과제 총사업비는 352억원, 정부지원금은 279.5억원, 기간은 7년입니다. 회사의 민간 투자금이나 현금 보유액으로 해석하지 않습니다.', '이 장은 회사 정보입니다. 발표자의 투자금·시기·실현 수익·상환 결과를 추정하지 않았습니다.'], refs: ['radexel', 'radexelProducts', 'radexelNews']
  },
  {
    id: 'experience', section: '경험', title: '제가 살펴본 투자 경험',
    body: `<div class="experience-row"><h2>서울거래</h2><p>참여 경로 <span>·</span> 투자 조건 <span>·</span> 소득공제</p></div><div class="experience-row"><h2>라덱셀</h2><p>지인 회사 <span>·</span> 정보 확인 <span>·</span> 소통</p></div>`,
    foot: '개인 경험 · 발표자가 구두로 설명',
    notes: ['서울거래: 참여 경로 / 확인한 조건 / 소득공제 경험.', '라덱셀: 지인 회사 / 정보를 확인한 과정 / 소통 경험.', '실제 투자금·날짜·절세액·상환 여부는 이 초안에 기재하지 않았습니다. 지인이라는 관계를 원금 보장 근거로 설명하지 않습니다.'], refs: []
  },
  {
    id: 'compare', section: '공제 비교', title: '같은 1,000만원, 투자·저축의 절세 효과', layout: 'comparison',
    body: `<p class="comparison-baseline">근로자 예시 · 총급여 1억원 / 추가 공제 전 과세표준 7,000만원<br><span>각 방법에 1,000만원씩 별도로 사용한 경우 · 지방소득세 포함</span></p><div class="table-wrap"><table class="comparison-table"><thead><tr><th scope="col">1,000만원 사용 방법</th><th scope="col">세금 감소액</th><th scope="col">벤처투자와 차이<small>벤처투자가 더 줄이는 세금</small></th></tr></thead><tbody><tr class="comparison-reference"><th scope="row">적격 벤처 직접투자<small>투자금 전액 소득공제 · 원금 손실 가능</small></th><td><strong>264만원</strong></td><td>비교 기준</td></tr><tr><th scope="row">연금저축만 납입<small>600만원까지 공제 · 연금 수령 조건</small></th><td>79.2만원</td><td>+184.8만원</td></tr><tr><th scope="row">연금저축 + IRP<small>900만원까지 공제 · 연금 수령 조건</small></th><td>118.8만원</td><td>+145.2만원</td></tr><tr><th scope="row">ISA 납입<small>납입액 공제 없음 · 운용수익에 과세 혜택</small></th><td>납입 시 0원</td><td class="comparison-excluded">별도 비교</td></tr></tbody></table></div><p class="comparison-assumptions">공제 요건·한도 충족, 기존 한도 미사용·차감할 세금 충분·다른 공제 변화 없음을 가정합니다.<br>ISA는 납입액이 아닌 운용수익의 세금을 줄이므로, 이 표에서 차액을 계산하지 않습니다.</p>`,
    foot: '당해 연도 세금 감소만 비교한 예시입니다. 운용수익·인출 시 세금·손실은 반영하지 않았습니다.',
    notes: [
      '같은 사람에게 추가 자금 1,000만원이 생겼을 때 각 방법을 하나씩 선택한 별도 시나리오입니다. 여러 행의 혜택을 합산하는 표가 아닙니다. 총급여 1억원과 과세표준 7,000만원은 서로 다른 개념이며, 이 예시의 과세표준은 다른 기존 공제를 반영한 금액입니다.',
      '소득공제는 세금을 계산할 소득을 줄이고, 세액공제는 계산한 세금에서 차감합니다. 이 표는 공제율 대신 실제 세금 감소액으로 맞춰 비교했습니다.',
      '벤처투자: 적격 직접투자 1,000만원 전액 공제. 과세표준 7,000만원 → 6,000만원, 국세 240만원 + 지방소득세 24만원 = 264만원. 종합소득금액 50% 한도와 투자 요건을 충족한다고 가정합니다.',
      '연금저축 + IRP: 연금저축 600만원 + IRP 400만원 납입 예시. 일반 합산 공제 대상은 900만원, 총급여 5,500만원 초과자의 국세 공제율 12% 적용. 900만원 × 12% × 1.1 = 118.8만원. 나머지 100만원은 그해 세액공제 대상에서 제외됩니다. 연금저축에만 1,000만원을 넣으면 600만원 × 12% × 1.1 = 79.2만원입니다. ISA 만기자금의 연금 전환 특례는 제외합니다.',
      'ISA: 납입액 자체에 대한 소득·세액공제는 없어 납입 시 효과를 0원으로 표시했습니다. 운용 중 발생한 이자·배당의 비과세·분리과세 혜택은 존재합니다. 실제 운용수익과 기간을 정하지 않아 금액·벤처투자와의 차액을 계산하지 않았습니다. ISA에 절세 효과가 없다는 뜻이 아닙니다.',
      '표의 차액은 264만원에서 각 세금 감소액을 뺀 값입니다. 미래 인출·연금 수령 때의 세금, 중도 회수 추징, 운용수익, 물품·서비스의 가치와 투자 손실은 포함하지 않습니다. 투자 적합성의 순위나 벤처투자 권장 순서를 뜻하지 않습니다. 근로소득세액공제 등 다른 공제의 변화와 표준세액공제로의 전환은 없다고 가정합니다.'
    ], refs: ['venture', 'tax', 'local', 'pension', 'isa']
  },
  {
    id: 'compare-spending', section: '공제 비교', title: '소비·기부 공제와 비교하면', layout: 'comparison',
    body: `<p class="comparison-baseline">근로자 예시 · 총급여 1억원 / 추가 공제 전 과세표준 7,000만원<br><span>각 방법에 1,000만원씩 별도로 사용한 경우 · 지방소득세 포함</span></p><div class="table-wrap"><table class="comparison-table"><thead><tr><th scope="col">1,000만원 사용 방법</th><th scope="col">세금 감소액</th><th scope="col">벤처투자와 차이<small>벤처투자가 더 줄이는 세금</small></th></tr></thead><tbody><tr class="comparison-reference"><th scope="row">적격 벤처 직접투자<small>투자금 전액 소득공제 · 원금 손실 가능</small></th><td><strong>264만원</strong></td><td>비교 기준</td></tr><tr><th scope="row">신용카드 일반 소비<small>추가 사용액의 15% 소득공제 · 소비 지출</small></th><td>39.6만원</td><td>+224.4만원</td></tr><tr><th scope="row">체크카드·현금영수증<small>30% 소득공제, 이 예시 한도 250만원 · 소비 지출</small></th><td>66만원</td><td>+198만원</td></tr><tr><th scope="row">일반기부금<small>종교단체 외 적격 단체 · 기부 지출</small></th><td>165만원</td><td>+99만원</td></tr></tbody></table></div><p class="comparison-assumptions">카드: 기존 사용액 2,500만원으로 총급여 25% 충족, 자녀 한도 가산 없음.<br>한도 미사용·차감할 세금 충분·다른 공제 변화 없음. 소비·기부금은 회수할 투자원금이 아닙니다.</p>`,
    foot: '당해 연도 세금 감소만 비교한 예시입니다. 운용수익·인출 시 세금·손실은 반영하지 않았습니다.',
    notes: [
      '같은 사람에게 추가 자금 1,000만원이 생겼을 때 각 방법을 하나씩 선택한 별도 시나리오입니다. 여러 행의 혜택을 합산하는 표가 아닙니다. 총급여 1억원과 과세표준 7,000만원은 서로 다른 개념이며, 이 예시의 과세표준은 다른 기존 공제를 반영한 금액입니다.',
      '소득공제는 세금을 계산할 소득을 줄이고, 세액공제는 계산한 세금에서 차감합니다. 이 표는 공제율 대신 실제 세금 감소액으로 맞춰 비교했습니다.',
      '벤처투자: 적격 직접투자 1,000만원 전액 공제. 과세표준 7,000만원 → 6,000만원, 국세 240만원 + 지방소득세 24만원 = 264만원. 종합소득금액 50% 한도와 투자 요건을 충족한다고 가정합니다.',
      '카드: 공통적으로 기존 공제 대상 일반 신용카드 사용액이 2,500만원이고, 추가 1,000만원을 일반 신용카드 또는 체크카드·현금영수증으로 지출한다고 가정합니다. 기존 사용액은 문턱만 채워 공제액이 0원입니다. 총급여 1억원, 자녀 등에 따른 한도 가산 없음, 전통시장·대중교통 등의 특별 사용분 없음. 신용카드: 1,000만원 × 15% × 26.4% = 39.6만원. 체크·현금: 1,000만원 × 30% = 300만원 중 기본 한도 250만원 × 26.4% = 66만원입니다. 문턱을 넘지 않았거나 한도를 이미 썼으면 추가 효과가 없거나 줄어듭니다.',
      '일반기부금: 종교단체 외 적격 단체에 낸 1,000만원 전액이 공제 한도 안에 있고 기존·이월 기부금이 없다고 가정합니다. 1,000만원 × 국세 15% × 1.1 = 165만원. 정치자금·고향사랑기부금의 별도 공제율·답례품은 포함하지 않습니다. 기부금은 돌려받는 투자원금이 아닙니다.',
      '표의 차액은 264만원에서 각 세금 감소액을 뺀 값입니다. 미래 인출·연금 수령 때의 세금, 중도 회수 추징, 운용수익, 물품·서비스의 가치와 투자 손실은 포함하지 않습니다. 투자 적합성의 순위나 벤처투자 권장 순서를 뜻하지 않습니다. 근로소득세액공제 등 다른 공제의 변화와 표준세액공제로의 전환은 없다고 가정합니다.'
    ], refs: ['venture', 'tax', 'local', 'card', 'donation']
  },
  {
    id: 'returns', section: '3년 수익 비교', title: '3년 운용수익까지 합치면?', layout: 'returns-slide',
    body: returnsMarkup(),
    foot: '상품별 위험과 현금 회수 조건은 다릅니다. 수익률 가정은 전망·보장수익률이 아니며, CB는 원금 전액 상환을 가정했습니다.',
    notes: ['총급여 1억원·추가 공제 전 과세표준 7,000만원, 최초 1,000만원만 납입하고 추가 납입은 없다고 가정합니다. 초기 절세액은 현금으로 보유하며 재투자하지 않습니다. 다른 공제 변화, 수수료의 추가 차감, 인플레이션, 기업 부도 확률은 반영하지 않았습니다. 운용수익률 입력은 수수료 차감 후·세전 가정입니다.', 'ISA·연금 수익률은 연 -5%, 0%, 3%, 5%, 7% 시나리오를 고를 수 있습니다. 특정 상품의 예상수익률이나 투자 권유가 아닙니다. 일반 예금은 연 3%가 3년간 같고, 매년 이자에 15.4%를 과세한 뒤 원리금을 재예치한다고 가정합니다. 금융소득 종합과세 대상이 아닌 경우입니다.', '일반형 ISA는 3년 보유 요건을 채워 정상 해지하고 다른 ISA 손익은 없다고 가정합니다. 세전 이익 = 1,000 × ((1+r)^3−1). 그 중 200만원을 넘는 양의 이익에 9.9%를 과세합니다. 다른 상품의 손익통산·해외 원천세 등은 제외했습니다.', '연금저축 단독은 600만원, 연금저축+IRP는 900만원을 처음에 세액공제 받아 각각 79.2만원, 118.8만원의 절세액을 적용합니다. 공제받지 않은 나머지 400만원/100만원을 이후 연도 납입금으로 전환해 추가 공제받는 경우는 제외합니다. 퇴직금 이전액은 없습니다.', '계좌 유지 모드는 연금의 3년 후 계좌 가치에 초기 세액공제를 더한 값입니다. 인출세를 빼기 전 값이므로 바로 사용 가능한 현금과 비교해서는 안 됩니다. 실제 연금 수령 시의 세금은 연령·수령 방법 등에 따라 달라집니다.', '3년 후 해지 모드는 일반적인 연금 외 수령을 가정합니다. 공제받지 않은 원금은 과세제외금액으로 확인되었다고 보고, 잔액에서 그 원금을 뺀 양수에 16.5%를 과세합니다. 부득이한 사유 예외나 정상 연금 수령에 해당하는 경우는 제외합니다. 중도 해지 권유가 아닙니다.', '합산효과는 초기 세금 감소액 + 운용·인출 후 증감액으로, 투자원금은 제외합니다. 누적 비교율 = 합산효과 ÷ 1,000만원, 연환산 = (1+누적 비교율)^(1/3)−1. 환급 시점을 반영한 IRR이 아니며, 뒤쪽 세액표도 같은 3년 복리 환산 방식을 사용합니다.', '소비·기부는 회수할 투자자산이 남는 동일한 상품이 아니므로 이 운용수익 표에서 제외했습니다. 지출 자체의 공제 효과는 앞 표에서 비교합니다.'], refs: ['venture', 'tax', 'local', 'pension', 'pensionExit', 'isa', 'interest', 'localWithholding']
  },
  {
    id: 'purpose', section: '우리 구상', title: '우리 모임에서는 왜 검토하나요?',
    body: `<ol class="statement-list"><li><span>01</span><div><strong>모임을 이어갈 재원 고민</strong><p>구성원의 벤처투자·소득공제 경험에서 출발</p></div></li><li><span>02</span><div><strong>모임 안의 벤처기업과 연결</strong><p>희망하는 구성원이 회사의 CB에 투자</p></div></li><li><span>03</span><div><strong>경험과 지식을 사업 자문으로</strong><p>실제 서비스·사업 개발에 필요한 의견을 나누는 구상</p></div></li></ol>`,
    foot: '일반 모임 비용과 회사의 사업 자문 비용은 구분합니다.',
    notes: ['모임 재원을 고민한 배경과 구성원의 벤처투자 경험을 짧게 연결합니다.', '회사에서 지출하는 비용은 실제 사업과 관련된 자문 활동을 대상으로 검토합니다. 투자 참여만으로 자문 역할이나 자문비가 정해지지는 않습니다.'], refs: ['guide']
  },
  {
    id: 'company', section: '회사 소개', title: '이번에 함께 검토하는 회사, 바토너스',
    body: `<dl class="company-facts"><div><dt>회사</dt><dd>주식회사 바토너스 <span>·</span> 대표 이지수</dd></div><div><dt>사업</dt><dd>소프트웨어 개발·공급</dd></div><div><dt>자문 주제</dt><dd>수어통역 등 서비스·사업 개발<br><small>AI·기술, 정부 정책·공공사업, 경영 등</small></dd></div></dl><div class="link-row">${link('company', '회사 홈페이지')}${link('saramin', '회사 정보 · 사람인')}</div><p class="small">투자 판단에 필요한 최신 회사 자료와 최종 계약 조건은 별도로 확인합니다.</p>`,
    foot: '회사 정보는 공개자료, 자문 주제는 현재 논의한 구상을 기준으로 작성했습니다.',
    notes: ['대표가 현재 사업과 이번 자금의 관리·상환 계획을 직접 설명하는 장입니다.', '회사소개 페이지와 재무 수치만으로 투자 적합성이나 상환능력을 단정하지 않습니다. 최신 재무자료·벤처확인서·계약 조건을 함께 확인합니다.'], refs: ['saramin', 'company', 'guide']
  },
  {
    id: 'our-flow', section: '자금 흐름', title: '투자자와 회사의 돈은 이렇게 움직입니다', layout: 'flow-slide',
    body: `<p class="flow-example">1인 1,000만원 × 10명 = 회사 납입금 1억원 · 아래 금액은 예시</p><div class="fund-flow"><div class="fund-row payment"><div class="fund-stage"><b>납입</b><span>2026.12.18 목표</span></div><div class="fund-node">투자자 10명<small>개인별 1,000만원</small></div><div class="fund-arrow"><strong>합계 1억원</strong><i aria-hidden="true"></i></div><div class="fund-node">회사 명의 예금<small>투자자는 CB 보유</small></div></div><div class="fund-row operations-flow"><div class="fund-stage"><b>보유 기간</b><span>회사 자금 관리</span></div><div class="fund-node">회사 예금이자<small>회사에 귀속</small></div><div class="fund-arrow"><strong>세금·비용 고려</strong><i aria-hidden="true"></i></div><div class="fund-node">실제 사업 자문회의<small>예산 검토·지출 증빙</small></div></div><div class="fund-row tax-flow"><div class="fund-stage"><b>세금 정산</b><span>2027년</span></div><div class="fund-node">연말정산·종소세 신고<small>공제 요건 충족 시</small></div><div class="fund-arrow"><strong>개인별 264만원 예시</strong><i aria-hidden="true"></i></div><div class="fund-node">투자자의 세금 감소<small>환급 증가 또는 납부 감소</small></div></div><div class="fund-row repayment"><div class="fund-stage"><b>만기 상환</b><span>투자일부터 3년 경과 후</span></div><div class="fund-node">회사<small>만기·상환 조건은 계약서</small></div><div class="fund-arrow"><strong>개인별 원금 1,000만원</strong><i aria-hidden="true"></i></div><div class="fund-node">투자자<small>미전환 원금 · 약정 이자 0%</small></div></div></div><p class="flow-key">절세액은 회사가 지급하는 이자가 아닙니다. 예금이자는 회사에, 공제 효과는 투자자에게 귀속됩니다.</p>`,
    foot: '264만원은 과세표준 7,000만원·전액 공제 예시입니다. 원금 상환은 회사 지급능력에 달려 있으며 보장되지 않습니다.',
    notes: ['청색 화살표는 투자금 납입, 황갈색은 회사 예금이자의 사용 구상, 녹색은 개인의 세금 감소 효과, 회색은 만기 원금 상환입니다. 세금 감소 화살표는 세금 계산 효과를 뜻하며 회사 계좌에서 투자자에게 송금되는 돈이 아닙니다.', '회사 명의 예금의 원금은 회사 자산입니다. 투자자는 그 예금의 직접 예금주가 아니라 회사의 CB 채권자입니다. 회사의 예금 보관만으로 투자자 원금이 보장되지는 않습니다.', '회사 예금이자는 세금·운용비용을 고려한 뒤 실제 사업 자문회의 예산을 검토하는 구상입니다. 자문비 집행액·주기·담당은 확정 사항이 아닙니다.', '세금 감소 264만원은 앞 비교표와 같은 과세표준 7,000만원 → 6,000만원, 지방소득세 포함 예시입니다. 실제 효과·환급 시기는 개인별로 다릅니다.', '만기 원금 상환은 주식으로 전환하지 않은 CB가 계약상 만기에 정상 상환되는 경우를 가정합니다. 정확한 투자일·만기일은 등기와 계약에서 확인합니다.'], refs: ['venture', 'tax', 'local', 'faq', 'guide']
  },
  {
    id: 'tax-effect', section: '소득공제 효과', title: '실제 세금은 얼마나 줄어들까요?',
    body: `<p class="lead">1,000만원 전액 소득공제 가정 <span class="small">· 지방소득세 포함</span></p><div class="table-wrap"><table class="tax-table"><thead><tr><th>공제 전 → 후 과세표준</th><th>세액 감소액</th><th>연환산 비교율<small>3년 복리 환산</small></th></tr></thead><tbody>${taxExamples.map(item=>`<tr><td><span>${number(item.before)} →</span> <span>${number(item.after)}만원</span></td><td><strong>${item.saving}만원</strong></td><td>${item.rate}%</td></tr>`).join('')}</tbody></table></div><p class="formula">연환산 비교율 = [(1 + 세액 감소액 ÷ 1,000만원)^(1/3) − 1] × 100</p><p class="small">과세표준은 연봉과 다릅니다. 공제 요건·한도 충족과 다른 세액공제 변화가 없음을 가정합니다.</p>`,
    foot: '연환산 비교율은 회사가 매년 지급하는 이자나 보장수익률이 아닙니다.',
    notes: ['표의 가운데 예시부터 설명하고 나머지 구간을 비교합니다. 투자금 전액이 공제되고 각 예시에서 같은 세율 구간 안에 머무는 것으로 계산했습니다.', '국세 세율 15%·24%·35%에 해당하는 예시이며 개인지방소득세를 함께 계산했습니다.', '연환산 비교율은 세액 감소액을 3년 복리 기준으로 환산한 값입니다. 공제액 재투자·환급 시점·투자 손실·다른 세액공제의 변화는 반영하지 않았습니다. 실제 절세액이나 환급액은 개인별로 달라집니다.'], refs: ['venture', 'tax', 'local']
  },
  {
    id: 'holding-period', section: '보유기간', title: '3년을 보유해야 하는 이유',
    body: `<div class="two-columns holding-columns"><div><h2>소득공제 신청</h2><p class="large-word">투자한 해부터</p><p>요건을 갖추면<br>3년 전에도 공제 가능</p></div><div><h2>공제 혜택 유지</h2><p class="large-word">원칙적으로 3년</p><p>투자일부터 계산<br>조기 양도·회수 시 추징 검토</p></div></div><div class="rule-band"><strong>세법상 보유기간과 계약상 만기는 따로 확인합니다.</strong><span>3년 이전 양도·회수 시 공제 세액 추징 · 사망 등 법정 예외 있음</span></div>`,
    foot: 'CB 투자일은 등기사항전부증명서의 사채 발행일을 기준으로 확인합니다.',
    notes: ['3년을 기다렸다가 처음 공제를 받는 것으로 오해하지 않도록 설명합니다.', '현행 제도는 공제 시기 변경 신청도 허용하지만, 이 안내는 2026년 투자분을 2027년 세금 정산에 반영하는 구상입니다.', '중도 회수가 계약상 가능한지와 세금 추징 여부는 별개입니다.'], refs: ['venture', 'faq']
  },
  {
    id: 'terms', section: '참여 조건', title: '현재 검토 중인 참여·계약 조건',
    body: `<div class="table-wrap"><table class="terms-table"><tbody><tr><th>참여금액</th><td>모임 구성원: 100만원부터<br><small>지인·가족: 300만원부터, 100만원 단위</small></td></tr><tr><th>기간·이자</th><td>투자일부터 3년 경과 후 만기 · 약정 이자 0%</td></tr><tr><th>주식 전환</th><td>전환가액 1주당 100,000원으로 검토<br><small>전환청구 기간·절차는 최종 계약서 확인</small></td></tr><tr><th>중도 회수·콜옵션</th><td>권리자·가격·행사기간·지급일 확정 필요</td></tr></tbody></table></div><p class="takeaway">최종 조건 확인 → 참여 판단 → 계약·납입</p>`,
    foot: '현재 검토안입니다. 최종 발행결의·계약서에서 조건을 확정합니다.',
    notes: ['모임 구성원용 설명회를 기준으로 설명하고, 지인·가족의 참여 조건은 별도임을 안내합니다.', '회사 측 콜옵션은 회사가 약정 조건으로 CB 매수를 요구하는 권리입니다. 유효한 전환청구를 언제든 거부하는 권리로 설명하지 않습니다.', '미확정한 전환청구 기간·콜옵션 조건·지급일을 확정된 것처럼 안내하지 않습니다.'], refs: ['guide', 'friends']
  },
  {
    id: 'operations', section: '자금 운용', title: '회사에서는 자금을 어떻게 관리하나요?',
    body: `<ol class="statement-list"><li><span>01</span><div><strong>투자금은 우선 회사 명의 예금으로</strong><p>입금·잔액·이자·지출 내역을 관리</p></div></li><li><span>02</span><div><strong>예금이자에서 세금·운용비용 고려</strong><p>실제 사업 자문회의 예산 검토 · 회의·지출 증빙 보관</p></div></li><li><span>03</span><div><strong>만기 상환 준비와 운용 상황 공유</strong><p>공유 항목·주기·담당자는 최종 안내에서 확정</p></div></li></ol><p class="small">회사 명의 예금에 보관하더라도 투자자에게 원금이 보장되는 예금 상품은 아닙니다.</p>`,
    foot: '회사의 자금 관리 계획과 실제 상환능력을 함께 확인합니다.',
    notes: ['현재 계획은 우선 예금 보관입니다. 회사의 자금 사용 계획이 바뀔 때 어떻게 공유할지 논의해야 합니다.', '자문은 수어통역 등 실제 회사의 서비스·사업 개발을 다룹니다. 일반 모임비를 자문비라는 이름으로 바꾸어 처리하는 계획이 아닙니다.', '회사 계좌의 자금은 회사 자산입니다. 투자자 개인의 예금처럼 설명하지 않습니다.'], refs: ['guide']
  },
  {
    id: 'news', section: '확인할 점', title: '혜택을 강조한 홍보에서 확인할 것',
    body: `<div class="news-excerpt"><p class="news-date">머니투데이 · 2023.11.07 보도</p><h2>소득공제·원금보장을 내세운<br>개인투자조합 모집 사례</h2><p>페이퍼컴퍼니 활용과 자금 사용의 불투명성을 지적한 기사입니다.</p>${link('news', '기사 원문 읽기')}</div><ul class="plain-list"><li>“원금보장·확정 수익”이라는 설명의 근거</li><li>회사의 실제 사업과 투자금 사용 계획</li><li>투자 구조·안내 대상·계약 조건</li></ul>`,
    foot: '2023년 보도 사례입니다. 이번 회사에 대한 보도나 위법 판정이 아닙니다.',
    notes: ['제도를 악용한 홍보 사례를 1분 정도로 소개합니다. 기사 제목만 보여주며 불안을 키우기보다 어떤 자료를 확인해야 하는지 연결합니다.', '보도된 개인투자조합 사례와 이번 CB 직접투자의 구조를 구분합니다. 구조가 다르다는 이유만으로 이번 투자의 적법성이나 안전성을 단정하지도 않습니다.'], refs: ['news']
  },
  {
    id: 'questions', section: '질의응답', title: '궁금한 점을 함께 확인합니다',
    body: `<div class="questions"><details><summary>중간에 돈이 필요하면 어떻게 하나요?</summary><p>계약상 중도 회수 권리·절차와 회사의 지급능력을 확인합니다. 3년 전 회수라면 공제 세액 추징도 검토합니다.</p></details><details><summary>회사가 어려워지면 원금은 어떻게 되나요?</summary><p>상환 지연이나 원금 손실이 생길 수 있습니다. 회사의 자금·채무 상황과 상환 계획을 확인해야 합니다.</p></details><details><summary>내가 받는 소득공제 효과는 얼마인가요?</summary><p>소득·공제 여력·다른 세액공제에 따라 달라집니다. 개인별 수치는 관련 자료를 보고 별도로 확인합니다.</p></details><details><summary>회사의 운용 상황을 확인할 수 있나요?</summary><p>공유할 잔액·지출·상환 준비 내역과 주기·담당자를 최종 안내에서 정할 예정입니다.</p></details></div>`,
    foot: '개인 소득과 희망 투자금액은 개별적으로 확인합니다.',
    notes: ['공통 질문을 먼저 받습니다. 개인 소득이나 세부 세무자료는 설명회에서 공개하지 않습니다.', '바로 답하기 어려운 내용은 질문과 확인 담당자를 기록하고, 확인 후 최종 안내에 반영합니다.'], refs: ['venture', 'guide']
  },
  {
    id: 'next', section: '다음 절차', title: '설명회 이후에는 이렇게 진행합니다',
    body: `<ol class="next-steps"><li><strong>12/6 목표</strong><div>참여 의사·희망 금액 전달<small>참여 희망 / 검토 중 / 미참여 · 남은 질문</small></div></li><li><strong>납입 전</strong><div>조건·배정 확정과 회사 발행결의<small>최종 조건 확인 후 계약 · 세부 날짜 별도 안내</small></div></li><li><strong>12/18 목표</strong><div>계약에 따른 회사 계좌 납입</div></li><li><strong>2027.1/15 목표</strong><div>투자확인서·신청 방법 전달<small>발급·보완 일정에 따라 조정 가능</small></div></li></ol><div class="link-row">${link('guide', '모임 구성원용 전체 안내')}${link('friends', '지인·가족용 전체 안내')}</div>`,
    foot: '목표 일정입니다. 최종 조건과 회사 승인 절차를 확인한 뒤 진행합니다.',
    notes: ['참여 의사와 희망 금액, 남은 질문을 개별적으로 전달받습니다. 의사 확인을 곧바로 계약 체결로 취급하지 않습니다.', '발표 전 확인: 기존 노션의 최종 배정·발행결의 목표 12/4는 참여 의사 마감 12/6보다 빠릅니다. 내부 일정을 조정하고 최종 날짜를 통일해야 합니다. 이 페이지에서 노션 날짜를 변경하지는 않았습니다.', '2027년 1/15은 서류 전달 목표입니다. 근로자는 근무처 제출기한, 종합소득세 신고자는 신고 일정에 맞춰 진행합니다.'], refs: ['guide', 'faq']
  }
];
