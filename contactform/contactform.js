function submitForm() {
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Validate form
  if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
  }

  // Send form data to server (here, just displaying the data)
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log('Message: ' + message);

  // Reset form after submission
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  // Display success message (optional)
  alert('Thank you! Your message has been sent.');
}