// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// On page load – apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});


// for hero section image 

  const heroImg = document.getElementById('hero-img');

  heroImg.addEventListener('mouseenter', () => {
    heroImg.classList.add('active-border');
  });

  heroImg.addEventListener('mouseleave', () => {
    heroImg.classList.remove('active-border');
  });


//   ================ CERTIFICATION SECTION ================ 

  const modal = document.getElementById("cert-modal");
  const iframe = document.getElementById("cert-frame");
  const closeBtn = document.querySelector(".cert-close");
  const certBtns = document.querySelectorAll(".cert-btn, .view-cert-btn");

  certBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const file = btn.getAttribute("data-cert");
      iframe.src = file;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });

