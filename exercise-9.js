// WAP in js to concatenate two string except their first chracter





// sol


function addstring (str1,str2){
    let a = str1.slice(1);
    let b = str2.slice(1);
    return a.concat(b)
}
console.log(addstring("12345" , "12345"))


// smaller approach


function addstring2 (str1,str2){
   return str1.slice(1) + str2.slice(1)
}
console.log(addstring2("12345" , "12345"))



