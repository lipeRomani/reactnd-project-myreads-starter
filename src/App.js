import React from 'react'
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookListBox from './BookListBox';
import SearchBox from './SearchBox';

class BooksApp extends React.Component {
  state = {
    myBooks: [],
    booksFound : [],
    searchQuery : "" 
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then(myBooks => this.setState({myBooks}));
  }

  changeShelf = (book, shelfName) => {
    return BooksAPI
      .update(book, shelfName)
      .then(result => BooksAPI.getAll())
      .then(myBooks => {
        this.setState({myBooks});
        if (this.state.searchQuery.length > 0) {
          this.searchBook(this.state.searchQuery);
        }
      });
  }

  searchBook = (query) => {
    this.setState({searchQuery : query});

    if (query.length === 0) {
      this.setState({booksFound : []});
    }

      BooksAPI
          .search(query)
          .then(booksFound => {
            if (!Array.isArray(booksFound)) {
              this.setState({booksFound : []})
              return [];
            }

            let newBooksFound =  booksFound.map((bookFound) => {
              for (let book of this.state.myBooks) {
                if (book.id === bookFound.id) {
                  return book;
                }
              } 
              return bookFound;
            });

            this.setState({booksFound : newBooksFound})
          })
    
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => {
          return <BookListBox books={this.state.myBooks} changeShelf={this.changeShelf} />;
        }}/>

        <Route
          path="/search"
          render={() => {
          return <SearchBox 
              searchBook={this.searchBook} 
              booksFound={this.state.booksFound} 
              query={this.state.searchQuery} 
              changeShelf={this.changeShelf}
              />;
        }}/>
      </div>
    )
  }
}

export default BooksApp
