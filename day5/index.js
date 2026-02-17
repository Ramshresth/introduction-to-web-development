// javascript variables
var fullname = 'Ram Shrestha';
let address = 'kathmandu,Nepal';
const bloodGroup ='A+';

console.log('Full Name :',fullname);
console.log('Address :',address);
console.log('Blood Group:',bloodGroup);

// data types

let name ='Ram'; //String

let age =21; //Number

let isstudent =false; //boolean

let hobbies = ['Coding ','Traveling','Cooking']; //Array

console.log(hobbies[0]);

let user ={
    name: 'ram',
    age: 21,
    isstudent:false,
    hobbies:['Coding ','Traveling','Cooking'],
}; // object

console.log(user['name']);
console.log(user.age);

//function

function greet (name){
    console.log('welcome',name );
}

greet('Ram');
  
//dom manipulation

const headingElementById = document.getElementById('heading-2');
console.log( 'heading the element by id',headingElementById);

const headingElementbyquery = document.querySelector('#heading-2');
console.log( 'heading the element by query',headingElementbyquery);

headingElementbyquery.textContent ='Get element by query selector' ;
headingElementbyquery.style.color ='blue';

const buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click',function() {
alert('Button clicked');
console.log('Button clicked');
});