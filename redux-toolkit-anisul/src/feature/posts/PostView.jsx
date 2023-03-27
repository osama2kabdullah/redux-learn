import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { error, isLoading, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <small>{isLoading && "Loading..."}</small>
      <small>{error && `${error.message}`}</small>
      
      {posts.map((post) => (
        <Card key={post.id} style={{margin: '3em'}}>
          <Card.Header>
            <Card.Title>{post.title}</Card.Title>
        </Card.Header>
          <Card.Body>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PostView;
