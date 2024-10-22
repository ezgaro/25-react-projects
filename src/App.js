import Accordion from "./components/accordion";
import ScrollIndicator from "./components/customScrollIndicator";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/starRating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
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
      <TreeView menus={menus} />
      <QRCodeGenerator />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      {/* <StarRatingVol2 numOfStars={10} /> */}
      {/* <Artwork /> */}
      {/* <ShapeEditor /> */}
      {/* <BucketList /> */}
    </div>
  );
}

export default App;
