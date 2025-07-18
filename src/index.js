import "./styles.css";
import hamburgerImg from "./images/hamburger.svg";
import closeImg from "./images/close.svg";

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
