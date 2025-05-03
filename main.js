/*

  Logic: Required is already set in the HTMl
         Create emailInput id = emailInput
         Create userEmailConfirmation id = userEmailConfirmation
         
         Create mainLoginPage id = mainLoginPage
         Create successPage id = successPage

         Create submitBtn id = submitBtn
         Create dismissBtn id = dismissBtn
         
         emailInput.addEventListener('input', (e) => {
          Check for typeMismatch (i.e., emailInput.validity.typeMismatch)
          If invalid: (i.e., type is CORRECT)
            submitBtn.addEventListener('submit', (e) => {
              e.preventDefault
              
              userEmailConfirmation.textContent = emailInput.textContent;

              remove mainLoginPage
              display successPage
            })
          Else:
            emailInput.setCustomValidity("Valid email required");
            set emailInput to have border red and background lighter red, text red like border too
         })

         dismissBtn.addEventListener("click", (e) => {
          successPage.style.display = "none";  
          mainPageLogin.style.display = "block";
         })

*/

let form = document.getElementById("formContainer");
let emailInput = document.getElementById("emailInput");
let errorMsg = document.getElementById("errorMsg");
let userEmailConfirmation = document.getElementById("userEmailConfirmation");
let mainLoginPage = document.getElementById("mainLoginPage");
let successPage = document.getElementById("successPage");
let submitBtn = document.getElementById("submitBtn");
let dismissBtn = document.getElementById("dismissBtn");
let emailCheck = "";

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
    return;
  }

  emailCheck = emailInput.value;
  if(!emailCheck.endsWith(".com")){
    errorMsg.textContent = "Valid email required";
    return;
  }

  userEmailConfirmation.textContent = emailInput.value;
  mainLoginPage.style.display = "none";
  successPage.style.display = "block";
});

dismissBtn.addEventListener("click", (e) => {
  successPage.style.display = "none";
  mainLoginPage.style.display = "block";

  window.location.reload();
})