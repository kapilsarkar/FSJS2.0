const btn = document.querySelector("#clrbtn"); //Selects the button from the html page

const randomclr =() => {                     //function to chane random color
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
}
console.log(randomclr()); //console to check the function is working or not

function changerandomclr(){  //function to link tke randomclr function with the baground body of the page
    document.body.style.backgroundColor= randomclr();
}

btn.addEventListener("click",changerandomclr);  // Now the function name changerandomclr is linked with the button by thr click event listner.