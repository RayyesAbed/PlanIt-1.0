const GetSpecificDialogComponent = ({ type, name, defaultValue }) => {
  let content;

  if (name === "Email" || name === "Name") {
    content = <input type={type} defaultValue={defaultValue} name={name} />;
  } else if (name === "Password") {
  }

  return content;
};

export default GetSpecificDialogComponent;
