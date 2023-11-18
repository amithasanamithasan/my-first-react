 import Book from "./Book"
 
 export default

  function BookStore({book}){
return(
    <div>
       
        <h1>Book:{book.length}</h1>
        {
         book.map(book=><Book book={book}></Book>)
        }
    </div>
)
  }