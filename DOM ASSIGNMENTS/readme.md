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


# DOM Assignment 4

**Task**
Change background color and text color at the bottom of the cards and change character names

![IMGTASK1](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)


**Solution**

Change background color and text color at the bottom of the cards and change character names


Change character names -

document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer";

document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";


Change background color at the bottom of the cards-

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d";

document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486";

document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f";

document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35";

document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";


Change text color at the bottom of the cards-

document.querySelectorAll(".clash-card__unit-stats").forEach((e) => {e.style.color = "#fff"});

document.querySelectorAll(".stat").forEach((e) => {e.style.color ="#fff"});

document.querySelectorAll(".stat-value").forEach((e) => {e.style.color = "#fff"});


# DOM Assignment 5

**Task**

Add "Pro Subscription" button in navbar then add new recipe "Chinese (7)" in recipe list then change h5 and p tags color and add 6th card.

**Solution**

![IMGITASK](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)


Add "Pro Subscription" button-

let newbtn = document.createElement("a");

newbtn.classList.add("btn");

newbtn.innerHTML ="Pro Subscription";

document.querySelector(".btn").parentElement.appendChild(newbtn);


Adding new recipe "Chinese (7)"-

let element = document.createElement("a");

element.classList.add("tags-container");

element.innerHTML = "Chinese(7)";

document.querySelector(".tags-container div").appendChild(element);


Change h5 and p tags color-

document.querySelectorAll(".recipe-name").forEach((e) => {e.style.color = "#8A2BE2" });


document.querySelectorAll(".recipe-disp").forEach((e) => {e.style.color = "#8A2BE2" });


Adding 6th card-

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


# DOM Assignment 6


Add Ineuron logo then change price to $10/month and add "linkedin" font awesome icon at end of the footer


Add Ineuron logo


**Solution**

**Task-1**

Add Ineuron logo



![TASK1IMG](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)


**Solution**


document.querySelector(".logo").src ="./assets/ineuron-logo.png";


**Task-2**

Change price to $10/month


![TASK1IMG](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)


**Solution**


document.querySelector(".app_price > span").innerHTML ="$10";


**Task-3**

Add "linkedin" font awesome icon at end of the footer

![TASKIMG](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

let newicon = document.querySelector(".footer_social");

let div = document.createElement("div");

div.innerHTML = '<i class="fa-brands fa-linkedin"></i>';

newicon.appendChild(div);


















