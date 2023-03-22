import CategoryData from '../../data/categoryData';
import CategoryRow from './CategoryRow';

function Category() {
    return(
        <div>
        {CategoryData.map((data, index) => {
            return(
                <CategoryRow
                key={index}
                categoryName = {data.category_name}
                desc = {data.desc}
                numberOfPosts = {data.number_of_post}
                numberOfUsers = {data.number_of_users}
                lastPost = {data.last_post}
                iconUrl = {data.icon_url}
                />
            )
        })}
        </div>
    )
}

export default Category;