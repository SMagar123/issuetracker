import { useState } from "react";
import secureLocalStorage from "react-secure-storage";
const useRole = () => {
  const getRole = () => {
    const roleString = secureLocalStorage.getItem("userrole");
    // const roleString = sessionStorage.getItem("role");
    const userRole = JSON.parse(roleString);
    return userRole?.role;
  };

  const [role, setRole] = useState(getRole());

  const saveRole = (userRole) => {
    secureLocalStorage.setItem("userrole", JSON.stringify(userRole));
    setRole(userRole.role);
  };
  return {
    setRole: saveRole,
    role,
  };
};

export default useRole;
