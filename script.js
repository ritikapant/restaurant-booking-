document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Basic form validation (could be expanded)
    if (name && email && date && time && guests) {
        const message = `Thank you ${name}! Your table for ${guests} has been booked on ${date} at ${time}.`;
        document.getElementById('confirmationMessage').textContent = message;
        document.getElementById('bookingForm').reset();
    } else {
        document.getElementById('confirmationMessage').textContent = 'Please fill in all fields.';
    }
});
