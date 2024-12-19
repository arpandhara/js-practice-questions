// WAP in js to check weather an array is in ascending order ir not


// sol

const ascendingorder = (arr) => {
    for (let index = 0; index < arr.length; index+= 1) {
        if ((arr[index + 1]) < arr[index])  return false;
    }
        return true;
}
console.log(ascendingorder([1,2,3,9,4]));
