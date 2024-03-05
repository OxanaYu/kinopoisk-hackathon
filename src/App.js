import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Header from "./homepage/Header";
import SideBar from "./homepage/SideBar";
import Sport from "./components/sportComponents/Sport";
import Navbar from "./homepage/Navbar";
import MainPage from "./pages/MainPage";
import MovieHeader from "./components/movies/MovieHeader";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovieHeader />
      {/* <MainPage /> */}

      <MainRoutes />
    </div>
  );
};

export default App;