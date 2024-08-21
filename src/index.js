import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)

    return console.log(book)
  }
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          onChange={(example) => {
            console.log('Onchange')
            console.log(example.target.name)
            console.log(example.target.value)
            console.log(example.target)
          }}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => console.log('Click me')}>Click</button>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
