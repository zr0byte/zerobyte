import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Docs from "./components/Docs.jsx";
import HomePage from "./components/HomePage.jsx";
import { NotFound } from "./components/NotFound.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
