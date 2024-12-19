// WAP  in js where ypu will be given a year and report if it is a leap year or not

// sol

const isaleapyear = (year) => year%4 === 0;
console.log(isaleapyear(2028))







// another way 

function isleapyear(year){
    if(year%4 === 0){
        return `is a leap year`;
    }
    else{
        return `is not a leap year`
    }
}
console.log(isleapyear(2024))