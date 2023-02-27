import React, { useReducer, useState } from "react";

// books, modalText, isModalShow
// add book
// remove book
// অনেকগুলো state একসাথে ব্যবহারের জন্য useReducer Hook ব্যবহার করা হয়। ২/৩ টা state এর জন্য useReducer ব্যবহারের দরকার নাই।

const booksData = [
  { id: 1, name: "Pather Panchale" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanta" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

// reducer function
// const reducer=(present_state, action)
const reducer = (state, action) => {
  // এখানে action এর মধ্যে ২টা জিনিস পাচ্ছি। ১. action.type এবং ২. action.payload
  // যে ডাটাগুলো আমাদের আপডেট করা দরকার কেবলমাত্র সেই ডাটাগুলো এখানে আনবো

  if (action.type == "ADD") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModalShow: true,
      modalText: "Book is added!",
    };
  }
  if (action.type == "REMOVE") {
    const filteredBooks = [...state.books].filter(
      (book) => book.id != action.payload
    );
    return {
      ...state,
      books: filteredBooks,
      isModalShow: true,
      modalText: "Book is removed!",
    };
  }
  return state;
};

const UseReducer = () => {
  // const []=useReducer(reducer_function, initialStateValue);
  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalShow: false,
    modalText: "",
  });
  const [bookName, setBookName] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook }); // pass any value with "payload"
    setBookName("");
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
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
      {bookState.isModalShow && <Modal modalText={bookState.modalText} />}
      <div>
        {bookState.books.map((book) => {
          const { id, name } = book;
          return (
            <li key={id}>
              {name}{" "}
              <button
                onClick={() => {
                  removeBook(id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default UseReducer;
