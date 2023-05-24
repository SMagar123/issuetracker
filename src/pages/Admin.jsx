import {
  AdminHeropage,
  NegotiateForm,
  SorryMessage,
  CompletionForm,
  RequirementView,
} from "./pages";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/admin" element={<AdminHeropage />} />
          <Route path="/negotiate-form/:id" element={<NegotiateForm />} />
          <Route path="/completion-form/:id" element={<CompletionForm />} />
          <Route path="/cannot-resolve/:id" element={<SorryMessage />} />
          <Route path="/requirement/:id" element={<RequirementView />} />
        </Routes>
      </div>
   
  );
}