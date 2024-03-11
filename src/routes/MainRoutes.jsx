import React from "react";
import { Route, Routes } from "react-router-dom";
import OscarPage from "../pages/OscarPage";
import OscarGamePage from "../pages/OscarGamePage";
import OscarNomineesPage from "../pages/OscarNomineesPage";

import KidsPage from "../pages/KidsPage";
import Dog from "../components/kids/Dog";
import Anime from "../components/kids/Anime";
import Adventure from "../components/kids/Adventure";
import Space from "../components/kids/Space";
import KidsWithoutSubscribe from "../components/kids/KidsWithoutSubscribe";
import LoginForm from "../auth_redux/componentsAuth/loginForm/LoginForm";
import RegistrationForm from "../auth_redux/componentsAuth/registration/RegistrationForm";
import PageAdd from "../pages/PageAdd";
import EditProduct from "../components/product/EditProduct";

import Sport from "../components/sportComponents/Sport";
import OnlineCinema from "../components/OnlineCinema/OnlineCinema";
import MoviesCart from "../components/product/MoviesCart";
import MoviesList from "../components/product/MoviesList";
import Favorite from "../components/MoviesAndSeries/Favorite";
import AddReviews from "../components/MoviesAndSeries/AddReviews";
import ReviesList from "../components/MoviesAndSeries/ReviesList";
import EditReviews from "../components/MoviesAndSeries/EditReviews";
import OscarGameCondition from "../components/oscarGamePage/OscarGameCondition";
import MainPage from "../pages/MainPage";
import NomineesGame from "../components/oscarGamePage/NomineesGame";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/oscarHome" element={<OscarPage />} />
      <Route path="/oscarGame" element={<OscarGamePage />} />
      <Route path="/oscarNominee" element={<OscarNomineesPage />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/kidsDog" element={<Dog />} />
      <Route path="/kidsAnime" element={<Anime />} />
      <Route path="/kidsAdventure" element={<Adventure />} />
      <Route path="/kidsSpace" element={<Space />} />
      <Route path="/kidsSubscribe" element={<KidsWithoutSubscribe />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/add" element={<PageAdd />} />
      <Route path="/edit/:slug" element={<EditProduct />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/onlineCinema" element={<OnlineCinema />} />
      <Route path="/moviesCard" element={<MoviesCart />} />
      <Route path="/moviesList" element={<MoviesList />} />
      <Route path="/gameCondition" element={<OscarGameCondition />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/addReviews" element={<AddReviews />} />
      <Route path="/rewiesList" element={<ReviesList />} />
      <Route path="/editReviews/:id" element={<EditReviews />} />
      <Route path="/game" element={<NomineesGame />} />
    </Routes>
  );
};

export default MainRoutes;
