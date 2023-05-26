import { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../utils/api";
import TableRow from "./TableRow";

const UserInfo = styled.div`
    display: flex;
`
function User() {
  const [userData, setUserData] = useState([]);

  const fetchNumberOfQuestions = async (userId) => {
    try {
      const response = await api.get(`/questions/user/${userId}`);
      if(response.data){
          return response.data.length;
      }
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const fetchLastPost = async (userId) => {
    try {
        const response = await api.get(`/questions/user/${userId}?sort=createdAt&order=desc&limit=1`);
        const lastPost = response.data[0]
        if(lastPost){
            return lastPost.questionTitle
        }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('/users');
        const users = response.data;
        
        const userDataWithAdditionalInfo = await Promise.all(
          users.map(async (user) => {
            const userId = user.userId;
            const numberOfPosts = await fetchNumberOfQuestions(userId);
            const lastPost = await fetchLastPost(userId);

            return {
              ...user,
              numberOfPosts,
              lastPost,
            };
          })
        );


        setUserData(userDataWithAdditionalInfo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserInfo>
      <table lassName="userTableData">
        <thead>
          <tr >
            <th>Personal details</th>
            <th>Posts</th>
            <th>Latest post</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <TableRow
              key={index}
              name={`${user.firstName} ${user.lastName}`}
              school={user.school}

              latestPost={user.lastPost}
              numberOfPosts={user.numberOfPosts}
              imageUrl={user.imageUrl}
            />
          ))}
        </tbody>
      </table>
    </UserInfo>
  );
}

export default User;