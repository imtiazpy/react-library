import React from 'react';
import Search from './Search';


class BookList extends React.Component {
    constructor() {
        super()

        this.state = {
            title: null,
            author: null,
            first_publication: null,
            publisher: null,
            cover: null
        };
    }


    fetchData = async searchText => {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        const bookList = data.docs;
        bookList.slice(0, 20).forEach(book => {
            this.setState(
                {
                    title: book.title,
                    author: book.author_name[0],
                    first_publication: book.first_publish_year,
                    publisher: book.publisher[0],
                    cover: book.cover_i
                }
            )
        })
    }


}
