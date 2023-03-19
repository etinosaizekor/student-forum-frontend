import styled from "styled-components"
import SidebarItems from "./SidebarItems";
import {SidebarData} from "../Data/SidebarData";

const Container = styled.div`
    width: 14%;
    height: 100vh;
    background-color: #f8f9fa;
`

function Sidebar(){
    return(
        <Container>
            <ul className="navbar-items">
                {SidebarData.map((data, index) =>{
                    return(
                        <SidebarItems
                            key={index}
                            linkText={data.linkText}
                            path = {data.path}
                            icon = {data.icon}
                        />
                    )
                })}
            </ul>
        </Container>
    )
}

export default Sidebar;

