const name = "Faromika Ifeoluwa Faith";

const height = 9;

const country = 'Nigeria';


console.log("My name is " + name);
console.log("My height is " + height + "m.");
console.log("My country is " + country);

const body = document.querySelector('body');


body.innerHTML = `<div><h1>My name is ${name}</h1><p>My height is ${height}</p>My country is ${country}<p></p></div>`;
