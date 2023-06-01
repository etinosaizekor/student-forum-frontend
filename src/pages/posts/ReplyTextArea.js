import TextArea  from "./TextAreaField"
import api from "../../utils/api"

function ReplyTextArea({id, onReplyAdded}) {

    const handleSubmit = async(value) => {
        const data = { replyBody: value, commentId: id, userId: "123"}
      try{
        await api.post('/replies/new', data)
        onReplyAdded(data)
      } catch(err){
        console.error(err);
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