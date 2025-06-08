let counter = 0;
function incrementCounter(){
    counter++;
}
function decrementCounter(){
    
    if (counter > 0) counter--;
}
let counterDisplay = document.getElementsByClassName("counter")[0];
function updateCounterDisplay(){
    counterDisplay.innerText = counter;
}
function resetCounter(){
    counter = 0;
    
}

let incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", function() {
    incrementCounter();
    updateCounterDisplay();
});
let decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click", function() {
    decrementCounter();
    updateCounterDisplay();
});
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
    resetCounter();
    updateCounterDisplay();
});

updateCounterDisplay();