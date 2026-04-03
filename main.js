const messages = [
    "{name}야, 오늘 좀 지각자가 많네요. 마음을 깨끗이.^^ ♥",
    "{name}야, 우리들도 사계절이란다. 지금 이 시간을 묵묵히 머물면 꽃처럼 피어날 날이 꼭 올 거야.^^",
    "{name}야, 꾸준히 공부하면 분명 네가 만족할 좋은 결과를 얻을 거야. 스스로를 더 사랑하고 다독여주렴. ♥",
    "세상에, {name}야. 오늘 반이 조금 휑하네요. 마음부터 깨끗이 하고 다시 시작하자.^^",
    "{name}야, 많이 바쁜 거 수녀님도 다 안단다. 그래도 지금 이 시간을 충실히 살면 내년에는 더 많이 웃게 될 거야.^^",
    "{name}야, 9시까지는 꼭 등교해야지? 오늘은 발걸음도 마음도 단정하게.^^",
    "아이고 {name}야, 책상 위가 조금 복작복작하구나. 책상도 깨끗이, 마음도 깨끗이.^^ ♥",
    "{name}야, 오늘도 화이팅. 아침 청소부터 깨끗이 하고 맑은 환경에서 상쾌하게 시작해보자꾸나.^^",
    "네가 어디서 무엇을 하든, {name}야. 지금 이 모든 순간이 너를 만들어가는 소중한 시간이란다. ♥",
    "하늘은 스스로 돕는 자를 돕는단다. {name}의 노고를 하늘은 절대로 놓치지 않으실 거야.^^",
    "{name}야, 지금 힘들다고 포기하면 안 돼. 이 시간만 잘 견디면 웃으며 돌아볼 날이 올 거야.^^",
    "{name}야, 책상 정리는 좀 했니? 깨끗한 환경이 깨끗한 마음을 만든단다. 오늘도 반짝반짝하게. ♥"
];

const nameInput = document.getElementById('nameInput');
const quoteBtn = document.getElementById('quoteBtn');
const quoteText = document.getElementById('quoteText');
const bubbleText = document.getElementById('bubbleText');

function pickMessage() {
    const name = nameInput.value.trim() || '학생';
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex].replace(/{name}/g, name);
}

function updateText(element, text) {
    element.style.opacity = 0;

    setTimeout(() => {
        element.textContent = text;
        element.style.opacity = 1;
    }, 180);
}

function getRandomQuote() {
    const selectedMessage = pickMessage();
    updateText(quoteText, selectedMessage);
    updateText(bubbleText, selectedMessage);
}

quoteBtn.addEventListener('click', getRandomQuote);

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRandomQuote();
    }
});
