import React from 'react'
import { Box, Link } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Card from 'components/card'
const ArticleDetails: React.FC = () => {
  const {
    state: article,
  } = useLocation()

  return (
    <Box borderWidth='1px' p={4} borderRadius='md' data-testid='articleDetails'>
      <Card article={article} type='large'>
        <Box w={'full'}>
          <Link
            w={'full'}
            mt={8}
            bg={'gray.900'}
            color={'white'}
            rounded={'md'}
            px='4'
            py='2'
            isExternal
            href={article?.url}
            fontWeight={500}
            as='button'
            role='link'
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            See More
          </Link>
        </Box>
      </Card>
    </Box>
  )
}

export default ArticleDetails
