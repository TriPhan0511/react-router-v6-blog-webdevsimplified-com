import { Link, useParams } from 'react-router-dom'
import NotFound from './NotFound'

// Link Navigation

const Book = () => {
  const { id } = useParams()

  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: 200,
          }}
        >
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='../'>Back to BookList</Link>
          </li>
        </ul>
      </nav>
      <h3>
        <span>Book {id}</span>
        <span style={{ marginLeft: 10 }}>
          <Link to='edit'>Edit</Link>
        </span>
      </h3>
    </>
  )
}

export default Book

// ---------------------------------------------------------------------
// import { useOutletContext, useParams } from 'react-router-dom'
// import NotFound from './NotFound'

// // Mock Data
// const ids = ['1', '2']

// const Book = () => {
//   const { id } = useParams()
//   const { hello } = useOutletContext()

//   return ids.includes(id) ? (
//     <h3>
//       Book {id} {hello}
//     </h3>
//   ) : (
//     <NotFound />
//   )
// }

// export default Book
