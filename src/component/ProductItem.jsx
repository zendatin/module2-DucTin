import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action/Index';

export default function ProductItem() {
    const{id}=useParams();
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
  useEffect(()=>{
    const getProduct= async ()=>{
        setLoading(true);
        const response= await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
    }
    getProduct()
  },[])
  const Loading=()=>{
    return (
        <>
       <div className="col-md-6">
        <Skeleton height={400} width={400} />
       </div>
       <div className='col-md-6'>
          <Skeleton height={100} width={400} />
          <Skeleton height={100} width={400} />
          <Skeleton height={100} width={400} />
          <Skeleton height={100} width={400} />
       </div>
        </>
    )
  }
  const handleClick=()=>{
    dispatch(addItem(product))
  }
  const ShowProduct=(item)=>{
    return (
        <>  
        <div className="col-md-6">
            <img src={product.image} alt="" height={300} width={300} />
        </div>
        <div className="col-md-6 text-left">
            <h4 className='text-uppercase text-black-50'>
                {product.category}
            </h4>
            <div className="display-8 text-left">{product.title}</div>
            <p className="lead">
                Rating:{product.rating&&product.rating.rate}
                <i className='fa fa-star'></i>
            </p>
            <h3 className='display-7 fw-bolder my-4'>Price:{product.price}$</h3>
            <p>{product.description}</p>
            <button className='btn btn-outline-dark mx-3 ' onClick={handleClick}>Add to cart</button>
            <NavLink className='btn btn-primary ' to='/cart'>Go to cart</NavLink>
        </div>
        </>
    )
  }

    
  return (
    <div>
        <div className='container'>
          <div className="row">
              {loading?<Loading/>:<ShowProduct/>}
          </div>
        </div>
    </div>
  )
}
