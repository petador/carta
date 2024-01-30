window.onload = function() {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var targetUrl = 'https://script.google.com/macros/s/AKfycbxCmBlQYwzA1NTwnskRdxTHtZ3Efmz72ssvsyON-1uPPeCmh3UF-OnSyVfkK-NOtGMkRw/exec';

  fetch(proxyUrl + targetUrl)
    .then(response => response.text()) // Canvia a .text() per obtenir la resposta com a text pla.
    .then(text => {
      console.log(text); // Imprimeix el text a la consola per a depuració.
      // Ara pots veure què estàs rebent realment i decidir com procedir.
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

