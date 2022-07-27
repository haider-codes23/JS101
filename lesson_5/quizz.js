//Question 2
const ARR = [{one: '1', two: 2}, [{four: 5, three:6}, 'three'], 'three', {'2': 'two', '3': 'three'}];

console.log(ARR[1][0].three);
console.log(ARR[1][0]['three']);

// let todoLists = [
//   {
//     id: 1,
//     listName: 'Groceries',
//     todos: [
//       { id: 1, name: 'Bread', completed: false },
//       { id: 2, name: 'Milk', completed: false },
//       { id: 3, name: 'Apple Juice', completed: false }
//     ]
//   }
// ];

// //console.log(todoLists[0].todos[2].name = 'Orange Juice');
// console.log(todoLists[0]['todos'][2].name);

// function evenValues(array) {
//   let even = [];
//   let counter = 0;
//   array.forEach(value => {
//     counter++;
//     console.log(`value: ${value}`);
//     if (value % 2 === 0) {
//       even.push(value);
//     }
//     let removedValue = array.shift();
//     console.log(`removed value: ${removedValue}`);
//     console.log(`array: ${array}`);
//     console.log(`even: ${even}`);
//     console.log('********************');
//   });

//   return even;
// }

// evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);