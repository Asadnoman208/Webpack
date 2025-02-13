import React, { Suspense, lazy, useState } from "react";
const FormExample = lazy(() => import("./FormExample"));
import "./Dashboard.css";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className={isOpen ? "sidebar open" : "sidebar"}>
                <h2 className="sidebar-title">Admin Panel</h2>
                <ul className="menu">
                    <li><a href="#">🏠 Dashboard</a></li>
                    <li><a href="#">📋 Orders</a></li>
                    <li><a href="#">📦 Products</a></li>
                    <li><a href="#">👥 Users</a></li>
                    <li><a href="#">⚙ Settings</a></li>
                </ul>
                <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>
            </div>

            {/* Main Content */}
            <div className="content">
                <h1>Dashboard</h1>
                <div className="card-container">
                    <div className="card">Total Users: <b>1,234</b></div>
                    <div className="card">Total Orders: <b>567</b></div>
                    <div className="card">Revenue: <b>$45,678</b></div>
                </div>

                <h2>Recent Orders</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>Phone</td>
                            <td>$999</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jane Smith</td>
                            <td>Laptop</td>
                            <td>$1,500</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <FormExample />
        </div>
    );
};

export default Dashboard;
