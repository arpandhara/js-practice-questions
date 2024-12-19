// WAP in js to generate a random rgb color code


const randomcolor = () => {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
console.log(randomcolor());



