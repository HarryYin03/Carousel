document.addEventListener('DOMContentLoaded', () =>{
   const slides = document.querySelector('.carousel-slides');
    const images = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    let currentindex = 0;

    function updateCarousel(){
        slides.style.transform = `translateX(${-currentindex * 300}px)`;
        dots.forEach((dot, index) =>{
            dot.classList.toggle('active', index === currentindex);
        })
    }

    function nextSlide(){
        currentindex = (currentindex + 1) % images.length;
        updateCarousel();
    }

    function prevSlide(){
        currentindex = (currentindex - 1 + images.length) % images.length;
        updateCarousel();
    }
    function goToSlide(index){
        currentindex = index;
        updateCarousel();
    }

    document.querySelector('.carousel-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-prev').addEventListener('click', prevSlide);

    dots.forEach((dot, index) =>{
        dot.addEventListener('click', () =>{
            goToSlide(index);
        })
    })

    setInterval(nextSlide, 5000);
    updateCarousel();
});