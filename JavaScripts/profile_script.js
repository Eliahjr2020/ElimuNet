document.addEventListener('DOMContentLoaded', function() {
    var uploadPhotoInput = document.getElementById('uploadPhoto');
    var profileImage = document.getElementById('profileImage');

    uploadPhotoInput.addEventListener('change', function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            profileImage.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    var profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Profile updated successfully!');
        // Here you can add code to save the profile data
    });
});