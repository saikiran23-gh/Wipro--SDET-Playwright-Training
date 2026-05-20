function person(name){
    this.name=name;
}
person.prototype.sayhi=function(){
    console.log("how do you do " + this.name);
}
let greet=new person("HONEY");
greet.sayhi();
console.log(Object.person.prototype(greet)===person.prototype);


// prototype is a function the is used to add the data without disturbing the actual function
//the prototype is like an inheritance concept here the parent of sayhi prototype function is person function.
//here we are going to create object to person function and we will call the prototype function by using that object.
//object.person.prototype prints the object of the parent class that is prototype.person.
// so that here we are comparing that the object.prototype.person is equal to the prototype.person if it is equal then it return true.
//here we can callthe sayhi() as a method.