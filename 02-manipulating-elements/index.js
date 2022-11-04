const myDiv = document.querySelector(".my-div");
const coolStuffsDiv = document.querySelector(".cool-stuffs");
const coolStuffs = document.querySelectorAll(".stuff");
const addButton = document.querySelector("#add-btn");

// modify "another cool stuff" -> nextjs
coolStuffs[1].innerText = "nextjs";

// create one more cool stuff and add it to .cool-stuffs div
const coolStuff = document.createElement("p");
coolStuff.innerText = "more cool stuff";
coolStuffsDiv.append(coolStuff);

// create a input element
const input = document.createElement("input");
input.type = "text";

// append the input to .my-div
myDiv.insertBefore(input, addButton);
