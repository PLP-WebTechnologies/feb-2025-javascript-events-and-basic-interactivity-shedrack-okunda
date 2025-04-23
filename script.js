// Button Click
const clickButton = document.getElementById("click-button");

clickButton.addEventListener("click", () => {
  clickButton.textContent = "You clicked me!";
  clickButton.style.backgroundColor = "green";
});

// Keypress Detection
const keyInput = document.getElementById("key-input");
const keyCodeDiv = document.getElementById("key-code");

keyInput.addEventListener("keydown", (e) => {
  keyCodeDiv.textContent = `Key Code: ${e.keyCode}`;
});

// Double Click
const doubleClickButton = document.getElementById("dbClick");
let clickCount = 0;

doubleClickButton.addEventListener("dblclick", () => {
  clickCount++;
  if (clickCount % 2 === 0) {
    doubleClickButton.textContent = "Double-clicked!";
    doubleClickButton.style.backgroundColor = "blue";
  } else {
    doubleClickButton.textContent = "Click me!";
    doubleClickButton.style.backgroundColor = "initial";
  }
});

// Interactive Elements
const changeButton = document.getElementById("change-button");

changeButton.addEventListener("click", () => {
  changeButton.textContent = "Changed!";
  changeButton.style.backgroundColor = "purple";
});

// Image Gallery
const mainImage = document.getElementById("main-image");
const thumbnails = document.getElementById("thumbnails").children;

for (const thumbnail of thumbnails) {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.src;
  });
}

// Tabs or Accordion
const tab1Button = document.getElementById("tab1-button");
const tab2Button = document.getElementById("tab2-button");
const tab3Button = document.getElementById("tab3-button");
const tab1Content = document.getElementById("tab1-content");
const tab2Content = document.getElementById("tab2-content");
const tab3Content = document.getElementById("tab3-content");

tab1Button.addEventListener("click", () => {
  tab1Content.style.display = "block";
  tab2Content.style.display = "none";
  tab3Content.style.display = "none";
});

tab2Button.addEventListener("click", () => {
  tab1Content.style.display = "none";
  tab2Content.style.display = "block";
  tab3Content.style.display = "none";
});

tab3Button.addEventListener("click", () => {
  tab1Content.style.display = "none";
  tab2Content.style.display = "none";
  tab3Content.style.display = "block";
});


// Form validation
const form = document.getElementById("my-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
  if (nameInput.value === "" || emailInput.value === "") {
    event.preventDefault();
    alert("Please fill in all required fields.");
  }
});