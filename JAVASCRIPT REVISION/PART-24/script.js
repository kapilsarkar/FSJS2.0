const userName = "Kapil";
let age = 32;
var a = 50;
function add() {
  const x = 10;
  const y = 20;
  console.log(x + y);
}

add();

console.log("Program Ended");
console.log(window.userName);
console.log(window.a);
console.log(window.age);
console.log(window.add);

//Lexical Scope
function subtract() {
  const x = 60;
  const y = 10;
  const z = 30;
  const w = 100;
  console.log(x - y);

  function child() {
    const childName = "SonaBaba";
    const m = 200;
    console.log(childName);
    console.log(z);
    function grandChild() {
      const grandChildName = "Piku";
      console.log(grandChildName);
      console.log(w, m);
    }
    grandChild();
  }
  child();
}

subtract();

//Block Scope

function One() {
  const first = 100;
  console.log(first);

  function Two() {
    const second = 200;
    console.log(second);
    {
      const three = 300;
      console.log(three);
    }
  }
  Two();
}
One();
