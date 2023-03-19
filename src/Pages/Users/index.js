import styled from "styled-components";
import userData from '../../Data/UserData'
import TableRow from "./TableRow";

const UserInfo = styled.div`
    display: flex;
    margin: 50px;
`

function User(){
    return(
        <UserInfo>
            <table>
                <tr>
                    <th>Personal details</th>
                    <th>Posts</th>
                     <th>Groups</th>
                    <th>Latest post</th>
                </tr>
                {userData.map((user, index) =>{
                    return (
                        <TableRow 
                            key={index}
                            name = {user.name}
                            university = {user.university}
                            latestPost = {user.post}
                            numberOfPosts = {user.number_of_posts}
                            numberOfGroups = {user.groups}
                            imageUrl = {user.imageUrl}
                        />
                    )
                })}
            </table>

        </UserInfo>
    )
}

export default User;