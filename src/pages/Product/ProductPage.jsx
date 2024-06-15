import React, { useEffect } from 'react'
import ProductsTable from '../../components/ProductsTable';
import useGetProducts from '../../hooks/useGetProducts';
import CreateProducts from '../../components/CreateProducts';
import { useNavigate } from 'react-router-dom';

function ProductPage() {
  const products = useGetProducts();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/login")
    }
  },[navigate])

    return (
    <div>
        <CreateProducts />
        <ProductsTable products={products} />
    </div>
  )
}

export default ProductPage
