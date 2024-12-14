// WAP in js to get the extension of a filename

const getfileExtension = (str) =>str.slice(str.lastIndexOf("."));

console.log(getfileExtension('inde.html'))
console.log(getfileExtension("webpack.config.js"))

// here we can find the last index of something by lastIndexOf()
// even we add two dots it will take the last . as we have used lastIndexOf