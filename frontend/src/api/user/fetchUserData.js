export const fetchUserData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/user_data`,
      { credentials: "include" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch user data: ", error);
    return null;
  }
};
