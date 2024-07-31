// console.log(document.querySelectorAll("h1"));
const h1 = document.getElementById("header");
const container = document.getElementById("container");
const valuField = document.getElementById("value");
const button = document.querySelector("#click");
// change style
const body = document.querySelector("body");
// body.style.backgroundColor = "red";
h1.innerText = "hello brother 2";
// get element by id and classname
console.log(document.getElementById("header"));

// get innertext and innerhtml mean content
console.log(document.getElementById("header"));

//set inner html and innertext
container.innerHTML = `<h1>helllo world 2</h1>`;

// query selector
// off topic dynamic query selector
//  const input = document.querySelector('input[name="username"]');
console.log(document.querySelector("#container"));

// set attribute

// event listener
button.addEventListener("click", function () {
  valuField.innerText = parseInt(valuField.innerText) + 1;
});

// get inner element using parent.children

// creating an dom element and append his child
const divElement = document.createElement("div");
divElement.innerHTML = `<P>dhaka bangladesh</P>`;
container.appendChild(divElement);
