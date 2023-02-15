//Task-1
//Change Contact navigation menu to "Projects" name then add new navigation menu after that "Hire Me" and remove fotter social icons.


//Change Contact to Projects-
let ul = document.querySelector("nav ul");
ul.lastElementChild.innerHTML = "Projects";

//Adding Hire Me in navigation menu--

//let li = document.createElement("li");
//li.innerHTML ="<a>Hire Me</a>";
//let list = document.querySelector("header nav ul");
//list.appendChild(li);

//Removing Socila Footer Icons-
//let footer =document.querySelector("footer ul");
//footer.style.visibility="hidden";


//TASK-2
//Change input placeholder text to "Search My Project"

//document.querySelector("input").placeholder = "Search My Project";


//TAST-3
//Change span text and display footer social icons

//let newtxt = document.querySelectorAll(".hero-left-section p span");
//newtxt[1].innerText = "an Employee";
//newtxt[2].innerText = "iNeuron Intelligence Pvt Ltd.";


//Display footer social icon 

//let footer=document.querySelector("footer ul");
//footer.style.visibility = "visible";


//TASK-4

//Change hero avtar image t Hitesh Sir's image

//let newimg = document.querySelector("img");
//newimg.src = "./hiteshsir.jpg";


//**Task 5**

//Add "Support Me" Button next to Chant with me button


let newbtn = document.createElement("button");

newbtn.innerHTML = "Support Me";

let newbtn2 = document.querySelector(".hero-right-section-btns");

newbtn2.appendChild(newbtn);
