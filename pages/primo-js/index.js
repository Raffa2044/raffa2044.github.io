var input = document.getElementById("sium");
var testo = document.getElementById("testo");
var bulb = document.getElementById("bulb");
var cc = document.getElementById("colorecustom");

function premuto() {
    testo.innerHTML = "Testo: " + input.value;
}

function lightOn() {
    bulb.setAttribute("src", "./assets/on.png")
}

function lightOff() {
    bulb.setAttribute("src", "./assets/off.png")
}

function ccOff() {
    cc.setAttribute("style", "display: none;");
}

function ccOn() {
    cc.setAttribute("style", "");
}