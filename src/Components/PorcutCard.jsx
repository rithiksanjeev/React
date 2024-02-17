import React from 'react'
import {Link} from 'react-router-dom'

function PorcutCard(props) {
    // object destructuring shorthand of writing, so we don't call like props.name or props,desc dirceltly can use img
    const {img,id} = props;
    console.log(props);
    const original_price = props.price;
    const discountInPercentage = props.discountInPercentage;
  return (
    // Link to product with routes
    <Link to={'/product/'+ id}>
    <div className='product-card'>
        <div className='prodcut-img'>
            <img src={img}></img>
        </div>
        <div className="prodcutname">
            {props.name}
        </div>
        <div className="product-desc">
                {props.desc}
        </div>
        <div className="product-price">
            {/* span - same line */}
            <span className="product-price-final">₹{original_price*discountInPercentage/100}</span>
            <span className="product-price-original">₹{original_price}</span>
            <span className="product-price-discount">{discountInPercentage}% off</span>
        </div>
    </div>
    </Link>
  )
}

export default PorcutCard
