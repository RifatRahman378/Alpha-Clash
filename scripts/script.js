// Function to start the game
function playNow() {
    hide('home'); // Hide the home screen
    show('play-ground'); // Show the play ground
    gameLoop(); // Start the game loop
}

// Function to hide an HTML element by adding a 'hidden' class
function hide(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// Function to show an HTML element by removing the 'hidden' class
function show(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// Event listener for keyup events to capture keyboard input
document.addEventListener('keyup', keyboardCapture);

// Function to capture keyboard input
function keyboardCapture(event) {
    const pressed = event.key.toLowerCase(); // Convert pressed key to lowercase for consistency
    const currentAlphabetId = document.getElementById('current-alphabet').innerText.toLowerCase(); // Convert current alphabet to lowercase for consistency

    if (currentAlphabetId === pressed) {
        // If correct key is pressed
        gameLoop(); // Start the game loop again
        scoreUpdate(); // Update the score
        removeBackgroudColor(currentAlphabetId); // Remove background color
    } else {
        // If wrong key is pressed
        const element = document.getElementById(currentAlphabetId);
        element.classList.add('bg-red-500'); // Add red background color to the current alphabet
        lifeUpdate()
    }
}

// Function to add orange background color to an element
function backgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// Function to remove background color from an element
function removeBackgroudColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
    element.classList.remove('bg-red-500');
}

// Function to update the score
function scoreUpdate() {
    const element = document.getElementById('current-score');
    const text = element.innerText;
    const currentScore = parseInt(text);
    const newScore = currentScore + 1;
    element.innerText = newScore;
}
function lifeUpdate(){
    const element = document.getElementById('lifespan');
    const text = element.innerText;
    const currentScore = parseInt(text);
    const newScore = currentScore - 1;
    element.innerText = newScore;
}
// Function for the main game loop
function gameLoop() {
    const alphabet = randomAlphabet(); // Generate a random alphabet
    const element = document.getElementById('current-alphabet');
    element.innerText = alphabet; // Set the current alphabet in the HTML
    backgroundColor(alphabet); // Add background color to the current alphabet
}

// Function to generate a random alphabet
function randomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);
    const alphabet = alphabets[number];
    return alphabet;
}
