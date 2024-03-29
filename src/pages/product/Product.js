import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productsData } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="sale in month" data={productsData} dataKey="sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="/images/laptop4.avif"
              alt="Dell lap top"
              className="productInfoImg"
            />
            <span className="productName">Dell LapTop</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">Dell laptop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">$90000</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">active</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock:</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Dell LapTop" />
            <label>in Stock</label>
            <select id="inStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>

            <label>Active</label>
            <select id="inStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img
                src="/images/laptop3.png"
                alt="profile photo"
                className="productUploadImg"
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
