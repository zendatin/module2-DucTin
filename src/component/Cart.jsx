    import React from "react";
    import { useSelector } from "react-redux";
    import { handleCart } from "../redux/reducer/HandleCart";
    import { useDispatch } from "react-redux";
    import { deleteItem, updateQuantity } from "../redux/action/Index";
    import { updateAccount } from "../redux/action/UpdateAccount";
    import axios from "axios";

    export default function Cart() {
    const product = useSelector((state) => state.handleCart);
    const account = useSelector((state) => state.account);
    console.log(product);
    const dispatch = useDispatch();
    const handleChangeItem = (item) => {
        item.quantity = item.quantity - 1;
        dispatch(updateQuantity(item));
    };
    const handleChangeItem1 = (item) => {
        item.quantity = item.quantity + 1;
        dispatch(updateQuantity(item));
    };
    const handleDelete=(e)=>{
        dispatch(deleteItem(e))
    }
    console.log(product);
    const handlePurchase= async ()=>{
        const productToUser=product.map((item)=>({...item,date: new Date().toLocaleDateString(),username:account.username,password:account.password}));
        dispatch(updateAccount(productToUser))
        console.log(productToUser);
        
        try {
            const newArray=[...productToUser]
            const response = await axios.post(
                "http://localhost:3000/account",
                JSON.stringify(newArray),
                {
                  headers: { "Content-Type": "application/json" },
                  withCredentials: true,
                }
              );
        }
        catch (err) {
           alert('Purchased Error')
        }
       
    }
    console.log(product);
    
    return (
        <>
        {(product.length>0)?(<div className="d-flex">
            <div className="col-md-6" >
                {product.map((item) => {
                return (
                    
                    <div className="d-flex col-md-12">
                        <div
                        className="btn btn-outline-info col-md-5 mb-1"
                        style={{ marginRight: "40px" }}
                        >
                        <img src={item.image} alt="" height={200} width={200} />
                        </div>
                        <div className="col-md-7 lh-lg">
                        <h4 className="text-uppercase text-black-50">
                            {item.category}
                        </h4>
                        <div className="display-8 text-left">{item.title}</div>
                        <div className="fw-bolder">Quantity:{item.quantity}</div>
                        <button
                            className="btn btn-outline-primary mr-20"
                            style={{ marginRight: "20px" }}
                            onClick={() => handleChangeItem(item)}
                        >
                            -
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => handleChangeItem1(item)}
                        >
                            +
                        </button>
                        <div className="fw-bolder">Price:{item.price}$</div>
                        </div>
                    </div>
                    
                );
                })}
            </div>
           
            <div className="col-md-6" >
                <table className="col-md-12 table table-hover table-striped table-bordered table-success">
                    <tr >
                    <th>Category</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                    </tr>
                    {product.map((item) => {
                    return (
                        <>
                        <tr>
                            <td>{item.category}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price * item.quantity}</td>
                            <td><button onClick={()=>handleDelete(item)}>Delete</button></td>
                        </tr>
                      
                        </>
                    );
                    
                    })}
                      <tr>
                            <td className="fw-bolder">Total</td>
                            <td></td>
                            <td></td>
                            <td>${product.reduce((accumulate,item)=>{return (accumulate+item.quantity*item.price)},0)}</td>
                            <td></td>
                        </tr>
                </table>
                <button className="btn btn-outline-primary" onClick={handlePurchase}>Purchase</button>
            </div>
            </div>):<p>Let choose Items in Product</p>}
            
            </>
        );
        
    }
