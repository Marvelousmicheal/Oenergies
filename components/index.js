// Select the counter element
const counterEl = document.querySelector(".counter");

// Select the preloader element
const preLoaderEl = document.querySelector(".preloader");

// Select the loading bar front element
const barEl = document.querySelector(".loading-bar-front");

/////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
// Select the header element
const header = document.querySelector(".header");

// Select all instances of the text-center div
const textCenterElements = document.querySelectorAll(".text-center");

// Select all instances of the pr class
const prElements = document.querySelectorAll(".pr");
const plElement = document.querySelector(".pl");

let idx = 0;

update();

function update() {
  counterEl.textContent = `${idx}%`;
  barEl.style.width = `${idx}%`;
  idx++;
  if (idx < 101) {
    setTimeout(update, 20);

    if (idx === 100) {
      preLoaderEl.style.opacity = 0;
    }
  }
}
setTimeout(() => {
  // Set initial position of header above the top of the screen
  gsap.set(header, { y: -header.offsetHeight });

  // Animate header to move from outside the top to inside the screen
  gsap.to(header, {
    duration: 2,
    y: 0,
    ease: "power2.out",
  });

  // Loop through each text-center element
  textCenterElements.forEach((textCenter) => {
    // Animate the components inside each text-center div
    gsap.fromTo(
      textCenter.children,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "slow",
        scrollTrigger: {
          trigger: textCenter,
          start: "top 80%", // Adjust the start value as per your needs
        },
      }
    );
  });

  // Loop through each pr element
  prElements.forEach((pr) => {
    // Animate the children inside each pr element
    gsap.fromTo(
      pr.children,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        ease: "slow",
        scrollTrigger: {
          trigger: pr,
          start: "top 80%",
        },
      }
    );
  });

  // Animate the children inside the pl element
  gsap.fromTo(
    plElement.children,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: "slow",
      scrollTrigger: {
        trigger: plElement,
        start: "top 80%",
      },
    }
  );
}, 2000);

////////////////
const serviesContainer = document.querySelector(".service");
const service = document.querySelectorAll(".child-div");

let currentservice = 3;
let timeout;

const updateService = () => {
  if (currentservice > service.length) {
    currentservice = 1;
  } else if (currentservice < 3) {
    currentservice = service.length;
  }
  serviesContainer.style.transform = `translateX(-${
    (currentservice - 1) * 120
  }px)`;

  timeout = setTimeout(() => {
    currentservice++;
    updateService();
  }, 5000);
};
updateService();
//////////////////////////////////////
const testimonyContainer = document.querySelector(".testimony-container");
const testimony = document.querySelectorAll(".testimony");

let currenttestimony = 2;
let timeout2;

const updateTest = () => {
  if (currenttestimony > testimony.length) {
   currenttestimony = 1;
  } else if (currenttestimony < 2) {
   currenttestimony = testimony.length;
  }
  testimonyContainer.style.transform = `translateY(-${
    (currenttestimony - 1) * 120
  }px)`;

  timeout2 = setTimeout(() => {
   currenttestimony++;
   updateTest();
  }, 5000);
};
updateTest();