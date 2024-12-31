document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.getElementById("mySidenav");
    var topnav = document.querySelector(".topnav");
    var mainContent = document.querySelector(".main-content");
    var footer = document.getElementById("footer");
    var sideLinks = document.querySelectorAll('.side-link');
    var topLinks = document.querySelectorAll('.top-link');

    function openNav() {
        sidenav.style.width = "250px";
        topnav.style.left = "250px";
        topnav.style.width = "calc(100% - 250px)";
        mainContent.style.marginLeft = "250px";
    }

    function closeNav() {
        sidenav.style.width = "0";
        topnav.style.left = "0";
        topnav.style.width = "100%";
        mainContent.style.marginLeft = "0";
    }

    document.querySelector('.openbtn').addEventListener('click', openNav);
    document.querySelector('.closebtn').addEventListener('click', closeNav);

    function setActiveLink(links, activeLink) {
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    function loadContent(file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    function loadSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            mainContent.innerHTML = section.outerHTML;
        }
    }

    sideLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            setActiveLink(sideLinks, this);
            setActiveLink(topLinks, null);
            var file = this.getAttribute('data-file');
            loadContent(file);
        });
    });

    topLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            setActiveLink(topLinks, this);
            setActiveLink(sideLinks, null);
            var sectionId = this.getAttribute('data-section');
            if (sectionId === 'sign_in') {
                loadContent('sign_in.html');
            } else {
                loadSection(sectionId);
            }
        });
    });

    window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('section');
        var navLinks = document.querySelectorAll('.nav-links a');

        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Show footer when scrolling reaches the end
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    var faqQuestions = document.querySelectorAll('.faq-question');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been sent successfully!');
        // Here you can add code to handle the form submission, such as sending the data to a server
    });

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            var arrow = this.querySelector('.arrow');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                arrow.innerHTML = '&#9660;';
            } else {
                answer.style.display = 'block';
                arrow.innerHTML = '&#9650;';
            }
        });
    });
});