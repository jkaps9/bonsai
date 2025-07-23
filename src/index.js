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
const priceBoxes = document.querySelectorAll(".price-box");
const prices = [
	{priceTime: "monthly", prices: [24,39,79]}, 
	{priceTime: "yearly", prices: [17,32,52]}
];
let pricing = "monthly";
//const header = document.querySelector(".section-header");
//const errorDiv = document.createElement("div");
//header.appendChild(errorDiv);
toggle.addEventListener("click", () => {
  if (pricing === "monthly") {
    // Move to yearly
    pricing = "yearly";
    monthly.style = "opacity: 0.65;";
    yearly.style = "opacity: 1;";
    toggleBall.style = "transform: translateX(21px);";
	  

	  //errorDiv.innerHTML=pricing;
	  //errorDiv.innerHTML+=JSON.stringify(priceList);
	 // header.appendChild(errorDiv);
	    } else {
    // Move to monthly
    pricing = "monthly";
    monthly.style = "opacity: 1;";
    yearly.style = "opacity: 0.65;";
    toggleBall.style = "transform: translateX(0);";
  }

	const priceList = prices
		.filter(item => item.priceTime===pricing)[0]
		.prices;
	  for(let i=0; i<3; i++){
		  const price = priceBoxes[i].querySelector(".price>.amount");
		  if (pricing === "yearly"){
			  const billedYearly = document.createElement("p");
			  billedYearly.innerHTML = "Billed yearly";
			  billedYearly.style="justify-self: flex-end; font-size:1rem;";
			  billedYearly.classList.add("billedYearly");

			  priceBoxes[i].appendChild(billedYearly);	
		  }
	 	 price.innerHTML = priceList[i];
	  }
});
