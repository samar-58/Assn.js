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
        document.querySelectorAll('.swiper-slide').forEach(slide => {
            slide.classList.remove('middle');
        });
    
        const activeIndex = swiper.activeIndex;
    
        const slides = document.querySelectorAll('.swiper-slide');
        const slidesPerView = swiper.params.slidesPerView;
    
        const middleIndex = Math.floor(slidesPerView / 2);
    
        slides[(activeIndex + middleIndex) % slides.length].classList.add('middle');
    }
