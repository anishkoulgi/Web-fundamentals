import { fields } from "./constants";

function setError(element, message) {
  const formControl = element.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(element) {
  const formControl = element.parentElement;
  formControl.className = "form-control success";
}

export function validate(formElement) {
  let firstErrorElement = null;
  fields.map((field) => {
    const element = formElement.elements[field.name];
    const controlElement = document.getElementById(field.id);

    if (!field.validate(element.value)) {
      if (!firstErrorElement) {
        if (field.type === "radio") firstErrorElement = element[0];
        else firstErrorElement = element;
      }
      setError(controlElement, `Please enter valid ${field.name}`);
    } else {
      setSuccess(controlElement);
    }
  });

  if (firstErrorElement) firstErrorElement.focus();
}

export function checkMaritalStatus() {
  const spouseElement = document.getElementById("spouse");
  spouseElement.disabled = true;
  const maritalRadioElements = document.querySelectorAll(
    "input[type=radio][name=marital]"
  );

  maritalRadioElements.forEach((radioElement) => {
    radioElement.addEventListener("change", (e) => {
      if (e.target.value === "Married") {
        spouseElement.disabled = false;
        spouseElement.classList.remove("disabled");
      } else {
        spouseElement.disabled = true;
        spouseElement.classList.add("disabled");
      }
    });
  });
}
