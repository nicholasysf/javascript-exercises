const leapYears = function(givenYear) {
    return (givenYear % 4 == 0 && ((givenYear % 100 != 0) || (givenYear % 400 == 0)))

};

// Do not edit below this line
module.exports = leapYears;
