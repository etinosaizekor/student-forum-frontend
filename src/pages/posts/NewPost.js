import styled from "styled-components";
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import api from "../../utils/api";

const NewPostForm = styled(Form)`
  width: 60vw;
  display: block;
  margin: 100px;
`

function NewPost() {
  const initialSetQuestionState = { questionTitle: '', questionBody: '', categoryId: '' }
  const [newQuestion, setNewQuestion] = useState(initialSetQuestionState);
  const [categories, setCategories] = useState([]);
  const [newCategoryData, setNewCategoryData] = useState({ cateegoryName: '', categoryDescription: '' });
  const [isNewCategory, setIsNewCategory] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isNewCategory) {
      try {
        const response = await api.post('/categories/new', newCategoryData);
        const createdCategory = response.data;
        setNewQuestion({ ...newQuestion, categoryId: createdCategory.categoryId });
      } catch (error) {
        console.error(error);
        return;
      }
    }

    try {
      await api.post('/questions/new', newQuestion);
    } catch (error) {
      console.error(error);
    }
    
    setNewQuestion(initialSetQuestionState);
    setIsNewCategory(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'category') {
      if (value === 'new') {
        setIsNewCategory(true);
      } else {
        setIsNewCategory(false);
        setNewQuestion({ ...newQuestion, categoryId: value });
      }
    } else {
      setNewQuestion({ ...newQuestion, [name]: value });
    }
  };

  const handleNewCategoryChange = (event) => {
    const { name, value } = event.target;
    setNewCategoryData({ ...newCategoryData, [name]: value });
  };

  return (
    <NewPostForm onSubmit={handleSubmit}>
      <Form.Group controlId="postTitle" className="mb-3">
        <Form.Control
          type="text"
          name="questionTitle"
          value={newQuestion.questionTitle}
          required
          onChange={handleChange}
          placeholder="Post Title"
        />
      </Form.Group>

      <Form.Group controlId="postContent" className="mb-3">
        <Form.Control
          as="textarea"
          name="questionBody"
          value={newQuestion.questionBody}
          required
          onChange={handleChange}
          placeholder="Post Content"
        />
      </Form.Group>

      <Form.Group controlId="postCategory" className="mb-3">
        <Form.Label>Select or Create a Category:</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={newQuestion.category}
          required
          onChange={handleChange}
        >
          <option value="">-- Select Category --</option>
          {categories.map((category) => (
            <option key={category.categoryId} value={category.categoryId}>
              {category.categoryName}
            </option>
          ))}
          <option value="new">-- Create New Category --</option>
        </Form.Control>
      </Form.Group>

      {isNewCategory && (
        <>
          <Form.Group controlId="newCategoryName" className="mb-3">
            <Form.Control
              type="text"
              name="categoryName"
              value={newCategoryData.name}
              required
              onChange={handleNewCategoryChange}
              placeholder="New Category Name"
            />
          </Form.Group>

          <Form.Group controlId="newCategoryDescription" className="mb-3">
            <Form.Control
              as="textarea"
              name="categoryDescription"
              value={newCategoryData.description}
              required
              onChange={handleNewCategoryChange}
              placeholder="New Category Description"
            />
          </Form.Group>
        </>
      )}
      <Button variant="outline-success" type="submit">
        Post
      </Button>
    </NewPostForm>
  );
}

export default NewPost;
