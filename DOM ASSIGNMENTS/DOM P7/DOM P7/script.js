//Remove the languages that have 2.0 in their name Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.

//Task-1

//Remove the languages that have 2.0 in their name-


let courses = document.querySelectorAll(".main__languages a");
for(let i=0; i< courses.length; i++)
{
    if(courses[i].innerHTML.includes("2.0")){
        courses[i].style.display = "none";
    }
}


//Task-2

//Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.

let inputtxt = document.querySelector(".main__form-input");

inputtxt.disabled = false;


let submitbtn = document.querySelector(".main__form-btn");

submitbtn.disabled = false;


submitbtn.addEventListener("click", (refresh) => {

    for(let j=0; j< courses.length; j++) {
        if(courses[j].innerHTML.includes("2.0")){
            courses[j].style.display = "inline";
        }
    }
});




