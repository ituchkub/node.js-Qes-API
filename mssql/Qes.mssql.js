const mssqlcon = require('./connection');
class checkinMssql {

  async Anslog(param) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)  //CheckedIn   QualityResult  ITucHKuB
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

  async Qes(param) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)  //CheckedIn   QualityResult  ITucHKuB
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

  async Ans(param) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)  //CheckedIn   QualityResult  ITucHKuB
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