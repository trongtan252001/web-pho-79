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
  dots[slideIndex - 1].className += " active";
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
