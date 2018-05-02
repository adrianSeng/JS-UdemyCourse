/*
Coding Challenge 1


John and a friend invented a simple game where the player with the highest value of his 
height (in cm) plus five times his age wins

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string 
that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third plater and now decide who wins. Hint: you will need the && operator to make
the decision. Of you can't solve this one, just watch the solution, it's no problem :)
*/

var TomHeight = 176;
var TomAge = 5;
var TomOverall = TomHeight + (5*TomAge);

var TimHeight =  177;
var TimAge = 7;
var TimOverall = TimHeight + (5*TimAge);

var AbsHeight = 175;
var AbsAge = 25;
var AbsOverall = AbsHeight + (5*AbsAge);

if(TimOverall > TomOverall && TimOverall > AbsOverall){
	console.log("Tim Wins");
} else if(TomOverall > AbsOverall){
	console.log("Tom Wins");
}else{
	console.log("Abs Wins");
}