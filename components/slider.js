// Select the service container element
const serviceContainer = document.querySelector(".service");

// Select the child div within the service container
const service = document.querySelector(".innerservice");

let isDragging = false;
let startX;
let startXOffset;

// Event listener for touch start on the service container
serviceContainer.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  startXOffset = service.offsetLeft;
  serviceContainer.style.cursor = "grabbing";
});

// Event listener for touch move on the service container
serviceContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const newX = startXOffset + e.touches[0].clientX - startX;

  // Use requestAnimationFrame for smoother animation
  requestAnimationFrame(() => {
    updatePosition(newX);
  });
});

// Event listener for touch end on the window
window.addEventListener("touchend", () => {
  isDragging = false;
  serviceContainer.style.cursor = "grab";
});

// Event listener for when the mouse button is pressed down on the service container
serviceContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
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

  const newX = startXOffset + e.clientX - startX;

  // Use requestAnimationFrame for smoother animation
  requestAnimationFrame(() => {
    updatePosition(newX);
  });
});

// Function to check and correct the boundary of the service element within the service container
function checkBoundary() {
  const outer = serviceContainer.getBoundingClientRect();
  const inner = service.getBoundingClientRect();

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


let startY;
let startYOffset;

// Event listener for touch start on the testimony inner element
testimonyInner.addEventListener("touchstart", (e) => {
  isDragging = true;
  startY = e.touches[0].clientY;
  startYOffset = testimonyInner.offsetTop;
  testimonyInner.style.cursor = "grabbing";
});

// Event listener for touch move on the testimony container element
testimonyContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const newY = startYOffset + e.touches[0].clientY - startY;

  // Update the top position of the testimony inner element
  testimonyInner.style.top = `${newY}px`;

  // Check and adjust boundaries
  checkBoundary();
});

// Event listener for touch end on the window
window.addEventListener("touchend", () => {
  isDragging = false;
  testimonyInner.style.cursor = "grab";
});

// Function to check and adjust the boundaries of the testimony inner element
function checkBoundary() {
  const outer = testimonyContainer.getBoundingClientRect();
  const inner = testimonyInner.getBoundingClientRect();

  // Check if the top position is outside the container
  if (inner.top > outer.top) {
    testimonyInner.style.top = `${outer.top}px`;
  }
  // Check if the bottom of the testimony inner element is below the container
  else if (inner.bottom < outer.bottom) {
    testimonyInner.style.top = `${outer.bottom - inner.height}px`;
  }
}
