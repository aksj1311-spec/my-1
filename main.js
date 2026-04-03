const quotes = [
    "{name}야, 우리들도 사계절이란다. 지금 이 시간을 묵묵히 공부하고 기도하며 충실히 머문다면, 저 꽃들처럼 활짝 피어날 날이 꼭 올 거야~~~♡♡♡",
    "{name}야, 꾸준히 공부하면 분명 네가 만족할 좋은 결과를 얻을 거야. 스스로를 더 사랑하고 다독여주렴. 이번 주도 화이팅!",
    "세상에, {name}야! 지금 반에 공부하는 학생이 몇 명 없구나. 다들 어디 간 거니? 얼른 마음 잡고 시작하자.",
    "{name}야, 많이 바쁜 거 수녀님도 다 안단다. 그래도 지금 이 시간을 충실히 살면, 내년에는 분명 더 많이 웃게 될 거야. 수녀님은 확신해.",
    "성경 말씀에도 있단다. '지금 우는 사람은 행복하다. 하늘나라가 그들의 것이다.' {name}야, 지금의 노력이 나중에 큰 기쁨이 될 거야.",
    "{name}야, 9시까지는 꼭 등교해야지? 집에서도 스스로 관리 잘 하고 의미 있는 하루를 스스로 만들어가렴.",
    "아이고 {name}야, 수녀님이 정말 미안한 일이 있구나... 너무 바빠서 영화 결재 발송을 깜빡했지 뭐니. 미안하다, 다음에 꼭 좋은 시간 갖자.",
    "{name}야, 오늘도 화이팅! 아침 청소부터 깨끗이 하고, 맑은 환경에서 상쾌하게 오늘을 시작해보자꾸나.",
    "네가 어디서 무엇을 하든, {name}야. 지금 이 모든 순간이 너를 만들어가는 소중한 시간임을 꼭 기억하렴. 인고의 시간은 배신하지 않아.",
    "하늘은 스스로 돕는 자를 돕는단다. {name}의 노고를 하늘은 절대로 놓치지 않으실 거야. 수녀님도 응원해!",
    "{name}야, 지금 힘들다고 포기하면 안 돼. 이 시간만 잘 견디면 졸업 후에 웃으며 오늘을 돌아볼 수 있을 거야.",
    "{name}야, 책상 정리는 좀 했니? 깨끗한 환경이 깨끗한 마음을 만든단다. 오늘도 힘내자!"
];

const nameInput = document.getElementById('nameInput');
const quoteBtn = document.getElementById('quoteBtn');
const quoteText = document.getElementById('quoteText');

function getRandomQuote() {
    let name = nameInput.value.trim();
    if (!name) {
        name = "학생";
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];
    
    // {name} 치환
    selectedQuote = selectedQuote.replace(/{name}/g, name);

    // 페이드 효과 (간단하게)
    quoteText.style.opacity = 0;
    
    setTimeout(() => {
        quoteText.textContent = selectedQuote;
        quoteText.style.opacity = 1;
    }, 200);
}

quoteBtn.addEventListener('click', getRandomQuote);

// 엔터 키 지원
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRandomQuote();
    }
});
