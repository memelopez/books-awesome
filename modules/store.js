export default class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static setBooks(books) {
    if (books.length > 0) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static removeBook(index) {
    const books = this.getBooks();
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}