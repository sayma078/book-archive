const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`
    
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');

    // books.forEach(book => {
    //     console.log(book);
    // })
}