import React, { useState } from "react";
import Button from "./Button";
import "./Product.css";

function Product() {
  const product = [
    {
      title: "Brown Egg",
      type: "dairy",
      description: "Raw organic brown eggs in a basket",
      url: "https://s3.amazonaws.com/images.ecwid.com/images/26273031/1370821191.jpg",
      price: 28.1,
      rating: 4,
    },
    {
      title: "Sweet fresh stawberry",
      type: "fruit",
      description: "Sweet fresh stawberry on the wooden table",
      url: "https://cgreenag.com/assets/images/crop-images/strawberry/Strawberrieswithleaves..png",
      price: 29.45,
      rating: 4,
    },
    {
      title: "Laptop",
      type: "electronics",
      description: "Dell Latitude 5410",
      url: "https://i5.walmartimages.com/asr/9555580b-d38c-4d19-88b0-61991bf6c33f_1.7fc8d4fa1fa63c94dee13b67aae2e856.jpeg",
      price: 50000,
      rating: 5,
    },
    {
      title: "Mixed Dry Fruits",
      type: "Dry fruit",
      description: "Organic item",
      url: "https://tse2.mm.bing.net/th/id/OIP.pdIjr_uWgdGfTZ7pQGa__QHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      price: "108.00",
      rating: 5,
    },
  ];
  const [sSearchName, setsearchName] = useState("");
  const handleChange = (event) => {
    setsearchName(event.target.value);
  };
  const handleSubmit = () => {
    console.log(sSearchName);
  };
  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        value={sSearchName}
        onChange={handleChange}
        placeholder="Search product name"
      ></input>
      <button type="submit" class="btn" onClick={handleSubmit}>
        Search
      </button>
      <div className="main-div">
        {product
          .filter((product) =>
            product.title.toLowerCase().match(sSearchName.toLowerCase())
          )
          .map((product) => (
            <div className="product_list">
              <label className="title"> {product.title} </label>
              <br />
              <br />
              <img
                src={product.url}
                alt="Product"
                height="250px"
                width="250px"
              ></img>
              <br />
              <label className="description"> {product.description} </label>
              <br />
              <br />
              <Button value="Like"></Button>
              <Button value="Share"></Button>
              <Button value="Purchase"></Button>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
