import styled from "styled-components";

const UserInfo = styled.div`
    display: flex;
    margin: 50px;
`

const PersonalDetails = styled.div`
    width: 20px;
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
                <tr>
                    <td>
                            <h3>Etinosa Izekor</h3>
                            <p>European University of Lefke</p>
                    </td>
                    <td>10</td>
                    <td>3</td>
                    <td>What is organic Chemistry</td>
                </tr>
                <tr>
                    <td>
                            <h3>Etinosa Izekor</h3>
                            <p>European University of Lefke</p>
                    </td>
                    <td>10</td>
                    <td>3</td>
                    <td>What is organic Chemistry</td>
                </tr>
                <tr>
                    <td>
                            <h3>Etinosa Izekor</h3>
                            <p>European University of Lefke</p>
                    </td>
                    <td>10</td>
                    <td>3</td>
                    <td>What is organic Chemistry</td>
                </tr>
                <tr>
                    <td>
                            <h3>Etinosa Izekor</h3>
                            <p>European University of Lefke</p>
                    </td>
                    <td>10</td>
                    <td>3</td>
                    <td>What is organic Chemistry</td>
                </tr>
                <tr>
                    <td>
                            <h3>Etinosa Izekor</h3>
                            <p>European University of Lefke</p>
                    </td>
                    <td>10</td>
                    <td>3</td>
                    <td>What is organic Chemistry</td>
                </tr>
            </table>

        </UserInfo>
    )
}

export default User;