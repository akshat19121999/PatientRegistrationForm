document.getElementById('patientForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('http://localhost:1337/api/user-patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        });

        if (response.ok) {
            alert('Form submitted successfully!'); // Alert for success
            // Optionally, you can reset the form here
            event.target.reset();
        } else {
            console.error('Error submitting form:', response.statusText);
            alert('Error submitting form. Please try again.'); // Alert for error
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An unexpected error occurred. Please try again.'); // Alert for unexpected error
    }
});
