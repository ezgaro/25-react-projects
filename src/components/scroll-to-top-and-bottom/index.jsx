import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  if (error) return <h1>Error occured...Please try again! </h1>;

  if (loading) return <h1>Loading...Please wait!</h1>;

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to button</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <div ref={bottomRef}>
        <h3>This is the bottom of the page</h3>
      </div>
    </div>
  );
}
