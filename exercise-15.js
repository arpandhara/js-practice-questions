// WAP  a programme in js to get the largest even number from an array of integers 



// sol



const largestevenno = (arr) => Math.max(...arr.filter(num => num%2 === 0));

console.log(largestevenno([1,2,4,5,100]));
