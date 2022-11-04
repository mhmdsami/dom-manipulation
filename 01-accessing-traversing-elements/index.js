// selecting elements by id
const addBtn = document.getElementById("add-btn");
console.log(addBtn);

// selecting elements by tag
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// selecting elements by class
const coolStuffs = document.getElementsByClassName("cool-stuffs");
console.log(coolStuffs);

// querySelector
const coolStuffsWithQuerySelector = document.querySelector(".cool-stuffs");
console.log(coolStuffsWithQuerySelector);

// querySelectorAll
const coolStuffList = document.querySelectorAll(".stuff");
console.log(coolStuffList);
