window.onload = function() {
  // Aquest és el proxy de CORS Anywhere
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  
  // Aquesta és la URL del teu Apps Script
  var targetUrl = "https://script.google.com/a/macros/onmedic.es/s/AKfycbzNVIYbJpVLFmyDRbGd7oUnKzgwzIYiJ3enu6UDozjyPOBmMeRzd8yH7vCE_ry-qryXYw/exec";
  
  fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('response').innerText = JSON.stringify(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
