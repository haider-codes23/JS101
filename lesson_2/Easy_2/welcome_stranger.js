
let nameArray = ["Haider", "Ali"];
let personObject = {
  title: "Beginner",
  occupation: "Programmer",
};


let greetings = (nameArray, personObject) => {
  return (`Hello, ${nameArray.join(' ')}! It's Nice to have a ${personObject.title} ${personObject.occupation} with us.`);
};

console.log(greetings(nameArray, personObject));