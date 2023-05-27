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
  const [questionData, setQuestionData] = useState([]);

  const fetchQuestionData = async () => {
    try {
      const questionDataPromises = questions.map(async (question) => {
        const { userId, questionId, createdAt } = question;
        const userDetails = await fetchUserDetails(userId);
        console.log(userDetails);
        const commentsCount = await fetchCommentsCount(questionId);
        const formattedTime = dayjs(createdAt).fromNow();

        return {
          ...question,
          userDetails,
          commentsCount,
          formattedTime,
        };
      });

      const completeQuestionData = await Promise.all(questionDataPromises);
      setQuestionData(completeQuestionData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data[
        0];
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchCommentsCount = async (questionId) => {
    try {
      const response = await api.get(`/comments/${questionId}`);
      return response.data.length;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    fetchQuestionData();
  }, [questions]);

  return (
    <div>
      {questionData.map(({ questionTitle, questionBody, questionId, userDetails, commentsCount, formattedTime }) => (
        <Link key={questionId} to={`/question/${questionId}`} className="link">
          <PostContainer>
            <div>
              <h4>{questionTitle}</h4>
              <p>{questionBody}</p>
              <Divider />
              <PostDetails>
                <UserPreview>
                  <Profile src={userDetails.imageUrl} />
                  <p>{`${userDetails?.firstName} ${userDetails?.lastName}`}</p>
                </UserPreview>
                <p className="color-gray">{formattedTime}</p>
                <Comment>
                  <ChatBubbleOutlineIcon />
                  <p>{`${commentsCount} comment${commentsCount !== 1 ? "s" : ""}`}</p>
                </Comment>
              </PostDetails>
            </div>
          </PostContainer>
        </Link>
      ))}
    </div>
  );
}




export default Post;