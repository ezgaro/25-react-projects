import "./App.css";

import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tabs-test";
import ScrollIndicator from "./components/customScrollIndicator";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FoodRecipeAppMain from "./components/food-recipe-app/FoodRecipeAppMain";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/starRating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import WeatherApplication from "./components/weather-application/WeatherApplication";
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
      <TabTest />
      <ModalTest />
      <GithubProfileFinder />
      <SearchAutocomplete />
      <TicTacToe />
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
      <UseFetchHookTest />
      <UseOnclickOutsideTest />
      <UseWindowResizeTest />
      <ScrollToTopAndBottom />
      <ScrollToSection />
      <WeatherApplication />
      <FoodRecipeAppMain />
      {/* <StarRatingVol2 numOfStars={10} /> */}
      {/* <Artwork /> */}
      {/* <ShapeEditor /> */}
      {/* <BucketList /> */}
    </div>
  );
}

export default App;
