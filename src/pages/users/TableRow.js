import styled from "styled-components"
import ProfileIcon from "../../components/Profile"


const H3 = styled.h3`
    margin-bottom: 0;
    font-size: large;
`

const P = styled.p`
    font-size: small;
    width: 200px;
    overflow-wrap: break-word;
`

const LatestPost = styled.div`
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  hyphens: auto;

  &:after {
    content: "...";
    display: inline;
    white-space: nowrap;
  }

  &:last-child:after {
    content: "";
  }
`;

const ProfileDetails = styled.td`
    display: flex;
    gap: 10px;
`

function TableRow({name, school, latestPost, numberOfPosts, numberOfGroups, imageUrl}){

    return(
            <tr>
                <ProfileDetails>
                    <ProfileIcon 
                        src={imageUrl}
                    />
                    <div>
                        <H3>{name}</H3>
                        <P className="color-gray">{school}</P>
                    </div>
                </ProfileDetails>
                <td><h6>{numberOfPosts}</h6></td>
                <td><LatestPost>{latestPost}</LatestPost></td>
            </tr>
    )
}

export default TableRow;
