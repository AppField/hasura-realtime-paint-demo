import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import "./Pixel.css";

interface PixelProps {
  id: number;
  color: string;
  newColor: string;
}

const UPDATE_COLOR = gql`
  mutation UpdatePixelColor($id: Int!, $color: String!) {
    update_pixels(where: { id: { _eq: $id } }, _set: { color: $color }) {
      returning {
        color
        id
      }
    }
  }
`;

const Pixel = ({ id, color, newColor }: PixelProps) => {
  const [pixelColor, changeColor] = useState(color);
  const [updatePixelColor] = useMutation(UPDATE_COLOR);

  useEffect(() => {
    changeColor(color);
  }, [color]);

  return (
    <span
      className="pixel"
      onClick={() => {
        changeColor(newColor);
        updatePixelColor({ variables: { id, color: newColor } });
      }}
      style={{
        backgroundColor: pixelColor
      }}
    ></span>
  );
};

export default Pixel;
