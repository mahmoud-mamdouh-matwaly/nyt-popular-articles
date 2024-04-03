import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import ArticleList from 'pages/articles'
import ArticleDetails from 'pages/articles/article'
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<ArticleList />} />
          <Route path='/article/:pubDate' element={<ArticleDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
