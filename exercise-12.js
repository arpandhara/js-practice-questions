// WAP in js to find out the nno of even no's from an array 



const noofevennos = (arr) => 
    arr.filter(num => num % 2 === 0).length;

console.log(noofevennos([1, 2, 3, 4, 5, 6, 7, 8, 9]));



// another way 

function noofevennos1 (arr) {
   let a = arr.filter((num) => num%2 === 0).length;
   return a
}
console.log(noofevennos1([1,2,34]));

