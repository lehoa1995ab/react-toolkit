import { INCREASE, DECREATE } from "./constants";
export const initState = 0;
const countReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREATE:
            return state - 1;
        default:
            return state;
    };
};
export default countReducer;
