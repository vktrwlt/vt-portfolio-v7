import { render, fireEvent } from '@/utils/test-utils';
import { Footer } from './Footer';

describe('<Footer />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Footer>Footer</Footer>);
    expect(container).toBeInTheDocument();
  });
});
