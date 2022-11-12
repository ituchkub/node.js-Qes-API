require('dotenv').config();
const fs = require('fs');
const uuid = require('uuid');
const Question = require('../mssql/Qes.mssql');
class Service {


  async Qas(req) {
    const output = await Question.Qas(req.body);
    if (output.output.pStatus != 1) {
      throw output.output.pMessage;
    }
    let res = {
      status: true,
      pid: output.output.pId,
      message: output.output.pMessage
    }
    return res;
  } catch(error) {
    return {
      status: false,
      message: error.message ? error.message : error
    }
  }

  async Anslog(req) {
    const output = await Question.Anslog(req.body);
    if (output.output.pStatus != 1) {
      throw output.output.pMessage;
    }
    let res = {
      status: true,
      pid: output.output.pId,
      message: output.output.pMessage
    }
    return res;
  } catch(error) {
    return {
      status: false,
      message: error.message ? error.message : error
    }
  }
  
  async Remark(req) {
    const output = await Question.Remark(req.body);
    if (output.output.pStatus != 1) {
      throw output.output.pMessage;
    }
    let res = {
      status: true,
      pid: output.output.pId,
      message: output.output.pMessage
    }
    return res;
  } catch(error) {
    return {
      status: false,
      message: error.message ? error.message : error
    }
  }

}

module.exports = new Service();