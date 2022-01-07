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

  function initializeApp() {
    // Set focus on the firstname input
    firstNameElement.focus();

    // Handle form submit
    form.onsubmit = (e) => {
      e.preventDefault();
      if (validate(e.target)) {
        // Use setTimeout to allow DOM changes before alert triggers
        setTimeout(() => {
          alert("Thank you for filling the form");
        }, 10);
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
