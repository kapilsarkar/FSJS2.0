// 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const str='Facebook Google Microsoft Apple IBM Oracle Amazon';
const split=str.split(' ,');
console.log(split);

//Same thing bt function approach-
function new1(){
  let arr='Facebook Google Microsoft Apple IBM Oracle Amazon';
  const arr2=arr.split(' ,');
  console.log(arr2);
}new1();
