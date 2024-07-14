import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "./Layout/PrivateLayout";
import Home from "./pages/Home/Home";
import PublicLayout from "./Layout/PublicLayout";
import Login from "./pages/Login/Login";
import Product from "./pages/Menu/Product";
import Loading from "./Component/Loading/Loading";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import User from "./pages/Admin/User/User";
import UserDetail from "./pages/Admin/UserDetail/UserDetail";
import Pizza from "./pages/Admin/Pizza/Pizza";
import PizzaDetail from "./pages/Admin/PizzaDetail/PizzaDetail";
import Size from "./pages/Admin/Size/Size";
import SizeDetail from "./pages/Admin/SizeDetail/SizeDetail";
import SizeForm from "./pages/Admin/SizeForm/SizeForm";
import Order from "./pages/Admin/Order/Order";
import OrderDetail from "./pages/Admin/OrderDetail/OrderDetail";
import PizzaForm from "./pages/Admin/PizzaForm/PizzaForm";
import AdminLayout from "./Layout/AdminLayout";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/OurMenu" element={<Product />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/User" element={<User />} />
          <Route path="/admin/UserDetail" element={<UserDetail />} />
          <Route path="/admin/Pizza" element={<Pizza />} />
          <Route path="/admin/PizzaDetail" element={<PizzaDetail />} />
          <Route path="/admin/PizzaForm" element={<PizzaForm />} />
          <Route path="/admin/Size" element={<Size />} />
          <Route path="/admin/SizeDetail" element={<SizeDetail />} />
          <Route path="/admin/SizeForm" element={<SizeForm />} />
          <Route path="/admin/Order" element={<Order />} />
          <Route
            path="/admin/OrderDetail/:idAccount/:idOrderPiza"
            element={<OrderDetail />}
          />
        </Route>
        <Route path="/Pizza" element={<PrivateLayout />}>
          <Route path="/Pizza/Cart" element={<Cart />} />
        </Route>
      </Routes>
      <Loading />
    </div>
  );
}

export default App;
