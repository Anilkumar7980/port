// script.js
document.getElementById('deployButton').addEventListener('click', function() {
    fetch('YOUR_AZURE_FUNCTION_URL', { // Replace YOUR_AZURE_FUNCTION_URL with the actual URL
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => alert('Deployment started!'))
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to start deployment.');
    });
});
