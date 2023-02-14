const groceries = document.getElementsByClassName("gorceries")[0];
const pen = document.getElementById("pen");
const allitems = document.getElementById("allitems");
const userinput = document.getElementById("userinput");

pen.addEventListener("click", function(){
    allitems.innerHTML = "";
})

userinput.addEventListener("keydown",function(event){
    if (event.key == "Enter")
    additem();
})

function additem(){
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    h2.innerHTML =  "- " + userinput.value;
    h3.innerText = "Items-Added";
    h3.style.color = "Green";
    
    h2.addEventListener("click",function(){
        h2.style.textDecoration = "line-through";
        h3.innerHTML = "Intems Deleted";
        h3.style.color = "Red";
    })
    allitems.insertAdjacentElement("beforeend",h2);
    allitems.insertAdjacentElement("afterbegin",h3);

    userinput.value = "";
}