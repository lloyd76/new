// Fetch images from the 'slides' folder
const slidesFolder = 'slides/';
const slides = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add more images as needed

// Dynamically create swiper slides for each image
const swiperWrapper = document.querySelector('.swiper-wrapper');
slides.forEach(image => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="${slidesFolder}${image}" alt="">`;
    swiperWrapper.appendChild(slide);
});

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
