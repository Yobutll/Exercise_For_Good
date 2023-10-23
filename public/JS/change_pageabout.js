document.addEventListener("DOMContentLoaded", function() {
    let aboutLink = document.getElementById("about-link");
    let supportLink = document.getElementById("support-link");
    let ExLink = document.getElementById("Ex")
    let HomeLink = document.getElementById("Home")
    let footballLink = document.getElementById("football");
    let fitnessLink = document.getElementById("fitness");
    let parkLink = document.getElementById("park");
    let basLink = document.getElementById("bas");
    let supportLinkFooter = document.getElementById("support-link-footer");

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

    footballLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "football.html";
    });

    fitnessLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "fitness.html";
    });

    parkLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "park.html";
    });

    basLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "basketball.html";
    });

    supportLinkFooter.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "support_page.html";
    });

});
