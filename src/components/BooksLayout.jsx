import { Link, Outlet } from 'react-router-dom'

const BooksLayout = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: 250,
            listStyle: 'none',
          }}
        >
          <li>
            <Link to='/books/1'>Book One</Link>
          </li>
          <li>
            <Link to='/books/2'>Book Two</Link>
          </li>
          <li>
            <Link to='/books/new'>New Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet context={{ hello: 'world' }} />
    </>
  )
}

export default BooksLayout
