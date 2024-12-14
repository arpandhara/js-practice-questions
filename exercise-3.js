// WAP in js to replace every character in a given string with the character following it in the alphabet 

function replacechar (string) { string.split().map(char => String.fromCharCode(char.charCodeAt(0) +1)).join();}

console.log(replacechar("a"));

// some problem is there have to debug
