const findTheOldest = function(arr) {
    return arr.reduce((oldest, curr)=>{
        const oldestAge = (oldest.yearOfDeath?oldest.yearOfDeath:(new Date()).getFullYear()) - oldest.yearOfBirth;
        const currentAge = (curr.yearOfDeath?curr.yearOfDeath:(new Date()).getFullYear()) - curr.yearOfBirth;

        return oldestAge < currentAge ? curr : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
