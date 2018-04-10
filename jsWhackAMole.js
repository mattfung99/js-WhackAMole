// ***** ------------------------ **** ------------------------ ***** //
                    // ***** GLOBAL VARIABLES ***** //
// ***** ------------------------ **** ------------------------ ***** //

var count = 20;
var max = 750;
var min = 1;
var numberOfSquares = 11;
var positionChange = 6;
var randomCoordinateX;
var randomCoordinateY;
var squareDivArray = [];
var startTimer;

// ***** ------------------------ **** ------------------------ ***** //
                    // *********** CODE *********** //
// ***** ------------------------ **** ------------------------ ***** //

function beginProgram() {
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
        squareDiv.style = "background: rgb(14, 71, 163); border: 1px solid white; cursor: pointer; height: 50px; position: absolute; width: 50px";
        squareDiv.style.left = randomCoordinateX + "px";
        squareDiv.style.top = randomCoordinateY + "px";
        squareDiv.addEventListener("click", function () {
            deleteDivProcess(squareDiv.id);
        });

        document.getElementById("container").appendChild(squareDiv);
        squareDivArray.push(squareDiv);
    }
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ** Coordinates GeneratorX ** //
// ***** ------------------------ **** ------------------------ ***** //

function generateRandomX(min, max) {
    randomCoordinateX = Math.floor(Math.random() * (max - min + 1)) + min;
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ** Coordinates GeneratorY ** //
// ***** ------------------------ **** ------------------------ ***** //

function generateRandomY(min, max) {
    randomCoordinateY = Math.floor(Math.random() * (max - min + 1)) + min;
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ****** Clear all divs ****** //
// ***** ------------------------ **** ------------------------ ***** //

function clearAll() {
    for (var k = 0; k < squareDivArray.length; k++) {
        container.removeChild(document.getElementById("squareDiv" + k));
    }
    squareDivArray = [];
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ******* Delete a div ******* //
// ***** ------------------------ **** ------------------------ ***** //

function deleteDivProcess(id) {
    squareDivArray.splice(id.charAt(9), 1);
    container.removeChild(document.getElementById(id));
    for (var j = parseInt(id.charAt(9))+1; j < squareDivArray.length+1; j++) {
        var reassignId = document.getElementById("squareDiv" + j);
        reassignId.id = "squareDiv" + (j-1);
    }
    numberOfSquares = squareDivArray.length;
    console.log(squareDivArray.length);
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ****** Reset Program ******* //
// ***** ------------------------ **** ------------------------ ***** //

function reset() {
    clearAll();
    generateDiv();
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ***** DRAW CANVAS TEXT ***** //
// ***** ------------------------ **** ------------------------ ***** //

// var easterEgg = document.getElementById("button-container");
// var resetButton = document.getElementById("button-reset");
// var ctxEasterEgg = easterEgg.getContext("2d");
// var ctxResetButton = resetButton.getContext("2d");

// ctxEasterEgg.font = "20px Comic Sans MS";
// ctxEasterEgg.fillStyle = "rgb(14, 71, 163)";
// ctxEasterEgg.textAlign = "center";
// ctxEasterEgg.fillText("???", easterEgg.width / 2, easterEgg.height / 2);

// ctxResetButton.font = "20px Comic Sans MS";
// ctxResetButton.fillStyle = "rgb(14, 71, 163)";
// ctxResetButton.textAlign = "center";
// ctxResetButton.fillText("RESET", resetButton.width / 2, resetButton.height / 2);