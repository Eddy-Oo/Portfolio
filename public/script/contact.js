document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
      let emailInput = document.getElementById("email");
      let emailError = document.getElementById("emailError");
      let nameInput = document.getElementById("name");
      let nameError = document.getElementById("nameError");
      let msgInput = document.getElementById("msg");
      let msgError = document.getElementById("msgError");
  
      let valid = true;
  
      if (!validator.isEmail(emailInput.value)) {
        emailError.style.display = "block";
        valid = false;
      } else {
        emailError.style.display = "none";
      }
  
      if (nameInput.value.length < 2) {
        nameError.style.display = "block";
        valid = false;
      } else {
        nameError.style.display = "none";
      }
  
      if (msgInput.value.length < 10) {
        msgError.style.display = "block";
        valid = false;
      } else {
        msgError.style.display = "none";
      }
  
      if (!valid) {
        event.preventDefault();
      }
    });
  });