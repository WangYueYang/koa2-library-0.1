import Books from '../models/books'

class BooksController {
  constructor() {

  }

  async actionsList(ctx) {
    const books = new Books();
    const result = await books.getBookList({
      url: '/user/getBookList'
    })
    await ctx.render('books', {
      title: 'books title',
      list: result.res,
      heades: ['ID', 'Name', 'Author', 'Create Time', 'Price', 'Action']
    });
  }
}

export default BooksController