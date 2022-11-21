import React, { useEffect } from "react";
import { renderStudio } from "sanity";
import studioConfig from "./sanity.config";

const Studio = () => {
  const studioRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    renderStudio(studioRef.current, studioConfig);
  }, []);
  return <div ref={studioRef} className="w-full h-screen"></div>;
};

export default Studio;
