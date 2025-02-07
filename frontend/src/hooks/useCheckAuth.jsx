import { useEffect } from "react";
import { useNavigate } from "react-router";
import { checkAuth } from "../api/checkAuth";

const useCheckAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const result = async () => {
      const response = await checkAuth();
      if (!response.ok) {
        navigate("/login");
      }
    };

    result();
  }, [navigate]);
};

export default useCheckAuth;
