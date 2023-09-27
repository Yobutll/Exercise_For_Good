document.addEventListener("DOMContentLoaded", function() {
    let aboutLink = document.getElementById("about-link");
    let supportLink = document.getElementById("support-link");
    let ExLink = document.getElementById("Ex")
    let HomeLink = document.getElementById("Home")

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "about_us.html"; 
    });

    supportLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "support_page.html";
    });

    ExLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "main.html";
    });

    HomeLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "main.html";
    });

});
