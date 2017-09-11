import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component {

    hasBooks() {
        for (const book of  this.props.books) {
            if (book.shelf === this.props.shelfId) {
                return true
            }
        }
        return false;
    }

    countBooks() {
        let count = 0;
        for (const book of  this.props.books) {
            if (book.shelf === this.props.shelfId) {
                count++;
            }
        }
        return count;
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title} ({this.countBooks()})</h2>
                <div className="bookshelf-books">
                    {!this.hasBooks() && (
                        <p className="list-empty-info" >No books in this shelf.</p>
                    )}
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            return (
                                (book.shelf === this.props.shelfId && 
                                    <li key={book.id}>
                                        <Book book={book} changeShelf={this.props.changeShelf} />
                                    </li>
                                )
                            );
                        })}                    
                    </ol>
                </div>
            </div>
        );
    }
}

Shelf.propTypes = {
    title   : PropTypes.string.isRequired,
    shelfId : PropTypes.string.isRequired,
    books   : PropTypes.arrayOf(PropTypes.object).isRequired,
    changeShelf : PropTypes.func.isRequired
}

export default Shelf;