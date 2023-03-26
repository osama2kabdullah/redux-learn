import { TODO_FAIL, TODO_REQ, TODO_SUCCESS } from "./todosConstance";

const initialState = {
  todo: [],
  isLoading: false,
  error: null,
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_REQ:
      return { ...state, isLoading: true };
    case TODO_SUCCESS:
      return { ...state, isLoading: false, todo: action.payload, error: null };
    case TODO_FAIL:
      return { ...state, isLoading: false, error: action.payload, todo: [] };

    default:
      return state;
  }
}
