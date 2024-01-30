window.onload = function() {
  // Aquest és el proxy de CORS Anywhere
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  
  // Aquesta és la URL del teu Apps Script
  var targetUrl = "https://script.google.com/macros/s/AKfycbxCmBlQYwzA1NTwnskRdxTHtZ3Efmz72ssvsyON-1uPPeCmh3UF-OnSyVfkK-NOtGMkRw/exec";
  
  fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('response').innerText = JSON.stringify(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
