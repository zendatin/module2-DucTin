import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Product from './component/Product';
import {Routes,Route } from 'react-router-dom';
import ProductItem from './component/ProductItem';
import Cart from './component/Cart';
import Register from './component/Register';
import SignUp from './component/SignUp';
import SignInBootstrap from './component/SignInBootstrap';
import RegisterBootstrap from './component/RegisterBootstrap';
import AuthenticRegister from './component/AuthenticRegister';
import SignInAuthentic from './component/SignInAuthentic';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/product' element={<Product/>}/>
        <Route exact path='/product/:id' element={<ProductItem />}/>
        <Route exact path='/cart' element={<Cart />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/signin' element={<SignUp/>}/>
        <Route path='/signinbootstrap' element={<SignInBootstrap/>}/>
        <Route path='/registerbootstrap' element={<RegisterBootstrap/>}/>
        <Route path='/authenticregister' element={<AuthenticRegister/>}/>
        <Route path='/signinauthentic' element={<SignInAuthentic/>}/>
       

      </Routes>
    </div>
  );
}

export default App;
