import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Header from "./Components/Header";
import Review from "./Components/Review";
import Footer from "./Components/Footer";
import BuyNow from "./Components/BuyNow";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<BuyNow />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

function HomePage() {
  return (
    <div>
      <Header />
      <Products />
      <div className="container">
        <Review />
      </div>
    </div>
  );
}

export default App;
