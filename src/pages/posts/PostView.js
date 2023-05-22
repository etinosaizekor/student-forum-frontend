import styled from "styled-components";
import Container from "../../components/Container";
import Divider from "../../components/LineDivider";
import Comment from "./Comment";
import Reply from "./Reply";
import CommentTextArea from "./CommentTexbox";
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import api from "../../utils/api";

const PostViewContainer = styled(Container)`
    padding: 50px;
    height: 100%;
    width: 70vw;

    &:hover{
        box-shadow: 0 4px 8px rgba(0,0,0,0.09);
    }
`

function Question() {
    const [question, setQuestion] = useState({})
    const [comments, setComments] = useState([]);
    const [replies, setReplies] = useState([]);

    const {id} = useParams();

    const fetchQuestions = async () => {
        try {
            const response = await api.get(`/questions/${id}`);
            setQuestion(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchComments = async () => {
        try {
            const response = await api.get("/comments");
            setComments(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchReplies = async () => {
        try {
            const response = await api.get("/replies");
            setReplies(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCommentAdded = (newComment) => {
        setComments([...comments, newComment]);
      };
      

    const handleReplyAdded = (newReply) => {
        setReplies([...replies, newReply]);
    };

    useEffect(() => {
        fetchComments();
        fetchQuestions();
        fetchReplies();
    }, [handleCommentAdded, handleReplyAdded]);

    const {questionId, questionTitle, questionBody } = question;
    return (
        <PostViewContainer>
            <div>
                {questionTitle && <h4>{questionTitle}</h4>}
                {questionBody && <p>{questionBody}</p>}
                <CommentTextArea onCommentAdded={handleCommentAdded} questionId={id} />
                <Divider />
                {comments
                    .filter((comment) => comment.questionId === questionId)
                    .map((comment) => {
                        return (
                            <div key={comment.commentId}>
                                <Comment
                                    key={comment.commentId}
                                    commentId={comment.commentId}
                                    commentText={comment.commentBody}
                                    onReplyAdded={handleReplyAdded}
                                />      
                                <div>
                                    {replies
                                        .filter((reply) => reply.commentId === comment.commentId)
                                        .map((reply, index) => (
                                            <Reply key={`${reply.commentId}-${index}`} replyText={reply.replyBody} />
                                        ))}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </PostViewContainer>
    );
}

export default Question;