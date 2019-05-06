var body = document.getElementById("body");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

function gradientt(){
    body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // css.textcontent = body.style.background + ";";
}

color1.addEventListener("input", gradientt);

color2.addEventListener("input", gradientt);