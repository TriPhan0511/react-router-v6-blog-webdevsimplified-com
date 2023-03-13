import { Link } from 'react-router-dom'

// Mock data
const bookLinks = Array(3)
  .fill(0)
  .map((_, i) => i + 1)
  .map((e) => (
    <li key={e}>
      <Link to={`/books/${e}`}>Book {e}</Link>
    </li>
  ))

const BookList = () => {
  return (
    <>
      <h3>BookList</h3>
      <ul>{[...bookLinks]}</ul>
    </>
  )
}

export default BookList
