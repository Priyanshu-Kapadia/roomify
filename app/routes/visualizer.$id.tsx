import React from "react";
import { useLocation } from "react-router";

const VisualizerId = () => {
  const location = useLocation();
  const { initalImage, initialRendered, name } = location.state || {};
  return (
    <section>
      <h1>{name || "Untitled Project"}</h1>
      <div className="visualizer">
        {initalImage && (
          <div className="image-container">
            <h2>Source Image</h2>
            <img src={initalImage} alt="source" />
          </div>
        )}
      </div>
    </section>
  );
};

export default VisualizerId;
