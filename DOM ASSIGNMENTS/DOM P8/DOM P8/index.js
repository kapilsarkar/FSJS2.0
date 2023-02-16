//DOM Assignment 8

//Remove navbar add horizontal line and p tag then add red color border to the div and add vertical scrollbar then add background color to white and add responsive navbar toggle button

//Task-1

//Remove navbar and add horizontal line and h3 tag then add red color border to the div and add vertical scrollbar-

//Remove Navbar-

// let nav = document.querySelector(".navbar");

// nav.style.visibility = "hidden";

//document.querySelector(".navbar-brand").innerHTML = "";
//document.querySelector(".navbar-nav").innerHTML = "";

//Add red color border to the div

let divcolor = document.querySelector(".col-lg-4");

divcolor.style.border ="5px solid red";


//Add vertical scrollbar

let list = document.querySelector("aside");

let scrollbar = document.querySelector(".new");

scrollbar.style.overflowY = "scroll";


//Add horizontal line

let aside = document.querySelector(".hr-line");

//aside.overflowY = auto;

list.appendChild(aside);

// Adding h2



let heading= document.createElement("h2");

heading.innerHTML = "This is my custom heading";

heading.classList.add("new-head");

heading.style.color ="#fff";

list.appendChild(heading);


//Task-2

//Add background color to white-


let backcolor = document.querySelector("body");

backcolor.style.background ="#fff";


//Task-3

//Add responsive navbar toggle button-

 let nav = document.querySelector(".navbar");

 nav.style.visibility = "visible";

let togglemenu = document.querySelector(".navbar-toggler");

togglemenu.addEventListener("click", function(){

    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");

})




