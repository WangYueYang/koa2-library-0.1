import BooksController from './books'

const books = new BooksController()

export default (router) => {
  router.get('/books', books.actionsList)
}
