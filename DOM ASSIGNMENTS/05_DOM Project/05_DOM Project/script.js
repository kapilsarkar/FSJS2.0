//# DOM Assignment 5

//**Task**

//Add "Pro Subscription" button in navbar then add new recipe "Chinese (7)" in recipe list then change h5 and p tags color and add 6th card


// Add "Pro Subscription" button-


let newbtn = document.createElement("a");

newbtn.classList.add("btn");

newbtn.innerHTML ="Pro Subscription";

document.querySelector(".btn").parentElement.appendChild(newbtn);


//Adding new recipe "Chinese (7)"


let element = document.createElement("a");

element.classList.add("tags-container");

element.innerHTML = "Chinese(7)";

document.querySelector(".tags-container div").appendChild(element);


//Change h5 and p tags color

document.querySelectorAll(".recipe-name").forEach((e) => {e.style.color = "#8A2BE2" });

document.querySelectorAll(".recipe-disp").forEach((e) => {e.style.color = "#8A2BE2" });


//Adding 6th card

let card = document.querySelector(".recipe-gallery");

let newcard = document.createElement("div");

newcard.classList.add("card");

card.appendChild(newcard);


let selectcard = document.querySelector(".card:last-child");

let cardimg = document.createElement("img");

cardimg.src = "./img/recipe-3.jpeg";

cardimg.classList.add("recipe-img");

selectcard.appendChild(cardimg);


let heading = document.createElement("h5");

heading.textContent ="New Tomato Soup";

heading.style.color ="#8A2BE2";

heading.classList.add("recipe-name");

selectcard.appendChild(heading);


let paragraph =document.createElement("p");

paragraph.textContent = "Prep : 20min | Cook :50min";

paragraph.style.color= "#8A2BE2";

paragraph.classList.add("recipe-disp");

selectcard.appendChild(paragraph);


