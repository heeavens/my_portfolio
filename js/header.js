// ===== HEADER SCROLL STATE =====
// Dark header at top, white header when scrolled

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// ===== MOBILE MENU =====
var hamburger = document.getElementById('hamburger');
var nav = document.querySelector('nav');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });
}
