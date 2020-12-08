const timeline = gsap.timeline({
  defaults: { duration: 1 },
});
timeline
  .from("nav", { y: "-100%", ease: "bounce" })
  .from(".nav__link", { duration: 0.5, opacity: 0, stagger: 0.5 })
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
// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray(".section").forEach((section) => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top top",
//     pin: true,
//     pinSpacing: false,
//     ease: "ease",
//   });
// });
