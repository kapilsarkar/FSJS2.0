// DOM Assignment 6

//Add Ineuron logo then change price to $10/month and add "linkedin" font awesome icon at end of the footer

//Task1-

//Add Ineuron logo


document.querySelector(".logo").src ="./assets/ineuron-logo.png";


//Task2-

//Change price to $10/month


document.querySelector(".app_price > span").innerHTML ="$10";


//Task3-

//Add "linkedin" font awesome icon at end of the footer

let newicon = document.querySelector(".footer_social");

let div = document.createElement("div");

div.innerHTML = '<i class="fa-brands fa-linkedin"></i>';

newicon.appendChild(div);