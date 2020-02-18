/*General*/
let score, roundScores, activePlayer;

score = [0, 0];
roundScores = 0;
activePlayer = 1;

document.querySelector('#dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

/*Rolls*/
document.querySelector('#btn-roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1;

    //Display the result
    let diceDOM = document.querySelector('#dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


});