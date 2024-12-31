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