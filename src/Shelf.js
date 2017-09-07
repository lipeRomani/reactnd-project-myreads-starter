import React, {Component} from 'react';
import Book from './Book';

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
                                        <Book title={book.title} authors={book.authors} image={book.image} />
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

export default Shelf;