export const editTask = async (taskData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/tasks/edit_task`,
      {
        credentials: "include",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
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
