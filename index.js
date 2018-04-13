// ***** ------------------------ **** ------------------------ ***** //
                    // ***** DRAW CANVAS TEXT ***** //
// ***** ------------------------ **** ------------------------ ***** //

var play = document.getElementById("button-play");
var ctxPlay = play.getContext("2d");
var instructions = document.getElementById("button-instructions");
var ctxInstructions = instructions.getContext("2d");

ctxPlay.font = "20px Arial";
ctxPlay.fillStyle = "rgb(14, 71, 163)";
ctxPlay.textAlign = "center";
ctxPlay.fillText("Play", play.width / 2, play.height / 2);

ctxInstructions.font = "20px Arial";
ctxInstructions.fillStyle = "rgb(14, 71, 163)";
ctxInstructions.textAlign = "center";
ctxInstructions.fillText("Instructions", instructions.width / 2, instructions.height / 2);