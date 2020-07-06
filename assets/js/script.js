//--------------------login pop up js-------------------//

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//----------------nav responsive view------------//
(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery);

//****************************nav js ends***************************//

//----------------js for parallax slider (below nav)......//
var slideNo = 1;
Carousel(slideNo);

function Carousel(n){
  var slides = document.getElementsByClassName("image-container");
 
  if (n > slides.length) {
    slideNo = 1;
  }
  if (n < 1) {
    slideNo = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNo - 1].style.display = "block";
 

}
function newSlide(n){
  Carousel(slideNo += n);
}
function currentSlide(n){
  Carousel(slideNo = n);
}

//********************************js for parallax slider ends**************************************** */

//################################## resturent page starts ############################################

//-------------------js for resturent page slider----------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

