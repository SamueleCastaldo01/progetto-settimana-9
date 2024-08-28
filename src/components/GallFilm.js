import React, { Component } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function GallFilm(props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleRiproduci = (imdbID) => {
    navigate("/detailsFilm/" + imdbID);
  };

  return (
    <div
      className="col mb-4 text-center px-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`GallFilmCont ${isHovered ? "hovered" : ""}`}>
        <img
          className={`poster-img ${isHovered ? "special-hover" : ""}`}
          src={props.src}
          alt="movie picture"
        />
        {isHovered && (
          <div
            className="film-details p-2 text-start position-absolute w-100"
            style={{ backgroundColor: "black" }}
          >
            <p className="mb-0 fw-bold">{props.title}</p>
            <div className="text-center">
              <Button
                onClick={() => handleRiproduci(props.imdbID)}
                className="w-100 bg-secondary"
                variant="contained"
                startIcon={<PlayArrowIcon />}
              >
                Riproduci
              </Button>
            </div>
            <p className="m-0 mt-2">
              <b>Anno:</b> {props.year}
            </p>
            <p className="m-0 mt-2">
              <b>Tipo:</b> {props.type}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GallFilm;
