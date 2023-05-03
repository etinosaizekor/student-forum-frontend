import { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";

const CommentButton = styled.div`
    border: none;
    display: flex;
    color: #6c757d;
    gap: 10px;  
`

const ReplyTextArea = styled.textarea`
    border: 1px solid #ced4da;
    outline: none;
    transition: box-shadow 0.2s ease-in-out;
    &:focus {
        box-shadow: 0px 0px 5px 2px rgba(206, 212, 218, 0.5);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 5px;
`



function CommentDialog({handleSubmit, Icon, commentText}) {
    const [showCommentForm, setShowCommentForm] = useState(false);

    const handleCommentClick = () => {
        setShowCommentForm(true);
    }

    const handleCancelComment = () => {
        setShowCommentForm(false);
      };    
      
    return ( 
        <>
        <CommentButton onClick={handleCommentClick}>
            {Icon?  <Icon/> : null}
            <p>{commentText}</p >
            </CommentButton>
            {showCommentForm && (
                <div>
                    <ReplyTextArea name="reply" id="reply" cols="100" rows="5"></ReplyTextArea>
                    <ButtonContainer>
                        <Button variant="secondary" onClick={handleCancelComment}>Cancel</Button>
                        <Button variant="secondary">Submit</Button>
                    </ButtonContainer>
                </div>  
            )}
        </>
     );
}

export default CommentDialog;