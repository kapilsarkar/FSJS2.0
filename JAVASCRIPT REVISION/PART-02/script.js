console.log("Hello Kapil");
let n = "100"
console.log(typeof n); //Number Data Type can be converted into String 

let n1 = +'100'
console.log(typeof n1);  //String Data Type can be converted into Number

let n2= -'100'
console.log(typeof n2); //Here also it is converted into nummber but negative number.

//String Data Type can be converted into number by the help of + or - and not * or /

let n3 = parseInt('100Kapil')
console.log(typeof n3);

//ParesInt is a advenced method of conversion of Data Type from string to number

let n4 = 100 + 'Kapil'
console.log(typeof n4);  //Conversion from Number to String

let n5 =true;
console.log(typeof n5);

let n6 = +true
console.log(typeof n6);//Conversion of Boolen Data Type to Number

let n7= undefined
console.log(typeof n7);

let n8 = null
console.log(typeof n8);

let m9 = NaN
console.log(typeof n9);

let n10 = BigInt
console.log(typeof n10);