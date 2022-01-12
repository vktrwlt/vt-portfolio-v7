import { render, fireEvent } from '@/utils/test-utils';
import { Nav } from './Nav';

describe('<Nav />', () => {
  const { container } = render(<Nav>Nav</Nav>);
  it('should render without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
