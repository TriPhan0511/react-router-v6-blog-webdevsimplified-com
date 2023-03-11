import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import BookList from './components/BookList'
import Book from './components/Book'
import NewBok from './components/NewBok'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/books'>All books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBok />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
