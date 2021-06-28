import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import LinkTo from '../../components/LinkTo';

describe('LinkTo', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<LinkTo />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});