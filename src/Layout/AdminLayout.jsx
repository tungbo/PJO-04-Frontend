import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../Component/Header/AdminHeader";

const AdminLayout = () => {
  return (
    <div>
      <div>
        <AdminHeader></AdminHeader>
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};
export default AdminLayout;
