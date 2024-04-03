import { useEffect, useState } from 'react'
import { getMostPopularArticles } from 'services/articles'
import { IArticle, IUseArticles } from 'pages/articles/types'

export function useArticles(numArticles = 1): IUseArticles {
  const [articles, setArticles] = useState<IArticle[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    const fetchArticles = async () => {
      try {
        const response = await getMostPopularArticles(numArticles)
        setIsLoading(false)
        setArticles(response.results)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      }
    }

    fetchArticles()
  }, [numArticles])

  return { articles, isLoading, isError }
}
