var router = require('express').Router();
var vxmlbuilder = require('../../../voicexml/builder/vxmlbuilder')
var initialMenuMw = require('../../middleware/bigMenu');

router.get('/', initialMenuMw, vxmlbuilder.buildVxml);

module.exports = router;