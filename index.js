let allTheBooks = [];

const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((arrayOfBooks) => {
      console.log("arrayOfBooks", arrayOfBooks);

      const booksRow = document.getElementById("books-row");
      arrayOfBooks.forEach((book, i) => {
        allTheBooks = arrayOfBooks;
        const newCol = document.createElement("div");
        newCol.classList.add("col");
        newCol.innerHTML = `
        <div class="card h-100 rounded-5 ">
            <img src="${book.img}" class="card-img-top rounded-top-5" alt="book image">
            <div class="card-body bg-body-secondary  rounded-bottom-5 ">
                <h5 class="card-title ">${book.title}</h5>
                <p class="card-text">${book.price}£</a>
                <div>
                    <button class="btn btn-danger">SCARTA</button>
                    <button class="btn btn-success">AGGIUNGI</button>
                </div>
            </div>
        </div>
        `;

        booksRow.appendChild(newCol);
      });
    })
    .catch((error) => {
      console.log("ERRORE", error);
    });
};

getBooks();
