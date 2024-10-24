const dummyApiResponse = {
  showLightdnDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: false,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyApiResponse);
    }, 500);
  });
}

export default featureFlagsDataServiceCall;