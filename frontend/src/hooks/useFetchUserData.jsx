import { useEffect, useState } from "react";
import { fetchUserData } from "../api/user/fetchUserData";

const useFetchUserData = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetchUserData();
      setUserData(response);
    };
    getUserData();
  }, []);

  return userData;
};

export default useFetchUserData;
