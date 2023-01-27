// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

// function prime(num)
// {
//    if(num==0 || num==1)
//    {
//      return `${num} is not a prime number`;
//    }
//     for (let i=2; i<=num/2; i++)
//     {
//         if(num%i==0)
//         {
//             return `${num} is not a prime number`;
//         }
//     }
//     return `${num} is aprime number`;
// }


function prime(num)
{
    if(num<=1)
    {
       console.log('Enter a number greater than 1');
       return
    }
    else
    {
        for(let i=2; i<=num; i++)
        {
            let num1=console.log('Prime Number');
            for (let j=2; j<=Math.sqrt(i);j++)
            {
                if(i%j==0)
                {
                   num1= console.log('Not a prime Number');
                    break;
                }
            }
            if(num1){
                console.log(i);
            }

        }
    }
}
let num=100;
prime(num);