//Getting reference to the div already in the index.html file
const container = document.querySelector('#container');

const content = document.createElement('div');
//Adding class and text to the div created
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

//Create new div and set attributes
const newdiv = document.createElement('div');
newdiv.setAttribute('style','background: pink; border:5px solid black');

//Create new elements to be added
const pcontent = document.createElement('p');
const hcontent = document.createElement('h3');
hcontent.setAttribute('style','color: blue');
const newdivcontent = document.createElement('h1');
const newdivcontent2 = document.createElement('p');

//Fill in text content for elements
newdivcontent.textContent = "I'm in a div"
newdivcontent2.textContent = "ME TOO!"
pcontent.textContent = "Hey I'm red!";
hcontent.textContent = "I'm a blue h3!";

//Append all the elements
newdiv.appendChild(newdivcontent);
newdiv.appendChild(newdivcontent2);
container.appendChild(newdiv);
container.appendChild(content);
container.appendChild(pcontent);
container.appendChild(hcontent);
