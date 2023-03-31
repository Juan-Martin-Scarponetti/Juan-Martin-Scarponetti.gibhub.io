const link = document.querySelector('a');
link.addEventListener('click', function(e) {
  e.preventDefault();
  const url = link.getAttribute('href');
  const filename = url.substring(url.lastIndexOf('/')+1);
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
});

function agrandarImagen(img) {
    img.style.width = "200%"; // Ajusta el ancho al 200% del tamaño original
    img.style.height = "200%"; // Ajusta la altura al 200% del tamaño original
  }
  
  function restaurarImagen(img) {
    img.style.width = ""; // Restaura el ancho a su tamaño original
    img.style.height = ""; // Restaura la altura a su tamaño original
  }
  
