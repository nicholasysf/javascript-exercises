const removeFromArray = function(...args) {
    //This gives us the given array for eg : [1,2,3,4,5]
    const givenArray = args[0];
    return givenArray = givenArray.filter(num =>!args.includes(num))

};

// Do not edit below this line›
module.exports = removeFromArray;
