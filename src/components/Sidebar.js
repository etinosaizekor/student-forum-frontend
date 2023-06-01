import styled from "styled-components"
import SidebarItems from "./SidebarItems";
import {SidebarData} from "../data/sidebarData";

const Container = styled.div`
    width: 14%;
    height: 100vh;
    margin-top: 100px;
    background-color: rgb(244, 245, 247);
    position: fixed;
`
function Sidebar() {

  return (
    <Container>
      <ul className="navbar-items">
        {SidebarData.map((data, index) => (
          <SidebarItems
            key={index}
            linkText={data.linkText}
            path={data.path}
            icon={data.icon}
          />
        ))}
      </ul>
    </Container>
  )
}


export default Sidebar;

