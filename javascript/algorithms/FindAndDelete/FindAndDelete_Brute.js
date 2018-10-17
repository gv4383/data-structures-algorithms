/*
* Given and array nums and a value val, remove all instances of that value in-place and return the new length.
* DO NOT allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
* The order of elements CAN be changed. It doesn't matter what you leave beyond the new length.
*
* Examples:
* 
* [3, 2, 2, 3], val = 3
* returns length = 2
* The new array contains 2, 2 (not necessary to be returned)
*
* [0, 1, 2, 3, 0, 4, 2], val = 2
* returns length = 5
* The new array contains 0, 1, 2, 3, 0, 4
*/

function findAndDelete(arr, val) {
  // Stores length of original array
  let arrLength = arr.length;

  // Initiates a counter
  let counter = 0;

  // Starts at the end of array and iterates towards the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      // if the element in arr matches val, it will be removed from the array, and all other elements after it will be shifted back an index
      arr.splice(i, 1);

      // increments every time an element is removed
      counter += 1;
    }
  }

  // returns the modified length of arr
  return arrLength - counter;
}
