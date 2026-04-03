const snackMessage = "간단한 간식 오후 3시 50분 홍승혁샘이 챙겨주실겁니다.";

const messages = [
    "{vocative}, 오늘 좀 지각자가 많네요. 마음을 깨끗이.^^ ♥",
    "{vocative}, 우리들도 사계절이란다. 지금 이 시간을 묵묵히 공부하고 기도하며 충실히 머문다면, 저 꽃들처럼 활짝 피어날 날이 꼭 올 거야~~~♡♡♡",
    "{vocative}, 꾸준히 공부하면 분명 네가 만족할 좋은 결과를 얻을 거야. 스스로를 더 사랑하고 다독여주렴. 이번 주도 화이팅!",
    "세상에, {vocative}! 지금 반에 공부하는 학생이 몇 명 없구나. 다들 어디 간 거니?",
    "{vocative}, 많이 바쁜 거 수녀님도 다 안단다. 그래도 지금 이 시간을 충실히 살면, 내년에는 분명 더 많이 웃게 될 거야. 수녀님은 확신해.",
    "성경 말씀에도 있단다. '지금 우는 사람은 행복하다. 하늘나라가 그들의 것이다.' {vocative}, 지금의 노력이 나중에 큰 기쁨이 될 거야.",
    "{vocative}, 9시까지는 꼭 등교해야지? 집에서도 스스로 관리 잘 하고 의미 있는 하루를 스스로 만들어가렴.",
    "아이고 {vocative}, 수녀님이 정말 미안한 일이 있구나... 너무 바빠서 영화 결재 발송을 깜빡했지 뭐니. 미안하다, 다음에 꼭 좋은 시간 갖자.",
    "{vocative}, 오늘도 화이팅! 아침 청소부터 깨끗이 하고, 맑은 환경에서 상쾌하게 오늘을 시작해보자꾸나.",
    "네가 어디서 무엇을 하든, {vocative}. 지금 이 모든 순간이 너를 만들어가는 소중한 시간임을 꼭 기억하렴. 인고의 시간은 배신하지 않아.",
    "하늘은 스스로 돕는 자를 돕는단다. {name}의 노고를 하늘은 절대로 놓치지 않으실 거야. 수녀님도 응원해!",
    "{vocative}, 지금 힘들다고 포기하면 안 돼. 이 시간만 잘 견디면 졸업 후에 웃으며 오늘을 돌아볼 수 있을 거야.",
    "{vocative}, 책상 정리는 좀 했니? 깨끗한 환경이 깨끗한 마음을 만든단다. 오늘도 힘내자!",
    "모두 모두 수고하셨습니다. 안전한 귀가길 되시기를...",
    "일본에서 만난 인연들, 추억들, 배움들이 앞으로 삶에 도움이 되기를 소망합니다.",
    "선배님들이 해준 조언들 잘 적용해서 좋은 열매 맺기를~~~ 담임 선생님들과 상담하며 내용도 공유하시고 더 발전하기를~~~",
    "오늘 하루 화이팅입니다. 오늘 수녀님도 병원 치료, 수녀원 행사로 함께 하지 못하지만 수녀님도 여러분 생각하며 힘 냅니다.",
    snackMessage,
    "바오로반을 위한 국영수 특별 수업이 필요한가요? 개인적으로 이 부분에 대해 수녀님에게 자신의 생각을 알려주십시요.",
    "수능 전까지 실전처럼 하루를 시험보겠다는 학생들이 있어서, 매주 토요일 4층 물리실은 시험 희망 학생들이 시간에 맞추어 시험을 보는 공간으로 사용합니다. 자습하는 학생들은 바오로교실을 사용하겠습니다."
];

const nameInput = document.getElementById('nameInput');
const quoteBtn = document.getElementById('quoteBtn');
const quoteText = document.getElementById('quoteText');
const bubbleText = document.getElementById('bubbleText');
const sleepyStudent = document.querySelector('.student-sleepy');

let messageQueue = [];
let sleepyTimeoutId;

function makeVocative(rawName) {
    const name = rawName.trim();
    if (!name) {
        return 'ㅇㅇ아';
    }

    const lastChar = name[name.length - 1];
    const code = lastChar.charCodeAt(0);
    const HANGUL_START = 0xac00;
    const HANGUL_END = 0xd7a3;

    if (code < HANGUL_START || code > HANGUL_END) {
        return `${name}아`;
    }

    const hasBatchim = (code - HANGUL_START) % 28 !== 0;
    return hasBatchim ? `${name}아` : `${name}야`;
}

function refillQueue() {
    messageQueue = [...messages, snackMessage];
    for (let i = messageQueue.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [messageQueue[i], messageQueue[j]] = [messageQueue[j], messageQueue[i]];
    }
}

function pickMessage() {
    const name = nameInput.value.trim() || 'ㅇㅇ';
    const vocative = makeVocative(nameInput.value);

    if (messageQueue.length === 0) {
        refillQueue();
    }

    return messageQueue.pop()
        .replace(/{name}/g, name)
        .replace(/{vocative}/g, vocative);
}

function updateText(element, text) {
    element.style.opacity = 0;

    setTimeout(() => {
        element.textContent = text;
        element.style.opacity = 1;
    }, 180);
}

function wakeSleepyStudent() {
    if (!sleepyStudent) {
        return;
    }

    sleepyStudent.classList.add('awake');
    clearTimeout(sleepyTimeoutId);
    sleepyTimeoutId = setTimeout(() => {
        sleepyStudent.classList.remove('awake');
    }, 2000);
}

function getRandomQuote() {
    const selectedMessage = pickMessage();
    updateText(quoteText, selectedMessage);
    updateText(bubbleText, selectedMessage);
    wakeSleepyStudent();
}

quoteBtn.addEventListener('click', getRandomQuote);

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRandomQuote();
    }
});
