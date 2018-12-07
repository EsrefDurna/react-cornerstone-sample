let OHIFtmp = {
    log: {},
    ui: {},
    utils: {},
    viewer: {},
    cornerstone: {},
    user: {},
    DICOMWeb: {}, // Temporarily added
};

const OHIF = Object.assign({},OHIFtmp, require('../../dicomEndPointConfig/dcm4cheeDICOMWeb.json').default);

export default function getOHIF() {
    return OHIF;
};

  