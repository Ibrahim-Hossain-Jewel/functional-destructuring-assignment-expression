const name = ['jewel','nasima','toshiba','sumai','kholil'];
//making an ingredient into distinct variable using array.
const distinctVariable = name[2]; //and go so far.
console.log(distinctVariable);
//Now define variable and then perform the destructuring expression in javascript.
let name1,name2,name3;
//Now perform destructuring assignment expression.
[name1,name2,name3='if undefined then setting default message'] = name;
console.log(name1,name2,name3);
//now perform swap program using js with temp variable.
let x = 11;
let y = 12;
let z = 13;
console.log(x,y,z);
const temp = y;
y = z;
z = temp;
//console.log(x,y,z); //swap performed
//now swap two variable using destructure assignment operator
[x,z] = [z,x];
console.log(x,z);

