/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// DOM Elements
const startGame = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelectorAll('#qwerty button');
const phraseOnBoard = document.querySelector('#phrase ul');
let game;

/* ---------------------------------------------------------------------------------------------------- */
// Events
/* ---------------------------------------------------------------------------------------------------- */

// Start Game
startGame.addEventListener('click', () => {
    // Instantiate Game Class
    game = new Game();
    game.startGame();

});

// Keys (Click);
qwerty.forEach(button => {
    button.addEventListener('click', (e) => {
        const userGuess = e.target;

        game.handleInteraction(userGuess);
    })
})

// Keys (Keyup)
document.addEventListener('keyup', (e) => {
    const userGuess = e.key;

    qwerty.forEach(button => {
        if (userGuess === button.textContent && !button.disabled) {

            game.handleInteraction(button);
        }
    })
})
