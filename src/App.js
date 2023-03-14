import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./container/Header";
import "./App.css";
import ProductDetails from "./container/ProductDatials";
import Home from "./container/Home";

// function Home() {
//   return <h1>Welcome to my website!</h1>;
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
