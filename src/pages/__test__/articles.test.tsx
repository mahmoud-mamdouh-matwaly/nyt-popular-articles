
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ArticleList from 'pages/articles'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

const articles = [
  { id: 1, title: 'Article 1', abstract: 'This is a test article abstract' },
  { id: 2, title: 'Article 2', abstract: 'Another test article' },
]
jest.mock('pages/articles/hooks/useArticles', () => ({
  useArticles: () => ({
    articles: articles,
    isLoading: false,
    isError: false,
  }),
}))

describe('articles', () => {
  test('renders articles with details button', () => {
    render(<ArticleList />)

    const articles = screen.getAllByRole('article')
    expect(articles.length).toBe(2)

    articles.forEach((article, index) => {
      const title = article.querySelector('h5')
      expect(title).toBeInTheDocument()
      expect(title).toHaveTextContent(`Article ${index + 1}`)

      const button = article.querySelector('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Details')
    })
  })
  test('clicking "Details" button navigates to article details page', () => {
    render(<ArticleList />)

    const button = screen.getAllByText(/Details/i)

    fireEvent.click(button[0])

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/article/1', { state: {...articles[0]} })
  })
})
