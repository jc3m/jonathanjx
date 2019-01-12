import { VISIT_ROOT } from './actions';

const initialState = {
  root: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VISIT_ROOT:
      return Object.assign({}, state, { root: true });
    default:
      return state;
  }
};

export default reducer;
