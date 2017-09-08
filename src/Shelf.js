import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            return (
                                (book.shelf === this.props.shelfId && 
                                    <li key={book.title}>
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