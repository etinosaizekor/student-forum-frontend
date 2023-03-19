import styled from "styled-components";
import {VscComment} from "react-icons/vsc";

import Container from '../../Components/Container';
import Profile from "../../Components/Profile";

const PostContainer = styled(Container)`
    width: 50vw;
    max-height: 400px;
    height: auto;
    margin: 30px 70px;
`

const Comment = styled.div`
    display: flex;
    gap: 10px;
    white-space: nowrap;`

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

const H3 = styled.h3`
    font-size: 1.5rem;
`

function Post() {
    return ( 
        <PostContainer>
            <div>
                <H3>What is the molecular fomula for Glucose</H3>
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
                        <p>Posted by <a>James Slevester</a></p>
                    </User>
                    <p className="color-gray">5h ago</p>
                    <Comment>
                        <VscComment
                        style={{alignSelf: 'stretch', paddingTop: '5px'}}
                        />
                        <p>2 comments</p>
                    </Comment>
                </PostDetails>
            </div>
        </PostContainer>
     );
}

export default Post;