// WAP in js to convert a comma-separated value string to a 2D array .A new line indicates a new row in the array 
/* example : abc,def,ghi
             jkl,mno,pqr
             stu,vwx,yza
*/


const parsecsv = (csvstring) => 
    csvstring.split('\n').map(row => row.split(','));

const a = ` abc,def,ghi
            jkl,mno,pqr
            stu,vwx,yza`

console.log(parsecsv(a));



