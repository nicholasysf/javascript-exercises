// lower case everything first so that it wont be case sensitive 
// then we replace any special character that isnt (a-z) : use regular expression for this .
// split the string up into individual alphabets => ("pop ") to ("p","o","p")
// reverse the string ("p","o","p") to ("p","o","p")
//

const palindromes = function (string) {
    newString = string.toLowerCase().replace(/[^a-z]/g,"");
    let splitString = newString.split("");
    let reversedString = splitString.reverse();
    let finalString = reversedString.join("");
    if (newString == finalString){
        return true;
    }else 
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
