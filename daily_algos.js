// 10/24/19
// Given an array of comparable values, move the lowest element to array's front, shifting backward any elements previously ahead of it. Do not otherwise change the array's order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function removeVal(arr, idx) {
  for (var i = idx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

removeVal([3, 5, 7, 9], 2);

// Given array and an index, remove and return the array. Do this without using built-in array methods except pop().

function shiftMinimum(arr) {
  var index;
  var min = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }

  for (var j = index; j > 0; j--) {
    arr[j] = arr[j - 1];
  }
  arr[0] = min;
  return arr;
}
shiftMinimum([3, 5, 7, 9, 4, 8, 1]);

//10/25/19
// Given an array and a seperator, seperator each index with the seperator
function splitJoin(arr, seperator) {
  var output = "";
  for (var i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      output += arr[i] + seperator;
    } else {
      output += arr[i];
    }
  }
  return output;
}

splitJoin([1, 2, 3, 4], " ");

// Given a string, print each vowel first and then each consonant
function separateStr(str) {
  var vowel = " ";
  var consonant = " ";
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowel += str[i];
    } else {
      consonant += str[i];
    }
  }
  for (var j = 0; j < vowel.length; j++) {
    console.log(vowel[j]);
  }
  for (var k = 0; k < consonant.length; k++) {
    console.log(consonant[k]);
  }
}
separateStr("JavaScript");

// A challenge! Given an array and an integer, roatate the array left as many times as the integer

function rotateLeft(arr, num) {
  for (var i = 0; i < num; i++) {
    var first = arr[0];
    for (var j = 1; j < arr.length; j++) {
      arr[j - 1] = arr[j];
    }
    arr[arr.length - 1] = first;
  }
  return arr;
}

rotateLeft([1, 2, 3, 4, 5], 3);
/*
Parens Valid
Create a function that, given an input string str , returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example.
Given: "Y(3(p)p(3)r)s" => true .
Given: "N(0(p)3" => false : not every parenthesis is closed. Given "N(0)t ) 0(k" , return false , because the underlined ")" is premature: there is nothing open for it to close.
Given: a(b))(c => false
    - same number of opens and closes but the 2nd closing closes nothing
*/
function validParens(str) {
  var parens = [];
  for (var char in str) {
    if (char == "(") {
      parens.push(char);
    }
    if (char == ")") {
      if (parens.length == 0) {
        return false;
      } else parens.pop();
    }
  }
  if (parens.length != 0) {
    return false;
  } else return true;
}
validParens("Y(3(p)p(3)r)s");
validParens("N(0(p)3");
validParens("a(b))(c");

// Recursion week

// Recursive Factorial
// Given num , return the product of ints from 1 up to num . If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1 . rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function factorial(n) {
  n = Math.floor(n);
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}

// Recursive Fibonacci - return the nth fibonacci number

function fibNaiveRecursion(n) {
  if (n < 0) return null;
  if (n < 2) return n;
  return fibNaiveRecursion(n - 1) + fibNaiveRecursion(n - 2);
}

// faster recursion
function fibRecursive(n, memoi = { 0: 0, 1: 1, 2: 1 }) {
  if (n < 0) return null;

  if (memoi[n] !== undefined) return memoi[n];

  memoi[n] = fibRecursive(n - 1, memoi) + fibRecursive(n - 2, memoi);
  return memoi[n];
}
// Recursive Sigma - Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function recursiveSigma(n, sum = 0) {
  if (n < 1) return sum;
  return recursiveSigma(n - 1, sum + n);
  // if the `return` was excluded on this line
  // the inner recursiveSigma would hit the `return sum`
  // but the outer recursiveSigma would not return that returned sum
  // resulting in `undefined` being returned by the first recursiveSigma called
}

function recursiveSig(n) {
  if (n < 1) return 0;
  return n + recursiveSig(n - 1);
}
// Greatest Common Factor / Denominator

// Given two integers, create rGCF(num1,b) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// 1) gcf(a,b) == a , if a == b;

// 2) gcf(a,b) == gcf(a-b,b) , if a>b;

// 3) gcf(a,b) == gcf(a,b-a) , if b>a.

// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF 's reach. You should be able to compute rGCF(123456,987654)
function GCF(a, b) {
  if (a == b) return a;
  if (a > b)
    if (a % b == 0) return b;
    else return GCF(a - b, b);
  if (b > a)
    if (b % a == 0) return a;
    else return GCF(a, b - a);
}
// console.log(GCF(15, 30));
// console.log(GCF(18, 8));
// console.log(GCF(400, 200));
// console.log(GCF(123456, 987654));

// Recursively sum an arr of ints

function recursiveSum(arr, n = 0) {
  if (arr.length == 1) return arr[0];
  else if (n === arr.length) return 0;
  else return arr[n] + recursiveSum(arr, n + 1);
}

// console.log(recursiveSum([1, 2, 3]));

/*
Recursive Binary Search
Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ; rBinarySearch([4,5,6,8,12],5) = true .
Take the middle item and compare it to the given value.
Based on that comparison, slice your given array and send it back into the function.
Bonus (alumni interview): return how many times the given number occurs (0 or n)
*/
function rBinarySearch(arr, val) {
  if (arr.length == 1)
    if (val == arr[0]) return 1;
    else return 0;
  else {
    console.log(arr);
    mid = Math.floor(arr.length / 2) - 1;
    if (arr[mid] == val) {
      rBoundary = mid;
      lBoundary = mid;
      while (arr[rBoundary + 1] == val && rBoundary != arr.length) {
        rBoundary += 1;
      }
      while (arr[lBoundary - 1] == val && lBoundary != 0) {
        lBoundary -= 1;
      }
      return rBoundary - lBoundary + 1;
    } else if (arr[mid] < val) return rBinarySearch(arr.slice(mid + 1), val);
    else if (arr[mid] > val) return rBinarySearch(arr.slice(0, mid + 1), val);
  }
}

// console.log(rBinarySearch([1, 3, 5, 6], 3));
// console.log(rBinarySearch([4, 5, 6, 8, 12], 5));
// console.log(rBinarySearch([5, 5, 6, 8, 12], 12));

// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* Flood FillMost graphical "paint" applications, have a 'paintcan fill' function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas' X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel's color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.
Input:
[
    [3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 5, 3],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3]
]
and startXY of [2,2], and newColor of 1.
we examine the cells that are directly (not diagonally) adjacent to startXY. If any have a value of 3 (the original value at startXY), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .
Output:
[
    [3, 2, 1, 4, 3],
    [2, 1, 1, 4, 0],
    [7, 1, 1, 5, 3],
    [6, 5, 1, 4, 1],
    [1, 2, 1, 1, 1 ]
]
*/
// function floodFill(canvas2D,startXY,newColor, orgColor=canvas2D[startXY[1]][startXY[0]]){
//     y = startXY[0]
//     x = startXY[1]
//     console.log("y: ", y)
//     console.log("x: ", x)
//     console.log("canvas2D: \n",canvas2D)
//     xBounds = canvas2D[0].length
//     yBounds = canvas2D.length
//     console.log("xBounds: ", xBounds)
//     console.log("yBounds: ", yBounds)
//     if (x < 0 || x >= xBounds || y < 0 || y >= yBounds || canvas2D[y][x] == newColor || canvas2D[y][x] != orgColor){
//         console.log("Out of bounds or same color")
//         return canvas2D
//     }

//     canvas2D[y][x] = newColor
//     floodFill(canvas2D, [y+1, x], newColor, orgColor)
//     floodFill(canvas2D, [y, x-1], newColor, orgColor)
//     floodFill(canvas2D, [y, x+1], newColor, orgColor)
//     floodFill(canvas2D, [y-1, x], newColor, orgColor)
//     return canvas2D
// }

function floodFill(canvas2D, startXY, newColor, originalColor = null) {
  const x = startXY[0],
    y = startXY[1];
  if (originalColor && canvas2D[y][x] !== originalColor) {
    return;
  }

  let changed = false;

  if (!originalColor) {
    originalColor = canvas2D[y][x];
  }

  if (canvas2D[y][x] === originalColor) {
    canvas2D[y][x] = newColor;
    changed = true;
  }

  if (changed) {
    if (y - 1 >= 0) {
      floodFill(canvas2D, [x, y - 1], newColor, originalColor);
    }

    if (x + 1 < canvas2D[0].length) {
      floodFill(canvas2D, [x + 1, y], newColor, originalColor);
    }

    if (y + 1 < canvas2D.length) {
      floodFill(canvas2D, [x, y + 1], newColor, originalColor);
    }

    if (x - 1 >= 0) {
      floodFill(canvas2D, [x - 1, y], newColor, originalColor);
    }
  }

  return canvas2D;
}

// function fill(x,y,original_color, color)
// {
// 	if(y > world.length - 1 || y < 0) return;
// 	if(x > world[0].length - 1 || x < 0) return;
// 	if(original_color != world[y][x] ) return;
// 	fill(x + 1, y, original_color, color);
// 	fill(x - 1, y, original_color, color);
// 	fill(x, y + 1, original_color, color);
// 	fill(x, y - 1, original_color, color);
// 	world[y][x] = color;
// 	drawWorld();
// }

canvas2D = [
  [3, 2, 3, 4, 3],
  [2, 3, 3, 4, 0],
  [7, 3, 3, 5, 3],
  [6, 5, 3, 4, 1],
  [1, 2, 3, 3, 3]
];

// console.log(floodFill(canvas2D, [2, 2], 1));

function sumToOne(num) {
  var numString = num.toString();
  if (numString.length == 1) {
    return num;
  }
  var sum = 0;
  for (var i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
  }
  return sumToOne(sum);
}

console.log(sumToOne(123));
console.log(sumToOne(123678));

// Bubble Sort
function bubbleSort(arr) {
  if (arr.length == 1) return arr;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([10, 2, 8, 12, 1, 15, 7]));

// Selection Sort
function selectionSort(arr) {
  if (arr.length == 1) return arr;
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var x = i + 1; x < arr.length; x++) {
      if (arr[x] < arr[min]) {
        min = x;
      }
    }
    if (i !== min) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([10, 2, 8, 12, 1, 15, 7]));

// Insertion Sort
function insertionSort(arr) {
  if (arr.length == 1) return arr;
  else {
    for (var i = 1; i < arr.length; i++) {
      var j = i - 1;

      while (arr[i] < arr[j] && j >= 0) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
        i = j + 1;
      }
    }
    return arr;
  }
}

// function insertionSort(arr){
//   for (var i = 1; i < arr.length; i++){
//     var current = arr[i];
//     var previous = i - 1;
//     while (previous >= 0){
//       if(current < arr[previous]){
//         arr[previous + 1] = arr[previous]
//         arr[previous] = current;
//         previous = previous - 1;
//       }
//       else
//         break;
//     }
//   }
//   return arr;
// }
console.log(insertionSort([10, 2, 8, 12, 1, 15, 7]));

// Merge Sort
function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) return arr;
  var mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [],
    lLen = left.length,
    rLen = right.length,
    l = 0,
    r = 0;
  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}

// Statistics to Doubles
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles are rolled. Display the number of rolls , min , max , and average.

function rollDoubles() {
  var count = 0;
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  while (dice1 != dice2) {
    count++;
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
  }
  return count;
}

console.log(rollDoubles());
// Quick Sort

// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
// Input: "This is a test"
// Output: "test a is This"

function stringReverse(sentence) {
  var newSent = "";
  var word = "";
  for (var i = sentence.length - 1; i >= 0; i--) {
    if (i == 0) {
      word = sentence[0] + word;
      newSent = newSent + " " + word;
    }
    if (sentence[i] == " ") {
      newSent = newSent + " " + word;
      word = "";
    } else {
      word = sentence[i] + word;
    }
  }
  return newSent;
}

console.log(stringReverse("This is a test"));

// Input: string of words (with spaces, tabs and linefeeds)
// Output: array of words
// Input: "Life is not a drill!"
// Output: ["Life", "is" "not", "a", "drill!"]

function stringWord(sentence) {
  var arr = [];
  var word = "";
  for (var i = 0; i < sentence.length; i++) {
    if (i == sentence.length - 1) {
      word += sentence[i];
      arr.push(word);
    }
    if (sentence[i] == " ") {
      arr.push(word);
      word = "";
    } else {
      word += sentence[i];
    }
  }
  return arr;
}
console.log(stringWord("Life is not a drill!"));

// String: ionIs Rotat (Is Rotation)
// Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?

function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[str2.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
}
console.log(isRotation("ABC", "CBA"));

// String: Rotate String
// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount.

function rotateString(str, int) {
  if (str.length == 1 || int < 1) {
    return str;
  }
  var newStr = "";
  for (var i = int; i < str.length; i++) {
    newStr += str[i];
  }
  for (var j = 0; j < int; j++) {
    newStr += str[j];
  }
  return newStr;
}
console.log(rotateString("Hello World", 1));

// String: Dedupe
// Remove duplicate characters
//   - (case-sensitive) including punctuation.
// Bonus: Keep only the last instance of each character.
// Input: "Snaps! crackles! pops!"
// Output: "Snrackle ops!"

function stringDedupeLastInstance(str) {
  let distinctStr = "";
  const seen = {};
  for (let i = str.length - 1; i >= 0; --i) {
    if (!seen[str[i]]) {
      distinctStr = str[i] + distinctStr;
      seen[str[i]] = true;
    }
  }
  return distinctStr;
}

function stringDedupe(str) {
  let distinct = "";
  const seen = {};
  for (const char of str) {
    if (!seen[char]) distinct += char;
    seen[char] = true;
  }
  return distinct;
}

// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.
// Input: "aaaabbcddd"
// Output: "a4b2c1d3"
// If result is not shorter (such as "bb" => "b2" ),
// return the original string.

function strEncode(str) {
  let encoded = "";
  for (let i = 0; i < str.length; ++i) {
    let currentLetter = str[i],
      dupeCount = 1;
    while (str[i + 1] === currentLetter) {
      ++dupeCount;
      ++i;
    }
    encoded += currentLetter + dupeCount;
  }
  return encoded.length === str.length ? str : encoded;
}

//String Decode
// Given an encoded string (see above), decode and return it. Given "a3b2c1d3" , return "aaabbcddd" .
function strDecode(str) {
  let decoded = "";
  for (let i = 0; i < str.length; i++) {
    let n = parseInt(str[i]);
    if (n) decoded += str[i - 1].repeat(n);
  }
  return decoded;
}
/*
  Interview question asked by a google engineer interviewer on interviewing.io
  Given two strings, find the largest common substring
  i.e., the largest string that could be built with common characters
  Output order doesn't matter
  Input: 'aaa', 'aa'
  Output: 'aa'
  Input: 'aaba', 'aa'
  Output: 'aa'
  Input: 'aeff', 'abcdef'
  Output: 'aef'
  Input: 'this hurts my head', 'this hurts my head too'
  Output: 'this hurts my head'
*/
function longestCommonSubstring(s1, s2) {
  const freq1 = getFreqTable(s1),
    freq2 = getFreqTable(s2);
  let longestSubStr = "";
  for (const key in freq1) {
    // the str with the smaller count of a shared letter limits us to using that many at most
    // if freq2[key] is undefined the or operator will return 0
    const min = Math.min(freq1[key], freq2[key] || 0);
    longestSubStr += key.repeat(min);
  }
  return longestSubStr;
}
function getFreqTable(s) {
  const freq = {};
  for (let char of s)
    freq.hasOwnProperty(char) ? freq[char]++ : (freq[char] = 1);
  return freq;
}

/*
Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)

    const recipe = {
  "organic fat": 99,
  "live squid": 1,
  "birds nest": 1,
  "fried flesh": 1,
  "spicy": 5,
  "gourmet memes": 4200
};
const available = {
  "organic fat": 990,
  "live squid": 1,
  "birds nest": 10,
  "fried flesh": 10,
  "spicy": 50,
  "gourmet memes": 42000
}
// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'
*/

/*
  In this example, a meetup is an object that represents
  an event, like a group hike, which has a start and
  end datetime.
  Make a function that takes an array of meetups that
  a user is signed up for and a new meetup that the user
  is trying to sign up for. If the new meetup time doesn't
  conflict with any existing meetups, return true and add it
  to the array of joined meetups, otherwise return false and
  don't add it to the array.
  We will use integers with few digits to represent
  a datetime to make these examples easier to read and
  make comparisons simple, rather than using milliseconds
  since 1970/01/01 (epoch) to represent a datetime because
  that is difficult to read.
  function joinMeetup(newMeet, joinedMeetups) {
  }
*/

/*
const joinedMeetups = [
  {
    description: "Look at your phone with strangers",
    start: 10,
    end: 15
  },
  {
    description: "Point fans at hurricane together to blow it away",
    start: 17,
    end: 19
  },
  {
    description: "Petting doggos",
    start: 30,
    end: 100
  }
];
// example1 is false, overlaps with "Petting doggos"
const example1 = joinMeetup(
  {
    description: "Debug code",
    start: 25,
    end: 300
  },
  joinedMeetups
);
// exampl2 is true, does not overlap with any
const example2 = joinMeetup(
  {
    description: "Help fellow coders",
    start: 5,
    end: 9
  },
  joinedMeetups
);
// example3 is false, overlaps with "Petting doggos"
const example3 = joinMeetup(
  {
    description: "Say yikes 10000 times with strangers",
    start: 50,
    end: 80
  },
  joinedMeetups
);
// example4 is true, end time matches the start time of
// "Petting doggos", but doesn't technically overlap
const example4 = joinMeetup(
  {
    description: "Throw rocks at bigfoot",
    start: 20,
    end: 30
  },
  joinedMeetups
);
// example5 is false, conflicts with "Petting doggos"
const example5 = joinMeetup(
  {
    description: "Do nothing with nobody all alone by yourself",
    start: 18,
    end: 29
  },
  joinedMeetups
);
*/

/*
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurences from one array.
  Input:
  [1,2,2,2,7], [2,2,6,6,7]
  Output: [1,2,2,2,6,6,7]
*/

/*
  Balance Index
  Here, a balance point is on an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  Return -1 if none exist.
  Input: [-2,5,7,0,3]
  Output: 2
  Input: [9,9]
  Output: -1
*/
function balanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  } else {
    for (let i = 1; i < arr.length - 1; i++) {
      var sum1 = 0,
        sum2 = 0;
      for (let x = i - 1; x >= 0; x--) {
        sum1 += arr[x];
      }

      for (let y = i + 1; y < arr.length; y++) {
        sum2 += arr[y];
      }
      if (sum1 === sum2) {
        return i;
      }
    }
    return -1;
  }
}
// console.log(balanceIndex([-2, 5, 7, 0, 3]));
// console.log(balanceIndex([9, 9]));

function balanceIndexSolution(arr) {
  if (arr.length < 3) return -1;
  let left = arr[0],
    right = 0;
  for (let i = 2; i < arr.length; i++) {
    right += arr[i];
  }
  console.log("right is " + right);

  for (let i = 1; i < arr.length - 1; i++) {
    if (left === right) return i;
    right -= arr[i + 1];
    left += arr[i];
  }
  return -1;
}

console.log(balanceIndexSolution([-2, 5, 7, 0, 3]));
console.log(balanceIndexSolution([-2, 5, 3, 7, 3, 0, 3]));
console.log(balanceIndexSolution([9, 9]));
/*
  Array: Mode
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  Bonus:
  Second: memory constraints prevent using a new array.
  How does this affect your solution?
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

function arrayMode(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj === false) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  let maxVal = obj[arr[0]],
    maxCount = arr[0].toString();
  for (let key in obj) {
    if (obj[key] > maxVal) {
      maxCount = key;
      maxVal = obj[key];
    }
  }
  return maxCount;
}

console.log(arrayMode([3, 5, 5, 5, 4, 3]));

function findAllModesSolution(arr) {
  if (arr.length === 1) return [arr[0]];
  const modes = [];
  const freq = {};
  let maxFreq = 0;
  let allSameFreq = true;
  for (const n of arr) {
    freq.hasOwnProperty(n) ? freq[n]++ : (freq[n] = 1);
    if (freq[n] > maxFreq) {
      maxFreq = freq[n];
    }
  }
  for (const key in freq) {
    if (freq[key] === maxFreq) {
      // keys are strings, convert back to int
      modes.push(parseInt(key));
    } else {
      allSameFreq = false;
    }
  }
  // return empty array if allSameFreq, else return modes
  return allSameFreq ? [] : modes;
}
/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, 'divide and conquer',
  taking advantage of the fact that the array is sorted .
  useful methods:
    - .slice(startIdx, endIdx)
      - endIdx is exclusive, returns a copy of the specified portion of array or string
  Bonus (alumni interview): return how many times the given number occurs (0 or n)
*/
function binarySearch(arr, val) {
  let copy = arr.slice();
  while (copy.length) {
    const mid = Math.floor(copy.length / 2),
      item = copy[mid];
    if (item === val) return true;
    if (item < val) {
      copy = copy.slice(mid + 1);
    } else {
      copy = copy.slice(0, mid);
    }
  }
  return false;
}
function binarySearchNoSlice(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor(rightIdx - leftIdx / 2);
    if (arr[midIdx] === val) {
      return true;
    }
    if (val < arr[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }
  return false;
}
// Bonus: return how many times the given number occurs (0 or n)
function binarySearchNoSliceCount(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let occurrences = 0;
  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor(rightIdx - leftIdx / 2);
    if (arr[midIdx] === val) {
      let leftIdx = midIdx,
        rightIdx = midIdx;
      ++occurrences;
      // since we already counted first occurrence
      // our next checks incr the idx before checking equality
      while (leftIdx >= 0 || rightIdx < arr.length) {
        if (arr[--leftIdx] === val) {
          ++occurrences;
        } else if (arr[++rightIdx] === val) {
          ++occurrences;
        }
      }
    }
    if (val < arr[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }
  return occurrences;
}

/*
  Array: Remove Duplicates
  Given a sorted array, dedupe array
  Because array elements are already in order, all duplicate values will be grouped together.
  Can use a new array, see if you can do this in O(n) time
  Bonus: solve this without using any nested loops.
  Bonus: Do it in-place
  Bonus: Do it in-place with no nested loop
*/

function removeDuplicates(arr) {
  if (arr.length < 2) return arr;
  else {
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i + 1, 1);
        i--;
      }
    }
  }
  return arr;
}

console.log(removeDuplicates([1, 3, 5, 5, 7, 7, 7, 7]));

/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  Input: [3,0,1]
  Output: 2
  Second: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
  Input: [2,-4,0,-3,-2,1]
  Output: -1
  Input: [5,2,7,8,4,9,3]
  Output: 6
*/
function missingValue(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("arr is: " + arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) return arr[i] + 1;
  }
}
console.log(missingValue([2, -4, 0, -3, -2, 1]));
console.log(missingValue([5, 2, 7, 8, 4, 9, 3]));
/*
  Matrix Search
  Mike digs image recognition and wants to create a JavaScript Imaging Library, just like PIL for Python. He is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two-dimensional array represents a gray-scale image, where each integer value is a pixel. The second image might be found somewhere within the larger one. Return whether it is.
  Given array: [ [98,87,76,65],[12,34,45,56], [56, 67 , 78 ,89] , [54, 43 , 32 ,21] ], and array: [67,78], return true.
  Second: Return location of first match found ( [-1,-1] if no match). In example above, return [2,1] .
*/

function matrixSearch(matrix, arr) {
  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[i][x] == arr[0]) {
        if (matrix[i][x + 1] == arr[1]) {
          return [i, x];
        }
      }
    }
  }
  return [-1, -1];
}

console.log(
  matrixSearch(
    [
      [98, 87, 76, 65],
      [12, 34, 45, 56],
      [56, 67, 78, 89],
      [54, 43, 32, 21]
    ],
    [67, 78]
  )
);

// Given an array, return the first non-repeated value
function firstNonRepeated(arr) {
  let obj = {};
  if (arr.length < 2) return arr;
  else {
    for (let i = 0; i < arr.length; i++)
      arr[i] in obj ? obj[arr[i]]++ : obj[arr[i]] = 1;
    for (let x = 0; x < arr.length; x++) {
      if (obj[arr[x]] == 1) return arr[x];
    }
    return false;
  }
}
console.log(firstNonRepeated([3, 5, 7, 5, 7, 3, 9, 11]));
