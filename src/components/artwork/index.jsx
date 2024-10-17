import React, { useState } from "react";

const SculptorsList = () => {
  const [sculptors, setSculptors] = useState([
    { id: 1, name: "Michelangelo" },
    { id: 2, name: "Donatello" },
    { id: 3, name: "Kalcho" },
  ]);

  const handleDelete = (id) => {
    setSculptors(sculptors.filter((sculptor) => sculptor.id !== id));
  };

  return (
    <>
      <h1>Inspiring Sculptors</h1>
      <ul>
        {sculptors.map((sculptor) => (
          <li key={sculptor.id}>
            {sculptor.name}
            <button onClick={() => handleDelete(sculptor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
