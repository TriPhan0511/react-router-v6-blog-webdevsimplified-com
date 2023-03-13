import { Link, Route, Routes, useRoutes } from 'react-router-dom'
import Book from './components/Book'
import BookList from './components/BookList'
import BooksLayout from './components/BooksLayout'
import EditBook from './components/EditBook'
import Home from './components/Home'
import NewBook from './components/NewBook'
import NotFound from './components/NotFound'

// Link Navigation

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/books' element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path=':id/edit' element={<EditBook />} />
          <Route path='new' element={<NewBook />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

// -------------------------------------------------------------------------------------
// import { useRoutes } from 'react-router-dom'
// import Book from './components/Book'
// import BookList from './components/BookList'
// import BooksLayout from './components/BooksLayout'
// import Home from './components/Home'
// import NotFound from './components/NotFound'

// // useRoutes Hook

// function App() {
//   const elements = useRoutes([
//     {
//       path: '/',
//       element: <Home />,
//     },
//     {
//       path: '*',
//       element: <NotFound />,
//     },
//     {
//       path: '/books',
//       element: <BooksLayout />,
//       children: [
//         {
//           index: true,
//           element: <BookList />,
//         },
//         {
//           path: ':id',
//           element: <Book />,
//         },
//       ],
//     },
//   ])

//   return elements
// }

// export default App

// // -------------------------------------------------------------------------------------
// import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import NotFound from './components/NotFound'
// import BookRoutes from './components/BookRoutes'

// // Mutiple Routes - Nested Routes

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='*' element={<NotFound />} />
//         <Route path='/books/*' element={<BookRoutes />} />
//       </Routes>
//     </>
//   )
// }

// export default App

// // -------------------------------------------------------------------------------------
// import { Route, Routes, Link } from 'react-router-dom'
// import Home from './components/Home'
// import BookList from './components/BookList'
// import BookSidebar from './components/BookSidebar'

// // Mutiple Routes - Separate Routes

// function App() {
//   return (
//     <>
//       <nav>
//         <ul
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             maxWidth: 100,
//             listStyle: 'none',
//           }}
//         >
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/books'>Books</Link>
//           </li>
//         </ul>
//       </nav>

//       <aside>
//         <Routes location='/books'>
//           {/* <Routes> */}
//           <Route path='books' element={<BookSidebar />} />
//         </Routes>
//       </aside>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/books' element={<BookList />} />
//       </Routes>
//     </>
//   )
// }

// export default App

// -------------------------------------------------------------------------------------
// import { Route, Routes, Link } from 'react-router-dom'
// import Home from './components/Home'
// import BookList from './components/BookList'
// import Book from './components/Book'
// import NotFound from './components/NotFound'
// import NewBook from './components/NewBook'
// import BooksLayout from './components/BooksLayout'
// import OtherLayout from './components/OtherLayout'
// import Contact from './components/Contact'
// import About from './components/About'

// function App() {
//   return (
//     <>
//       <nav>
//         <ul
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             maxWidth: 350,
//             listStyle: 'none',
//           }}
//         >
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/books'>All books</Link>
//           </li>
//           <li>
//             <Link to='/contact'>Contact me</Link>
//           </li>
//           <li>
//             <Link to='/about'>About me</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='*' element={<NotFound />} />
//         <Route path='/books' element={<BooksLayout />}>
//           <Route index element={<BookList />} />
//           <Route path=':id' element={<Book />} />
//           <Route path='new' element={<NewBook />} />
//         </Route>
//         <Route element={<OtherLayout />}>
//           <Route path='/contact' element={<Contact />} />
//           <Route path='about' element={<About />} />
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App
