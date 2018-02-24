/////////////////////////// Toss App////////////////////////////////////////

var userInput = prompt("Enter Your Choice", "Head or Tails");
var toss = Math.random();

toss = Number(toss * 2); 
toss = Math.ceil(toss)
console.log(toss);
var tossResult;


if (toss == 1) {
    tossResult = 'Head';
} else {
    tossResult = 'Tails';
}
console.log(tossResult);
if (tossResult == userInput) {
    alert('you won the toss');
} else {
    alert('you loss the toss');
}
