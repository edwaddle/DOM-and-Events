const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const red = document.createElement("p");
red.textContent = "Hey I'm red!";
red.style.color = "red";
container.appendChild(red);

const blue = document.createElement("h3");
blue.textContent = "I'm a blue h3!";
blue.setAttribute("style", "color:blue;" );
container.appendChild(blue);

const anotherContainer = document.createElement("div");
anotherContainer.setAttribute("style", "border: solid black 1px; background-color: pink");
const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm a div";
const innerP = document.createElement("p");
innerP.textContent = "ME TOO!";
container.append(anotherContainer);
anotherContainer.append(innerH1);
anotherContainer.append(innerP);

container.appendChild(content);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) { // e regers back to the btn
    console.log(e.target);
  });
  