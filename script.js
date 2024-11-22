let score = 0;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = score;
});
