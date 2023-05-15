import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from 'axios'


const TextArea = styled.textarea`
  margin: 10px;
  height: 50px;
  width: 100%;
  border: 1px solid #ced4da;
  outline: none;
  padding: 10px;
`;

const BodyArea = styled(TextArea)`
  height: 200px;
`;

const Form = styled.form`
  width: 60vw;
  display: block;
  margin: 30px;
`

function NewPost() {
  const [formData, setFormData] = useState({title: '', content: '', tags: ''});

  const handleSubmit = async(event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:5000/posts/new',
      data: formData
    })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea 
      type="text" 
      name="title"
      value={formData.title} 
      required
      onChange={handleChange}
      />
      <BodyArea 
        type="text" 
        name="content"
        value={formData.content}  
        onChange={handleChange}
        required 
      />
      <TextArea 
        type="text" 
        name="tags" 
        value={formData.tags} 
        placeholder="Question tags. E.g. #chemistry #organic-chemistry" 
        onChange={handleChange}
      />  
      <Button 
      variant="outline-success" 
      type="submit" 
      >Post</Button>
    </Form>
  );
}

export default NewPost;
