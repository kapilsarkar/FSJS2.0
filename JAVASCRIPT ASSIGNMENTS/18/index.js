// 18. Write a program which tells the number of days in a month, now consider leap year.

function leapyear(year,month)
{
    let leap=new Date(year,month,0).getDate();
    return leap;
}
console.log(leapyear(2021,2));
console.log(leapyear(2000,2));