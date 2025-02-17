export const getTasks = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/tasks/list`,
      {
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tasks!");
    }

    return await response.json();
  } catch (error) {
    console.error("Server Error: ", error.message);
    return;
  }
};
