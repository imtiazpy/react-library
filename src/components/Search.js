import React from 'react';


class Search extends React.Component {
    render() {
        return (
            <form className="text-center mt-3">
                <input id="search-field" type="text" placeholder="Search the book you want.." />
                <input id="search-btn" type="submit" value="Search" />
            </form>
        )
    }
};

export default Search;


