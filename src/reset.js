import { fields } from "./constants";

function resetRadioElements(name) {
  const radioElements = document.querySelectorAll(`input[name=${name}]`);
  radioElements.forEach((radioElement) => (radioElement.checked = false));
}

function setDefault(element) {
  const formControl = element.parentElement;
  formControl.className = "form-control";
}

export function resetForm(formElement) {
  const spouseElement = document.getElementById("spouse");
  spouseElement.disabled = true;
  fields.map((field) => {
    const element = formElement.elements[field.name];
    const controlElement = document.getElementById(field.id);
    setDefault(controlElement);
    if (field.type === "checkbox") element.checked = false;
    else if (field.type === "radio") {
      resetRadioElements(field.name);
    } else {
      element.value = "";
    }
  });
}
