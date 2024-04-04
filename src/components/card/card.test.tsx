import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from 'components/card'

const mockArticle = {
  title: 'Test Article',
  published_date: '2024-04-03',
  abstract: 'This is a article abstract',
  media: [
    {
      'media-metadata': [
        {
          width: 100,
          url: 'https://example.com/image.jpg',
        },
        {
          width: 300,
          url: 'https://example.com/image.jpg',
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
    const articleAbstract = screen.getByText(/This is a article abstract/i)
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
    const articleAbstract = screen.getByText(/This is a article abstract/i)
    const articleDate = screen.getByText(/2024-04-03/i)
    expect(articleTitle).toBeInTheDocument()
    expect(articleDate).toBeInTheDocument()
    expect(articleAbstract).toBeInTheDocument()
    expect(screen.getByText(/Child content/i)).toBeInTheDocument()
  })
})
