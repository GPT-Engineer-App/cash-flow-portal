import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Budgeting from "./pages/Budgeting";
import Investments from "./pages/Investments";
import CreditManagement from "./pages/CreditManagement";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/budgeting" element={<Budgeting />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/credit-management" element={<CreditManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
