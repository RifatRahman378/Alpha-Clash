
function playNow() {
    hide('home');
    show('play-ground');
    gameLoop();
}
function keyboardCapture(event) {
    const pressed = event.key.toLowerCase(); // Convert pressed key to lowercase for consistency
    const currentAlphabetId = document.getElementById('current-alphabet').innerText.toLowerCase(); // Convert current alphabet to lowercase for consistency
    console.log('Current Alphabet:', currentAlphabetId);
    console.log('Button pressed:', pressed);

    // const currentAlphabetElement = document.getElementById(currentAlphabetId);

    if (currentAlphabetId === pressed) {
        // If correct key is pressed
        gameLoop();
        scoreUpdate();
        removeBackgroudColor(currentAlphabetId)
    } else {
        // If wrong key is pressed
        // removeBackgroudColor(currentAlphabetId); // Add red background color to the current alphabet
        const element = document.getElementById(currentAlphabetId)
        element.classList.add('bg-red-500');
    }
}


function scoreUpdate() {
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
function removeBackgroudColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400');
    element.classList.remove('bg-red-500');
}
function randomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);
    const alphabet = alphabets[number];
    return alphabet;
}