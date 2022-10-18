import './App.css';
import Layout from './Components/Layout/Layout';
import HomePage from './Modules/HomePage';
import CataloguePage from './Modules/CataloguePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GemPage from './Modules/GemPage';


export default function App() {
  return (
    <Router>
        <Layout>
          <AppRoutes />
        </Layout>
    </Router>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/catalogue/:id" element={<GemPage />} />
    </Routes>
  )
}
