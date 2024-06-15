import axios from "axios";


const backendUrl = "https://ecommerce-backend-fawn-eight.vercel.app/api"


export async function createProducts(data) {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${backendUrl}/products`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function getProductById(productId) {
    try {
        const response = await axios.get(`${backendUrl}/products/${productId}`)
        return response;
    } catch(error) {
        console.log(error);
    }
}   

export async function editProduct(data, productId) {
    try {
        const response = await axios.put(`${backendUrl}/products/${productId}`, data)
        return response;
    } catch(error) {
        console.log(error);
    }
}

export async function deleteProduct(productId) {

    try{
        const response = await axios.delete(`${backendUrl}/products/${productId}`, {
            headers : {
                'Content-Type': 'application/json',
                Authorization : localStorage.getItem("token"),
            }
        }
    );


    
    }catch (err) {
      console.log("Xatolik yuz berdi", err)  
    }
}