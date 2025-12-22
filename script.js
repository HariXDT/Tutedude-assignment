var blue = document.getElementById('blue');
var red = document.getElementById('red');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow'); 
var text = document.getElementById('edit');
var button = document.getElementById('button');
var input = document.getElementById('input');

blue.addEventListener( "click", function () {
    blue.style.backgroundColor = "blue";
})      

red.addEventListener( "click", function () {
    red.style.backgroundColor = "red";
})

green.addEventListener("click", function () {
    green.style.backgroundColor = "green";
})


yellow.addEventListener("click", function () {
    yellow.style.backgroundColor = "yellow";
})




button.addEventListener("click", function() {
    var userInput = input.value;
    text.innerHTML = "Hello " + userInput + "!";
})