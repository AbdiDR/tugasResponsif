const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weightInput = document.getElementById("weight").value;
  const heightInput = document.getElementById("height").value;
  const result = document.getElementById("result");

  let kg = weightInput;
  let cm = heightInput / 100;
  let bmi = "";

  let finalResult = kg / cm ** 2;
  finalResult = finalResult.toFixed(1);

  if (finalResult >= 30) {
    bmi = "Obesity";
  } else if (finalResult >= 25) {
    bmi = "Overweight";
  } else if (finalResult >= 18.5) {
    bmi = "Normal weight";
  } else {
    bmi = "Under weight";
  }

  result.innerHTML = "Your BMI is <span>" + finalResult + "</span> Which means You are <span>" + bmi + "</span>";
});

// Animasi Scroll To Top
const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");

if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

// Efek Parallax
const homeHero = document.querySelector(".home-hero");

window.addEventListener("scroll", () => {
  const scrollPos = window.pageYOffset;
  homeHero.style.backgroundPositionY = `${scrollPos * 0.7}px`;
});

// Efek Hover Button
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.1)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});
