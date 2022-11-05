require('dotenv').config();
const fs = require('fs');
const uuid = require('uuid');
const resizeImg = require('resize-image-buffer');
const sharp = require('sharp')
class Service {


  async compressimages(buffer, newSize) {

    try {
      const image_newSize = sharp(buffer)
        .jpeg({ quality: 10 })
      newSize(image_newSize)
    } catch (err) {
    }
  }

  async resizeImgs(buffer, newSize) {
    try {
      const image_newSize = await resizeImg(buffer, {
        width: 128,
        height: 128,
      });
      newSize(image_newSize)
    } catch (err) {

    }
  }



  async get(req) {
    return 'This is my API running...'

  }


  async WFile(req) {
    let fileName = uuid.v1();
    fs.writeFile("/Result/" + fileName + ".txt", "Test Write File !!!", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

  }
  async postEx(req) {
    let Name = req.body.name;
    let mail = req.body.mail;
    return ('This is my Name  : ' + Name + ' And My E-Mail : ' + mail)
    //res.send(req.body)    {"name":"Kantathus","mail":"ituchkub@gmail.com"}
  }
  async Author(req) {
    const axios = require('axios');
    let reqe = await axios.post(process.env.AuthenUrl, {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      grantType: "client_credentials"
    });

    let res = {
      status: true,
      data: reqe.data
    }
    return res
  }

  async AxiosEx(req) {
    const axios = require('axios');
    var JDataA = {
      "activity": "1",
      "contractNo": "221234567",
      "subContractNo": "22123456701",
      "vPassDocumentNo": "SMR-22-1060-000001",
      "vPassDateIn": "2022-12-01",
      "vPassTimeIn": "07:29",
      "receivePlantCode": "1030"
    };
    let reqe = await axios.post(process.env.CheckIn, JDataA, {
      headers: {
        'Authorization': 'Bearer XXX'
      }
    });

    let res = {
      status: true,
      data: reqe.data
    }
    return res
  }
}

module.exports = new Service();