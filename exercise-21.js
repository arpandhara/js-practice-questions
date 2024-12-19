// WAP in js to return true if the provided predicate function returns true for all elements in a collection , false otherwise 


// sol 


const trueforallvalues = (arr,fn) =>{
 for (let index = 0; index < arr.length; index++) {
  if(!fn(arr[index])) // checks if the function given is true for the element in the arr[index]
    return false; // if it fails then it returns false 
    
 }
 return true;
} 
console.log(trueforallvalues([1,2,3,4,5],(x) => x>3));
