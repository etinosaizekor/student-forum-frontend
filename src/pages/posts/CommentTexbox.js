import axios from "axios";
import TextArea from "./TextAreaField";

function CommentTextArea({onCommentAdded}) {

    const handleSubmit = async(value) => {
        const data = {commentBody: value, userId: "123"}
      try{
        const response = axios({
          method: 'post',
          url: 'http://localhost:5000/comments/new',
          data: data     
        })
        onCommentAdded(data)
      } catch(err){
        console.log(err);
      }
    }
    return (
      <>
        <TextArea
          name="commentText"
          label = "Add Comment"
          onSubmit = {handleSubmit}
        />
      </>
    );
  }

  export default CommentTextArea;