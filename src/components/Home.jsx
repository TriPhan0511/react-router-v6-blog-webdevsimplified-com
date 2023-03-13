import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: 130,
          }}
        >
          <li>
            <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
              Home
            </NavLink>
          </li>
          <li>
            <Link to='/books'>All books</Link>
          </li>
        </ul>
      </nav>
      <h3>Home</h3>
    </>
  )
}

export default Home
