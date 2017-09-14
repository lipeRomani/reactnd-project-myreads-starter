import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Shelf from '../Shelf';
import Book from '../Book';

const emptyShelf = {
        title       : "Test Shelf",
        shelfId     : "wantToRead",
        books       : [],
        changeShelf : jest.fn()
    }

it ('Render without problem', () => {
    const wrapper = shallow(
        <Shelf 
            title={emptyShelf.title} 
            shelfId={emptyShelf.shelfId}
            books={emptyShelf.books}
            changeShelf={emptyShelf.changeShelf}
        />);

    expect(wrapper).toMatchSnapshot();
});

it ('Shelf without books show empty message', () => {
    const wrapper = mount(
          <Shelf 
                title={emptyShelf.title} 
                shelfId={emptyShelf.shelfId}
                books={emptyShelf.books}
                changeShelf={emptyShelf.changeShelf}
            />
        );
    expect(wrapper.find(".list-empty-info")).toHaveLength(1);
});

it ('Shelf with books show books', () => {
    const shelfId = 'wantToRead';
    const books = [
        {title: "teste", id : "2212", authors:["Name1", "Name2"], shelf : shelfId},
        {title: "teste2", id : "1111", authors:["Name1", "Name2"], shelf : shelfId}
    ]
    
    const wrapper = mount(
          <Shelf 
                title={emptyShelf.title} 
                shelfId={shelfId}
                books={books}
                changeShelf={emptyShelf.changeShelf}
            />
        );
    
    expect(wrapper.find("Book")).toHaveLength(2);

});

it ('Shelf with books show books', () => {
    const books = [
        {title: "teste", id : "2212", authors:["Name1", "Name2"], shelf : "wantToRead"},
        {title: "teste2", id : "1111", authors:["Name1", "Name2"], shelf : "wantToRead"}
    ]
    
    const wrapper = mount(
          <Shelf 
                title={emptyShelf.title} 
                shelfId={emptyShelf.shelfId}
                books={books}
                changeShelf={emptyShelf.changeShelf}
            />
        );
    
    expect(wrapper.find("Book")).toHaveLength(2);
});

it ('Shelf with books, count books', () => {
    const books = [
        {title: "teste", id : "2212", authors:["Name1", "Name2"], shelf : "wantToRead"},
        {title: "teste2", id : "1111", authors:["Name1", "Name2"], shelf : "wantToRead"}
    ]
    const title = "Want to read";

    const wrapper = mount(
          <Shelf 
                title={title} 
                shelfId={emptyShelf.shelfId}
                books={books}
                changeShelf={emptyShelf.changeShelf}
            />
        );
    
    expect(wrapper.find(".bookshelf-title").text()).toEqual(`${title} (${2})`);
});