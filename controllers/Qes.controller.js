const Service = require('../services/Qes.service');
class Controller {
  async Anslog(req, res) {
    res.send(await Service.Anslog(req));
  }
  async Qes(req, res) {
    res.send(await Service.Qes(req));
  }
  async Ans(req, res) {
    res.send(await Service.Ans(req));
  } 
}
module.exports = new Controller();