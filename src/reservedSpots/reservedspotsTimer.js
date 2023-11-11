// Set the target time (10 minutes from now)
const targetTime = new Date();
targetTime.setMinutes(targetTime.getMinutes() + 10);

// Function to update the countdown timer
function updateTimer() {
    const currentTime = new Date();
    const timeDifference = new Date(targetTime - currentTime);

    // Get minutes and seconds
    const minutes = timeDifference.getUTCMinutes();
    const seconds = timeDifference.getUTCSeconds();

    // Display the time in the "timer" element
    document.getElementById('timer').innerHTML = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // When the timer reaches 0
    if (minutes <= 0 && seconds <= 0) {
        clearInterval(timerInterval); // Stop the timer
        document.getElementById('timer').innerHTML = '00:00'; // Display 00:00 or other message
    }
}

// Call the updateTimer function every 1 second
const timerInterval = setInterval(updateTimer, 1000);

// Update the timer immediately when the page loads
updateTimer();