import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { UserProfile } from "./components/UserProfile";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/user/:id" element={< ProtectedRoute Component={User} />} />
        <Route path="/viewprofile" element={<UserProfile />} />
        <Route path="/addissue/:id" element={<ProtectedRoute Component={AddIssue} />} />
        <Route path="/issueinfo" element={<ProtectedRoute Component={IssueInfo} />} />
        {/* <Route path="/:id" element={<ViewNegotiable />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
