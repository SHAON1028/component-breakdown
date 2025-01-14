import BookDetails from "./BookDetails"
import FeatureBook from "./FeatureBook"

export type Book = {
  id:number,
  title:string,
  author:string,
  featured:boolean,
  cover?:string
}


type BookProps = {
  book:Book
}

const BookRow:React.FC<BookProps>= ({book}) => {
  return (
   <>
   
  <BookDetails  title= {book.title} author = {book.author} cover={book.cover}/>
  <FeatureBook featured = {book.featured}/> 
   </>
  )
}
export default BookRow