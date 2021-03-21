/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('love'),
            new Phrase('joy'),
            new Phrase('hate'),
            new Phrase('fear'),
            new Phrase('happiness')
        ];
        this.activePhrase = null;
    }

    startGame() {
        // Hide Overlay
        overlay.style.display = 'none';

        // Get Random Phrase & Set As Active Phrase
        this.activePhrase = this.getRandomPhrase();

        // Call 'addPhraseToDisplay()'
        this.activePhrase.addPhraseToDisplay();

    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction(userButton) {
        // Disable Selected Button
        userButton.disabled = true;

        // Check Letter Status
        const letterStatus = this.activePhrase.checkLetter(userButton);

        // Actions Based On Letter Status
        if (!letterStatus) {
            userButton.classList.add('wrong');
            this.removeLife();
        }
        else {
            userButton.classList.add('chosen');
            this.activePhrase.showMatchedLetter(userButton.textContent);
            const hasWon = this.checkForWin();

            // If User Has Won, Call Game Over
            if (hasWon) this.gameOver('You win!', 'win');
        }
    }

    removeLife() {
        // Increment Missed Guesses
        this.missed++;

        if (this.missed < 5) {
            const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
            liveHeart.setAttribute('src', 'images/lostHeart.png');
        }
        else {
            this.gameOver('Sorry, try again next time!', 'lose');
        }

    }

    checkForWin() {
        const hiddenLetters = phraseOnBoard.querySelectorAll('.hide');

        return hiddenLetters.length === 0 ? true : false;
    }

    gameOver(message, status) {
        // Display Overlay
        overlay.style.display = 'flex';
        overlay.className = status;

        // Set Text For Message
        overlay.querySelector('#game-over-message').textContent = message;

        // Set Text For 'Play Again' Button
        overlay.querySelector('#btn__reset').textContent = 'Play Again';

        // Reset Game
        // Remove Shown Letters On Board
        phraseOnBoard.innerHTML = '';

        // Enable All Keyboard Buttons & Reset Their Class
        qwerty.forEach(button => {
            button.disabled = false;
            button.className = 'key';
        });

        const hearts = document.querySelectorAll('#scoreboard img');
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].setAttribute('src', 'images/liveHeart.png');
        }

    }
}
