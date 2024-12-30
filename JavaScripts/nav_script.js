function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".topnav").style.left = "250px";
    document.querySelector(".topnav").style.width = "calc(100% - 250px)";
    document.querySelector(".main-content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".topnav").style.left = "0";
    document.querySelector(".topnav").style.width = "100%";
    document.querySelector(".main-content").style.marginLeft = "0";
}

// Change active status on scroll
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
    var footer = document.getElementById("footer");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});

function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var topnav = document.getElementById("myTopnav");
    var mainContent = document.getElementById("mainContent");
    var footer = document.getElementById("footer");

    if (sidenav.classList.contains("closed")) {
        sidenav.classList.remove("closed");
        topnav.classList.remove("closed");
        mainContent.classList.remove("closed");
        footer.classList.remove("closed");
    } else {
        sidenav.classList.add("closed");
        topnav.classList.add("closed");
        mainContent.classList.add("closed");
        footer.classList.add("closed");
    }
}