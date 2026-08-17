export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/tasks/delete_task`,
      {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: taskId }),
      }
    );

    if (!response.ok) {
      const errorMessage = `Error: ${response.status} ${response.statusText}`;
      const errorDetails = await response.text();
      throw new Error(`${errorMessage} - ${errorDetails}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Server Error:", error.message);
    return;
  }
};
