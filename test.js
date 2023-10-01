let slideIndex1 = 1;
showSlide(1, slideIndex1);

let slideIndex2 = 1;
showSlide(2, slideIndex2);

function prevSlide(sliderId) {
    if (sliderId === 1) {
        showSlide(1, slideIndex1 -= 1);
    } else if (sliderId === 2) {
        showSlide(2, slideIndex2 -= 1);
    }
}

function nextSlide(sliderId) {
    if (sliderId === 1) {
        showSlide(1, slideIndex1 += 1);
    } else if (sliderId === 2) {
        showSlide(2, slideIndex2 += 1);
    }
}

function showSlide(sliderId, n) {
    let slides = document.querySelectorAll(".content:nth-child(" + sliderId + ") .slider img");
    
    if (n > slides.length) {
        if (sliderId === 1) {
            slideIndex1 = 1;
        } else if (sliderId === 2) {
            slideIndex2 = 1;
        }
    }
    if (n < 1) {
        if (sliderId === 1) {
            slideIndex1 = slides.length;
        } else if (sliderId === 2) {
            slideIndex2 = slides.length;
        }
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[sliderId === 1 ? slideIndex1 - 1 : slideIndex2 - 1].style.display = "block";
}
