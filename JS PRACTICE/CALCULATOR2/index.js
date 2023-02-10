// let result1 = document.getElementById("inputtext");

// function display(num){
//    outputscreen.value +=num;
// }
// function Calculate(){
//     try{
//         outputscreen.value
//     }
// }
// const value=0;
// let display = (number)=> {
//     result1.value += number;
// }

let outputscreen = document.getElementById("inputtext");

function display(num){
   outputscreen.value += num;
}

function Calculate(){
   try{
      outputscreen.value = eval(outputscreen.value);
   }
   catch(err)
   {
      alert("Invalid")
   }
}
function Clear()
{
   outputscreen.value= " ";

}

function del()
{
   outputscreen.value = outputscreen .value .slice(0,-1);
}
   