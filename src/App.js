import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { AddIssue, User } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/addissue" element={<AddIssue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
