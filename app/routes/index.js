var router = require('express').Router();

router.use('/helloworld', require('./helloworld'));

module.exports = router;