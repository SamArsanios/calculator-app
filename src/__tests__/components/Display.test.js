import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Display', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Display />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the outcome that is given as a prop', () => {
    const { container } = render(<Display result="20" />);
    const show = container.querySelector('div');
    expect(show).toHaveTextContent('20');
  });
  it('renders with default value of 0', () => {
    const { container } = render(<Display />);
    const show = container.querySelector('div');
    expect(show).toHaveTextContent('0');
  })
});