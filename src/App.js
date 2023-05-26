import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.scss";
import secureLocalStorage from "react-secure-storage";
import {
  AdminHeropage,
  NegotiateForm,
  SorryMessage,
  CompletionForm,
  RequirementView,
  AddIssue,
  IssueInfo,
  Login,
  User,
  PageNotFound,
  Register,
} from "./pages";

const LoginContext = createContext();
function App() {
  const tokenString = secureLocalStorage.getItem("token");
  const [userRole, setUserRole] = useState("");
  const getUserRole = (role) => {
    setUserRole(role);
  };
  const userRoleString = secureLocalStorage.getItem("userrole");
  console.log(userRoleString);
  return (
    <LoginContext.Provider value={{ tokenString, userRole }}>
      <Routes>
        <Route path="/" element={<Login user={getUserRole} />} />

        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/addissue/:id" element={<AddIssue />} />
        <Route path="/issueinfo" element={<IssueInfo />} />
        <Route path="/admin" element={<AdminHeropage />} />
        <Route path="/admin/negotiate-form/:id" element={<NegotiateForm />} />
        <Route path="/admin/completion-form/:id" element={<CompletionForm />} />
        <Route path="/admin/cannot-resolve/:id" element={<SorryMessage />} />

        <Route path="/admin/requirement/:id" element={<RequirementView />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
export { LoginContext };
