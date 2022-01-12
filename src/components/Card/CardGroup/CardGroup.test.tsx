import { render, fireEvent } from '@/utils/test-utils';
import { CardGroup } from './CardGroup';

describe('<CardGroup />', () => {
  const { container } = render(<CardGroup>CardGroup</CardGroup>);
  it('should render without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
