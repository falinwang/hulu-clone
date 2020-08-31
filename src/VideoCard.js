import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://image.tmdb.org/t/p/original//1eq896TCOEeN9Q8iTJL0n9u31Qf.jpg"
        alt=""
      />
      <p>This is a Star wars movie...</p>
      <h2>Movie Title</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;
