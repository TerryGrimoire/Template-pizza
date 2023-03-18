import React from "react";

function Image({ title, subtitle, src, alt }) {
  return (
    <div className="landing_page container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={src} alt={alt} className="background_img" />
      <div className="veil" />
    </div>
  );
}

export default Image;
