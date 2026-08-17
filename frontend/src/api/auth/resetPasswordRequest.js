export const resetPasswordRequest = async (email) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/reset_password_request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to send reset password request");
    }
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.error("Error resetting password:", error);
    return null;
  }
};
