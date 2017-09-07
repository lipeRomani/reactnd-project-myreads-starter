import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

class BookListBox extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf title="Currently Reading" shelfId="currentlyReading" books={this.props.books}/>
                        <Shelf title="Want to read" shelfId="wantToRead" books={this.props.books}/>
                        <Shelf title="Read" shelfId="read" books={this.props.books}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookListBox;