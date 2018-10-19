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
  let track = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[track] = arr[i];
      track += 1;
    }
  }

  return track;
}
