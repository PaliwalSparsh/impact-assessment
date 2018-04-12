// @flow
import * as React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import type { MapStateToProps } from 'react-redux';
import TabNavigator from './navigation/TabNav';
import getStore from './store';
import navReducer from './reducers/navReducer';

// From react-navigation docs
const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const addListener = createReduxBoundAddListener('root');

// App component
type Props = {
  dispatch: any,
  nav: any,
};

// With addNavigationHelpers we are overriding the navigation property of
// TabNavigator.
function AppWithNavigation(props: Props) {
  return (
    <TabNavigator
      navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
        addListener,
      })}
    />
  );
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  nav: state.nav,
});

// Connect creates a new component with stat mapped to Props
const AppWithNavigationState = connect(mapStateToProps)(AppWithNavigation);

// New store created with the React-navigation middleware
const store: Object = getStore(navReducer, middleware);

// Provider passes store to all the components with connect in the heirarchy below it.
export default function App() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}
