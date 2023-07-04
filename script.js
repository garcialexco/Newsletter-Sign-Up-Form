const main = document.getElementById('main');
const success = document.getElementById('success');
const submit = document.getElementById('emailButton');
const input = document.getElementById('emailInput');
const dismiss = document.getElementById('successDismiss');
const valid = document.getElementById('validEmail');
  
function submitForm(event) {
    event.preventDefault();
  
    if (input.checkValidity()) {
        main.style.display = "none";
        success.style.display = "flex";
    } else {
        input.style.backgroundColor = "rgba(242, 44, 33, 0.25)";
        valid.style.display = "block";
    }
}
  
    function dismissForm() {
      success.style.display = "none";
      main.style.display = "flex";
      input.style.backgroundColor = "white";
      valid.style.display = "none";
      input.value = "";
    }
  
    submit.addEventListener('click', submitForm);
    dismiss.addEventListener('click', dismissForm);