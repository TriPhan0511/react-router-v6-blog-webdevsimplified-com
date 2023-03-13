import { Link, Outlet, NavLink } from 'react-router-dom'

// Link Navigation

const BooksLayout = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: 200,
            listStyle: 'none',
          }}
        >
          <li>
            <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'red' : 'green' })}>
              Home
            </NavLink>
          </li>
          <li>
            <Link to='/books'>All books</Link>
          </li>
          <li>
            <Link to='/books/new'>New Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default BooksLayout

// --------------------------------------------------------
// import { Link, Outlet } from 'react-router-dom'

// const BooksLayout = () => {
//   return (
//     <>
//       <nav>
//         <ul
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             maxWidth: 250,
//             listStyle: 'none',
//           }}
//         >
//           <li>
//             <Link to='/books/1'>Book One</Link>
//           </li>
//           <li>
//             <Link to='/books/2'>Book Two</Link>
//           </li>
//           <li>
//             <Link to='/books/new'>New Book</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet context={{ hello: 'world' }} />
//     </>
//   )
// }

// export default BooksLayout
