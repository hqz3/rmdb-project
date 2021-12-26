import React from "react";
// Router
import { Link } from "react-router-dom";
// Style
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb"></Image>
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb"></Image>
    )}
  </div>
);

export default Thumb;
