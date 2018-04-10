import React from 'react';
import NativeApp from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<NativeApp />).toJSON();
    expect(rendered).toBeTruthy();
});
