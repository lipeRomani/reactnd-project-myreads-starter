import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    
    handleChange = e => {
        const shelfId = e.target.value;
        this.props.changeShelf(this.props.book, shelfId);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url('${this.props.book.imageLinks ? this.props.book.imageLinks.smallThumbnail : ""}')`
                    }}></div>
                    <div className="book-shelf-changer" style={(this.props.book.shelf && this.props.book.shelf !== 'none') ? {backgroundColor : 'orange'} : {}}>
                        <select value={this.props.book.shelf ? this.props.book.shelf : 'none' } onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(", ") : ""}</div>
            </div>
        );
    }
}

Book.propTypes = {
    book : PropTypes.object.isRequired,
    changeShelf : PropTypes.func.isRequired
}

export default Book;
