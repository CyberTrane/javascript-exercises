const palindromes = function (string) {
    string = string.toLowerCase();
    let newString = '';
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65) {
            arr.push(string.charAt(i));
            newString += string.charAt(i);
        }
    }

    let reverseString = '';
    const reverseArr = arr.reverse();
    for (let i = 0; i < reverseArr.length; i++) {
        reverseString += reverseArr[i];
    }

    if (newString === reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
