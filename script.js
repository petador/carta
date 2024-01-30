
window.onload = function() {
    fetch('https://script.google.com/a/macros/onmedic.es/s/AKfycbzNVIYbJpVLFmyDRbGd7oUnKzgwzIYiJ3enu6UDozjyPOBmMeRzd8yH7vCE_ry-qryXYw/exec', {
        method: 'GET' // o 'POST', depenent del teu backend
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};
