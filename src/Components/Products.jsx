import React from "react";
import PorcutCard from "./PorcutCard";
import {productlist} from '../data/productList'
// moved this to a seperate constant file
// const productlist = [
//   {
//     img: "https://assets.ajio.com/medias/sys_master/root/20230731/AUc0/64c7cd80eebac147fc977b74/john_players_beige_zip-front_slim_fit_puffer_jacker.jpg",
//     name: "John players",
//     desc: " Zip-Front Slim Fit Puffer Jacker",
//     price: 10000,
//     discountInPercentage: 50,
//   },
//   {
//     img: "https://assets.ajio.com/medias/sys_master/root/20231006/nN5V/651f602fafa4cf41f52bb515/-473Wx593H-466676031-green-MODEL2.jpg",
//     name: "SNITCH",
//     desc: "Button-Down Shirt with Full Sleeves",
//     price: 1998,
//     discountInPercentage: 60,
//   }
// ];
function Products() {
  {
    /* everytime we will get same imageas we have hard coded */
  }
  {
    /* below function return an html */
  }
  return (
    <div className="products">
      <div className="product-container">
        {/* RENDERING LIST USING MAP FUNCTION */}
        {productlist.map((product,idx) => (
          <PorcutCard
            key={idx}
            id={idx}
            img={product.img}
            name={product.name}
            desc={product.desc}
            price={product.price}
            discountInPercentage={product.discountInPercentage}
          />
        ))}
        <PorcutCard
          img="https://assets.ajio.com/medias/sys_master/root/20231015/pnzp/652be96dafa4cf41f5438c3d/-473Wx593H-466706598-beige-MODEL.jpg"
          name="SNITCH"
          desc="Men Regular Fit Polo T-Shirt with Ribbed Hem"
          price={1998}
          discountInPercentage={60}
          id={5}
        />
      </div>
    </div>
  );
}

export default Products;
