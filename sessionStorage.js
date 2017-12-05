var red = document.getElementById('red');
var orange = document.getElementById('orange');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');
var yellow = document.getElementById('yellow');
var body = document.getElementById('body');
var sessionS = document.getElementById('sessionS');
var localS = document.getElementById('localS');

var buttonArray = Array.from(document.getElementsByClassName('button'));
console.log(buttonArray);

buttonArray.forEach(function(button){
  button.addEventListener("click", function(e){
    if(sessionStorage.getItem("favourite colour")){
      sessionStorage.removeItem("favourite colour");
      sessionStorage.setItem("favourite colour", e.target.textContent);
    }
    else sessionStorage.setItem("favourite colour", e.target.textContent);
  })
})

body.style.backgroundColor = sessionStorage.getItem("favourite colour");
