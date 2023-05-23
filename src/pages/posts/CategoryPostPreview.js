import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostPreview from './PostPreview'
import api from '../../utils/api';

function CategoryPostPreview() {
    const [categoryQuestions, setCategoryQuestions] = useState([])
    const {categoryId} = useParams();

    const fetchCategoryQuestions = async() => {
        const response = await api.get(`/questions/category/${categoryId}`);
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