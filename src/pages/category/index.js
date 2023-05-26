import CategoryRow from './CategoryRow';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import { useEffect, useState } from 'react';


function Category() {

    const [categoryData, setCategoryData] = useState([])

    const fetchNumberOfQuestions = async (categoryId) => {
    try {
      const response = await api.get(`/questions/category/${categoryId}`);
      if(response.data){
          return response.data.length;
      }
    } catch (error) {
      console.error(error);
      return 0;
    }
  };


  const fetchLastPost = async (categoryId) => {
    try {
        const response = await api.get(`/questions/category/${categoryId}?sort=createdAt&order=desc&limit=1`);
        const lastPost = response.data[0]
        if(lastPost){
            return lastPost.questionTitle
        }
    } catch (error) {
      console.error(error);
      return null;
    }
  };


   useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await api.get('/categories');
        const categories = response.data;
        
        const categoryDataWithAdditionalInfo = await Promise.all(
          categories.map(async (category) => {
            const categoryId = category.categoryId;
            const numberOfPosts = await fetchNumberOfQuestions(categoryId);
            const lastPost = await fetchLastPost(categoryId);

            return {
              ...category,
              numberOfPosts,
              lastPost,
            };
          })
        );

        setCategoryData(categoryDataWithAdditionalInfo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryData();
  }, []);

    return(
        <div>
        {categoryData.map((category, index) => {
            return(
                <Link className='link' key={index} to={`/categories/${category.categoryId}/questions`}>
                    <CategoryRow
                    key={index}
                    categoryName = {category.categoryName}
                    desc = {category.categoryDescription}
                    numberOfPosts = {category.numberOfPosts}
                    // numberOfUsers = {data.number_of_categories}
                    lastPost = {category.lastPost}
                    iconUrl = {category.iconUrl}
                    />            
                </Link>
            )
        })}
        </div>
    )
}

export default Category;