import React from 'react'

function PorcutCard() {
    const original_price = 10000;
    const discountInPercentage = 50;
  return (
    <div className='product-card'>
        <div className='prodcut-img'>
            <img src="https://assets.ajio.com/medias/sys_master/root/20230731/AUc0/64c7cd80eebac147fc977b74/john_players_beige_zip-front_slim_fit_puffer_jacker.jpg"></img>
        </div>
        <div className="prodcutname">
            John players
        </div>
        <div className="product-desc">
             Zip-Front Slim Fit Puffer Jacker
        </div>
        <div className="product-price">
            {/* span - same line */}
            <span className="product-price-final">₹{original_price-discountInPercentage*100}</span>
            <span className="product-price-original">₹{original_price}</span>
            <span className="product-price-discount">{discountInPercentage}% off</span>
        </div>
    </div>
  )
}

export default PorcutCard
