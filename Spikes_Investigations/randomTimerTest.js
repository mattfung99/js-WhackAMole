var line01;
line01 = document.getElementById("line01");

function hidden() {
    line01.style = "visibility: hidden";
    setTimeout(visible, 3000);
}

function visible() {
    line01.style = "visibility: visible";
    setTimeout(hidden, 3000);
}