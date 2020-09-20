import { request } from '@/plugins/request'

// 获取文章列表
export const getArticles = data => {
  return request({
    method: 'GET',
    url: '/api/articles',
    data
  })
}

// 获取文章列表
export const getYourFeedArticles = data => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    data
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 创建文章
export const createArticle = data => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data
  })
}