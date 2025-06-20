document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const contents = document.querySelectorAll('.container > div');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all contents
            contents.forEach(content => content.classList.remove('active-content'));
            
            // Show target content
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active-content');
        });
    });
    
    // Book appointment button
    const bookAppointmentBtn = document.getElementById('book-appointment-btn');
    const bookingForm = document.getElementById('booking-form');
    const cancelBookingBtn = document.getElementById('cancel-booking');
    
    bookAppointmentBtn.addEventListener('click', function() {
        // Hide all contents
        contents.forEach(content => content.classList.remove('active-content'));
        
        // Show booking form
        bookingForm.classList.add('active-content');
        
        // Update navigation
        navLinks.forEach(navLink => navLink.classList.remove('active'));
    });
    
    cancelBookingBtn.addEventListener('click', function() {
        // Hide booking form
        bookingForm.classList.remove('active-content');
        
        // Show home content
        document.getElementById('home').classList.add('active-content');
        
        // Reset nav link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        document.querySelector('[data-target="home"]').classList.add('active');
    });
    
    // Specialty cards in features section
    const specialtyCards = document.querySelectorAll('.specialty-card[data-specialty]');
    
    specialtyCards.forEach(card => {
        card.addEventListener('click', function() {
            const specialty = this.getAttribute('data-specialty');
            
            // Hide all contents
            contents.forEach(content => content.classList.remove('active-content'));
            
            // Show booking form
            bookingForm.classList.add('active-content');
            
            // Set the specialty in the form
            document.getElementById('specialty').value = specialty;
            
            // Update navigation
            navLinks.forEach(navLink => navLink.classList.remove('active'));
        });
    });
    
    // Form submission
    const appointmentForm = document.getElementById('appointment-form');
    const confirmation = document.getElementById('confirmation');
    const newBookingBtn = document.getElementById('new-booking');
    
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the data to a server
        // For demo purposes, we'll just show the confirmation
        
        // Hide form
        appointmentForm.style.display = 'none';
        
        // Show confirmation
        confirmation.style.display = 'block';
    });
    
    newBookingBtn.addEventListener('click', function() {
        // Show form
        appointmentForm.style.display = 'block';
        appointmentForm.reset();
        
        // Hide confirmation
        confirmation.style.display = 'none';
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    const sendMessageBtn = document.getElementById('send-message');
    
    sendMessageBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('contact-name').value = '';
            document.getElementById('contact-email').value = '';
            document.getElementById('contact-message').value = '';
        } else {
            alert('Please fill in all fields');
        }
    });
});