import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Sport from "./components/sportComponents/Sport";
import Navbar from "./homepage/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
