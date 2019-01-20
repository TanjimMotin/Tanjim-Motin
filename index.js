<<<<<<< Updated upstream
<<<<<<< HEAD
/*function myFunction() {
=======
function myFunction() {
>>>>>>> Stashed changes
	demo.innerHTML ="Click me to change my text color"
    document.getElementById("demo").style.color = "red";
}

var box = document.getElementsByClassName("box")[0];
=======
window.onscroll = function() {myFunction()};
>>>>>>> 32cc268345c66b8e5e85d38fcae69135034592cf

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Scroll back to top feature
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    document.getElementById("navbar").style.opacity= "100";
    document.getElementById("navbar").classList = "sticky";
    // document.getElementsByClassName("sticky").style.opacity= "100";
  } else {
    document.getElementById("navbar").style.opacity= "0";
    // document.getElementsByClassName("sticky").style.opacity= "0";
  }
}

<<<<<<< HEAD
var box3 = document.getElementById("box3")
box3.addEventListener('click',changeStyle)


function changeStyle(){
    box3.style.borderRadius = "20%"


}
<<<<<<< Updated upstream
*/
=======
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
>>>>>>> 32cc268345c66b8e5e85d38fcae69135034592cf
=======
>>>>>>> Stashed changes
