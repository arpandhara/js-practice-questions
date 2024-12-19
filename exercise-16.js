// WAP in js to replace the first digit in a string (should contains at least digit) with $ character

// ex: "lala123"
// output : "lala$23"




const replacefirstdigit = (str) => str.replace(/[0-9]/ , '$');


console.log(replacefirstdigit("ahh893hkka"))
