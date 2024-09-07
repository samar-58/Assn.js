const swiper = new Swiper('.card-slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView:1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3
        },
    },

    on: {
        init: function() {
            updateMiddleSlide(this);
        },
        slideChange: function() {
            updateMiddleSlide(this);
        }
    }
});

    function updateMiddleSlide(swiper) {
        // Remove the 'middle' class from all slides
        document.querySelectorAll('.swiper-slide').forEach(slide => {
            slide.classList.remove('middle');
        });
    
        // Get the active slide index
        const activeIndex = swiper.activeIndex;
    
        // Get the slides
        const slides = document.querySelectorAll('.swiper-slide');
        const slidesPerView = swiper.params.slidesPerView;
    
        // Determine the middle index
        const middleIndex = Math.floor(slidesPerView / 2);
    
        // Add 'middle' class to the slide that should be in the middle
        slides[(activeIndex + middleIndex) % slides.length].classList.add('middle');
    }