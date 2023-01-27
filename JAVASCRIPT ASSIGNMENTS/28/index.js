// 28. Write a program to print the given patterns using the loops-

// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let str1='*';
for(let i=0; i<=3; i++)
{
    for(j=1;j<=i;j++)
    {
        str1+='*'
    }
    str1+='\n';
}
console.log(str1);

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let str2='*';
for(let i=0;i<=3;i++)
{
    for(j=0;j<=3;j++)
    {
        str2+='*';
    }
    str2+='\n';
}
console.log(str2);

//c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//	     *
//	    ***
 //	   *****

 let str3='';
 for(let l=1;l<=3;l++){
    for(let m=1;m<=3-l; m++){
        str3+=' ';
    }
    for(let n=0;n<2*l-1;n++){
        str3+='*';
    }
    str3+='\n';
 }
 console.log(str3);