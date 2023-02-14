//Task-1
//Change Contact navigation menu to "Projects" name then add new navigation menu after that "Hire Me" and remove fotter social icons.


//Change Contact to Projects-
let ul = document.querySelector("nav ul");
ul.lastElementChild.innerHTML = "Projects";

//Adding Hire Me in navigation menu--

let li = document.createElement("li");
li.innerHTML ="<a>Hire Me</a>";
let list = document.querySelector("header nav ul");
list.appendChild(li);

//Removing Socila Footer Icons-
let footer =document.querySelector("footer ul");
//footer.style.display = "none";
footer.style.visibility="hidden";