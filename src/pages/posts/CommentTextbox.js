import { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";
import { loggedIn } from "../../actions";

const CommentButton = styled.div`
    border: none;
    display: flex;
    color: #6c757d;
    gap: 10px;  
`

const CommentTextArea = styled.textarea`
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



function CommentDialog({handleSubmit, Icon, commentText }) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [isCommentForm, setIsCommentForm] = useState(true);

  const handleCommentClick = () => {
    setIsCommentForm(true);
    setShowCommentForm(true);
  };

  const handleReplyClick = () => {
    setIsCommentForm(false);
    setShowCommentForm(true);
  };

  const handleCancelComment = () => {
    setShowCommentForm(false);
  };

  return (
    <>
      <CommentButton onClick={commentText === "Add comment"? handleCommentClick: handleReplyClick}>
        {Icon ? <Icon /> : null}
        <p>{commentText}</p>
      </CommentButton>
      {showCommentForm && (
        <div>
          {isCommentForm ? (
            <CommentForm
              handleSubmit={handleSubmit}
              onCancel={handleCancelComment}
            />
          ) : (
            <ReplyForm
              handleSubmit={handleSubmit}
              onCancel={handleCancelComment}
            />
          )}
        </div>
      )}
    </>
  );
}

function CommentForm({ handleSubmit, onCancel }) {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    console.log("Comment baby!");
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    handleSubmit({ commentBody: comment, userId: "123" });
    setComment("");
    onCancel();
  };

  return (
    <>
      <CommentTextArea
        name="commentText"
        id="comment"
        cols="100"
        rows="5"
        value={comment}
        onChange={handleChange}
      />
      <ButtonContainer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={handleSubmitComment}>
          Submit
        </Button>
      </ButtonContainer>
    </>
  );
}

function ReplyForm({ handleSubmit, onCancel }) {
  const [reply, setReply] = useState("");

  const handleChange = (event) => {
    console.log("reply yoo!");
    setReply(event.target.value);
  };

  const handleSubmitReply = () => {
    handleSubmit({ replyBody: reply });
    setReply("");
    onCancel();
  };

  return (
    <>
      <CommentTextArea
        name="replyText"
        id="reply"
        cols="100"
        rows="5"
        value={reply}
        onChange={handleChange}
      />
      <ButtonContainer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={handleSubmitReply}>
          Submit
        </Button>
      </ButtonContainer>
    </>
  );
}

  
export default CommentDialog;