
/* ===========================
   Riazi1Game Engine v1.0
=========================== */

let score = 0;
let level = 1;

const game = {

correctSound:null,
wrongSound:null,

init(){

this.loadScore();

this.correctSound=new Audio();
this.wrongSound=new Audio();

this.updateScore();

},

loadScore(){

const s=localStorage.getItem("score");

if(s){

score=parseInt(s);

}

},

saveScore(){

localStorage.setItem("score",score);

},

updateScore(){

const box=document.getElementById("score");

if(box){

box.innerHTML="⭐ "+score;

}

},

correct(){

score+=10;

this.saveScore();

this.updateScore();

this.playCorrect();

setTimeout(()=>{

this.nextLevel();

},1200);

},

wrong(){

this.playWrong();

alert("😊 دوباره امتحان کن");

},

nextLevel(){

level++;

},

playCorrect(){

try{

const ctx=new(window.AudioContext||window.webkitAudioContext)();

const osc=ctx.createOscillator();

const gain=ctx.createGain();

osc.connect(gain);

gain.connect(ctx.destination);

osc.frequency.value=600;

gain.gain.value=.2;

osc.start();

osc.stop(ctx.currentTime+.3);

}catch(e){}

},

playWrong(){

try{

const ctx=new(window.AudioContext||window.webkitAudioContext)();

const osc=ctx.createOscillator();

const gain=ctx.createGain();

osc.connect(gain);

gain.connect(ctx.destination);

osc.frequency.value=200;

gain.gain.value=.2;

osc.start();

osc.stop(ctx.currentTime+.4);

}catch(e){}

}

};

window.onload=()=>{

game.init();

}
