// WAP in js to extract the first half of a string of even length 

function firsthalf(str){
let a = str.slice(0 , str.length / 2);
return a ;
}
console.log(firsthalf("123456789"))