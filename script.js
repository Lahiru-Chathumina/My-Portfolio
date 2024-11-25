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
                setTimeout(typeText, 1000); 
            }
        } else {
            if (index > 0) {
                targetElement.innerHTML = text.substring(0, index - 1); 
                index--;
                setTimeout(typeText, deletingSpeed); 
            } else {
                isDeleting = false;
                setTimeout(typeText, 1000); 
            }
        }
    }

    typeText(); 
});

const scrollUpBtn = document.getElementById('scroll-up');

scrollDownBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
});

