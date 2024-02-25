// Define the slide index and call the showSlides function
var slideIndex = 0;
showSlides();

// Function to show slides
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 10 seconds
}
document.addEventListener('DOMContentLoaded', function() {
    var moreLink = document.getElementById('more-link');
    var submenu = document.getElementById('submenu');

    moreLink.addEventListener('click', function(event) {
        event.preventDefault();
        submenu.classList.toggle('show');
        event.stopPropagation(); // Prevent event bubbling
    });

    // Close the submenu when clicking outside of it
    document.body.addEventListener('click', function(event) {
        if (!submenu.contains(event.target) && event.target !== moreLink) {
            submenu.classList.remove('show');
        }
    });
});



// Add event listener for the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var registrationNo = document.getElementById('regdno').value;
    var password = document.getElementById('password').value;

    // Add your custom login logic here
    if (validateCredentials(registrationNo, password)) {
        console.log('Login successful');
        // Redirect to another page
        window.location.href = 'user-details.html'; // Change 'user-details.html' to the desired page
    } else {
        console.log('Invalid credentials');
        // Display an error message to the user
        alert('Invalid credentials. Please try again.');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementById('loginButton');
    var alertMessage = document.getElementById('alertMessage');
    var isLoggedIn = false; // Flag to track successful login

    loginButton.addEventListener('click', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Check if the username and password are correct
        if (username === '11' && password === '11') {
            // Set the flag to true upon successful login
            isLoggedIn = true;
            alert('Login successful!');
            setTimeout(function() {
                // Check if the user is still logged in after 30 seconds
                if (isLoggedIn) {
                    alertMessage.classList.remove('hidden');
                }
            }, 30000); // Show after 30 seconds
        } else {
            alert('');
        }
    });
});


