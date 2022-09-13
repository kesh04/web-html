let seachfrom = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  seachfrom.classList.toggle("active");
  shoppingcart.classList.remove("active");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingcart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingcart.classList.toggle("active");
  seachfrom.classList.remove("active");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

let login = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  login.classList.toggle("active");
  seachfrom.classList.remove("active");
  shoppingcart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  seachfrom.classList.remove("active");
  shoppingcart.classList.remove("active");
  login.classList.remove("active");
};

window.onscroll = () => {
  seachfrom.classList.remove("active");
  shoppingcart.classList.remove("active");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
