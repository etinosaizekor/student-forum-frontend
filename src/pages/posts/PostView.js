import styled from "styled-components";
import Container from "../../components/Container";
import Divider from "../../components/LineDivider";
import Comment from "./Comment";
import Textbox from "./TextAreaField";
import Reply from "./Reply";
import axios from "axios";
import CommentTextArea from "./CommentTexbox";
import { useState, useEffect } from 'react';

const PostViewContainer = styled(Container)`
    padding: 50px;
    height: 100%;
    width: 70vw;

    &:hover{
        box-shadow: 0 4px 8px rgba(0,0,0,0.09);
    }
`



function Question() {
    const [comments, setComments] = useState([]);
    const [replies, setReplies] = useState([]);
    var count = 0;

    const fetchComments = async () => {
        try {
            const response = await axios.get("http://localhost:5000/comments");
            setComments(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchReplies = async () => {
        try {
            const response = await axios.get("http://localhost:5000/replies");
            setReplies(response.data);
            count += 1;
            console.log("Replies Triggered! " + count);
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
        fetchReplies();
        fetchComments();
    }, []);

    return (
        <PostViewContainer>
            <div>
                <h4>What is the molecular formula for Benzene</h4>
                <p>
                    Post Content highlight. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                    aliquam quaerat voluptatem.
                </p>
                <CommentTextArea onCommentAdded={handleCommentAdded} />
                <Divider />
                {comments.map((comment) => (

                    <div key={comment.commentId}>
                        <Comment key={comment.commentId} commentId={comment.commentId} commentText={comment.commentBody} onReplyAdded={handleReplyAdded} />
                        <div>
                            {replies
                                .filter((reply) => reply.commentId === comment.commentId)
                                .map((reply, index) => {
                                    if (reply.commentId === comment.commentId) {
                                        console.log(`${reply.commentId} -${index}`);
                                        return <Reply key={`${reply.commentId}-${index}`} replyText={reply.replyBody} />;
                                    } else {
                                        return null;
                                    }
                                })}
                        </div>
                    </div>
                ))}

            </div>
        </PostViewContainer>
    );
}

export default Question;