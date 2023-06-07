import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
// import ProductPage from "./Container/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
        {/* <Route path="/product" element={<ProductPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
