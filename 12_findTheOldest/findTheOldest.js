const findTheOldest = function(people) {
    const initial = 0;
    const person = people.reduce(checkAge);
    return person;

    function checkAge(person1, person2) {
        const d = new Date();
        const currentYear = d.getFullYear();
        let age1;
        let age2;

        if (!('yearOfDeath' in person1)) {
            age1 = currentYear - person1.yearOfBirth;
        } else {
            age1 = person1.yearOfDeath - person1.yearOfBirth;
        }
        
        if (!('yearOfDeath' in person2)) {
            age2 = currentYear - person2.yearOfBirth;
        } else {
            age2 = person2.yearOfDeath - person2.yearOfBirth;
        }

        if (age1 > age2) {
            return person1;
        } else {
            return person2;
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
