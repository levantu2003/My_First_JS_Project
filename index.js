let firstName = "Kaiser"; //string
let age = 18; //numbers
let student = true; //boolean

age = age + 1;

console.log("Hello ", firstName);
console.log("You are ", age);
console.log("Enrolled: ", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;