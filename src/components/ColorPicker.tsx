import React from "react";
import "./ColorPicker.css";

const colorChoices = [
  "#f44336",
  "#f06292",
  "#9c27b0",
  "#2196f3",
  "#009688",
  "#8bc34a",
  "#ffeb3b",
  "#ff9800",
  "#ffffff",
  "#212121"
];

interface ColorProps {
  color: string;
  handleClick: (color: string) => void;
}

const Color = (props: ColorProps) => (
  <span
    className="palette-color"
    style={{ backgroundColor: props.color }}
    onClick={() => props.handleClick(props.color)}
  ></span>
);

interface ColorPickerProps {
  changeColor: (color: string) => void;
}

const ColorPicker = (props: ColorPickerProps) => (
  <div className="palette">
    {colorChoices.map((color, id) => (
      <Color
        handleClick={() => props.changeColor(color)}
        color={color}
        key={id}
      />
    ))}
  </div>
);

export default ColorPicker;
