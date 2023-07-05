// Select the service container element
const serviceContainer = document.querySelector(".service");

// Select the child div within the service container
const service = document.querySelector(".innerservice");

let isDragging = false;
let startx;
let startXOffset;

// Event listener for when the mouse button is pressed down on the service container
serviceContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startx = e.clientX;
  startXOffset = service.offsetLeft;
  serviceContainer.style.cursor = "grabbing";
});

// Event listener for when the mouse enters the service container
serviceContainer.addEventListener("mouseenter", () => {
  serviceContainer.style.cursor = "grab";
});

// Event listener for when the mouse button is released anywhere on the window
window.addEventListener("mouseup", () => {
  isDragging = false;
  serviceContainer.style.cursor = "grab";
});

// Function to update the position of the service element
function updatePosition(newX) {
  service.style.left = `${newX}px`;
  checkBoundary();
}

// Event listener for when the mouse is moved within the service container
serviceContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const newX = startXOffset + e.clientX - startx;

  // Use requestAnimationFrame for smoother animation
  requestAnimationFrame(() => {
    updatePosition(newX);
  });
});

// Function to check and correct the boundary of the service element within the service container
function checkBoundary() {
  let outer = serviceContainer.getBoundingClientRect();
  let inner = service.getBoundingClientRect();

  // If the service element exceeds the left boundary, reset its position to the leftmost edge
  if (inner.left < outer.left) {
    updatePosition(0);
  }
  // If the right edge of the service element exceeds the right boundary, adjust its position to fit within the container
  else if (inner.right > outer.right) {
    updatePosition(outer.width - inner.width);
  }
}

//////////////////////////////////////////////////////////////////////////
// Select the testimony container element
const testimonyContainer = document.querySelector(".testimony-container");
// Select the testimony inner element
const testimonyInner = document.querySelector(".testimony-inner");

// Variables to store initial state and positions
let starty;
let startYOffset;

// Event listener for mouse down on the testimony inner element
testimonyInner.addEventListener("mousedown", (e) => {
  // Update the initial state and positions
  pressed = true;
  starty = e.clientY;
  startYOffset = testimonyInner.offsetTop;
  testimonyInner.style.cursor = "grabbing";
});

// Event listener for mouse enter on the testimony inner element
testimonyInner.addEventListener("mouseenter", () => {
  testimonyInner.style.cursor = "grab";
});

// Event listener for mouse up anywhere in the window
window.addEventListener("mouseup", () => {
  pressed = false;
  testimonyInner.style.cursor = "grab";
});

// Event listener for mouse move on the testimony container element
testimonyContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return; // If mouse button is not pressed, return

  e.preventDefault();

  // Calculate the new y-coordinate based on initial positions and mouse movement
  const newY = startYOffset + e.clientY - starty;

  // Update the top position of the testimony inner element
  testimonyInner.style.top = `${newY}px`;

  // Check and adjust boundaries
  checkBoundary2();
});

// Function to check and adjust the boundaries of the testimony inner element
function checkBoundary2() {
  // Get the boundaries of the testimony container and testimony inner elements
  let outer = testimonyContainer.getBoundingClientRect();
  let inner = testimonyInner.getBoundingClientRect();

  // Check if the top position is outside the container
  if (parseInt(testimonyInner.style.top) > 0) {
    testimonyInner.style.top = "0px";
  }
  // Check if the bottom of the testimony inner element is below the container
  else if (inner.bottom < outer.bottom) {
    testimonyInner.style.top = `${outer.height - inner.height}px`;
  }
}

// Example explained for a 7-year-old:
// Imagine you have a box (testimony container) with a smaller box (testimony inner) inside it.
// When you press and hold the smaller box and move your mouse, the smaller box will move up and down inside the bigger box.
// But we don't want the
