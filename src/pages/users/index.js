import styled from "styled-components";
import userData from '../../data/userData'
import TableRow from "./TableRow";

const UserInfo = styled.div`
    display: flex;
    /* margin: 40px; */
`

function User(){
    return(
        <UserInfo>
            <table>
                <thead>
                    <tr>
                        <th>Personal details</th>
                        <th>Posts</th>
                        <th>Groups</th>
                        <th>Latest post</th>
                    </tr>
                </thead>
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