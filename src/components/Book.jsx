import { useParams } from 'react-router-dom'

const Book = () => {
  const { id } = useParams()

  return <h3>Book {id}</h3>
}

export default Book
