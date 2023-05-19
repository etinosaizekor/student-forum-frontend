import { useDispatch, useSelector } from 'react-redux';
import { fetchUserQuestions } from '../../actions/userQuestionAction';
import PostPreview from './PostPreview';
import { useEffect } from 'react';

function UserPostPreview() {

    const dispatch = useDispatch();
    const { questions, loading, error } = useSelector((state) => state.userQuestions);
    const userId = useSelector((state) => state.userDetails.userId);

    useEffect(() => {
        dispatch(fetchUserQuestions('123'));
    }, [dispatch]);

    return (
        <PostPreview
            questions={questions}
        />
    );
}

export default UserPostPreview;