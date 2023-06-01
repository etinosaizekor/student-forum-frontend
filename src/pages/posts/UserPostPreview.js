import { useDispatch, useSelector } from 'react-redux';
import { fetchUserQuestions } from '../../actions/userQuestionAction';
import PostPreview from './PostPreview';
import { useEffect } from 'react';

function UserPostPreview() {
    const dispatch = useDispatch();
    const { questions } = useSelector((state) => state.userQuestions);
    const { userDetails } = useSelector(state => state.userDetails);
    const { userId } = userDetails || {}; // Destructure userId with a default value of an empty object

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserQuestions(userId));
        }
    }, [dispatch, userId]);

    return (
        <PostPreview
            questions={questions}
        />
    );
}

export default UserPostPreview;
