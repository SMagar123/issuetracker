import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { AddIssue, IssueInfo, Login, User, ViewNegotiable } from "./pages";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<User />} />
        <Route path="/viewprofile" element={<UserProfile/>}/>
         <Route path="/addissue" element={<AddIssue />} />
         <Route path="/issueinfo" element={<IssueInfo />} />
        <Route path="/viewpage/:id" element={<ViewNegotiable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
