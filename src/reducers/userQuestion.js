
const initialState = {
    questions: [],
    loading: false,
    error: null,
  };

  const userQuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_QUESTIONS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_USER_QUESTIONS_SUCCESS':
        return { ...state, questions: action.payload, loading: false, error: null };
      case 'FETCH_USER_QUESTIONS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export default userQuestionsReducer