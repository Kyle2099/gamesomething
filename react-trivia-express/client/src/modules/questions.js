import axios from 'axios';

export const questionLoad = 'Loading questions!';
export const questionLoad_succeeded = 'Questions loaded!';
export const questionLoad_failed = 'Questions failed to load';

const initialState = {
    isLoading: false,
    isError: false,
    questions: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case questionLoad:
            return {
                ...state,
                isLoading: true,
                isError: false,
                questions: []
            }
        case questionLoad_succeeded:
            return {
                ...state,
                isLoading: false,
                questions: action.payload.results
            }
        case questionLoad_failed:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export const getQuestions = () => {
    return dispatch => {
        dispatch({
            type: questionLoad
        });

        axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
            .then((response) => {
                dispatch({
                    type: questionLoad_succeeded,
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: questionLoad_failed
                });
            });
    }
}