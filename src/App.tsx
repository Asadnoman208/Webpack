import React, { Suspense, lazy } from "react";
const Navbar = lazy(() => import("./components/Navbar"));
const Dashboard = lazy(() => import("./components/Dashboard"));

const App = () => (
  <>
    <Suspense fallback={<p>Loading...</p>}>
      <Navbar />
      <Dashboard />
    </Suspense>
  </>
);

export default App;
