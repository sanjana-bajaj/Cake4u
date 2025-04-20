document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validate the required fields
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Validate the phone number format (only numbers)
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (numbers only).');
        return;
    }
    // Validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    // If all validations pass, display a success message
    alert('Form submitted successfully!');
    
    // Clear the form fields (optional)
    document.querySelector('form').reset();
});
  