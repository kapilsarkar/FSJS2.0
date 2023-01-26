// Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
let arreven=[];
let arrodd=[];

for(let i=0; i<=100; i++)
{
    if(i%2==0)
    {
        arreven.push(i);
    }
    else
    {
        arrodd.push(i);
    }
}
console.log('Array of Even Numbers :',arreven);
console.log('Array of Odd Numbers :',arrodd);