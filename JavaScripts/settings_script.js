document.addEventListener('DOMContentLoaded', function() {
    var settingsForm = document.getElementById('settingsForm');
    var themeSelect = document.getElementById('theme');
    var fontSizeInput = document.getElementById('fontSize');

    // Load saved settings
    var savedTheme = localStorage.getItem('theme');
    var savedFontSize = localStorage.getItem('fontSize');

    if (savedTheme) {
        themeSelect.value = savedTheme;
        document.body.className = savedTheme;
    }

    if (savedFontSize) {
        fontSizeInput.value = savedFontSize;
        document.body.style.fontSize = savedFontSize + 'px';
    }

    // Handle theme change
    themeSelect.addEventListener('change', function() {
        var selectedTheme = themeSelect.value;
        document.body.className = selectedTheme;
        localStorage.setItem('theme', selectedTheme);
    });

    // Handle font size change
    fontSizeInput.addEventListener('input', function() {
        var selectedFontSize = fontSizeInput.value;
        document.body.style.fontSize = selectedFontSize + 'px';
        localStorage.setItem('fontSize', selectedFontSize);
    });

    // Handle form submission
    settingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Settings saved successfully!');
        // Here you can add code to save other settings if needed
    });
});