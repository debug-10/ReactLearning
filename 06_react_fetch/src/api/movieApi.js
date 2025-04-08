import axios from "axios";

// 创建专门用于电影API的axios实例
const movieRequest = axios.create({
  baseURL: "http://apis.tianapi.com",
  timeout: 5000,
});

// 请求拦截器
movieRequest.interceptors.request.use(
  (config) => {
    // 添加API key到请求参数中
    config.params = {
      ...config.params,
      key: "422f90dd2d6225debeb19d8a18ae6695",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
movieRequest.interceptors.response.use(
  (response) => {
    // 统一处理响应数据
    if (response.data.code === 200) {
      return response.data.result;
    }
    return Promise.reject(new Error(response.data.msg || "请求失败"));
  },
  (error) => {
    console.error("请求错误:", error.message);
    return Promise.reject(error);
  }
);

// 获取电影列表
export const getMovieList = (page = 1, num = 10) => {
  return movieRequest.get("/film/index", {
    params: {
      page,
      num,
    },
  });
};
