export const fields = [
  {
    name: "firstname",
    validate: (val) => val.length > 0 && val.length <= 50,
    id: "firstname",
    type: "text",
  },
  {
    name: "lastname",
    validate: (val) => val.length > 0 && val.length <= 50,
    id: "lastname",
    type: "text",
  },
  {
    name: "gender",
    validate: (val) => val.length > 0,
    id: "gender-radio",
    type: "radio",
  },
  {
    name: "marital",
    validate: (val) => val.length > 0,
    id: "marital-radio",
    type: "radio",
  },
  {
    name: "spouse",
    validate: (val) => val.length > 0 && val.length <= 50,
    id: "spouse",
    type: "text",
  },

  {
    name: "other",
    validate: (val) => val.length > 0 && val.length <= 500,
    id: "other",
    type: "text",
  },
  { name: "terms", validate: (val) => val, id: "terms", type: "checkbox" },
];
