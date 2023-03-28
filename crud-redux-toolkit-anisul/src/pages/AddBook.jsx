import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addBook, editBook } from "../features/book/booksSlice";

const AddBook = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const bookState = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(location.state);

  const onSubmit = (data) => {
    if (location?.state) {
      data["id"] = location.state.id;
      dispatch(editBook(data));
    } else {
      data["id"] = bookState.length + 1;
      dispatch(addBook(data));
    }
    navigate("/showbooks");
  };

  return (
    <>
      <h2>{location?.state ? "Edit" : "Add"} book</h2>
      <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "18rem" }}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
            defaultValue={location?.state?.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author"
            {...register("author", { required: true })}
            defaultValue={location?.state?.author}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddBook;
