# DOM Assignment 1

**TASK 1**
Change Contact navigation menu to "Projects" name then add new navigation menu after that "Hire Me" and remove fotter social icons.

![TASKIMG1](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

**SOLUTION**

Change Contact to Projects-


let ul = document.querySelector("nav ul");
ul.lastElementChild.innerHTML = "Projects";

Adding Hire Me in navigation menu--

let li = document.createElement("li");
li.innerHTML ="<a>Hire Me</a>";
let list = document.querySelector("header nav ul");
list.appendChild(li);

Removing Social Footer Icons-


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



**Task 4**

Change hero avtar image t Hitesh Sir's image

![TASKIMG4](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)


**SOLUTION**

let newimg = document.querySelector("img");
newimg.src = "./hiteshsir.jpg";


Change Contact to Projects-


let ul = document.querySelector("nav ul");
ul.lastElementChild.innerHTML = "Projects";


**Task 5**

Add "Support Me" Button next to Chant with me button

![TASK5IMG](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)


**SOLUTION**

let newbtn = document.createElement("button");

newbtn.innerHTML = "Support Me";

let newbtn2 = document.querySelector(".hero-right-section-btns");

newbtn2.appendChild(newbtn);


# DOM Assignment 2

change all h3 background color and change contact navigation menu to "Projects"


**Task 1**

 ![TASK1IMG](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

**SOLUTION**


 Change all h3 background color and change contact navigation menu to "Projects"

 Change all h3 background color

 let newh3 = document.querySelectorAll("h3");
for(i=0; i< newh3.length; i++){
  newh3[i].style.backgroundColor ="#dadaf8";
}

change contact navigation menu to "Projects"

let newul = document.querySelector("header nav ul");
newul.lastElementChild.innerHTML ="Projects";

**Task 2**

Add h3 with new name "Skills" and also add new paragraph

![TASKIMG2](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

**Solution**

let element = document.querySelector(".accordian-wrapper");
 let newdiv = document.createElement("div");
 newdiv.classList.add("accordian");
 element.appendChild(newdiv);

 Add new h3 "Skills"

 let new2h3 = document.createElement("h3");
 new2h3.innerHTML = "Skills";

 new2h3.style.backgroundColor = "#dadaf8";

 newdiv.appendChild(new2h3);

  Add new paragraph

  let paragraph = document.createElement("p");
 paragraph.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."
 newdiv.appendChild(paragraph);

 Add click function on new h3 

 let lastaccordian = document.querySelectorAll(".accordian:last-child h3");

 lastaccordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para =element.nextElementSibling;
    if(para.style.display === "block"){
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });

 });

 # DOM Assignment 3

 **Task**

 Change placeholder in every input boxes

 ![IMG2](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

 **Solution**

 User Output Board-


 document.querySelector(".enterName").placeholder = "FSJS2.0";
document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".enterMessage").placeholder = "Hello World";

User Input Board-

document.querySelector(".userName").placeholder = "FSJS2.0";
document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
document.querySelector(".userMessage").placeholder = "Hello World";










