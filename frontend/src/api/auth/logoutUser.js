export const logoutUser = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
      {
        credentials: "include",
        method: "POST",
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Logout user failed: ", error.message);
  }
};
