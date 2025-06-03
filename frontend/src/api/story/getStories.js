export const getStories = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/ai/getStories`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      const errorDetails = await response.text();
      throw new Error(`${errorMessage} - ${errorDetails}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching stories:", error);
    return null;
  }
};
