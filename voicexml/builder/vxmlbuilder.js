const { create } = require('xmlbuilder2');

function buildVxml(req, res) {

    const builtElements = req.app.locals.builtElements;

    const vxmlElement = create().ele('vxml');
    vxmlElement.att('xmlns', 'http://www.w3.org/2001/vxml');
    vxmlElement.att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
    vxmlElement.att('xsi:schemaLocation', 'http://www.w3.org/2001/vxml http://www.w3.org/TR/voicexml20/vxml.xsd');
    vxmlElement.att('version', '2.0');

    for(var built of builtElements) {
        built.addToXml(vxmlElement);
    }

    const xml = vxmlElement.end({ prettyPrint: true });

    res.send(xml);
}

module.exports = {buildVxml};