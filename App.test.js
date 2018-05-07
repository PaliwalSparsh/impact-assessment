import React from 'react';
import renderer from 'react-test-renderer';

import NativeApp from './App';


it('renders without crashing', () => {
    const rendered = renderer.create(<NativeApp />).toJSON();
    expect(rendered).toBeTruthy();
});
