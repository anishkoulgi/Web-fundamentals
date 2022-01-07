import { fields } from "./constants";

/**
 * Function to set Error state
 * @param {*} element field with error
 * @param {*} message error message
 */
function setError(element, message) {
  const formControl = element.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

/**
 * Function to set Success state
 * @param {*} element field
 */
function setSuccess(element) {
  const formControl = element.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

/**
 * Main function to validate the fields
 * @param {*} formElement form DOM element
 * @returns form is valid or not (boolean)
 */
export function validate(formElement) {
  // Variable to store the first error element for focus purpose
  let firstErrorElement = null;

  fields.map((field) => {
    const element = formElement.elements[field.name];

    // No validation required for disabled elements
    if (element.disabled) return;

    const controlElement = document.getElementById(field.id);

    // get value seperately for checkbox
    const elementValue =
      field.type === "checkbox" ? element.checked : element.value.trim();

    if (!field.validate(elementValue, formElement.elements)) {
      // Set first error element if it is previously unset
      if (!firstErrorElement) {
        // special case for radio since it returns a RadioGroup(Radio[])
        if (field.type === "radio") firstErrorElement = element[0];
        else firstErrorElement = element;
      }
      // Change state to error
      setError(controlElement, field.key);
    } else {
      // Change state to success
      setSuccess(controlElement);
    }
  });

  // Focus the first element which has an error
  if (firstErrorElement) firstErrorElement.focus();

  return firstErrorElement === null;
}

/**
 * Add event listeners to spouse and handle initial state
 */
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
