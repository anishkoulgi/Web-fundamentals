import { fields } from "./constants";
import { resetForm } from "./reset";
import { checkMaritalStatus, validate } from "./validate";

/**
 * App function wrapper for the entire application
 */
function app() {
  // Initialize required DOM elements for initial load
  const form = document.getElementById("form");
  const resetButton = document.getElementById("reset");
  const firstNameElement = document.getElementById("firstname");

  function displayForm(form) {
    let displayString = "";
    fields.forEach((field) => {
      if (field.display) {
        displayString +=
          field.display +
          ": " +
          (form.elements[field.name].value || "N.A") +
          "\n";
      }
    });

    // Use setTimeout to allow DOM changes before alert triggers
    setTimeout(() => {
      alert(
        `Thank you for filling the form. Here are your details: \n${displayString}`
      );
    }, 10);
  }

  function initializeApp() {
    // Set focus on the firstname input
    firstNameElement.focus();

    // Handle form submit
    form.onsubmit = (e) => {
      e.preventDefault();
      const formElement = e.target;
      if (validate(formElement)) {
        displayForm(formElement);
      }
    };
    resetButton.onclick = () => {
      resetForm(form);
    };

    // Attach event listeners to the Marital status radio buttons to enable/disable spouse input
    checkMaritalStatus();
  }

  initializeApp();
}

app();
