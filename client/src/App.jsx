import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Description from "./pages/description/Description";
import Installment from "./pages/installment/Installment";
import Warranty from "./pages/warranty/Warranty";
import Promotion from "./pages/promotion/Promotion";
import Cart from "./pages/cart/Cart";

const queryClient = new QueryClient();

const App = () => (
  <div className="app">
    <QueryClientProvider client={queryClient}>
      <Navbar className="navbar" />
      <Menu />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/khuyen-mai" element={<Promotion />} />
          <Route path="/bao-hanh-hau-mai" element={<Warranty />} />
          <Route path="/tra-gop" element={<Installment />} />
          <Route path="/desc/:id" element={<Description />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </QueryClientProvider>
  </div>
);

export default App;
