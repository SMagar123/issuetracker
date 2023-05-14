import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { AddIssue, User, ViewNegotiable } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/addissue" element={<AddIssue />} />
        <Route path="/viewPage/:id" element={<ViewNegotiable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
