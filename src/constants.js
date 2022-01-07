export const fields = [
  {
    name: "firstname",
    validate: (val) => val.length > 0 && val.length <= 50,
    id: "firstname",
    type: "text",
    key: "Please enter First Name",
  },
  {
    name: "lastname",
    validate: (val) => val.length > 0 && val.length <= 50,
    id: "lastname",
    type: "text",
    key: "Please enter Last Name",
  },
  {
    name: "gender",
    validate: (val) => val.length > 0,
    id: "gender-radio",
    type: "radio",
    key: "Please select Gender",
  },
  {
    name: "marital",
    validate: (val) => val.length > 0,
    id: "marital-radio",
    type: "radio",
    key: "Please select Marital Status",
  },
  {
    name: "spouse",
    validate: (val, state) =>
      state.marital.value !== "Married" || (val.length > 0 && val.length <= 50),
    id: "spouse",
    type: "text",
    key: "Please enter Spouse name",
  },

  {
    name: "other",
    validate: (val) => val.length > 0 && val.length <= 500,
    id: "other",
    type: "text",
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
