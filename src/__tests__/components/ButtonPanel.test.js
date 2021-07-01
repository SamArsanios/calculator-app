import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

const testing = () => { };

describe('ButtonPanel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ButtonPanel name="1" clickHandler={testing} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
