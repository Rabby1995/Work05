$(document).ready(function(){
    $('.bxslider').bxSlider();
    $('#menu').slicknav();

   
   
   
   
   /* Service Section */
    $('.services').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:2
          },
          576:{
              items:3
          },
          768:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })

  $( ".owl-prev").html('&#129064; PREV');
  $( ".owl-next").html('NEXT &#129066;');
    


   /* Our Case Part */
   $('.case_bottom').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="far fa-arrow-alt-circle-left"></i>','<i class="far fa-arrow-alt-circle-right"></i>'],
    navClass:['owl-prev','owl-next'],
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
  


/* Our Consultation Part */
$('.author_left').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="far fa-arrow-alt-circle-left"></i>','<i class="far fa-arrow-alt-circle-right"></i>'],
    navClass:['owl-prev','owl-next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  });

  /* Video Section */
  var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn").src="../images/vid_icon.png";

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause";
  } else {
    video.pause();
    btn.innerHTML = "play";
  }
}

/* FAQ Part */
var coll = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}