export const completeTask = async (taskId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/tasks/complete_task`,
      {
        credentials: "include",
        method: "PATCH",
        body: JSON.stringify({ id: taskId }),
        headers: {
          "Content-Type": "application/json",
        },
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
    return;
  }
};
