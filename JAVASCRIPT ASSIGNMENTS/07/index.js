// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let arr=['We','Welcome','pw skills','welcomes you','pw skills'];
 let last=arr.lastIndexOf('pw skills');


 let first=(arr.length-1)-arr.reverse().lastIndexOf('pw skills');

let result=`The First Occurence of pw skills is as at :${first} and The Last Occurence of pw skills is at : ${last}`;
console.log(result);