import { render, fireEvent } from '@/utils/test-utils';
import { Hero } from './Hero';

describe('<Hero />', () => {
  const { container } = render(<Hero>Hero</Hero>);
  it('should render without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
