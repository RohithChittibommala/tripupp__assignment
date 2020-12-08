const navbar = document.querySelector(`nav ul`);
const isNavbarVisible = navbar.offsetHeight === 0 && navbar.offsetWidth === 0;

const timeline = gsap.timeline({
  defaults: { duration: 1 },
});
console.log(isNavbarVisible);
// animating navbar only when navbar is visible

if (!isNavbarVisible) {
  timeline
    .from("nav", { y: "-100%", ease: "bounce" })
    .from(".nav__link", { duration: 0.5, opacity: 0, stagger: 0.25 })
    .from(".header__image", {
      duration: 1,
      x: "-100vw",
      ease: "power2.in",
    })
    .from(".header__text", {
      duration: 1,
      y: "-100vh",
      ease: "bounce",
    })
    .fromTo(
      "button",
      { opacity: 0, scale: 0, rotation: 720 },
      { duration: 1, opacity: 1, scale: 1, rotation: 0 }
    );
} else {
  console.log("without navbar");
  timeline
    .from("nav", { y: "-100%", ease: "bounce" })
    .from(".header__image", {
      duration: 1,
      x: "-100vw",
      ease: "power2.in",
    })
    .from(".header__text", {
      duration: 1,
      y: "-150vh",
      ease: "bounce",
    })
    .fromTo(
      "button",
      { opacity: 0, scale: 0, rotation: 720 },
      { duration: 1, opacity: 1, scale: 1, rotation: 0 }
    );
}
// hamburger menu
const hamburger = document.querySelector(`.hamburger`);
const hamburgerMenu = document.querySelector(`.nav__links`);
console.log(hamburgerMenu);
hamburger.addEventListener("click", () => {
  const isBarIcon = hamburger.classList.contains("fa-bars");
  if (isBarIcon) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-times");
    hamburgerMenu.style.display = "flex";
    console.log(hamburgerMenu);
  } else {
    hamburger.classList.add("fa-bars");
    hamburger.classList.remove("fa-times");
    hamburgerMenu.style.display = "none";
  }
});
