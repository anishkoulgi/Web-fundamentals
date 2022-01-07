import { fields } from "./constants";

/**
 * Reset radio buttons to unchecked state
 * @param {*} name name attribute of the element in the DOM
 */
function resetRadioElements(name) {
  const radioElements = document.querySelectorAll(`input[name=${name}]`);
  radioElements.forEach((radioElement) => (radioElement.checked = false));
}

/**
 * Reset field
 * @param {*} element field to be reset
 */
function setDefault(element) {
  const formControl = element.parentElement;
  formControl.className = "form-control";
}

/**
 * Main function to reset all fields
 * @param {*} formElement form DOM element
 */
export function resetForm(formElement) {
  // Reset the spouse input to disabled
  const spouseElement = document.getElementById("spouse");
  spouseElement.disabled = true;

  fields.map((field) => {
    const element = formElement.elements[field.name];

    // Get the formControl element by ID
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
