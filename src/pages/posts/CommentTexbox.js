import TextArea from "./TextAreaField";
import api from "../../utils/api";

function CommentTextArea({onCommentAdded, questionId}) {
  const handleSubmit = async(value) => {
    const data = {commentBody: value, userId: "123", questionId: questionId}
      try{
        await api.post('/comments/new', data)   
        onCommentAdded(data)
      } catch(err){
        console.error(err);
      }
    }
    return (
      <>
        <TextArea
          name="commentText"
          label = "Add Comment"
          id = "commment"
          onSubmit = {handleSubmit}
        />
      </>
    );
  }

  export default CommentTextArea;