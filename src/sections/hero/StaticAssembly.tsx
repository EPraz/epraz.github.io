import { useState } from "react";

const StaticAssembly = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <figure className="intro-art" aria-hidden="true">
      {imageUnavailable ? (
        <div className="intro-art-fallback">
          <span />
          <span />
          <span />
        </div>
      ) : (
        <img
          src="./images/portfolio/connected-pieces.webp"
          alt=""
          width="960"
          height="960"
          decoding="async"
          fetchPriority="low"
          onError={() => setImageUnavailable(true)}
        />
      )}
    </figure>
  );
};

export default StaticAssembly;
