document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Computer Science Student", "Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

let cards = document.querySelectorAll('.card');
let currentIndex = 0;

// Function to update the focus on the card
function updateFocus() {
    cards.forEach((card, index) => {
        card.classList.remove('focused'); // Remove focus class from all cards
        if (index === currentIndex) {
            card.classList.add('focused'); // Add focus class to the selected card
        }
    });
}

// Add swipe functionality
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateFocus();
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
            currentIndex--;
            updateFocus();
        }
    }
});

// Initialize focus
updateFocus();