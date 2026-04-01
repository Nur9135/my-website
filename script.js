/* ================= MOBILE TOGGLE MENU ================= */
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

/* Toggle menu */
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

/* Shrink on scroll */
window.addEventListener("scroll", () => {
  navbar.classList.toggle("shrink", window.scrollY > 50);
});





/* ================= PARTICLE BACKGROUND ================= */

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  const particles = document.getElementById("particles-js");

  particles.style.transform = `translate(${x}px, ${y}px)`;
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

document.addEventListener("DOMContentLoaded", () => {

 const elements = document.querySelectorAll(".fade-left, .fade-right, .fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // reverse (optional)
    }
  });
}, {
  threshold: 0.3
});

elements.forEach((el) => observer.observe(el));

 


  /* ================= IMAGE 3D TILT ================= */
  if (imageWrapper) {
    imageWrapper.addEventListener("mousemove", (e) => {
      const rect = imageWrapper.getBoundingClientRect();

      const x = (e.clientX - rect.left - rect.width / 2) / 15;
      const y = (e.clientY - rect.top - rect.height / 2) / 15;

      imageWrapper.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
    });

    imageWrapper.addEventListener("mouseleave", () => {
      imageWrapper.style.transform = "rotateY(0) rotateX(0)";
    });
  }

});


let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      revealOnScroll();
      ticking = false;
    });
    ticking = true;
  }
});



 