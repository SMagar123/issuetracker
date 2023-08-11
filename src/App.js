import { Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
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
const FieldContext = createContext();
function App() {
  const tokenString = secureLocalStorage.getItem("token");
  const [userRole, setUserRole] = useState("");
  const getUserRole = (role) => {
    setUserRole(role);
  };

  const userRoleString = secureLocalStorage.getItem("userrole");
  console.log(userRoleString);
  const [selectField, setSelectedField] = useState("hello");
  console.log(selectField);
  return (
    <LoginContext.Provider value={{ tokenString, userRole, selectField }}>
      <Routes>
        <Route path="/" element={<Login user={getUserRole} />} />

        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/addissue/:id" element={<AddIssue />} />
        <Route path="/issueinfo" element={<IssueInfo />} />
        <Route
          path="/admin"
          element={<AdminHeropage getSelectedField={setSelectedField} />}
        />
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
