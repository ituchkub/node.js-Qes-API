const mssqlcon = require('./connection');
class checkinMssql {

  async Qas(param) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)  //CheckedIn   QualityResult  ITucHKuB
      .input("SessionEmpId", param.SessionEmpId)
      .output("pStatus")
      .output("pMessage")
      .execute("[USP_Q_Question]");
    return res;
  }

  async Anslog(param) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)  //CheckedIn   QualityResult  ITucHKuB
      .input("ProfileID", param.ProfileID)    
      .input("QId", param.QId)
      .input("AId", param.AId)
      .input("SessionEmpId", param.SessionEmpId)
      .output("pStatus")
      .output("pMessage")
      .execute("[USP_Q_Answer_Log]");
    return res;
  }

  async Remark(param) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
      .input("Module", param.Module)  //CheckedIn   QualityResult  ITucHKuB
      .input("ProfileID", param.CheckinId)
      .input("Remark", param.Remark)
      .input("SessionEmpId", param.SessionEmpId)
      .output("pStatus")
      .output("pMessage")
      .execute("[USP_Q_Answer_remark]");
    return res;
  }
}

module.exports = new checkinMssql();