const express = require('express');
const router = express.Router({
  mergeParams: true
});

const Controller = require('../controllers/Qes.controller');
router.route('/Anslog').post(Controller.Anslog);
router.route('/Qes').post(Controller.Qes);
router.route('/Ans').post(Controller.Ans);

module.exports = router;