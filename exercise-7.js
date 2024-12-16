// WAP js programe to create a neew string from a given string taking the first 3 character of a string and adding them together . the string length must be 3 or more , if not , the original string is returned 



// sol

function newstr(str){
    if(str.length < 3){
        return str;
    }
    else{
        let a = str.slice(0,3)
        let b = str.slice(-3)
        return `${a}${b}`
    }
}
console.log(newstr("12"))
