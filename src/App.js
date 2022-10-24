import './App.css';
import Layout from './Components/Layout/Layout';
import HomePage from './Modules/HomePage';
import CataloguePage from './Modules/CataloguePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import GemPage from './Modules/GemPage';
import CartPage from './Modules/CartPage';
import SuccessPage from './Modules/SuccessPage';
import FormPage from './Modules/FormPage';
import SignInPage from './Modules/SignInPage';
import LoginPage from './Modules/LogInPage';



export default function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

function AppRoutes(props) {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} >
        {/* {props.isAuthentificated ? <HomePage /> : null} */}
      </Route>
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/catalogue/:id" element={<GemPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/buy-form" element={<FormPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/log-in" element={<LoginPage />} />
    </Routes>
  )
}
