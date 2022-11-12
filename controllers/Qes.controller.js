const Service = require('../services/Qes.service');
class Controller {
  async Qas(req, res) {
    res.send(await Service.Qas(req));
  }
  async Anslog(req, res) {
    res.send(await Service.Anslog(req));
  }
  async Remark(req, res) {
    res.send(await Service.Remark(req));
  } 
}
module.exports = new Controller();