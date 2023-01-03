const axios = require("axios");
const serviceKey = require("../keys/key");

const airData = (stationName, callback) => {
  const url = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";

  var ServiceKey = serviceKey.publicPortalKey;

  var params = {
    ServiceKey: ServiceKey,
    returnType: "json",
    numOfRows: "1",
    pageNO: "1",
    stationName: stationName,
    dataTerm: "DAILY",
    ver: "1.3",
  };

  const response = axios.post(url, params).then((res) => {
    console.log(res);
  });
};

module.exports = airData;

// var queryParams = encodeURIComponent("ServiceKey") + "=" + ServiceKey;
// queryParams += "&" + encodeURIComponent("returnType") + "=" + encodeURIComponent("json");
// queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1");
// queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
// queryParams += "&" + encodeURIComponent("stationName") + "=" + encodeURIComponent(stationName);
// queryParams += "&" + encodeURIComponent("dataTerm") + "=" + encodeURIComponent("DAILY");
// queryParams += "&" + encodeURIComponent("ver") + "=" + encodeURIComponent("1.3");
