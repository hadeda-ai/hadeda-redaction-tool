import http from "../http-common";

// Toothless / Documents
const getAll = () => {
  return http.get("/text/");
};

const get = id => {
  return http.get(`/text/${id}/`);
};

const create = data => {
  return http.post("/text/", data);
};

const update = (id, data) => {
  return http.put(`/text/${id}`, data);
};

const remove = id => {
  return http.delete(`/text/${id}/`);
};

const removeAll = () => {
  return http.delete(`/text/`);
};

const findById = id => {
  return http.get(`/text/${id}`);
};

// Keywords

const getAllKeywords = () => {
  return http.get("/text/");
};

const getKeyword = id => {
  return http.get(`/text/${id}/`);
};

const createKeyword = data => {
  return http.post("/text/", data);
};

const updateKeyword = (id, data) => {
  return http.put(`/text/${id}/`, data);
};

const removeKeyword = id => {
  return http.delete(`/text/${id}`);
};

const removeAllKeyword = () => {
  return http.delete(`/text`);
};

const findByIdKeyword = id => {
  return http.get(`/text/${id}`);
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
