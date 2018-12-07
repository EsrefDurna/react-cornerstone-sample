const dicomParser = require('dicom-parser');
const cornerstone = require('cornerstone-core');
const cornerstoneWADOImageLoader = require('cornerstone-wado-image-loader');
const cornerstoneMath = require('cornerstone-math');
const cornerstoneTools = require('cornerstone-tools');
const Hammer = require('hammerjs');

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;

//cornerstoneTools.init(); TODO NOT WORKING?


// Set the tool font and font size
// context.font = "[style] [variant] [weight] [size]/[line height] [font family]";
const fontFamily =
  'Work Sans, Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif';
cornerstoneTools.textStyle.setFont(`16px ${fontFamily}`);

// Set the tool width
cornerstoneTools.toolStyle.setToolWidth(2);

// Set color for inactive tools
cornerstoneTools.toolColors.setToolColor('rgb(255, 255, 0)');

// Set color for active tools
cornerstoneTools.toolColors.setActiveColor('rgb(0, 255, 0)');

//cornerstoneTools.store.state.touchProximity = 40; //TODO NOT WORKING


const config = {
  maxWebWorkers: navigator.hardwareConcurrency || 1,
  startWebWorkersOnDemand: false,
  webWorkerPath: window.location + '/js/cornerstoneWADOImageLoaderWebWorker.min.js',
  webWorkerTaskPaths: [],
  taskConfiguration: {
    decodeTask: {
      loadCodecsOnStartup: true,
      initializeCodecsOnStartup: false,
      codecsPath: window.location + '/js/cornerstoneWADOImageLoaderCodecs.min.js',
      usePDFJS: false,
      strict: false
    }
  }
};

cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

module.exports = {
  cornerstone: cornerstone,
  cornerstoneTools: cornerstoneTools,
  cornerstoneWADOImageLoader: cornerstoneWADOImageLoader
}