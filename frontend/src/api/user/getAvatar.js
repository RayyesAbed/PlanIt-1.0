export const getAvatar = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/user_data/get_avatar`,
      { credentials: "include" }
    );

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      const errorDetails = await response.text();
      throw new Error(`${errorMessage} - ${errorDetails}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch user avatar: ", error);
    return null;
  }
};
