document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Sign up successful!');
        // Here you can add code to handle the sign-up process
    });
});