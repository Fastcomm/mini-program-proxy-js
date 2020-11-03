module.exports = {
  async request(requestObject) {
    proxyUrl = "";
    proxyMethod = "";
    proxyHeaders = {
      "content-type": "application/json",
    };
    proxyDataType = "json";
    proxyData = {};

    if (requestObject.headers) {
      proxyHeaders = headers;
    }

    if (requestObject.dataType) {
      proxyDataType = dataType;
    }

    if (requestObject.data) {
      proxyData = data;
    }

    if (requestObject.method === "DELETE") {
      proxyUrl = serverUrl + "/delete/" + url;
      proxyMethod = "GET";
    } else if (requestObject.method === "PUT") {
      proxyUrl = serverUrl + "/put/" + url;
      proxyMethod = "POST";
    } else {
      return { error: "Invalid method string provided" };
    }

    my.request({
      url: proxyUrl,
      method: proxyMethod,
      data: proxyData,
      headers: proxyHeaders,
      dataType: proxyDataType,
      success: function (res) {
        return { success: res };
      },
      fail: function (res) {
        return { failed: res };
      },
    });
  },
};
