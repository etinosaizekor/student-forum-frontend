import styled from "styled-components";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Profile from "../../components/Profile";
import Divider from "../../components/LineDivider";
import UserPreview from "./UserPreview";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


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

    return (
        <div>
            {questions.map(({ questionTitle, questionBody, questionId }) => (
                <Link key={questionId} to={`/question/${questionId}`} className='link'>
                    <PostContainer>
                        <div>
                            <h4>{questionTitle}</h4>
                            <p>{questionBody}</p>
                            <Divider />
                            <PostDetails>
                                <UserPreview>
                                    <Profile
                                        src={require('../../assets/prof.jpg')}
                                    />
                                    <p>Posted byJames Slevester</p>
                                </UserPreview>
                                <p className="color-gray">5h ago</p>
                                <Comment>
                                    <ChatBubbleOutlineIcon />
                                    <p>2 comments</p>
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