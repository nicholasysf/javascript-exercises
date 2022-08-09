//This function converts farenheit to Celsius.
//The formula to convert f to c is -32 and x 5/9

const ftoc = function(f) {
  return Math.round( (f-32) * (5/9) * 10)/10;
};

//This function converts Celsius to Farenheit
//The formula to convert C to F is multiply 1.8 and add 32
const ctof = function(c) {
  return Math.round( ((c*1.8) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
