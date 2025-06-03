const getEditFieldConfig = (editField, userData) => {
  let lower = editField ? editField.toLowerCase() : "";
  return {
    label: `Change ${editField}`,
    name: editField,
    type:
      editField === "Email"
        ? "email"
        : editField === "Password"
        ? "password"
        : "text",
    defaultValue: userData?.[lower] ?? "",
  };
};

export default getEditFieldConfig;
