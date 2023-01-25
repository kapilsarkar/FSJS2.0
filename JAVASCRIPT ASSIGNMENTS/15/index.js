// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

function grades(marks)
{
    if(marks>=80 && marks <=100)
    {
        console.log(' Student Gets A Grade');
    }
    else if(marks>=70 && marks <=89)
    {
        console.log('Student Gets B Grade ');
    }
    else if(marks >=60 && marks <=69)
    {
        console.log('Student Gets C Grade ');
    }
    else if(marks >=50 && marks <=59)
    {
        console.log('Student Gets D Grade ');
    }
    else if(marks >=0 && marks <=49)
    {
        console.log('Student Gets F Grade ');
    }
    
};
grades(90);