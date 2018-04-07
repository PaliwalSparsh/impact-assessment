import * as Constants from '../constants';

export function increaseCount():Action {
  return {
    type: Constants.INCREASE_COUNTER,
  };
}

export function decreaseCount():Action {
  return {
    type: Constants.DECREASE_COUNTER,
  };
}
