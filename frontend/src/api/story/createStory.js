export const createStory = async (storyPrompt) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/ai/createStory`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ storyPrompt }),
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
    console.error("Error creating story:", error);
    return null;
  }
};
