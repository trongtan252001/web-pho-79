//  slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    console.log(dots[i].className);
  }
  x[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}

// scroll nav

window.onscroll = function () {
  scrollHideNav();
};
var header = document.getElementById("scroll-hide");

function scrollHideNav() {
  var doc = document.documentElement;
  var w = window;
  var prevScroll = w.pageYOffset || w.scrollY || doc.scrollTop;
  if (window.pageYOffset > 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 500) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//menu mobile
var openMenu = document.querySelector(".menu-btn");
var closeMenu = document.querySelector(".close-menu");
var modalMenu = document.querySelector(".list-menu");
var overlay = document.getElementById("overlay");
openMenu.addEventListener("click", () => {
  modalMenu.classList.add("active");
  overlay.classList.add("active-overlay");
});
closeMenu.addEventListener("click", () => {
  modalMenu.classList.remove("active");
  overlay.classList.remove("active-overlay");
});
overlay.addEventListener("click", () => {
  modalMenu.classList.remove("active");
  overlay.classList.remove("active-overlay");
});

// dropdown mobile
var btDrop = document.getElementById("bt-drop");
var contentDrop = document.getElementById("drowdown-content-id");
var i = 0;
btDrop.addEventListener("click", () => {
  contentDrop.classList.toggle("active");
  i++;
  if (i === 1) {
    btDrop.style.transform = "rotate(270deg)";
  } else if (i === 2) {
    i = 0;
    btDrop.style.transform = "rotate(0deg)";
  }
});
