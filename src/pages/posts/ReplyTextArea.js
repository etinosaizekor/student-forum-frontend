import TextArea  from "./TextAreaField"
import axios from "axios"

function ReplyTextArea({id, onReplyAdded}) {

    const handleSubmit = async(value) => {
        const data = { replyBody: value, commentId: id, userId: "123"}
      try{
        const response = axios({
          method: 'post',
          url: 'http://localhost:5000/replies/new',
          data: data
        })
        onReplyAdded(data)
      } catch(err){
        console.log(err);
      }
    }
    return (
      <>
        <TextArea
          name="replyText"
          label = "Reply"
          id="reply"
          onSubmit = {handleSubmit}
        />
      </>
    );
}

export default ReplyTextArea