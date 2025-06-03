export const getTasks = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/tasks/list`,
      {
        credentials: "include",
      }
    );

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      const errorDetails = await response.text();
      throw new Error(`${errorMessage} - ${errorDetails}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Server Error: ", error.message);
    return;
  }
};
