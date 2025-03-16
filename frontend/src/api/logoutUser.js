export const logoutUser = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
      {
        credentials: "include",
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Login user failed: ", error.message);
  }
};
