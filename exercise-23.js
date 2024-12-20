// WAP in js that accepts a string as a parameter and counts the number of vowel within the string 



// sol

const countvowels = (str , letters = ["a","e","i","o","u"]) => str.split('').filter(s => letters.indexOf(s) > -1).length
console.log(countvowels("aajj"));
