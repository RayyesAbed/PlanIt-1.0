export const verifyNewUser = async (token) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/auth/verify-email?token=${token}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Verification Failed!");
  }

  return response.json();
};
