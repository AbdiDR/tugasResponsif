// Animasi Scroll To Top
const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");

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

// Efek Parallax
const homeHero = document.querySelector(".home-hero");

window.addEventListener("scroll", () => {
  const scrollPos = window.pageYOffset;
  homeHero.style.backgroundPositionY = `${scrollPos * 0.7}px`;
});
