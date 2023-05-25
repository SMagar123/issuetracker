import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import "./App.scss";
import {
  AdminHeropage,
  NegotiateForm,
  SorryMessage,
  CompletionForm,
  RequirementView,
  AddIssue,
  Admin,
  IssueInfo,
  Login,
  User,
  PageNotFound,
  Register,
} from "./pages";
import { Navbar } from "./components";

const LoginContext = createContext();
function App() {
  const tokenString = sessionStorage.getItem("token");
  return (
    <LoginContext.Provider value={tokenString}>
      <Routes>
        {/* <Route path="/" element={<Login />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/user/:id" element={<User />} />
        <Route path="/addissue/:id" element={<AddIssue />} />
        <Route path="/issueinfo" element={<IssueInfo />} />
        <Route path="/admin" element={<AdminHeropage />} />
        {/* <Route path="/admin/negotiate-form/:id" element={<NegotiateForm />} />
        <Route path="/admin/completion-form/:id" element={<CompletionForm />} />
        <Route path="/admin/cannot-resolve/:id" element={<SorryMessage />} />
        <Route path="/admin/requirement/:id" element={<RequirementView />} /> */}

        <Route path="*" element={<PageNotFound />} />
        {/* </Route> */}
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
export { LoginContext };
