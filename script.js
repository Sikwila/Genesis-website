


//Light And Dark Mode Switch
document.getElementById("theme_switcher").addEventListener("click" ,function(){
  document.body.classList.toggle("dark");
});

// scroll

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



// Carousel

const carouselContainer = document.querySelector('.carousel-container');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let activeItem = 0;
let intervalId;

function prevItem() {
  clearInterval(intervalId); // Clear interval when manually navigating
  activeItem--;
  if (activeItem < 0) {
    activeItem = carouselItems.length - 1;
  }
  updateCarousel();
}

function nextItem() {
  clearInterval(intervalId); // Clear interval when manually navigating
  activeItem++;
  if (activeItem >= carouselItems.length) {
    activeItem = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  carouselItems.forEach((item) => {
    item.style.display = 'none';
  });

  carouselItems[activeItem].style.display = 'block';

  prevBtn.disabled = activeItem === 0;
  nextBtn.disabled = activeItem === carouselItems.length - 1;

  // Start automatic sliding after updating
  startAutoSlide();
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    activeItem++;
    if (activeItem >= carouselItems.length) {
      activeItem = 0;
    }
    updateCarousel();
  }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
  prevItem();
  stopAutoSlide(); // Stop auto sliding when manually navigating
});

nextBtn.addEventListener('click', () => {
  nextItem();
  stopAutoSlide(); // Stop auto sliding when manually navigating
});

// Initial setup
updateCarousel();
startAutoSlide(); // Start auto sliding initiall