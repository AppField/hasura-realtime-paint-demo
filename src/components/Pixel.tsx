import React, { useState } from "react";
import "./Pixel.css";

interface PixelProps {
  //   id: number;
  color: string;
  newColor: string;
}

const Pixel = ({ color, newColor }: PixelProps) => {
  const [pixelColor, changeColor] = useState(color);

  return (
    <span
      className="pixel"
      onClick={() => changeColor(newColor)}
      style={{ backgroundColor: pixelColor }}
    ></span>
  );
};

export default Pixel;
