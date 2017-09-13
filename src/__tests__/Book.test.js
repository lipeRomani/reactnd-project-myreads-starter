import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Book from '../Book';

it ('Test if componente render without error', () => {
    const book = {};
    const changeShelf = jest.fn();
    const wrapper = shallow(<Book book={book} changeShelf={changeShelf} />);
    expect(wrapper).toMatchSnapshot();
});

it ("Test if handle change is calling on change status", () => {
    const book = {};
    const changeShelf = jest.fn();

    const wrapper = mount(<Book book={book} changeShelf={changeShelf} />);
    wrapper.find('select').simulate('change');
    expect(changeShelf).toHaveBeenCalledTimes(1);
}); 

it ("Test book without authors", () => {
    const book = {
        authors : []
    };
    const changeShelf = jest.fn();
    const wrapper = mount(<Book book={book} changeShelf={changeShelf} />);
    expect(wrapper.find(".book-authors").text()).toEqual("");
});

it ("Test book with one author", () => {
    const author = "R. R. Martin";
    const book = {
        authors : [author]
    };
    const changeShelf = jest.fn();
    const wrapper = mount(<Book book={book} changeShelf={changeShelf} />);
    expect(wrapper.find(".book-authors").text()).toEqual(author);
});

it ("Test book with two authors", () => {
    const author1 = "R. R. Martin";
    const author2 = "Suzanne Collins";

    const book = {
        authors : [author1, author2]
    };
    const changeShelf = jest.fn();
    const wrapper = mount(<Book book={book} changeShelf={changeShelf} />);
    expect(wrapper.find(".book-authors").text()).toEqual(`${author1}, ${author2}`);
});

it ("test the color of the menu if the book is on the shelf", () => {
    const book = {
        shelf : "wantToRead"
    };
    const changeShelf = jest.fn();
    const wrapper = mount(<Book book={book} changeShelf={changeShelf} />);
    expect(wrapper.find(".book-shelf-changer").props().style.backgroundColor).toEqual("orange");
});

it ("test the color of the menu if the book is off the shelf", () => {
    const book = {};
    const changeShelf = jest.fn();
    const wrapper = mount(<Book book={book} changeShelf={changeShelf} />);
    expect(wrapper.find(".book-shelf-changer").props().style.backgroundColor).toEqual(undefined);
}); 