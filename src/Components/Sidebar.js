import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 12%;
    height: 100vh;
    background-color: #f8f9fa;
`

function Sidebar(){
    return(
        <Container>
            <ul className="navbar-items">
                <li><Link to="/user">User</Link></li>
                <li><Link to="#">Groups</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/newPost">Create Post</Link></li>
            </ul>
        </Container>
    )
}

export default Sidebar;

