import { fields } from "./constants";

function setError(element, message) {
  const formControl = element.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

function setSuccess(element) {
  const formControl = element.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

export function validate(formElement) {
  let firstErrorElement = null;

  fields.map((field) => {
    const element = formElement.elements[field.name];
    if (element.disabled) return;
    const controlElement = document.getElementById(field.id);

    const elementValue =
      field.name === "terms" ? element.checked : element.value.trim();

    if (!field.validate(elementValue, formElement.elements)) {
      if (!firstErrorElement) {
        if (field.type === "radio") firstErrorElement = element[0];
        else firstErrorElement = element;
      }
      setError(controlElement, field.key);
    } else {
      setSuccess(controlElement);
    }
  });

  if (firstErrorElement) firstErrorElement.focus();

  return firstErrorElement === null;
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
