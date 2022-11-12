const express = require('express');
const router = express.Router({
  mergeParams: true
});

const Controller = require('../controllers/Qes.controller');
router.route('/Qas').post(Controller.Qas);
router.route('/Anslog').post(Controller.Anslog);
router.route('/Remark').post(Controller.Remark);

module.exports = router;