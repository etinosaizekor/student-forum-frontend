import CategoryRow from './CategoryRow';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import { useEffect, useState } from 'react';


function Category() {

    const [categories, setCategories] = useState([])

    const fetchCategories = async() => {
        const response = await api.get(`/categories/`); 
        setCategories(response.data);
    }

    useEffect(() => {
        fetchCategories();
    }, []) 

    return(
        <div>
        {categories.map(({categoryId, categoryName, categoryDescription, iconUrl}, index) => {
            return(
                <Link className='link' key={index} to={`/categories/${categoryId}/questions`}>
                    <CategoryRow
                    key={index}
                    categoryName = {categoryName}
                    desc = {categoryDescription}
                    // numberOfPosts = {data.number_of_post}
                    // numberOfUsers = {data.number_of_users}
                    // lastPost = {data.last_post}
                    iconUrl = {iconUrl}
                    />            
                </Link>
            )
        })}
        </div>
    )
}

export default Category;