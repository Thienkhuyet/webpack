import Axios from "axios";
const commonConfig = {
  baseUrl: "http://",
  transfromresponses: [
    (data) => {
      return data;
    },
  ],
  responsesType: "json",
  timeout: 30000,
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
  headers: {
    "Fineract-Platform-TenantId": "default",
    "Content-Type": "application/json;charset=UTF-8",
  },
};

let axiosInstance = Axios.create(commonConfig);
class httpClient {
  static get(url, data) {
    if (data) {
      url += "?" + this.queryParam(data);
    }
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.error(err);
          reject("error connect server");
        });
    });
  }
  static queryParam(obj) {
    let jsonStr = "";
    if (typeof obj === "object") {
      for (let key in obj) {
        jsonStr += `${key}=${obj[key]}&`;
      }
      return jsonStr;
    }
    return jsonStr;
  }
}
export default {
  Get(url, data) {
    return httpClient.get(url, data);
  },
};
