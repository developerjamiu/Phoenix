$(document).ready(function() {
  /* Scroll on buttons */
  $(".js--scroll-to-services").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-services").offset().top },
      1000
    );
  });

  $(".js--scroll-to-contact").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-projects").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-projects").offset().top },
      1000
    );
  });
});

/* Set the width of the side navigation to 350px */
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// var body = document.getElementById("body");
// var sidenav = document.getElementById("mySidenav");

// window.onclick = function(event) {
//   if (event.target == body) {
//     sidenav.style.width = "0";
//     this.console.log("clicked");
//   }
// };
