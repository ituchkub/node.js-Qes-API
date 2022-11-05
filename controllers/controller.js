const Service = require('../services/service');
class Controller {
  async get(req, res) {
    res.send(await Service.get(req));
  }
  async postEx(req, res) {
    res.send(await Service.postEx(req));
  }
  async Author(req, res) {
    res.send(await Service.Author(req));
  } 
  async AxiosEx(req, res) {
    res.send(await Service.AxiosEx(req));
  }  
  async WFile(req, res) {
    res.send(await Service.WFile(req));
  }
}
module.exports = new Controller();