# DOM Assignment 1

**TASK 1**
Change Contact navigation menu to "Projects" name then add new navigation menu after that "Hire Me" and remove fotter social icons.

![TASKIMG1](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

**SOLUTION**

//Change Contact to Projects-
let ul = document.querySelector("nav ul");
ul.lastElementChild.innerHTML = "Projects";

//Adding Hire Me in navigation menu--

let li = document.createElement("li");
li.innerHTML ="<a>Hire Me</a>";
let list = document.querySelector("header nav ul");
list.appendChild(li);

//Removing Social Footer Icons-
let footer =document.querySelector("footer ul");
footer.style.visibility="hidden";

**TASK 2**

Change input placeholder text to "Search My Project"

![TASKIMG2](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

**SOLUTION**
document.querySelector("input").placeholder = "Search My Project";

**Task 3**

Change span text and display footer social icons

![TASKIMG3](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

**SOLUTION**

let newtxt = document.querySelectorAll(".hero-left-section p span");
newtxt[1].innerText = "an Employee";
newtxt[2].innerText = "iNeuron Intelligence Pvt Ltd.";

Display footer social icon 

let footer=document.querySelector("footer ul");
footer.style.visibility = "visible";



