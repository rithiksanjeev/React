import React from 'react'
import { useParams } from 'react-router-dom'
import { productlist } from '../data/productList';

const ProductDeatils = (props) => {
    // after route the value that user gives is product id
    const {productId} = useParams()
    console.log(useParams(),productId);
    // from product list we pass the index and get the details of the item
    console.log(productlist[productId]);
    const {img,name,desc,price,discountInPercentage} = productlist[productId];
  return (
    <div className='product-detail-container'>
      <h1>Product Detail</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum at rem nemo aliquid adipisci itaque molestiae assumenda, doloremque doloribus quos atque ex aperiam earum. Tenetur modi ipsum unde tempore illo!</p>
      <div className="product-detail">
        <p><img src={img} alt="" /></p>
        <p>{name}</p>
        <p>{desc}</p>
        <div className="product-price">
            {/* span - same line */}
            <span className="product-price-final">₹{price*discountInPercentage/100}</span>
            <span className="product-price-original">₹{price}</span>
            <span className="product-price-discount">{discountInPercentage}% off</span>
        </div>
        <div className="add-to-cart">
            <button className='add'>Add to cart</button>
            <button >Buy Now</button>
        </div>
    </div>
    </div>
  )
}

export default ProductDeatils
