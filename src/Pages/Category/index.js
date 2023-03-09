import styled from 'styled-components';
import Container from '../../Components/Container'
import Post from '../Posts/PostPreview';

const CategoryContainer = styled(Container)`
    height: 200px;
    width: 80vw;
    justify-content: space-between;
`
const Overview   = styled.div`

`

function Category() {
    return ( 
        <CategoryContainer>
            <div>
                <h2>Category name</h2>
                <p>This group is for the sharing of knowledge in regards to everything chemistry</p>
            </div>
                <Overview>
                    <p>Post</p>
                    <h2>126</h2>
                </Overview>   
                <Overview>
                    <p>User</p>
                    <p>100+</p>
                </Overview>
                <Overview>
                    This is the last post entered and it is just an example
                </Overview>            
        </CategoryContainer>
     );
}

export default Category;