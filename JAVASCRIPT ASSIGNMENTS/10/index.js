// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.


//4 > 3
console.log('4>3,This is true','The result is:',`${4>3}`);

//4>=3
console.log('4>=3,This is true','The result is:',`${4>=3}`);
//4<3
console.log('4>3,This is false','The result is:',`${4<3}`);
//4<=3
console.log('4<=3,This is true','The result is:',`${4>3}`);
//4==4
console.log('4==4,This is true','The result is:',`${4==4}`);
//4===4
console.log('4===4,This is true','The result is:',`${4===4}`);
//4!=4
console.log('4!=4,This is false','The result is:',`${4!=4}`);
//4!==4
console.log('4!==4,This is false','The result is:',`${4!==4}`);
//4!='4'
console.log('4!=4,This is false','The result is:',`${4!='4'}`);
//4=='4'
console.log('4==4,This is true','The result is:',`${4=='4'}`);
//4==='4'
console.log('4===4,This is flase','The result is:',`${4==='4'}`);

// Find the length of python and jargon and make a falsy comparison statement.

let val1='python';
let val2='jargon';

let lengthval1=val1.length;
let lengthval2=val2.length;

if(`${lengthval1}`===`${lengthval2}`)
{
    console.log('Length of python and jargon are equal');
}
else
{
  console.log('Length of pyhton and jargon are not equal');
}
