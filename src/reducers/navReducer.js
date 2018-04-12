import TabNavigator from '../navigation/TabNav';

const initialState: Object = TabNavigator.router.getStateForAction(
  TabNavigator.router.getActionForPathAndParams('Home'),
);

export default function(state: Object = initialState, action): Object {
  const nextState: Object = TabNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
