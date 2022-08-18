const add = function(a,b) {
	let sum = a+b;
  return sum;
};

const subtract = function(a,b) {
	let sub = a-b;
  return sub;
};

const sum = function(arr) {
	let total = 0;
  for(let i = 0; i < arr.length ; i++){
    total += arr[i];}
  return total;

};

const multiply = function(array) {
  let multiplied = array.reduce((accumulator,currentValue) => {
    return accumulator * currentValue;
});
  return multiplied;
};

const power = function(a,b) {
	let poweredUp = a ** b ;
  return poweredUp;
};

const factorial = function(n) {
  let result = 1;
	if(n==0 || n==1 ){
    return 1;
  }
  while (n>1){
    result *= n
    n--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
