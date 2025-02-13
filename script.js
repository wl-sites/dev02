// toggle icon navbar


// scroll sections 
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            // active navbar links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
            })
        }
    })
}

window.onscroll = () => {
    // sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)
}


document.addEventListener("DOMContentLoaded", function() {
    let progressBars = document.querySelectorAll(".skills-content .progress .bar span");

    function animateBars() {
        progressBars.forEach(bar => {
            let width = bar.getAttribute("data-width");
            bar.style.width = width;
        });
    }

    let skillsSection = document.querySelector(".skills");
    let observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateBars();
        }
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});








document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Fermer le menu lorsqu'un lien est cliqué
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.1 } // L'animation se déclenche quand 20% de la section est visible
    );

    sections.forEach((section) => {
        section.classList.add("hidden"); // On ajoute la classe "hidden" au chargement
        observer.observe(section);
    });
});