const { Router } = require('express');

const router = Router();

router.use('/coach', require('./coach/coach.controller'));

module.exports = router;