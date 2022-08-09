
const sumAll = function(num1,num2) {

    let sum = 0;
    
    if(typeof num1 !="number"|| typeof num2 !="number"){
        return "ERROR";

    }else if(num1 < 0 || num2 < 0){
        return "ERROR";

    }else if(num1>num2){
        for(i=num2; i<=num1; i++) {
            sum = sum + num2;
            num2 ++;
        }
        return sum;
        
    }else if(num2>num1){
        for(i=num1; i<=num2; i++){
            sum = sum + num1;
            num1++;
        }
        return sum;
    } 
}

// Do not edit below this line
module.exports = sumAll;
