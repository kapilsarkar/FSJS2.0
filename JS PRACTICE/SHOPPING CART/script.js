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
    h2.innerHTML =  "- " + userinput.value;
    
    h2.addEventListener("click",function(){
        h2.style.textDecoration = "line-through";
    })
    allitems.insertAdjacentElement("beforeend",h2);

    userinput.value = "";
}