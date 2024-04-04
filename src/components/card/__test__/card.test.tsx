import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../.'

const mockArticle = {
  id: 1,
        title: 'Test Article',
        abstract: 'This is a abstract',
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
}
describe('render Card component', () => {
  test('renders Card component with small type', () => {
    render(
      <Card article={mockArticle} type='small'>
        Child content
      </Card>
    )
    const articleTitle = screen.getByText(/Test Article/i)
    const articleAbstract = screen.getByText(/This is a abstract/i)
    const articleDate = screen.getByText(/2024-04-03/i)

    expect(articleTitle).toBeInTheDocument()
    expect(articleDate).toBeInTheDocument()
    expect(articleAbstract).toBeInTheDocument()
    expect(screen.getByText(/Child content/i)).toBeInTheDocument()
  })
  test('renders Card component with large type', () => {
    render(
      <Card article={mockArticle} type='large'>
        Child content
      </Card>
    )
    const articleTitle = screen.getByText(/Test Article/i)
    const articleAbstract = screen.getByText(/This is a abstract/i)
    const articleDate = screen.getByText(/2024-04-03/i)
    expect(articleTitle).toBeInTheDocument()
    expect(articleDate).toBeInTheDocument()
    expect(articleAbstract).toBeInTheDocument()
    expect(screen.getByText(/Child content/i)).toBeInTheDocument()
  })
})
