import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Navigation } from './navigation';

// This test uses the Shallow Renderer (only one JSX level deep) because the
// underlying gatsby-link relies on the router being passed in the context.
// Therefore this test doesn't test the link implementation.
const renderer = new ShallowRenderer();

describe('Navigation', () => {
  it('renders correctly', () => {
    const tree = renderer.render(<Navigation />);
    expect(tree).toMatchSnapshot();
  });
});
