// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.
var div = document.createElement('div');
div.setAttribute('class', 'planet');
div.style.background="blue";
document.body.appendChild(div);



// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.
var div2 = document.createElement('div');
div2.setAttribute('class','moon');
div.appendChild(div2);
