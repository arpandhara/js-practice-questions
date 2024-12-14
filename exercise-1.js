// WAP in js to check two numbers and return true if one of the two numbers id 100 or if the sum of the two numbers is 100;

// method no 1
function twonum(a,b){
    if ((a+b)==100 || a==100 || b==100) {
        return true;
    }
    else{
        return false;
    }
}
console.log(twonum(0,0))


// method 2
// const twonum = (a,b) => a==100 || b==100 || (a+b)==100;
// console.log(twonum(0,0))