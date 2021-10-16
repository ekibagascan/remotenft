import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/' })

export const fetchCategories = () => API.get(`/api/category`)
export const fetchCategory = (name) => API.get(`/api/category/${name}`)
export const fetchPosts = () => API.get(`/api/remote-nft`)
export const fetchPost = (id) => API.get(`/api/remote-nft/${id}`)
export const createPost = (postjob) => API.post(`/api/remote-nft`, postjob)
export const updatePost = (id, updatedPost) =>
  API.patch(`/api/remote-nft/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/api/remote-nft/${id}`)
export const fetchPostsByTag = (tag) => API.get(`/api/remote-nft/tag/${tag}`)
export const fetchPostsByCategory = (category) =>
  API.get(`/api/remote-nft/category/${category}`)
