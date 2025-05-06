let form = document.getElementById("formContainer");
let emailInput = document.getElementById("emailInput");
let errorMsg = document.getElementById("errorMsg");
let userEmailConfirmation = document.getElementById("userEmailConfirmation");
let mainLoginPage = document.getElementById("mainLoginPage");
let successPage = document.getElementById("successPage");
let submitBtn = document.getElementById("submitBtn");
let dismissBtn = document.getElementById("dismissBtn");

form.addEventListener("submit", (e) =>{
  e.preventDefault();

  errorMsg.textContent = "";

  if(!emailInput.checkValidity()){
    if(emailInput.validity.typeMismatch){
      errorMsg.textContent = "Valid email required";
    }
    else if(emailInput.validity.valueMissing){
      errorMsg.textContent = "Input field required";
    }
    form.classList.add("error-State");
    return;
  }

  userEmailConfirmation.textContent = emailInput.value;
  mainLoginPage.classList.toggle("active");
  successPage.classList.toggle("active");
});

dismissBtn.addEventListener("click", (e) => {
  successPage.classList.toggle("active");
  mainLoginPage.classList.remove("active");

  window.location.reload();
});