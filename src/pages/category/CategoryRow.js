import styled from "styled-components"
import Container from '../../components/Container'
import CategoryIcon from "./CategoryIcon"

const CategoryContainer = styled(Container)`
    padding: 10px 20px 0;
    height: 150px;
    width: 75vw;
    justify-content: space-between;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    padding: 25px;
    overflow: hidden;

`

const Desciption = styled.div`
    width: 520px;
`

function CategoryRow({
    categoryName, 
    desc, 
    numberOfPosts, 
    numberOfUsers,
    lastPost,
    iconUrl
}){
    return(
        <CategoryContainer>
            <CategoryIcon src={iconUrl}/>
            <Wrapper>
                <Desciption>
                <h4>{categoryName}</h4>
                <p>{desc}</p>
            </Desciption>
            <table className="categoryTable">
                <tbody>
                    <tr>
                        <th>Questions</th>
                        <th>Last Post</th>
                    </tr>
                    <tr>
                        <td><h6>{numberOfPosts}</h6></td>
                        <td>{lastPost}</td>
                    </tr>
                </tbody>
            </table>
            </Wrapper>
        </CategoryContainer>
    )
}

export default CategoryRow