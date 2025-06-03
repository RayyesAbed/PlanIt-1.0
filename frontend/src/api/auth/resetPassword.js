export const resetPassword = async (token, password) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/reset_password?token=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Resetting password failed: ", error.message);
    return null;
  }
};
