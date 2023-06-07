import "./App.css";
import { Routes, Route } from "react-router-dom";

import ProductPage from "./Container/ProductPage/ProductPage";

import HomePageOne from "./Container/HomePageOne/HomePageOne";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/" element={<HomePageOne />} /> /
      </Routes>
    </div>
  );
}

export default App;
