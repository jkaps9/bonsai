import "./styles.css";
import hamburgerImg from "./images/hamburger.svg";
import closeImg from "./images/close.svg";

// MOBILE MENU
const menuIcon = document.querySelector("#hamburger");
let menuOpen = false;
const menu = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuIcon.src = closeImg;
    menu.classList.add("visible");
  } else {
    menuIcon.src = hamburgerImg;
    menu.classList.remove("visible");
  }
});

// TOGGLE
const toggle = document.querySelector(".toggle");
const toggleBall = toggle.querySelector(".toggle-ball");
const monthly = document.querySelector(".monthly-text");
const yearly = document.querySelector(".yearly-text");
let pricing = "monthly";

toggle.addEventListener("click", () => {
  if (pricing === "monthly") {
    // Move to yearly
    pricing = "yearly";
    monthly.style = "opacity: 0.65;";
    yearly.style = "opacity: 1;";
    toggleBall.style = "transform: translateX(21px);";
  } else {
    // Move to monthly
    pricing = "monthly";
    monthly.style = "opacity: 1;";
    yearly.style = "opacity: 0.65;";
    toggleBall.style = "transform: translateX(0);";
  }
});
