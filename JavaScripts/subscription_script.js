document.addEventListener('DOMContentLoaded', function() {
    var subscribeButtons = document.querySelectorAll('.subscribe-btn');

    subscribeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                alert('You have upgraded to the Pro Plan!');
                // Here you can add code to handle the subscription upgrade
            }
        });
    });
});