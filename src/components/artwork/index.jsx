import { useState } from "react";
import "./artwork.css";

let nextId = 0;

export default function Artwork() {
  // const [person, setPerson] = useState({
  //   name: "Stefan Demiro",
  //   artwork: {
  //     title: "Blue Nana",
  //     city: "Hamburg",
  //     image: "https://i.imgur.com/Sd1AgUOm.jpg",
  //   },
  // });

  const [name, setName] = useState('');
  const [scupltors, setSculptors] = useState([]);

  function handleButtonClick() {
    setSculptors([...scupltors, {id: nextId++, name}]);

  }

  return (
    <>
    <h1>Inspiring Scultors</h1>
    <input type="text" onChange={e => setName(e.target.value)} value={name}/>
    <button onClick={handleButtonClick}>Add</button>

    <ul>
      {scupltors.map(sculptor => <li key={sculptor.id}>{sculptor.name}</li>)}
    </ul>
    </>
  );
}
