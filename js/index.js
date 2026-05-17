gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".runing-text",
  {
    x: "15%", // start from right
  },
  {
    x: "-85%", // move to left
    ease: "none",
    scrollTrigger: {
      trigger: ".runing-text-wrapper",
      start: "top 59%",
      end: "bottom 20%",
      scrub: 2, // 👈 key: smoother reverse motion
      invalidateOnRefresh: true,
    },
  },
);

const cursor = new MouseFollower({
  container: document.body,
  speed: 0.6,
  skewing: 0.2,
  skewingText: 2,
  stateDetection: true,
});
