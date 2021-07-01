import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

const test = () => { };

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button name="1" clickHandler={test} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with provided name', () => {
    render(<Button name="button1" clickHandler={test} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('button1');
  });
});
