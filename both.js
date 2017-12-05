var localS = document.getElementById('localS');
var sessionS = document.getElementById('sessionS');


localS.appendChild(document.createTextNode(JSON.stringify(localStorage)));
sessionS.appendChild(document.createTextNode(JSON.stringify(sessionStorage)));
