import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (<>
    <div className="col-md-3">
        <Skeleton height={350}></Skeleton>
    </div>
    <div className="col-md-3">
        <Skeleton height={350}></Skeleton>
    </div>
    <div className="col-md-3">
        <Skeleton height={350}></Skeleton>
    </div>
    <div className="col-md-3">
        <Skeleton height={350}></Skeleton>
    </div>
    </>);
  };
  const FilterProduct=(NavLink)=>{
    const ListUpdate=data.filter((data)=>data.category==NavLink)
    setFilter(ListUpdate)
  }
  const ShowProduct = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <div className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</div>
          <div className="btn btn-outline-dark me-2" onClick={()=>FilterProduct("men's clothing")}> Men's Clothing</div>
          <div className="btn btn-outline-dark me-2" onClick={()=>FilterProduct("women's clothing")}>Women's clothing</div>
          <div className="btn btn-outline-dark me-2" onClick={()=>FilterProduct("jewelery")}>jewelery</div>
          <div className="btn btn-outline-dark me-2" onClick={()=>FilterProduct("electronics")}>Electronics</div>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-3" key={product.id}>
                <img src={product.image} className="card-img-top" alt="..." height={250} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                  <p className="card-text fw-bold lead">
                    ${product.price}
                  </p>
                  <NavLink to={`/product/${product.id}`} className="btn btn-primary btn-outline-dark">
                    Buy now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
