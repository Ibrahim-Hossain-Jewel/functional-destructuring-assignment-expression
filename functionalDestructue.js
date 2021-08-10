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
//use function with destructuring expression;
function returnArray() {
    return ['nasima','toshiba','jewel','momena','mofizur'];
}
const [nasima,toshiba,jewel,momena,mofizur] = returnArray();
console.log(nasima);

//now make a function with filter() method in javascript.
function RarrayFilter(arr,term) {
    return arr.filter((t) => {return t=== term});
}
const m = ['nasima','toshiba','jewel','momena','mofizur'];
//now apply destructuring on the filter() method.
const [result1] = RarrayFilter(m,'jewel');
    console.log(result1);
// you can check an gradient is present or not inside a array using filter() method.

const [result2] = RarrayFilter([
    'sokina','morjina','jamena','amena','momena'
,'jewel'],'sokina');
console.log(result2);

//can ignore some value when performing destructuring using comma operator;
const AbunchOfNumber = [1,2,3,4,5,6,7];
const [number1,,,,number2,number3] = AbunchOfNumber;
console.log(number2);
//Can use the rest pattern
function sayHi(firstArg, ...restOfArg) {
    console.log(`Hi, ${firstArg}`);
    console.log(restOfArg);//Rest operator containing all other argument as array return according to that
}
sayHi('jewel',12121,'other argument in javascript');
//Can use rest pattern in an array.
const student = ['simul','parul','korim','jubaer'];
const [simulString,parulString,...otherStudent] = student;
console.log(simulString);
console.log(parulString);
//Now filter the otherStudent rest variable.
console.log(otherStudent.filter((data)=>{
    return data === 'korim';  //filter() method used on an array.
}));

