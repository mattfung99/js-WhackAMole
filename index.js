// ***** ------------------------ **** ------------------------ ***** //
                // ***** GLOBAL VARIABLES ***** //
// ***** ------------------------ **** ------------------------ ***** //

var instructions = document.getElementById("button-instructions");
var ctxInstructions = instructions.getContext("2d");
var play = document.getElementById("button-play");
var ctxPlay = play.getContext("2d");
var titleCanvas = document.getElementById("canvas-title");
var ctxCanvasTitle = titleCanvas.getContext("2d");

var commandMovementLeftMole = document.getElementById("animated-mole-left");
var commandMovementRightMole = document.getElementById("animated-mole-right");
var positionImage = 0;
var settingTimer;

var formPopup = document.getElementById("form-popup");
var openPopup = document.getElementById("button-instructions");

// ***** ------------------------ **** ------------------------ ***** //
                    // ******** ANIMATION ********** //
// ***** ------------------------ **** ------------------------ ***** //

function moveForward() {
    settingTimer = setInterval(frameForward, 10);
    function frameForward() {
        if (positionImage == 160) {
            moveBackward();
        }
        else {
            motionDown();
        }
    }
}

function moveBackward() {
    settingTimer = setInterval(frameBackward, 10);
    function frameBackward() {
        if (positionImage == 0) {
            moveForward();
        }
        else {
            motionUp();
        }
    }
}

function motionDown() {
    positionImage++;
    commandMovementLeftMole.style.top = positionImage + 'px';
    commandMovementLeftMole.style.left = positionImage + 'px';
    commandMovementRightMole.style.top = positionImage + 'px';
    commandMovementRightMole.style.left = positionImage + 'px';
}

function motionUp() {
    positionImage--;
    commandMovementLeftMole.style.bottom = positionImage + 'px';
    commandMovementLeftMole.style.right = positionImage + 'px';
    commandMovementRightMole.style.bottom = positionImage + 'px';
    commandMovementRightMole.style.right = positionImage + 'px';
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ***** DRAW CANVAS TEXT ***** //
// ***** ------------------------ **** ------------------------ ***** //

ctxInstructions.font = "20px Arial";
ctxInstructions.fillStyle = "rgb(14, 71, 163)";
ctxInstructions.textAlign = "center";
ctxInstructions.fillText("Instructions", instructions.width / 2, instructions.height / 2);

ctxPlay.font = "20px Arial";
ctxPlay.fillStyle = "rgb(14, 71, 163)";
ctxPlay.textAlign = "center";
ctxPlay.fillText("Play", play.width / 2, play.height / 2);

ctxCanvasTitle.font = "70px Arial";
ctxCanvasTitle.fillStyle = "rgb(14, 71, 163)";
ctxCanvasTitle.textAlign = "center";
ctxCanvasTitle.fillText("js Whack A Mole", titleCanvas.width / 2, titleCanvas.height / 2);

// ***** ------------------------ **** ------------------------ ***** //
                    // **** OPEN INSTRUCTIONS ***** //
// ***** ------------------------ **** ------------------------ ***** //

openPopup.onclick = function () {
    formPopup.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == formPopup) {
        formPopup.style.display = 'none';
    }
}