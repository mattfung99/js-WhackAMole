// ***** ------------------------ **** ------------------------ ***** //
                    // ***** GLOBAL VARIABLES ***** //
// ***** ------------------------ **** ------------------------ ***** //

var count = 20;
var formPopup = document.getElementById("form-popup");
var max = 750;
var min = 1;
var numberOfSquares = 11;
var positionChange = 6;
var randomCoordinateX;
var randomCoordinateY;
var soundDelete;
var squareDivArray = [];
var startTimer;

// ***** ------------------------ **** ------------------------ ***** //
                    // *********** CODE *********** //
// ***** ------------------------ **** ------------------------ ***** //

formPopup.style.display = 'none';

function beginProgram() {
    document.getElementById("display-timer").innerHTML = "20";
    generateDiv();
    document.getElementById("button-begin").disabled = true;
    document.getElementById("button-begin").innerHTML = "Disabled";

    startTimer = setInterval(function () {
        document.getElementById("display-timer").innerHTML = --count;
        positionChange = positionChange - 1;
        console.log(positionChange);

        if (positionChange == 1) {
            positionChange = 6;
            clearAll();
            generateDiv();
        }

        if (squareDivArray.length == 0) {
            document.getElementById("message").innerHTML = "You Won!"
            reset();
        }

        if (count == 0) {
            document.getElementById("message").innerHTML = "Nice Try!"
            reset();
        }
    }, 1000);

    function reset() {
        document.getElementById("display-timer").innerHTML = "Timer";
        clearInterval(startTimer);
        count = 20;
        clearAll();
        numberOfSquares = 11;
        formPopup.style.display = 'block';

        window.onclick = function(event) {
            if (event.target == formPopup) {
                formPopup.style.display = 'none';
            }
        }

        document.getElementById("button-begin").innerHTML = "Press to start again";
        document.getElementById("button-begin").disabled = false;
    }

    function generateDiv() {
        for (var i = 0; i <= numberOfSquares; i++) {
            generateSquare();
        }
    }

    function generateSquare() {
        var squareDiv;
        generateRandomX(min, max);
        generateRandomY(min, max);

        squareDiv = document.createElement("img");
        squareDiv.src = "animatedMole.png";
        squareDiv.id = "squareDiv" + squareDivArray.length;
        squareDiv.style = "cursor: pointer; height: 50px; position: absolute";
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
    soundDelete = new sound("cough.wav");
    soundDelete.play();
    for (var j = parseInt(id.charAt(9))+1; j < squareDivArray.length+1; j++) {
        var reassignId = document.getElementById("squareDiv" + j);
        reassignId.id = "squareDiv" + (j-1);
        console.log(reassignId.id);
    }
    numberOfSquares = squareDivArray.length;
    console.log(squareDivArray.length);
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ***** DRAW CANVAS TEXT ***** //
// ***** ------------------------ **** ------------------------ ***** //

// var mainMenu = document.getElementById("main-menu");
// var ctxMainMenu = mainMenu.getContext("2d");

// ctxMainMenu.font = "20px Arial";
// ctxMainMenu.fillStyle = "rgb(14, 71, 163)";
// ctxMainMenu.textAlign = "center";
// ctxMainMenu.fillText("Main Menu", mainMenu.width / 2, mainMenu.height / 2);

// ***** ------------------------ **** ------------------------ ***** //
                    // ******** Play Sound ******** //  
// ***** ------------------------ **** ------------------------ ***** //

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
}