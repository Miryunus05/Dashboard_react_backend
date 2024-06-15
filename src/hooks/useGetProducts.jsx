import axios from 'axios';
import { useEffect, useState } from 'react'

function useGetProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getProducts() {
            try {
                const backendUrl = "https://ecommerce-backend-fawn-eight.vercel.app/api"
                const response = await axios.get(`${backendUrl}/products`)
                if(response.data) {
                    setProducts(response.data)
                } 
            } catch(eror) {
                console.log(eror);
            }
        }
        getProducts()
    }, [])
    return products
}

export default useGetProducts
