/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const btnStart = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
let game;

//click event to start game
btnStart.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

//event for click onscreen keyboard
qwerty.addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target);

        console.log(e.target);
    }
});