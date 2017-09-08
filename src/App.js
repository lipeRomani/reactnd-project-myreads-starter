import React from 'react'
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookListBox from './BookListBox';
import SearchBox from './SearchBox';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then(books => this.setState({books}));
  }

  changeShelf = (book, shelfName) => {
    return BooksAPI
      .update(book, shelfName)
      .then(result => BooksAPI.getAll())
      .then(books => {
        this.setState({books});
        return books;
      });
  }

  searchBook = (query) => {
    BooksAPI
      .search(query, 1)
      .then(books => {
        console.log(books);
      })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => {
          return <BookListBox books={this.state.books} changeShelf={this.changeShelf} />;
        }}/>

        <Route
          path="/search"
          render={() => {
          return <SearchBox/>;
        }}/>
      </div>
    )
  }
}

export default BooksApp
