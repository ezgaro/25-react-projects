import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef(null);

  const data = [
    {
      key: "aaabbbvvv",
      label: "First Card",
      style: { width: "100%", height: "600px", backgroundColor: "red" },
    },
    {
      key: "aaabbbvv",
      label: "Second Card",
      style: { width: "100%", height: "600px", backgroundColor: "gray" },
    },
    {
      key: "aaabbbv",
      label: "Third Card",
      style: { width: "100%", height: "600px", backgroundColor: "blue" },
    },
    {
      key: "aaabbb",
      label: "Fourth Card",
      style: { width: "100%", height: "600px", backgroundColor: "green" },
    },
    {
      key: "aaabb",
      label: "Fifth Card",
      style: { width: "100%", height: "600px", backgroundColor: "orange" },
    },
  ];

  function handleClick() {
    const pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleClick}>Click to scroll</button>
      {data.map((dataItem, index) => (
        <div
          key={dataItem.key}
          ref={index === 3 ? ref : null}
          style={dataItem.style}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
