import { useState } from "react";
import "./artwork.css";

export default function Artwork() {
  const [person, setPerson] = useState({
    name: "Stefan Demiro",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  return (
    <div className="nig">
      <label>
        Name:
        <input
          type="text"
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          onChange={(e) =>
            setPerson({
              ...person,
              artwork: { ...person.artwork, title: e.target.value },
            })
          }
          value={person.artwork.title}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          onChange={(e) =>
            setPerson({
              ...person,
              artwork: { ...person.artwork, city: e.target.value },
            })
          }
          value={person.artwork.city}
        />
      </label>
      <img src={person.artwork.image} alt="Artwork of Stefan Demiro" />
    </div>
  );
}
