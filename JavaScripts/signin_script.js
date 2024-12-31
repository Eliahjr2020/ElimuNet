document.addEventListener('DOMContentLoaded', function() {
    var signinForm = document.getElementById('signinForm');

    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Sign in successful!');
        // Here you can add code to handle the sign-in process
    });
});