//Change h1 color and change button color when mouse over-

//Task-1

//Change h1 color-

let headcolor = document.querySelector(".caption .title");

headcolor.style.color ="#dc143c";


//Task-2

//Change button color when mouse hover-


let btnchange = document.querySelector(".add-to-cart");

btnchange.addEventListener("mouseover",changecolor);

function changecolor()
{
    btnchange.style.backgroundColor = "#dc143c";
}

btnchange.addEventListener("mouseout",() => {
    btnchange.style.backgroundColor ="#1C8D73";
});


