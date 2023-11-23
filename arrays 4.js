// exercise 4

function sumInput() {
    let numbers = [];
  
    while (true) {
      let userInput = prompt("Enter a number:");
  
      // Check if the user input is not a number, an empty string, or if Cancel is pressed.
      if (userInput === null || userInput === "" || !isFinite(userInput)) {
        break;
      }
  
      // Convert the user input to a number and add it to the array.
      numbers.push(+userInput);
    }
  
    // Calculate and return the sum of the array items.
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
  
    return sum;
  }
