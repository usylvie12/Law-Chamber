import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
  };

  return (
    <div style={{ textAlign: "center", width: "70%", margin: "auto auto" }}>
      <h1>Create post page</h1>
      
        <Button
        onClick={() => navigate("posts")}
        variant="outline-success"
        style={{ width: "40%" }}
      >
        ALL POSTS
      </Button>
      <Form className="col-8 shadow m-4 mx-auto p-5" >
        <Form.Group>
          <Form.Control
            name="title"
            value={post.title}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="title"
          />
          <Form.Control
            onChange={handleChange}
            name="description"
            value={post.description}
            style={{ marginBottom: "1rem" }}
            placeholder="description"
          />
        </Form.Group>
        <Button
          onClick={createPost}
          variant="outline-success"
         
        >
          CREATE POST
        </Button>
        
      </Form>
      

     
    </div>
  );
}

export default CreatePost;
