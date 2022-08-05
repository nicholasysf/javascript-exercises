const repeatString = function(string,num) {
    //Initialize an empty string first
    let repeatedString = "";
    //A loop that would return error if the give number is lesser than 0
    while(num<0){
        return "ERROR";
    }
    //A loop that would repeat the string
    while(num>0){
        repeatedString += string;
        num--;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;


