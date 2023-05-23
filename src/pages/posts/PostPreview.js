import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Profile from "../../components/Profile";
import Divider from "../../components/LineDivider";
import UserPreview from "./UserPreview";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import api from "../../utils/api";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const PostContainer = styled(Container)`
    width: 50vw;
    max-height: 400px;
    padding: 50px;
    position: relative;
    margin-bottom: 20px;
`

const Comment = styled.div`
    display: flex;
    gap: 10px;
`

const PostDetails = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

function Post({ questions }) {
  const [userDetails, setUserDetails] = useState([]);
  const [commentsCount, setCommentsCount] = useState({});

  const fetchUserDetails = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      const userDetailsData = response.data;
      setUserDetails((prevUserDetails) => [...prevUserDetails, userDetailsData]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCommentsCount = async (questionId) => {
    try {
      const response = await api.get(`/comments/${questionId}`);
      const commentsData = response.data;
      const commentsCountData = commentsData.length;
      setCommentsCount((prevCommentsCount) => ({
        ...prevCommentsCount,
        [questionId]: commentsCountData,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      for (const { userId, questionId } of questions) {
        if (userId !== null && !userDetails.find((user) => user.userId === userId)) {
          await fetchUserDetails(userId);
        }

        if (!commentsCount[questionId]) {
          await fetchCommentsCount(questionId);
        }
      }
    };

    fetchData();
  }, [questions]);

  return (
    <div>
      {questions.map(({ questionTitle, questionBody, questionId, userId, createdAt }) => {
        const currentUserDetails = userDetails.find((user) => user.userId === userId) || {};
        const questionCommentsCount = commentsCount[questionId] || 0;
        const formattedTime = dayjs(createdAt).fromNow();

        return (
          <Link key={questionId} to={`/question/${questionId}`} className="link">
            <PostContainer>
              <div>
                <h4>{questionTitle}</h4>
                <p>{questionBody}</p>
                <Divider />
                <PostDetails>
                  <UserPreview>
                    <Profile src={require("../../assets/prof.jpg")} />
                    <p>{`${currentUserDetails.firstName} ${currentUserDetails.lastName}`}</p>
                  </UserPreview>
                  <p className="color-gray">{formattedTime}</p>
                  <Comment>
                    <ChatBubbleOutlineIcon />
                    <p>{`${questionCommentsCount} comment${questionCommentsCount !== 1 ? "s" : ""}`}</p>
                  </Comment>
                </PostDetails>
              </div>
            </PostContainer>
          </Link>
        );
      })}
    </div>
  );
}




export default Post;