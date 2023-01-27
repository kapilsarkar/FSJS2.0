// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers




function calculator(num1, operator,num2)
{
    if(operator=='+')
    {
        console.log(`Addition of numbers are :${num1} + ${num2}=`,num1 + num2);
    }
    else if(operator=='-')
    {
        console.log(`Subtraction of numbers are :${num1} - ${num2}=`,num1 - num2);
    }
    else if(operator=='*')
    {
        console.log(`Multiplication of numbers are :${num1} * ${num2}=`,num1 * num2);
    }
    else if(operator=='/')
    {
        console.log(`Division of numbers are :${num1} / ${num2}=`,num1 / num2);
    }
}
calculator(90,'+',90);
calculator(90,'-',90);
calculator(90,'*',90);
calculator(90,'/',90);