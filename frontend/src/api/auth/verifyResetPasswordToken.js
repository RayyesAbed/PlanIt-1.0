export const verifyResetPasswordToken = async (token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/verify_reset_password_token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    if (!response.ok) {
      throw new Error("Error with resetting password: ", response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error("Error with resetting password: ", error);
    return false;
  }
};
