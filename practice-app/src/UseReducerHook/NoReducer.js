import React, { useState } from "react";

// books, modalText, isModalShow
// add book
// remove book
// অনেকগুলো state একসাথে ব্যবহারের জন্য useReducer Hook ব্যবহার করা হয়। ২/৩ টা state এর জন্য useReducer ব্যবহারের দরকার নাই।

const booksData = [
  { id: 1, name: "Pather Panchale" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanta" },
];

const Modal=({modalText})=>{
return <p>{modalText}</p>
}

const NoReducer = () => {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
  const [modalText, setModalText] = useState("");
  const [isModalShow, setIsModalShow] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // alert(bookName);
    setBooks((prevState)=>{
        const newBook = {id: new Date().getTime().toString(), name: bookName}
        return [...prevState, newBook]
    })
    setBookName("");

    setIsModalShow(true);
    setModalText("Book is added");
  };

  return (
    <div>
      <h1>useReducer Hook</h1>
      <h3>Book List</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      {isModalShow && <Modal modalText={modalText}/> }
      <div>
        {books.map((book) => {
          const { id, name } = book;
          return <li key={id}>{name}</li>;
        })}
      </div>
    </div>
  );
};

export default NoReducer;
