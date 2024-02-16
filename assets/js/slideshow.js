// Fetch images from the 'slides' folder
const slidesFolder = 'slideshow/';
const slides = [
    'alexander-mils-TdVGcGkb6C8-unsplash.jpg',
    'alexander-ant-O2nDPq3RE2w-unsplash.jpg',
    'alex-quezada-erUNzsg9Pk4-unsplash.jpg',
    'alex-preusser-IOqS2TRUoCg-unsplash.jpg',
    'alex-avram--INfLX61M_k-unsplash.jpg',
    'alessio-soggetti-C4HO6MzEWrU-unsplash.jpg',
    'agustin-visconti-F83Yec8BEnk-unsplash.jpg',
    'agnieszka-kowalczyk-Knq-PUPdXNA-unsplash.jpg',
    '445CDD6F-DA32-4515-B974-654012065E66.jpg'
]; // Add more images as needed

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
    initialSlide: 0, // Start with the first image
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
