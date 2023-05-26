import UserPreview from "./UserPreview";
import Profile from "../../components/Profile";
import styled from "styled-components";
import ReplyTextArea from "./ReplyTextArea";

const CommentContent = styled.div`
    margin-left: 65px;
    margin-bottom: 10px;
`

function Comment({ commentId, commentText, onReplyAdded }) {

    return (
        <>
            <UserPreview>
                <Profile src={require('../../assets/prof.jpg')} />
                <h6 style={{ margin: 0 }}>James Walters</h6>
            </UserPreview>
            <CommentContent>
                <p style={{ marginBottom: 6 }}>{commentText}</p>
                <ReplyTextArea
                    id={commentId}
                    onReplyAdded={onReplyAdded}
                />
            </CommentContent>
        </>
    );
}

export default Comment;