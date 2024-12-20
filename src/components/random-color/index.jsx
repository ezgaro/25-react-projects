import { useEffect, useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[handleCreateUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = handleCreateUtility(256);
    const g = handleCreateUtility(256);
    const b = handleCreateUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (type === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [type]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setType("hex")}>Create HEX color</button>
      <button onClick={() => setType("rgb")}>Create RGB color</button>
      <button
        onClick={
          type === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h3>{type === "rgb" ? "RGB color: " : "HEX color: "}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
