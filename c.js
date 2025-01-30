function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
//     This function gets the current time, formats it, and then updates the time displayed on the webpage.

// const now = new Date();
// This creates a new Date object which contains the current date and time.

// Extracting Hours, Minutes, and Seconds
// The getHours(), getMinutes(), and getSeconds() methods are called on the now object to get the current hours, minutes, and seconds.
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // In the next steps, the time is formatted to always show two digits (e.g., 09 instead of 9 for single-digit numbers):
    // This uses a ternary operator. For example, if the hours is less than 10 (e.g., 9), it adds a leading zero to make it "09".

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = timeString;
  }

  setInterval(updateTime, 1000);
  updateTime();
  
  
//   3. Creating the Time String
// The formatted hours, minutes, and seconds are combined into a single string in the format "HH:MM:SS":

// javascript
// Copy
// const timeString = `${hours}:${minutes}:${seconds}`;
// 4. Updating the HTML Element
// The document.getElementById('time').innerText = timeString; line finds an HTML element with the ID "time" and updates its text to show the formatted time.

// 5. Updating Time Every Second
// The setInterval(updateTime, 1000); line calls the updateTime function every 1000 milliseconds (1 second), ensuring the time on the page updates every second.

// 6. Initializing the Clock
// The line updateTime(); ensures that the time is displayed correctly as soon as the page loads, without waiting for the first interval.


