import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import RouteGuard from "./Guard/RouteGuard";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";
import AllProducts from "./Pages/AllProducts/AllProducts";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route element={<RouteGuard />}>
            <Route path={routes.cart} element={<Cart />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={`${routes.home}/:id`} element={<ProductDetails />} />
            <Route path={routes.allProducts} element={<AllProducts />} />
            <Route path={routes.checkOut} element={<CheckOut />} />
          </Route>
          <Route path={routes.signIn} element={<SignIn />} />
          <Route path={routes.signUp} element={<SignUp />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.notFound} element={<NotFound />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
