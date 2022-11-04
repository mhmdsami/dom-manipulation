const makeItBold = document.querySelector(".bold-with-js");
const addButton = document.querySelector("#add-btn");

// bold the text within .bold-with-js
makeItBold.style.fontWeight = "bold";

// change the background and text color of the website
// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";

// manipulating css variables
const root = document.querySelector(":root");
root.style.setProperty("--bg-color", "#000");
root.style.setProperty("--font-color", "#fff");

// manipulating classes
// addButton.classList.add("my-button");
