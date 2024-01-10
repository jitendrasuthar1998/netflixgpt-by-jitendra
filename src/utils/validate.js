export const validateEmailAndPassword = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  console.log("email at validation",email);

  // console.log("isEmailValid", isEmailValid);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const validateSignUpData = (name, email, password) => {
  const validUsername = /^[0-9A-Za-z]{6,16}$/.test(name);
  if (!validUsername) return "Name is not valid";
  const isEmailOrPasswordValid = validateEmailAndPassword(email, password);
  return isEmailOrPasswordValid;
};
