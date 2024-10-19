const { Router } = require('express');
const { ping, getRecommendation } = require('./coach.service');

const controller = Router();

controller.get('/', ping);

controller.post('/recommendation', getRecommendation);

module.exports = controller;
