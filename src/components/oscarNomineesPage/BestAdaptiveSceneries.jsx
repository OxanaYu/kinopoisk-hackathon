import React from "react";

const BestAdaptiveSceneries = ({ nominees }) => {
  return (
    <div>
      <h3 style={{ color: "#c5a05a", textAlign: "start", marginLeft: "95px" }}>
        ЛУЧШИЙ АДАПТИВНЫЙ СЦЕНАРИЙ
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {nominees.map((adaptiveSceneries, index) => (
          <div
            key={index}
            style={{
              width: "calc(17% - 10px)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            className="movie-container"
          >
            <div
              className="allMovies__container_movies-swiper-img"
              style={{ cursor: "pointer" }}
            >
              <div
                className="img-container"
                style={{
                  position: "relative",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={adaptiveSceneries.image}
                  alt=""
                  style={{ maxWidth: "100%", display: "block" }}
                  className="movie-image"
                />
              </div>
              <p style={{ marginLeft: "-50px" }}>{adaptiveSceneries.name}</p>
              <p style={{ marginLeft: "-50px", marginTop: "-13px" }}>
                {adaptiveSceneries.movie}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestAdaptiveSceneries;
