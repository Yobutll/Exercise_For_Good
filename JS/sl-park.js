let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex3 = 1; 
showSlide(slideIndex);
showSlide2(slideIndex2);
showSlide3(slideIndex3);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide2() { 
    showSlide2(slideIndex2 -= 1);
}

function nextSlide2() { 
    showSlide2(slideIndex2 += 1);
}
function prevSlide3() { 
    showSlide3(slideIndex3 -= 1);
}

function nextSlide3() { 
    showSlide3(slideIndex3 += 1);
}

function showSlide(n) {
    let slides = document.querySelectorAll(".slider img");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showSlide2(n) { 
    let slides2 = document.querySelectorAll(".slider2 img");
    if (n > slides2.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides2.length;
    }
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slideIndex2 - 1].style.display = "block";
}
function showSlide3(n) { 
    let slides3 = document.querySelectorAll(".slider3 img");
    if (n > slides3.length) {
        slideIndex3 = 1;
    }
    if (n < 1) {
        slideIndex3 = slides3.length;
    }
    for (let i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    slides3[slideIndex3 - 1].style.display = "block";
}
