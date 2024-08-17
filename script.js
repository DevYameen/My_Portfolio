document.addEventListener("DOMContentLoaded", function() {
    const accessKey = "GjchfiFloVe92r42-cwdSM58yymaJ_h45EERp1M-0Dc";  // Your Unsplash Access Key
    const imageCount = 5;  // Number of images to fetch
    let images = [];
  
    // Function to fetch random images from Unsplash
    function fetchImages() {
      fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${imageCount}&query=landscape`)
        .then(response => response.json())
        .then(data => {
          images = data.map(image => image.urls.regular);
          changeBackground();  // Initialize background change after fetching images
        })
        .catch(error => console.error('Error fetching images from Unsplash:', error));
    }
  
    // Function to change background
    function changeBackground() {
      const randomIndex = Math.floor(Math.random() * images.length);
      document.querySelector('.home').style.backgroundImage = 'url(' + images[randomIndex] + ')';
    }
  
    // Fetch images from Unsplash
    fetchImages();
  
    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
  });
$(document).ready(function() {
    $(window).scroll(function() {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
      } else {
        $('.scroll-up-btn').removeClass("show");
      }
    });
  
    // slide-up script
    $('.scroll-up-btn').click(function() {
      $('html').animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
    });
  
    $('.navbar .menu li a').click(function() {
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Full", "Stack", "Developer"],
      typeSpeed: 200,
      backSpeed: 100,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Full", "Stack", "Developer"],
      typeSpeed: 200,
      backSpeed: 100,
      loop: true
    });
  
    // owl carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
