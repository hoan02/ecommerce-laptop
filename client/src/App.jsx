import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Description from "./pages/description/Description";

const queryClient = new QueryClient();

const App = () => (
  <div className="app">
    <QueryClientProvider client={queryClient}>
      <Navbar className="navbar" />
      <Menu />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desc/" element={<Description />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </QueryClientProvider>
  </div>
);

export default App;
