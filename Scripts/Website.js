function openMenu(){
    document.getElementById("Menu").style.width = "0";
}
function closeMenu(){
    document.getElementById("Menu").style.width = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyfbcJvX_c_wx3-xKPhvOAUpu_d2xW4BqZbYzHhB352rIgTCLlANYNCikowGHAkGcppqw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })