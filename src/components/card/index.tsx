import React, { useMemo, ReactNode } from 'react'
import { Heading, Box, Center, Image, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import { IArticle } from 'pages/articles/types'
interface ICard {
  article: IArticle
  children: ReactNode
  type: string
}

const Card: React.FC<ICard> = ({ article, children, type }) => {
  const getImageStandard = useMemo(() => {
    if (article?.media && article?.media?.length) {
      const imageStandard = article?.media[0]['media-metadata']?.find((metadata) => {
        if (type === 'small') {
          return metadata?.width > 100
        }
        return metadata?.width > 300
      })?.url
      return imageStandard
    }
    return ''
  }, [article, type])

  return (
    <Center py={6}>
      <Box
        maxW={type === 'small' ? '270px' : '600px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image h={'120px'} w={'full'} src={getImageStandard} objectFit='cover' alt='#' />

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading
              as='h5'
              textAlign='center'
              fontSize={'md'}
              fontWeight={500}
              fontFamily={'body'}
              noOfLines={1}
            >
              {article?.title}
            </Heading>
            <Text color={'gray.500'} fontSize={'sm'}>
              {article?.published_date}
            </Text>

            <Text color={'gray.500'} fontSize={'sm'} noOfLines={3}>
              {article?.abstract}
            </Text>
          </Stack>

          {children}
        </Box>
      </Box>
    </Center>
  )
}

export default Card
