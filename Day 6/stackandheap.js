let age = 25; // number --> Stack
let name = "Aryan"; // string --> Stack
 
let user = { // object --> Heap
    name: "Aryan",
    age: 25
}
let x = 5;
let y = x; // copy of value of x is stored in y
 
// Refrence copy (Heap)
let obj1 = { name: "Aryan" }; // heap
let obj2 = obj1;
//-> here the variable is storing the data along with the reference so the value will change in both the variables as we change one variable.
obj2.name = "Arush";
console.log(obj1.name); // obj1 and obj2 are referencing the same object in heap, so change in obj2 reflects in obj1