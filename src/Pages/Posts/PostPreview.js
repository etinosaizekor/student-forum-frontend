import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const PostContainer = styled.a`
    display: flex;
    gap: 10px;
    width: 80vw;
    padding: 40px;
    margin: 30px;
    align-items: flex-start;
    height: 250px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.09), 0 -4px 8px rgba(0, 0, 0, 0.05);;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        box-shadow: 0 10px 20px rgba(0,0,0,0.09), 0 -10px 20px rgba(0, 0, 0, 0.05);
        text-decoration: none;
        color: inherit;
    }
`
const Comment = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    padding-top:45px;
`

const UserDetails = styled.div`
    p{
        margin: 0;
        color: #808080;
        font-size: 0.9rem;
    }
    padding-top: 10px;
`

function Post() {
    return ( 
        <PostContainer>
            <div>
                <h2>Post title</h2>
                <p>
                    Post Content highlight.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <UserDetails>
                    <p>Etinosa Izekor</p>
                    <p>European University of Lefke</p>
                </UserDetails>
            </div>
            <Comment>
                <FontAwesomeIcon icon={faComment} />
                <p style={{paddingTop: "10px"}}>2 comments</p>
            </Comment>
        </PostContainer>
     );
}

export default Post;