/*! cornerstone-wado-image-loader - 2.1.2 - 2018-06-05 | (c) 2016 Chris Hafey | https://github.com/cornerstonejs/cornerstoneWADOImageLoader */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("cornerstoneWADOImageLoaderWebWorker",[],t):"object"==typeof exports?exports.cornerstoneWADOImageLoaderWebWorker=t():e.cornerstoneWADOImageLoaderWebWorker=t()}(this,function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=48)}([,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e[0],r=e[0],a=void 0,n=e.length,i=1;i<n;i++)a=e[i],t=Math.min(t,a),r=Math.max(r,a);return{min:t,max:r}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0;function n(e,t){var r=function(e,t,r){var n=a._malloc(e.length);a.writeArrayToMemory(e,n);var i=a._malloc(4),o=a._malloc(4),l=a._malloc(4),f=a._malloc(4),s=a._malloc(4),u=(new Date).getTime();if(0!==a.ccall("jp2_decode","number",["number","number","number","number","number","number","number"],[n,e.length,i,o,l,f,s]))return console.log("[opj_decode] decoding failed!"),a._free(n),a._free(a.getValue(i,"*")),a._free(l),a._free(f),a._free(o),void a._free(s);var d=a.getValue(i,"*"),c={length:a.getValue(o,"i32"),sx:a.getValue(l,"i32"),sy:a.getValue(f,"i32"),nbChannels:a.getValue(s,"i32"),perf_timetodecode:void 0,pixelData:void 0},p=c.sx*c.sy*c.nbChannels,m=new Int32Array(a.HEAP32.buffer,d,p);if(1===t)if(Uint8Array.from)c.pixelData=Uint8Array.from(m);else{c.pixelData=new Uint8Array(p);for(var g=0;g<p;g++)c.pixelData[g]=m[g]}else if(r)if(Int16Array.from)c.pixelData=Int16Array.from(m);else{c.pixelData=new Int16Array(p);for(var y=0;y<p;y++)c.pixelData[y]=m[y]}else if(Uint16Array.from)c.pixelData=Uint16Array.from(m);else{c.pixelData=new Uint16Array(p);for(var b=0;b<p;b++)c.pixelData[b]=m[b]}var x=(new Date).getTime();return c.perf_timetodecode=x-u,a._free(n),a._free(i),a._free(d),a._free(o),a._free(l),a._free(f),a._free(s),c}(t,e.bitsAllocated<=8?1:2,1===e.pixelRepresentation);return e.columns=r.sx,e.rows=r.sy,e.pixelData=r.pixelData,r.nbChannels>1&&(e.photometricInterpretation="RGB"),e}function i(e){if(!e.usePDFJS&&"undefined"==typeof OpenJPEG)throw new Error("OpenJPEG decoder not loaded");if(!(a||(a=OpenJPEG())&&a._jp2_decode))throw new Error("OpenJPEG failed to initialize")}t.default=function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i(r),a.usePDFJS||r.usePDFJS?function(e,t){var r=new JpxImage;r.parse(t);var a=r.tiles.length;if(1!==a)throw new Error("JPEG2000 decoder returned a tileCount of "+a+", when 1 is expected");return e.columns=r.width,e.rows=r.height,e.pixelData=r.tiles[0].items,e}(e,t):n(e,t)},t.initializeJPEG2000=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0;function n(){if("undefined"==typeof CharLS)throw new Error("No JPEG-LS decoder loaded");if(!(a||(a=CharLS())&&a._jpegls_decode))throw new Error("JPEG-LS failed to initialize")}t.default=function(e,t){n();var r=function(e,t){var r=a._malloc(e.length);a.writeArrayToMemory(e,r);var n=a._malloc(4),i=a._malloc(4),o=a._malloc(4),l=a._malloc(4),f=a._malloc(4),s=a._malloc(4),u=a._malloc(4),d=a._malloc(4),c=a._malloc(4),p={result:a.ccall("jpegls_decode","number",["number","number","number","number","number","number","number","number","number","number","number"],[r,e.length,n,i,o,l,f,s,d,u,c]),width:a.getValue(o,"i32"),height:a.getValue(l,"i32"),bitsPerSample:a.getValue(f,"i32"),stride:a.getValue(s,"i32"),components:a.getValue(d,"i32"),allowedLossyError:a.getValue(u,"i32"),interleaveMode:a.getValue(c,"i32"),pixelData:void 0},m=a.getValue(n,"*");return p.bitsPerSample<=8?(p.pixelData=new Uint8Array(p.width*p.height*p.components),p.pixelData.set(new Uint8Array(a.HEAP8.buffer,m,p.pixelData.length))):t?(p.pixelData=new Int16Array(p.width*p.height*p.components),p.pixelData.set(new Int16Array(a.HEAP16.buffer,m,p.pixelData.length))):(p.pixelData=new Uint16Array(p.width*p.height*p.components),p.pixelData.set(new Uint16Array(a.HEAP16.buffer,m,p.pixelData.length))),a._free(r),a._free(m),a._free(n),a._free(i),a._free(o),a._free(l),a._free(f),a._free(s),a._free(d),a._free(c),p}(t,1===e.pixelRepresentation);if(0!==r.result&&6!==r.result)throw new Error("JPEG-LS decoder failed to decode frame (error code "+r.result+")");return e.columns=r.width,e.rows=r.height,e.pixelData=r.pixelData,e},t.initializeJPEGLS=n},,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="2.1.2"},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=(0,i.default)(e.pixelData),a=!(o(e.smallestPixelValue)&&o(e.largestPixelValue));!0!==t||a?(e.smallestPixelValue=r.min,e.largestPixelValue=r.max):(e.smallestPixelValue!==r.min&&console.warn("Image smallestPixelValue tag is incorrect. Rendering performance will suffer considerably."),e.largestPixelValue!==r.max&&console.warn("Image largestPixelValue tag is incorrect. Rendering performance will suffer considerably."))};var a,n=r(1),i=(a=n)&&a.__esModule?a:{default:a};function o(e){return"number"==typeof e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if("undefined"==typeof jpeg||void 0===jpeg.lossless||void 0===jpeg.lossless.Decoder)throw new Error("No JPEG Lossless decoder loaded");var r=e.bitsAllocated<=8?1:2,a=t.buffer,n=(new jpeg.lossless.Decoder).decode(a,t.byteOffset,t.length,r);return 0===e.pixelRepresentation?16===e.bitsAllocated?(e.pixelData=new Uint16Array(n.buffer),e):(e.pixelData=new Uint8Array(n.buffer),e):(e.pixelData=new Int16Array(n.buffer),e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if("undefined"==typeof JpegImage)throw new Error("No JPEG Baseline decoder loaded");var r=new JpegImage;return r.parse(t),r.colorTransform=!1,8===e.bitsAllocated?(e.pixelData=r.getData(e.columns,e.rows),e):16===e.bitsAllocated?(e.pixelData=r.getData16(e.columns,e.rows),e):void 0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(8===e.bitsAllocated)return e.planarConfiguration?function(e,t){for(var r=t,a=e.rows*e.columns,n=new ArrayBuffer(a*e.samplesPerPixel),i=new DataView(r.buffer,r.byteOffset),o=new Int8Array(r.buffer,r.byteOffset),l=new Int8Array(n),f=0,s=i.getInt32(0,!0),u=0;u<s;++u){f=u*a;var d=i.getInt32(4*(u+1),!0),c=i.getInt32(4*(u+2),!0);0===c&&(c=r.length);for(var p=a*s;d<c;){var m=o[d++];if(m>=0&&m<=127)for(var g=0;g<m+1&&f<p;++g)l[f]=o[d++],f++;else if(m<=-1&&m>=-127)for(var y=o[d++],b=0;b<1-m&&f<p;++b)l[f]=y,f++}}return e.pixelData=new Uint8Array(n),e}(e,t):function(e,t){for(var r=t,a=e.rows*e.columns,n=new ArrayBuffer(a*e.samplesPerPixel),i=new DataView(r.buffer,r.byteOffset),o=new Int8Array(r.buffer,r.byteOffset),l=new Int8Array(n),f=0,s=i.getInt32(0,!0),u=0;u<s;++u){f=u;var d=i.getInt32(4*(u+1),!0),c=i.getInt32(4*(u+2),!0);0===c&&(c=r.length);for(var p=a*s;d<c;){var m=o[d++];if(m>=0&&m<=127)for(var g=0;g<m+1&&f<p;++g)l[f]=o[d++],f+=e.samplesPerPixel;else if(m<=-1&&m>=-127)for(var y=o[d++],b=0;b<1-m&&f<p;++b)l[f]=y,f+=e.samplesPerPixel}}return e.pixelData=new Uint8Array(n),e}(e,t);if(16===e.bitsAllocated)return function(e,t){for(var r=t,a=e.rows*e.columns,n=new ArrayBuffer(a*e.samplesPerPixel*2),i=new DataView(r.buffer,r.byteOffset),o=new Int8Array(r.buffer,r.byteOffset),l=new Int8Array(n),f=i.getInt32(0,!0),s=0;s<f;++s){var u=0,d=0===s?1:0,c=i.getInt32(4*(s+1),!0),p=i.getInt32(4*(s+2),!0);for(0===p&&(p=r.length);c<p;){var m=o[c++];if(m>=0&&m<=127)for(var g=0;g<m+1&&u<a;++g)l[2*u+d]=o[c++],u++;else if(m<=-1&&m>=-127)for(var y=o[c++],b=0;b<1-m&&u<a;++b)l[2*u+d]=y,u++}}return 0===e.pixelRepresentation?e.pixelData=new Uint16Array(n):e.pixelData=new Int16Array(n),e}(e,t);throw new Error("unsupported pixel format for RLE")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(16===e.bitsAllocated){var r=t.buffer,a=t.byteOffset,n=t.length;a%2&&(r=r.slice(a),a=0),0===e.pixelRepresentation?e.pixelData=new Uint16Array(r,a,n/2):e.pixelData=new Int16Array(r,a,n/2);for(var i=0;i<e.pixelData.length;i++)e.pixelData[i]=(255&(o=e.pixelData[i]))<<8|o>>8&255}else 8===e.bitsAllocated&&(e.pixelData=t);var o;return e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.buffer,a=t.byteOffset,n=t.length;return 16===e.bitsAllocated?(a%2&&(r=r.slice(a),a=0),0===e.pixelRepresentation?e.pixelData=new Uint16Array(r,a,n/2):e.pixelData=new Int16Array(r,a,n/2)):8===e.bitsAllocated||1===e.bitsAllocated?e.pixelData=t:32===e.bitsAllocated&&(a%2&&(r=r.slice(a),a=0),e.pixelData=new Float32Array(r,a,n/4)),e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(15)),n=u(r(14)),i=u(r(13)),o=u(r(12)),l=u(r(11)),f=u(r(3)),s=u(r(2));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r,u,d){var c=(new Date).getTime();if("1.2.840.10008.1.2"===t)e=(0,a.default)(e,r);else if("1.2.840.10008.1.2.1"===t)e=(0,a.default)(e,r);else if("1.2.840.10008.1.2.2"===t)e=(0,n.default)(e,r);else if("1.2.840.10008.1.2.1.99"===t)e=(0,a.default)(e,r);else if("1.2.840.10008.1.2.5"===t)e=(0,i.default)(e,r);else if("1.2.840.10008.1.2.4.50"===t)e=(0,o.default)(e,r);else if("1.2.840.10008.1.2.4.51"===t)e=(0,o.default)(e,r);else if("1.2.840.10008.1.2.4.57"===t)e=(0,l.default)(e,r);else if("1.2.840.10008.1.2.4.70"===t)e=(0,l.default)(e,r);else if("1.2.840.10008.1.2.4.80"===t)e=(0,f.default)(e,r);else if("1.2.840.10008.1.2.4.81"===t)e=(0,f.default)(e,r);else if("1.2.840.10008.1.2.4.90"===t)e=(0,s.default)(e,r,u,d);else{if("1.2.840.10008.1.2.4.91"!==t)throw new Error("no decoder for transfer syntax "+t);e=(0,s.default)(e,r,u,d)}var p=void 0!==e.pixelRepresentation&&1===e.pixelRepresentation,m=p&&void 0!==e.bitsStored?32-e.bitsStored:void 0;if(p&&void 0!==m)for(var g=0;g<e.pixelData.length;g++)e.pixelData[g]=e.pixelData[g]<<m>>m;var y=(new Date).getTime();return e.decodeTimeInMS=y-c,e}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),n=r(3),i=l(r(10)),o=l(r(16));function l(e){return e&&e.__esModule?e:{default:e}}var f=!1,s=void 0;function u(e){f||(self.importScripts(e.decodeTask.codecsPath),f=!0,e.decodeTask.initializeCodecsOnStartup&&((0,a.initializeJPEG2000)(e.decodeTask),(0,n.initializeJPEGLS)(e.decodeTask)))}t.default={taskType:"decodeTask",handler:function(e,t){u(s);var r=s&&s.decodeTask&&s.decodeTask.strict,a=e.data.imageFrame,n=new Uint8Array(e.data.pixelData);if((0,o.default)(a,e.data.transferSyntax,n,s.decodeTask,e.data.options),!a.pixelData)throw new Error("decodeTask: imageFrame.pixelData is undefined after decoding");(0,i.default)(a,r),a.pixelData=a.pixelData.buffer,t(a,[a.pixelData])},initialize:function(e){s=e,e.decodeTask.loadCodecsOnStartup&&u(e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerTaskHandler=function(e){if(a[e.taskType])return console.log('attempt to register duplicate task handler "',e.taskType,'"'),!1;a[e.taskType]=e,n&&e.initialize(i.taskConfiguration)};var a={},n=!1,i=void 0;self.onmessage=function(e){var t;{if("initialize"!==e.data.taskType)return"loadWebWorkerTask"===e.data.taskType?(t=e.data,i=t.config,void self.importScripts(t.sourcePath)):void(a[e.data.taskType]?a[e.data.taskType].handler(e.data,function(t,r){self.postMessage({taskType:e.data.taskType,status:"success",result:t,workerIndex:e.data.workerIndex},r)}):(console.log("no task handler for ",e.data.taskType),console.log(a),self.postMessage({taskType:e.data.taskType,status:"failed - no task handler registered",workerIndex:e.data.workerIndex})));!function(e){if(!n){if(i=e.config,e.config.webWorkerTaskPaths)for(var t=0;t<e.config.webWorkerTaskPaths.length;t++)self.importScripts(e.config.webWorkerTaskPaths[t]);Object.keys(a).forEach(function(e){a[e].initialize(i.taskConfiguration)}),self.postMessage({taskType:"initialize",status:"success",result:{},workerIndex:e.workerIndex}),n=!0}}(e.data)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version=t.registerTaskHandler=void 0;var a=r(8);Object.defineProperty(t,"version",{enumerable:!0,get:function(){return o(a).default}});var n=r(47),i=o(r(46));function o(e){return e&&e.__esModule?e:{default:e}}(0,n.registerTaskHandler)(i.default),t.registerTaskHandler=n.registerTaskHandler}])});
//# sourceMappingURL=cornerstoneWADOImageLoaderWebWorker.min.js.map
