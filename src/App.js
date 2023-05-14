import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { AddIssue, Login, User, ViewNegotiable } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<User />} />
        <Route path="/addissue" element={<AddIssue />} />
        <Route path="/viewpage/:id" element={<ViewNegotiable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
