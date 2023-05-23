import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import "./App.scss";
import {
  AddIssue,
  Admin,
  IssueInfo,
  Login,
  User,
  ViewNegotiable,
  PageNotFound,
} from "./pages";
const LoginContext = createContext();
function App() {
  const tokenString = sessionStorage.getItem("token");
  return (
    <LoginContext.Provider value={tokenString}>
      <Routes>
        {/* <Route path="/" element={<Login />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/addissue/:id" element={<AddIssue />} />
        <Route path="/issueinfo" element={<IssueInfo />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
        {/* </Route> */}
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
export { LoginContext };
