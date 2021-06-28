import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './components/App';

// test('App', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Welcome to Our Page!/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});