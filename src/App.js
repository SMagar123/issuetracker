import "./App.scss";
import {
  AdminHeropage,
  NegotiateForm,
  SorryMessage,
  CompletionForm,
} from "./pages";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AdminHeropage />} />
          <Route path="/negotiate-form/:id" element={<NegotiateForm />} />
          <Route path="/completion-form/:id" element={<CompletionForm />} />
          <Route path="/cannot-resolve/:id" element={<SorryMessage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
