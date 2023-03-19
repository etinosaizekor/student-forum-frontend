import styled from "styled-components"
import Container from '../../Components/Container'
import CategoryIcon from "./CategoryIcon"

const CategoryContainer = styled(Container)`
    padding: 10px 20px 0;
    height: 150px;
    width: 80vw;
    justify-content: space-between;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    padding: 25px;
`

const Desciption = styled.div`
    width: 520px;
`

const Overview = styled.div`

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
            <table>
                <tr>
                    <th>Questions</th>
                    <th>Users</th>
                    <th>Last Post</th>
                </tr>
                <tr>
                    <td><h6>{numberOfPosts}</h6></td>
                    <td><h6>{numberOfUsers}</h6></td>
                    <td>{lastPost}</td>
                </tr>
            </table>
            </Wrapper>
        </CategoryContainer>
    )
}

export default CategoryRow