// Smooth scroll to section
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Smooth scroll to skills section
var skillsLink = document.querySelector('nav ul li:first-child a');
skillsLink.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#skills', 1000);
});

// Smooth scroll to about section
var aboutLink = document.querySelector('nav ul li:nth-child(2) a');
aboutLink.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#about', 1000);
});

// Smooth scroll to contact section
var contactLink = document.querySelector('nav ul li:last-child a');
contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#contact', 1000);
});

// Toggle menu on mobile
var menuToggle = document.querySelector('.menu-toggle');
var nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});
