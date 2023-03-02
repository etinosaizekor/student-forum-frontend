import styled from "styled-components"

const Container = styled.div`
    width: 12%;
    height: 100vh;
    background-color: #f8f9fa;
`

function Sidebar(){
    return(
        <Container>
            <ul className="navbar-items">
                <li><a href="/user">User</a></li>
                <li><a href="#">Groups</a></li>
                <li><a href="/posts">Posts</a></li>
                <li><a href="/newPost">Create Post</a></li>
            </ul>
        </Container>
    )
}

export default Sidebar;

