function changeName(name) {
  name = "Haider";
  console.log(name);
}

function anotherFunction() {
  name = "Jim";
  changeName(name);
  console.log(name);
}

anotherFunction();