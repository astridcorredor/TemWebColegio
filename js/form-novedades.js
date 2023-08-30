 /* Novedades en Google Sheets */
 const scriptURL = "https://script.google.com/macros/s/AKfycbwUClq6RtiPVxgyNL8acTVGvA15GwiFUQdJAWavoTpELOQ-uQAZhjuz-PlOB5ru7B0/exec"
 const form = document.forms['form_novedades'] /*[name de formulario]*/
 
 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => alert("¡Gracias!, sus datos fueron registrados." ))
   .then(() => { window.location.reload(); })
   .catch(error => console.error('Error!', error.message))
 })