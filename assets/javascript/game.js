$(document).ready(function() {
var goalNumbGen;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var totalNumber = 0;
var gameGoing = false;
var win = 0;
var losses = 0;

function goalNumberGenerator(){
	goalNumbGen = Math.floor(Math.random()*(120 - 19 + 1) + 19);
	$("#goalNumber").text(goalNumbGen)
}

goalNumberGenerator();

function crystalAssigner(){
	crystalOne = Math.floor(Math.random()*(12-1+1)+1);
	crystalTwo = Math.floor(Math.random()*(12-1+1)+1);
	crystalThree = Math.floor(Math.random()*(12-1+1)+1);
	crystalFour = Math.floor(Math.random()*(12-1+1)+1);
	$("#crystal-1").attr("data-crystal", crystalOne)
	$("#crystal-2").attr("data-crystal", crystalTwo)
	$("#crystal-3").attr("data-crystal", crystalThree)
	$("#crystal-4").attr("data-crystal", crystalFour)

}

crystalAssigner();


function reset(){
totalNumber = 0;
goalNumberGenerator(); 
crystalAssigner();
$("#totalNumber").text(totalNumber);
}

$(".crystals").on('click',function(){
totalNumber += parseInt($(this).attr("data-crystal"));
console.log(totalNumber);
$("#totalNumber").text(totalNumber)
	if(totalNumber < goalNumbGen){
		gameGoing = true;
	}else if(totalNumber===goalNumbGen){
		win++;
		reset();
	}else{
		losses--;
		reset();
	}
$("#wins").text(win);
$("#losses").text(losses);
});

});
