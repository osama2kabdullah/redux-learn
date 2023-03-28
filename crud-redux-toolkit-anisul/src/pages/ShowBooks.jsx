import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../features/book/booksSlice";

const ShowBooks = () => {
  const states = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Show Books</h2>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {states.booksReducer.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.author}</td>
              <td>
                <Link
                  state={{ id: row.id, title: row.title, author: row.author }}
                  to={"/addbooks"}
                >
                  <Button variant="success">Edit</Button>{" "}
                </Link>
                <Button
                  onClick={() => dispatch(deleteBook(row.id))}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowBooks;
