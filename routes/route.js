const express = require('express');
const router = express.Router({
  mergeParams: true
});

const Controller = require('../controllers/controller');
router.route('/').post(Controller.get);
router.route('/postEx').post(Controller.postEx);
router.route('/Author').post(Controller.Author);
router.route('/AxiosEx').post(Controller.AxiosEx);
router.route('/WFile').post(Controller.WFile);

module.exports = router;