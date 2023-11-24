// exercise 3
 
function filterRangeInPlace(arr, a, b) {
    arr = arr.filter(item => item >= a && item <= b);
    arr.length = arr.length; // Truncate the array to the new length
  }