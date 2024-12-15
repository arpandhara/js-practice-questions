// WAP in js to get the current date dd-mm-yyy

function formatedate (date = new Date()) {
    const days = date.getDate();
    const months = date.getMonth() +1;
    const year = date.getFullYear();
    return `${days}-${months}-${year}`
}
console.log(formatedate())


// things to know when ever we will work with dates the new Date() get the date for us  

// here's a short way 

const date = new Date();
console.log(`${date.getDate()}-${date.getMonth() +1}-${date.getFullYear()}`);