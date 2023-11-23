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
