const Book = (props) => {
  console.log(props)
  const getSingleBook = () => {
    props.getBook(props.id)
  }

  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <button onClick={getSingleBook}>click me me</button>
      <h4>{props.author}</h4>
    </article>
  )
}
export default Book
