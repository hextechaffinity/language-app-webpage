var prevScrollpos = window.pageYOffset;
var nav = document.querySelector("nav");
var floatingnav = document.getElementsByClassName("floating-nav")[0];
var floatinglinks = document.getElementsByClassName("floating-nav-links")[0];
floatinglinks.style.top = "-100vh";

function definenav() {
  console.log(window.screen.width)
  if (window.screen.width >= "790") {
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
        floatingnav.style.top = "-200px";
        floatinglinks.style.top = "-100vh";
        floatingnav.querySelector("i").classList.add('bi-list');
        floatingnav.querySelector("i").classList.remove('bi-x');
      } else {
        nav.style.top = "-100px";
        floatingnav.style.top = "2vw";
      }
      prevScrollpos = currentScrollPos;
    } 
  }
  else {
    window.onscroll = null;
    floatingnav.style.top = "2vw";
  }
}

definenav();

window.addEventListener('resize', function() {
  definenav();
}, true);
function togglenav() {
  if (floatinglinks.style.top === "-100vh") {
    floatinglinks.style.top = "2vw";
    floatingnav.querySelector("i").classList.remove('bi-list');
    floatingnav.querySelector("i").classList.add('bi-x');
  }
  else {
    floatinglinks.style.top = "-100vh";
    floatingnav.querySelector("i").classList.add('bi-list');
    floatingnav.querySelector("i").classList.remove('bi-x');
  }
}