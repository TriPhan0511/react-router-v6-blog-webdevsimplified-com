import React from 'react'

const NewBook = () => {
  return (
    <>
      <h3>Enter a new book</h3>
      <form>
        <div>
          <label id='bookTitle'>Book title</label>
          <input type='text' id='bookTitle' />
        </div>
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default NewBook
