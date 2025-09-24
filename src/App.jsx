import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NoteEditor from "./pages/NoteEditor";

function App() {
  return (
    <BrowserRouter>
      <div className="flex gap-4 p-4 bg-gray-100 border-b">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/dashboard" className="text-blue-500 hover:underline">
          Dashboard
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/note/:id" element={<NoteEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
