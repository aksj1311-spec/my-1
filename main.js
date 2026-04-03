const messages = [
    "{name}야 오늘 좀 지각자가 많네요. 마음을 깨끗이.^^",
    "{name}야 오늘은 책상도 마음도 좀 깨끗이.^^ ♥",
    "얘들아 오늘 교실 공기가 조금 분주하네요. 마음을 깨끗이.^^",
    "{name}야 오늘은 눈빛이 조금 바쁘네요. 마음을 깨끗이.^^",
    "얘들아 웃는 건 좋은데 이제 마음도 좀 차분히.^^ ♥",
    "{name}야 오늘은 조용히 앉아서 마음을 깨끗이.^^",
    "얘들아 오늘은 발걸음이 조금 늦었네요. 마음을 깨끗이.^^",
    "{name}야 오늘도 반짝반짝하게. 마음을 깨끗이.^^ ♥"
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
