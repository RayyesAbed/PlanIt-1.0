export const registerUser = async (userCredentials) => {
  const response = await fetch(
    `${import.meta.env.VITE_FRONTEND_URL}/auth/register_request`,
    {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const responseMessage = await response.json().then((data) => data.message); // get the response message from the backend

  if (!response.ok) {
    alert(responseMessage);
  } else {
    console.log("User registered successfully"); // only for testing purposes
  }
};
