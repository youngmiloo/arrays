// exercise 1

//The code is going to show 4 because there are 4 elements in the 'fruits'

// exercise 2

// a) Create an array styles with items “Jazz” and “Blues”.
let styles = ["Jazz", "Blues"];

// b) Append “Rock-n-Roll” to the end.
styles.push("Rock-n-Roll");

// c) Replace the value in the middle with “Classics”.
// Assuming the array has an odd length, we find the middle index.
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

// d) Strip off the first value of the array and show it.
let firstStyle = styles.shift();
console.log ("Stripped off the first value:", firstStyle);

// e) Prepend Rap and Reggae to the array.
styles.unshift ("Rap", "Reggae");

//exercise 3

// final result is going to show '[object Window]'
// The function added with arr.push() is a basic function. That is why, it's called directly using arr[2](), this inside the function refers to the global object. As a result, the alert(this) statement displays [object Window]

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

  // exercise 5

  function getMaxSubSum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i=1; i < arr.length; i++) {
         currentSum = Math.max(arr[i], currentSum + arr[i]);
         maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Test cases
  console.log(getMaxSubSum([-1, 2, 3, -9]));        // Output: 5
  console.log(getMaxSubSum([2, -1, 2, 3, -9]));      // Output: 6
  console.log(getMaxSubSum([-1, 2, 3, -9, 11]));     // Output: 11
  console.log(getMaxSubSum([-2, -1, 1, 2]));         // Output: 3
  console.log(getMaxSubSum([100, -9, 2, -3, 5]));    // Output: 100
  console.log(getMaxSubSum([1, 2, 3]));               // Output: 6