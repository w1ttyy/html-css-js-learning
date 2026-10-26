const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const heading3 = document.createElement("h3");
heading3.classList.add("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

container.appendChild(heading3);

const divContent = document.createElement("div");
divContent.classList.add("div");
divContent.style.backgroundColor = "pink";
divContent.style.border = "1px solid black";
const headinInDiv = document.createElement("h1");
headinInDiv.classList.add("h1");
headinInDiv.textContent = "I'm in DIV!";
const parInDiv = document.createElement("p");
parInDiv.classList.add("h1");
parInDiv.textContent = "ME TOO!";


const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});



divContent.append(headinInDiv, parInDiv);
container.appendChild(divContent);