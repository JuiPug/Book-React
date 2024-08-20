import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const books = [
  {
    author: 'Colleen Hoover',
    title: 'It Ends with Us',
    img: 'https://images-na.ssl-images-amazon.com/images/I/813aV273-rL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Alex Hirsch',
    title: 'The Book of Bill (Gravity Falls)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81O6JfipQhL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
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
const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
