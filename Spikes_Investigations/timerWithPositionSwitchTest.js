var count = 20;
var max = 750;
var min = 1;
var numberOfSquares = 11;
var positionChange = 6;
var randomCoordinateX;
var randomCoordinateY;
var squareDivArray = [];
var startTimer;

function beginAgain() {
    var squareDiv;
    generateDiv();
    document.getElementById("button").disabled = true;
    document.getElementById("button").innerHTML = "Disabled";

    startTimer = setInterval(function () {
        document.getElementById("line01").innerHTML = --count;
        positionChange = positionChange - 1;
        console.log(positionChange);

        if (positionChange == 1) {
            positionChange = 6;
            clearAll();
            generateDiv();
        }

        if (count == 0) {
            clearInterval(startTimer);
            //alert("Timer has ended")
            count = 20;
            clearAll();
            document.getElementById("button").innerHTML = "Press to start again";
            document.getElementById("button").disabled = false;
        }
    }, 1000);

    function generateDiv() {
        for (var i = 0; i <= numberOfSquares; i++) {
            generateSquare();
        }
    }

    function generateSquare() {
        var squareDiv;
        generateRandomX(min, max);
        generateRandomY(min, max);

        squareDiv = document.createElement("div");
        squareDiv.id = "squareDiv" + squareDivArray.length;
        squareDiv.style = "background: rgb(14, 71, 163); border: 1px solid white; height: 50px; position: absolute; width: 50px";
        squareDiv.style.left = randomCoordinateX + "px";
        squareDiv.style.top = randomCoordinateY + "px";

        document.getElementById("container").appendChild(squareDiv);
        squareDivArray.push(squareDiv);
    }
}

function clearAll() {
    for (var k = 0; k < squareDivArray.length; k++) {
        container.removeChild(document.getElementById("squareDiv" + k));
    }
    squareDivArray = [];
}

function generateRandomX(min, max) {
    randomCoordinateX = Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomY(min, max) {
    randomCoordinateY = Math.floor(Math.random() * (max - min + 1)) + min;
}