const findTheOldest = function(people) {
    return people.reduce((oldest,current)=>{
        const oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth,current.yearOfDeath);
        if(currentAge>oldestAge){
            return current;
        }else{
            return oldest;
        }
    })

};


//Get the age function

function getAge(birth,death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
