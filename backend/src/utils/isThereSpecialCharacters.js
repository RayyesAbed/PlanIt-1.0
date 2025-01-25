export const isThereSpecialCharacters = (string) => {
  const specialCharacterRegex = /[^a-zA-Z0-9 ]/;
  return specialCharacterRegex.test(string);
};
