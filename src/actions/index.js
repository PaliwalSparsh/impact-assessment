import * as Constants from '../constants';

export function increaseCount() {
  return {
    type: Constants.INCREASE_COUNTER,
  };
}

export function decreaseCount() {
  return {
    type: Constants.DECREASE_COUNTER,
  };
}
