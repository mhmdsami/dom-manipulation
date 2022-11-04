const root = document.querySelector(":root");
const themeButton = document.querySelector("#theme-btn");
const addButton = document.querySelector("#add-btn");
const coolStuffsDiv = document.querySelector(".cool-stuffs");
const coolStuffs = document.querySelectorAll(".stuff");
const coolStuffInput = document.querySelector(".stuff-input");

const themes = [
  { background: "#ffffff", font: "#000000" },
  { background: "#212529", font: "#adb5bd" },
  { background: "#d3e4cd", font: "#353535" },
  { background: "#222831", font: "#eaeaed" },
  { background: "#faedf0", font: "#121212" },
];

// function to add cool stuff
function addCoolStuff() {
  const coolStuff = document.createElement("p");
  coolStuff.innerText = coolStuffInput.value;
  coolStuffsDiv.append(coolStuff);
}

// event listner to add more cool stuffs
addButton.addEventListener("click", addCoolStuff);

// function to change the theme
function setTheme() {
  let i = Math.floor(Math.random() * themes.length);

  root.style.setProperty("--bg-color", themes[i].background);
  root.style.setProperty("--font-color", themes[i].font);
}

// event listner to change the theme
themeButton.addEventListener("click", setTheme);
