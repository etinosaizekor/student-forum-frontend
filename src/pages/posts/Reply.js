import UserPreview from "./UserPreview";
import Profile from "../../components/Profile";
import styled from "styled-components";

const ReplyContent = styled.div`
    margin-left: 60px;
    margin-bottom: 10px;
`

const ReplyContainer = styled.div`
    margin-left: 100px;
`
function Reply({ replyText }) {
    return (
        <ReplyContainer>
            <UserPreview>
                <Profile src={require('../../assets/study.png')} />
                <h6 style={{ margin: 0 }}>James Walters</h6>
            </UserPreview>
            <ReplyContent>
                <p >{replyText}</p>
            </ReplyContent>
        </ReplyContainer>   
    );
}

export default Reply;