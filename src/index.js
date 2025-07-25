import "./styles.css";

// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("visible");
  hamburger.classList.toggle("close");
});

// TOGGLE
const toggle = document.querySelector(".toggle");
const toggleBall = toggle.querySelector(".toggle-ball");
const monthly = document.querySelector(".monthly-text");
const yearly = document.querySelector(".yearly-text");
const priceBoxes = document.querySelectorAll(".price-box");
const prices = [
  { priceTime: "monthly", prices: [24, 39, 79] },
  { priceTime: "yearly", prices: [17, 32, 52] },
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

  const priceList = prices.filter((item) => item.priceTime === pricing)[0]
    .prices;
  for (let i = 0; i < 3; i++) {
    const price = priceBoxes[i].querySelector(".price>.amount");
    if (pricing === "yearly") {
      const billedYearly = document.createElement("p");
      billedYearly.innerHTML = "Billed yearly";
      billedYearly.style = "justify-self: flex-end; font-size:1rem;";
      billedYearly.classList.add("billed-yearly");
      priceBoxes[i].appendChild(billedYearly);
    } else {
      priceBoxes[i].removeChild(priceBoxes[i].querySelector(".billed-yearly"));
    }
    price.innerHTML = priceList[i];
  }
});

// FAQ Accordion
const accordionQuestions = document.querySelectorAll("#faq > .faqs .question");
accordionQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    answer.classList.toggle("visible");
  });
});

// FOOTER DROPDOWN ARROWS
const dropdownArrows = document.querySelectorAll(".dropdown-arrow");

dropdownArrows.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    const dropdownList = arrow.nextElementSibling;
    dropdownList.classList.toggle("visible");
  }),
);
