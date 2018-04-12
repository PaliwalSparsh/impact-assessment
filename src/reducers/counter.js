import * as Constants from '../constants';

const initialState: Object = { count: 0 };

export default function reducer(state: Object = initialState, action = {}): Object {
  switch (action.type) {
    case Constants.INCREASE_COUNTER:
      return Object.assign({}, state, { count: state.count + 1 });
    case Constants.DECREASE_COUNTER:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}
