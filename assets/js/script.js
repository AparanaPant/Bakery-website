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

var imagesArray = ["assets/images/yum.jpg",
                   "assets/images/wow.jpg",
                   "assets/images/break.jpg",
                   "assets/images/y.jpg",
                   "assets/images/news.jpg"];

function preloadImg(pictureUrls, callback) {
  var i, j, loaded = 0;
  var imagesArray = [];

  for (i = 0, j = pictureUrls.length; i < j; i++) {
    imagesArray.push(new Image());
  }
  for (i = 0, j = pictureUrls.length; i < j; i++) {
    (function (img, src) {
      img.onload = function () {
        if (++loaded == pictureUrls.length && callback) {
          callback(imagesArray);
        }
      };
      img.src = src;
    }(imagesArray[i], pictureUrls[i]));
  }
};


function roll(imagesArray, currentPos, max){
  if (max < 0) {
    return;
  }
  var slide = $('.parallax-mirror').find('img').attr('src', imagesArray[currentPos].src);
  slide.fadeIn(2500, function() {
    slide.fadeOut(2500, function() {
      currentPos++;
      if(currentPos >= imagesArray.length){
        currentPos = 0;
        max--;
      }
      roll(imagesArray, currentPos, max);
    });
  });
}

$(function () {
  preloadImg(imagesArray, function (imagesArray) {
    roll(imagesArray, 0, 3);
  });
});

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

