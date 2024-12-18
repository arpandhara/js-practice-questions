// WAP to find the number of even no in a given no 
// EX: 5 : 1,2,3,4,5 so the noo of even nos is 2;



const evennos = (num) => 
   Array.from(Array(num+1).keys()).splice(1).filter(num => num%2 === 0).length;

console.log(evennos(6))