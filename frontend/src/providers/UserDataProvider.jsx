import { useEffect, useState } from "react";
import { UserDataContext } from "../contexts/UserDataContext";
import { fetchUserData } from "../api/user/fetchUserData";
import { getAvatar } from "../api/user/getAvatar";

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({ data: null, image: null });

  useEffect(() => {
    const loadUser = async () => {
      const data = await fetchUserData();
      const image = await getAvatar();
      setUserData({ data: data, image: image });
    };
    loadUser();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
