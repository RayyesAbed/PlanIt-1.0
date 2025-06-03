export const modifyAvatar = async (formData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/user_data/upload_avatar`,
      {
        credentials: "include",
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      const errorDetails = await response.text();
      throw new Error(`${errorMessage} - ${errorDetails}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
