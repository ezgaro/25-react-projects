import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/starRating";
// import StarRatingVol2 from "./components/starRatingVol2";
// import BucketList from "./components/artBucketList";
// import Artwork from "./components/artwork";
// import ShapeEditor from "./components/transformingAnArray";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating numOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
      <LoadMoreData />
      {/* <StarRatingVol2 numOfStars={10} /> */}
      {/* <Artwork /> */}
      {/* <ShapeEditor /> */}
      {/* <BucketList /> */}
    </div>
  );
}

export default App;
