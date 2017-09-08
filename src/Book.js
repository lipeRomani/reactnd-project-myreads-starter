import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

class Book extends Component {

    state = {
        isLoading : false
    }

    handleChange = (e) => {
        this.setState({isLoading : true});
        const shelfId = e.target.value;
        this.props.changeShelf(this.props.book, shelfId)
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
                        backgroundImage: `url('${this.props.book.imageLinks.smallThumbnail}')`
                    }}>
                        {this.state.isLoading && <ReactLoading type="spin" color="red" className="book-loading" />}  
                    </div>
                    <div className="book-shelf-changer" style={(this.state.isLoading && {display : 'none'}) || {}}>
                        <select value={this.props.book.shelf} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors.join(", ")}</div>
            </div>
        );
    }
}

Book.propTypes = {
    book : PropTypes.object.isRequired,
    changeShelf : PropTypes.func.isRequired
}

export default Book;
