import { useOutletContext, useParams } from 'react-router-dom'
import NotFound from './NotFound'

// Mock Data
const ids = ['1', '2']

const Book = () => {
  const { id } = useParams()
  const { hello } = useOutletContext()

  return ids.includes(id) ? (
    <h3>
      Book {id} {hello}
    </h3>
  ) : (
    <NotFound />
  )
}

export default Book
