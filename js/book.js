const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = '';

    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displaySearchResult(data.docs);

        if(searchText === ""){
            alert("please write somthing");

        }
        else{
            if(data.docs.length > 0){
                document.getElementById("total-message").innerHTML = `total-result: ${data.num_found}`;
            }
            else{
                document.getElementById("total-message").innerHTML =
                "no result";
            }
        }
        
    });
    
};

const displaySearchResult = docs => {
    // console.log(docs);

    const searchResult = document.getElementById('search-result');

    searchResult.textContent = ""; 
    docs.forEach(doc => {
        // console.log(doc);

        const div = document.createElement('div');
        const imageSource = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadBookDetail(${doc.cover_i})" class="card h-100">
            <img src="${imageSource}" class="card-img-top" style= 'height:350px' alt="..."> 
            <div class="card-body text-center">
              <h2 class="card-title text-primary">${doc.title}</h2> <br>
              <h3><span class="text-info">Author</span>: ${doc.author_name}</h3>
              <h3><span class="text-info">Publisher</span>: ${doc.publisher}</h3>
              <h3><span class="text-info">1st-published</span>:${doc.first_publish_year}</h5>
            </div>
          </div>
        `;
        searchResult.appendChild(div);

    })
}

