import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

const BookService = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(new Book("", "", ""));
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = () => {
    axios
      .get("http://localhost:9292/api/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  };

  const fetchBookById = (id) => {
    axios
      .get(`http://localhost:9292/api/books/${id}`)
      .then((response) => setBooks([response.data]))
      .catch((error) => console.error("Error fetching book by ID:", error));
  };

  const addBook = () => {
    axios
      .post("http://localhost:9292/api/books", book)
      .then((response) => {
        setBooks([...books, response.data]);
        setBook(new Book("", "", ""));
      })
      .catch((error) => console.error("Error adding book:", error));
  };

  const updateBook = (id) => {
    axios
      .put(`http://localhost:9292/api/books/${id}`, book)
      .then((response) => {
        setBooks(books.map((b) => (b.id === id ? response.data : b)));
        setBook(new Book("", "", ""));
      })
      .catch((error) => console.error("Error updating book:", error));
  };

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:9292/api/books/${id}`)
      .then(() => {
        setBooks(books.filter((b) => b.id !== id));
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div>
      <h2>Book Management</h2>

      <div>
        <input
          type="text"
          placeholder="ID"
          value={book.id}
          onChange={(e) => setBook({ ...book, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={book.price}
          onChange={(e) => setBook({ ...book, price: e.target.value })}
        />
        <button onClick={addBook}>Add Book</button>
        <button onClick={() => updateBook(book.id)}>Update Book</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={() => fetchBookById(searchId)}>Search</button>
        <button onClick={fetchAllBooks}>Fetch All Books</button>
      </div>

      <ul>
        {books.map((b) => (
          <li key={b.id}>
            {b.title} - ${b.price}
            <button onClick={() => deleteBook(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookService;
