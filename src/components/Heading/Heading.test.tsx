import { render, fireEvent } from '@/utils/test-utils';
import { Heading } from './Heading';

describe('<Heading />', () => {
  const { container } = render(<Heading>Heading</Heading>);
  it('should render without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
