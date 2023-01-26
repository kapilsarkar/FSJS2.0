// 17. Write a program which tells the number of days in a month.

//By If-Else
let month='January'
if(month=='January' || month=='March' || month=='May'||month=='July'||month=='August'||month=='October'||month=='December')
{
    console.log(`Number of Days in a Month is ${month} is 31`);
}
else if(month=='February')
{
    console.log(`Number of Days in a Month is ${month} is 28`);
}
else
{
    console.log(`Number of Days in a Month is ${month} is 30`);
}
//By function

function daysInMonth(month)
{
    let day=new Date(0,month,0).getDate();
    return day;
}
console.log(`Number of Days in a Month is ${daysInMonth(5)}`);