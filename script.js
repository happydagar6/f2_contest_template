/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Uses .map() to iterate through the array and log developers
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  // Uses .forEach() to iterate through the array and log developers
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  // Creates a new employee object and appends it to the array
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  
  // Logs the updated array
  console.log(arr);
}

function removeAdmin() {
  // Uses .filter() to return a new array without the 'admin' profession
  arr = arr.filter((employee) => employee.profession !== "admin");
  
  // Logs the updated array
  console.log(arr);
}

function concatenateArray() {
  // Creates a new array with 3 different objects
  let newArr = [
    { id: 5, name: "alex", age: "22", profession: "designer" },
    { id: 6, name: "brad", age: "25", profession: "manager" },
    { id: 7, name: "chloe", age: "21", profession: "analyst" }
  ];
  
  // Uses .concat() to merge the existing array with the new array
  let combinedArray = arr.concat(newArr);
  
  // Logs the concatenated result
  console.log(combinedArray);
}