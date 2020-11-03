module.exports = {
  async request(requestObject) {
    proxyUrl = "";
    proxyMethod = "";
    proxyHeaders = {
      "content-type": "application/json",
    };
    proxyDataType = "json";
    proxyData = {};

    if (!requestObject.serverUrl) {
      return new Promise({ error: "No Host server url provided" });
    }

    if (!requestObject.url) {
      return new Promise({ error: "No api url provided" });
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

    if (requestObject.method === "DELETE") {
      proxyUrl = requestObject.serverUrl + "/delete/" + requestObject.url;
      proxyMethod = "GET";
    } else if (requestObject.method === "PUT") {
      proxyUrl = requestObject.serverUrl + "/put/" + requestObject.url;
      proxyMethod = "POST";
    } else {
      return new Promise({ error: "Invalid method string provided" });
    }

    return new Promise((response) =>
      my.request({
        url: proxyUrl,
        method: proxyMethod,
        data: proxyData,
        headers: proxyHeaders,
        dataType: proxyDataType,
        success: (res) => {
          response(res);
        },
        fail: (res) => {
          response(res);
        },
      })
    );
  },
};
