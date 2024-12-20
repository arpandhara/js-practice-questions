// WAP in js that returns a passed string with letters in alphabatical order 

// ex : "monkljiehfdcgba" ----> "abcdefghijklmp"


// sol

const sortalphabet = (str) => 
str.split('').sort((a,b) => a>b ? 1:-1 ).join('');

console.log(sortalphabet("achsjdo"));
