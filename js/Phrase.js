/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';

        for(let i of this.phrase) {
            const li = document.createElement('li');

            if(i === ' ') {
                li.className = 'space';
            } else {
                li.className = `hide letter ${i}`;
                li.textContent = i;
            }

            phraseUl.appendChild(li);
        }
    }

    //check if letter is in the phrase
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    //show matching letters on the board
    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll(`.letter.${letter}`);
        matchedLetters.forEach(element => {
            element.classList.remove('hide');
            element.classList.add('show');
        });
    }
}