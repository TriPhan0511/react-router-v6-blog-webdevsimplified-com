import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditBook = () => {
  const { id } = useParams()
  const [bookId, setBookId] = useState(id)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(bookId)
    // navigate('/books', { replace: true })
    // navigate(-1)
    navigate(-2)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label id='bookId'>Book Id</label>
          <input value={bookId} onChange={(e) => setBookId(e.target.value)} />
        </div>
        <button type='submit'>Edit</button>
      </form>
    </>
  )
}

export default EditBook
