import { useEffect, useState } from "react";
import { checkAuth } from "../api/auth/checkAuth";

const useCheckAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const result = async () => {
      const response = await checkAuth();
      if (!response.ok) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    };

    result();
  }, []);

  return isAuthenticated;
};

export default useCheckAuth;
