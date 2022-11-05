const mssqlcon = require('./connection');
class checkinMssql {

  async writelog(param) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", "insert")  //CheckedIn   QualityResult  ITucHKuB
      .input("CheckinId", param.CheckinId)
      .input("Type", param.Type)
      .input("ResultId", param.ResultId)
      .input("FileName", param.FileName)
      .input("SessionEmpId", param.SessionEmpId)
      .output("pStatus")
      .output("pMessage")
      .execute("[USP_Req_Result]");
    return res;
  }

}

module.exports = new checkinMssql();