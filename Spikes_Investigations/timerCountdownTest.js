var count = 6;
var startTimer;

function beginAgain() {
    document.getElementById("button").disabled = true;
    document.getElementById("button").innerHTML = "Disabled";

    startTimer = setInterval(function () {
        document.getElementById("line01").innerHTML = --count;
        if (count == 0) {
            clearInterval(startTimer);
            alert("Timer has ended")
            count = 6;
            document.getElementById("button").innerHTML = "Press to start again";
            document.getElementById("button").disabled = false;
        }
    }, 1000);
}