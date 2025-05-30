import { useEffect } from "react";
import { useState } from "react";
import { getAvatar } from "../api/getAvatar";

const useFetchUserAvatar = () => {
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    getAvatar()
      .then((data) => setUserAvatar(data.url))
      .catch((error) => console.error("Failed to fetch user avatar: ", error));
  }, []);

  return userAvatar;
};

export default useFetchUserAvatar;
