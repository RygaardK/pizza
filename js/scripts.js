window.onscroll = function() {stickyMenu()};

var navbar = document.getElementsByTagName("nav")[0];
var sticky = navbar.offsetTop;

function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}