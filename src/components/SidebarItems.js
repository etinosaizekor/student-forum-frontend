import { Link } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
    display: flex;
    align-items: center;
    margin: 30px 50px 35px 0;
    gap: 10px;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

function SidebarItems({linkText, path, icon}){
    return(
        <Li>
            <Icon>{icon}</Icon>
            <Link to={path}>{linkText}</Link>
        </Li>
    )
}


export default SidebarItems;