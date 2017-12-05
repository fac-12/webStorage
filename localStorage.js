var red = document.getElementById('red');
var orange = document.getElementById('orange');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');
var yellow = document.getElementById('yellow');
var body = document.getElementById('body');
var clearbutton = document.getElementById('clearbutton');
var localS = document.getElementById('localS');
var sessionS = document.getElementById('sessionS');

var buttonArray = Array.from(document.getElementsByClassName('button'));

buttonArray.forEach(function(button){
  button.addEventListener("click", function(e){
    if(localStorage.getItem("favourite colour")){
      localStorage.removeItem("favourite colour");
      localStorage.setItem("favourite colour", e.target.textContent);
    }
    else localStorage.setItem("favourite colour", e.target.textContent);
  })
})

clearbutton.addEventListener("click", function(){
  console.log("Local storage before clear: ", localStorage);
  localStorage.clear();
  console.log("Local storage after clear: ", localStorage);
})


body.style.backgroundColor = localStorage.getItem("favourite colour");
