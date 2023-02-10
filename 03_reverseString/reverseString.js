const reverseString = function(string) {
    const arr = string.split();
    const length = string.length;
    let newString = '';

    for (let i = length - 1; i >= 0; i--) {
        newString += string[i];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
