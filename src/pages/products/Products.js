import React from "react";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { products } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Users() {
  const [productsData, setProductsData] = useState(products);
  const productDelete = (productID) => {
    setProductsData(productsData.filter((product) => product.id != productID));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="" className="link">
              <div className="userListUser">
                <img src={params.row.avatar} className="userListImg" />
                {params.row.title}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="userListDelete"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={products}
        columns={columns}
        pageSize = {3}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}
