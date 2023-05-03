import styled from "styled-components";
import Container from "../../components/Container";
import Divider from "../../components/LineDivider";
import Comment from "./Comment";
import Button from "react-bootstrap/esm/Button";
import CommentDialog from "./CommentTextbox";

const PostViewContainer = styled(Container)`
    padding: 50px;
    height: 100%;
    width: 70vw;

    &:hover{
        box-shadow: 0 4px 8px rgba(0,0,0,0.09);
    }

`

function Question() {
    return (
        <PostViewContainer>
            <div>
                <h4>What is the molecular formula for Benzene</h4>
                <p>
                Post Content highlight.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>        
                <CommentDialog
                    commentText = "Add comment"
                />
                <Divider/>
                <Comment/>
            </div>
        </PostViewContainer>
    );
}

export default Question;