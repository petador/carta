
window.onload = function() {
    fetch('https://www.exemplebackend.com/parametres', {
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
