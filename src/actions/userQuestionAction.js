import axios from "axios";

const FETCH_USER_QUESTIONS_REQUEST = 'FETCH_USER_QUESTIONS_REQUEST';
const FETCH_USER_QUESTIONS_SUCCESS = 'FETCH_USER_QUESTIONS_SUCCESS';
const FETCH_USER_QUESTIONS_FAILURE = 'FETCH_USER_QUESTIONS_FAILURE';

const fetchUserQuestionsRequest = () => ({
    type: FETCH_USER_QUESTIONS_REQUEST,
  });
  
  const fetchUserQuestionsSuccess = (questions) => ({
    type: FETCH_USER_QUESTIONS_SUCCESS,
    payload: questions,
  });
  
  const fetchUserQuestionsFailure = (error) => ({
    type: FETCH_USER_QUESTIONS_FAILURE,
    payload: error,
  });

  export const fetchUserQuestions = (userId) => async (dispatch) => {
    dispatch(fetchUserQuestionsRequest());
    try {
      const response = await axios.get(`http://localhost:5000/questions/user/${userId}`);
      dispatch(fetchUserQuestionsSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserQuestionsFailure(error.message));
    }
  };