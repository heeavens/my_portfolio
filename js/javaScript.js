
// ================= REVIEWS SLIDER =================

// Get all review elements from the page
const reviews = document.querySelectorAll('.review-item');

// Start with first review
let currentIndex = 0;

// Function to switch reviews automatically
function switchReview() {
    // Hide current review
    reviews[currentIndex].classList.remove('active');

    // Move to next review, loop back if at the end
    currentIndex = (currentIndex + 1) % reviews.length;

    // Show new review
    reviews[currentIndex].classList.add('active');
}

// Run slider every 5 seconds
setInterval(switchReview, 5000);


// ================= MODAL WINDOWS =================

// Get all buttons
const overviewButtons = document.querySelectorAll('.btn-outline');
const buyButtons = document.querySelectorAll('.btn-fill');

// Get modal elements
const overviewModal = document.getElementById('overviewModal');
const buyModal = document.getElementById('buyModal');

// Get close buttons
const closeButtons = document.querySelectorAll('.modal-close');


// Open Overview modal and show correct product info
overviewButtons.forEach(function(button) {
    button.addEventListener('click', function() {

        // Find the product card that was clicked
        const card = button.closest('.product-card');

        // Get product data from HTML attributes
        const name = card.getAttribute('data-name');
        const desc = card.getAttribute('data-desc');

        // Insert data into modal
        overviewModal.querySelector('h2').textContent = name;
        overviewModal.querySelector('p').textContent = desc;

        // Show modal
        overviewModal.classList.add('active');
    });
});


// Open Buy modal and show selected product name
buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {

        // Get selected product card
        const card = button.closest('.product-card');

        // Get product name
        const name = card.getAttribute('data-name');

        // Show product name in order modal
        buyModal.querySelector('h3').textContent = name;

        // Open modal
        buyModal.classList.add('active');
    });
});


// Close modals when clicking X
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        overviewModal.classList.remove('active');
        buyModal.classList.remove('active');
    });
});


// Close overview modal when clicking the Close button
const modalCloseBtn = document.querySelector('.modal-close-btn');
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', function() {
        overviewModal.classList.remove('active');
    });
}


// Close modals when clicking outside
overviewModal.addEventListener('click', function(event) {
    if (event.target === overviewModal) {
        overviewModal.classList.remove('active');
    }
});

buyModal.addEventListener('click', function(event) {
    if (event.target === buyModal) {
        buyModal.classList.remove('active');
    }
});


// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        overviewModal.classList.remove('active');
        buyModal.classList.remove('active');
    }
});


// ================= ORDER FORM + STORAGE =================

// Get form element
const orderForm = document.getElementById('orderForm');

// Load saved data when page loads
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('phone').value = localStorage.getItem('phone') || '';
    document.getElementById('city').value = localStorage.getItem('city') || '';
});


// Handle form submission
orderForm.addEventListener('submit', function(event) {

    event.preventDefault(); // stop page reload

    // Get user input
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;

    // Check if fields are empty
    if (name === '' || phone === '' || city === '') {
        alert('Please fill in all fields');
    } else {

        // Save data in browser storage
        localStorage.setItem('name', name);
        localStorage.setItem('phone', phone);
        localStorage.setItem('city', city);

        alert('Thank you! Your order has been sent.');

        // Clear form
        orderForm.reset();

        // Close modal
        buyModal.classList.remove('active');
    }
});