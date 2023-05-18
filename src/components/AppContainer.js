import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserQuestions } from '../actions/userQuestionAction';

const AppContainer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserQuestions('123'));
  }, [dispatch]);

  return <>{children}</>;
};

export default AppContainer;
