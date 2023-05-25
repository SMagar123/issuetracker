import { useState } from "react";
import secureLocalStorage from "react-secure-storage";
const useToken = () => {
  const getToken = () => {
    const tokenString = secureLocalStorage.getItem("token");
    // const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    secureLocalStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };
  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
