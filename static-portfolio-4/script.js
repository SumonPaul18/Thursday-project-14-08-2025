document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder for contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submission is handled on the backend. This is a client-side placeholder.');
    // In a real application, you would use fetch() or XMLHttpRequest to send data to a server-side endpoint.
    // Example:
    /*
    const formData = new FormData(this);
    fetch('/api/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
    */
    // Remember to handle sensitive information like API keys or email credentials securely on the backend,
    // typically loaded from environment variables (e.g., a .env file).
});