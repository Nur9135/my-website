 

/* ================= SCROLL ANIMATION ================= */
// Select all sections
const sections = document.querySelectorAll("section");

// Add "show" class when section enters viewport
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});


 const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
/* ================= TYPING ANIMATION ================= */
// Texts to display in typing effect
const textArray = [
   "IT Support Specialist",
  "Full Stack Developer",
  "Help Desk Engineer",
  "Web Application Developer",
  "Backend Developer",
  "Frontend Developer",
  "System Troubleshooter",
  "Technical Support Engineer",
  "Automation Enthusiast",
  "Database Handler",
  "API Developer"
];

let i = 0;            // Current text index
let j = 0;            // Character index
let currentText = ""; // Current word
let isDeleting = false; // Typing or deleting state

function type() {
  currentText = textArray[i];

  // Increase or decrease character index
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  // Display substring
  document.getElementById("typing").innerText =
    currentText.substring(0, j);

  // When word is fully typed
  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000); // Pause before deleting
    return;
  }

  // When word is fully deleted
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % textArray.length; // Move to next word
  }

  // Speed control
  setTimeout(type, isDeleting ? 50 : 100);
}

// Start typing animation
type();

 

 const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
});

const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  projectCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
});



/* ================= LOADER ================= */
// Hide loader once page is fully loaded
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

/* ================= SCROLL PROGRESS BAR ================= */
// Update progress bar width based on scroll position
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progress = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width =
    progress + "%";
});

/* ================= 3D IMAGE TILT EFFECT ================= */
// Select image wrapper
const imageWrapper = document.querySelector(".image-wrapper");

// Tilt image based on mouse position
document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.clientX) / 25;
  let y = (window.innerHeight / 2 - e.clientY) / 25;

  imageWrapper.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* ================= ADVANCED MOUSE EFFECT ================= */
// Wrapper reference (same element reused)
const wrapper = document.querySelector(".image-wrapper");

// Note: "body::before" cannot be selected in JS directly
// (pseudo-elements are controlled via CSS variables instead)
const spotlight = document.querySelector("body::before");

// Mouse movement for advanced lighting + tilt effect
document.addEventListener("mousemove", (e) => {

  let x = (window.innerWidth / 2 - e.clientX) / 20;
  let y = (window.innerHeight / 2 - e.clientY) / 20;

  // Apply 3D rotation
  wrapper.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;

  // Update CSS variables for spotlight effect
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');

  // Optional dynamic background positioning
  document.body.style.setProperty(
    'background-position',
    `${e.clientX}px ${e.clientY}px`
  );
});


 window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "rgba(2,6,23,0.8)";
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
  } else {
    nav.style.background = "#020617";
    nav.style.boxShadow = "none";
  }
});

const aboutText = document.querySelector(".about-text");

window.addEventListener("scroll", () => {
  let pos = aboutText.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    aboutText.classList.add("show");
  }
});

 

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: .8
     
  }
);

reveals.forEach((el) => observer.observe(el));