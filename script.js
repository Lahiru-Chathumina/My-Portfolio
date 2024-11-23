document.addEventListener('DOMContentLoaded', function() {
    const text = "Hi 👋, I'm Lahiru"; 
    let index = 0; 
    const typingSpeed = 150; 
    const deletingSpeed = 50; // Speed at which the text will be deleted
    const targetElement = document.getElementById('autoTypingText');
    let isDeleting = false;

    function typeText() {
        if (!isDeleting) {
            if (index < text.length) {
                targetElement.innerHTML += text.charAt(index); 
                index++;
                setTimeout(typeText, typingSpeed); 
            } else {
                isDeleting = true;
                setTimeout(typeText, 1000); // Wait a second before starting to delete
            }
        } else {
            if (index > 0) {
                targetElement.innerHTML = text.substring(0, index - 1); 
                index--;
                setTimeout(typeText, deletingSpeed); 
            } else {
                isDeleting = false;
                setTimeout(typeText, 1000); // Wait a second before typing again
            }
        }
    }

    typeText(); // Start the typing effect
});
