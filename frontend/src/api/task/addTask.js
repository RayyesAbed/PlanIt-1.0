export const addTask = async (task) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/tasks/add_task`,
      {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(task),
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
  }
};
