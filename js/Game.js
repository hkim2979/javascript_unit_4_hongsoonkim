/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('life is like a box of chocolates'),
            new Phrase('there is no trying'),
            new Phrase('may the force be with you'),
            new Phrase('you have to see the matrix for yourself'),
            new Phrase('you talking to me')
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    //Starting Game
    startGame() {

        //reset game to start new game
        this.resetGameboard();

        //hide overlay
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        //get random quotes and add it to the display
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //check if all letters revealed
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide.letter');
        return hiddenLetters.length === 0;
    }

    //removes hearts and check if game is over
    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    //finish game and display win or lose
    gameOver(win) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = '';

        const message = document.getElementById('game-over-message');
        if (win) {
            message.textContent = 'Great Job!';
            overlay.className = 'win';
        } else {
            message.textContent = 'Sorry, better luck next time!';
            overlay.className = 'lose';
        }
    }

    //handles user interaction with keyboard
    handleInteraction(button) {
        button.disabled = true;

        //check if the phrase includes the guessed letter
        const letter = button.textContent;
        if (this.activePhrase.checkLetter(letter)) {

            //add 'chosen' CSS class for correct
            button.classList.add('chosen');

            //show matching letters
            this.activePhrase.showMatchedLetter(letter);

            //check if win
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {

            //add 'wrong' CSS class for incorrect
            button.classList.add('wrong');

            //remove life
            this.removeLife();
        }
    }

    //reset gameboard between games
    resetGameboard() {

        //remove all 'li' from Phrase 'ul' element
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';

        //enable keyboard buttons and reset classes
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.disabled = false;
            key.className = 'key';
        });

        //reset hearts
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        });

        //reset missed
        this.missed = 0;
    }
}