//Get the button:
mybutton = document.getElementById("myBtn");
var check = false;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function topFunction2() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function animatemenu(x) {
    x.classList.toggle("change");
}
function animatemenu1(x) {
  x.classList.toggle("change1");
}
function animatemenu2(x) {
  x.classList.toggle("change2");
}
function animatemenu3(x) {
  x.classList.toggle("change3");
}