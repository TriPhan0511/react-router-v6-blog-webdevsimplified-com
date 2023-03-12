import { Routes, Route } from 'react-router-dom'
import Book from './Book'
import BooksLayout from './BooksLayout'
import NewBook from './NewBook'
import NotFound from './NotFound'
import BookList from './BookList'

const BookRoutes = () => {
  return (
    <Routes>
      <Route element={<BooksLayout />}>
        <Route index element={<BookList />} />
        <Route path=':id' element={<Book />} />
        <Route path='new' element={<NewBook />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default BookRoutes
