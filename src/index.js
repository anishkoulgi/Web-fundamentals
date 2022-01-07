import { checkMaritalStatus, validate } from "./validate";

function app() {
  const form = document.getElementById("form");

  form.onsubmit = (e) => {
    e.preventDefault();
    validate(e.target);
  };

  checkMaritalStatus();
}

app();
