/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        // Split Phrase Into Letters & Words
        const splitPhrase = this.phrase.split('');

        // Display Phrase On Board
        let html = '';

        splitPhrase.forEach(character => {
            if (character === ' ') {
                html += `
            <li class="space"> </li>
          `;
            }
            else {
                html += `
            <li class="hide letter ${character}">${character}</li>
          `;
            }
        })

        phraseOnBoard.innerHTML = html;

    }

    checkLetter(userButton) {
        return this.phrase.includes(userButton.textContent) ? true : false;
    }

    showMatchedLetter(userLetter) {
        const lettersOnBoard = phraseOnBoard.querySelectorAll('.hide');

        lettersOnBoard.forEach(letter => {
            if (letter.textContent === userLetter) {
                letter.classList.replace('hide', 'show');
                letter.classList.add('magnify');
            }
        })

    }
}