// ***** ------------------------ **** ------------------------ ***** //
                    // ***** GLOBAL VARIABLES ***** //
// ***** ------------------------ **** ------------------------ ***** //

var instructions = document.getElementById("button-instructions");
var ctxInstructions = instructions.getContext("2d");
var play = document.getElementById("button-play");
var ctxPlay = play.getContext("2d");
var titleCanvas = document.getElementById("canvas-title");
var ctxCanvasTitle = titleCanvas.getContext("2d");

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

