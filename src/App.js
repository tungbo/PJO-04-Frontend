import './App.css';
import {Route,Routes} from "react-router-dom"
import PrivateLayout from './Layout/PrivateLayout';
import Home from './pages/Home/Home';
import PublicLayout from './Layout/PublicLayout';
import Login from './pages/Login/Login';
import Product from './pages/Menu/Product';
import Loading from './Component/Loading/Loading';
import Cart from './pages/Cart/Cart';
import ProductDetail from './pages/ProductDetail/ProductDetail';
function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<PublicLayout/>}>
            <Route index element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/OurMenu' element={<Product/>}/>
            <Route path='/ProductDetail' element={<ProductDetail/>}/>
          </Route>
          <Route path="/Pizza" element={<PrivateLayout/>}>
            <Route path='/Pizza/Cart' element={<Cart/>} />
          </Route>
        </Routes>
        <Loading/>
      </div>
  );
}

export default App;
