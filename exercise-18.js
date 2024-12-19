// WAP in js to compare two objects to determine if the first one contains the same propreties as the second one (which may also have additional properties)

// let obj = {
//     "a": 4 ,
//     "b" : 6
// }
// let obj1 = {
//     "a" : 4,
//     "b" : 6
// }
// if(obj === obj1){
//     return `true`;
// }
// else{
//     return ` false`;
// }

const checkobj = (obj1,obj2) => Object.keys(obj1).every(key => obj2[key]) ;
console.log(checkobj({"a":4 , "b":6 , "c" : 5},{"a":4 , "b":6 , "c": 7}));
