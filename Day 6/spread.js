const a = [1, 2, 3];
const b = [3, 4, 5];
 
let c = [...a, ...b, 10];
 
const obj = {
    name: "Aaryan"
}
const obj3 = {
    age: 25
}
 
const obj4 = {...obj1, ...obj3};
console.log(obj4)
// for (let i = 0; i < a.length; i++) {
//     c.push(a[i]);
// }
// for (let i = 0; i < b.length; i++) {
//     c.push(b[i]);
// }
console.log(c);