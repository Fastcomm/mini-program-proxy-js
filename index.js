module.exports = {
  async request(requestObject, success, fail) {
    proxyUrl = "";
    proxyMethod = "";
    proxyHeaders = {
      "content-type": "application/json",
    };
    proxyDataType = "json";
    proxyData = {};

    if (!requestObject.serverUrl || requestObject.serverUrl === "") {
      return fail({ error: "No Host server url provided" });
    }

    if (!requestObject.url || requestObject.url === "") {
      return fail({ error: "No api url provided" });
    }

    if (requestObject.headers) {
      proxyHeaders = requestObject.headers;
    }

    if (requestObject.dataType) {
      proxyDataType = requestObject.dataType;
    }

    if (requestObject.data) {
      proxyData = requestObject.data;
    }

    switch (requestObject.method) {
      case "DELETE":
        proxyUrl = requestObject.serverUrl + "/delete/" + requestObject.url;
        proxyMethod = "GET";
        break;

      case "PUT":
        proxyUrl = requestObject.serverUrl + "/put/" + requestObject.url;
        proxyMethod = "POST";
        break;

      case "POST":
        proxyUrl = requestObject.serverUrl + requestObject.url;
        proxyMethod = "POST";
        break;

      case "GET":
        proxyUrl = requestObject.serverUrl + requestObject.url;
        proxyMethod = "GET";
        break;

      default:
        proxyUrl = requestObject.serverUrl + requestObject.url;
        proxyMethod = "GET";
        break;
    }

    my.request({
      url: proxyUrl,
      method: proxyMethod,
      data: proxyData,
      headers: proxyHeaders,
      dataType: proxyDataType,
      success: (res) => {
        success({ success: res });
      },
      fail: (res) => {
        fail({ fail: res });
      },
    });
  },
};
