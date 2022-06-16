/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/* eslint-disable no-lonely-if */
//  P --> Understand the Problem
//         Input: String
//         Output: Boolean (true or false)
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Function should take a string as an argument
//              - Function should return a boolean value (true or false)
//              - Function should return true if all the parentheses in the
//                in the string are properly balanced.
//              - Function should return false if any of the parenthese in the
//                in the string are not properly balanced.
//              - For a parentheses to be propely balanced, parentheses must
//                occur in matching pairs e.g. '(' and ')'
//            Implicit Requirements:
//              - if a string contains starting parentheses '(' then it should
//                have an ending parentheses as well for the parentheses to be
//                propely balanced.
//              - Balanced parentheses must start with this'(' and not this ')'.
//
// E --> Examples and Test Cases
//         - console.log(isBalanced("What (is) this?") === true);
//         - console.log(isBalanced("What is) this?") === false);
//         - console.log(isBalanced("What (is this?") === false);
//         - console.log(isBalanced("((What) (is this))") === true);
//         - console.log(isBalanced("((What)) (is this))?") === false);
//         - console.log(isBalanced("Hey!") === true);
//         - console.log(isBalanced(")Hey!(") === false);
//         - console.log(isBalanced("What ((is))) up(?") === false);
//
//
//
// D --> Data Structure: String
//
// Algorithm:
//       - Declare a variable openingParentheses and assign it value 0.
//          - We will be using this varibale as a counter for the number
//            of opening parentheses that occur, each time the program encouters
//            an opening parentheses in the input string, this varibale will be
//            incremented by 1.
//       - Declare a variable closingParentheses and assign it the character ')'
//          - Every time we encounter a closing parentheses in the input string
//            we will decrement the variable openingParentheses by 1.
//       - Create a for Loop
//          - For varibale intialization use index and initialize with the
//            value 0.
//          - For Looping condition we use index is less than string lenght,
//            because we want to iterate the same number of times as the
//            characters in the string.
//          - Increment index by 1 on each iteration
//          - For the body of the for loop
//               - we will firstly check if the character at the
//                 current index of the string is a not a parentheses, if it
//                 is not then we will terminate execution of the statements
//                 in the current iteration of the current loop, and continue
//                 execution of the loop with the next iteration. For this
//                 we will use the continue statement.
//               - if it is a parentheses than the condition would
//                 evaluated be as false and we will enter the else section.
//               - In the else Section
//                  - firstly check if the character at current index of the
//                    string is a closing parentheses, if it is then decrement
//                    openingParenthese variable by 1.
//                     - Then check again if openingParentheses variable has a
//                       value less than 0 if it does then break out of the for
//                       loop. If openingParentheses is not less than 0 then
//                       enter the else if section of the if section above
//                       where we checked if the string character was closing
//                       parentheses.
//                  - In else if section
//                      - We will check if the string character at current
//                        index is an opening parentheses, if it is then we
//                        will increment openingParentheses variable by 1.
//          - End for loop.
//          - Declare a varible balanced
//          - Check if the variable openingParentheses is euqal to 0, because
//            that would mean that the parentheses are propely balanced. If
//            it is equal to zero then assign the variable balanced the boolean
//            value true else assign it false
//          - Return balanced.
//
//          Note : What we are doing here is checking each character of the
//                 string. If that character is an alphabet, punctuation
//                 or a whitespace then we will igonre it. But if that character
//                 is an opening parentheses then we will increment a varible
//                 called openingParentheses by 1 each time it occurs and if
//                 that character is a closing parentheses then we will
//                 decrement the variable openingParentheses by 1. When an
//                 opening parentheses occurs we increment the variable
//                 openingParentheses and when a closingParenthese occurs we
//                 decrement it. And in the case if the parentheses are not
//                 propely balanced the varibale openingParentheses will have a
//                 value not equal to zero. If it is zero then that means
//                 parentheses are properly balanced.
//
// C --> Code With Intent


function walkThroughString(stringInput) {
  let string = stringInput.toLowerCase();
  let openingParentheses = 0;
  let punctuation = [" ", '!', '?'];

  for (let index = 0; index < string.length; index++) {

    if ((string[index] >= 'a' && string[index] <= 'z') || punctuation.includes(string[index])) {
      continue;
    } else {
      if (string[index] === ')') {
        openingParentheses -= 1;
        if (openingParentheses === -1) break;

      } else if (string[index] === '(') {
        openingParentheses += 1;
      }
    }
  }

  return isBalanced(openingParentheses);

}


function isBalanced(numberOfOpeningParentheses) {
  let balanced;

  if (numberOfOpeningParentheses === 0) {
    balanced = true;
  } else {
    balanced = false;
  }

  return balanced;
}

console.log(walkThroughString("What (is) this?")); // case 1 : true
console.log(isBalanced("What is) this?")); // case 2 : false
console.log(walkThroughString("((What)) (is this))?")); // case 3 : false
console.log(walkThroughString("((What) (is this))?")); // case 4 : true
console.log(walkThroughString("((What)) (is this))?")); // case 5 : fasle
console.log(walkThroughString("Hey!")); // case 6 : true
console.log(walkThroughString(")Hey!(")); // case 7 : false
console.log(walkThroughString("What ((is))) up(")); // case 8 : false