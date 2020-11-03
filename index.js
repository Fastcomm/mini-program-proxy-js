module.exports = {
  request(serverUrl, url, method, data, dataType, headers) {
    proxyUrl = "";
    proxyMethod = "";
    proxyHeaders = {
      "content-type": "application/json",
    };
    proxyDataType = "json";
    proxyData = {};

    if (headers) {
      proxyHeaders = headers;
    }

    if (dataType) {
      proxyDataType = dataType;
    }

    if (data) {
      proxyData = data;
    }

    if (method === "DELETE") {
      proxyUrl = serverUrl + "/delete/" + url;
      proxyMethod = "GET";
    } else if (method === "PUT") {
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
