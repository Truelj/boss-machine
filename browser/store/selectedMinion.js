const CLEAR_SELECTED_IDEA = 'CLEAR_SELECTED_IDEA';
const SET_MINION = 'SET_MINION';

export const setSelectedMinion = minion => {
  return {
    type: SET_MINION,
    minion
  }
}
//the initial state for a selected minion
const initial = {
  id: '',
  name: '',
  age: '',
  salary: '',
  weaknesses: '',
}

//the slice reducer for updating the current slice of state, which is 'selectedMinion' property of the state
export default (initialState = initial, action) => {
  switch(action.type) {
    case CLEAR_SELECTED_IDEA:
      return {};
    case SET_MINION:
      return action.minion;
    default:
      return initialState;
  }
}
