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

//change all h3 background color and change contact navigation menu to "Projects"

// change all h3 background color

let newh3 = document.querySelectorAll("h3");
for(i=0; i< newh3.length; i++){
  newh3[i].style.backgroundColor ="#dadaf8";
}


//change contact navigation menu to "Projects"

let newul = document.querySelector("header nav ul");
newul.lastElementChild.innerHTML ="Projects";