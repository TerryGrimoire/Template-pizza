import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer/Footer";
import Home2 from "./pages/Home2";
import Services from "./pages/Services";
import Error from "./pages/Error";

import "./App.css";

function App() {
  const helmet = {
    title: "",
    href: "https://changehref.com",
    description: "",
  };
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/:id" element={<Home2 helmet={helmet} />} />
          <Route path="/:id/pizzas" element={<Services helmet={helmet} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
