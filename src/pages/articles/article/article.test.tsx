import React from 'react'
import { render, screen } from '@testing-library/react'
import ArticleDetails from 'pages/articles/article'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      id: 1,
      title: 'Test Article',
      abstract: 'This is a abstract.',
      pub_date: '2024-04-03',
      published_date: '2024-04-03',
      url: 'https://test-article.com',
      media: [
        {
          type: 'image',
          subtype: 'photo',
          caption:
            'Johnathan Walton and Marianne Smyth in December 2013. Ms. Smyth has been accused over the years of using elaborate deceptions to swindle hefty sums of money in schemes that led to two felony convictions.',
          copyright: 'Johnathan Walton/Johnathan Walton, via Associated Press',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2024/03/26/multimedia/00xp-irishheiress1-bjzm/00xp-irishheiress1-bjzm-thumbStandard.jpg',
              format: 'Standard Thumbnail',
              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2024/03/26/multimedia/00xp-irishheiress1-bjzm/00xp-irishheiress1-bjzm-mediumThreeByTwo210.jpg',
              format: 'mediumThreeByTwo210',
              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2024/03/26/multimedia/00xp-irishheiress1-bjzm/00xp-irishheiress1-bjzm-mediumThreeByTwo440.jpg',
              format: 'mediumThreeByTwo440',
              height: 293,
              width: 440,
            },
          ],
        },
      ],
    },
  }),
}))
describe('render article', () => {
  test('renders article details and link', () => {
    render(<ArticleDetails />)
    const articleTitle = screen.getByText(/Test Article/i)
    const articleAbstract = screen.getByText(/This is a abstract/i)
    const seeMoreLink = screen.getByText(/See More/i)
    expect(articleTitle).toBeInTheDocument()
    expect(articleAbstract).toBeInTheDocument()
    expect(seeMoreLink).toHaveAttribute('href', 'https://test-article.com')
  })
})
