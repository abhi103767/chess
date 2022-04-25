import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
   display: grid;
   grid-template-columns: auto auto;

   gap:  10px;
   justify-content: center;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    axios.get('http://localhost:8080/books')
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {!!data &&
          data.map((book) => {
            return <BookCard key={book.id} id={book.id} title={book.title} thumbnailUrl={book.thumbnailUrl} isbn={book.isbn} />
          })
        }
      </Grid>
    </>
  );
};
export default Books;
