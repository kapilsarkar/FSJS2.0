let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


//# DOM Assignment 2
//**Task 1**
//change all h3 background color and change contact navigation menu to "Projects"

// change all h3 background color

let newh3 = document.querySelectorAll("h3");
for(i=0; i< newh3.length; i++){
  newh3[i].style.backgroundColor ="#dadaf8";
}


//change contact navigation menu to "Projects"

let newul = document.querySelector("header nav ul");
newul.lastElementChild.innerHTML ="Projects";


//**Task 2**

// Add h3 with new name "Skills" and also add new paragraph

let element = document.querySelector(".accordian-wrapper");
 let newdiv = document.createElement("div");
 newdiv.classList.add("accordian");
 element.appendChild(newdiv);
 
 // add new h3 "Skills"

 let new2h3 = document.createElement("h3");
 new2h3.innerHTML = "Skills";

 new2h3.style.backgroundColor = "#dadaf8";

 newdiv.appendChild(new2h3);

 // add new paragraph

 let paragraph = document.createElement("p");
 paragraph.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."
 newdiv.appendChild(paragraph);


 // add click function on new h3 


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



