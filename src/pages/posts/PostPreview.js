import styled from "styled-components";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserQuestions } from '../../actions/userQuestionAction';

import Container from '../../components/Container';
import Profile from "../../components/Profile";
import Divider from "../../components/LineDivider";
import UserPreview from "./UserPreview";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


const PostContainer = styled(Container)`
    width: 50vw;
    max-height: 400px;
    
    height: 500px;
    padding: 50px;
    position: relative;
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


function Post() {
    const dispatch = useDispatch();
    const { questions, loading, error } = useSelector((state) => state.userQuestions);
    const userId = useSelector((state) => state.userDetails.userId);
    console.log(questions);

    useEffect(() => {
        dispatch(fetchUserQuestions('123'));
    }, [dispatch]);

    return (
        <div>
            {questions.map(({questionTitle, questionBody}) => (
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
                                <p>Posted by <a href="#">James Slevester</a></p>
                            </UserPreview>
                            <p className="color-gray">5h ago</p>
                            <Comment>
                                <ChatBubbleOutlineIcon />
                                <p>2 comments</p>
                            </Comment>
                        </PostDetails>
                    </div>
                </PostContainer>

            )
            )}
        </div>
    );
}

export default Post;