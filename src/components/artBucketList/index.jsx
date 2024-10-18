import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((artwork) => {
        if (artworkId === artwork.id) {
          return { ...artwork, seen: nextSeen };
        } else {
          return { ...artwork };
        }
      })
    );
  }

  function handleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((artwork) => {
        if (artworkId === artwork.id) {
          return { ...artwork, seen: nextSeen };
        } else {
          return { ...artwork };
        }
      })
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ListItem artworks={myList} onToggle={handleMyList} />
      <h2>Yout list of art to see:</h2>
      <ListItem artworks={yourList} onToggle={handleYourList} />
    </>
  );
}

function ListItem({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <input
            type="checkbox"
            checked={artwork.seen}
            onChange={(e) => onToggle(artwork.id, e.target.checked)}
          />
          {artwork.title}
        </li>
      ))}
    </ul>
  );
}
