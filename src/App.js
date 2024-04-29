import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyForm from "./Components/MyForm";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
