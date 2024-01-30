window.onload = function() {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var targetUrl = 'https://script.google.com/macros/s/AKfycbxCmBlQYwzA1NTwnskRdxTHtZ3Efmz72ssvsyON-1uPPeCmh3UF-OnSyVfkK-NOtGMkRw/exec';

  fetch(proxyUrl + targetUrl)
    .then(response => {
      // Comprova primer si la resposta és correcta
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        // Només intenta analitzar com a JSON si la resposta és correcta
        return response.json();
      }
    })
    .then(data => {
      // Fes el que calgui amb les dades JSON aquí
      console.log(data);
    })
    .catch(error => {
      // Maneja qualsevol error que es produeixi en el procés de petició o anàlisi
      console.error('Error en la petició o en l’anàlisi de JSON:', error);
    });
};


