/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
const rehash = (s) => {}


//create a function that takes in a string
//create an output string variable
//create a letterCount dictionary
//create a currentLetter variable
//create a numberString variable

//loop through input string
    //if current character isNaN
        //if currentLetter exists
            //if currentLetter already exists in dictionary
                //add numberString to the value already stored for currentLetter
            //if currentLetter DOESN'T exist in dictionary
                //initialize that value to current value stored in numberString
        //set numberString to ""
        //set currentLetter to char
    //if character IS a number
        //push current character into number string

// get our keys sorted alphabetically
// for each key, concat the key + the value onto outputString
// return outputString