document.addEventListener('DOMContentLoaded', function() {
    var markReadButtons = document.querySelectorAll('.mark-read');

    markReadButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var notification = this.closest('.notification');
            notification.classList.remove('new');
            notification.classList.add('read');
            this.remove(); // Remove the "Mark as Read" button

            // Optionally, you can save the read status to localStorage or send it to the server
            var notificationId = notification.getAttribute('data-id');
            localStorage.setItem('notification-' + notificationId, 'read');
        });
    });

    // Load read status from localStorage
    var notifications = document.querySelectorAll('.notification');
    notifications.forEach(function(notification) {
        var notificationId = notification.getAttribute('data-id');
        if (localStorage.getItem('notification-' + notificationId) === 'read') {
            notification.classList.remove('new');
            notification.classList.add('read');
            var button = notification.querySelector('.mark-read');
            if (button) {
                button.remove();
            }
        }
    });
});