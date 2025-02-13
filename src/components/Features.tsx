import React from "react";

const Features = () => (
    <div className="admin-container">
        <aside className="sidebar">
            <h2>Admin Panel</h2>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </aside>

        <main className="content">
            <header>
                <h1>Dashboard</h1>
            </header>

            <section className="cards">
                <div className="card">
                    <h3>Total Users</h3>
                    <p>1,250</p>
                </div>
                <div className="card">
                    <h3>Orders</h3>
                    <p>325</p>
                </div>
                <div className="card">
                    <h3>Revenue</h3>
                    <p>$12,540</p>
                </div>
            </section>

            <section className="table-container">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#001</td>
                            <td>John Doe</td>
                            <td>$250</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>#002</td>
                            <td>Jane Smith</td>
                            <td>$130</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    </div>
);

export default Features;
