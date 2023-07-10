const palindromes = function (a) {
    const preprocessed = a.toLowerCase().replace(/[^a-z0-9]/g, "");
    return preprocessed == preprocessed.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
