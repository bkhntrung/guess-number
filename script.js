'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;
const displayMessage=function(message){
document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.guess').value);
if(!guess){
displayMessage('Not a number!');
}

//Khi doan dung
else if(guess===secretNumber){
document.querySelector('.highscore').textContent=score>highScore?score:highScore;
displayMessage('You win the game');
document.querySelector('body').style.backgroundColor='#60b347';
document.querySelector('.number').style.width='30rem';
}

else if(guess!==secretNumber){
if(score>1){
score--;
document.querySelector('.score').textContent=score;
displayMessage(guess>secretNumber?'Too high!':'Too low!');
}
else{
displayMessage('You lost the game!');
document.querySelector('.score').textContent=0;
}
}
});

//Thiet lap nut Again
document.querySelector('.again').addEventListener('click',function(){
//Thiet lap lai cac bien
secretNumber=Math.trunc(Math.random()*20)+1;
score=20;

//Thiet lap lai hien thi tren HTML
displayMessage('Start guessing...');
document.querySelector('.score').textContent=score;
document.querySelector('.guess').value='';
document.querySelector('.number').textContent='?';

//Thiet lap lai style
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
})
