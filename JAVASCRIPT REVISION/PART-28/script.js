function parent() {
  const a = 10;
  const b = 20;
  function add() {
    console.log(a + b);
  }

  return add;
}

const result = parent();

console.log(result);

console.dir(result);
