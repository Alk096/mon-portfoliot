/*==============NAV SHADOW ====================*/
const header = document.getElementById("header");

const shadowHeader = () => {
  this.scrollY >= 45
    ? header.classList.add("nav_shadow")
    : header.classList.remove("nav_shadow");
};

window.addEventListener("scroll", shadowHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 250,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector("a[href*=" + sectionId + "]");
    if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
      sectionsClass.parentElement.classList.add("nav-active-link");
    } else {
      sectionsClass.parentElement.classList.remove("nav-active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*============= dark/light =============== */
const lightToggler = document.getElementById("light-toggle");
const body = document.body;

// Icônes pour les modes
const lightIcon = "ri-sun-fill";
const darkIcon = "ri-moon-fill";

// Vérifiez si un mode est déjà enregistré dans le localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  lightToggler.innerHTML = `<i class="${lightIcon}"></i>`;
} else lightToggler.innerHTML = `<i class="${darkIcon}"></i>`;

// Ajoutez un événement pour basculer entre les modes
lightToggler.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Changez l'icône
  if (body.classList.contains("dark-mode")) {
    lightToggler.innerHTML = `<i class="${lightIcon}"></i>`;
    localStorage.setItem("theme", "dark"); // Enregistrez le mode sombre
  } else {
    lightToggler.innerHTML = `<i class="${darkIcon}"></i>`;
    localStorage.setItem("theme", "light"); // Enregistrez le mode clair
  }
});
/*=========== Nav btn-toggle ===========*/
const btn_burger = document.querySelector(".menu-toggle"),
  btn_close = document.querySelector(".side-nav-clode");
sideNavBar = document.querySelector(".side-navbar");

btn_burger.addEventListener("click", () => {
  sideNavBar.classList.add('side-navbar-open')
})
btn_close.addEventListener("click", () => {
  sideNavBar.classList.remove('side-navbar-open')
});
// /*========= Contact ===========*/
const textarea = document.getElementById("auto-resize-textarea");
const textarea_left = document.querySelector(".textarea-left");


textarea.addEventListener("input", () => {
    textarea.style.height = "2rem";
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea_left.style.height = `${textarea.scrollHeight}px`;
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

/*===================== EXTRA ======================*/
/*==================================================*/
/*=================================================*/

/*============= efft parallax====== */
const canvas = document.getElementById("background-grid");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawGrid(offset) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 1;

  let spacing = 50;
  for (let x = 0; x < canvas.width; x += spacing) {
    for (let y = 0; y < canvas.height; y += spacing) {
      ctx.beginPath();
      ctx.arc(
        x + ((offset * 0.2) % spacing), // décalage horizontal
        y + ((offset * 0.2) % spacing), // décalage vertical
        2,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(0, 255, 180, 0.2)";
      ctx.fill();
    }
  }
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop <= window.innerHeight) {
    drawGrid(scrollTop);
  }
});

// premier dessin
drawGrid(0);

/*============= Scrollreveal ================ */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(`.headline`, { duration: 500 });
sr.reveal(`.presentation`, { origin: "left" });
sr.reveal(`.xp,.social-media`, { duration: 4500, origin: "bottom" });
sr.reveal(`.prsentation`, { origin: "left", duration: 700 });
sr.reveal(`.picture`, { origin: "right" });

/*=========== swiper ============== */
let swiperSkills = new Swiper(".swiper", {
  loop: true,
  loopedSlides: 100,
  spaceBetween: 44,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    reverseDirection: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
