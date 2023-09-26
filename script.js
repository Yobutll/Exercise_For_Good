document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.getElementById("about-link");
    var supportLink = document.getElementById("support-link");
    var ExLink = document.getElementById("Ex")

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Navigate to the "about_us.html" page
        window.location.href = "about_us.html"; // Replace with your actual page URL
    });

    supportLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "support_page.html";
    });

    ExLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "main.html";
    });

});
