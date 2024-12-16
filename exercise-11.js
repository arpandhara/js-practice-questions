// WAP in js to check a given string contains 2 to 4 occurance of a specified character









// sol



function countchar(str,char){
    let a =str.split('').filter(ch => ch===char).length;
    return a ;
}
function countchar2(str,char){
    if(countchar(str,char) >= 2 && countchar(str,char)<= 4){
        return true;
    }
    else{
        return false
    }
}
console.log(countchar2("ohhhhhhhhhhhh" , "h"))



// another shorter approach


// function countchar(str , char){
//    let a = str.split('').filter(ch => ch === char).length ;
//    return a;
// }
// function contains2to4(str , char){
//     let b =countchar(str , char) >=2 && countchar(str,char)<= 4 ;
//     return b;
// }
// console.log(contains2to4("ohhhh" , "h"))
