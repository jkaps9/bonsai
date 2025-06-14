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
    menu.removeAttribute("style");
  } else {
    menuIcon.src = hamburgerImg;
    menu.style.display = "none";
  }
});
