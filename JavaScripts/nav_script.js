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