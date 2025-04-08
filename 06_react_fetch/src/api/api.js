import request from "./request";

// 获取文章列表
export const getPostList = () => {
  return request.get("/posts");
};

// 获取文章详情
export const getPostDetail = (id) => {
  return request.get(`/posts/${id}`);
};

// 创建文章
export const createPost = (data) => {
  return request.post("/posts", data);
};

// 更新文章
export const updatePost = (id, data) => {
  return request.put(`/posts/${id}`, data);
};

// 删除文章
export const deletePost = (id) => {
  return request.delete(`/posts/${id}`);
};
