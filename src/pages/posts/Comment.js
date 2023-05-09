import UserPreview from "./UserPreview";
import Profile from "../../components/Profile";
import styled from "styled-components";
import ReplyIcon from '@mui/icons-material/Reply';
import CommentDialog from "./CommentTextbox";
import axios from "axios";

const CommentContent = styled.div`
    margin-left: 65px;
    margin-bottom: 30px;
`

function Comment() {

    const handleSubmit = (reply) => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/reply/new',
            data: reply
          })
        };

    return ( 
        <>
            <UserPreview>
                <Profile src={require('../../assets/prof.jpg')}/>
                <h6>James Walters</h6>
            </UserPreview>
            <CommentContent>
                <p>The molecular formula for Benzene is C6H6. It is a six-carbon ring molecule with alternating double bonds that give it its distinctive aromatic properties. Benzene is an important industrial chemical used in the production of a wide range of products, including plastics, rubber, and pharmaceuticals. It is also found in gasoline and other fuels, where it can contribute to air pollution if not properly controlled. Understanding the molecular structure and properties of Benzene is critical for researchers and engineers working in a variety of fields</p>
                <CommentDialog
                    Icon={ReplyIcon}
                    commentText="Reply"
                    handleSubmit={handleSubmit}
                />
            </CommentContent>   
        </>
     );
}

export default Comment;