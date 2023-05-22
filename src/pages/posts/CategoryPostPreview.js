import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostPreview from './PostPreview'
import api from '../../utils/api';

function CategoryPostPreview() {
    const [categoryQuestions, setCategoryQuestions] = useState([])
    const {categoryId} = useParams();
    console.log(categoryId);

    const fetchCategoryQuestions = async() => {
        const response = await api.get(`/questions/category/${categoryId}`);
        console.log(response);
        setCategoryQuestions(response.data);
    }

    useEffect(() => {
        fetchCategoryQuestions();
    }, []); 

    return (
        <PostPreview
            questions={categoryQuestions}
        />
    );
}

export default CategoryPostPreview;