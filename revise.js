// 1.   WAP in js to check two numbers and return true if one of the two numbers id 100 or if the sum of the two numbers is 100;


// sol 
// const checktwonum = (num1,num2) => {
//     if (num1 === 100 || num2 === 100 || num1+num2 === 100) {
//         return true ;
//     }
//     return false;
// }
// console.log(checktwonum(50,0));


// 2.  // WAP in js to get the extension of a filename

// sol

// const getfileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(getfileExtension("hahha.jpg"));


// 4. // WAP in js to get the current date dd-mm-yyy
// sol


// const currentdate = (date = new Date()) => {
// return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
// }
// console.log(currentdate());


// 5.// WAP js programe to create a neew string from a given string taking the first 3 character of a string and adding them together . the string length must be 3 or more , if not , the original string is returned 


// sol

// const addstring = (str) => str.slice(0,3).concat(str.slice(-3))
// console.log(addstring("123456789"));



// 6. // WAP in js to extract the first half of a string of even length 

// sol

// const firsthalf = (str) => str.slice(0,(str.length)/2)
// console.log(firsthalf("1234567898"));



// 7. // WAP in js to concatenate two string except their first chracter

// sol


// const concatstring = (str1,str2) => str1.slice(1).concat(str2.slice(1));
// console.log(concatstring("123","456"));
  


// 8.  // WAP in js to find out which one is nearest to 100


// sol

// const nearest100 = (num1,num2) => {
//     if (100-num1<100-num2) {
//         return `${num1} is closest to hundread`
//     }
//     return `${num2} is closest to hundread`
// } 
// console.log(nearest100(80,70));



// 9. WAP in js to check a given string contains 2 to 4 occurance of a specified character

// sol

//  ex : lalalalal

// const occurance = (str,char) => {
//  a = Array.from(Array(str)+1).filter(ch => ch === char).length
//   if (a>=2 && a<=4) {
//     return true
//   }
//   return false 
// }
// console.log(occurance("lsssss" , "s"));
// console.log(a);



// 10.  WAP in js to find out the nno of even no's from an array 


// const evennos = (arr) => arr.filter(num => num%2 === 0).length 
// console.log(evennos([1,2,3,4,5,6,7,8,10,24]));

// 11.  WAP to find the number of even no in a given no 
// EX: 5 : 1,2,3,4,5 so the noo of even nos is 2;


// sol

// const evennos = (num) => Array.from(Array(num+1).keys()).slice(1).filter(num1 => num1%2 === 0).length

// console.log(evennos(6));



// 12 .  WAP in js to check weather an array is in ascending order or not

// sol

// const ascendingorder = (arr) => {
//     for (let i = 0; i < arr.length; i+=1) {
//         if ((arr[i])>(arr[i+1])) {
//             return `${arr} is not in ascending order`
//         }
//     }
//     return `${arr} is in ascending order`
// }
// console.log(ascendingorder([1,2,3]));
