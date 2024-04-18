function playNow() {
    hide('home');
    show('play-ground');
    gameLoop();
}
function keyboardCapture(event) {
    const pressed = event.key;
    const alphabet = document.getElementById('current-alphabet').innerText;
    const currentAlphabet = alphabet.toLowerCase(); 
    console.log('Current Alphabet:', currentAlphabet);
    console.log('Button pressed:', pressed);
    if (currentAlphabet === pressed) {
        console.log('right button pressed');
        removeBackgroudColor(currentAlphabet);
        gameLoop();
        scoreUpdate()
    }
    else{
        console.log('wrong button pressed');
    }
    
}
function scoreUpdate(){
    const element = document.getElementById('current-score').innerText;
    
    console.log(parseInt(element));
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

function gameLoop() {
    const alphabet = randomAlphabet();
    const element = document.getElementById('current-alphabet');
    element.innerText = alphabet;
    backgroundColor(alphabet);
    
}
function backgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}
function removeBackgroudColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400');
}
function randomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);
    const alphabet = alphabets[number];
    return alphabet;
}
