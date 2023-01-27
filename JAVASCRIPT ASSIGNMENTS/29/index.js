// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let filename='index.html';

function extension(file){
    let x = file.lastIndexOf('.');
    let result=file.split(file[x]);
    console.log('Extension of the file is :' + result[result.lenght-1]);
}
extension(filename);


let filename1 = "index.html";
let extension = filename1.split(".").pop();

console.log(extension);
