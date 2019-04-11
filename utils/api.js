import { API_KEY } from '@/utils/constants'

export const CATEGORY_API = category => {
  return `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`
}
export const HEADLINE_API = `https://newsapi.org/v2/top-headlines?country=kr&pageSize=40&apiKey=${API_KEY}`
