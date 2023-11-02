const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// DESTRUCTURING
const book = getBook(1)

// const title = book.title
// const author = book.author

const { title, author, genres } = book

console.log(author, title, genres)
// Rest operator ...
const [primaryGenre, secondaryGenre, ...otherGenres] = genres // first element will be at first index of array and so on...
console.log(primaryGenre, secondaryGenre, otherGenres)

// Spread operator ...
const newGenres = [...genres, 'epic fantasy']
newGenres

const updatedBook = { ...book, publicationDate: '2001-12-19', pages: 1210, }
updatedBook

//TEMPLATE STRING 

const summary = `${title}, is a book, was published in ${'2001-12-19'.split('-')[0]}`
summary

// Optional chaining - ?
function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0
  return goodreads + librarything
}

getTotalReviewCount(book)
*/

// Map method - don't mutate original array

const books = getBooks();
const x = [1, 2, 3, 4, 5].map((elem) => elem * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
  //using ( before { it tells that it will return automatically
  title: book.title,
  author: book.author,
}));

essentialData;

// Filter method, is mutate original array
// Not a functional method
const n = [1, 2, 3, 4, 5].filter((num) => num > 3);
console.log(n);

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0); // sum - ios accumulating all pages to a 0
console.log(pagesAllBooks);

// Sort method, is mutate the original array too
//not functional method
const unsorted = [3, 7, 1, 9, 6];
const sorted = unsorted.slice().sort((a, b) => a - b); // use slice to create a new array
console.log(sorted);
console.log(unsorted);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// WORKING WITH IMMUTABLE(неизменный) ARRAYS
// 1. Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrects",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2. Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3); // deleted book with id:3
console.log(booksAfterDelete);

// 3. Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;

// Asynchronous JS: Promises
// fetching data - получение данных
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Async / Await
// Cleaner way to write Promises
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);

  return data;
}
const todos = getTodos();
todos;

getTodos();
// ====================
}