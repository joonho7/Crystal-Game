window.onload = function(){
$("#crystal-1").click(crystalGenerator('x'));
$("#crystal-2").click(crystalGenerator('y'));
$("#crystal-3").click(crystalGenerator('z'));
$("#crystal-4").click(crystalGenerator('w'));
$("#goalNumber").html(goalNumberGen);
gameGoing=true;
};

var crystalOne = 'x';
var crystalTwo = 'y';
var crystalThree = 'z';
var crystalFour = 'w';
var goalNumberGen = goalNumberGenerator();
var totalNumber;
var gameGoing = false;
var win;
var losses;
function crystalGenerator(x){
  return x = Math.floor(Math.random()*12+1);
}

function goalNumberGenerator(){
	return Math.floor(Math.random()*120+19)
}

function initializeGame(){
if(gameGoing){
$("#crystal-1").click(crystalGenerator('x'));
$("#crystal-2").click(crystalGenerator('y'));
$("#crystal-3").click(crystalGenerator('z'));
$("#crystal-4").click(crystalGenerator('w'));
$("#goalNumber").html(goalNumberGen);
gameGoing = true;
 }
 addtition();
}

function addition(){
	if(!gameGoing){
	$("#crystal-1").click('x');
	$("#crystal-1").click('y');
	$("#crystal-1").click('z');
	$("#crystal-1").click('w');
	totalNumber = 'x' + 'y' + 'z' + 'w';
	$("#totalNumber").html(totalNumber);
 }
}

function winLoss(){
	if(totalNumber<goalNumberGen){
		gameGoing = true;
	}else if(totalNumber===goalNumberGen){
		win++;
		gameGoing = false;
		initializeGame();
	}else{
		losses--;
		gameGoing = false;
		initializeGame();
	}
	$("#wins").text(win);
	$("#losses").text(losses);
}



