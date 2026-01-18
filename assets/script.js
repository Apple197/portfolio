const menuButton = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");
const isNavOpen = document.querySelector("#header nav");
const themeToggleButtom = document.querySelector(".theme-mode");
const form = document.querySelector("form");
let isLightThemeActive = localStorage.getItem("theme-mode");

// Navigation Menu Logic's Start Here
menuButton.addEventListener("click", () => {
  body.classList.toggle("active-menu");
});

isNavOpen.addEventListener("click", () => {
  if (body.classList.contains("active-menu")) {
    body.classList.toggle("active-menu");
  }
});

// Theme Mode Logic's Start Here
const lightMode = () => {
  body.classList.add("light-theme");
  localStorage.setItem("theme-mode", "Light");
};

const darkMode = () => {
  body.classList.remove("light-theme");
  localStorage.setItem("theme-mode", "Dark");
};

if (isLightThemeActive === "Light") {
  lightMode();
}

themeToggleButtom.addEventListener("click", () => {
  isLightThemeActive = localStorage.getItem("theme-mode");
  isLightThemeActive !== "Light" ? lightMode() : darkMode();
});

// Form Handler Logic's Start Here
form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.target.reset();
});

// Lenis smooth scroll Logic's Start Here
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  //console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
