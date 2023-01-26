// 23. Write a program to check that the number given by the user is a prime number or not.

const num=13;
let i;
for(i=2; i<num;i++)
{
    if(num%i==0)
    {
        console.log(`${num} is a prime number`);
        break;
    }
}
if(i==num)
{
    console.log(`${num} is a prime number`);
}