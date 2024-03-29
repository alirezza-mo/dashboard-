import React from "react";
import "./Users.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { userRows } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Users() {
  const [userDatas, setUserDatas] = useState(userRows);
  const userDelete = (userID) => {
    setUserDatas(userDatas.filter((user) => user.id != userID));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="" className="link">
              <div className="userListUser">
                <img src={params.row.avatar} className="userListImg" />
                {params.row.name}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        pageSize = {2}
        disableSelectionOnClick
      />
    </div>
  );
}
