function checkMySleep() {
    // Get the input value
    var hours = document.getElementById("hoursInput").value;

    // Get the result element
    var resultText = document.getElementById("result");

    // Check if empty
    if (hours === "") {
        resultText.innerHTML = "Please enter a number!";
        resultText.style.color = "orange";
        return;
    }

    // Check if healthy
    if (hours >= 7 && hours <= 9) {
        resultText.innerHTML = "That's healthy! Great job.";
        resultText.style.color = "green";
    } else {
        resultText.innerHTML = "That's not very healthy. Try for 7-9 hours!";
        resultText.style.color = "red";
    }
}
