// active menu button for smaller screens
let menuIcon = document.querySelector('#MenuIcon');
let navbar = document.querySelector('.navigation');
menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('bx-grid-vertical');
    navbar.classList.toggle('active');
};

// active links highlight and sticky taskbar
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>
{

    sections.forEach(sec =>
    {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navlinks.forEach(links =>
            {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    // afterclick remove toggle
    menuIcon.classList.remove('bx-grid-vertical');
    navbar.classList.remove('active');
};
// scroll reveal js
ScrollReveal
({
    reset: true,
    distance: '80px',
    duration: 1700,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .experience-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right'});

// span scroling using typed js
 const typed = new Typed('.multi-text',
{
    strings:['Software Developer','Machine Learning Expert','Game Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
