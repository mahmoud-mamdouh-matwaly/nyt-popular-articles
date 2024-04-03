import React from 'react'
import { Box, Flex, Button, Center, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Card from 'components/card'
import { IArticle } from './types'
import { useArticles } from './hooks/useArticles'
import { BaseSpinner } from 'components/spinner'
const ArticleList: React.FC = () => {
  const navigate = useNavigate()
  const { articles, isLoading, isError } = useArticles()
 
  if (isLoading) {
    return (
      <Center py={6} data-testid='loading'>
        <BaseSpinner />
      </Center>
    )
  }

  if (isError) {
    return (
      <Center py={6} data-testid='error'>
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>Error fetching articles</AlertDescription>
        </Alert>
      </Center>
    )
  }

  if (articles?.length === 0) {
    return (
      <Center py={6} data-testid='emptyList'>
        <Alert status='warning'>
          <AlertIcon />
          No Data
        </Alert>
      </Center>
    )
  }

  const handleArticleClick = (article: IArticle) => {
    navigate(`/article/${article.id}`, { state: { ...article } })
  }

  return (
    <Flex gap={4} flexWrap='wrap' data-testid={'list'}>
      {articles.map((article) => (
        <Box key={article.id} data-testid={article.id} p={4} role='article'>
          <Card article={article} type='small'>
            <Button
              w='full'
              mt={8}
              bg='gray.900'
              color='white'
              rounded='md'
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              onClick={() => handleArticleClick(article)}
            >
              Details
            </Button>
          </Card>
        </Box>
      ))}
    </Flex>
  )
}

export default ArticleList
