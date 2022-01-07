/**
 * Fields array containing various properties and helpers
 */
export const fields = [
  {
    name: "firstname",
    validate: (val) => val.length > 0 && val.length <= 50,
    id: "firstname",
    type: "text",
    display: "First Name",
    key: "Please enter First Name",
  },
  {
    name: "lastname",
    validate: (val) => val.length > 0 && val.length <= 50,
    id: "lastname",
    type: "text",
    display: "Last Name",
    key: "Please enter Last Name",
  },
  {
    name: "gender",
    validate: (val) => val.length > 0,
    id: "gender-radio",
    type: "radio",
    display: "Gender",
    key: "Please select Gender",
  },
  {
    name: "marital",
    validate: (val) => val.length > 0,
    id: "marital-radio",
    type: "radio",
    display: "Marital Status",
    key: "Please select Marital Status",
  },
  {
    name: "spouse",
    validate: (val, state) =>
      state.marital.value !== "Married" || (val.length > 0 && val.length <= 50),
    id: "spouse",
    type: "text",
    display: "Spouse name",
    key: "Please enter Spouse name",
  },

  {
    name: "other",
    validate: (val) => val.length > 0 && val.length <= 500,
    id: "other",
    type: "text",
    display: "Other Details",
    key: "Please enter Other Details",
  },
  {
    name: "terms",
    validate: (val) => val,
    id: "terms",
    type: "checkbox",
    key: "Please accept Terms and Conditions",
  },
];
