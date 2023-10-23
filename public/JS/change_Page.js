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
        window.location.href = "public/about_us.html"; 
    });

    supportLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "public/support_page.html";
    });


    ExLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "public/main.html";
    });

    HomeLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "public/main.html";
    });

    footballLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "public/football.html";
    });

    fitnessLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "public/fitness.html";
    });

    parkLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "public/park.html";
    });

    basLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "public/basketball.html";
    });

    supportLinkFooter.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "public/support_page.html";
    });

});
