import { Button } from 'antd'
import React from 'react'
import { deleteProduct } from '../api';
import confirm from 'antd/es/modal/confirm';

function DeleteProduct({ productId }) {


    const handleDelete = async () => {
        const isAgree = confirm("are you agree  to delete product");
        if(isAgree) {
            const response = await deleteProduct(productId);
            if(response) {
                alert('Delete product')
            }
        }
    }
  return (
    <div>
      <Button onClick={handleDelete} type='primary'>Delete</Button>
    </div>
  )
}

export default DeleteProduct
