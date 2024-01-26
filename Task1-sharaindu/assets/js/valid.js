function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var query = document.getElementById('query').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.trim() === '' || email.trim() === '' || query.trim() === '') {
      alert('Please fill in all the required fields.');
    } else if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
    } else {
    
      alert('Form submitted successfully!');
    }
  }