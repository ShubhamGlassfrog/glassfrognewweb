$(function() {
  var $clientslider = $('#clientlogo');
  var clients = $clientslider.children().length;
  var clientwidth = (clients * 220); 
  $clientslider.css('width', clientwidth);
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  $(document).on({
    mouseenter: function() {
      rotating = false;
    },
    mouseleave: function() {
      rotating = true;
    }
  }, '#ourclients');
  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clientlogo li:first');
      $first.animate({
        'margin-left': '-220px'
      }, 2000, function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clientlogo li:last').after($first);
      });
    }
  }
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});


const teams = document.querySelectorAll(".teams div");

teams.forEach((item) => {
  item.addEventListener("mouseover", () => {
    teams.forEach((el) => el.classList.remove("active"));

    item.classList.add("active");
  });
});


$(function(){
  
  var $tabIcon          = $('.sub-menu.tab-a > .tabs-icon > a');
  var $tabIconSelected  = $('.sub-menu.tab-a > .tabs-icon > a.selected');
  var $tabContent       = $('.sub-menu.tab-a > .content');
  var $mainColor        = "#032e50";
  
  var $dataColor = $tabIconSelected.data('color');
  $tabIconSelected.css('background-color', $dataColor);
  
  $tabIcon.hover(function(){
    var $dataTitle  = $(this).data('title');
    var $dataColor  = $(this).data('color');
    
    $tabIcon.removeClass('selected').css('background-color', $mainColor);
    $(this).addClass('selected').css('background-color', $dataColor);
    
    $tabContent.each(function(){
      var $dataContent = $(this).data('content');
      
      if($dataTitle == $dataContent){
        $tabContent.hide();
        $(this).fadeIn().find('>.tab-panel-left').css('background-color', $dataColor);
      }
    });
    
  },function(){
    $(this).not('.selected').css('background-color', $mainColor);
  });
});

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://glassfrog.design/assets/images/about-page-2.webp",
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://glassfrog.design/assets/images/about-page-2.webp",
    text:
      "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://glassfrog.design/assets/images/about-page-2.webp",
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://glassfrog.design/assets/images/about-page-2.webp",
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://glassfrog.design/assets/images/about-page-2.webp",
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!"
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://glassfrog.design/assets/images/about-page-2.webp",
    text:
      "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://glassfrog.design/assets/images/about-page-2.webp",
    text:
      "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
  }
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 5000);


