/*FADE IN WHILE SCROLLING*/
const faders = document.querySelectorAll(".fade-in");
const leftTexts = document.querySelectorAll('.left');
const rightTexts = document.querySelectorAll('.right');
const textColors = document.querySelectorAll('h1');
const perfume = document.querySelector('.image-container')

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      leftTexts.forEach((left) => {
        left.classList.add('left-appear')
      });
      rightTexts.forEach((right) => {
        right.classList.add('right-appear')
        });
      textColors.forEach((color) => {
          color.classList.add('change-color')
          });
      perfume.classList.add('image-appear')
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});