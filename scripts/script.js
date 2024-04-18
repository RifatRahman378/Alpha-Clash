function playNow() {
    hide('home');
    show('play-ground');
    gameLoop();
}
function keyboardCapture() {
console.log('keyboardCaptured');
}
document.addEventListener('keyup', keyboardCapture);
function hide(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function show(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function backgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}
function gameLoop() {
    const alphabet = randomAlphabet();
    const element = document.getElementById('current-alphabet');
    element.innerText = alphabet;
    backgroundColor(alphabet)
}
function randomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);
    const alphabet = alphabets[number];
    return alphabet;
}
