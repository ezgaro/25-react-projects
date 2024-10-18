import { useState } from "react";

let initialState = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialState);

  function handleClick() {
    // let circleShapes = shapes
    //   .filter((s) => s.type === "circle")
    //   .map((s) => ({ ...s, y: s.y + 50 }));
    // let removePrevCircle = shapes.filter((s) => s.type !== "circle");
    // setShapes([...removePrevCircle, ...circleShapes]);

    let newShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(newShapes);
  }

  return (
    <div className="container">
      <button onClick={handleClick}>Move the circles down</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            position: "absolute",
            backgroundColor: "purple",
            width: 20,
            height: 20,
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
          }}
        ></div>
      ))}
    </div>
  );
}
