import React, { useEffect, useState } from "react";
import Telegram from "./assets/icons8-телеграмма-app.svg";
import Vk from "./assets/icons8-vk.svg";
import "./OscarHomePage.css";
import { NavLink, useNavigate } from "react-router-dom";
import Music from "./assets/Oscar_award_music.mp3";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
const NavbarOscar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("dark");
        } else {
          navbar.classList.remove("dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio"); // Получаем ссылку на аудио элемент
    if (audio.paused) {
      audio.play(); // Если аудио на паузе, запускаем воспроизведение
      setIsPlaying(true); // Обновляем состояние
    } else {
      audio.pause(); // Если аудио воспроизводится, ставим на паузу
      setIsPlaying(false); // Обновляем состояние
    }
  };
  return (
    <div className="headerOscar__container">
      <div className="navbarOscar__container dark" id="navbar">
        <div className="navbarOscar__container_logo">
          <img url="" />
        </div>
        <div className="navbarOscar_container_nav-title">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={"/oscarHome"}
          >
            <p className="one">Главная</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            className="two"
            to={"/oscarGame"}
          >
            <p className="two">Игра</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={"/oscarNominee"}
          >
            <p className="three">Номинанты</p>
          </NavLink>
        </div>
        <div className="navbarOscar__container_socialIcons">
          <div>
            <img src={Telegram} alt="" />
          </div>
          <div>
            <img src={Vk} alt="" />
          </div>
        </div>
        <div style={{ marginTop: "-4px", marginLeft: "10px" }}>
          <IconButton color="primary" onClick={togglePlay}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
          <audio
            id="audio"
            src={Music}
            autoPlay={isPlaying}
            onEnded={() => setIsPlaying(false)} // При окончании воспроизведения сбрасываем состояние isPlaying
          ></audio>
        </div>
      </div>
      <div className="headerOscar__container-2">
        <div className="headerOscar__container-title">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk5IiBoZWlnaHQ9IjY1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjk2LjQ1NCA1OS43NmEyLjM5MiAyLjM5MiAwIDAgMC0yLjM5NSAyLjM4IDIuMzk3IDIuMzk3IDAgMCAwIDIuMzk1IDIuMzkxIDIuMzg3IDIuMzg3IDAgMCAwIDAtNC43NzFabTAgNC40MzZhMi4wMzIgMi4wMzIgMCAwIDEtMi4wNTYtMi4wNTYgMi4wNTIgMi4wNTIgMCAwIDEgNC4xMDEgMCAyLjAzIDIuMDMgMCAwIDEtMi4wNDUgMi4wNTZaIiBmaWxsPSIjQzVBMDVBIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOTYuOTU2IDYyLjIwNmMuMjI5LS4xMzYuMzUyLS4zNi4zNTItLjY1IDAtLjI3NC0uMTA1LS40OS0uMzA2LS42MjctLjIwNy0uMTQ4LS40NDUtLjE0OC0uNjUtLjE0OGgtLjcxdjIuNzI4aC4zODh2LTEuMTg3aC4yODZsLjc0NyAxLjE4Mi4wMDguMDA4aC40MThsLS43MzQtMS4yMjdhLjkyMS45MjEgMCAwIDAgLjIwMS0uMDc5Wm0tLjkyOS0uMjUydi0uODFoLjM0OGMuMTE3IDAgLjI0My4wMDQuMzM5LjA1LjE1My4wNjUuMjA3LjIyNS4yMDcuMzUzYS4zOTUuMzk1IDAgMCAxLS4xNDcuMzE3Yy0uMDk4LjA4NC0uMjI3LjA5LS4zNzkuMDloLS4zNjhaTTE5MC4zMjIgNTkuMTEzYy0uNDktLjcyNC0uNDQtLjg2Ny0xLjI4NS0uOTY0LTEuODgzLS4wOTYtMi4xMy0uMzM2LTIuMTMtMS43MzYgMC0xLjI1OC41NTQtMy42MTkuNjAzLTQuNTMyLjA0OC0xLjE2Mi0uMDk4LTEuNTkyLS4wOTgtMi40MSAwLS44MjMuNTQ4LTEuNzQuNjQ2LTMuNjcuMDk4LTEuOTI4LS4zNjItMy4zMTktLjM2Mi0zLjMxOS40LS4wNTYuODk1LS4zNCAxLjA0NS0uNjguMTk1LS40ODIuODQyLTMuMDkuODQyLTQuMTQ5IDAtLjQzNi0uMDUxLS44MTUtLjE0OC0xLjEwNy0uNDQ2LTEuMDY5LTEuNzcxLS44OC0yLjM2NC0xLjU2OS0uMTg3LS4yMS0uMzA4LS4yLS4zMTctLjk2NC4zMDYtLjQyOS40LTEuMDY1LjQtMS45ODYgMC0uNzY3LS41OTYtMS4zNi0xLjM5Mi0xLjM2LS43OTQgMC0xLjM5Mi41OTMtMS4zOTIgMS4zNiAwIC45MjEuMDk0IDEuNTU3LjQwNiAxLjk4Ni0uMDE1Ljc2NC0uMTM0Ljc1NC0uMzE3Ljk2NC0uNTkzLjY4OC0xLjkxNy41LTIuMzcyIDEuNTY5LS4wOTkuMjkyLS4xNDIuNjctLjE0MiAxLjEwNyAwIDEuMDYuNjQ0IDMuNjY3LjgzOSA0LjE1LjE1My4zNC42NDMuNjIzIDEuMDQ0LjY3OSAwIDAtLjQ2MSAxLjM5LS4zNTggMy4zMTguMDk4IDEuOTMyLjY0MyAyLjg0OC42NDMgMy42NyAwIC44MTktLjE0OSAxLjI0OS0uMSAyLjQxMS4wNS45MTMuNjEgMy4yNzQuNjEgNC41MzIgMCAxLjQtLjI1MyAxLjY0LTIuMTM4IDEuNzM2LS44NDIuMDk3LS43OTMuMjQtMS4yODQuOTY0aC0yLjUxMWwtMi4wNjUgNC44NTNoMTguMjc3bC0yLjA2NC00Ljg1M2gtMi41MTZaIiBmaWxsPSIjQzVBMDVBIi8+PG1hc2sgaWQ9ImEiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjE1NyIgeT0iMCIgd2lkdGg9IjU4IiBoZWlnaHQ9IjY1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ny40OTkgMGg1Ni41Mjd2NjQuMTg1aC01Ni41MjdWMFoiIGZpbGw9IiNmZmYiLz48L21hc2s+PGcgbWFzaz0idXJsKCNhKSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xNTcuODggNjMuMzI0LS4zODEuODYxaDMuMjg3bDI1LTU2LjcxOSAyNC44MDcgNTYuMzIzLjE2LjM2NGgzLjI3M0wxODUuNzg2IDAgMTU3Ljg4IDYzLjMyNFoiIGZpbGw9IiNDNUEwNUEiLz48L2c+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04NC40NjEgMzIuODQyYy0uNDQ2LS4yMTgtLjg2LS40MjMtMS4yNDEtLjYxNGwtLjk4My0uNDljLTUuNDI4LTIuNzEzLTExLjU4LTUuNzktMTEuNTgtMTIuMDQyIDAtNi4wODggNC42MjgtMTAuNTA1IDExLTEwLjUwNSA1LjYyNyAwIDkuODU1IDMuNCAxMS44OTQgNS4wMzlsMS44MDIgMS40NS0uODAzLTIuMTE0YTQ4NS43MzggNDg1LjczOCAwIDAgMS0xLjIwOC0zLjIxbC0uMDYtLjE1Mi0uMTI0LS4xMDVjLTMuMDktMi41OTYtNy4yLTQuMDg0LTExLjI3NC00LjA4NC04LjM5MyAwLTE0LjQ4NCA1Ljc1My0xNC40ODQgMTMuNjggMCA4LjQ5OCA4LjM0OSAxMi40ODYgMTIuODM0IDE0LjYyOS41NTYuMjY2IDEuMDM4LjQ5OCAxLjQyNy43MDMuNDAzLjIwNy44MzguNDI3IDEuMjk4LjY2MiA0Ljg5IDIuNDggMTIuMjgxIDYuMjMgMTIuMjgxIDEzLjIxNSAwIDcuMjI0LTYuMzAyIDEyLjg4MS0xNC4zNDcgMTIuODgxLTguMDYxIDAtMTIuMTMyLTUuMDI3LTE0LjQ5My04LjgxbC0uNjQ3LTEuMDM4LTEuNCAzLjU4My4xNTMuMjU2YzMuMzggNS43NSA5LjQ0NyA5LjE4MyAxNi4yMzMgOS4xODMgMTAuMDQzIDAgMTcuOTA4LTYuOTE2IDE3LjkwOC0xNS43NDQgMC05LjQ3LTkuMjI4LTEzLjk2MS0xNC4xODYtMTYuMzczWk0xNTEuMzk5IDEwLjk3OGMtLjMxNS0uMjAzLTcuODU3LTQuOTYzLTE3LjAwMi00Ljk2My03Ljg2NiAwLTE1LjI2OCAzLjA2OS0yMC44NDMgOC42NC01LjU2MyA1LjU2My04LjYyNyAxMi45NjYtOC42MjcgMjAuODQ1czMuMDY0IDE1LjI4MyA4LjYyNyAyMC44NDZjNS41NzUgNS41NyAxMi45NzcgOC42MzggMjAuODQzIDguNjM4aC4wMDNjNy4wNTUgMCAxMi40OTgtMi4wNzggMTUuMTEyLTMuMzE2bC4yMjQtLjEwNiAxLjU4NS00LjEyLTEuMzY4LjYyM2MtMy43MDQgMS42ODgtOS40MSAzLjY5Ny0xNS41NTYgMy42OTctNi45OTQgMC0xMy41ODQtMi43MjYtMTguNTUtNy42NzVsLS40NDEtLjQ2OGEyNi4xMTggMjYuMTE4IDAgMCAxLTcuMjU4LTE4LjEyM2MwLTYuOTk2IDIuNzMxLTEzLjU5NCA3LjY5Mi0xOC41NyA0Ljk2OS00Ljk1OCAxMS41NTktNy42ODcgMTguNTU3LTcuNjg3IDkuMjg5IDAgMTcuNDk4IDUuNzYxIDE3LjU3OSA1LjgybDEuNzQ4IDEuMjQ4LTIuMTY2LTUuMjI1LS4xNTktLjEwNFpNMjkuNzc4IDYuMDQzQzEzLjYzNiA2LjA0MyAwIDE5LjU0MyAwIDM1LjUyMlMxMy42MzYgNjUgMjkuNzc4IDY1YzE2LjE0NyAwIDI5Ljc4OC0xMy41IDI5Ljc4OC0yOS40NzggMC0xNS45OC0xMy42NDEtMjkuNDgtMjkuNzg4LTI5LjQ4Wm0uMDAzIDU1Ljc4N2MtMTQuMyAwLTI2LjM4LTEyLjA0OC0yNi4zOC0yNi4zMDggMC0xNC4yNTcgMTIuMDgtMjYuMzAyIDI2LjM4LTI2LjMwMiAxNC4zMDEgMCAyNi4zOCAxMi4wNDUgMjYuMzggMjYuMzAyIDAgMTQuMjYtMTIuMDc5IDI2LjMwOC0yNi4zOCAyNi4zMDhaTTI0Mi4yNTkgMzMuODZjMy43MDEtMi40OTQgNS45MTItNy4wNiA1LjkxMi0xMi4yMTMgMC01LjQxMi0yLjAwNy05LjY4OC01LjgwMS0xMi4zNjUtMy45OTUtMi44OTYtOC42NTUtMi44OTYtMTMuMTYyLTIuODk2aC04LjcxM3Y1Ny43NjhoMy4yODNWMzYuNzU1aDYuNzk5bC4zNjQtLjAwMSAxNy4xNjYgMjcuMTE2LjE4LjI4NGgzLjc1N0wyMzQuNTYyIDM2LjU0YzMuMDQ3LS4zNzEgNS41NjUtMS4yNDkgNy42OTctMi42OFptMi42NjctMTIuMzY2YzAgNC4wMTgtMS40ODMgNy41MjktMy45NjcgOS4zOTEtMy4yNzYgMi40NjItNi43MzUgMi42NjMtMTAuNTkzIDIuNjYzaC02LjU4OFY5LjU3bDYuMDkyLS4wMDRjMy4yMTUgMCA2LjMwNi4wOTcgOC43NzYgMS4yNzIgNC42MzIgMi4wNTcgNi4yOCA2Ljg1NSA2LjI4IDEwLjY1N1pNMjc2LjU3OSAzMi44NDJhNzkuNDY4IDc5LjQ2OCAwIDAgMS0xLjI0LS42MTRsLS45NzEtLjQ4NGMtNS40MzUtMi43MS0xMS41OTQtNS43ODMtMTEuNTk0LTEyLjA0OCAwLTYuMDg4IDQuNjI2LTEwLjUwNSAxMS0xMC41MDUgNS42MyAwIDkuODYgMy40IDExLjg5NSA1LjAzN2wxLjc5OSAxLjQ1Mi0uODAyLTIuMTE0Yy0uNTgyLTEuNTM3LTEuMjA5LTMuMjEtMS4yMDktMy4yMWwtLjAzOS0uMS0uMTQyLS4xNTdjLTMuMDkxLTIuNTk2LTcuMTk5LTQuMDg0LTExLjI3NS00LjA4NC04LjM5MiAwLTE0LjQ4MyA1Ljc1My0xNC40ODMgMTMuNjggMCA4LjUgOC4zNDcgMTIuNDg2IDEyLjgzNyAxNC42MzEuNTU2LjI2NiAxLjAzMS40OTYgMS40MjUuNy40MDEuMjA4LjgzNS40MzEgMS4zMDMuNjY2IDQuODkgMi40ODIgMTIuMjggNi4yMzQgMTIuMjggMTMuMjEyIDAgNy4yMjQtNi4zMDcgMTIuODgxLTE0LjM1NSAxMi44ODEtOC4wNjggMC0xMi4xMzItNS4wMjctMTQuNDg5LTguODFsLS42NTItMS4wMzUtMS4zOTYgMy41NzkuMTUxLjI1OGMzLjM4MyA1Ljc1IDkuNDQ5IDkuMTgyIDE2LjIzMSA5LjE4MiAxMC4wNDIgMCAxNy45MDktNi45MTUgMTcuOTA5LTE1Ljc0NSAwLTkuNDY4LTkuMjIyLTEzLjk1OC0xNC4xODMtMTYuMzcyWiIgZmlsbD0iI0M1QTA1QSIvPjwvc3ZnPg=="
            alt=""
          />
        </div>
        <div className="headerOscar__container-title2">
          <p>
            Угадай победителей <br />
            «Оскара-2024»
          </p>
        </div>
        <div className="headerOscar__container-playBtn">
          <button className="game" onClick={() => navigate("/oscarGame")}>
            Играть
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarOscar;
