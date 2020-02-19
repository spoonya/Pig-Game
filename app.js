/*General*/
let score, roundScore, activePlayer, gamePlaying;
let diceDOM = document.querySelector('#dice');

newGame();

/*Rolls*/
document.querySelector('#btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;

        //Display the result
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //Update the roundScore
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

/*Save the result*/
document.querySelector('#btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //Add current score to a global score
        score[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        //Check if player won the game
        if (score[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            diceDOM.style.display = 'none';
            document.querySelector('#player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('#player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('player-0-panel').classList.toggle('active');
    document.getElementById('player-1-panel').classList.toggle('active');

    diceDOM.style.display = 'none';
}

/*New game*/
document.querySelector('#btn-new').addEventListener('click', newGame);

function newGame() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('#dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('#player-0-panel').classList.remove('winner');
    document.querySelector('#player-1-panel').classList.remove('winner');
    document.querySelector('#player-0-panel').classList.remove('active');
    document.querySelector('#player-1-panel').classList.remove('active');
    document.querySelector('#player-0-panel').classList.add('active');
}