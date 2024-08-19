import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firstBook = {
  author: 'Colleen Hoover',
  title: 'It Ends with Us',
  img: 'https://images-na.ssl-images-amazon.com/images/I/813aV273-rL._AC_UL600_SR600,400_.jpg',
}
const secondBook = {
  author: 'Alex Hirsch',
  title: 'The Book of Bill (Gravity Falls)',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81O6JfipQhL._AC_UL600_SR600,400_.jpg',
}
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
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
