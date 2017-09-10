import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from "./Book";

class SearchBox extends Component {

    handleForm = (e) => {
      const query = e.target.value;
      this.props.searchBook(query);
    }

    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={this.props.query} placeholder="Search by title or author" onChange={this.handleForm}  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.props.booksFound.map((book) => (
                  <li key={book.id}>
                    <Book book={book} changeShelf={this.props.changeShelf} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        );
    }
}

SearchBox.propTypes = {
  searchBook  : PropTypes.func.isRequired,
  changeShelf : PropTypes.func.isRequired,
  booksFound : PropTypes.arrayOf(PropTypes.object).isRequired,
  query : PropTypes.string.isRequired
}

export default SearchBox;