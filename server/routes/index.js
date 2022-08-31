const router = require('express').Router();
const { accessToken, callback } = require('../controller')

router.post('/accesstoken', accessToken);

module.exports = router;