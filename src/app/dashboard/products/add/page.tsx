import React from "react";
import "./_addProduct.scss";
const AddProduct = () => {
  return (
    <form action="">
      <div className="add-product-container">
        <div className="cols">
          <div className="col-left">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Price" />
            <input type="text" placeholder="Color" />
          </div>
          <div className="col-right">
            <input type="text" placeholder="Stock" />
            <input type="text" placeholder="Size" />
            <select name="isActive" id="isActive">
              <option value="false">Choose a Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Phone">Phone</option>
              <option value="Laptop">Laptop</option>
              <option value="Monitor">Monitor</option>
            </select>
          </div>
        </div>
        <textarea name="desc" id="desc" cols={30} rows={10} placeholder="Description"></textarea>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddProduct;
