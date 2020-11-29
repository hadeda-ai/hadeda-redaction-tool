import http from "../http-common";

// Toothless / Documents
const getAll = () => {
  return http.get("/api/toothless");
};

const get = id => {
  return http.get(`/api/toothless/${id}`);
};

const create = data => {
  return http.post("/api/toothless", data);
};

const update = (id, data) => {
  return http.put(`/api/toothless/${id}`, data);
};

const remove = id => {
  return http.delete(`/api/toothless/${id}`);
};

const removeAll = () => {
  return http.delete(`/api/toothless`);
};

const findById = id => {
  return http.get(`/api/toothless/${id}`);
};

// Keywords

const getAllKeywords = () => {
  return http.get("/api/keywords");
};

const getKeyword = id => {
  return http.get(`/api/keywords/${id}`);
};

const createKeyword = data => {
  return http.post("/api/keywords", data);
};

const updateKeyword = (id, data) => {
  return http.put(`/api/keywords/${id}`, data);
};

const removeKeyword = id => {
  return http.delete(`/api/keywords/${id}`);
};

const removeAllKeyword = () => {
  return http.delete(`/api/keywords`);
};

const findByIdKeyword = id => {
  return http.get(`/api/keywords/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findById,
  getAllKeywords,
  getKeyword,
  createKeyword,
  updateKeyword,
  removeKeyword,
  removeAllKeyword,
  findByIdKeyword
};
