import { resetForm } from "./reset";
import { checkMaritalStatus, validate } from "./validate";

function app() {
  const form = document.getElementById("form");
  const resetButton = document.getElementById("reset");
  const firstNameElement = document.getElementById("firstname");

  function initializeApp() {
    firstNameElement.focus();

    form.onsubmit = (e) => {
      e.preventDefault();
      if (validate(e.target)) {
        setTimeout(() => {
          alert("Thank you for filling the form");
        }, 10);
      }
    };
    resetButton.onclick = () => {
      resetForm(form);
    };

    checkMaritalStatus();
  }

  initializeApp();
}

app();
