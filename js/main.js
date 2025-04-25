/*==============NAV SHADOW ====================*/
const header = document.getElementById("header")

const shadowHeader = ()=>{
	this.scrollY >= 45 ? header.classList.add("nav_shadow") :
		header.classList.remove("nav_shadow")
}

window.addEventListener('scroll',shadowHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
		sectionTop = current.offsetTop - 250,
		sectionId = current.getAttribute("id"),
		sectionsClass = document.querySelector("a[href*=" + sectionId +"]");
    if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
		sectionsClass.classList.add("nav-active-link");
    } else {
    	sectionsClass.classList.remove("nav-active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// /*========= SUBMIT ===========*/
// const form = document.querySelector('form');

// form.addEventListener('submit',(e)=> {
// 	e.preventDefault();
// 	// console.log('rdsgfd')
// })