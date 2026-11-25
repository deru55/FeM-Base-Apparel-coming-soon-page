const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-input]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  formInputs.forEach((input) => {
    const fieldGroup = input.closest("[data-field]");
    const errorMsg = fieldGroup.querySelector("[data-error-msg]");

    if (!input.checkValidity()) {
      isFormValid = false;
      fieldGroup.classList.add("is-invalid");
      input.setAttribute("aria-invalid", "true");
      errorMsg.textContent = "Please provide a valid email";
    } else {
      fieldGroup.classList.remove("is-invalid");
      input.setAttribute("aria-invalid", "false");
      errorMsg.textContent = "";
    }
  });

  if (isFormValid) {
    form.reset();
  }
});

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const fieldGroup = input.closest("[data-field]");
    const errorMsg = fieldGroup.querySelector("[data-error-msg]");

    if (fieldGroup.classList.contains("is-invalid") && input.checkValidity()) {
      fieldGroup.classList.remove("is-invalid");
      input.setAttribute("aria-invalid", "false");
      errorMsg.textContent = "";
    }
  });
});
