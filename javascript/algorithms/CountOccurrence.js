/*
 * The purpose of this algorithm is to count the number of occurrences a sub-string shows up in a main string
 * Note that two functions are utilized in this algorithm
 */

// This function will take in the main-string and the substring
// This function searches through the main string and finds where a character within the main-string matches with the first character of the sub-string
function countOccurrence(str, substr) {
  // counter to track how many times substr appears in str
  let count = 0;

  // iterate through str
  for (let i = 0; i < str.length; i++) {
    // console.log(i);

    // start comparing the section of str to see if it matches substr
    if (str[i] === substr[0]) {
      // console.log(`match at i = ${i}`);
      // console.log('count before compareSub:', count);

      // compareSub returns either a 1 or 0 depending on if a match is found
      count += compareSub(str, substr, i);

      // console.log('count after compareSub:', count);
    }
  }

  return `The given substring (${substr}) appears in the big string (${str}) ${count} times.`;
}

// This function will take in the main-str (str), sub-string (substr), and the index in which that character within str matched the first index of substr
function compareSub(str, substr, strStart) {
  // since the current index of str has to match with the first character of substr, we initiate check to be 1
  let check = 1;

  // case in which substr is larger than str or if nothing is input for substr
  if (substr.length > str.length || substr.length <= 0) return 0;

  // iterates through substr
  for (let j = 1; j < substr.length; j++) {
    // console.log('j =', j);
    // console.log('check before comparing letters:', check);
    // console.log('current letter in str:', str[strStart + j]);
    // console.log('current letter in subStr:', substr[j]);

    // compares the rest of of specified section of str with substr to see if there is a match
    if (str[strStart + j] && str[strStart + j] === substr[j]) {
      check += 1;
    }
    // if no match was found, break out of the for loop immediately
    else {
      break;
    }
  }

  // check === substr.length indicates there was an occurrence of substr within str
  if (check / substr.length < 1) {
    return 0;
  } else {
    return 1;
  }
}

// test cases
let test1 = "catinthehat cat";
let test2 = " cat";

let test3 = "sss";
let test4 = "ss";

console.log(countOccurrence(test3, test4));
