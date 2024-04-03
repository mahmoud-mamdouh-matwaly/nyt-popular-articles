import axios from 'axios'
import { BASE_URL, API_KEY } from 'services/utils'

export const getMostPopularArticles = async (period: number = 7) => {
  try {
    const response = await axios.get(`${BASE_URL}/${period}.json?api-key=${API_KEY}`)
    return response.data
  } catch (error) {
    throw error
  }
}
