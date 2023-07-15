import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleCart } from "../redux/reducer/HandleCart";
export default function () {
  const cart=useSelector((state)=>state.handleCart)
  const account=useSelector((state)=>state.account)
  console.log(account);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            IVY STORE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signinbootstrap">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              
            </ul>
         <div className="buttons">
          <NavLink to="/signinauthentic" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i>Login</NavLink>
          <NavLink to="/authenticregister" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i>Register</NavLink>
          <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-cart-arrow-down me-1"></i>Cart ({cart.length})</NavLink>
            {account.username?(<NavLink to="/cart" >
            <i className="fa fa-user-circle-o me-1"></i>Xin chào <br /> {account.username}</NavLink>):'Please Sign in'}
          

         </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
