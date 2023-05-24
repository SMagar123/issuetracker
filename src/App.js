import {Routes, Route } from "react-router-dom";
import { createContext } from "react";
import "./App.scss";
import {

  AdminHeropage,
  NegotiateForm,
  SorryMessage,
  CompletionForm,
  RequirementView,
} from "./pages";
import { Navbar } from "./components";

  AddIssue,
  Admin,
  IssueInfo,
  Login,
  User,
  PageNotFound,
} from "./pages";
const LoginContext = createContext();
function App() {
  const tokenString = sessionStorage.getItem("token");
  return (
    <LoginContext.Provider value={tokenString}>
       <Navbar />
      <Routes>
        {/* <Route path="/" element={<Login />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/addissue/:id" element={<AddIssue />} />
        <Route path="/issueinfo" element={<IssueInfo />} />
        <Route path="/admin" element={<Admin />} />
           <Route path="/" element={<AdminHeropage />} />
          <Route path="/negotiate-form/:id" element={<NegotiateForm />} />
          <Route path="/completion-form/:id" element={<CompletionForm />} />
          <Route path="/cannot-resolve/:id" element={<SorryMessage />} />
          <Route path="/requirement/:id" element={<RequirementView />} />
        <Route path="*" element={<PageNotFound />} />
        {/* </Route> */}
      </Routes>
    </LoginContext.Provider>

  );
}

export default App;
export { LoginContext };