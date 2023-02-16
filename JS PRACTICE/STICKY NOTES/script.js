let container2 = document.getElementsByClassName("container2")[0];

let container3 = document.getElementsByClassName("container3")[0];

let checkIcon = document.getElementById("check-icon");

let xIcon = document.getElementById("x-icon");

let i=0;

xIcon.addEventListener("click",function(){
    typeNote();
})

checkIcon.addEventListener("click",function(){
    createNote();
})

function typeNote()
{
  if(container3.style.display == "none"){
    container3.style.display = "block";
  }

  else{
    container3.style.display = "none";
  }
}

function createNote()
{
  let noteText = document.getElementById("note-text").value;

  let node0 = document.createElement("div");

  let node1 = document.createElement("h1");

  node1.innerHTML = noteText;

  node1.setAttribute("style","width:250px; height:250px; font-size:24px; padding:25px; margin-top:10px;overflow:hidden; box-shodow:0px 10px 24px 0px rgba(0,0,0,0.75)");

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);

  container2.insertAdjacentElement("beforeend",node0);

  node0.addEventListener("mouseenter",function(){
    node0.style.transform ="scale(1.1)";
  })

   node0.addEventListener("mouseleave",function(){
    node0.style.transform ="scale(1)";
   })

   node0.addEventListener("dblclick",function(){
    node0.remove();
    node0.innerHTML ="Note Deleted"
   })

   document.getElementById("note-text").value = "";
}

function margin(){
  let random_margin = ["-5px","1px","5px","10px","15px","20px"];
  return random_margin[Math.floor(Math.random()* random_margin.length)];
}

function rotate(){
  let random_rotate = ["rotate(2deg)", "rotate(3deg)", "rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];

  return random_rotate =[Math.floor(Math.random()* random_rotate.length)];
}

function color(){
  let random_color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#edd328"];

   if(i > random_color.length - 1){
     i = 0;
   }
  return random_color[i++];
}