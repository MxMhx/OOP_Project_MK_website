import React from "react";

export default function Admin() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Admin</h1>
      </div>
      <div className="admin-page-content">
        <div className="admin-page-content-header">
          <h2>Admin</h2>
          <div className="admin-page-content-header-actions">
            <a href="/admin/users">Add Category</a>
            <a href="/admin/roles">Add Product</a>
            <a href="/admin/settings">User</a>
          </div>
        </div>
      </div>
    </div>
  );
}
