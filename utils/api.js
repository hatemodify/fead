import { API_KEY } from '@/utils/constants'

export const CATEGORY_API = (category, page = 1) =>
  `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}&page=${page}`

export const HEADLINE_API = (page = 1) =>
  `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}&page=${page}`

export const SEARCH_API = keyword =>
  `https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&language=ko&apiKey=${API_KEY}`
