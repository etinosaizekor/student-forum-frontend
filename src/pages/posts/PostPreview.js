import styled from "styled-components";

import Container from '../../components/Container';
import Profile from "../../components/Profile";
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

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin: 30px 0;
`

const PostDetails = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const User = styled.div`
    display: flex;
    gap: 10px;
`

function Post() {
    return ( 
        <div>
            <PostContainer>
                <div>
                    <h4>What is the molecular fomula for Glucose</h4>
                    <p>
                        Post Content highlight.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <Divider/>
                    <PostDetails>
                        <User>
                            <Profile
                                src={require('../../assets/prof.jpg')}
                            />
                            <p>Posted by <a href="#">James Slevester</a></p>
                        </User>
                        <p className="color-gray">5h ago</p>
                        <Comment>
                            <ChatBubbleOutlineIcon/>
                            <p>2 comments</p>
                        </Comment>
                    </PostDetails>
                </div>
            </PostContainer>
        </div>
     );
}

export default Post;