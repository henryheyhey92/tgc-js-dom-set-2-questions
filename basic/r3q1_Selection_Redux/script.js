// PLACE YOUR CODE HERE
//1.
let h2 = document.querySelector('h2');
h2.style.fontSize = "32px";
h2.style.fontFamily = "Verdana";


//2.
let img = document.querySelector('img');
img.style.border = "1px solid black";
img.style.paddingTop = "32px";
img.style.paddingBottom = "15px";


//3.
let facts = document.querySelectorAll('ul>li');
let first = facts.firstChild;
let last = facts.lastElementChild;
first.style.backgroundColor = "yellow";
last.style.backgroundColor = "yellow";