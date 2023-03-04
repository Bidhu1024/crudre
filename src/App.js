import "./App.css";
import Create from "./Components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";

function App() {
  return (
    <div className="container">
      Create Form
      <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Create />} />
       <Route exact path="/read" element={<Read/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
