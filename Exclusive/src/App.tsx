import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./constants/routes";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Cart from "./Pages/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.signIn} element={<SignIn />} />
            <Route path={routes.signUp} element={<SignUp />} />
            <Route path={routes.cart} element={<Cart />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.notFound} element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
