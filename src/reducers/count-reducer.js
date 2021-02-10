//action type
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

//action creator
export const createAction = (dispatch) => ({
    increment: (value) => dispatch({ type: INCREMENT, payload: value || 1}),
    decrement: (value) => dispatch({ type: DECREMENT, payload: value || 1}),
    reset: () => dispatch({ type: RESET })
})

//counter reducer
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.payload;
            break;
        case DECREMENT:
            return state - action.payload;
            break;
        case RESET:
            return 0;
            break;
        default:
            return state;
            break;
    }
}

export default reducer;