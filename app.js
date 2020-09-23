window.onscroll = function () { navbarStickyFormatter() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarStickyFormatter() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

const navSections = document.querySelectorAll(".nav-section");

const genericObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id")
    if (entry.intersectionRatio > 0) {
      document.querySelector(`a.nav-button[href="#${id}"]`).classList.add("active");
    } else {
      document.querySelector(`a.nav-button[href="#${id}"]`).classList.remove("active");
    }
  })
})

navSections.forEach(elem => genericObserver.observe(elem))
