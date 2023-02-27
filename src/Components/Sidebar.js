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
                <li><a href="#">User</a></li>
                <li><a href="#">Groups</a></li>
                <li><a href="#">Posts</a></li>
            </ul>
        </Container>
    )
}

export default Sidebar;

