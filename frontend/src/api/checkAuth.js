export const checkAuth = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/auth/checkAuth`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  return response;
};
